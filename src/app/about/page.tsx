import Link from "next/link";

export const metadata = { title: "About & attribution" };
export default function AboutPage() {
  return (
    <div className="page about-page">
      <div className="page-heading">
        <div>
          <div className="page-kicker">About this collection</div>
          <h1>Good notes. A quieter place to study.</h1>
          <p>
            A reading workspace for the AWS Certified Cloud Practitioner study
            notes.
          </p>
        </div>
      </div>
      <article className="prose">
        <h2>This project</h2>
        <p>
          Cloudnotes is maintained in{" "}
          <a
            href="https://github.com/Zikri809/aws-cloud-practitioner-notes"
            target="_blank"
            rel="noreferrer"
          >
            Zikri809’s public repository
          </a>
          . It adds a Next.js study workspace and an AWS documentation review to
          the original collection.
        </p>
        <h2>Original work</h2>
        <p>
          The notes, diagrams, study guide, and practice questions come from{" "}
          <a
            href="https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes"
            target="_blank"
            rel="noreferrer"
          >
            Nirav Kanani’s AWS Certified Cloud Practitioner Notes
          </a>
          . The original project is distributed under the MIT License, copyright
          © 2022 kananinirav. Its license is retained in this repository.
        </p>
        <p>
          You can{" "}
          <a
            href="https://ko-fi.com/I2I51B7WW2"
            target="_blank"
            rel="noreferrer"
          >
            support the original author
          </a>{" "}
          or submit corrections to this project’s repository.
        </p>
        <h2>What this app adds</h2>
        <p>
          Search across the notes, a linked topic outline, chapter bookmarks,
          reading progress, and interactive practice sets. Content is compiled
          from the original Markdown files when the app builds.
        </p>
        <h2>About the material</h2>
        <p>
          Reviewed 16 October 2026 using AWS documentation and official AWS
          service pages. The review covers all 19 chapters and all 1,142
          question prompts and keyed choices. Identified outdated claims and
          answer errors were amended, and the guide now follows CLF-C02.
        </p>
        <p>
          Legacy explanations were replaced with AWS references. This is an
          editorial review of community material, not AWS validation of every
          distractor or a guarantee of current exam coverage. Historical
          services are labeled, and future retirement dates are distinguished
          from completed retirements. See the{" "}
          <a
            href="https://github.com/Zikri809/aws-cloud-practitioner-notes/blob/master/content-review/REVIEW.md"
            target="_blank"
            rel="noreferrer"
          >
            amendment record
          </a>{" "}
          for scope, sources, and limitations.
        </p>
        <p>
          Use the{" "}
          <a
            href="https://aws.amazon.com/certification/certified-cloud-practitioner/"
            target="_blank"
            rel="noreferrer"
          >
            official AWS Cloud Practitioner certification page
          </a>{" "}
          and current AWS documentation alongside the notes. Practice scores
          here are not official AWS scores.
        </p>
        <h2>Your data</h2>
        <p>
          Bookmarks, completed chapters, your last-opened chapter, and practice
          answers are stored locally in this browser. No account is needed. This
          app does not send that study data to a server or sync it between
          devices. Clearing your browser’s site data removes it.
        </p>
        <h2>Independent resource</h2>
        <p>
          This project is not related to, affiliated with, endorsed by, or
          authorized by Amazon. Trademarks, certification names, and product
          names belong to their respective owners.
        </p>
        <Link href="/notes" className="button primary">
          Back to the notes
        </Link>
      </article>
    </div>
  );
}
