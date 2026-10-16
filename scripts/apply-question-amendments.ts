import fs from "node:fs";
import { execFileSync } from "node:child_process";
import { parseExam } from "../src/lib/content";

const baseline = "c508a2e5d3e8b20000715bc30bad52ed6d4798cf";
type Amendment = {
  prompt?: string;
  options?: Record<string, string>;
  answers?: string[];
  explanation?: string;
  source?: string;
};
const amendments: Record<string, Amendment> = JSON.parse(
  fs.readFileSync("content-review/question-amendments.json", "utf8"),
);
const sources: { pattern: string; title: string; url: string }[] = JSON.parse(
  fs.readFileSync("content-review/question-sources.json", "utf8"),
);
const rename: [RegExp, string][] = [
  [
    /AWS Simple Monthly Calculator|Simple Monthly Calculator/gi,
    "AWS Pricing Calculator",
  ],
  [
    /AWS (?:Total Cost of Ownership \(TCO\)|Total Cost of Ownership|TCO) Calculator/gi,
    "AWS Migration Evaluator",
  ],
  [
    /AWS Personal Health Dashboard|Personal Health Dashboard/gi,
    "AWS Health Dashboard (your account health)",
  ],
  [
    /AWS Service Health Dashboard|Service Health Dashboard/gi,
    "AWS Health Dashboard (service health)",
  ],
  [/AWS Discussion Forums|AWS Discussion forums/gi, "AWS re:Post"],
  [/APN Technology Partners/g, "AWS Partners in the Software Path"],
  [/APN Consulting Partners/g, "AWS Partners in the Services Path"],
  [
    /AWS Partner Network Consulting Partners/g,
    "AWS Partners in the Services Path",
  ],
  [
    /AWS Partner Network Technology Partners/g,
    "AWS Partners in the Software Path",
  ],
  [
    /AWS Quick Start reference deployments/g,
    "AWS Solutions Library deployment solutions",
  ],
  [
    /AWS Server Migration Service \(SMS\)|AWS Server Migration Service/gi,
    "AWS Application Migration Service",
  ],
  [/CloudEndure Disaster Recovery/g, "AWS Elastic Disaster Recovery"],
  [/Kinesis Data Firehose/g, "Amazon Data Firehose"],
  [/Amazon Elastic Transcoder/g, "AWS Elemental MediaConvert"],
  [/U2F Security Key/g, "FIDO passkey or security key"],
  [/master account/gi, "management account"],
];
const normalize = (text: string) =>
  rename.reduce(
    (value, [pattern, replacement]) => value.replace(pattern, replacement),
    text,
  );
const changes = [];
const pending = [];
let count = 0;
for (let exam = 1; exam <= 23; exam++) {
  const file = `practice-exam/practice-exam-${exam}.md`;
  const original = execFileSync("git", ["show", `${baseline}:${file}`], {
    encoding: "utf8",
    maxBuffer: 4 * 1024 * 1024,
  });
  const questions = parseExam(original);
  const output = [
    `# Practice exam ${exam}\n\nCommunity practice material. Reviewed 16 October 2026 against AWS documentation. These are not official AWS exam questions.\n`,
  ];
  for (const originalQuestion of questions) {
    const id = `${exam}:${originalQuestion.id}`;
    const amendment = amendments[id];
    const question = structuredClone(originalQuestion);
    question.prompt = normalize(amendment?.prompt ?? question.prompt);
    question.options = question.options.map((option) => ({
      ...option,
      text: normalize(amendment?.options?.[option.key] ?? option.text),
    }));
    if (amendment?.answers) question.answers = amendment.answers;
    const support = /support|TAM|concierge|IEM|Trusted Advisor/i.test(
      question.prompt,
    );
    if (support) {
      question.prompt = question.prompt.replace(
        /\bBusiness\b(?! Support\+)(?: Support)?/g,
        "Business Support+",
      );
      question.options = question.options.map((option) => ({
        ...option,
        text: option.text.replace(
          /\bBusiness\b(?! Support\+)(?: Support)?/g,
          "Business Support+",
        ),
      }));
    }
    if (
      question.answers.length > 1 &&
      !/choose|select|pick.*two/i.test(question.prompt)
    )
      question.prompt += ` (Choose ${question.answers.length === 2 ? "TWO" : "THREE"}.)`;
    const correct = question.options
      .filter((option) => question.answers.includes(option.key))
      .map((option) => option.text)
      .join(" ");
    const source = amendment?.source
      ? (sources.find((item) => item.url === amendment.source) ?? {
          title: "AWS documentation",
          url: amendment.source,
          pattern: "",
        })
      : /shared responsibility|fully inherit|AWS Compliance program/i.test(
            question.prompt,
          )
        ? {
            title: "AWS shared responsibility model",
            url: "https://aws.amazon.com/compliance/shared-responsibility-model/",
            pattern: "",
          }
        : (sources.find((item) =>
            new RegExp(item.pattern, "i").test(correct),
          ) ??
          sources.find((item) =>
            new RegExp(item.pattern, "i").test(question.prompt),
          ));
    if (!source) throw new Error(`No AWS source for ${id}: ${correct}`);
    const changed =
      JSON.stringify(question) !== JSON.stringify(originalQuestion);
    if (changed || amendment)
      changes.push({
        id,
        before: originalQuestion,
        after: question,
        source: source.url,
        explanation:
          amendment?.explanation ??
          "Terminology, scope, or answer wording amended; see the cited AWS reference.",
      });
    output.push(
      `${question.id}. ${question.prompt}\n\n${question.options.map((option) => `   - ${option.key}. ${option.text.replace(/\n/g, " ")}`).join("\n")}\n\n   <details><summary>Answer</summary>\n\n   Correct answer: ${question.answers.join(", ")}\n\n${amendment?.explanation ? `   ${amendment.explanation}\n\n` : ""}   AWS documentation: [${source.title}](${source.url})\n\n   </details>\n`,
    );
    count++;
  }
  pending.push({ file, text: output.join("\n") });
}
for (const item of pending) fs.writeFileSync(item.file, item.text);
fs.writeFileSync(
  "content-review/question-review.json",
  JSON.stringify(
    {
      reviewed: "2026-10-16",
      baseline,
      questions: count,
      amendedQuestions: changes.length,
      method:
        "Reviewed all question prompts and keyed choices for dated claims and identified errors. Replaced legacy explanations with AWS documentation links. Unchanged distractors are not independently certified. This is an editorial review, not AWS validation.",
      changes,
    },
    null,
    2,
  ) + "\n",
);
console.log(
  `${count} questions, ${changes.length} amended prompts/options/keys. AWS references attached to every question.`,
);
