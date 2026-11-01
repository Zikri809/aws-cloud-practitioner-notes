# Cloudnotes · AWS Cloud Practitioner

A fast Next.js study workspace maintained by [Zikri809](https://github.com/Zikri809). Dark reading layout with orange accents, searchable chapters, bookmarks, progress, and interactive practice sets.

**[Open the app](https://aws-cloud-practitioner-notes.vercel.app)** · **[Content review](content-review/REVIEW.md)** · **[Development and deployment](DEPLOYMENT.md)**

## Study material

- 19 chapters covering cloud concepts, services, security, architecture, and costs.
- CLF-C02 guide with current domain weights and links to official objectives.
- 23 practice sets containing 1,142 community questions.
- 196 questions amended for terminology, scope, ambiguity, or incorrect answers during the 16 October 2026 review.
- AWS references in every practice answer and review references in each chapter.
- Detailed explanations from all 19 exam tasks in the course-based study pack, distributed across all 19 chapters. Includes worked examples, service comparisons, and recall prompts, followed by the existing reference notes. The study guide offers exam-task and thirteen-module reading paths. See [the course integration record](content-review/COURSE-INTEGRATION.md).

Amendments use official AWS documentation and service pages only. This is an independent editorial review, not AWS endorsement or verification of every distractor. Historical services are marked; announced future retirements are distinguished from completed ones. Read the [review scope and limitations](content-review/REVIEW.md) before relying on date-sensitive details.

## Run locally

Use Node.js 22.x.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. Production builds compile Markdown and copy diagrams locally, keeping content parsing out of the browser. Search loads a static index when opened. The notes and guest progress do not require an account. To enable account sign-in and cloud sync, set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` to the project's public values and `SUPABASE_SERVICE_ROLE_KEY` to its server-only service-role key in `.env.local`. Never put a secret or service-role key in a `NEXT_PUBLIC_` variable.

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run start
npx playwright test
```

Browser tests require Chromium: `npx playwright install chromium`.

## Content maintenance

Edit chapter Markdown under `sections/` and the guide in `study-guide.md`. Practice questions live under `practice-exam/`. See [the review record](content-review/REVIEW.md) for amendment manifests, the upstream baseline, and reconstruction commands. Rebuild after content edits. Advance the quiz revision in `src/components/progress.tsx` when question meaning or grading changes.

Bookmarks and chapter completion survive this content revision; old quiz answers and scores are reset. Guest data stays in the browser. After signing in, account progress syncs across devices; a new account can import this browser's progress. Changes to different chapters or practice sets can merge automatically. Conflicting edits to the same practice set are preserved as separate attempts that can be restored from attempt history. Cloud saves are validated and graded against the current question bank on the server. Earlier scores without available answers are labeled unverified. Topic recommendations are not available yet.

To set or reset your password, request a link on the account page and open it in the same browser and device. The link is single-use.

Detailed lesson Markdown lives in `course-notes/`. The reader places it before the matching chapter's `sections/` reference notes; search and reading-time estimates use the combined content. The committed files build without the external study archive. To regenerate after updating that archive, run `node scripts/import-course-notes.mjs "C:/Git_Repo/AWS Study"`. The importer records source hashes and section destinations in `content-review/course-section-map.json`. Review regenerated changes before publishing.

## Attribution and license

Based on [Nirav Kanani’s AWS Certified Cloud Practitioner Notes](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes), copyright © 2022 kananinirav, under the [MIT License](LICENSE). Original diagrams, license, and Git history are retained. See [ATTRIBUTION.md](ATTRIBUTION.md). This maintained repository adds the app and source-linked amendments; it does not claim sole authorship of the original material.

Independent study resource; not affiliated with or endorsed by AWS. Product and certification names belong to their respective owners.
