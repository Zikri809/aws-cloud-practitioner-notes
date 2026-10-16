import fs from "node:fs";
import { parseExam } from "../src/lib/content";
for (const id of process.argv.slice(2)) {
  const [exam, number] = id.split(":").map(Number);
  const question = parseExam(
    fs.readFileSync(`practice-exam/practice-exam-${exam}.md`, "utf8"),
  )[number - 1];
  console.log(id, JSON.stringify(question));
}
