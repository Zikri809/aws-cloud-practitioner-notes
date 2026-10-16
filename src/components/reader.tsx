"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Bookmark,
  Check,
  ChevronLeft,
  ChevronRight,
  List,
  Clock3,
} from "lucide-react";
import { updateProgress, useProgress } from "./progress";
import type { Chapter } from "@/lib/catalog";
import type { Heading } from "@/lib/content";

export function Reader({
  chapter,
  html,
  headings,
  previous,
  next,
  index,
}: {
  chapter: Chapter;
  html: string;
  headings: Heading[];
  previous?: Chapter;
  next?: Chapter;
  index: number;
}) {
  const { bookmarks, completed } = useProgress();
  const [active, setActive] = useState("");
  const saved = bookmarks.includes(chapter.slug);
  const done = completed.includes(chapter.slug);
  useEffect(() => {
    updateProgress((current) =>
      current.lastRead === chapter.slug
        ? current
        : { ...current, lastRead: chapter.slug },
    );
  }, [chapter.slug]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-80px 0px -65% 0px" },
    );
    document
      .querySelectorAll(".prose h2, .prose h3")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [html]);
  const toggle = (field: "completed" | "bookmarks") =>
    updateProgress((current) => ({
      ...current,
      [field]: current[field].includes(chapter.slug)
        ? current[field].filter((slug) => slug !== chapter.slug)
        : [...current[field], chapter.slug],
    }));
  const contents = (
    <nav aria-label="On this page">
      {headings
        .filter((heading) => heading.level < 4)
        .map((heading) => (
          <a
            className={`${heading.level === 3 ? "nested" : ""} ${active === heading.id ? "active" : ""}`}
            href={`#${heading.id}`}
            key={heading.id}
          >
            {heading.title}
          </a>
        ))}
    </nav>
  );
  return (
    <div className="page reader-page">
      <div className="reader-layout">
        <div className="reader-main">
          <Link className="back-link" href="/notes">
            <ChevronLeft size={15} />
            All study notes
          </Link>
          <div className="reader-heading">
            <div className="page-kicker">
              Chapter {String(index + 1).padStart(2, "0")}
              <span className="kicker-divider" />
              {chapter.group}
            </div>
            <h1>{chapter.title}</h1>
            <p>{chapter.description}</p>
            <div className="reader-metadata">
              <span>
                <Clock3 size={15} />
                {chapter.minutes} min read{" "}
                <span className="estimated">(estimated)</span>
              </span>
              <span>{chapter.topics} topics</span>
            </div>
            <div className="reader-actions">
              <button
                className={`button secondary ${saved ? "is-saved" : ""}`}
                aria-pressed={saved}
                onClick={() => toggle("bookmarks")}
              >
                <Bookmark size={16} fill={saved ? "currentColor" : "none"} />
                {saved ? "Bookmarked" : "Bookmark"}
              </button>
              <button
                className={`button ${done ? "completed-button" : "secondary"}`}
                aria-pressed={done}
                onClick={() => toggle("completed")}
              >
                <Check size={17} />
                {done ? "Completed" : "Mark complete"}
              </button>
            </div>
            <span className="sr-only" aria-live="polite">
              {done ? "Chapter marked complete." : ""}{" "}
              {saved ? "Chapter bookmarked." : ""}
            </span>
          </div>
          <details className="mobile-contents">
            <summary>
              <List size={17} />
              On this page
            </summary>
            {contents}
          </details>
          <article
            className="prose"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="chapter-complete">
            <div>
              <h2>
                {done
                  ? "Chapter complete."
                  : "Feeling good about this chapter?"}
              </h2>
              <p>
                {done
                  ? "You can revisit these notes any time."
                  : "Mark it complete to track your way through the notes."}
              </p>
            </div>
            <button
              className={`button ${done ? "secondary" : "primary"}`}
              onClick={() => toggle("completed")}
            >
              <Check size={17} />
              {done ? "Mark as unread" : "Mark complete"}
            </button>
          </div>
          <div className="chapter-pagination">
            {previous ? (
              <Link href={`/notes/${previous.slug}`}>
                <span>
                  <ChevronLeft size={14} />
                  Previous chapter
                </span>
                <strong>{previous.title}</strong>
              </Link>
            ) : (
              <Link href="/notes">
                <span>
                  <ChevronLeft size={14} />
                  Back to
                </span>
                <strong>All study notes</strong>
              </Link>
            )}
            {next ? (
              <Link href={`/notes/${next.slug}`} className="next-chapter">
                <span>
                  Next chapter
                  <ChevronRight size={14} />
                </span>
                <strong>{next.title}</strong>
              </Link>
            ) : (
              <Link href="/practice" className="next-chapter">
                <span>
                  Put it into practice
                  <ChevronRight size={14} />
                </span>
                <strong>Practice exams</strong>
              </Link>
            )}
          </div>
        </div>
        <aside className="contents-rail">
          <div className="sticky-contents">
            <h2>
              <List size={16} />
              On this page
            </h2>
            {contents}
            <div className="rail-note">
              Read at your own pace.
              <br />
              Your progress stays on this device.
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
