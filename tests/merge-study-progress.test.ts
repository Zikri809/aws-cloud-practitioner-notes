import { strict as assert } from "node:assert";
import { test } from "node:test";
import { mergeStudyProgress } from "../src/lib/merge-study-progress";

const base = { quizRevision: "current", completed: ["a"], bookmarks: [], quizzes: {}, scores: {}, history: [], lastRead: "a" };

test("merges changes to separate chapters, practice sets and attempts", () => {
  const local = { ...base, completed: ["a", "b"], quizzes: { first: { index: 2 } }, history: [{ id: "local" }] };
  const remote = { ...base, completed: [], bookmarks: ["c"], quizzes: { second: { index: 1 } }, history: [{ id: "remote" }] };
  const result = mergeStudyProgress(base, local, remote);
  assert.ok(result);
  assert.deepEqual(result.completed, ["b"]);
  assert.deepEqual(result.bookmarks, ["c"]);
  assert.deepEqual(JSON.parse(JSON.stringify(result.quizzes)), { first: { index: 2 }, second: { index: 1 } });
  assert.equal((result.history as unknown[]).length, 2);
});

test("preserves a conflicting quiz in a separate recoverable copy", () => {
  const original = { ...base, quizzes: { first: { index: 0 } } };
  const merged = mergeStudyProgress(original, { ...original, quizzes: { first: { index: 1 } } }, { ...original, quizzes: { first: { index: 2 } } });
  assert.ok(merged);
  assert.equal((merged.quizzes as Record<string, { index: number }>).first.index, 2);
  assert.equal((merged.conflicts as Array<{ quiz: { index: number } }>)[0].quiz.index, 1);
});

test("refuses incompatible revisions or unknown common ancestors", () => {
  assert.equal(mergeStudyProgress(base, { ...base, quizRevision: "new" }, base), null);
  assert.equal(mergeStudyProgress(null, base, base), null);
});
