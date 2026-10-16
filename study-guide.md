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

## Working through this collection

Read a chapter, follow its AWS references, then answer a practice set without opening the answer. Review why each selected choice meets the scenario. Revisit mistakes in the linked documentation rather than memorizing letters.

The practice bank is community material, with editorial amendments and AWS reference links. Its scores are for self-study and do not predict the official exam score. Service availability, prices, and support entitlements can change after the review date.
