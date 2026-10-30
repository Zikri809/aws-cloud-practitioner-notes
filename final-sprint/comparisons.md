# Service comparison sheets

Read the requirement first. Each sheet highlights a distinction you missed or answered with low confidence. Use the [evidence log](/final-sprint/evidence) for exact question references, then test yourself with the [recall drills](/final-sprint/drills).

## Identity and shared responsibility

| Requirement | Choose or recall | Why the close alternative fails |
| --- | --- | --- |
| Replace EC2 physical hardware or secure a data center | AWS responsibility | Configuring an EC2 guest OS is the customer's responsibility |
| Patch an EC2 guest OS, configure security groups, secure your application | Customer responsibility | Using AWS infrastructure does not transfer every workload task to AWS |
| Meet PCI requirements for your own application | Customer duties remain | AWS compliance helps; it does not automatically certify your application |
| Awareness and training as a shared control | AWS trains its staff; you train yours | Shared control does not mean AWS configures your EC2 instance |
| EC2 application needs S3, DynamoDB or Secrets Manager access | IAM role with least-privilege permissions | Embedded IAM user keys create unnecessary long-lived credentials |
| Organize IAM users with common permissions | IAM group | Groups contain users, cannot nest, and a user may belong to multiple groups; new users are not automatically assigned a default group |
| Identify the pair in a long-term access key | Access key ID + secret access key | A user ID is an identifier, not the missing secret credential |
| Authenticate with temporary role credentials | Access key ID + secret access key + session token | The two-part long-term key answer is incomplete for temporary credentials |
| Secure root credentials | MFA; avoid creating root access keys; delete existing ones when possible | Sensitive data access is not a reason to use root routinely |

Responsibility changes with the service: AWS handles more infrastructure operations in managed services. Keep control of your data, permissions and workload configuration. [Shared responsibility](https://aws.amazon.com/compliance/shared-responsibility-model/). Groups are permission-management collections, not identities you log in as. [IAM groups](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html).

Prefer federation/temporary credentials for people and IAM roles for workloads. If an old question specifically asks for long-term key components, give the pair; do not infer that long-lived keys are the preferred modern login method. Your practice exam's credential-rotation answer is preserved; current guidance prioritizes temporary credentials, removing unused keys and updating long-term keys when needed. [IAM best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html), [temporary credentials](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html).

| Requirement | Best match | Related option to reject |
| --- | --- | --- |
| TLS certificate lifecycle for HTTPS | AWS Certificate Manager (ACM) | RAM shares supported resources; it does not issue TLS certificates |
| Manage cryptographic keys used by integrated encryption services | AWS KMS | ACM certificate management does not encrypt stored files |
| Store and retrieve database credentials | Secrets Manager | An EC2 instance still needs an IAM role to authorize retrieval |
| Protect data and trace actions under the security pillar | Encryption in transit/at rest and traceability | “Deploy globally in minutes” is a cloud benefit rather than the requested security principle |

ACM manages certificates that enable TLS on configured endpoints. KMS manages encryption keys; the storage/application service performs the associated encryption. [ACM](https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html), [KMS](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html), [security design principles](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/security.html).

## Networking and delivery

| Requirement | Best match | Distinction to say aloud |
| --- | --- | --- |
| DNS routing across regional endpoints or DNS failover with health checks | Route 53 | An ALB distributes application traffic within its Region; it is not the global DNS service |
| HTTP/HTTPS host/path routing to targets | Application Load Balancer (ALB) | NLB primarily handles transport-layer flows |
| Direct AWS WAF web ACL association with a load balancer | ALB | NLB is not a directly supported web ACL association target |
| Cache website content near users | CloudFront | S3 Transfer Acceleration speeds transfers to/from S3; it is not a website CDN |
| Remote employee laptops connect privately to AWS networks | Client VPN | Amazon Connect is a contact-center service |
| Connect an on-premises network over an encrypted tunnel | Site-to-Site VPN | Client VPN addresses individual remote clients |
| Dedicated private network connection to AWS | Direct Connect | Private connectivity does not itself mean the link is encrypted by default |
| Central routing hub connecting VPCs and attached networks | Transit Gateway | It still needs a VPN/Direct Connect attachment for the corresponding on-premises connection |
| Stateful filtering at a resource's network interface | Security group | A route table chooses a path rather than expressing security-group allow rules |
| Stateless subnet boundary filtering | Network ACL | NACLs have allow and deny rules; security groups use allow rules |
| Separate data centers with low inter-site latency | Different AZs in one Region | Different Regions add geographic scope and typically more latency |

AWS WAF inspects web requests for rules such as SQL injection patterns. Shield addresses DDoS protection. [Supported WAF resources](https://docs.aws.amazon.com/waf/latest/developerguide/how-aws-waf-works-resources.html), [WAF](https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html).

Avoid the shortcut “failover always means Route 53.” CloudFront supports origin failover in a distribution; Route 53 is the relevant service for DNS health-based routing to alternative endpoints. DNS caches and TTLs mean a DNS change is not an instantaneous rerouting of every existing connection. [Route 53 health checks and DNS failover](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html), [CloudFront origin failover](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html).

The source, destination and traffic layer decide the answer. [VPC security groups](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html), [network ACLs](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html), [VPN options](https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/what-is.html), [Transit Gateway](https://docs.aws.amazon.com/vpc/latest/tgw/what-is-transit-gateway.html), [Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html), [S3 Transfer Acceleration](https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html).

## Support pricing and billing

You missed four minimum-tier questions. Two errors chose too little support; two chose Enterprise even though a cheaper qualifying plan was offered. Always test the channel, hours, and requested features, then minimize cost among qualifying options.

| Question vocabulary | Threshold to remember | Your previous trap |
| --- | --- | --- |
| Legacy Basic / Developer / Business / Enterprise choices | Business is the expected minimum for technical phone support, 24/7 technical help, or the full Trusted Advisor checks in these saved questions | Developer's business-hours email technical support is not technical phone support |
| Current Basic / Business Support+ / Enterprise / Unified Operations choices | Business Support+ provides 24/7 technical access by phone/web/chat/email and the full Trusted Advisor set | Enterprise also qualifies, but does not win a least-expensive question |
| Billing/account questions vs technical troubleshooting | Basic includes billing/account support | Do not mistake billing help for technical support-engineer access |

As checked on 30 October 2026, AWS documents the retirement of the old Developer/Business plans on 1 January 2027, with GovCloud exceptions. Preserve the old answer keys as historical assessment content and choose according to the labels offered. Avoid memorizing old prices or promising what labels a future exam will use. [Current Support comparison](https://aws.amazon.com/premiumsupport/plans/), [legacy Developer plan](https://aws.amazon.com/premiumsupport/plans/developers/), [Trusted Advisor access and transition notices](https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html).

| Requirement | Best match | Why a related answer fails |
| --- | --- | --- |
| EC2 spare-capacity price varies with supply/demand; interruptions acceptable | Spot | On-Demand means usage-based capacity without a term commitment; it is not the spare-capacity pricing model |
| No term commitment; ordinary EC2 usage | On-Demand | Savings Plans and Reserved Instances involve commitments |
| Discount for a 1- or 3-year usage commitment | Savings Plans | It is not a guarantee that every instance has reserved capacity |
| Split production and non-production costs by account | Separate AWS accounts | IAM roles govern authorization, not separate account bills |
| Attribute costs by project/environment inside accounts | Activated cost allocation tags | A normal tag must be activated for cost allocation; separate accounts can also be useful |
| Consolidate member-account billing | AWS Organizations | Cost Explorer analyzes spending; it does not create the organization |
| Analyze historical cost/usage and forecasts | Cost Explorer | Pricing Calculator estimates a proposed architecture; Budgets tracks thresholds and alerts |

[Spot pricing](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html), [cost allocation tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html), [Organizations billing](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html), [cost tools](https://aws.amazon.com/aws-cost-management/).

## Cloud benefits and frameworks

| Wording | Best match | Closely related but different |
| --- | --- | --- |
| Experiment, change an application quickly, shorten time to market | Agility | Elasticity changes resource supply with demand |
| Grow/shrink capacity with workload changes | Elasticity | Agility concerns the speed of change/innovation |
| Replace upfront infrastructure investment with usage-based spending | Trade fixed for variable expense / pay-as-you-go | Rightsizing reduces waste but is not the pricing model |
| Use the most suitable resource size for the workload | Cost optimization / rightsizing | Adding spare capacity is not automatically cost optimization |
| Business/technology bridge; culture, workforce and organizational change | CAF People | Operations runs services day to day |
| Transformation risk, oversight, benefits management | CAF Governance | “Operational risk” in a CAF oversight question does not automatically mean Operations |
| Performance/capacity management and service operation | CAF Operations | Governance tracks risk and benefits rather than day-to-day delivery |
| Transformation investment and business outcomes | CAF Business | A specifically named benefits-management capability belongs to Governance |
| Build scalable cloud infrastructure and application foundations | CAF Platform | CAF Security addresses security capabilities; CAF has six perspectives |
| Workload architecture review against best practices | Well-Architected Tool | CAF covers the broader organizational transformation |

The other CAF perspective is Security. Memorize all six as Business, People, Governance, Platform, Security, Operations, then connect them to tasks. [CAF perspectives](https://docs.aws.amazon.com/whitepapers/latest/overview-aws-cloud-adoption-framework/foundational-capabilities.html), [Governance capabilities](https://docs.aws.amazon.com/whitepapers/latest/overview-aws-cloud-adoption-framework/governance-perspective.html).

The six Well-Architected pillars are operational excellence, security, reliability, performance efficiency, cost optimization and sustainability. Operations as code belongs to operational excellence; automatic recovery relates to reliability; traceability and protecting data belong to security. These are pillars, not CAF perspectives. [Well-Architected pillars](https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html), [cloud benefits](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html).

## Monitoring advice and threat detection

| Requirement | Best match | Reject this nearby option |
| --- | --- | --- |
| Resource configuration history and compliance evaluation | AWS Config | CloudWatch performance monitoring does not replace the configuration record |
| API/account activity: who did what, when | CloudTrail | Config emphasizes resource state and changes |
| Metrics, alarms and operational logs | CloudWatch | CloudTrail records activity, not general application performance metrics |
| Interactive queries over CloudWatch log data | CloudWatch Logs Insights | A metric alarm is not a log query engine |
| Best-practice recommendations including supported quota/limit checks | Trusted Advisor | Service Catalog manages approved products, not account-wide quota advice |
| View/manage quotas and request supported increases | Service Quotas | Trusted Advisor can warn about supported limits but is not a substitute for the quota-management service |
| Publish approved infrastructure products/templates | Service Catalog | It does not perform the VPC-limit advisory task from your practice exam |
| Suspicious behavior or compromised credentials/accounts | GuardDuty | Inspector finds software vulnerabilities and unintended network exposure |
| Vulnerable packages and unintended network exposure | Inspector | GuardDuty's focus is threat detection |
| Sensitive data such as PII in S3 | Macie | Secrets Manager stores secrets; it does not classify bucket contents |
| SOC/ISO compliance reports | Artifact | Config records your resources, not AWS's compliance documents |
| Review architecture against best practices | Well-Architected Tool | Trusted Advisor inspects supported deployed-resource checks; it does not replace the architecture review |

[Config](https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html), [CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html), [Logs Insights](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html), [Service Quotas](https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html), [Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html), [GuardDuty](https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html), [Inspector](https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html), [Macie](https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html), [Artifact](https://docs.aws.amazon.com/artifact/latest/ug/what-is-aws-artifact.html).

## Migration storage and analytics

| Requirement | Best match | Your important boundary |
| --- | --- | --- |
| Lift and shift an existing server/application to EC2 | Application Migration Service (MGN) | A database running on the server does not automatically make this a schema-conversion task |
| Convert a supported database engine's schema | SCT or DMS Schema Conversion | Schema conversion is distinct from copying rows |
| Migrate database data and replicate ongoing supported changes | DMS data migration | MGN replicates servers; it is not the specialized heterogeneous schema conversion answer |
| Linux servers across multiple AZs share changing files with low administration | EFS Regional | EBS Multi-Attach is same-AZ block storage and requires concurrent-write coordination |
| Several compatible instances in one AZ share a supported EBS block volume | EBS Multi-Attach | It is not a managed multi-AZ shared filesystem |
| On-premises applications integrate with AWS storage | Storage Gateway | DMS focuses on databases; MGN on server migration |
| Summarize large columnar datasets for analytical/BI reporting | Redshift | Aurora is aimed at relational transactional workloads |
| SQL analytics directly against S3 without a warehouse to manage | Athena | “S3” alone is insufficient: Redshift Spectrum also queries S3 |
| Warehouse analytics including queries over S3 external data | Redshift / Redshift Spectrum | Do not teach that all S3 SQL questions must be Athena |
| Managed key-value/document database at scale | DynamoDB | “Virtually unlimited” does not remove throughput/service quotas or partition considerations |

Your Domain 1 question's answer remains SCT + DMS. Modern DMS includes a named Schema Conversion feature for supported paths; avoid the absolute statement “DMS cannot convert schemas.” [MGN](https://docs.aws.amazon.com/mgn/latest/ug/what-is-application-migration-service.html), [DMS Schema Conversion](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_SchemaConversion.html).

Regional EFS and EFS One Zone have different resilience choices; the cross-AZ scenario calls for Regional shared-file storage. Multi-Attach needs a suitable clustered filesystem/application, not ordinary concurrent ext4/XFS mounts. [EFS classes](https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html), [EBS Multi-Attach](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes-multi.html), [Redshift Spectrum](https://docs.aws.amazon.com/redshift/latest/dg/c-using-spectrum.html), [Athena](https://docs.aws.amazon.com/athena/latest/ug/what-is.html), [DynamoDB quotas](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ServiceQuotas.html).

## Other uncertain answers to stabilize

| Requirement | Recall | Avoid confusing it with |
| --- | --- | --- |
| Deploy an application with managed environment provisioning and health monitoring | Elastic Beanstalk | CloudFormation describes infrastructure as code; CloudWatch supplies monitoring capabilities |
| Remote shell without opening inbound SSH or managing SSH keys | Systems Manager Session Manager | Ordinary SSH access needs a different connectivity/key arrangement; Session Manager still needs IAM, agent and service connectivity |
| Bring licenses tied to physical cores/sockets | EC2 Dedicated Host | Dedicated Instances give dedicated tenancy without the same host-level placement and licensing visibility |
| Hands-on migration assistance | AWS Professional Services or an appropriate AWS Partner | A Support subscription alone is not the requested project delivery service |

[Elastic Beanstalk health](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html), [Session Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html), [Dedicated Hosts](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html), [Professional Services](https://aws.amazon.com/professional-services/).

## Corrections to remember

- **Question set Q20:** its ACM rationale mentions encryption at rest through TLS. The answer ACM fits transit/TLS; that at-rest explanation is incorrect. Use ACM for certificates and the relevant storage encryption/KMS for at-rest protection.
- **Legacy/current Support:** Business in older choices and Business Support+ in newer choices address the capability threshold. Do not transfer old plan prices or response times into the new tiers.
- **Programmatic access:** the access-key pair is a valid answer to the saved long-term-key question. Temporary credentials include a session token, and federation/roles are preferred where possible.
- **DMS:** distinguish schema conversion from data migration, while recognizing that DMS now offers both as separate capabilities.
- **Failover:** Route 53 is the DNS answer; CloudFront also supports origin failover. Read the specified layer and architecture.
- **S3 queries:** Athena and Redshift Spectrum can both query S3. Use the workload and available options to decide.
- **Shared storage:** EBS Multi-Attach is confined to an AZ; EFS Regional fits the multi-AZ Linux file-sharing scenario.
- **Scale wording:** DynamoDB scaling remains subject to quotas and design limits. Treat the old “virtually unlimited” wording as a service-identification cue, not a literal guarantee.

These corrections guide new learning. The [saved assessment reviews](/final-sprint/evidence#assessment-results) preserve what the pasted source said.
