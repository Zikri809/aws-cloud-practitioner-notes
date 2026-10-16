# Security & Compliance

- [Security \& Compliance](#security--compliance)
  - [AWS Shared Responsibility Model](#aws-shared-responsibility-model)
    - [Shared Responsibility Categories](#shared-responsibility-categories)
    - [Example for RDS](#example-for-rds)
    - [Example for S3](#example-for-s3)
  - [DDOS Protection on AWS](#ddos-protection-on-aws)
  - [AWS Shield](#aws-shield)
  - [AWS WAF - Web Application Firewall](#aws-waf---web-application-firewall)
  - [Penetration Testing on AWS Cloud](#penetration-testing-on-aws-cloud)
  - [Data at rest vs. Data in transit](#data-at-rest-vs-data-in-transit)
  - [AWS KMS (Key Management Service)](#aws-kms-key-management-service)
  - [AWS CloudHSM](#aws-cloudhsm)
  - [Types of Customer Master Keys: CMK](#types-of-customer-master-keys-cmk)
    - [Customer Managed CMK](#customer-managed-cmk)
    - [AWS managed CMK](#aws-managed-cmk)
    - [AWS owned CMK](#aws-owned-cmk)
    - [CloudHSM Keys (custom keystore)](#cloudhsm-keys-custom-keystore)
  - [AWS Certificate Manager (ACM)](#aws-certificate-manager-acm)
  - [AWS Secrets Manager](#aws-secrets-manager)
  - [AWS Artifact](#aws-artifact)
  - [AWS GuardDuty](#aws-guardduty)
  - [AWS Inspector](#aws-inspector)
    - [What does AWS Inspector evaluate?](#what-does-aws-inspector-evaluate)
  - [AWS Config](#aws-config)
  - [Amazon Macie](#amazon-macie)
  - [AWS Security Hub](#aws-security-hub)
  - [Amazon Detective](#amazon-detective)
  - [AWS Abuse](#aws-abuse)
  - [Root user privileges](#root-user-privileges)
  - [IAM Access Analyzer](#iam-access-analyzer)
  - [Summary](#summary)


## AWS Shared Responsibility Model

- AWS and customers share responsibilities for security and compliance.
  - **AWS:** Responsible for the security **of the cloud** (infrastructure).
  - **Customer:** Responsible for the security **in the cloud** (applications and data).
  - **Shared controls:** Patch Management, Configuration Management, Awareness & Training

### Shared Responsibility Categories

| **Aspect**            | **AWS Responsibility**                             | **Customer Responsibility**                             |
| --------------------- | -------------------------------------------------- | ------------------------------------------------------- |
| **Infrastructure**    | Physical security, hardware, and global network.   | Not applicable (fully managed by AWS).                  |
| **Configuration**     | Default configurations for services.               | Customize configurations to meet security requirements. |
| **Data Protection**   | Ensure data encryption capabilities are available. | Encrypt sensitive data and manage access permissions.   |
| **Patching**          | Patching underlying infrastructure.                | Patching the operating system and applications.         |
| **Access Management** | IAM service availability and best practices.       | Defining and enforcing user and resource permissions.   |

### Example for RDS

- **AWS Responsibility:**
  - Managing the underlying database engine (e.g., MySQL, PostgreSQL).
  - Ensuring hardware security and network isolation.
  - Applying patches to the database software.
  - Operate and maintain the underlying instance and storage infrastructure.

- **Customer Responsibility:**
  - Managing database credentials and access control.
  - Encrypting data at rest and in transit.
  - Defining backup and recovery policies.
  - Monitoring database performance using CloudWatch.
  - Ensure parameter groups or DB is configured to only allow SSL connections

### Example for S3

- **AWS Responsibility:**
  - Ensuring data durability and availability.
  - Managing infrastructure security for S3.
  - Operate scalable object storage within documented service limits.
  - Operate the service infrastructure with AWS access-control and data-protection controls; customers still configure who may access their data.
  - Ensure separation of the data between different customers

- **Customer Responsibility:**
  - Configuring bucket policies, access control lists (ACLs), and IAM roles.
  - Select suitable encryption and access policies. New S3 uploads are already encrypted with at least SSE-S3; stronger or client-side requirements remain a customer design decision.
  - Monitoring and auditing access using AWS CloudTrail and S3 access logs.
  - Implementing versioning and lifecycle policies for object management.

<img src="../images/Shared_Responsibility_Model.jpg">

<img src="../images/shared_responsibility_model_2.png">

## DDOS Protection on AWS

- **AWS Shield Standard**: protects against DDOS attack for your website and applications, for all customers at no additional costs
- **AWS Shield Advanced**: 24/7 premium DDoS protection
- **AWS WAF**: Filter specific requests based on rules
- **CloudFront and Route 53**:
  - Availability protection using global edge network
  - Combined with AWS Shield, provides attack mitigation at the edge
- Be ready to scale – leverage **AWS Auto Scaling**

## AWS Shield

- Helps detect and mitigate DDoS attacks; do not interpret protection as a guarantee that every attack is prevented.
- AWS Shield which protects against Distributed Denial of Service (DDoS) attacks is available globally on Amazon CloudFront Edge Locations.
- Amazon EC2, Elastic Load Balancing (ELB), Amazon CloudFront, Amazon Route 53, AWS Global Accelerator provide automatic ddos protection.
- Provides protection from attacks such as SYN/UDP Floods, Reflection attacks and other layer 3/layer 4 attacks
- Shield Advanced includes eligibility for Shield Response Team assistance; expert response and cost-protection features are not blanket Shield Standard benefits.
- Protect against higher fees during usage spikes due to DDoS

## AWS WAF - Web Application Firewall

- Protects your web applications from common web exploits (Layer 7)
- Layer 7 is HTTP (vs Layer 4 is TCP)
- Deploy on **Application Load Balancer, API Gateway, CloudFront**
- Define Web ACL (Web Access Control List):
  - Rules can include IP addresses, HTTP headers, HTTP body, or URI strings
  - Protects from common attack - SQL injection and Cross-Site Scripting (XSS)
  - Size constraints, geo-match (block countries)
  - Rate-based rules (to count occurrences of events) – for DDoS protection

## Penetration Testing on AWS Cloud

- AWS permits testing customer-owned resources on its current permitted-services list without prior approval, subject to the penetration-testing policy. The following examples are not an exhaustive or permanently fixed list:
  - Amazon EC2 instances, NAT Gateways, and Elastic Load Balancers
  - Amazon RDS
  - Amazon CloudFront
  - Amazon Aurora
  - Amazon API Gateways
  - AWS Lambda and Lambda Edge functions
  - Amazon Lightsail resources
  - Amazon Elastic Beanstalk environments
- List can increase over time
- Prohibited Activities
  - DNS zone walking via Amazon Route 53 Hosted Zones
  - Denial of Service (DoS), Distributed Denial of Service (DDoS), Simulated DoS, Simulated DDoS
  - Port flooding
  - Protocol flooding
  - Request flooding (login request flooding, API request flooding)
- For any other simulated events, contact aws-security-simulatedevent@amazon.com
- Read more: <https://aws.amazon.com/security/penetration-testing/>

## Data at rest vs. Data in transit

- At rest: data stored or archived on a device
  - On a hard disk, on a RDS instance, in S3 Glacier Deep Archive, etc.
- In transit (in motion): data being moved from one location to another
  - Transfer from on-premises to AWS, EC2 to DynamoDB, etc.
  - Means data transferred on the network
- We want to encrypt data in both states to protect it!
- For this we leverage encryption keys

## AWS KMS (Key Management Service)

- Anytime you hear “encryption” for an AWS service, it’s most likely KMS
- KMS = AWS manages the encryption keys for us
- Encryption configuration depends on the service; do not assume all entries below are unencrypted by default:
  - EBS volumes: encrypt volumes
  - S3: all new uploads have default SSE-S3 encryption; optionally select other supported modes.
  - Redshift database: encryption of data
  - RDS database: encryption of data
  - EFS drives: encryption of data
- Encryption Automatically enabled:
  - CloudTrail Logs
  - S3 Glacier
  - Storage Gateway

## AWS CloudHSM

- It is a service to keep hardware-based crypto keys safe.
- Hardware certification depends on the HSM type. Check the current CloudHSM documentation for the relevant FIPS validation rather than assuming one version for every HSM.
- Offers customers a private, isolated HSM access.
- Provides the ability to integrate with AWS services (e.g. Amazon RDS, Amazon S3).
- CloudHSM is designed for applications with high performance and security requirements, especially for cryptographic operations.
- You manage your own encryption keys entirely (not AWS)

## Types of Customer Master Keys: CMK

Current terminology is **KMS keys**. CMK is the older name. Distinguish customer managed keys, AWS managed keys, and AWS owned keys.

### Customer Managed CMK

- Create, manage and used by the customer, can enable or disable
- Eligible customer managed symmetric keys support configurable automatic rotation periods (90 to 2,560 days), with 365 days as the default, and on-demand rotation. Rotating key material does not change the key ID; previous material remains available to decrypt older ciphertext.
- Possibility to bring-your-own-key

### AWS managed CMK

- Created, managed and used on the customer’s behalf by AWS
- Used by AWS services (aws/s3, aws/ebs, aws/redshift)

### AWS owned CMK

- Collection of CMKs that an AWS service owns and manages to use in multiple accounts
- AWS can use those to protect resources in your account (but you can’t view the keys)

### CloudHSM Keys (custom keystore)

- Keys generated from your own CloudHSM hardware device
- Cryptographic operations are performed within the CloudHSM cluster

## AWS Certificate Manager (ACM)

- Let’s you easily provision, manage, and deploy **SSL/TLS Certificates**
- Used to provide in-flight encryption for websites (HTTPS)
- Supports both public and private TLS certificates
- Non-exportable public certificates used with integrated services have no ACM certificate charge. Exportable public certificates and private CA services have charges; not every ACM certificate is free.
- Automatic TLS certificate renewal
- Integrations with (load TLS certificates on)
  - Elastic Load Balancers
  - CloudFront Distributions
  - APIs on API Gateway

## AWS Secrets Manager

- Enables applications, automated processes, and other AWS services to securely access confidential information.
- Provides a simple and automated way to return, manage and retrieve confidential information.
- It has the capacity to store sensitive data such as passwords and API keys for integration into AWS services or databases.
- Thanks to integration with AWS KMS (Key Management Service), confidential information is protected with strong encryption.

## AWS Artifact

- AWS Artifact aims to provide access to **security and compliance documentation** and reports for AWS accounts.
- You can use these documents to support security controls and compliance requirements.
- **Artifact Reports** - Allows you to download AWS security and compliance documents from third-party auditors, like AWS ISO certifications, Payment Card Industry (PCI), and System and Organization Control (SOC) reports
- **Artifact Agreements** - Allows you to review, accept, and track the status of AWS agreements such as the Business Associate Addendum (BAA) or the Health Insurance Portability and Accountability Act (HIPAA) for an individual account or in your organization
- Can be used to support internal audit or compliance

## AWS GuardDuty

- GuardDuty is used to automatically detect **malicious activities and threats** in your AWS accounts.
- Monitors security threats using **anomaly-based detection** techniques and provides real-time alerts.
- Can detect threats such as identity theft, network attacks and behavioral analysis.
- Quickly detects potential threats with threat data and behavioral analysis.
- Intelligent Threat discovery to Protect AWS Account
- Uses Machine Learning algorithms, anomaly detection, 3rd party data
- One click to enable (30 days trial), no need to install software
  - Input data includes:
  - CloudTrail Events Logs – unusual API calls, unauthorized deployments
    - CloudTrail Management Events – create VPC subnet, create trail, …
    - CloudTrail S3 Data Events – get object, list objects, delete object, …
  - VPC Flow Logs – unusual internal traffic, unusual IP address
  - DNS Logs – compromised EC2 instances sending encoded data within DNS queries
  - Kubernetes Audit Logs – suspicious activities and potential EKS cluster compromises
- Can setup CloudWatch Event rules to be notified in case of findings
- CloudWatch Events rules can target AWS Lambda or SNS
- Can protect against CryptoCurrency attacks (has a dedicated “finding” for it)

## AWS Inspector

- AWS Inspector is a service that automatically evaluates the security and compliance of your applications on AWS.
- This service scans your applications and identifies potential security vulnerabilities and compatibility issues.
- Creates reports and makes suggestions about detected vulnerabilities and incompatibilities.
- For EC2 instances
  - Leveraging the AWS System Manager (SSM) agent
  - Analyze against unintended network accessibility
  - Analyze the running OS against known vulnerabilities
- For Containers push to Amazon ECR
  - Assessment of containers as they are pushed
- Reporting & integration with AWS Security Hub
- Send findings to Amazon Event Bridge

### What does AWS Inspector evaluate?

- Inspector scans supported EC2 workloads, ECR container images, and Lambda functions. Supported scan modes and resource coverage vary; Inspector Classic is a retired, separate service.
- Continuous scanning of the infrastructure, only when needed
- Package vulnerabilities (EC2 & ECR) – database of CVE
- Network reachability (EC2)
- A risk score is associated with all vulnerabilities for prioritization

## AWS Config

- Helps with auditing and recording compliance of your AWS resources
- Helps record configurations and changes over time
- Possibility of storing the configuration data into S3 (analyzed by Athena)
- Questions that can be solved by AWS Config:
  - Is there unrestricted SSH access to my security groups?
  - Do my buckets have any public access?
  - How has my ALB configuration changed over time?
- You can receive alerts (SNS notifications) for any changes
- AWS Config is a per-region service
- Can be aggregated across regions and accounts
- **View compliance of a resource over time**
- **View configuration of a resource over time**
- **View CloudTrail API calls if enabled**

## Amazon Macie

- Amazon Macie discovers sensitive data and evaluates security/privacy risks in supported S3 data. It does not automatically scan all databases or all data in every AWS service.
- Macie helps identify and alert you to sensitive data, such as personally identifiable information (PII)

## AWS Security Hub

- Central security tool to manage security across several AWS accounts and automate security checks
- Integrated dashboards showing current security and compliance status to quickly take actions
- Automatically aggregates alerts in predefined or personal findings formats from various AWS services & AWS partner tools:
  - GuardDuty
  - Inspector
  - Macie
  - IAM Access Analyzer
  - AWS Systems Manager
  - AWS Firewall Manager
  - AWS Partner Network Solutions
- Security Hub CSPM controls that use AWS Config require the relevant Config recorder and resource recording. This is not a prerequisite for every Security Hub finding integration or every newer Security Hub capability.

## Amazon Detective

- GuardDuty, Macie, and Security Hub are used to identify potential security issues, or findings
- Sometimes security findings require deeper analysis to isolate the root cause and take action – it’s a complex process
- Amazon Detective **analyzes, investigates, and quickly identifies the root cause of security issues or suspicious activities (using ML and graphs)**
- **Automatically collects and processes events** from VPC Flow Logs, CloudTrail, GuardDuty and create a unified view

## AWS Abuse

- Report suspected AWS resources used for abusive or illegal purposes
- Abusive & prohibited behaviors are:
  - Spam – receiving undesired emails from AWS-owned IP address, websites & forums spammed by AWS resources
  - Port scanning – sending packets to your ports to discover the unsecured ones
  - DoS or DDoS attacks – AWS-owned IP addresses attempting to overwhelm or crash your servers/softwares
  - Intrusion attempts – logging in on your resources
  - Hosting objectionable or copyrighted content – distributing illegal or copyrighted content without consent
  - Distributing malware – AWS resources distributing software to harm computers or machines
- Contact the AWS Abuse team: AWS abuse form, or abuse@amazonaws.com

## Root user privileges

- Root user = Account Owner (created when the account is created)
- Has complete access to all AWS services and resources
- Do not create root access keys. Protect root sign-in with MFA and use federated workforce access for routine work.
- Do not memorize the old claim that changing a support plan is root-only: authorized IAM principals can change plans. Organizations can also centrally perform some privileged tasks for member accounts.
- Tasks that still require root credentials in the applicable account context include changing the root password and configuring S3 MFA Delete. Account closure and recovery have standalone/member-account distinctions; consult the current task list rather than assuming root is always the only path.

[AWS root-user guidance](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html) and [support-plan changes](https://docs.aws.amazon.com/awssupport/latest/user/changing-support-plans.html) explain the exceptions.

## IAM Access Analyzer

- AWS IAM Access Analyzer is a tool that scans your AWS resource policies to find any unintended public or cross-account access. It helps you identify and fix security issues, ensuring that only authorized entities have access to your resources.
- Find out which resources are shared externally:
  - S3 Buckets
  - IAM Roles
  - KMS Keys
  - Lambda Functions and Layers
  - SQS queues
  - Secrets Manager Secrets
- Define Zone of Trust = AWS Account or AWS Organization.
- Access outside zone of trusts => findings

<img src="../images/IAM_Access_Analyzer.png" height="350" width="300">

## Summary

- Shared Responsibility on AWS
- Shield: Automatic DDoS Protection + 24/7 support for advanced
- WAF: Firewall to filter incoming requests based on rules
- KMS: Encryption keys managed by AWS
- CloudHSM: Hardware encryption, we manage encryption keys
- AWS Certificate Manager: provision, manage, and deploy SSL/TLS Certificates
- Artifact: Get access to compliance reports such as PCI, ISO, etc…
- GuardDuty: Find malicious behavior with VPC, DNS & CloudTrail Logs
- Inspector: vulnerability assessment for supported EC2, ECR, and Lambda resources; scan modes vary.
- Config: Track config changes and compliance against rules
- Macie: Find sensitive data (ex: PII data) in Amazon S3 buckets
- CloudTrail: Track API calls made by users within account
- AWS Security Hub: gather security findings from multiple AWS accounts
- Amazon Detective: find the root cause of security issues or suspicious activities
- AWS Abuse: Report AWS resources used for abusive or illegal purposes
- Root user privileges:
  - Change account settings
  - Close your AWS account
  - Check the current task-specific permissions; changing support plans can be delegated to authorized IAM principals.
  - Register as a seller in the Reserved Instance Marketplace

## AWS documentation review

Reviewed 16 October 2026. Corrected Inspector scope, root-only tasks, KMS terminology and rotation, ACM certificate pricing, and several overly broad security claims.

- [Amazon Inspector](https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html)
- [KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html)
- [KMS key rotation](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html)
- [ACM exportable public certificates](https://docs.aws.amazon.com/acm/latest/userguide/acm-exportable-certificates.html)
- [Root user tasks](https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-tasks.html)
- [Change a support plan](https://docs.aws.amazon.com/awssupport/latest/user/changing-support-plans.html)
- [AWS penetration testing policy](https://aws.amazon.com/security/penetration-testing/)
- [Security Hub CSPM and AWS Config](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-prereq-config.html)
