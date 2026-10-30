import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import { renderMarkdown } from "./content";

export const sprintMaterials = [
  { slug: "plan", href: "/final-sprint", title: "Your plan" },
  {
    slug: "comparisons",
    href: "/final-sprint/comparisons",
    title: "Service comparisons",
  },
  { slug: "drills", href: "/final-sprint/drills", title: "Recall drills" },
  { slug: "evidence", href: "/final-sprint/evidence", title: "Your evidence" },
] as const;

export const sprintAssessments = [
  "aws-skill-builder-domain-1-practice",
  "aws-skill-builder-domain-2-practice",
  "aws-skill-builder-domain-3-practice",
  "aws-skill-builder-domain-4-practice",
  "aws-skill-builder-official-pretest",
  "aws-skill-builder-official-practice-question-set",
  "aws-skill-builder-official-practice-exam",
] as const;

async function readDocument(directory: string, slug: string) {
  const source = fs.readFileSync(
    path.join(process.cwd(), directory, `${slug}.md`),
    "utf8",
  );
  const title = source.match(/^# (.+)$/m)?.[1] ?? "Final sprint";
  const rendered = await renderMarkdown(source.replace(/^# .+\r?\n/, ""));
  return {
    title,
    ...rendered,
    html: rendered.html.replaceAll("<table>", '<table tabindex="0">'),
  };
}

export const getSprintMaterial = cache(async (slug: string) => {
  if (!sprintMaterials.some((item) => item.slug === slug)) return null;
  return readDocument("final-sprint", slug);
});

export const getSprintAssessment = cache(async (slug: string) => {
  if (!sprintAssessments.some((item) => item === slug)) return null;
  return readDocument("practice-exam", slug);
});
