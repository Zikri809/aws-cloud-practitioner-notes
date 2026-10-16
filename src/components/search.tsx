"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Search, X, ArrowUpRight, FileText } from "lucide-react";

type Entry = { title: string; href: string; text: string };
let cachedIndex: Entry[] | null = null;

export function SearchDialog() {
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [entries, setEntries] = useState<Entry[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );
  const load = useCallback(async () => {
    if (cachedIndex) {
      setEntries(cachedIndex);
      setStatus("ready");
      return;
    }
    setStatus("loading");
    try {
      const response = await fetch("/search-index.json");
      if (!response.ok) throw new Error("Search unavailable");
      cachedIndex = (await response.json()) as Entry[];
      setEntries(cachedIndex);
      setStatus("ready");
    } catch {
      setStatus("error");
    }
  }, []);
  const open = useCallback(() => {
    dialog.current?.showModal();
    input.current?.focus();
    void load();
  }, [load]);

  useEffect(() => {
    const shortcut = (event: KeyboardEvent) => {
      const typing =
        event.target instanceof HTMLElement &&
        (event.target.matches("input, textarea, select") ||
          event.target.isContentEditable);
      if (
        ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") ||
        (event.key === "/" && !typing)
      ) {
        event.preventDefault();
        open();
      }
    };
    document.addEventListener("keydown", shortcut);
    return () => document.removeEventListener("keydown", shortcut);
  }, [open]);

  const normalized = query.toLowerCase().trim();
  const terms = normalized.split(/\s+/).filter(Boolean);
  const rank = (entry: Entry) =>
    terms.reduce(
      (score, term) =>
        score + (entry.title.toLowerCase().includes(term) ? 30 : 0),
      0,
    ) + (normalized && entry.text.toLowerCase().includes(normalized) ? 100 : 0);
  const results = entries
    .filter((entry) =>
      terms.every((term) =>
        `${entry.title} ${entry.text}`.toLowerCase().includes(term),
      ),
    )
    .sort((a, b) => rank(b) - rank(a))
    .slice(0, 12);

  return (
    <>
      <button className="search-trigger" onClick={open}>
        <Search size={17} />
        <span>Search the notes</span>
        <kbd>Ctrl K</kbd>
      </button>
      <dialog
        ref={dialog}
        className="search-dialog"
        aria-labelledby="search-title"
        onClick={(event) => {
          if (event.target === dialog.current) dialog.current.close();
        }}
      >
        <div className="search-dialog-head">
          <Search size={21} />
          <label id="search-title" className="sr-only" htmlFor="search-input">
            Search all study notes
          </label>
          <input
            ref={input}
            id="search-input"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search a service, concept, or chapter…"
            autoComplete="off"
          />
          <button
            className="icon-button"
            aria-label="Close search"
            onClick={() => dialog.current?.close()}
          >
            <X size={19} />
          </button>
        </div>
        <div className="search-results" aria-live="polite">
          {status === "loading" ? (
            <p className="empty-text">Loading the search index…</p>
          ) : status === "error" ? (
            <div className="empty-text">
              <p>Search could not load. Check your connection and try again.</p>
              <button className="button secondary" onClick={() => void load()}>
                Retry search
              </button>
            </div>
          ) : results.length === 0 ? (
            <div className="empty-text">
              <p>No notes match “{query}”.</p>
              <p>Try a service name such as S3, IAM, or CloudWatch.</p>
            </div>
          ) : (
            <>
              <p className="search-caption">
                {terms.length
                  ? `${results.length} matching chapters`
                  : "Browse the notes or type to search inside them"}
              </p>
              {results.map((entry) => {
                const index = Math.max(
                  0,
                  entry.text.toLowerCase().indexOf(terms[0] ?? "") - 70,
                );
                return (
                  <Link
                    className="search-result"
                    key={entry.href}
                    href={entry.href}
                    onClick={() => dialog.current?.close()}
                  >
                    <FileText size={18} />
                    <div>
                      <strong>{entry.title}</strong>
                      <p>
                        {index > 0 ? "…" : ""}
                        {entry.text.slice(index, index + 175)}…
                      </p>
                    </div>
                    <ArrowUpRight size={17} />
                  </Link>
                );
              })}
            </>
          )}
        </div>
        <div className="search-footer">
          Search includes chapter content and the CLF-C02 study guide.
          <span>
            <kbd>Esc</kbd> to close
          </span>
        </div>
      </dialog>
    </>
  );
}
