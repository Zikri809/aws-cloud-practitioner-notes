import { strict as assert } from "node:assert";
import { test } from "node:test";
import { gradeAnswer, recommendChapters, type CheckedResponse } from "../src/lib/study-recommendations";

test("multi-select grading requires precisely the answer set", () => {
  assert.equal(gradeAnswer(["B", "A"], ["A", "B"]), true);
  assert.equal(gradeAnswer(["A"], ["A", "B"]), false);
  assert.equal(gradeAnswer(["A", "B", "C"], ["A", "B"]), false);
});

test("recommendations use latest checked answers in the current revision", () => {
  const responses: CheckedResponse[] = Array.from({ length: 5 }, (_, i) => ({
    examSlug: "practice-exam-1", questionId: i + 1, revision: "current",
    chapterSlugs: ["iam", "iam"], correct: i > 1, checkedAt: "2026-01-01T00:00:00Z",
  }));
  responses.push({ ...responses[0], correct: true, checkedAt: "2026-01-02T00:00:00Z" });
  responses.push({ ...responses[1], revision: "old", correct: true, checkedAt: "2026-01-03T00:00:00Z" });
  responses.push({ ...responses[1], questionId: 20, chapterSlugs: ["s3"], correct: false });
  const ranked = recommendChapters(responses, "current");
  assert.deepEqual(ranked.map(({ chapterSlug }) => chapterSlug), ["iam", "s3"]);
  assert.equal(ranked[0].answered, 5);
  assert.equal(ranked[0].correct, 4);
  assert.equal(ranked[0].mistakes, 1);
  assert.equal(ranked[1].limitedEvidence, true);
});
