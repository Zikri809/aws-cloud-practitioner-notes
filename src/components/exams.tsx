"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  RotateCcw,
  X,
  CircleHelp,
} from "lucide-react";
import type { ExamSummary, Question } from "@/lib/catalog";
import { updateProgress, useProgress, type QuizState } from "./progress";

export function ExamLibrary({ exams }: { exams: ExamSummary[] }) {
  const { scores, quizzes } = useProgress();
  const [filter, setFilter] = useState("All exams");
  const filtered = exams.filter((exam) =>
    filter === "Completed"
      ? Boolean(scores[exam.slug])
      : filter === "Not completed"
        ? !scores[exam.slug]
        : true,
  );
  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <div className="page-kicker">
            <span className="orange-line" />
            Practice, review, repeat
          </div>
          <h1>Make the concepts stick.</h1>
          <p>
            {exams.length} practice sets. Choose your answers, see the feedback,
            and learn at your own pace.
          </p>
        </div>
        <span className="completion-caption">
          {Object.keys(scores).length}/{exams.length} completed
        </span>
      </div>
      <div className="material-notice">
        <CircleHelp size={19} />
        <p>
          Reviewed 16 October 2026, with AWS references in each answer. These
          community exercises are not official AWS exam questions. Earlier
          practice attempts were reset for the amended question bank.
        </p>
      </div>
      <div className="filter-tabs standalone" aria-label="Filter exams">
        {["All exams", "Not completed", "Completed"].map((name) => (
          <button
            key={name}
            className={filter === name ? "selected" : ""}
            aria-pressed={filter === name}
            onClick={() => setFilter(name)}
          >
            {name}
          </button>
        ))}
      </div>
      {filtered.length ? (
        <div className="exam-grid">
          {filtered.map((exam) => {
            const score = scores[exam.slug];
            const quiz = quizzes[exam.slug];
            return (
              <Link
                href={`/practice/${exam.slug}`}
                className="exam-card"
                key={exam.slug}
              >
                <div className="exam-card-top">
                  <span className="exam-number">
                    Set {String(exam.number).padStart(2, "0")}
                  </span>
                  {score ? (
                    <span className="exam-status">
                      <Check size={14} />
                      Completed
                    </span>
                  ) : quiz && Object.keys(quiz.answers).length > 0 ? (
                    <span className="exam-status">In progress</span>
                  ) : (
                    <ClipboardList size={20} />
                  )}
                </div>
                <h2>{exam.title}</h2>
                <p>
                  {exam.count} questions <span>•</span> Self-paced
                </p>
                <div className="exam-card-bottom">
                  <span>
                    {score
                      ? `Last result: ${score.correct}/${score.total}`
                      : quiz && Object.keys(quiz.answers).length > 0
                        ? `${quiz.checked.length} answers checked`
                        : "Single & multiple choice"}
                  </span>
                  <ArrowRight size={18} />
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="empty-state">
          <ClipboardList size={30} />
          <h2>
            {filter === "Completed"
              ? "Your first result starts here."
              : "You’ve completed every practice set."}
          </h2>
          <p>
            {filter === "Completed"
              ? "Complete a practice set to see your score here."
              : "Revisit a set to keep the concepts fresh."}
          </p>
          <button
            className="button secondary"
            onClick={() => setFilter("All exams")}
          >
            Show all exams
          </button>
        </div>
      )}
    </div>
  );
}

const blankQuiz: QuizState = {
  answers: {},
  checked: [],
  index: 0,
  finished: false,
};
const isCorrect = (selected: string[], question: Question) =>
  selected.length === question.answers.length &&
  question.answers.every((answer) => selected.includes(answer));

export function ExamPlayer({
  exam,
  questions,
}: {
  exam: ExamSummary;
  questions: Question[];
}) {
  const { quizzes } = useProgress();
  const state = quizzes[exam.slug] ?? blankQuiz;
  const index = Math.min(state.index, questions.length - 1);
  const question = questions[index];
  const selected = state.answers[question.id] ?? [];
  const checked = state.checked.includes(String(question.id));
  const multi = question.answers.length > 1;
  const allChecked = questions.every((question) =>
    state.checked.includes(String(question.id)),
  );
  const correct = questions.filter(
    (question) =>
      state.checked.includes(String(question.id)) &&
      isCorrect(state.answers[question.id] ?? [], question),
  ).length;
  const restartDialog = useRef<HTMLDialogElement>(null);
  const questionTitle = useRef<HTMLHeadingElement>(null);
  const change = (update: (quiz: QuizState) => QuizState) =>
    updateProgress((current) => ({
      ...current,
      quizzes: {
        ...current.quizzes,
        [exam.slug]: update(current.quizzes[exam.slug] ?? blankQuiz),
      },
    }));
  const move = (target: number) => {
    change((current) => ({ ...current, index: target }));
    questionTitle.current?.focus();
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const select = (key: string) => {
    if (checked) return;
    const next = multi
      ? selected.includes(key)
        ? selected.filter((letter) => letter !== key)
        : [...selected, key]
      : [key];
    change((current) => ({
      ...current,
      answers: { ...current.answers, [question.id]: next },
    }));
  };
  const finish = () =>
    updateProgress((current) => ({
      ...current,
      quizzes: {
        ...current.quizzes,
        [exam.slug]: { ...state, finished: true },
      },
      scores: {
        ...current.scores,
        [exam.slug]: { correct, total: questions.length },
      },
    }));
  return (
    <div className="page exam-player">
      <Link href="/practice" className="back-link">
        <ChevronLeft size={15} />
        All practice exams
      </Link>
      <div className="exam-heading">
        <div>
          <div className="page-kicker">Self-paced practice</div>
          <h1>{exam.title}</h1>
        </div>
        <button
          className="button secondary"
          onClick={() => restartDialog.current?.showModal()}
        >
          <RotateCcw size={15} />
          Restart
        </button>
      </div>
      <div className="quiz-progress-label">
        <span>
          {state.checked.length} of {questions.length} checked
        </span>
        <span>Progress saved on this device</span>
      </div>
      <div className="quiz-progress-track">
        <span
          style={{
            width: `${(state.checked.length / questions.length) * 100}%`,
          }}
        />
      </div>
      {state.finished ? (
        <section className="quiz-results">
          <CheckCircle2 size={38} />
          <h2>Practice set complete.</h2>
          <p>
            You answered{" "}
            <strong>
              {correct} of {questions.length}
            </strong>{" "}
            questions correctly.
          </p>
          <div className="score-number">
            {Math.round((correct / questions.length) * 100)}
            <span>%</span>
          </div>
          <p className="muted">
            This is a practice result, not an AWS exam score.
          </p>
          <div className="result-actions">
            <button
              className="button secondary"
              onClick={() => {
                change((current) => ({
                  ...current,
                  finished: false,
                  index: 0,
                }));
              }}
            >
              Review answers
            </button>
            <Link href="/practice" className="button primary">
              Choose another set
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      ) : (
        <div className="quiz-layout">
          <section className="question-panel">
            <div className="question-meta">
              <span>
                Question {index + 1} of {questions.length}
              </span>
              <span className="subtle-tag">
                {multi
                  ? `Choose ${question.answers.length} answers`
                  : "Choose one answer"}
              </span>
            </div>
            <h2
              ref={questionTitle}
              tabIndex={-1}
              className="question-title"
              dangerouslySetInnerHTML={{ __html: question.prompt }}
            />
            <fieldset className="answer-options">
              <legend className="sr-only">
                {multi
                  ? `Select ${question.answers.length} answers`
                  : "Select one answer"}
              </legend>
              {question.options.map((option) => {
                const chosen = selected.includes(option.key);
                const right = checked && question.answers.includes(option.key);
                const wrong = checked && chosen && !right;
                return (
                  <label
                    key={option.key}
                    className={`answer-option ${chosen ? "chosen" : ""} ${right ? "right-answer" : ""} ${wrong ? "wrong-answer" : ""}`}
                  >
                    <input
                      type={multi ? "checkbox" : "radio"}
                      name={`question-${question.id}`}
                      checked={chosen}
                      disabled={checked}
                      onChange={() => select(option.key)}
                    />
                    <span className="answer-key">{option.key}</span>
                    <span
                      className="option-text"
                      dangerouslySetInnerHTML={{ __html: option.text }}
                    />
                    {right ? (
                      <Check size={19} aria-label="Correct answer" />
                    ) : wrong ? (
                      <X size={19} aria-label="Incorrect answer" />
                    ) : null}
                  </label>
                );
              })}
            </fieldset>
            {checked && (
              <div
                className={`answer-feedback ${isCorrect(selected, question) ? "correct" : "incorrect"}`}
                role="status"
              >
                <strong>
                  {isCorrect(selected, question) ? (
                    <CheckCircle2 size={18} />
                  ) : (
                    <CircleHelp size={18} />
                  )}
                  {isCorrect(selected, question)
                    ? "That’s correct."
                    : "A concept to revisit."}
                </strong>
                <p>
                  Answer key: <b>{question.answers.join(", ")}</b>.
                </p>
                {question.explanation && (
                  <div
                    className="prose explanation"
                    dangerouslySetInnerHTML={{ __html: question.explanation }}
                  />
                )}
              </div>
            )}
            <div className="quiz-actions">
              <button
                className="button secondary"
                disabled={index === 0}
                onClick={() => move(index - 1)}
              >
                <ChevronLeft size={16} />
                Previous
              </button>
              {!checked ? (
                <button
                  className="button primary"
                  disabled={selected.length !== question.answers.length}
                  onClick={() =>
                    change((current) => ({
                      ...current,
                      checked: [...current.checked, String(question.id)],
                    }))
                  }
                >
                  Check answer
                  <Check size={16} />
                </button>
              ) : index < questions.length - 1 ? (
                <button
                  className="button primary"
                  onClick={() => move(index + 1)}
                >
                  Next question
                  <ChevronRight size={16} />
                </button>
              ) : allChecked ? (
                <button className="button primary" onClick={finish}>
                  See results
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  className="button primary"
                  onClick={() =>
                    move(
                      questions.findIndex(
                        (question) =>
                          !state.checked.includes(String(question.id)),
                      ),
                    )
                  }
                >
                  Next unchecked question
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
            {allChecked && index < questions.length - 1 && (
              <button className="quiet-link results-link" onClick={finish}>
                All answers checked. See your results.
              </button>
            )}
          </section>
          <aside className="question-navigator">
            <h2>Question navigator</h2>
            <p>Jump to any question.</p>
            <div className="question-grid">
              {questions.map((item, i) => (
                <button
                  key={item.id}
                  aria-label={`Question ${i + 1}${state.checked.includes(String(item.id)) ? ", checked" : ""}`}
                  aria-current={i === index ? "step" : undefined}
                  className={`${i === index ? "current" : ""} ${state.checked.includes(String(item.id)) ? "checked" : ""}`}
                  onClick={() => move(i)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <div className="navigator-legend">
              <span>
                <i className="legend-current" />
                Current
              </span>
              <span>
                <Check size={13} />
                Checked
              </span>
            </div>
            <p className="quiz-note">
              You can leave and resume here later. Answers are locked after
              checking; restart the set to try again.
            </p>
          </aside>
        </div>
      )}
      <dialog
        ref={restartDialog}
        className="confirm-dialog"
        aria-labelledby="restart-title"
      >
        <h2 id="restart-title">Restart this practice set?</h2>
        <p>
          This clears your current answers for this set. Your last completed
          score will stay in the exam library until you finish again.
        </p>
        <div className="dialog-actions">
          <button
            autoFocus
            className="button secondary"
            onClick={() => restartDialog.current?.close()}
          >
            Keep studying
          </button>
          <button
            className="button primary"
            onClick={() => {
              change(() => blankQuiz);
              restartDialog.current?.close();
            }}
          >
            Restart set
          </button>
        </div>
      </dialog>
    </div>
  );
}
