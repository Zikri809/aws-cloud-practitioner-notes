import { getStudyGuide } from "@/lib/content";
import { CircleHelp } from "lucide-react";

export const metadata = { title: "CLF-C02 study guide" };
export default async function GuidePage() {
  const { html, headings } = await getStudyGuide();
  return (
    <div className="page reader-page">
      <div className="reader-layout">
        <div className="reader-main">
          <div className="page-heading">
            <div>
              <div className="page-kicker">CLF-C02 preparation</div>
              <h1>Study guide.</h1>
              <p>
                Exam structure, domain weights, and a reading path through the
                notes.
              </p>
            </div>
          </div>
          <div className="material-notice">
            <CircleHelp size={20} />
            <p>
              Reviewed against the CLF-C02 guide on 16 October 2026. Check the{" "}
              <a
                href="https://aws.amazon.com/certification/certified-cloud-practitioner/"
                target="_blank"
                rel="noreferrer"
              >
                official AWS certification page
              </a>{" "}
              for current requirements.
            </p>
          </div>
          <article
            className="prose"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <aside className="contents-rail">
          <div className="sticky-contents">
            <h2>On this page</h2>
            <nav aria-label="Guide contents">
              {headings
                .filter((heading) => heading.level === 2)
                .map((heading) => (
                  <a key={heading.id} href={`#${heading.id}`}>
                    {heading.title}
                  </a>
                ))}
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}
