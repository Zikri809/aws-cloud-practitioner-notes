"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="page empty-page">
      <h1>This page could not load.</h1>
      <p>
        Your saved progress is still on this device. Try opening the page again.
      </p>
      <button className="button primary" onClick={reset}>
        Try again
      </button>
    </div>
  );
}
