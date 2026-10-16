import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import {
  getChapter,
  getChapters,
  getExam,
  getExams,
  localHref,
  parseExam,
  renderMarkdown,
} from "../src/lib/content";

test("every source chapter appears once and all note diagrams resolve locally", async () => {
  const sourceFiles = fs
    .readdirSync("sections")
    .filter((file) => file.endsWith(".md"));
  const chapters = getChapters();
  assert.deepEqual(
    chapters.map((chapter) => `${chapter.slug}.md`).sort(),
    sourceFiles.sort(),
  );
  for (const chapter of chapters) {
    const document = await getChapter(chapter.slug);
    assert.ok(document?.html);
    assert.ok(document.headings.length > 0);
    assert.equal(
      new Set(document.headings.map((heading) => heading.id)).size,
      document.headings.length,
    );
    for (const image of document.html.matchAll(/<img[^>]*src="([^"]+)"/g)) {
      assert.ok(image[1].startsWith("/images/"), image[1]);
      assert.ok(fs.existsSync(path.join("public", image[1])), image[1]);
    }
  }
});

test("all source questions are imported with valid answer keys and no leaked answers in options", async () => {
  const exams = getExams();
  assert.equal(exams.length, 23);
  let total = 0;
  for (const exam of exams) {
    const source = fs.readFileSync(`practice-exam/${exam.slug}.md`, "utf8");
    const document = await getExam(exam.slug);
    assert.ok(document);
    assert.equal(
      document.questions.length,
      (source.match(/^\d+\.\s/gm) ?? []).length,
    );
    assert.equal(
      new Set(document.questions.map((question) => question.id)).size,
      document.count,
    );
    for (const question of document.questions) {
      assert.ok(
        question.options.length >= 4,
        `${exam.slug} question ${question.id}`,
      );
      assert.ok(question.answers.length > 0);
      assert.ok(
        question.options.every(
          (option) => !/Correct answer|<details|<summary/i.test(option.text),
        ),
      );
      assert.ok(
        question.answers.every((answer) =>
          question.options.some((option) => option.key === answer),
        ),
      );
    }
    total += document.count;
  }
  assert.equal(total, 1142);
});

test("compact and separated multi-answer keys do not consume the explanation", () => {
  for (const answer of ["AC", "Ac", "aC", "A, C", "A C"]) {
    const questions = parseExam(
      `1. Choose two.\n - A. One\n - B. Two\n - C. Three\n - D. Four\n <details><summary>Answer</summary>\n Correct Answer: ${answer}\n Explanation: Choose the right services.\n </details>`,
    );
    assert.deepEqual(questions[0].answers, ["A", "C"]);
  }
});

test("amended keys and response counts remain consistent", () => {
  for (const [exam, id, answers] of [
    [14, 19, ["C"]],
    [15, 42, ["A"]],
    [21, 11, ["D"]],
    [20, 10, ["A", "C"]],
    [19, 18, ["C"]],
    [21, 4, ["D"]],
  ] as const) {
    const questions = parseExam(
      fs.readFileSync(`practice-exam/practice-exam-${exam}.md`, "utf8"),
    );
    assert.deepEqual(questions[id - 1].answers, [...answers]);
  }
  for (const exam of getExams()) {
    const source = fs.readFileSync(`practice-exam/${exam.slug}.md`, "utf8");
    const questions = parseExam(source);
    assert.equal(
      (source.match(/AWS documentation: /g) ?? []).length,
      questions.length,
    );
    for (const question of questions) {
      const expected = question.prompt
        .match(/(?:choose|select|pick)\s+(two|three|2|3)/i)?.[1]
        ?.toLowerCase();
      if (expected)
        assert.equal(
          question.answers.length,
          /two|2/.test(expected) ? 2 : 3,
          `${exam.slug}:${question.id}`,
        );
    }
    for (const link of source.matchAll(/\]\((https?:[^)]+)\)/g)) {
      assert.ok(
        [
          "aws.amazon.com",
          "docs.aws.amazon.com",
          "repost.aws",
          "calculator.aws",
        ].includes(new URL(link[1]).hostname),
        link[1],
      );
    }
  }
});

test("repeated Markdown numbering and an inline first option preserve independent questions", () => {
  const question =
    "1. Pick one.    - A. First\n - B. Second\n - C. Third\n - D. Fourth\n <details>\n Correct Answer: A\n </details>\n";
  const result = parseExam(question + question);
  assert.deepEqual(
    result.map((item) => item.id),
    [1, 2],
  );
  assert.deepEqual(
    result[0].options.map((option) => option.key),
    ["A", "B", "C", "D"],
  );
  assert.equal(result[0].prompt, "Pick one.");
});

test("Markdown preserves tables, produces deep links, and removes executable HTML", async () => {
  const document = await renderMarkdown(
    '## Example heading\n\n| Name | Value |\n| --- | --- |\n| S3 | Storage |\n\n<script>alert(1)</script>\n<img src="../images/EBS.png" onerror="alert(1)">\n\n[a](javascript:alert)',
  );
  assert.ok(document.html.includes("<table>"));
  assert.equal(document.headings[0].id, "example-heading");
  assert.ok(!document.html.includes("<script"));
  assert.ok(!document.html.includes("onerror"));
  assert.ok(!document.html.includes("javascript:"));
  assert.ok(document.html.includes('src="/images/EBS.png"'));
});

test("legacy relative and absolute content links resolve to app routes", () => {
  assert.equal(
    localHref("../sections/iam.md#what-is-iam"),
    "/notes/iam#what-is-iam",
  );
  assert.equal(
    localHref("https://kananinirav.com/sections/ec2.html#ec2-user-data"),
    "/notes/ec2#ec2-user-data",
  );
  assert.equal(
    localHref("./images/../../images/Route_53.png", true),
    "/images/Route_53.png",
  );
  assert.equal(localHref("../practice-exam/exams.html"), "/practice");
  assert.equal(localHref("https://aws.amazon.com/"), "https://aws.amazon.com/");
});
