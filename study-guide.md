# AWS Cloud Practitioner study guide

Reviewed 16 October 2026 against the official CLF-C02 guide. This replaces the older CLF-C01 outline in the original collection.

## Exam format and scoring

CLF-C02 assesses foundational cloud knowledge. AWS describes a target candidate with up to six months of AWS exposure. Coding and hands-on implementation are outside the target job tasks.

There are 50 scored and 15 unscored questions. Questions use either one correct choice or multiple correct choices. The reported score ranges from 100 to 1,000, with 700 required to pass overall. A practice percentage of 70% does not translate directly to that scaled score. There is no separate passing requirement for each domain.

Source: [Official CLF-C02 exam guide](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html).

## Domain 1: Cloud concepts

**24% of scored content.** Explain cloud value, design principles, migration, and economics. Distinguish elasticity, scalability, availability, fault tolerance, and agility through practical examples. Know the six Well-Architected pillars, including sustainability.

Understand how variable spending differs from buying physical infrastructure, and how rightsizing, automation, licensing, and economies of scale affect a business case. A migration does not guarantee lower costs without suitable design and operation.

Read [Cloud computing](sections/cloud_computing.md) and [Architecture and ecosystem](sections/architecting_and_ecosystem.md). Use the [official domain 1 objectives](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain1.html) as the checklist.

## Domain 2: Security and compliance

**30% of scored content.** Explain the division of responsibility between AWS and the customer, including how it changes across EC2, RDS, and Lambda. Identify identity controls, security services, governance tools, and sources of compliance evidence.

Practice choosing least-privilege permissions, MFA, federation, and temporary role credentials. Distinguish CloudTrail activity records, Config configuration records, GuardDuty threat detection, Inspector vulnerability scanning, and Macie discovery of sensitive S3 data. AWS compliance reports support a customer's compliance work; they do not automatically certify the customer's application.

Read [IAM](sections/iam.md), [Advanced identity](sections/advanced_identity.md), and [Security and compliance](sections/security_compliance.md). See the [official domain 2 objectives](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain2.html).

## Domain 3: Cloud technology and services

**34% of scored content.** Recognize ways to deploy and operate resources, the structure of AWS global infrastructure, and the services suited to common needs. Compare compute, storage, databases, networking, analytics, AI/ML, and application integration at a foundational level.

Distinguish Regions from Availability Zones and edge locations. Explain when a virtual machine, container, or function fits; compare object, block, and file storage; distinguish relational databases from key-value stores. Read the constraints in a scenario before choosing a service. Availability, performance, operating-system control, retention, and retrieval latency can change the answer.

Use the core-service chapters and the [official domain 3 objectives](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain3.html). Check the [in-scope service list](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html); this collection also retains clearly marked historical service descriptions.

## Domain 4: Billing, pricing, and support

**12% of scored content.** Compare pricing models, cost-management tools, and support resources. Understand usage charges, commitments, consolidated billing, allocation tags, budgets, and estimates.

Explain the different jobs of Pricing Calculator, Cost Explorer, Budgets, and migration business-case tools. Compare current support entitlements rather than memorizing old plan names or fixed check counts. A budget alert does not universally stop AWS spending, and a pricing estimate is not an invoice.

Read [Account management, billing, and support](sections/account_management_billing_support.md) and the [official domain 4 objectives](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain4.html).

## Detailed reading by exam task

The chapters now include the full explanations, worked examples, comparisons, and recall prompts from the course-based exam-task study pack. Some tasks span several chapters; the related-explanation links within each task connect those parts. Each chapter ends with the existing reference notes for revision.

| Domain | Task and starting chapter |
| --- | --- |
| Cloud concepts | [1.1 Cloud benefits](sections/cloud_computing.md#exam-task-11-cloud-benefits) |
| Cloud concepts | [1.2 Cloud design principles](sections/architecting_and_ecosystem.md#exam-task-12-cloud-design-principles) |
| Cloud concepts | [1.3 Migration strategies and benefits](sections/other_aws_services.md#exam-task-13-migration-strategies-and-benefits) |
| Cloud concepts | [1.4 Cloud economics](sections/cloud_computing.md#exam-task-14-cloud-economics) |
| Security and compliance | [2.1 Shared responsibility](sections/cloud_computing.md#exam-task-21-shared-responsibility) |
| Security and compliance | [2.2 Security governance and compliance](sections/security_compliance.md#exam-task-22-security-governance-and-compliance) |
| Security and compliance | [2.3 Identity and access management](sections/iam.md#exam-task-23-identity-and-access-management) |
| Security and compliance | [2.4 Security services and resources](sections/security_compliance.md#exam-task-24-security-services-and-resources) |
| Cloud technology and services | [3.1 Deploy and operate workloads](sections/deploying.md#exam-task-31-deploy-and-operate-workloads) |
| Cloud technology and services | [3.2 Global infrastructure](sections/global_infrastructure.md#exam-task-32-global-infrastructure) |
| Cloud technology and services | [3.3 Compute services](sections/other_compute.md#exam-task-33-compute-services) |
| Cloud technology and services | [3.4 Database services](sections/databases.md#exam-task-34-database-services) |
| Cloud technology and services | [3.5 Network services](sections/vpc.md#exam-task-35-network-services) |
| Cloud technology and services | [3.6 Storage services](sections/s3.md#exam-task-36-storage-services) |
| Cloud technology and services | [3.7 AI, ML, and analytics](sections/machine_learning.md#exam-task-37-ai-ml-and-analytics) |
| Cloud technology and services | [3.8 Other service categories](sections/other_aws_services.md#exam-task-38-other-service-categories) |
| Billing, pricing, and support | [4.1 Pricing models](sections/ec2.md#exam-task-41-pricing-models) |
| Billing, pricing, and support | [4.2 Billing and cost management](sections/account_management_billing_support.md#exam-task-42-billing-and-cost-management) |
| Billing, pricing, and support | [4.3 Technical resources and support](sections/account_management_billing_support.md#exam-task-43-technical-resources-and-support) |

The detailed material is an independent adaptation of reconstructed module guides and editorial syllabus expansions. It is not a reproduction of an official assessment or a claim that every paragraph was written by AWS. Personal assessment records are excluded. Service qualifications retain their stated review dates.

## Follow the AWS course sequence

Updated 20 October 2026 using the locally preserved AWS Cloud Practitioner Essentials course on Coursera, captured 16 October 2026. This map connects the thirteen course modules to this site's topic chapters. Chapter additions are independent summaries with source links; reconstructed guides and supplemental exam context are editorial material. The site is not an official AWS course or question bank.

| Course module | Read on this site |
| --- | --- |
| 1. Introduction to the Cloud | [Cloud computing](sections/cloud_computing.md) |
| 2. Compute in the Cloud | [EC2](sections/ec2.md), [load balancing and scaling](sections/elb_asg.md), [integration](sections/cloud_integration.md) |
| 3. Exploring Compute Services | [Other compute services](sections/other_compute.md) |
| 4. Going Global | [Global infrastructure](sections/global_infrastructure.md), [deployment](sections/deploying.md) |
| 5. Networking | [VPC](sections/vpc.md) |
| 6. Storage | [EC2 storage](sections/ec2_storage.md), [S3](sections/s3.md) |
| 7. Databases | [Databases and analytics](sections/databases.md) |
| 8. AI/ML and Data Analytics | [Machine learning](sections/machine_learning.md), [analytics](sections/databases.md#from-stored-data-to-analytics), [data pipelines](sections/cloud_integration.md#following-a-data-pipeline) |
| 9. Security | [IAM](sections/iam.md), [advanced identity](sections/advanced_identity.md), [security and compliance](sections/security_compliance.md) |
| 10. Monitoring, Compliance, and Governance | [Monitoring](sections/cloud_monitoring.md), [security and compliance](sections/security_compliance.md) |
| 11. Pricing and Support | [Billing, pricing, and support](sections/account_management_billing_support.md) |
| 12. Migrating to the AWS Cloud | [CAF and migration strategies](sections/architecting_and_ecosystem.md#cloud-adoption-and-migration-decisions), [other services](sections/other_aws_services.md) |
| 13. Well-Architected Solutions | [Architecture and ecosystem](sections/architecting_and_ecosystem.md) |

Source course: [AWS Cloud Practitioner Essentials on Coursera](https://www.coursera.org/learn/aws-cloud-practitioner-essentials). Course recordings can retain older service names, limits, and support plans. Use the dated AWS documentation review notes in each chapter for those distinctions, and consult live AWS documentation before making operational decisions.

## Working through this collection

Read a chapter, follow its AWS references, then answer a practice set without opening the answer. Review why each selected choice meets the scenario. Revisit mistakes in the linked documentation rather than memorizing letters.

The practice bank is community material, with editorial amendments and AWS reference links. Its scores are for self-study and do not predict the official exam score. Service availability, prices, and support entitlements can change after the review date.
