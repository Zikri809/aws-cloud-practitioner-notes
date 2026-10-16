# Verification

Verified on 16 October 2026. The production app is deployed at https://aws-cloud-practitioner-notes.vercel.app using Next.js 16.4.2 and Node.js 22.x.

## Build and content

- PASS: production build completes locally and on Vercel; notes and exams are statically generated.
- PASS: TypeScript, ESLint, formatting, and whitespace checks.
- PASS: seven content tests cover all 19 chapters and 1,142 questions, selected corrected keys, mixed-case multi-answer parsing, response counts, AWS-only answer links, local diagrams, sanitized HTML, heading anchors, and legacy links.
- PASS: 11 browser tests cover study interactions, responsive layouts, keyboard access, error recovery, automated accessibility scans, and migration from old quiz data while retaining reading progress.
- PASS: local and hosted production checks confirm bookmarks, completion, single and multiple answers, deep links, diagrams, the CLF-C02 guide, and legacy redirects.

## Reviewed release

- Application/content commit: `b4cbb95`.
- Public repository: https://github.com/Zikri809/aws-cloud-practitioner-notes (`master`).
- GitHub App checks run `38870322657`: success, including build, content checks, and browser checks on Linux.
- Vercel production deployment `dpl_C5LLVxy4UsqAfTdPZhKAB9i1ivTM`: ready at https://aws-cloud-practitioner-notes.vercel.app.
- All 11 browser checks passed against the public production URL in 23.7 seconds, including automated accessibility scans and quiz-revision migration.
- Confirmed the final amended question text on the public site. Checked 163 AWS reference URLs for HTTP availability and inspected redirects.
- Confirmed Vercel's GitHub integration successfully deployed the owned repository's commit; future pushes to `master` trigger deployments.
- Original upstream history and MIT attribution remain; application credentials and generated build files are excluded from Git.

## Interaction evidence

| Control | Observed result |
| --- | --- |
| Start reading | Opens the first chapter |
| Bookmark | Saved chapter appears in Bookmarks and survives reload |
| Mark complete | Completion survives reload and updates the overview |
| Chapter filters | Change the visible collection and count |
| Filter with no matches | Shows an empty state; Clear filters restores the collection |
| Ctrl K / search button | Opens search with the input focused |
| Search text | Matches chapter content and navigates to the selected chapter |
| No search match | Shows an explicit empty state |
| Search request failure | Shows Retry search; retry loads results |
| Escape in search | Closes the dialog |
| Single-choice question | Enables checking after selection, then locks the response and shows feedback |
| Multiple-choice question | Requires the specified number of selections before checking |
| Previous / Next question | Moves to the expected question |
| Question navigator | Jumps to the selected question |
| Reload practice page | Restores selections, checked answers, and position |
| Restart / Keep studying | Confirmation preserves answers when canceled and resets them when confirmed |
| See results | Displays the calculated score and stores it in the exam library |
| Review answers | Reopens the completed answer set |
| Completed exam filter | Shows the completed set and saved result |
| Topic map disclosure | Expands the actual chapter topics |
| Topic link | Opens the chapter at the corresponding heading |
| Legacy chapter URL | Redirects to the current note route |
| Mobile menu | Opens, navigates, closes, and handles a same-page link |
| Mobile contents | Expands and navigates to a chapter heading |
| Skip to content | Moves keyboard focus to the main area |
| Unknown route | Shows a working return-to-notes page |
| Unreadable browser storage | Shows a recovery notice without crashing |

## Design delivery gate

### Hard gate

- R-02 PASS: authored interface copy avoids em dashes; inherited source material and AWS terminology are retained where applicable.
- R-03 PASS: overview, notes, reader, practice library, quiz, and topic map fit 375, 768, 1024, and 1440px viewports without page overflow.
- R-17 PASS: chapter, exam, question, and progress counts derive from source data or actual browser state; reading time is labeled as an estimate.
- R-18 PASS: no testimonials or invented people.
- R-23 PASS: owner selected a dark layout with orange accents; no generated logo, photo, or illustration.
- R-24 PASS: navigation routes exist and are exercised by browser tests.
- R-25 PASS: axe scans find no WCAG A/AA violations across eight main screens; secondary text on raised surfaces measures 5.24:1 and muted text on panels measures 8.08:1.
- R-26 PASS: navigation, reading controls, search, filters, practice answers, restart, results, and topic disclosures have concrete actions.
- R-27 PASS: empty collections, search loading/failure/retry, route loading/error boundaries, and invalid browser data are implemented.
- R-28 PASS: no invented FAQ.
- R-32 PASS: semantic buttons, form inputs, native modal dialogs, focus outlines, keyboard search, Escape, and the skip link are present; keyboard tests pass.
- R-33 PASS: features were implemented directly in source files; Prettier only formats code.
- R-34 PASS: the owner-selected dark theme is the single shipped theme.
- R-35 PASS: production builds, browser checks, responsive screenshots, and hosted smoke tests were run.
- R-36 PASS: no fabricated performance, security, or customer claims.
- R-37 PASS: owner direction and the design rationale are recorded in DESIGN.md before implementation.
- R-38 PASS: content comes from repository Markdown, original diagrams, or actual study state.

### Purpose gate

- R-01 PASS: orange communicates the owner-selected accent and primary study actions; no decorative gradients.
- R-04 PASS: book, search, bookmark, check, and navigation icons indicate their corresponding actions.
- R-06 PASS: system fonts support long reading sessions without external font requests; monospace is confined to code.
- R-07 PASS: no decorative background pattern.
- R-08 PASS: arrows indicate navigation between a chapter, question, or practice set.
- R-09 PASS: tags identify actual topic groups, device-local persistence, or selection requirements.
- R-10 PASS: no glass effects.
- R-12 PASS: shadow is limited to the elevated search dialog.
- R-13 PASS: no decorative glow.
- R-14 PASS: chapter rows, a continue-reading panel, practice cards, and a contents rail reflect different study tasks.
- R-19 PASS: short hover transitions acknowledge input; reduced motion disables transitions.
- R-22 PASS: diagrams are original source illustrations of AWS concepts.

### Liveliness

- PASS: ENERGY 2 / RHYTHM 2 / MOTION 1 is recorded in DESIGN.md.
- PASS: a quiet reading interface, task-specific layouts, and input-driven transitions match those settings.
- PASS: each screen has a clear primary heading or question as its focal point.
- PASS: whitespace separates chapter groups, reading sections, and practice controls.
- PASS: orange is the deliberate action and progress accent.
- PASS: repeated chapter markers connect the sidebar, reading sequence, and progress display.
- PASS: the design read and the owner's selected direction preceded implementation.

### Craftsmanship and quality locks

- C-1 PASS: color, layout, typography, spacing, icons, and motion have written reasons in DESIGN.md.
- C-2 PASS: interactive controls perform their stated actions.
- C-3 PASS: each area serves reading, navigation, practice, attribution, or saved study state.
- C-4 PASS: phone-to-desktop layouts, empty states, failure states, and keyboard access were checked.
- C-5 PASS: claims and counts are grounded in the repository and test output.
- R-05 PASS: composition follows the study collection rather than a marketing template.
- R-11 PASS: small control radii and larger panel radii express hierarchy without pill-shaped layouts.
- R-15 PASS: actions use explicit names such as Start reading, Check answer, and Mark complete.
- R-16 PASS: interface copy avoids promotional AI buzzwords.
- R-20 PASS: the chapter path and orange reading markers give the study workspace a consistent identity.
- R-21 PASS: dark mode follows the owner's explicit preference.
- R-29 PASS: graphite neutrals, orange accent, and limited semantic feedback colors form the palette.
- R-30 PASS: the layout was designed around this repository's notes and exams.
- R-31 PASS: major visual decisions and their purposes are written in DESIGN.md.

## Practical limits

Progress is local to one browser. The material received an editorial AWS documentation review dated 16 October 2026, with 196 amended questions, a rewritten CLF-C02 guide, and an explicit scope/limitations record in content-review/REVIEW.md. This is not AWS certification of the material or every distractor. The source repository is owned by Zikri809; upstream MIT attribution and history remain. The app needs no database or application secrets. CLI-generated credentials remain ignored.

The production dependency audit reports zero vulnerabilities. The full development dependency audit reports five high advisories in the ESLint configuration's glob dependency chain; npm offers an incompatible framework downgrade rather than a compatible patched release. These dependencies are build tooling, not shipped browser code.
