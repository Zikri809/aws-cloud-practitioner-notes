import { gradeAnswer } from "./study-recommendations";
import { quizRevision } from "./quiz-revision";

export type QuestionKey = { id: number; options: { key: string }[]; answers: string[] };
export type AnswerBank = Record<string, QuestionKey[]>;
type RecordValue = Record<string, unknown>;

function record(value: unknown): RecordValue {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Invalid progress data");
  return value as RecordValue;
}
function list(value: unknown): unknown[] {
  if (!Array.isArray(value)) throw new Error("Invalid progress list");
  return value;
}
function text(value: unknown): string {
  if (typeof value !== "string" || !value || value.length > 200) throw new Error("Invalid progress value");
  return value;
}
function validDate(value: unknown): string {
  const result = text(value);
  if (!Number.isFinite(Date.parse(result))) throw new Error("Invalid attempt date");
  return result;
}

function validateQuiz(value: unknown, questions: QuestionKey[]) {
  const data = record(value);
  const index = data.index;
  if (!Number.isInteger(index) || (index as number) < 0 || (index as number) >= questions.length) throw new Error("Invalid question position");
  const byId = new Map(questions.map((question) => [String(question.id), question]));
  const checked = list(data.checked).map(text);
  if (new Set(checked).size !== checked.length || checked.some((id) => !byId.has(id))) throw new Error("Invalid checked questions");
  const answers: Record<string, string[]> = Object.create(null);
  for (const [id, value] of Object.entries(record(data.answers))) {
    const question = byId.get(id);
    if (!question) throw new Error("Unknown question");
    const selected = list(value).map(text);
    if (new Set(selected).size !== selected.length || selected.some((key) => !question.options.some((option) => option.key === key))) throw new Error("Invalid answer option");
    answers[id] = selected;
  }
  for (const id of checked) {
    if ((answers[id] ?? []).length !== byId.get(id)!.answers.length) throw new Error("Invalid checked answer");
  }
  const finished = data.finished === true;
  if (finished && checked.length !== questions.length) throw new Error("Incomplete finished attempt");
  const correct = checked.filter((id) => gradeAnswer(answers[id] ?? [], byId.get(id)!.answers)).length;
  const attemptId = data.attemptId === undefined ? undefined : text(data.attemptId);
  return { quiz: { index: index as number, checked, answers, finished, ...(attemptId ? { attemptId } : {}) }, correct };
}

export function validateStudySnapshot(input: unknown, bank: AnswerBank, chapterSlugs: readonly string[]) {
  const data = record(input);
  if (data.quizRevision !== quizRevision) throw new Error("Question revision changed");
  const slugs = new Set(chapterSlugs);
  function chapters(value: unknown) {
    const entries = list(value).map(text);
    if (entries.some((entry) => !slugs.has(entry)) || new Set(entries).size !== entries.length) throw new Error("Invalid chapter");
    return entries;
  }
  const lastRead = data.lastRead === null ? null : text(data.lastRead);
  if (lastRead !== null && !slugs.has(lastRead)) throw new Error("Invalid last chapter");
  const quizzes: Record<string, ReturnType<typeof validateQuiz>["quiz"]> = Object.create(null);
  for (const [slug, value] of Object.entries(record(data.quizzes))) {
    if (!bank[slug]) throw new Error("Unknown practice set");
    quizzes[slug] = validateQuiz(value, bank[slug]).quiz;
  }
  const ids = new Set<string>();
  const history = list(data.history ?? []).map((item) => {
    const attempt = record(item), id = text(attempt.id), slug = text(attempt.examSlug), revision = text(attempt.revision);
    if (ids.has(id) || !bank[slug]) throw new Error("Invalid attempt");
    ids.add(id);
    const savedAt = validDate(attempt.savedAt);
    if (revision !== quizRevision) {
      if (!Number.isInteger(attempt.correct) || !Number.isInteger(attempt.total) || (attempt.correct as number) < 0 || (attempt.total as number) < 1 || (attempt.correct as number) > (attempt.total as number)) throw new Error("Invalid historical result");
      return { ...attempt, id, examSlug: slug, revision, savedAt, completed: attempt.completed === true, correct: attempt.correct as number, total: attempt.total as number };
    }
    const checked = list(attempt.checked);
    const graded = validateQuiz({ index: 0, checked, answers: attempt.answers, finished: attempt.completed === true }, bank[slug]);
    return { id, examSlug: slug, revision, savedAt, answers: graded.quiz.answers, checked: graded.quiz.checked, completed: graded.quiz.finished, correct: graded.correct, total: bank[slug].length, ...(attempt.imported === true ? { imported: true } : {}), ...(attempt.conflictCopy === true ? { conflictCopy: true } : {}) };
  });
  const conflicts = list(data.conflicts ?? []).map((item) => {
    const entry = record(item), id = text(entry.id), slug = text(entry.examSlug), revision = text(entry.revision);
    if (ids.has(id) || !bank[slug]) throw new Error("Invalid separate attempt");
    ids.add(id);
    if (revision !== quizRevision) throw new Error("Cannot validate an older separate attempt");
    return { id, examSlug: slug, revision, savedAt: validDate(entry.savedAt), quiz: validateQuiz(entry.quiz, bank[slug]).quiz };
  });
  const scores: Record<string, { correct: number; total: number; unverified?: boolean }> = Object.create(null);
  for (const [slug, value] of Object.entries(record(data.scores))) {
    const score = record(value);
    if (!bank[slug] || !Number.isInteger(score.correct) || score.total !== bank[slug].length || (score.correct as number) < 0 || (score.correct as number) > bank[slug].length) throw new Error("Invalid imported score");
    scores[slug] = { correct: score.correct as number, total: bank[slug].length, unverified: true };
  }
  for (const attempt of [...history].sort((a, b) => String(a.savedAt).localeCompare(String(b.savedAt)))) {
    if (attempt.revision === quizRevision && attempt.completed === true) scores[String(attempt.examSlug)] = { correct: Number(attempt.correct), total: Number(attempt.total) };
  }
  for (const [slug, quiz] of Object.entries(quizzes)) {
    if (quiz.finished) scores[slug] = { correct: validateQuiz(quiz, bank[slug]).correct, total: bank[slug].length };
  }
  return { completed: chapters(data.completed), bookmarks: chapters(data.bookmarks), lastRead, quizzes, scores, history, conflicts, storageAvailable: true, quizRevision };
}
