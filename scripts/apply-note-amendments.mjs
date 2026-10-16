import fs from "node:fs/promises";
import path from "node:path";

const files = (await fs.readdir("content-review"))
  .filter((file) => /^note-amendments.*\.json$/.test(file))
  .sort();
const amendments = (
  await Promise.all(
    files.map(async (file) =>
      JSON.parse(await fs.readFile(`content-review/${file}`, "utf8")),
    ),
  )
).flat();
const pending = [];
for (const amendment of amendments) {
  if (!/^sections\/[a-z_0-9]+\.md$/.test(amendment.file))
    throw new Error(`Unexpected source path: ${amendment.file}`);
  const original = await fs.readFile(amendment.file, "utf8");
  let content = original.replace(/\r\n/g, "\n");
  for (const change of amendment.changes) {
    if (content.includes(change.replace)) continue;
    if (change.find) {
      const count = content.split(change.find).length - 1;
      if (count === 0 && content.includes(change.replace)) continue;
      if (count !== 1)
        throw new Error(
          `${amendment.file}: expected exactly one occurrence of ${change.find.slice(0, 65)}, found ${count}`,
        );
      content = content.replace(change.find, change.replace);
    } else {
      if (content.includes(change.replace)) continue;
      const start = content.indexOf(change.start);
      const end = content.indexOf(change.end, start + change.start.length);
      if (start < 0 || end < 0)
        throw new Error(`${amendment.file}: missing section boundary`);
      content =
        content.slice(0, start) + change.replace + "\n\n" + content.slice(end);
    }
  }
  const marker = "## AWS documentation review";
  if (!content.includes(marker)) {
    content =
      content.trimEnd() +
      `\n\n${marker}\n\nReviewed 16 October 2026. ${amendment.summary}\n\n` +
      amendment.sources
        .map((source) => `- [${source.title}](${source.url})`)
        .join("\n") +
      "\n";
  }
  pending.push({
    file: path.resolve(amendment.file),
    content,
    changed: content !== original,
  });
}
for (const file of pending) {
  if (file.changed) await fs.writeFile(file.file, file.content);
}
console.log(
  `Applied source amendments to ${pending.filter((file) => file.changed).length} chapter files.`,
);
