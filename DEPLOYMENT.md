# Development and deployment

Use Node.js 22.x. Install with `npm ci`, then run `npm run dev`. The app uses Next.js App Router with static generation for chapters, the study guide, and practice sets.

## Build and verify

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run start
```

With the production server running on port 3000, run `npx playwright test`. First-time browser setup: `npx playwright install chromium`.

To test another deployment in PowerShell:

```powershell
$env:PLAYWRIGHT_BASE_URL = 'https://aws-cloud-practitioner-notes.vercel.app'
npx playwright test
Remove-Item Env:PLAYWRIGHT_BASE_URL
```

## Vercel

The production project is `aws-cloud-practitioner-notes` in `zikri809s-projects`. The source repository is [Zikri809/aws-cloud-practitioner-notes](https://github.com/Zikri809/aws-cloud-practitioner-notes), with production branch `master`.

```sh
npx vercel@latest link
npx vercel@latest deploy --prod
```

Use the existing project when linking. No application environment variables are needed. `.vercel/`, `.env*`, dependencies, generated images/search files, and build/test output are ignored by Git. Do not commit CLI authentication files or generated environment credentials.

## Content pipeline

`predev` and `prebuild` copy original diagrams from `images/` into `public/images/` and generate `public/search-index.json`. Markdown is sanitized and compiled on the server. Chapter order and metadata live in `src/lib/catalog.ts`; exam files matching `practice-exam-N.md` are discovered automatically.

The material was reviewed against AWS sources on 16 October 2026. See [content-review/REVIEW.md](content-review/REVIEW.md) for the scope and reproducible question amendments. Earlier quiz attempts are invalidated by the content revision; bookmarks and chapter completion are retained.

Legacy Jekyll source files remain for provenance, but Vercel builds the Next.js application. Original `.html` chapter and practice URLs redirect to current app routes. The `upstream` remote retains the original author's repository; `origin` points to the maintained repository.
