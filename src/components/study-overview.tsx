"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  Clock3,
  ClipboardList,
  Search,
  Bookmark,
  Network,
} from "lucide-react";
import { groups, type Chapter, type ExamSummary } from "@/lib/catalog";
import { useProgress } from "./progress";

export function ChapterRows({ chapters }: { chapters: Chapter[] }) {
  const { completed, bookmarks } = useProgress();
  return (
    <div className="chapter-list">
      {chapters.map((chapter) => (
        <Link
          key={chapter.slug}
          href={`/notes/${chapter.slug}`}
          className="chapter-row"
        >
          <span
            className={`row-marker ${completed.includes(chapter.slug) ? "complete" : ""}`}
          >
            {completed.includes(chapter.slug) ? (
              <Check size={18} />
            ) : (
              <BookOpen size={18} />
            )}
          </span>
          <div className="chapter-row-text">
            <h3>
              {chapter.title}
              {bookmarks.includes(chapter.slug) && (
                <Bookmark
                  size={14}
                  className="saved-icon"
                  aria-label="Bookmarked"
                />
              )}
            </h3>
            <p>{chapter.description}</p>
          </div>
          <span className="row-time">{chapter.minutes} min</span>
          <ChevronRight size={17} className="row-arrow" />
        </Link>
      ))}
    </div>
  );
}

export function StudyOverview({
  chapters,
  exams,
}: {
  chapters: Chapter[];
  exams: ExamSummary[];
}) {
  const { completed, lastRead, scores } = useProgress();
  const current =
    chapters.find(
      (chapter) =>
        chapter.slug === lastRead && !completed.includes(chapter.slug),
    ) ??
    chapters.find((chapter) => !completed.includes(chapter.slug)) ??
    chapters[0];
  const percentage = Math.round((completed.length / chapters.length) * 100);
  const nextExam = exams.find((exam) => !scores[exam.slug]) ?? exams[0];
  return (
    <div className="page overview-page">
      <div className="page-heading">
        <div>
          <div className="page-kicker">
            <span className="orange-line" />
            Your personal study desk
          </div>
          <h1>Build your AWS foundations.</h1>
          <p>
            One concept at a time. Your notes, practice, and progress in one
            place.
          </p>
        </div>
        <Link href="/topic-map" className="button secondary desktop-action">
          <Network size={16} />
          View topic map
        </Link>
      </div>
      <div className="library-meta">
        <span>
          <BookOpen size={16} />
          <strong>{chapters.length}</strong> study chapters
        </span>
        <span>
          <ClipboardList size={16} />
          <strong>{exams.length}</strong> practice exams
        </span>
        <span>
          <Check size={16} />
          <strong>
            {exams
              .reduce((total, exam) => total + exam.count, 0)
              .toLocaleString()}
          </strong>{" "}
          practice questions
        </span>
      </div>
      <div className="dashboard-split">
        <section className="continue-panel">
          <div className="panel-topline">
            <span className="section-label">
              {lastRead ? "Continue learning" : "Your starting point"}
            </span>
            <span className="subtle-tag">{current.group}</span>
          </div>
          <div className="continue-content">
            <span className="chapter-index">
              Chapter {String(chapters.indexOf(current) + 1).padStart(2, "0")}
            </span>
            <h2>{current.title}</h2>
            <p>{current.description}</p>
            <div className="continue-bottom">
              <Link className="button primary" href={`/notes/${current.slug}`}>
                {lastRead ? "Continue reading" : "Start reading"}
                <ArrowRight size={17} />
              </Link>
              <span className="reading-time">
                <Clock3 size={15} />
                {current.minutes} min read
              </span>
            </div>
          </div>
          <div className="continue-track">
            <span style={{ width: `${percentage}%` }} />
          </div>
        </section>
        <section className="progress-panel">
          <div className="panel-topline">
            <h2 className="section-label">Your progress</h2>
            <span className="subtle-tag">On this device</span>
          </div>
          <div className="progress-visual">
            <svg
              viewBox="0 0 120 120"
              className="progress-ring"
              role="img"
              aria-label={`${percentage}% of chapters complete`}
            >
              <circle cx="60" cy="60" r="49" className="ring-track" />
              <circle
                cx="60"
                cy="60"
                r="49"
                className="ring-value"
                strokeDasharray={`${percentage * 3.079} 307.9`}
              />
              <text
                x="60"
                y="60"
                dominantBaseline="central"
                textAnchor="middle"
              >
                {percentage}
                <tspan fontSize="14">%</tspan>
              </text>
            </svg>
            <div>
              <strong>
                {completed.length} of {chapters.length}
              </strong>
              <p>chapters completed</p>
              <span>
                {completed.length === 0
                  ? "Your first chapter awaits."
                  : completed.length === chapters.length
                    ? "All chapters reviewed. Nicely done."
                    : "Keep your momentum going."}
              </span>
            </div>
          </div>
          <div className="progress-footer">
            <span className="status-dot" />
            Progress saves automatically in your browser.
          </div>
        </section>
      </div>
      <div className="dashboard-split lower-dashboard">
        <section className="chapter-section">
          <div className="section-heading">
            <div>
              <h2>Your study path</h2>
              <p>Start with the essentials, then build on them.</p>
            </div>
            <Link href="/notes">
              All chapters
              <ArrowUpRight size={16} />
            </Link>
          </div>
          <ChapterRows chapters={chapters.slice(0, 6)} />
          <Link href="/notes" className="all-chapters-link">
            View all {chapters.length} chapters
            <ArrowRight size={16} />
          </Link>
        </section>
        <aside className="overview-rail">
          <section className="practice-panel">
            <div className="panel-symbol">
              <ClipboardList size={22} />
            </div>
            <h2>
              Put your knowledge
              <br />
              to the test.
            </h2>
            <p>
              Practice at your pace, check each answer, and revisit what you
              missed.
            </p>
            <div className="exam-preview">
              <span>{nextExam.title}</span>
              <span>{nextExam.count} questions</span>
            </div>
            <Link
              href={`/practice/${nextExam.slug}`}
              className="button secondary full-width"
            >
              {scores[nextExam.slug] ? "Practice again" : "Start practice"}
              <ArrowRight size={16} />
            </Link>
            <Link href="/practice" className="quiet-link">
              Browse all {exams.length} exams
            </Link>
          </section>
          <div className="study-tip">
            <BookOpen size={18} />
            <div>
              <h3>Make the notes yours.</h3>
              <p>
                Bookmark chapters for a quick return. Mark them complete when
                you feel confident.
              </p>
            </div>
          </div>
          <div className="source-note">
            AWS documentation review: 16 October 2026.{" "}
            <Link href="/about">Sources and amendments</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export function NotesLibrary({
  chapters,
  bookmarked = false,
}: {
  chapters: Chapter[];
  bookmarked?: boolean;
}) {
  const [group, setGroup] = useState("All chapters");
  const [query, setQuery] = useState("");
  const { bookmarks, completed } = useProgress();
  const filtered = chapters.filter(
    (chapter) =>
      (!bookmarked || bookmarks.includes(chapter.slug)) &&
      (group === "All chapters" || chapter.group === group) &&
      `${chapter.title} ${chapter.description}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <div className="page library-page">
      <div className="page-heading">
        <div>
          <div className="page-kicker">
            <span className="orange-line" />
            {bookmarked ? "Saved for later" : "The complete collection"}
          </div>
          <h1>
            {bookmarked ? "Your bookmarks." : "A chapter for every concept."}
          </h1>
          <p>
            {bookmarked
              ? "Keep the chapters you want to come back to close at hand."
              : `${chapters.length} chapters, from cloud fundamentals to architecture and billing.`}
          </p>
        </div>
        <span className="completion-caption">
          {completed.length}/{chapters.length} completed
        </span>
      </div>
      <div className="library-toolbar">
        <div className="filter-tabs" aria-label="Filter chapters">
          {["All chapters", ...groups].map((name) => (
            <button
              key={name}
              aria-pressed={group === name}
              className={group === name ? "selected" : ""}
              onClick={() => setGroup(name)}
            >
              {name}
            </button>
          ))}
        </div>
        <label className="filter-search">
          <Search size={17} />
          <span className="sr-only">Filter chapter titles</span>
          <input
            placeholder="Find a chapter…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </div>
      <div className="result-count" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "chapter" : "chapters"}
        {query ? ` matching “${query}”` : ""}
      </div>
      {filtered.length ? (
        <ChapterRows chapters={filtered} />
      ) : (
        <div className="empty-state">
          <Bookmark size={28} />
          <h2>
            {bookmarked && bookmarks.length === 0
              ? "A place for your saved chapters."
              : "No chapters match this filter."}
          </h2>
          <p>
            {bookmarked && bookmarks.length === 0
              ? "Open a chapter and choose Bookmark to save it here."
              : "Try another topic or clear your search."}
          </p>
          {bookmarked && bookmarks.length === 0 ? (
            <Link href="/notes" className="button primary">
              Browse study notes
            </Link>
          ) : (
            <button
              className="button secondary"
              onClick={() => {
                setQuery("");
                setGroup("All chapters");
              }}
            >
              Clear filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}
