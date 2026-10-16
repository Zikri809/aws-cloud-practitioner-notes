import fs from "node:fs/promises";

const files = (await fs.readdir("content-review")).filter(
  (file) =>
    /\.json$/.test(file) &&
    !["question-review.json", "reference-check.json"].includes(file),
);
const text =
  (
    await Promise.all(
      files.map((file) => fs.readFile(`content-review/${file}`, "utf8")),
    )
  ).join("\n") +
  (await fs.readFile("study-guide.md", "utf8")) +
  (
    await Promise.all(
      (await fs.readdir("sections"))
        .filter((file) => file.endsWith(".md"))
        .map((file) => fs.readFile(`sections/${file}`, "utf8")),
    )
  ).join("\n");
const urls = [
  ...new Set(
    text.match(
      /https:\/\/(?:docs\.aws\.amazon\.com|aws\.amazon\.com|repost\.aws|calculator\.aws)[^\s"\\)>]+/g,
    ),
  ),
].sort();
const results = [];
for (let index = 0; index < urls.length; index += 8) {
  await Promise.all(
    urls.slice(index, index + 8).map(async (url) => {
      try {
        const response = await fetch(url, {
          signal: AbortSignal.timeout(25000),
        });
        const html = await response.text();
        const title =
          html
            .match(/<title>([\s\S]*?)<\/title>/i)?.[1]
            ?.replace(/\s+/g, " ") ?? "";
        const result = {
          url,
          status: response.status,
          finalUrl: response.url,
          title,
        };
        results.push(result);
        if (
          !response.ok ||
          /404|page not found|Amazon Web Services Documentation$/i.test(title)
        )
          console.log(JSON.stringify(result));
      } catch (error) {
        results.push({ url, error: String(error) });
        console.log(url, String(error));
      }
    }),
  );
}
results.sort((a, b) => a.url.localeCompare(b.url));
await fs.writeFile(
  "content-review/reference-check.json",
  JSON.stringify({ checked: new Date().toISOString(), results }, null, 2) +
    "\n",
);
console.log(
  `Checked ${results.length} AWS references. Inspect redirects and any reported failures.`,
);
