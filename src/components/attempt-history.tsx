"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { browserSupabase } from "@/lib/supabase-browser";
import { getProgressStorageKey, quizRevision, updateProgress, useProgress } from "@/components/progress";
import { gradeAnswer } from "@/lib/study-recommendations";

export function AttemptHistoryPage({ answers }: { answers: Record<string, Record<string, string[]>> }) {
  const client = browserSupabase();
  const router = useRouter();
  const [userId, setUserId] = useState<string | null | undefined>(undefined);
  const { history, quizzes, conflicts } = useProgress();
  useEffect(() => {
    if (!client) return;
    let active = true;
    let received = false;
    const { data } = client.auth.onAuthStateChange((_event, session) => {
      received = true;
      if (active) setUserId(session?.user.id ?? null);
    });
    void client.auth.getUser().then(({ data }) => {
      if (active && !received) setUserId(data.user?.id ?? null);
    });
    return () => { active = false; data.subscription.unsubscribe(); };
  }, [client]);
  const ready = Boolean(userId && getProgressStorageKey().endsWith(`:account:${userId}`));
  const ordered = ready ? [...history].sort((a, b) => b.savedAt.localeCompare(a.savedAt)) : [];
  const latest = new Map<string, { examSlug: string; questionId: string; wrong: boolean }>();
  for (const attempt of [...ordered].reverse()) {
    if (attempt.revision !== quizRevision) continue;
    for (const questionId of attempt.checked) {
      const expected = answers[attempt.examSlug]?.[questionId];
      if (expected) latest.set(`${attempt.examSlug}:${questionId}`, { examSlug: attempt.examSlug, questionId, wrong: !gradeAnswer(attempt.answers[questionId] ?? [], expected) });
    }
  }
  if (ready) for (const [examSlug, quiz] of Object.entries(quizzes)) {
    for (const questionId of quiz.checked) {
      const expected = answers[examSlug]?.[questionId];
      if (expected) latest.set(`${examSlug}:${questionId}`, { examSlug, questionId, wrong: !gradeAnswer(quiz.answers[questionId] ?? [], expected) });
    }
  }
  const mistakes = [...latest.values()].filter((item) => item.wrong);
  function restoreConflict(id: string) {
    const entry = conflicts.find((item) => item.id === id);
    if (!entry || entry.revision !== quizRevision) return;
    updateProgress((current) => {
      const active = current.quizzes[entry.examSlug];
      const keepActive = active && (active.checked.length > 0 || Object.keys(active.answers).length > 0);
      return {
        ...current,
        quizzes: { ...current.quizzes, [entry.examSlug]: { ...entry.quiz, attemptId: crypto.randomUUID() } },
        conflicts: [
          ...current.conflicts.filter((item) => item.id !== id),
          ...(keepActive ? [{ id: crypto.randomUUID(), examSlug: entry.examSlug, revision: quizRevision, savedAt: new Date().toISOString(), quiz: active }] : []),
        ],
      };
    });
    router.push(`/practice/${entry.examSlug}`);
  }
  return <div className="page">
    <div className="page-heading"><div><div className="page-kicker"><span className="orange-line" />Your practice</div><h1>Attempt history</h1><p>Review the practice sets you have completed or restarted.</p></div></div>
    {!client ? <p>Account access has not been configured for this deployment.</p> : userId === undefined ? <p>Loading your account…</p> : !userId ? <p><Link href="/account">Sign in</Link> to see your private history.</p> : !ready ? <p>Loading your progress…</p> : ordered.length === 0 ? <p>Your completed and restarted attempts will appear here.</p> : <div className="chapter-list">
      {ordered.map((attempt) => <div className="chapter-row" key={attempt.id}>
        <div className="chapter-row-text"><h2><Link href={`/practice/${attempt.examSlug}`}>{attempt.examSlug.replace("practice-exam-", "Practice exam ")}</Link></h2>
          <p>{attempt.completed ? `Completed: ${attempt.correct}/${attempt.total} correct` : `Restarted after ${attempt.checked.length} ${attempt.checked.length === 1 ? "question" : "questions"}; ${attempt.correct} correct`} · {attempt.conflictCopy ? "Separate device copy · " : ""}{attempt.imported ? "Imported · " : ""}{attempt.revision !== quizRevision ? "Earlier question revision · " : ""}{new Date(attempt.savedAt).toLocaleDateString()}</p>
        </div>
      </div>)}
    </div>}
    {ready && conflicts.length > 0 && <section className="mistake-review"><h2>Separate attempts from your devices</h2><p>Both versions were saved. Restoring one keeps your current attempt as another copy.</p><ul>{conflicts.map((item) => <li key={item.id}>{item.examSlug.replace("practice-exam-", "Practice exam ")} · {item.quiz.checked.length} checked · {new Date(item.savedAt).toLocaleString()} {item.revision === quizRevision ? <button className="quiet-link" onClick={() => restoreConflict(item.id)}>Restore attempt</button> : <span>Earlier question revision</span>}</li>)}</ul></section>}
    {ready && mistakes.length > 0 && <section className="mistake-review"><h2>Questions to revisit</h2><p>Your latest checked answer to each question was used.</p><ul>{mistakes.map((item) => <li key={`${item.examSlug}:${item.questionId}`}><Link href={`/practice/${item.examSlug}?question=${item.questionId}`}>{item.examSlug.replace("practice-exam-", "Practice exam ")} · Question {item.questionId}</Link></li>)}</ul></section>}
  </div>;
}
