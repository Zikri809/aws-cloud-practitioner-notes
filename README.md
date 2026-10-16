# Cloudnotes · AWS Cloud Practitioner

A fast Next.js study workspace maintained by [Zikri809](https://github.com/Zikri809). Dark reading layout with orange accents, searchable chapters, bookmarks, browser-local progress, and interactive practice sets.

**[Open the app](https://aws-cloud-practitioner-notes.vercel.app)** · **[Content review](content-review/REVIEW.md)** · **[Development and deployment](DEPLOYMENT.md)**

## Study material

- 19 chapters covering cloud concepts, services, security, architecture, and costs.
- CLF-C02 guide with current domain weights and links to official objectives.
- 23 practice sets containing 1,142 community questions.
- 189 questions amended for terminology, scope, ambiguity, or incorrect answers during the 16 October 2026 review.
- AWS references in every practice answer and review references in each chapter.

Amendments use official AWS documentation and service pages only. This is an independent editorial review, not AWS endorsement or verification of every distractor. Historical services are marked; announced future retirements are distinguished from completed ones. Read the [review scope and limitations](content-review/REVIEW.md) before relying on date-sensitive details.

## Run locally

Use Node.js 22.x.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. Production builds compile Markdown and copy diagrams locally, keeping content parsing out of the browser. Search loads a static index when opened. No database, login, external fonts, or AWS credentials are required.

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

Bookmarks and chapter completion survive this content revision; old quiz answers and scores are reset. Study data stays in the current browser and does not sync between devices.

## Attribution and license

Based on [Nirav Kanani’s AWS Certified Cloud Practitioner Notes](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes), copyright © 2022 kananinirav, under the [MIT License](LICENSE). Original diagrams, license, and Git history are retained. See [ATTRIBUTION.md](ATTRIBUTION.md). This maintained repository adds the app and source-linked amendments; it does not claim sole authorship of the original material.

Independent study resource; not affiliated with or endorsed by AWS. Product and certification names belong to their respective owners.
