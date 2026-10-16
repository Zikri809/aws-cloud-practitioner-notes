import fs from "node:fs";
import { parseExam } from "../src/lib/content";

const first = Number(process.argv[2] ?? 1);
const last = Number(process.argv[3] ?? first);
for (let number = first; number <= last; number++) {
  const source = fs.readFileSync(
    `practice-exam/practice-exam-${number}.md`,
    "utf8",
  );
  console.log(`\nEXAM ${number}`);
  for (const question of parseExam(source)) {
    const answers = question.options.filter((option) =>
      question.answers.includes(option.key),
    );
    console.log(
      `${question.id}. ${question.prompt.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ")}\n  KEY ${answers.map((answer) => `${answer.key}: ${answer.text.replace(/\s+/g, " ")}`).join(" | ")}`,
    );
  }
}
