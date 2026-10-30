# Your final sprint

Your next gains come from explaining why a nearby answer is wrong. You already recognize many AWS services; the recurring gaps are the exact job, scope, responsibility, and minimum tier that a question asks for.

Prepared on 30 October 2026 from your seven saved AWS Skill Builder assessments. This is a new study section; the original notes, practice sets, and assessment transcripts remain separate.

## Start here

1. Follow the study blocks below in order. The default is **8 hours 30 minutes of active study over three days**, plus breaks. The exam date and your daily availability were not supplied, so these are study days rather than calendar commitments.
2. Use the [service comparison sheets](/final-sprint/comparisons) during the first pass, then close them and explain the distinction aloud.
3. Answer the [32 fresh recall drills](/final-sprint/drills) before opening each answer. These are original study prompts, not additional AWS official questions.
4. Use the [evidence log](/final-sprint/evidence) to revisit every missed question and all 26 uncertain correct answers. The original assessment reviews are linked there.

## What your results show

| Assessment | Correct / total | Displayed result |
| --- | --- | --- |
| Domain 1 | 14 / 15 | 93% |
| Domain 2 | 12 / 15 | 80% |
| Domain 3 | 17 / 20 | 85% |
| Domain 4 | 13 / 15 | 86% |
| Official pretest | 56 / 65 | 86% |
| Official practice question set | 16 / 20 | 80% |
| Official practice exam | 55 / 65 | 781; passing score 700 |

Across all seven: **183 correct out of 215 attempts (85.1% raw accuracy), with 32 misses**. These are question attempts, not 215 distinct concepts or an independent prediction of exam success. Questions and concepts repeat across sets. The official practice exam's **781 is a scaled score**, not 78.1% or a direct conversion of 55/65.

There are **26 correct answers marked Unsure or Educated guess** and **13 confidently wrong answers**. Treat those 58 attempts as the sprint review queue. A missing confidence label means unknown confidence, not mastery. All confidence records come from the pasted results.

The standalone domain scores are small samples. The pasted summaries do not provide the mixed assessments' per-domain breakdowns. The groups below are my classification of your mistakes, not AWS domain subscores. [Full evidence and limitations](/final-sprint/evidence).

## Your priorities

| Priority | Observed gap | Misses | What to be able to explain |
| --- | --- | --- | --- |
| 1 | IAM, shared responsibility, encryption, security principles and threat detection | 9 | Who owns the task; how an identity authenticates; which security service does the specific job |
| 2 | Networking, routing, edge delivery and WAF integration | 7 | User-to-network vs network-to-network; DNS vs regional load balancing vs cached delivery |
| 3 | Support plan thresholds | 4 | The cheapest tier satisfying the stated channel, hours, and checks; recognize old and current names |
| 4 | Agility and CAF perspectives | 4 | Change speed vs demand scaling; People vs Governance vs Operations |
| 5 | Observability and advisory tools | 2 | Resource configuration vs API activity vs metrics vs best-practice recommendations |
| 6 | Migration scope | 2 | Whole server vs database schema vs database data |
| 7 | Storage and analytical databases | 2 | Shared multi-AZ files vs shared block storage; transactions vs analytical reporting |
| 8 | Pricing and cost isolation | 2 | Spare-capacity pricing vs ordinary usage pricing; account boundaries vs permissions |

Support is a compact recurring gap: four errors across four assessments. Security and networking receive more time because their gaps are broader. The official guide weights Cloud Concepts 24%, Security and Compliance 30%, Cloud Technology and Services 34%, and Billing, Pricing, and Support 12%; the schedule balances those weights with your actual errors. [AWS exam guide](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/).

Your multi-select error rate was 7/43 (16.3%); single-choice was 25/172 (14.5%). This small difference does not justify calling multi-select your main weakness. The repeated pattern is choosing something related that fails one requirement.

## Day 1 — repair the recurring boundaries

### Block 1 — identity and security ownership, 60 minutes

- Spend 15 minutes on [IAM and responsibility](/final-sprint/comparisons#identity-and-shared-responsibility): AWS hardware vs your guest OS/app, customer PCI duties, shared training, users/groups/roles, and key components.
- Spend 15 minutes explaining the difference between ACM, KMS, and RAM, then the security pillar's protection and traceability principles.
- Spend 20 minutes answering drills 1–8 without the sheet. Revisit Domain 2 Q4–5; practice exam Q6, Q42, Q54, Q63; question set Q13, Q20.
- Spend 10 minutes revisiting the uncertain correct role/key/security answers listed in the evidence log. Say why EC2 should use a role instead of embedded user keys.

Completion check: identify the actor for five tasks, name the three parts of temporary credentials, and reject “AWS makes my application PCI compliant.” Explain both correct choices on each multi-select.

### Block 2 — networking and traffic scope, 60 minutes

- Spend 20 minutes on [networking and delivery](/final-sprint/comparisons#networking-and-delivery). Draw the flow: DNS chooses an endpoint; an ALB routes application requests; CloudFront serves cached content.
- Spend 15 minutes on Client VPN, Site-to-Site VPN, Direct Connect, Transit Gateway, route tables, security groups and network ACLs.
- Spend 15 minutes on drills 9–15. Revisit Domain 3 Q3; pretest Q9, Q52–53, Q61; practice exam Q8, Q41.
- Spend 10 minutes teaching back the difference between an AZ and a Region, and explaining why WAF's web request inspection fits an ALB rather than direct NLB association.

Completion check: solve seven changed networking scenarios and name the decisive requirement each time. Recognize that CloudFront can also do origin failover; “failover” alone does not uniquely identify Route 53.

### Block 3 — support, pricing and billing, 45 minutes

- Spend 15 minutes on [Support and cost choices](/final-sprint/comparisons#support-pricing-and-billing). Learn capability thresholds before plan names.
- Spend 10 minutes on drills 16–19. Revisit Domain 4 Q8, Q13; pretest Q26, Q31; question set Q9; practice exam Q36.
- Spend 10 minutes comparing accounts, cost allocation tags, Organizations, Budgets, Cost Explorer and Pricing Calculator.
- Spend 10 minutes recalling uncertain correct answers about cost tags, migration assistance, pay-as-you-go, rightsizing and Organizations.

Completion check: answer a legacy-label and a current-label Support scenario without choosing Enterprise merely because it also satisfies the requirement.

### Block 4 — cloud benefits and frameworks, 45 minutes

- Spend 15 minutes on [CAF and architecture principles](/final-sprint/comparisons#cloud-benefits-and-frameworks).
- Spend 10 minutes on drills 20–23. Revisit pretest Q13, Q19, Q44 and practice exam Q15.
- Spend 10 minutes recalling CAF benefits management, operations capacity management, and the Well-Architected Tool answers that were correct with low confidence.
- Spend 10 minutes writing your own examples of agility, elasticity, reliability, operational excellence and cost optimization.

Completion check: explain People as the business/technology bridge, Governance as risk/benefits oversight, and Operations as running services. Choose agility for time to market.

## Day 2 — distinguish the close alternatives

### Block 5 — monitoring, advice and threat detection, 45 minutes

Read [monitoring and security services](/final-sprint/comparisons#monitoring-advice-and-threat-detection) for 15 minutes. Spend 15 minutes on drills 24–27 and your wrong Domain 2 Q6 / practice exam Q30, Q40 answers. Use the final 15 minutes to distinguish CloudTrail, Config, CloudWatch Logs Insights, GuardDuty, Inspector, Macie, Trusted Advisor, Service Quotas, Service Catalog and the Well-Architected Tool. Include pretest Q25, Q49 and practice exam Q3, Q20, Q62 from the uncertain-correct queue.

Completion check: answer “who called the API?”, “what changed in the resource?”, “which software is vulnerable?”, and “is this activity suspicious?” without substituting another service in the same category.

### Block 6 — migration, storage and analytics, 45 minutes

Read [migration, storage and analytics](/final-sprint/comparisons#migration-storage-and-analytics) for 15 minutes. Spend 15 minutes on drills 28–31 and Domain 1 Q9, question set Q5, Domain 3 Q4, Q9. Use 15 minutes on the uncertain answers for Storage Gateway, Redshift/Spectrum, DynamoDB, Dedicated Hosts and Elastic Beanstalk.

Completion check: preserve a server with MGN; convert a supported schema with SCT or DMS Schema Conversion; move supported database data with DMS. Reject EBS Multi-Attach when the requirement spans AZs.

### Block 7 — uncertain correct answers, 30 minutes

Use the [26-answer confidence queue](/final-sprint/evidence#correct-but-uncertain) for a closed-book sweep. These answers were already revisited within the topic blocks; this is the delayed check. For each, state the answer, deciding requirement, and why one tempting alternative fails. Write down any you still cannot explain. Include drill 32 for the remaining deployment, hardware and business-help distinctions.

Completion check: explain all 26 without relying on answer letters. Put unresolved items back into the appropriate topic block.

### Block 8 — changed scenarios and delayed recall, 60 minutes

Spend 45 minutes on all 32 drills in a different order. Ask yourself to change one requirement: cross-AZ to same-AZ, whole server to schema conversion, DNS failover to cached delivery, or “any qualifying plan” to “least expensive qualifying plan.” Spend 10 minutes repairing errors using the comparison sheets. Finish with 5 minutes explaining yesterday's confidently wrong answers without looking.

Target **at least 29/32**, plus a reason for each rejected close alternative. This is a personal practice target, not an AWS passing rule. Reading the answer and recognizing it does not count as retrieval.

## Day 3 — mixed validation and final recall

### Block 9 — a mixed set, 90 minutes

Use a 65-question mixed set you have not already answered, if available, from the [existing practice area](/practice). Use the real exam's 90-minute limit: aim for a 60-minute first pass, 25-minute review, and 5-minute final check. Mark uncertain answers on paper. If all available sets are familiar, treat the exercise as recall rehearsal rather than independent readiness evidence.

The certification exam has 65 questions, including 15 unscored questions that are not identified. Do not try to guess which questions are unscored. [AWS exam guide](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/), [exam duration](https://aws.amazon.com/certification/certified-cloud-practitioner/).

### Block 10 — review and finish, 30 minutes

Review every incorrect and uncertain answer from the mixed set. Record: **requirement → chosen answer → corrected boundary → closest distractor's failure**. Finish with a verbal sweep of Support tiers, Route 53/CloudFront/ALB, Config/CloudTrail/CloudWatch, IAM roles/keys, shared responsibility, CAF and migration.

A useful personal readiness check is at least 85% raw on a genuinely unseen mixed set, at least 29/32 on these changed-scenario drills, and no unresolved repeat misconception in the top priorities. These are suggested study targets, not calibrated pass probabilities or AWS cutoffs. If a target is missed, spend another focused block on the actual errors instead of repeating a memorized exam to raise its score.

## If you only have two hours

Use 25 minutes for IAM/shared responsibility/encryption, 25 for networking, 15 for Support thresholds, 15 for CAF/agility, 15 for Config/CloudTrail/CloudWatch and threat services, 15 for migration/storage/analytics, and 10 for cost choices plus a final verbal check. Total: 120 minutes. Use the comparison sheets and the matching drills; unresolved uncertain-correct topics still need follow-up. This compressed route does not replace the mixed-set validation.

## Your question-reading routine

1. Name the action: authenticate, detect, audit, route, migrate, analyze, or estimate.
2. Name the scope: employee device, VPC, AZ, Region, account, whole server, database schema, or data.
3. Underline the constraint: least cost, least overhead, current vs legacy plan choices, shared vs AWS-only responsibility, or choose two.
4. Reject the closest alternative with a concrete reason before confirming the answer.
5. Mark confidence before revealing feedback. Review confident errors first, then correct guesses.

Your practice exam took 33 minutes 49 seconds; the pretest took 24 minutes 21 seconds. Time pressure was not demonstrated in these attempts. Use some of the available review time to verify constraints; speed alone does not show mastery.

## Accuracy notes

The [comparison sheets](/final-sprint/comparisons#corrections-to-remember) distinguish preserved assessment wording from corrected study guidance: ACM/TLS is about encryption in transit; temporary credentials include a session token; DMS now has schema conversion; EBS Multi-Attach is confined to an AZ; CloudFront supports origin failover; Redshift Spectrum can query S3; and DynamoDB has quotas despite loose “virtually unlimited” wording.

AWS Support names are changing. Learn both the legacy Business/Developer distinctions in your older questions and the Business Support+ capabilities in the newer ones. Use the verified official references in the sheets rather than memorizing obsolete plan prices.
