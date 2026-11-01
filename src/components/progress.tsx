"use client";

import { useSyncExternalStore } from "react";
import { chapters } from "@/lib/catalog";
import { quizRevision } from "@/lib/quiz-revision";
export { quizRevision } from "@/lib/quiz-revision";

export type QuizState = {
  answers: Record<string, string[]>;
  checked: string[];
  index: number;
  finished: boolean;
  attemptId?: string;
};
export type AttemptHistory = {
  id: string;
  examSlug: string;
  revision: string;
  savedAt: string;
  correct: number;
  total: number;
  answers: Record<string, string[]>;
  checked: string[];
  completed: boolean;
  imported?: boolean;
  conflictCopy?: boolean;
};
export type ConflictedAttempt = { id: string; examSlug: string; revision: string; savedAt: string; quiz: QuizState };
type Progress = {
  completed: string[];
  bookmarks: string[];
  lastRead: string | null;
  quizzes: Record<string, QuizState>;
  scores: Record<string, { correct: number; total: number; unverified?: boolean }>;
  history: AttemptHistory[];
  conflicts: ConflictedAttempt[];
  storageAvailable: boolean;
};
const empty: Progress = {
  completed: [],
  bookmarks: [],
  lastRead: null,
  quizzes: {},
  scores: {},
  history: [],
  conflicts: [],
  storageAvailable: true,
};
const guestKey = "aws-study-desk-v1";
let key = guestKey;
let snapshot = empty;
let previous: string | null | undefined;
const listeners = new Set<() => void>();

function validSlugs(value: unknown): string[] {
  return Array.isArray(value)
    ? [
        ...new Set(
          value.filter((item) =>
            chapters.some((chapter) => chapter.slug === item),
          ),
        ),
      ]
    : [];
}

function read(): Progress {
  if (typeof window === "undefined") return empty;
  try {
    const raw = localStorage.getItem(key);
    if (raw === previous) return snapshot;
    previous = raw;
    const data = raw ? JSON.parse(raw) : {};
    const quizzes: Record<string, QuizState> = {};
    for (const [slug, value] of Object.entries(
      data?.quizRevision === quizRevision ? (data?.quizzes ?? {}) : {},
    )) {
      const quiz = value as QuizState;
      if (
        /^practice-exam-\d+$/.test(slug) &&
        quiz &&
        Number.isInteger(quiz.index) &&
        quiz.index >= 0 &&
        Array.isArray(quiz.checked) &&
        quiz.checked.every((id) => typeof id === "string") &&
        quiz.answers &&
        typeof quiz.answers === "object" &&
        Object.values(quiz.answers).every(
          (answer) =>
            Array.isArray(answer) &&
            answer.every((letter) => /^[A-F]$/.test(letter)),
        )
      ) {
        quizzes[slug] = { ...quiz, finished: quiz.finished === true };
      }
    }
    const scores: Progress["scores"] = {};
    for (const [slug, value] of Object.entries(
      data?.quizRevision === quizRevision ? (data?.scores ?? {}) : {},
    )) {
      const score = value as Progress["scores"][string];
      if (
        score &&
        Number.isInteger(score.correct) &&
        Number.isInteger(score.total) &&
        score.total > 0 &&
        score.correct >= 0 &&
        score.correct <= score.total
      )
        scores[slug] = score;
    }
    snapshot = {
      completed: validSlugs(data?.completed),
      bookmarks: validSlugs(data?.bookmarks),
      lastRead: validSlugs([data?.lastRead])[0] ?? null,
      quizzes,
      scores,
      history: Array.isArray(data?.history) ? data.history.filter((item: AttemptHistory) =>
        item && typeof item.id === "string" && /^practice-exam-\d+$/.test(item.examSlug) &&
        typeof item.revision === "string" && typeof item.savedAt === "string" &&
        Number.isInteger(item.correct) && Number.isInteger(item.total) &&
        item.correct >= 0 && item.total > 0 && item.correct <= item.total &&
        Array.isArray(item.checked) && item.checked.every((id) => typeof id === "string") &&
        item.answers && typeof item.answers === "object" && Object.values(item.answers).every((answer) =>
          Array.isArray(answer) && answer.every((letter) => /^[A-F]$/.test(letter)))
      ) : [],
      conflicts: Array.isArray(data?.conflicts) ? data.conflicts.filter((item: ConflictedAttempt) =>
        item && typeof item.id === "string" && /^practice-exam-\d+$/.test(item.examSlug) &&
        typeof item.revision === "string" && typeof item.savedAt === "string" && item.quiz &&
        Number.isInteger(item.quiz.index) && item.quiz.index >= 0 && Array.isArray(item.quiz.checked) &&
        item.quiz.checked.every((id) => typeof id === "string") && item.quiz.answers &&
        typeof item.quiz.answers === "object" && Object.values(item.quiz.answers).every((answer) =>
          Array.isArray(answer) && answer.every((letter) => /^[A-F]$/.test(letter)))
      ) : [],
      storageAvailable: true,
    };
  } catch {
    previous = undefined;
    if (snapshot.storageAvailable)
      snapshot = { ...snapshot, storageAvailable: false };
  }
  return snapshot;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

export function updateProgress(update: (current: Progress) => Progress) {
  snapshot = update(read());
  try {
    const raw = JSON.stringify({ ...snapshot, quizRevision });
    localStorage.setItem(key, raw);
    previous = raw;
  } catch {
    snapshot = { ...snapshot, storageAvailable: false };
  }
  listeners.forEach((listener) => listener());
  window.dispatchEvent(new Event("study-progress-changed"));
}

export function selectProgressAccount(userId: string | null) {
  key = userId ? `${guestKey}:account:${userId}` : guestKey;
  previous = undefined;
  snapshot = empty;
  listeners.forEach((listener) => listener());
}

export function getProgressStorageKey() {
  return key;
}

export function reloadProgress() {
  previous = undefined;
  listeners.forEach((listener) => listener());
}

export function useProgress() {
  return useSyncExternalStore(subscribe, read, () => empty);
}

export function StorageNotice() {
  const { storageAvailable } = useProgress();
  return storageAvailable ? null : (
    <div className="storage-notice" role="status">
      Browser storage is unavailable or contains unreadable data. Progress will
      last for this session only.
    </div>
  );
}
