# AWS documentation review

Review date: **16 October 2026**. Maintained by [Zikri809](https://github.com/Zikri809/aws-cloud-practitioner-notes).

## Scope and method

Reviewed all 19 chapter files and all 1,142 practice-question prompts and keyed choices across 23 sets. Replaced the CLF-C01 guide with a CLF-C02 reading guide. Identified outdated facts, lifecycle claims, ambiguous wording, and wrong answer keys were amended using official AWS documentation, pricing pages, and service notices only.

The practice review amended **189 questions**. Some changes are terminology updates; others change a scenario, an option's meaning, or the answer key. Legacy explanations were removed rather than representing unverified third-party explanations as AWS-reviewed. Every answer now links to an AWS reference. Service-overview references provide context and are not a claim that AWS published or endorsed a particular community question.

This is an editorial review, not formal AWS validation or an assertion that every distractor is independently verified. The collection retains advanced and historical topics beyond the current exam scope. It is not an official question bank, and practice percentages do not map to AWS scaled scores.

## Main amendments

| Area | What changed | AWS reference |
| --- | --- | --- |
| Exam guide | CLF-C02 domains: 24%, 30%, 34%, 12%; current scoring and candidate scope | [Exam guide](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html) |
| Free Tier | Separated pre-15 July 2025 legacy offers from credit-based signup and the newer free plan | [Free Tier](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier.html) |
| Support | Current Basic, Business Support+, Enterprise, Unified Operations; legacy transition and GovCloud exceptions | [Plans](https://docs.aws.amazon.com/awssupport/latest/user/aws-support-plans.html), [legacy plans](https://docs.aws.amazon.com/awssupport/latest/user/support-plans-eos.html) |
| Cost controls | Budgets are not universal spending caps; monthly Cost Explorer forecasts extend to 18 months | [Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html), [Cost Explorer](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html) |
| Identity | Prefer federation and temporary credentials; fixed password policies do not enforce MFA; support-plan changes are not root-only | [IAM practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html), [changing plans](https://docs.aws.amazon.com/awssupport/latest/user/changing-support-plans.html) |
| Shared responsibility | Corrected EC2 host firmware and inherited physical-security answer keys; removed automatic-compliance claims | [Shared responsibility](https://aws.amazon.com/compliance/shared-responsibility-model/) |
| Penetration tests | Removed obsolete mandatory AWS approval/request-form answers for permitted tests | [Policy](https://aws.amazon.com/security/penetration-testing/) |
| S3 | Current object-size limit, default encryption, ownership/ACL defaults, storage-class distinctions, and best-effort access logging | [S3 facts](https://docs.aws.amazon.com/AmazonS3/latest/userguide/qfacts.html), [encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingServerSideEncryption.html) |
| EC2 and storage | Default security-group behavior, Spot interruptions, EBS Multi-Attach exceptions, reservation scope, and unsupported fixed prices | [Spot](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-interruptions.html), [Multi-Attach](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes-multi.html) |
| Database and serverless | RDS Multi-AZ instance vs. cluster readers; Aurora limits depend on engine; Lambda custom-runtime/container constraints | [Multi-AZ clusters](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html), [Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) |

Every chapter has an AWS documentation review section with more sources. The Git diff contains the complete chapter amendments; the JSON manifests record reproducible section replacements.

## Lifecycle decisions

Retired services are labeled historical, including QLDB, CodeStar, OpsWorks, Sumerian, Snowmobile, and Elastic Transcoder. New-workload questions were rewritten where the correct answer had become a retired or restricted service. Replacements match the rewritten requirement; they are not assertions of feature-for-feature equivalence.

Snowball Edge is closed to new customers. Its specific [availability notice](https://docs.aws.amazon.com/snowball/latest/developer-guide/snowball-edge-availability-change.html) says existing customers can continue. This service-specific notice takes precedence here over the broader lifecycle registry's wording. New transfer scenarios use DataSync or Data Transfer Terminal with explicit network or physical-location constraints.

CodeCommit reopened to new customers in November 2025; it was not labeled retired. Cloud9, Forecast, Kendra, Migration Hub, and Application Discovery have restrictions described in their chapter references. CodeGuru Reviewer no longer accepts new repository associations.

Pinpoint's announced end of support on **30 October 2026** is still in the future on this review date. Messaging-channel APIs have a different transition path from campaigns and analytics. Managed Blockchain's announced **29 September 2027** end of support is also a future event, and its new-customer restriction starts **29 October 2026**. These were not described as already completed retirements. See [Pinpoint migration](https://docs.aws.amazon.com/pinpoint/latest/userguide/migrate.html) and [Managed Blockchain notice](https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/managed-blockchain-end-of-support.html).

## Reproducing and checking the review

- `question-amendments.json` records explicit question edits.
- `question-sources.json` records AWS reference selection rules.
- `question-review.json` records before/after prompts, options, and keys for amended questions.
- `note-amendments*.json` record section replacements; five initial chapter edits and later refinements are recorded in Git.
- `reference-check.json` records HTTP status, resolved URL, and title for the review references. A successful HTTP response checks availability, not factual correctness.

The upstream baseline is commit `c508a2e5d3e8b20000715bc30bad52ed6d4798cf`. Its history and MIT attribution are retained. Run `npx tsx scripts/apply-question-amendments.ts` to reconstruct the amended bank from that baseline. Run `node scripts/apply-note-amendments.mjs` to apply the recorded chapter replacements. Content tests verify question counts, selected corrected keys, multi-answer counts, local diagrams, and AWS-only answer reference links.

Quiz answers and scores from the earlier question bank are invalidated. Chapter completion and bookmarks are retained. Future reviews should advance the quiz revision whenever a prompt, option meaning, ordering, or answer key changes.

## Remaining limits

Prices, service offerings, and exam scope can change after this date. Some original diagrams depict older consoles or service names; the surrounding amended text governs. No AWS customer account was used to test service behavior or pricing. Use the linked AWS documentation for operational decisions and the official exam guide for certification scope.
