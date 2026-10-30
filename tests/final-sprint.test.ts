import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import {
  getSprintAssessment,
  getSprintMaterial,
  sprintAssessments,
  sprintMaterials,
} from "../src/lib/final-sprint";
import { chapters } from "../src/lib/catalog";

test("sprint evidence covers every miss and uncertain correct answer with valid question anchors", async () => {
  const evidence = await getSprintMaterial("evidence");
  assert.ok(evidence);
  const expected = new Set<string>();
  for (const slug of sprintAssessments) {
    const source = fs.readFileSync(`practice-exam/${slug}.md`, "utf8");
    const parts = source.split(/(?=^### Question \d+)/m).slice(1);
    const document = await getSprintAssessment(slug);
    assert.ok(document);
    for (const part of parts) {
      const question = part.match(/^### Question (\d+)/)?.[1];
      assert.ok(question);
      if (
        part.includes("**Result:** Incorrect") ||
        /\*\*Confidence level:\*\* (Unsure|Educated guess)/.test(part)
      ) {
        const href = `/final-sprint/assessments/${slug}#question-${question}`;
        expected.add(href);
        assert.ok(evidence.html.includes(`href="${href}"`), href);
        assert.ok(document.html.includes(`id="question-${question}"`));
      }
    }
  }
  assert.equal(expected.size, 58);
  const actual = [...evidence.html.matchAll(/href="([^"#]+#question-\d+)"/g)];
  assert.deepEqual(new Set(actual.map((match) => match[1])), expected);
  assert.equal(actual.length, 58);
});

test("sprint study links resolve and all 32 drills have concealed answers", async () => {
  const documents = new Map<string, string>();
  for (const material of sprintMaterials) {
    const document = await getSprintMaterial(material.slug);
    assert.ok(document);
    documents.set(material.href, document.html);
    assert.doesNotMatch(document.html, /<h1[ >]/);
  }
  for (const slug of sprintAssessments) {
    const document = await getSprintAssessment(slug);
    assert.ok(document);
    documents.set(`/final-sprint/assessments/${slug}`, document.html);
  }
  for (const [route, html] of documents) {
    if (route.includes("/assessments/")) continue;
    for (const match of html.matchAll(/href="([^" ]+)"/g)) {
      const href = match[1];
      if (href.startsWith("https://")) continue;
      if (href === "/practice") continue;
      if (chapters.some((chapter) => href === `/notes/${chapter.slug}`))
        continue;
      const [destination, hash] = href.split("#");
      const target = documents.get(destination || route);
      assert.ok(target, `${route}: ${href}`);
      if (hash) assert.ok(target.includes(`id="${hash}"`), href);
    }
  }
  const drills = documents.get("/final-sprint/drills")!;
  assert.equal((drills.match(/<details>/g) ?? []).length, 32);
  assert.equal((drills.match(/<summary>/g) ?? []).length, 32);
  assert.doesNotMatch(drills, /<details[^>]+open/);
});

test("sprint loaders reject files outside their allowlists", async () => {
  for (const slug of ["../study-guide", "../../.env.local", "missing"]) {
    assert.equal(await getSprintMaterial(slug), null);
    assert.equal(await getSprintAssessment(slug), null);
  }
});
