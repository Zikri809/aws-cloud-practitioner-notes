# Fresh recall drills

These 32 original practice prompts target your misses and uncertain correct answers. They are study materials, not AWS official exam questions. Start with the answer hidden; say the choice, decisive requirement, and why the closest alternative fails. Use paper to record answers and confidence before revealing feedback.

Score one point per numbered drill only when every requested part is correct. Target 29/32 on a delayed attempt, with explanations. This is a personal study target, not an AWS passing threshold. If a drill has several parts, getting only one right does not earn the point.

## Identity and responsibility — drills 1–8

### Drill 1 — hardware and PCI

A retailer hosts its checkout application on EC2. Who replaces a failed physical server, who patches the guest OS, and who remains responsible for the application's PCI requirements?

<details><summary>Reveal answer and deciding requirement</summary>

AWS replaces the physical hardware. The customer patches the EC2 guest OS and remains responsible for the application's relevant PCI requirements. The deciding distinction is infrastructure security versus the customer's workload and compliance duties. AWS compliance is not automatic application compliance.

</details>

### Drill 2 — a shared control

An auditor asks for a control that both AWS and the customer perform for their own organizations. Choose awareness/training or configuring the customer's EC2 instance, and explain the division.

<details><summary>Reveal answer and deciding requirement</summary>

Awareness and training: AWS trains its personnel; the customer trains theirs. Customer EC2 instance configuration does not become an AWS task just because the overall model is called shared responsibility.

</details>

### Drill 3 — IAM membership

A developer needs two permission sets managed through IAM user groups. Can one user join two groups? Can the groups contain another group? Does a newly created IAM user automatically join a default group?

<details><summary>Reveal answer and deciding requirement</summary>

Yes, a user can belong to multiple groups. No, IAM user groups cannot contain other groups; they contain users. No, new users do not automatically join a default group.

</details>

### Drill 4 — the credential pair

A legacy integration explicitly requires a long-term IAM access key. Name both components. Would substituting a user ID for either component work?

<details><summary>Reveal answer and deciding requirement</summary>

Access key ID and secret access key. A user ID is not a substitute for either credential. The scenario explicitly asks about a long-term access key; it does not establish that these keys are the preferred approach for modern workloads.

</details>

### Drill 5 — workload permission and root

An EC2 application reads a secret and then writes to S3. Should you embed root keys, embed IAM user keys, or attach a suitably permitted IAM role? What should you do with existing root access keys?

<details><summary>Reveal answer and deciding requirement</summary>

Attach an IAM role with the required least-privilege permissions. The instance receives temporary credentials. Delete existing root access keys where possible and protect root with MFA. Reading sensitive information is not a justification for routine root access.

</details>

### Drill 6 — a certificate and a stored file

You need managed HTTPS certificates for an ALB and managed keys for S3 at-rest encryption. Assign ACM, KMS and RAM to the correct roles.

<details><summary>Reveal answer and deciding requirement</summary>

ACM manages the TLS certificates. KMS manages encryption keys used by S3 when configured for SSE-KMS; S3 performs the storage encryption. RAM shares supported resources across accounts and does not fulfill either task. TLS protects data in transit, not stored objects at rest.

</details>

### Drill 7 — the security pillar

Choose two security design actions: record/audit actions on resources; expand to more countries quickly; protect stored and transmitted data. Explain why the remaining action is related to cloud benefits but does not answer this requirement.

<details><summary>Reveal answer and deciding requirement</summary>

Record/audit actions for traceability, and protect data in transit and at rest. Rapid global expansion is a cloud benefit rather than the security design principle being requested.

</details>

### Drill 8 — temporary authentication

A federated CLI session has an access key ID and secret access key but requests fail because one temporary credential component is missing. What is it? Is hard-coding a long-term key the preferred fix?

<details><summary>Reveal answer and deciding requirement</summary>

The session token is missing. Temporary credentials use an access key ID, secret access key and session token. Correct the temporary credential configuration; prefer federation/roles where possible instead of replacing it with a hard-coded long-term key.

</details>

## Networking and delivery — drills 9–15

### Drill 9 — two Regions and one Region

Choose the service for DNS health-based routing between endpoints in two Regions. Then choose the service for HTTP host/path routing among targets within one Region: Route 53, ALB or NLB?

<details><summary>Reveal answer and deciding requirement</summary>

Route 53 handles the DNS routing; ALB handles the application routing. NLB primarily handles transport-layer flows. “Load balancing” without scope or protocol is too vague to decide correctly.

</details>

### Drill 10 — direct WAF integration

A team wants a web ACL directly associated with its load balancer to filter SQL injection requests. Which load balancer should it choose, ALB or NLB? Would Shield replace this web request inspection?

<details><summary>Reveal answer and deciding requirement</summary>

ALB supports direct AWS WAF web ACL association; NLB does not. WAF filters web requests. Shield addresses DDoS protection and is not the SQL-injection rule engine requested here.

</details>

### Drill 11 — employee devices

A company has no office data center. Individual employees need private connectivity from their laptops to a VPC. Choose Client VPN, Site-to-Site VPN or Amazon Connect.

<details><summary>Reveal answer and deciding requirement</summary>

Client VPN. The source is individual remote devices. Site-to-Site VPN connects networks; Amazon Connect is a contact-center service.

</details>

### Drill 12 — networks and a hub

Name one service for an encrypted on-premises-to-VPC tunnel and one for a dedicated private connection. Does a Transit Gateway alone provide the physical/on-premises link?

<details><summary>Reveal answer and deciding requirement</summary>

Site-to-Site VPN supplies the tunnel; Direct Connect supplies dedicated private connectivity. Transit Gateway is a routing hub and needs the appropriate VPN/Direct Connect connectivity attachment. A Direct Connect connection is not automatically encrypted by default.

</details>

### Drill 13 — paths and filters

Which two controls filter VPC traffic: a route table, a security group, or a network ACL? Which is stateful? Which has explicit deny rules?

<details><summary>Reveal answer and deciding requirement</summary>

Security groups and network ACLs. Security groups are stateful and use allow rules. NACLs are stateless and support allow and deny rules. Route tables select paths, even though a missing route can also affect reachability.

</details>

### Drill 14 — website latency versus uploads

Global readers need cached copies of a static website. A separate team needs faster long-distance uploads into S3. Assign CloudFront and S3 Transfer Acceleration.

<details><summary>Reveal answer and deciding requirement</summary>

CloudFront caches and delivers website content. S3 Transfer Acceleration accelerates transfers to/from S3. The deciding requirement is content delivery/cache versus transferring objects.

</details>

### Drill 15 — failover and geography

For DNS failover between website endpoints, choose Route 53 or CloudFront. Can CloudFront also support a different form of origin failover? Where would you place two EC2 instances needing separate data centers with low communication latency?

<details><summary>Reveal answer and deciding requirement</summary>

Route 53 is the DNS failover answer. CloudFront can support origin failover inside a distribution, so avoid saying it cannot do failover at all. Place the instances in different AZs within the same Region for separate facilities with low inter-AZ latency.

</details>

## Support and costs — drills 16–19

### Drill 16 — legacy plan choices

An older question offers Basic, Developer, Business and Enterprise. The requirement is the lowest-cost technical phone support plan. Which choice fits? Would business-hours email support suffice?

<details><summary>Reveal answer and deciding requirement</summary>

Business is the expected answer for those legacy choices. Developer's business-hours technical email support does not satisfy a phone-support requirement. Enterprise exceeds the minimum tier requested.

</details>

### Drill 17 — current plan choices

The options are Basic, Business Support+, Enterprise Support and Unified Operations. A team needs 24/7 access to technical support engineers and the full Trusted Advisor checks at the lowest qualifying tier. Choose and explain why Enterprise is tempting.

<details><summary>Reveal answer and deciding requirement</summary>

Business Support+. It satisfies those capabilities. Enterprise also qualifies but is not the least-expensive qualifying tier. Keep the current labels distinct from the legacy question in drill 16.

</details>

### Drill 18 — pricing behavior

A batch workload tolerates interruption and seeks spare EC2 capacity whose price reflects supply/demand. Choose Spot, On-Demand or a Savings Plan. Then name the ordinary usage-based model without a term commitment.

<details><summary>Reveal answer and deciding requirement</summary>

Spot for interruptible spare capacity. On-Demand for ordinary usage without a term commitment. Savings Plans exchange a term usage commitment for discounts; they are not the spare-capacity market.

</details>

### Drill 19 — separate costs and analyze them

Choose the mechanism for each: isolate production/non-production spend by account; attribute project costs inside an account; consolidate member bills; analyze past spending; alert on a budget; estimate a planned design. Do IAM roles create separate account bills?

<details><summary>Reveal answer and deciding requirement</summary>

Separate AWS accounts; activated cost allocation tags; AWS Organizations; Cost Explorer; AWS Budgets; AWS Pricing Calculator. IAM roles control permissions and do not create separate account bills.

</details>

## Benefits and frameworks — drills 20–23

### Drill 20 — change speed

A company wants to ship experiments faster, while another wants to add/remove compute as demand changes. Which need is agility, which is elasticity, and does security directly describe faster time to market?

<details><summary>Reveal answer and deciding requirement</summary>

Faster experiments/time to market means agility. Matching capacity to demand means elasticity. Security is valuable but does not directly name the change-speed benefit requested.

</details>

### Drill 21 — the human bridge

A transformation focuses on staff skills, organizational change and bridging technology with business. Choose CAF People, Operations or Platform.

<details><summary>Reveal answer and deciding requirement</summary>

People. Operations concerns delivering/running cloud services; Platform concerns building the cloud platform. The human/organizational requirement decides this question.

</details>

### Drill 22 — risk and benefits

Which CAF perspective owns transformation-risk oversight and benefits management? Does the phrase “operational risk” force the answer to Operations?

<details><summary>Reveal answer and deciding requirement</summary>

Governance. Read the capability and oversight context. A word resembling a perspective name is not enough; risk oversight and benefits management are Governance capabilities.

</details>

### Drill 23 — perspectives and pillars

Classify each: performance/capacity management as a CAF capability; operations as code as a Well-Architected principle; rightsizing as a cost-related principle. Which tool reviews a workload's architecture against AWS best practices?

<details><summary>Reveal answer and deciding requirement</summary>

CAF Operations; Well-Architected operational excellence; cost optimization. AWS Well-Architected Tool supports workload reviews. CAF perspectives and Well-Architected pillars belong to different frameworks.

</details>

## Monitoring and security services — drills 24–27

### Drill 24 — three kinds of evidence

Choose a service for each: historical security-group configuration; the identity that called an API; CPU metrics and alarms; an interactive query over CloudWatch logs.

<details><summary>Reveal answer and deciding requirement</summary>

AWS Config; CloudTrail; CloudWatch; CloudWatch Logs Insights. Ask whether the evidence is resource state, account activity, operational telemetry or a log query.

</details>

### Drill 25 — advice, quota changes and catalogs

A team needs a best-practice warning about a supported account quota, then wants to request an increase. Another team wants approved infrastructure products. Assign Trusted Advisor, Service Quotas and Service Catalog.

<details><summary>Reveal answer and deciding requirement</summary>

Trusted Advisor for the supported limit recommendation; Service Quotas to view/manage quotas and request supported increases; Service Catalog for approved products. Service Catalog does not replace quota advice.

</details>

### Drill 26 — threat or vulnerability

Which service fits anomalous API behavior indicating stolen credentials? Which fits known vulnerable software packages or unintended network exposure? Choose GuardDuty and Inspector.

<details><summary>Reveal answer and deciding requirement</summary>

GuardDuty detects suspicious activity/threats. Inspector assesses vulnerabilities and unintended network exposure. A compromised workload and a vulnerable workload are related concepts but different requested detection tasks.

</details>

### Drill 27 — sensitive data and compliance reports

Name the service for discovering PII in S3, the service for storing database secrets, and the service for downloading AWS SOC reports.

<details><summary>Reveal answer and deciding requirement</summary>

Macie, Secrets Manager and Artifact respectively. Classifying object contents, storing credentials and retrieving AWS compliance documents are three different jobs.

</details>

## Migration and remaining uncertain answers — drills 28–32

### Drill 28 — preserve a server

A Linux server contains an Oracle database. The requirement is to replicate the existing server and run it on EC2 with minimal changes, not to change database engines. Choose MGN, SCT or Macie.

<details><summary>Reveal answer and deciding requirement</summary>

Application Migration Service (MGN). The requested unit of migration is the server. A database being present does not make schema conversion the required action.

</details>

### Drill 29 — change database engines

A supported heterogeneous database migration needs compatible schema conversion, then an initial data copy and ongoing replication. Separate the tools/capabilities and explain whether the statement “DMS never converts schemas” is accurate.

<details><summary>Reveal answer and deciding requirement</summary>

SCT or DMS Schema Conversion for supported schema conversion; DMS data migration for data copy/replication. DMS includes a named Schema Conversion feature, so the absolute statement is false. Verify source/target support in a real migration.

</details>

### Drill 30 — shared mutable files

Linux EC2 instances in two AZs need a low-administration shared filesystem and update existing files. Choose EFS Regional or EBS Multi-Attach. What limitation rules the other choice out?

<details><summary>Reveal answer and deciding requirement</summary>

EFS Regional. EBS Multi-Attach operates within one AZ and supplies shared block storage requiring appropriate filesystem/application concurrency coordination. Multiple attachment is not the same as a managed multi-AZ filesystem.

</details>

### Drill 31 — transactions and analytics

Choose the closest fit for columnar BI reporting at warehouse scale; transactional relational processing; serverless SQL over S3 without a warehouse; managed key-value/document data. Can Redshift query S3 too?

<details><summary>Reveal answer and deciding requirement</summary>

Redshift; Aurora/RDS; Athena; DynamoDB. Redshift Spectrum can query S3 external data. Do not decide using only “SQL” or “S3”; use workload and architecture requirements. DynamoDB still has quotas and capacity constraints.

</details>

### Drill 32 — stabilize the remaining boundaries

Name the best fit for each: a managed application environment with health monitoring; shell access without opening inbound SSH; physical-core-based software licensing; hybrid on-premises storage integration; hands-on migration project assistance. Finally, which pricing concept replaces upfront infrastructure investment with usage-based spending?

<details><summary>Reveal answer and deciding requirement</summary>

Elastic Beanstalk; Systems Manager Session Manager; EC2 Dedicated Hosts; Storage Gateway; Professional Services or an appropriate AWS Partner; pay-as-you-go / trading fixed for variable expenses. Session Manager still needs its prerequisites. Dedicated Instances alone do not supply the same host-level licensing visibility.

</details>

## Repair and repeat

For every miss, write one sentence explaining the boundary, then change one condition and answer again. Revisit after another block or the following day. See the [comparison sheets](/final-sprint/comparisons) for sources and the [plan](/final-sprint) for the order and time budget.
