# Account Management, Billing & Support

Work through the explanations, examples, and service comparisons below. Use the [reference notes](#reference-notes) for revision, or follow the [exam-task reading path](/study-guide#detailed-reading-by-exam-task) to study in syllabus order.

## Exam task 2.2: Security governance and compliance

### Organizations: govern multiple AWS accounts

Accounts provide isolation and administrative boundaries. A company might separate production, development, security, and centralized logs. Organizations helps centrally manage those accounts, create accounts programmatically, consolidate billing, and apply supported policies.

An **organization root** is the top-level container, not an AWS account's root-user identity. An **organizational unit**, OU, groups accounts and can contain nested OUs. An account can sit directly under the root or inside an OU. The **management account** manages the organization and consolidated billing; other accounts are **member accounts**. The video's parent/child terminology is an analogy, not a reason to assume resource access is automatically shared.

**Service control policies**, SCPs, set maximum permissions for affected principals in member accounts. They do not grant IAM access by themselves. An action needs an appropriate grant and must remain within applicable limits. A deny inherited from a parent cannot be bypassed by attaching a broader allow lower down.

**Exam extension:** SCPs can attach to the root, OUs, or member accounts. They do not constrain the management account, and service-linked roles are exempt. They can constrain a member account's root user. Avoid the claim that root is unrestricted everywhere or that all principals in all organization accounts are treated identically. [SCP scope](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html).

Consolidated billing aggregates eligible usage and can support eligible discount sharing; joining an organization does not make every resource cheaper. It also does not automatically grant every team access to every other account's data. Use appropriate cross-account mechanisms and permissions.

*Adapted study material; [Module 10, section 7 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/S8ErT/introduction-to-monitoring-compliance-and-governance-in-the-aws-cloud).*

### Control Tower, Service Catalog, and License Manager

#### Control Tower

Control Tower helps set up and govern a multi-account environment using a **landing zone**, account provisioning, controls, and a dashboard. It builds on services such as Organizations rather than replacing their underlying concepts. **Account Factory** standardizes account provisioning; a landing zone is an architecture/environment, not another compute resource or a VPC containing all accounts.

The course uses both “guardrails” and “controls.” Not every control works the same way: preventive controls restrict actions, detective controls identify noncompliance, and proactive controls evaluate supported provisioning before it proceeds. Scope and implementation matter; enabling Control Tower does not automatically guarantee every account and workload complies with every policy. [Control Tower controls](https://docs.aws.amazon.com/controltower/latest/controlreference/controls.html).

Choose Organizations when the need is core multi-account management, OU structure, consolidated billing, or SCPs. Choose Control Tower when the need is a standardized landing zone and account setup with coordinated governance controls.

#### Service Catalog

Service Catalog offers approved self-service products/templates, organized for controlled provisioning. For example, administrators can offer a standard application environment so teams do not invent settings for each deployment. It is the clue for a curated internal catalog of approved resources.

**Exam extension:** AWS Marketplace is a catalog of purchasable third-party offerings; Service Catalog is how an organization curates and controls approved provisioning for its users. A catalog entry does not replace permissions or every runtime compliance check.

#### License Manager

License Manager helps track and control software license usage and entitlements. It can support license inventory and configured usage limits, reducing the risk of overuse. Bring Your Own License, BYOL, depends on the vendor's terms and eligible deployment options. Owning a license does not mean it is portable to every AWS service, nor that BYOL always costs less.

For exam selection, “approved resource templates” points to Service Catalog; “software license usage” points to License Manager; “standard account provisioning and governance” points to Control Tower.

*Adapted study material; [Module 10, section 8 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/S8ErT/introduction-to-monitoring-compliance-and-governance-in-the-aws-cloud).*

Related explanations for this task: [security compliance](/notes/security_compliance#exam-task-22-security-governance-and-compliance), [cloud monitoring](/notes/cloud_monitoring#exam-task-22-security-governance-and-compliance).

## Exam task 4.2: Billing and cost management

### Select the correct billing tool

| Need | Tool/service | Distinction |
|---|---|---|
| Estimate a proposed architecture | AWS Pricing Calculator | Planning inputs, not a guaranteed invoice |
| View charges, invoices, payment settings | Billing and Cost Management console/dashboard | Current billing administration and overview |
| Analyze historical spend and forecast trends | AWS Cost Explorer | Interactive cost/usage breakdowns |
| Alert against defined actual/forecast thresholds | AWS Budgets | Tracking and configured notifications/actions |
| Consolidate multiple accounts' bills | AWS Organizations | Multi-account billing/management foundation |

Pricing Calculator needs assumptions such as Region, instance type, operating hours, storage, and transfer. An estimate is only as useful as its inputs and pricing coverage. It does not inspect all future application behavior or reserve a fixed bill.

Cost Explorer helps answer “Which service or linked account caused last month's increase?” It supports grouping/filtering and forecasting where sufficient data exists. A forecast extrapolates information; it is not a commitment or a guarantee.

Budgets can track costs, usage, and supported commitment metrics such as Savings Plans/RI utilization or coverage. Cost/usage budgets can alert when actual or forecast spending crosses a threshold. Low utilization or coverage can also be important for commitment monitoring; not every meaningful threshold is simply “spend exceeded.”

#### Budgets is not an instantaneous hard cap

Billing data and notifications have delays, so charges can exceed a threshold before an alert arrives. Optional budget actions need configuration and permissions and affect specific resources or permissions; they do not create a universal exact spending ceiling. [AWS Budgets limits and timing](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html).

For example, a monthly budget could notify a team at 80% actual spend and when forecast spend exceeds the budget. The team still needs an operating response. An alert neither refunds earlier usage nor guarantees that ongoing storage, commitments, and every other charge stop.

*Adapted study material; [Module 11, section 3 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/jHvBw/introduction-to-pricing-and-support).*

### Consolidated billing and cost allocation

Organizations groups member accounts under a management account for consolidated billing. It can provide centralized cost visibility and eligible usage aggregation or discount sharing. Each account remains a distinct security boundary; billing consolidation is not automatic cross-account access to resources.

The video calls the management account “primary” and member accounts “subaccounts.” Use the formal names in exam reasoning. A consolidated bill does not mean every service gets a discount or that member-account usage becomes impossible to identify.

Tags are key/value metadata, such as `Environment=dev` or `Project=coffee-app`. They help attribute costs and organize resources. User-defined cost allocation tags generally need activation in billing tools before they are available for cost reporting. Merely attaching a resource tag does not immediately guarantee complete historical cost attribution. Some costs also need other allocation approaches. [Cost allocation tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html).

**Exam extension:** Distinguish **coverage**, the proportion of eligible usage receiving a commitment benefit, from **utilization**, how much of a purchased commitment is used. A company can buy too much and have low utilization, or buy too little and have low coverage. Rightsize, understand the stable baseline, then choose the commitment.

*Adapted study material; [Module 11, section 4 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/jHvBw/introduction-to-pricing-and-support).*

### Reconstructing the optimization architecture

The course discusses an application using EC2, a load balancer/scaling, RDS, S3, and VPC networking. No AWS resources, subscriptions, or purchase commitments were created while preparing these notes.

#### EC2 and compute

1. Measure utilization and workload needs; use Compute Optimizer recommendations where appropriate.
2. Rightsize based on performance and reliability, not CPU averages alone.
3. Use configured Auto Scaling to add/remove eligible capacity as demand changes. Minimum capacity and policies matter; an idle workload is not automatically scaled to zero.
4. Consider Spot for interruption-tolerant, retryable workloads. “Up to 90%” is a maximum comparison, not a guaranteed saving or capacity supply.
5. Review idle resources and retained storage. Confirm ownership and recovery needs before removing volumes or snapshots.

A load balancer improves distribution and supports scaling designs, but it also has costs. It does not by itself reduce the number of running instances or ensure every application is cheap.

#### RDS and caching

The video's “spin up RDS, and it scales up and down” is too broad. Ordinary RDS DB instance compute sizing is not automatic bidirectional demand scaling. **RDS storage autoscaling** can increase allocated storage up to a configured limit; it does not shrink that allocated storage when demand falls. [RDS storage autoscaling](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.Autoscaling.html).

Read replicas can offload supported reads, and ElastiCache can reduce repeated database retrievals. Both add resources and charges; they save money only if their overall effect and requirements justify those costs. Neither automatically handles primary write scaling, nor replaces all availability and recovery features.

#### S3 and retention

Choose classes using access frequency, retrieval needs, minimum durations, and availability requirements. Intelligent-Tiering suits unknown/changing access patterns, subject to its fees and behavior. Glacier Deep Archive fits rarely accessed data that can tolerate long retrieval times.

Compression can reduce stored bytes but adds processing and can affect how applications access data. A Lambda compression workflow requires configuration and care to avoid unintended repeated processing. Lifecycle rules can transition or expire appropriate objects and versions; current versions, noncurrent versions, delete markers, and retention protections need separate consideration.

The example of retaining only 30 days instead of ten years illustrates matching retention to a real requirement. It is not authorization to delete historical data just because a shorter retention would be cheaper.

#### Network path

Review cross-AZ, cross-Region, internet, and NAT processing costs without removing resilience required by the workload. Consolidating everything into one AZ can lower some traffic charges while weakening availability.

For supported same-Region S3 access, a **gateway endpoint** can avoid a NAT path and its applicable processing charges; gateway endpoints have no additional endpoint charge. Interface endpoints have different pricing. An endpoint does not erase ordinary cross-Region transfer charges or make every architecture cheaper. The video's “especially out-of-Region” statement is therefore too broad for the S3 gateway-endpoint example. [Gateway endpoints](https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html).

*Adapted study material; [Module 11, section 7 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/jHvBw/introduction-to-pricing-and-support).*

### Free Tier and planning context

**Exam extension:** Free Tier offers are eligibility- and time/usage-dependent, not a general promise that learning resources are free. Current AWS material describes new-customer credits and Free/Paid plans, with conditions and a limited Free-plan period. Older accounts and service offers can differ. Verify the account's actual offer rather than applying a recorded lesson's Free Tier assumptions. [Current Free Tier](https://aws.amazon.com/free/).

A cost estimate should include the workload's lifecycle: deployment, idle periods, growth, backups, retention, transfer, support, and shutdown. For a migration comparison, total cost also includes administration, licensing, facilities, staff effort, and transition work;not only EC2 price versus server purchase price.

*Adapted study material; [Module 11, section 8 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/jHvBw/introduction-to-pricing-and-support).*

### Exam requirements and service choices

#### Allocate costs to owners, then choose the reporting tool

| Question | Tool/resource | Expected answer |
|---|---|---|
| What might a new design cost? | AWS Pricing Calculator and service pricing pages | Estimate from chosen configuration, usage, Region, and pricing assumptions |
| What did we spend, and where is the trend going? | AWS Cost Explorer | Filter/group cost and usage, examine trends, and use supported forecasting |
| Are actual or forecast costs approaching our limit? | AWS Budgets | Configured thresholds, notifications, and optional authorized actions |
| Where are detailed billing line items for analysis? | AWS Cost and Usage Reports (AWS CUR); current Data Exports/CUR 2.0 workflows | Detailed exported cost/usage data for custom analysis |
| How are several accounts paid together? | AWS Organizations consolidated billing | Management-account billing responsibility and account cost visibility |
| Which application/team should bear a charge? | Activated cost allocation tags | Report supported tagged usage by business categories |
| Why did a charge appear or how do I dispute it? | Bills page; account/billing support through AWS Support Center | Billing help rather than changing a CloudWatch alarm |

Cost Explorer is an interactive analysis tool; CUR supplies detailed exported data. A dashboard can be built from exported data, but requesting raw line items points more directly to CUR than to a budget alert. Data Exports is the newer export framework; recognize CUR/CUR 2.0 terminology without assuming older reports stop existing.

#### User-defined and AWS-generated allocation tags

A tag has a key and value, such as `CostCenter=Finance` or `Application=Orders`. **User-defined tags** are chosen/applied by the customer. **AWS-generated tags** are supplied by AWS or applicable AWS Marketplace integrations. The two types must be activated for cost allocation before their supported data appears in cost tools/reports. Merely attaching a resource tag is not the same as activating it for billing.

Use a consistent scheme and review untagged/unallocated spend. Not every charge belongs to a taggable resource, and activating tags does not instantly classify all past usage. Tag propagation, billing updates, supported backfill, and the particular service affect what appears. Tags organize costs; they do not grant access or stop spending.

#### Consolidation and spending controls

Organizations can combine eligible usage for volume pricing and share eligible commitment benefits according to settings. It preserves separate accounts and resource ownership; consolidated billing does not merge all resources or grant cross-account access. The management account can inspect consolidated charges and allocate responsibility internally using account and tag reports.

Budgets uses updated billing information and configured actions, so it is not a guaranteed real-time hard cap on every resource. A forecast alert is different from an actual-cost alert. Cost Anomaly Detection is related context for unusual-spend alerts; it is not the same as a fixed budget threshold or a predeployment estimate.

**Worked choice:** Finance wants an estimate before launch, monthly costs by application afterward, and warning when forecast spending exceeds a target. Use Pricing Calculator, activated application cost allocation tags with Cost Explorer/CUR, and a forecast-based budget respectively. These requirements describe a workflow, not one tool doing everything.

Sources: [Cost allocation tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html), [CUR](https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html), [consolidated billing](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html), and [AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html).

### Before continuing

Explain cost allocation tags, cost and usage reports, forecasts, budget alerts/actions, and eligible discount sharing. Confirm retained storage and commitments when stopping a workload.

Explain the main concepts aloud and compare the services with similar purposes. Return to the relevant section whenever you cannot justify the distinction.

## Exam task 4.3: Technical resources and Support

### Exam requirements and service choices

#### Use the current support comparison first

The current CLF-C02 guide names Basic Support, Business Support+, Enterprise Support, and Unified Operations. The recorded Developer/Business/Enterprise On-Ramp comparison later in this chapter is historical course context. For exam preparation, use the current names and capabilities below, verified on 20 October 2026.

| Plan | Main distinction for scenario recognition |
|---|---|
| Basic Support | Included account/billing assistance, documentation/community resources, core Trusted Advisor checks, and AWS Health visibility; not the paid technical-case engineer access tier |
| Business Support+ | 24/7 technical assistance for production workloads and full Trusted Advisor checks |
| Enterprise Support | Designated Technical Account Manager (TAM), proactive guidance, and broader business-critical support |
| Unified Operations | Additional application-specific operational expertise, designated specialist/incident-management capabilities, and proactive workload monitoring for mission-critical needs |

A requirement for 24/7 technical support does not by itself require a designated TAM. A requirement for a designated TAM is stronger than access to a shared pool of support engineers. Response targets are initial-response targets tied to severity and plan, not guaranteed incident-resolution times. Exact pricing and entitlements can change; the service comparison is the source for an actual purchase.

#### Locate the right technical or business resource

| Need | Resource | How it differs |
|---|---|---|
| Service usage instructions or API syntax | AWS documentation | Product-specific reference |
| Architecture rationale and wider design discussion | AWS whitepapers and architecture resources | Guidance beyond one console setting |
| Proven implementation/adoption patterns | AWS Prescriptive Guidance | Strategies, patterns, and guides for specific outcomes |
| Common troubleshooting question | AWS Knowledge Center | Curated answers and articles |
| Community discussion/Q&A | AWS re:Post | Community assistance rather than a guaranteed incident response |
| Open/manage a support case | AWS Support Center | Account's support workflow and case history |
| Service incident or resource lifecycle event | AWS Health Dashboard / AWS Health API | Public/account-specific event visibility and programmatic integration |
| Resource/account best-practice recommendations | AWS Trusted Advisor | Cost, performance, security, resilience, quotas, and operations checks |
| Report suspected abuse involving AWS resources | AWS Trust and Safety | Abuse reporting rather than routine billing or quota management |

Health can identify a planned change or affected resource while CloudWatch shows the application's own measurements. Trusted Advisor can identify supported cost waste; it is not an exact invoice or a full architecture review. Health API access has eligible-plan requirements that differ from simply viewing the dashboard.

**AWS Partners** include independent software vendors (ISVs) building software and system integrators helping implement/integrate solutions. **AWS Marketplace** supports discovering/procuring offerings and applicable subscription, entitlement, cost, and governance workflows; evaluate seller terms and underlying AWS charges. Marketplace and Partner Network membership are different concepts. Partner benefits can include training/certification resources, events, and eligible commercial benefits such as volume discounts under the relevant program; benefits are conditional.

**AWS Professional Services** provides scoped consulting/implementation engagements. **AWS solutions architects** provide architectural guidance through applicable customer engagements. A TAM coordinates proactive support and guidance rather than becoming the customer's application-development team.

**Worked choice:** A company needs a designated proactive support adviser, a consultant to implement a migration, and a catalog to buy a vendor product. Enterprise Support, Professional Services/a suitable partner, and Marketplace address those needs respectively.

Sources: [Current support comparison](https://aws.amazon.com/premiumsupport/plans/), [Health API](https://docs.aws.amazon.com/health/latest/ug/health-api.html), [Trusted Advisor](https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html), and [Prescriptive Guidance](https://aws.amazon.com/prescriptive-guidance/).

### Support: retain the course comparison and recognize change

The course records an older plan lineup. It is useful for interpreting its lessons, but it should not be treated as the current purchasing menu.

| Recorded plan | Main course distinction | Recorded highest-severity initial response |
|---|---|---|
| Basic | Included resources, account/billing help, core checks | Not a technical-case response-time plan |
| Developer | Technical assistance suited to testing/development | Under 12 hours for impaired systems |
| Business | Production technical support and broader tools | Under 1 hour for production down |
| Enterprise On-Ramp | Business-critical guidance; pool of TAMs | Under 30 minutes for business-critical down |
| Enterprise | Designated TAM and mission-critical guidance | Under 15 minutes for business/mission-critical down |

General-guidance and less-severe cases have other response categories. These are **initial response targets**, not promises that an issue is resolved within that time. Severity describes business impact, and actual terms determine eligibility and handling. The recorded table's shorthand does not capture every channel, contact, or support-hour restriction.

#### Current offering note ; checked 16 October 2026

The public comparison now lists Basic, **Business Support+**, **Enterprise Support**, and **Unified Operations**. It shows business/mission-critical initial human responses under 30 minutes, under 15 minutes, and an Incident Management Engineer under 5 minutes respectively for those paid offerings, subject to footnotes and plan terms. Enterprise includes a designated TAM; Unified Operations adds deeper operational expertise. Use the current comparison for procurement and retain the older table only as course context. [Current AWS Support comparison](https://aws.amazon.com/premiumsupport/plans/).

Basic customer-service access is not unlimited 24/7 technical troubleshooting from engineers. A TAM provides proactive architectural/operational guidance and coordination; it is not a substitute for operating every workload. Do not assume support automatically grants a dedicated solutions architect for every project or includes unlimited hands-on consulting.

*Adapted study material; [Module 11, section 5 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/jHvBw/introduction-to-pricing-and-support).*

### Other assistance and third-party options

**AWS documentation** supplies service guides, API references, tutorials, and whitepapers. **AWS re:Post** is a community Q&A resource; **Knowledge Center** provides common troubleshooting articles and videos. Community answers are not a guaranteed urgent incident response channel.

**AWS Professional Services** provides consulting and project assistance, such as cloud adoption and migration work. This is different from buying a support plan to troubleshoot service use. Solutions architects can provide architectural guidance through relevant engagements; availability and scope should not be inferred solely from an older support-tier sentence.

**AWS Trust and Safety** is the route for reporting suspected abusive activity involving AWS resources. It is not the billing dashboard or the general path for increasing an instance quota.

**AWS Marketplace** is a digital catalog of third-party software, data, and services. Offerings can have different subscription, usage, or contract terms, including free and paid options. Underlying infrastructure charges can exist in addition to a software price. Compare the full terms rather than assuming a “free” listing has zero deployment cost.

**AWS Partner Network**, APN, is the community/program for partners building services and solutions with AWS. A customer may engage a specialist partner for migration, analytics, or managed operations. Partner programs can provide training, events, and eligible funding benefits; joining is not a guarantee of automatic funding or competence for every project.

Compare Marketplace with Module 10's Service Catalog: Marketplace helps discover/procure offerings; Service Catalog curates approved products/templates for internal provisioning.

*Adapted study material; [Module 11, section 6 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/jHvBw/introduction-to-pricing-and-support).*

### AWS Health: service events and affected resources

AWS Health provides information about service events, planned changes, and account-specific notifications that can affect workloads. The public service-health view and the signed-in account-specific view answer different questions. The account view can identify affected resources and relevant actions.

Compare this with CloudWatch: Health tells you about AWS service/resource lifecycle events; CloudWatch observes workload metrics and logs. Your application can fail while no public AWS incident exists, and a service event may affect only some resources.

API access and dashboard access are not identical entitlements. Current documentation names eligible support plans and transitional alternatives; check that page before implementation rather than relying on the reading's broad “Premium Support” label. [AWS Health API eligibility](https://docs.aws.amazon.com/health/latest/ug/health-api.html).

*Adapted study material; [Module 10, section 9 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/S8ErT/introduction-to-monitoring-compliance-and-governance-in-the-aws-cloud).*

### Trusted Advisor and IAM Access Analyzer

Trusted Advisor evaluates supported best-practice checks and offers recommendations. The video demonstrates idle/underused resources, load balancing or scaling configuration, security gaps, and service limits. Red indicates recommended action; an investigation status asks for review; green means no problem detected by that check, not that the whole workload is perfect.

The video lists five categories. Current categories also include **operational excellence**, alongside cost optimization, performance, security, fault tolerance, and service limits. Refresh behavior differs by check; do not treat every result as a continuous real-time measurement. Access depends on the support plan. Current documentation distinguishes Basic's limited checks from broader access under eligible paid plans, whose names have changed since the recording. [Trusted Advisor access and categories](https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html).

A recommendation is not an automatic change: validate context before stopping an idle-looking resource or changing resilience settings. A service-quota warning also does not prove a quota increase is possible; requestable limits and fixed limits differ.

**IAM Access Analyzer** helps analyze access and refine permissions. The reading emphasizes external-access analysis and policy validation; additional capabilities include supported unused-access analysis and policy generation. An external-access finding identifies permitted access beyond a defined trust boundary, not proof that an attacker actually accessed the data. Policy validation identifies potential issues; remediation needs a deliberate change. It is different from GuardDuty's suspicious-activity detection and Trusted Advisor's broader best-practice checks.

*Adapted study material; [Module 10, section 10 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/S8ErT/introduction-to-monitoring-compliance-and-governance-in-the-aws-cloud).*

### Before continuing

Explain Basic, Business Support+, Enterprise Support, and Unified Operations; AWS Health, re:Post, Knowledge Center, Prescriptive Guidance, documentation, AWS Partners, Marketplace, and Professional Services.

Explain the main concepts aloud and compare the services with similar purposes. Return to the relevant section whenever you cannot justify the distinction.

Study source: independently reconstructed course guides and editorial exam-task notes. Course capture: 16 October 2026; task expansion: 20 October 2026. These explanations are not an official AWS publication. Service qualifications retain their stated review dates.
