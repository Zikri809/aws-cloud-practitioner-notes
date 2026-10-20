import { readFile, readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";

const studyRoot = process.argv[2];
if (!studyRoot)
  throw new Error(
    'Usage: node scripts/import-course-notes.mjs "path/to/AWS Study"',
  );
const packRoot = path.join(studyRoot, "Exam Domain Focus");
const primary = {
  1.1: "cloud_computing",
  1.2: "architecting_and_ecosystem",
  1.3: "other_aws_services",
  1.4: "cloud_computing",
  2.1: "cloud_computing",
  2.2: "security_compliance",
  2.3: "iam",
  2.4: "security_compliance",
  3.1: "deploying",
  3.2: "global_infrastructure",
  3.3: "other_compute",
  3.4: "databases",
  3.5: "vpc",
  3.6: "s3",
  3.7: "machine_learning",
  3.8: "other_aws_services",
  4.1: "ec2",
  4.2: "account_management_billing_support",
  4.3: "account_management_billing_support",
};

function destination(task, heading) {
  const section = Number(heading.match(/^(\d+)\./)?.[1]);
  if (task === "2.2") {
    if ([3, 4].includes(section)) return "cloud_monitoring";
    if ([7, 8].includes(section)) return "account_management_billing_support";
  }
  if (
    task === "2.3" &&
    (section === 4 || heading === "Exam requirements and service choices")
  )
    return "advanced_identity";
  if (task === "3.3") {
    if ([1, 2].includes(section)) return "ec2";
    if ([9, 10, 11].includes(section)) return "elb_asg";
  }
  if (task === "3.6") {
    if ([1, 2, 3, 9, 10].includes(section)) return "ec2_storage";
    if ([11, 12].includes(section)) return "other_aws_services";
  }
  if (task === "3.7") {
    if (section === 5 || heading === "Further distinctions") return "databases";
    if ([6, 7].includes(section)) return "cloud_integration";
  }
  if (task === "3.8") {
    if (section === 1) return "cloud_integration";
    if (section === 2) return "deploying";
  }
  return primary[task];
}

const moduleUrls = new Map();
const taskTitles = new Map();
function taskAnchor(task) {
  return `exam-task-${task.replace(".", "")}-${taskTitles
    .get(task)
    .toLowerCase()
    .replace(/[^a-z0-9 _-]/g, "")
    .replaceAll(" ", "-")}`;
}
for (const dir of await readdir(studyRoot)) {
  const number = dir.match(/^Module (\d+)/)?.[1];
  if (!number) continue;
  const index = await readFile(
    path.join(studyRoot, dir, "sources/Source-Index.md"),
    "utf8",
  );
  moduleUrls.set(
    Number(number),
    index.match(/https:\/\/www\.coursera\.org\/[^)\s]+/)?.[0],
  );
}

function publicText(text, task, target) {
  return text
    .replace(/^\[Study index\].*$/gm, "")
    .replace(/\[([^\]]+)\]\(<?([^)>\n]+)>?\)/g, (link, label, raw) => {
      let href = raw;
      try {
        href = decodeURIComponent(raw);
      } catch {
        /* Preserve non-encoded URLs. */
      }
      const moduleMatch = href.match(/Module (\d+)/);
      if (moduleMatch) {
        if (href.includes("03-Practice-Questions"))
          return "[community practice sets](/practice)";
        if (
          href.includes("02-Quick-Revision") ||
          href.includes("04-Flashcards")
        )
          return `[chapter reference notes](/notes/${target}#reference-notes)`;
        return `[${label} (course background)](${moduleUrls.get(Number(moduleMatch[1]))})`;
      }
      if (href.includes("Task ")) {
        const id = href.match(/Task (\d\.\d)/)?.[1];
        if (!primary[id]) throw new Error(`Unknown task link: ${href}`);
        return `[${label}](/notes/${primary[id]}#${taskAnchor(id)})`;
      }
      if (/^(https?:|mailto:|#|\/)/.test(href)) {
        if (href === "#exam-requirements-and-service-choices")
          return `[${label}](#${taskAnchor(task)})`;
        return link;
      }
      throw new Error(`Unmapped local link: ${href}`);
    })
    .replace(/\*Source: /g, "*Adapted study material; ")
    .replace(
      /The review expects recovering lost IAM administrator permissions and closing an AWS account\./g,
      "Recovering lost IAM administrator permissions and closing an AWS account are examples of sensitive account administration.",
    )
    .replace(
      /Choose Application Load Balancer for the native WAF association in this question\./g,
      "Application Load Balancer supports native WAF association for HTTP(S) workloads.",
    )
    .replace(
      /For the Dedicated Host reservation payment choices in the review, All Upfront provides the largest discount\./g,
      "Within an equivalent Dedicated Host reservation term, compare All Upfront, Partial Upfront, and No Upfront payment options.",
    )
    .replace(
      / ?No AWS infrastructure was created while collecting this study pack\./g,
      "",
    )
    .replace(/—/g, ";")
    .trim();
}

const tasks = [];
for (const dir of (await readdir(packRoot))
  .filter((name) => name.startsWith("Domain "))
  .sort()) {
  for (const name of (await readdir(path.join(packRoot, dir)))
    .filter((name) => /^Task .*\.md$/.test(name))
    .sort()) {
    const raw = await readFile(path.join(packRoot, dir, name), "utf8");
    const task = name.match(/^Task (\d\.\d)/)[1];
    const title = raw.match(/^# Task [^:]+: (.+)/m)[1];
    taskTitles.set(task, title);
    const sections = [
      ...raw.matchAll(/^## (.+)\r?\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm),
    ]
      .filter((match) => match[1] !== "Reading route")
      .map((match) => ({
        heading: match[1],
        body: match[2],
        target: destination(task, match[1]),
      }));
    tasks.push({
      task,
      title,
      file: `${dir}/${name}`,
      sha256: createHash("sha256").update(raw).digest("hex"),
      sections,
    });
  }
}
if (tasks.length !== 19)
  throw new Error(`Expected 19 exam tasks, found ${tasks.length}`);
await mkdir("course-notes", { recursive: true });
const manifest = [];
const outputs = new Map();
for (const task of tasks) {
  for (const target of new Set(
    task.sections.map((section) => section.target),
  )) {
    const sections = task.sections.filter(
      (section) => section.target === target,
    );
    const heading = `## Exam task ${task.task}: ${task.title}`;
    const body = sections
      .map((section) => {
        const title = section.heading.replace(/^\d+\. /, "");
        const content = publicText(section.body, task.task, target).replace(
          /^(#{3,5}) /gm,
          "$1# ",
        );
        manifest.push({
          task: task.task,
          source: task.file,
          sha256: task.sha256,
          heading: section.heading,
          chapter: target,
        });
        return `### ${title}\n\n${content}`;
      })
      .join("\n\n");
    const continuation = [
      ...new Set(task.sections.map((section) => section.target)),
    ]
      .filter((slug) => slug !== target)
      .map(
        (slug) =>
          `[${slug.replaceAll("_", " ")}](/notes/${slug}#${taskAnchor(task.task)})`,
      );
    const part = `${heading}\n\n${body}${continuation.length ? `\n\nRelated explanations for this task: ${continuation.join(", ")}.` : ""}`;
    outputs.set(target, [...(outputs.get(target) ?? []), part]);
  }
}
for (const [slug, parts] of outputs) {
  const title = (await readFile(`sections/${slug}.md`, "utf8")).match(
    /^# (.+)/m,
  )[1];
  const intro =
    "Work through the explanations, examples, and service comparisons below. Use the [reference notes](#reference-notes) for revision, or follow the [exam-task reading path](/study-guide#detailed-reading-by-exam-task) to study in syllabus order.";
  await writeFile(
    `course-notes/${slug}.md`,
    `# ${title}\n\n${intro}\n\n${parts.join("\n\n")}\n\nStudy source: independently reconstructed course guides and editorial exam-task notes. Course capture: 16 October 2026; task expansion: 20 October 2026. These explanations are not an official AWS publication. Service qualifications retain their stated review dates.\n`,
  );
}
await writeFile(
  "content-review/course-section-map.json",
  `${JSON.stringify(manifest, null, 2)}\n`,
);
console.log(
  `Imported ${manifest.length} study sections from ${tasks.length} exam tasks into ${outputs.size} chapters.`,
);
