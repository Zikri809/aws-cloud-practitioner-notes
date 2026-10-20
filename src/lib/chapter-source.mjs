import fs from "node:fs";
import path from "node:path";

export function stripContents(source) {
  const lines = source
    .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "")
    .split(/\r?\n/);
  const firstHeading = lines.findIndex((line) => /^# /.test(line));
  const bodyStart = lines.findIndex(
    (line, index) =>
      index > firstHeading && line.trim() !== "" && !/^\s*- \[/.test(line),
  );
  return lines
    .slice(bodyStart < 0 ? firstHeading + 1 : bodyStart)
    .join("\n")
    .replace(/\n\[<img align="center"[\s\S]*$/, "");
}

export function readChapterSource(slug) {
  const reference = fs.readFileSync(
    path.join(process.cwd(), "sections", `${slug}.md`),
    "utf8",
  );
  const detailedPath = path.join(process.cwd(), "course-notes", `${slug}.md`);
  if (!fs.existsSync(detailedPath)) return reference;
  return `${fs.readFileSync(detailedPath, "utf8")}\n\n## Reference notes\n\n${stripContents(reference)}`;
}
