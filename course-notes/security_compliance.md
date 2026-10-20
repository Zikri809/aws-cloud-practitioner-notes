# Security & Compliance

Work through the explanations, examples, and service comparisons below. Use the [reference notes](#reference-notes) for revision, or follow the [exam-task reading path](/study-guide#detailed-reading-by-exam-task) to study in syllabus order.

## Exam task 2.2: Security governance and compliance

### Four activities that support each other

The course presents a progression: secure systems → monitor activity → audit controls → assess compliance. Treat this as an explanatory sequence, not a one-time project waterfall. Governance defines how decisions, responsibilities, policies, and controls guide the environment throughout its life.

| Activity | Main question | Example |
|---|---|---|
| Security | How do we protect the system? | Limit access and encrypt sensitive data |
| Monitoring | What is happening now and over time? | Measure application latency and errors |
| Auditing | What evidence shows what happened and whether controls operated? | Review API activity and configuration changes |
| Compliance | Do applicable requirements and controls align? | Evaluate requirements for the workload and retain evidence |
| Governance | How do we consistently direct and control the environment? | Account standards, approved products, and permissions guardrails |

Monitoring needs a purpose. In the coffee shop, useful measures include waiting time, orders completed, and stock levels. For an application, they might include request latency, error rate, CPU utilization, or queue backlog. A rising CPU value is a symptom to interpret, not proof of one specific root cause.

*Adapted study material; [Module 10, section 1 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/S8ErT/introduction-to-monitoring-compliance-and-governance-in-the-aws-cloud).*

### Encryption and data protection

Encryption transforms plaintext into ciphertext using cryptographic operations and keys. Access authorization and encryption are complementary. An encrypted S3 object can still be disclosed through an overly permissive authorized access path.

| Data state | Example | Relevant protection |
|---|---|---|
| At rest | Stored customer data in a database or S3 object | Storage encryption and key/access controls |
| In transit | Data crossing a connection between application and service | Properly configured TLS and certificate validation |

The lesson describes using the same key to encrypt and decrypt, which is symmetric encryption. Asymmetric cryptography uses a related public/private key pair. You do not need the mathematics here, but avoid assuming every encryption mechanism uses one identical key.

#### Storage examples

- S3 encrypts new object uploads at rest by default. This does not imply every historical object was retroactively rewritten, or that a bucket is correctly permissioned just because encryption is present.
- EBS supports encryption for boot/data volumes and snapshots. Do not assume every existing EBS volume is encrypted merely because the capability exists; account settings and creation choices matter.
- DynamoDB table data is encrypted at rest, with key-management options. Customers still control data access and applicable configuration.

#### AWS KMS

AWS Key Management Service manages cryptographic keys and their use across supported services and applications. Access to administer a key and permission to use it for encryption/decryption are different concerns. Disabling a relevant key can interrupt workloads that need it; it does not erase previously obtained plaintext copies.

The course says “keys never leave KMS.” More precisely, KMS-generated KMS key material does not leave its HSM protection boundary unencrypted. Envelope encryption can use separate **data keys** outside KMS; KMS can return a plaintext data key and an encrypted copy for authorized operations. Do not confuse data keys with export of the protected KMS key material. [KMS data protection](https://docs.aws.amazon.com/kms/latest/developerguide/data-protection.html), [KMS data keys](https://docs.aws.amazon.com/kms/latest/developerguide/data-keys.html).

#### ACM and TLS

AWS Certificate Manager, ACM, manages SSL/TLS certificates and integration with supported services. TLS protects connections; SSL is the older terminology used in the recording. A certificate helps establish endpoint identity in a properly validated TLS handshake. A padlock or HTTPS does not prove a website is trustworthy in every respect, nor secure compromised endpoints or application permissions.

ACM does not itself replace every network configuration step: the certificate must be used by the supported endpoint or appropriate deployment. Distinguish ACM's certificates for connections from KMS's cryptographic key-management role.

#### Amazon Macie

Macie discovers sensitive data in supported S3 objects and evaluates relevant S3 security posture. For example, it can help identify objects containing personal information and generate findings for investigation. It does not automatically certify compliance, encrypt every object, or prove that all sensitive data is protected. The summary's word “certify” overstates the service. [Macie overview](https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html).

*Adapted study material; [Module 9, section 7 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/gIhAO/introduction-to-security-on-aws).*

### Compliance, AWS Artifact, and data location

Compliance concerns relevant regulations, standards, contracts, and internal policies. AWS provides infrastructure controls and assurance evidence that can support the customer's program. Customers remain responsible for their workload, data handling, access, configuration, and applicable requirements under the shared responsibility model.

**AWS Artifact Reports** provides on-demand access to AWS compliance documentation, including reports from independent auditors. The question “Where can I obtain AWS's audit reports?” points to Artifact. **Artifact Agreements** supports reviewing and managing selected agreements at applicable account/organization scope. Obtaining a report and accepting an agreement are different activities.

AWS infrastructure assurance is not automatic certification of every application hosted on AWS. A report's covered services, Regions, period, and controls matter. A green resource check also does not establish full organizational compliance.

The recording says AWS does not automatically replicate data across Regions. For foundational reasoning, many Regional services keep data within the selected Region unless a relevant replication capability is configured. Do not extend that to every service, global service, feature, log export, or third-party integration. Evaluate the specific service's data-location behavior and any enabled copies. Region choice is one design input, not a complete compliance decision.

The course references AWS Compliance Programs, the compliance portal, whitepapers, checklists, and customer examples. They are useful references for understanding coverage and controls, rather than evidence that every service is in scope for every program.

*Adapted study material; [Module 10, section 5 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/S8ErT/introduction-to-monitoring-compliance-and-governance-in-the-aws-cloud).*

### Config versus Audit Manager

**AWS Config** records supported resource configurations and relationships according to the recorder's scope. It can retain configuration history and evaluate resources against rules. A rule might evaluate whether a resource meets a required setting. An evaluation can be triggered by changes or a schedule depending on the rule.

Config is primarily detective: it can identify a noncompliant resource after evaluation. Merely enabling a recorder does not prohibit every unwanted change. Automated remediation is a separate configured capability, with permissions and operational consequences to consider.

**AWS Audit Manager** gathers and organizes evidence for assessments, maps evidence to controls/frameworks, and supports stakeholder reviews and audit-ready reporting. It reduces manual collection work. It does not itself determine the organization's full compliance, and collected evidence might not cover every necessary requirement. [Audit Manager purpose and limits](https://docs.aws.amazon.com/audit-manager/latest/userguide/what-is.html).

For example, Config can evaluate a required configuration. CloudTrail can show who changed it. Audit Manager can collect relevant evidence for an assessment. Artifact supplies evidence about AWS's own controls. These services complement one another.

*Adapted study material; [Module 10, section 6 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/S8ErT/introduction-to-monitoring-compliance-and-governance-in-the-aws-cloud).*

### Further distinctions

#### Interactive log queries

CloudWatch Logs Insights queries log events for interactive investigation, including across log groups. A log stream stores events; metric anomaly detection identifies unusual metric patterns; EventBridge routes events.

#### Monitor EC2 CPU and network

Amazon CloudWatch supplies EC2 CPU and network utilization metrics. Basic CPU/network metrics do not require installing the CloudWatch agent; an agent or custom publishing supplies additional guest metrics such as memory and disk-space usage.

### Exam requirements and service choices

#### Know which evidence answers the audit question

| Evidence or protection needed | Service/feature | What to look for |
|---|---|---|
| AWS's independent compliance reports and agreements | AWS Artifact | Provider evidence; not a certificate automatically covering the customer's application |
| API actions and the identity that made them | AWS CloudTrail | Activity history or configured event collection |
| Resource configuration and changes over time | AWS Config | Supported resource state, relationships, rules, and compliance evaluations |
| Application/OS log events and metric alarms | Amazon CloudWatch Logs, Logs Insights, alarms | Collect logs, query their contents, and monitor measurements |
| Allowed/rejected network traffic metadata | VPC Flow Logs | Network-flow evidence; not full packet contents |
| Supported vulnerability findings | Amazon Inspector | Vulnerable packages/exposure rather than an API action audit |
| Suspicious activity findings | Amazon GuardDuty | Threat detection rather than proof of a regulatory certification |
| Centralized posture/security findings | AWS Security Hub | Review supported findings and posture controls |
| Evidence collection for control assessments | AWS Audit Manager | Related course context; helps evidence workflows rather than granting compliance |

Log location depends on configuration. A CloudTrail trail can deliver to S3 and integrate with CloudWatch Logs; recent management-event history is different from a configured long-term trail. Application logs reach CloudWatch Logs only when a service integration, agent, or application sends them. S3 object-level actions require appropriate data-event collection; ordinary management-event history is not a record of every object read.

#### Encryption and governance as separate decisions

**AWS KMS** manages encryption keys and controlled cryptographic use. **AWS Certificate Manager (ACM)** manages supported TLS certificates. **AWS CloudHSM** supplies dedicated hardware security modules with greater customer control over HSM users and keys, with additional operational responsibility. **Secrets Manager** stores credential values; it is not the same thing as a key-management or certificate service.

Enabling storage encryption does not automatically enable TLS on every connection. Encryption also does not stop an identity that has valid data and decryption permissions from retrieving plaintext. Access control, encryption, and logging complement each other.

**AWS Organizations** groups accounts and applies organizational policies. **AWS Control Tower** helps establish and govern a multi-account landing zone. **AWS Service Catalog** supplies approved provisioning products. **AWS License Manager** supports license tracking/rules. None of these makes every workload compliant simply by being enabled.

Compliance depends on industry, jurisdiction, service eligibility, Region, configuration, and customer controls. Check the particular service's compliance scope, where data and backups reside, and whether the required agreements apply. A Region meeting a location requirement does not automatically satisfy retention, access, or audit requirements.

**Worked choice:** An auditor asks who disabled a setting, what its earlier value was, and where AWS's SOC report can be obtained. Use CloudTrail, Config, and Artifact respectively. A CloudWatch CPU chart answers none of those three questions directly.

Sources: [CloudTrail concepts](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html), [AWS compliance scope](https://aws.amazon.com/compliance/services-in-scope/), and [CloudHSM](https://docs.aws.amazon.com/cloudhsm/latest/userguide/introduction.html).

### Before continuing

Explain Artifact for AWS compliance reports, Audit Manager for assessment evidence, data residency, encryption, and detective versus preventive controls. Config, CloudTrail, and CloudWatch answer different audit questions.

Explain the main concepts aloud and compare the services with similar purposes. Return to the relevant section whenever you cannot justify the distinction.

Related explanations for this task: [cloud monitoring](/notes/cloud_monitoring#exam-task-22-security-governance-and-compliance), [account management billing support](/notes/account_management_billing_support#exam-task-22-security-governance-and-compliance).

## Exam task 2.4: Security services and resources

### Network and application protection

A denial-of-service attack attempts to exhaust availability. A distributed denial-of-service attack uses many sources. Botnets and reflected/amplified traffic are examples; a single-source attack can also harm a vulnerable target. The video's suggestion that one attacking machine can never cause damage is not a universal rule.

AWS scale, managed front doors, load balancing, and appropriate filtering support resilience. They do not guarantee that an application can never be overwhelmed or that capacity alone solves every application-layer attack.

| Control/service | Role | What it does not establish by itself |
|---|---|---|
| Security group | Stateful network filtering for associated resources/interfaces | Whether an allowed web request is a valid business transaction |
| Elastic Load Balancing | Distribute traffic across targets | Infinite target capacity or protection against every malicious request |
| Shield Standard | Automatic protection against common network/transport DDoS attacks, without an additional Shield Standard charge | A guarantee against every outage |
| Shield Advanced | Paid enhanced DDoS capabilities and support for protected supported resources | Automatic protection of every resource without configuration |
| AWS WAF | Inspect HTTP(S) web requests against configured rules | General-purpose host vulnerability scanning or identity authorization |

Security groups allow traffic based on configured networking rules, not a judgment that all allowed traffic is harmless. Do not reduce DDoS defense to “security groups use the entire Region so any attack is harmless.” Architect the application and configure its protection for the actual threats.

WAF is broader than the reading's blocked-IP example. Rules can inspect request components, identify SQL injection or cross-site scripting patterns, apply rate-based controls, and use managed rule groups. A web ACL groups rules and a default action for supported associated resources. Not every rule has to block; count, challenge, or other supported actions depend on configuration. [AWS WAF rules](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rules.html).

**Exam extension:** Compare these with Module 5's network ACLs: network ACLs operate at subnet level and are stateless; security groups are stateful. WAF's web ACL is a different concept from a VPC network ACL. For HTTP request filtering, SQL injection, and web exploits, WAF is the clue. For DDoS protection, Shield is the clue. Both can be used in a layered design.

*Adapted study material; [Module 9, section 6 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/gIhAO/introduction-to-security-on-aws).*

### Detection, investigation, and response

| Service | Primary question | Scenario clue |
|---|---|---|
| Amazon Inspector | Where are known vulnerabilities or unintended exposure in supported workloads? | Vulnerable software packages; EC2 exposure; supported ECR images/Lambda scanning |
| Amazon GuardDuty | Is activity suspicious or potentially malicious? | Threat intelligence, anomalies, suspicious account/network behavior |
| Amazon Detective | What related activity helps explain an incident? | Investigative timelines and resource/identity relationships |
| AWS Security Hub | How can findings and posture be viewed together? | Consolidate, prioritize, and coordinate findings across services |
| Amazon Macie | Where is sensitive S3 data and relevant exposure? | Sensitive data discovery |

Inspector is a vulnerability management service with continuous scanning for eligible resources. It is not a blanket scanner for every container or every resource in any environment. Its findings include resource and remediation information. [Inspector scope](https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html).

GuardDuty analyzes supported activity sources to identify threats. A suspicious request or compromised-credential pattern differs from an installed package with a known vulnerability. Inspector and GuardDuty therefore answer different questions. Findings and recommendations do not imply that every issue is automatically fixed.

Detective supports investigation with visualizations and related evidence; it does not guarantee a final root-cause conclusion or repair the resource merely by showing the timeline. Security Hub brings information together. Current documentation calls the posture-management and standards-checking capability **Security Hub CSPM**. Recognize the course's aggregation role while being aware of the newer naming. [Security Hub CSPM](https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html).

Response automation requires configuration and appropriate permissions. A finding can be routed through an event workflow to a Lambda function or another response tool. Customers must choose and validate the action. Automatically disabling access, isolating a workload, or rotating credentials can affect legitimate workloads as well as an attacker.

**Exam extension:** CloudTrail records AWS API/account activity; CloudWatch provides operational metrics, logs, and alarms. Those functions complement threat detection rather than replacing GuardDuty. Detailed monitoring and governance are continued in the next module.

*Adapted study material; [Module 9, section 8 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/gIhAO/introduction-to-security-on-aws).*

### Apply the distinctions

**A developer needs an EC2 application to read one S3 location.** Use a role with appropriately scoped permissions and temporary credentials. Avoid embedding a shared user's long-term keys. Successful role assumption and permission to read the target data are separate checks.

**A web application is receiving malicious SQL in requests.** WAF rules address application-layer request patterns. Shield addresses DDoS resilience; Inspector identifies workload vulnerabilities. An application can need all three.

**An auditor asks where sensitive S3 data is stored.** Macie matches discovery. If the request instead asks to manage encryption keys, choose KMS; to manage TLS certificates, choose ACM.

**An image contains a vulnerable package, and a separate account shows suspicious API activity.** Inspector fits the vulnerable image; GuardDuty fits threat detection. Detective can support investigation; Security Hub can consolidate findings.

**A team wants to rotate database credentials.** Secrets Manager is the direct match. Giving an IAM user a new password is not the same as managing a database application's credential lifecycle.

*Adapted study material; [Module 9, section 9 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/gIhAO/introduction-to-security-on-aws).*

### Resources and exam priorities

The module links AWS security documentation, the Knowledge Center, the AWS Security Blog, and AWS Marketplace. Documentation explains service-specific configuration; the Knowledge Center helps with common troubleshooting; the blog provides updates and technical guidance. Marketplace is a catalog of third-party offerings, not proof that installing a product satisfies every security requirement.

Prioritize authentication versus authorization; the shared responsibility split by service; root/MFA/least privilege; users/groups/roles/policies; workforce federation; Shield versus WAF; KMS versus ACM versus Secrets Manager; and Inspector versus GuardDuty versus Detective versus Security Hub versus Macie. Use the [chapter reference notes](/notes/security_compliance#reference-notes), then answer the [community practice sets](/practice).

*Adapted study material; [Module 9, section 10 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/gIhAO/introduction-to-security-on-aws).*

### Trusted Advisor and IAM Access Analyzer

Trusted Advisor evaluates supported best-practice checks and offers recommendations. The video demonstrates idle/underused resources, load balancing or scaling configuration, security gaps, and service limits. Red indicates recommended action; an investigation status asks for review; green means no problem detected by that check, not that the whole workload is perfect.

The video lists five categories. Current categories also include **operational excellence**, alongside cost optimization, performance, security, fault tolerance, and service limits. Refresh behavior differs by check; do not treat every result as a continuous real-time measurement. Access depends on the support plan. Current documentation distinguishes Basic's limited checks from broader access under eligible paid plans, whose names have changed since the recording. [Trusted Advisor access and categories](https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html).

A recommendation is not an automatic change: validate context before stopping an idle-looking resource or changing resilience settings. A service-quota warning also does not prove a quota increase is possible; requestable limits and fixed limits differ.

**IAM Access Analyzer** helps analyze access and refine permissions. The reading emphasizes external-access analysis and policy validation; additional capabilities include supported unused-access analysis and policy generation. An external-access finding identifies permitted access beyond a defined trust boundary, not proof that an attacker actually accessed the data. Policy validation identifies potential issues; remediation needs a deliberate change. It is different from GuardDuty's suspicious-activity detection and Trusted Advisor's broader best-practice checks.

*Adapted study material; [Module 10, section 10 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/S8ErT/introduction-to-monitoring-compliance-and-governance-in-the-aws-cloud).*

### Further distinctions

#### WAF association with a load balancer

Application Load Balancer supports native WAF association for HTTP(S) workloads. ALB handles application-layer HTTP(S) traffic. NLB and GWLB are not interchangeable WAF attachment points; a Lambda function is not itself a web ACL association target.

### Exam requirements and service choices

#### Complete the security service comparisons

| Requirement | Best initial match | Distinguish from |
|---|---|---|
| Centrally apply supported firewall/protection policies across accounts | AWS Firewall Manager | AWS WAF evaluates web requests; Firewall Manager coordinates supported protections centrally |
| Filter SQL injection or malicious HTTP request patterns | AWS WAF | A VPC network ACL filters network traffic at the subnet boundary |
| DDoS protection | AWS Shield | Inspector scans for vulnerabilities rather than absorbing/filtering DDoS traffic |
| Dedicated HSMs and customer control of cryptographic material | AWS CloudHSM | KMS offers integrated key management with a different control/operation model |
| Discover sensitive information in S3 | Amazon Macie | GuardDuty detects suspicious activity; it is not primarily a data-classification service |
| Evaluate access outside a defined trust boundary | IAM Access Analyzer | Detective investigates related incident activity |
| Review general best-practice checks | AWS Trusted Advisor | Security Hub focuses on supported security findings/posture |

Firewall Manager depends on the relevant organizational setup and enabled underlying protections. It does not replace writing appropriate WAF rules or automatically repair every security problem. CloudHSM is relevant when the requirement explicitly asks for dedicated HSM control; it is not automatically the right answer to every ordinary encryption request.

#### Know where security help comes from

Use **AWS security documentation** for service behavior and configuration guidance; **AWS Security Center** for security information/resources; **AWS Security Blog** for technical guidance and updates; and **AWS Knowledge Center** for common questions and troubleshooting articles. **AWS Marketplace** offers third-party security products with their own capabilities, terms, and charges. Marketplace availability does not certify that a product will satisfy every customer's security obligation.

A layered response can use several services: GuardDuty identifies suspicious activity; Detective helps investigate relationships; Security Hub brings findings together; EventBridge and an authorized response workflow can trigger actions. Threat detection and response automation are separate capabilities. Validate automated responses because isolating resources or disabling credentials can affect legitimate service.

**Worked choice:** An organization wants consistent web-protection policies across its member accounts. Firewall Manager is the management service, with WAF providing applicable request inspection. If instead the question asks which package on one EC2 instance is vulnerable, Inspector is the direct match. The word "security" alone is insufficient to choose between them.

**Check yourself:** Which service reports sensitive S3 data? Macie. Suspicious API/network behavior? GuardDuty. Related incident evidence? Detective. API history? CloudTrail. Keeping these purposes distinct is more useful than memorizing a list of security product names.

Sources: [Firewall Manager](https://docs.aws.amazon.com/waf/latest/developerguide/fms-chapter.html), [CloudHSM](https://docs.aws.amazon.com/cloudhsm/latest/userguide/introduction.html), and [AWS security resources](https://aws.amazon.com/security/).

### Before continuing

Explain GuardDuty for threats, Inspector for vulnerabilities, Security Hub for aggregated findings, KMS for keys, ACM for certificates, and official AWS security documentation and Marketplace options.

Explain the main concepts aloud and compare the services with similar purposes. Return to the relevant section whenever you cannot justify the distinction.

Study source: independently reconstructed course guides and editorial exam-task notes. Course capture: 16 October 2026; task expansion: 20 October 2026. These explanations are not an official AWS publication. Service qualifications retain their stated review dates.
