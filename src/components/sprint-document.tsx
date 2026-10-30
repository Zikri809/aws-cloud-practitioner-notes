import Link from "next/link";
import type { Heading } from "@/lib/content";
import { sprintMaterials } from "@/lib/final-sprint";
import { SprintAnchor } from "./sprint-anchor";
import styles from "./sprint-document.module.css";

export function SprintDocument({
  title,
  html,
  headings,
  active,
  assessment = false,
}: {
  title: string;
  html: string;
  headings: Heading[];
  active?: string;
  assessment?: boolean;
}) {
  const sections = headings.filter((heading) => heading.level === 2);
  const contents = (
    <nav aria-label="Sprint page contents">
      {sections.map((heading) => (
        <a key={heading.id} href={`#${heading.id}`}>
          {heading.title}
        </a>
      ))}
    </nav>
  );
  return (
    <div className={`page reader-page ${styles.document}`}>
      <SprintAnchor />
      <div className={styles.introduction}>
        <div className="page-heading">
          <div>
            <div className="page-kicker">Personal revision · CLF-C02</div>
            <h1>{title}</h1>
            <p>
              {assessment
                ? "Your saved Skill Builder result review."
                : "A focused route through the distinctions behind your mistakes and uncertain answers."}
            </p>
          </div>
        </div>
        <nav className={styles.materials} aria-label="Final sprint materials">
          {sprintMaterials.map((material) => (
            <Link
              href={material.href}
              key={material.slug}
              aria-current={active === material.slug ? "page" : undefined}
            >
              {material.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="reader-layout">
        <div className={styles.main}>
          {assessment && (
            <div className="material-notice">
              <p>
                Preserved assessment wording. Some explanations use legacy names
                or contain inaccuracies; read the{" "}
                <Link href="/final-sprint/comparisons#corrections-to-remember">
                  study corrections
                </Link>{" "}
                alongside this review.{" "}
                <Link href="/final-sprint/evidence">Back to your evidence</Link>
                .
              </p>
            </div>
          )}
          <details className="mobile-contents">
            <summary>On this page</summary>
            {contents}
          </details>
          <article
            className="prose"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <aside className="contents-rail">
          <div className="sticky-contents">
            <h2>On this page</h2>
            {contents}
          </div>
        </aside>
      </div>
    </div>
  );
}
