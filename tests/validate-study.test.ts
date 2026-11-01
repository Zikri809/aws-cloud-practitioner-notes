import { strict as assert } from "node:assert";
import { test } from "node:test";
import { validateStudySnapshot, type AnswerBank } from "../src/lib/validate-study";
import { quizRevision } from "../src/lib/quiz-revision";

const bank: AnswerBank = { "practice-exam-1": [
  { id: 1, options: [{ key: "A" }, { key: "B" }], answers: ["B"] },
  { id: 2, options: [{ key: "A" }, { key: "B" }, { key: "C" }], answers: ["A", "C"] },
] };
const quiz = { index: 0, checked: ["1", "2"], answers: { "1": ["A"], "2": ["C", "A"] }, finished: true };
const snapshot = { quizRevision, completed: [], bookmarks: [], lastRead: null, quizzes: { "practice-exam-1": quiz }, scores: { "practice-exam-1": { correct: 2, total: 2 } }, history: [{ id: "x", examSlug: "practice-exam-1", revision: quizRevision, savedAt: "2026-01-01T00:00:00Z", answers: quiz.answers, checked: quiz.checked, completed: true, correct: 2, total: 2 }], conflicts: [] };

test("server recalculates results from exact single and multiple selections", () => {
  const result = validateStudySnapshot(snapshot, bank, ["iam"]);
  assert.equal(result.history[0].correct, 1);
  assert.deepEqual(result.scores["practice-exam-1"], { correct: 1, total: 2 });
});

test("rejects unknown questions, options, duplicate choices, and incomplete results", () => {
  for (const invalid of [
    { ...quiz, checked: ["3"] },
    { ...quiz, answers: { "1": ["Z"], "2": ["A", "C"] } },
    { ...quiz, answers: { "1": ["B"], "2": ["A", "A"] } },
    { ...quiz, checked: ["1"] },
  ]) assert.throws(() => validateStudySnapshot({ ...snapshot, quizzes: { "practice-exam-1": invalid } }, bank, ["iam"]));
});

test("labels a legacy score unverified when there are no answer records", () => {
  const result = validateStudySnapshot({ ...snapshot, quizzes: {}, history: [] }, bank, ["iam"]);
  assert.deepEqual(result.scores["practice-exam-1"], { correct: 2, total: 2, unverified: true });
});
