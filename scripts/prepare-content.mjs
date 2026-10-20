import { cp, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { readChapterSource } from "../src/lib/chapter-source.mjs";

await mkdir("public", { recursive: true });
await cp("images", "public/images", { recursive: true });
const files = (await readdir("sections")).filter((file) =>
  file.endsWith(".md"),
);
files.push("../study-guide.md");
const index = [];
for (const file of files) {
  const source =
    file === "../study-guide.md"
      ? await readFile("study-guide.md", "utf8")
      : readChapterSource(path.basename(file, ".md"));
  const title = source.match(/^# (.+)/m)?.[1] ?? file;
  const slug = path.basename(file, ".md");
  const text = source
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#*`_|>]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  index.push({
    title,
    href: slug === "study-guide" ? "/study-guide" : `/notes/${slug}`,
    text,
  });
}
await writeFile("public/search-index.json", JSON.stringify(index));
console.log(
  `Prepared ${files.length} searchable documents and original diagrams.`,
);
