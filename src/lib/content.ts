import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";
import type { Root } from "hast";
import { chapters, type Chapter, type Question } from "./catalog";
import { readChapterSource, stripContents } from "./chapter-source.mjs";
export { stripContents } from "./chapter-source.mjs";

export type Heading = { id: string; title: string; level: number };

export function localHref(value: string, isImage = false): string {
  if (isImage && value.includes("images/"))
    return `/images/${value.split("images/").pop()}`;
  const local = value.replace(/^https?:\/\/kananinirav\.com\//, "/");
  if (/^(https?:|mailto:|#)/.test(local)) return local;
  const [file, hash] = local.split("#");
  const name = path.posix.basename(file).replace(/\.(md|html)$/, "");
  const suffix = hash ? `#${hash}` : "";
  if (chapters.some((chapter) => chapter.slug === name))
    return `/notes/${name}${suffix}`;
  if (/^practice-exam-\d+$/.test(name)) return `/practice/${name}${suffix}`;
  if (name === "exams") return "/practice";
  if (name === "study-guide") return `/study-guide${suffix}`;
  if (name === "mind-map-aws-ccp") return "/topic-map";
  if (name === "README" || name === "index") return "/";
  return local;
}

export async function renderMarkdown(source: string) {
  const headings: Heading[] = [];
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSanitize)
    .use(rehypeSlug)
    .use(() => (tree: Root) => {
      visit(tree, "element", (node) => {
        if (node.tagName === "a" && typeof node.properties.href === "string") {
          node.properties.href = localHref(node.properties.href);
          if (/^https?:/.test(node.properties.href as string))
            node.properties.rel = ["noreferrer"];
        }
        if (node.tagName === "img" && typeof node.properties.src === "string") {
          node.properties.src = localHref(node.properties.src, true);
          node.properties.loading = "lazy";
          node.properties.alt ||= "AWS service diagram from the original notes";
        }
        if (/^h[2-4]$/.test(node.tagName)) {
          let title = "";
          visit(node, "text", (child) => {
            title += child.value;
          });
          headings.push({
            id: String(node.properties.id),
            title,
            level: Number(node.tagName[1]),
          });
        }
      });
    })
    .use(rehypeStringify)
    .process(source);
  return { html: String(result), headings };
}

export const getChapters = cache((): Chapter[] =>
  chapters.map((chapter) => {
    const body = stripContents(readChapterSource(chapter.slug));
    return {
      ...chapter,
      minutes: Math.max(1, Math.ceil(body.split(/\s+/).length / 220)),
      topics: (body.match(/^## /gm) ?? []).length,
    };
  }),
);

export const getChapter = cache(async (slug: string) => {
  const chapter = getChapters().find((item) => item.slug === slug);
  if (!chapter) return null;
  const source = readChapterSource(slug);
  return { ...chapter, ...(await renderMarkdown(stripContents(source))) };
});

export function parseExam(source: string): Omit<Question, "explanation">[] {
  const normalized = source.replace(
    /([^\r\n])([ \t]+-[ \t]+[A-F][.)][ \t]+)/g,
    "$1\n$2",
  );
  const blocks = normalized
    .split(/(?=^\d+\.\s)/m)
    .filter((block) => /^\d+\.\s/.test(block));
  return blocks.map((block, index) => {
    const id = index + 1;
    const prompt = block
      .match(/^\d+\.\s([\s\S]*?)(?=^\s*-\s*[A-F][.)]\s)/m)?.[1]
      ?.trim();
    const options = [
      ...block.matchAll(
        /^\s*-\s*([A-F])[.)]\s+([\s\S]*?)(?=^\s*-\s*[A-F][.)]\s|\s*<details|$(?![\s\S]))/gm,
      ),
    ].map((match) => ({ key: match[1], text: match[2].trim() }));
    const answerLine =
      block.match(/Correct[ \t]+answer[ \t]*:[ \t]*([^\r\n]*)/i)?.[1] ?? "";
    const answer = answerLine
      .match(/^[* \t]*([A-F](?:[ \t,;&]*[A-F])*)/i)?.[1]
      ?.toUpperCase();
    const answers = [...new Set(answer?.match(/[A-F]/g) ?? [])].sort();
    if (
      !prompt ||
      options.length < 2 ||
      !answers.length ||
      answers.some((key) => !options.some((option) => option.key === key))
    ) {
      throw new Error(
        `Unable to parse question ${id}: prompt=${Boolean(prompt)}, options=${options.length}, answers=${answer}`,
      );
    }
    return { id, prompt, options, answers };
  });
}

export const getExams = cache(() =>
  fs
    .readdirSync(path.join(process.cwd(), "practice-exam"))
    .filter((file) => /^practice-exam-\d+\.md$/.test(file))
    .map((file) => {
      const number = Number(file.match(/(\d+)\.md$/)?.[1]);
      const source = fs.readFileSync(
        path.join(process.cwd(), "practice-exam", file),
        "utf8",
      );
      return {
        slug: file.replace(/\.md$/, ""),
        title: `Practice exam ${number}`,
        number,
        count: parseExam(source).length,
      };
    })
    .sort((a, b) => a.number - b.number),
);

export const getExam = cache(async (slug: string) => {
  const exam = getExams().find((item) => item.slug === slug);
  if (!exam) return null;
  const source = fs.readFileSync(
    path.join(process.cwd(), "practice-exam", `${slug}.md`),
    "utf8",
  );
  const blocks = source
    .split(/(?=^\d+\.\s)/m)
    .filter((block) => /^\d+\.\s/.test(block));
  const questions: Question[] = await Promise.all(
    parseExam(source).map(async (question, index) => {
      const explanation =
        blocks[index]
          .split(/Correct\s*answer\s*:[^\r\n]*/i)[1]
          ?.replace(/<\/details>[\s\S]*$/, "")
          .trim() ?? "";
      return {
        ...question,
        prompt: (await renderMarkdown(question.prompt)).html,
        options: await Promise.all(
          question.options.map(async (option) => ({
            ...option,
            text: (await renderMarkdown(option.text)).html,
          })),
        ),
        explanation: (await renderMarkdown(explanation)).html,
      };
    }),
  );
  return { ...exam, questions };
});

export const getStudyGuide = cache(async () =>
  renderMarkdown(
    stripContents(
      fs.readFileSync(path.join(process.cwd(), "study-guide.md"), "utf8"),
    ),
  ),
);
