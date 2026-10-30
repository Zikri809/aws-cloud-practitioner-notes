# AWS Skill Builder — Domain 2 Practice

AWS Certified Cloud Practitioner (CLF-C02) — Security and Compliance

## Assessment results

- Score: 80%
- Attempt: 1
- Correct answers: 12
- Incorrect answers: 3
- Skipped: 0
- Total time: 3 minutes 13 seconds
- Average time per question: 13 seconds

Extracted from the supplied assessment results. AWS wording and explanations are preserved. Navigation and repeated table headings are removed. Reference labels are retained; the paste did not include their URLs.

## Questions, answers, and explanations

### Question 1

**Type:** Multiple Choice · **Time:** 7 seconds · **Result:** Correct

**Confidence level:** Confident

During a compliance review, one of the auditors requires a copy of the AWS SOC 2 report. Which service should be used to submit this request?

**Correct answer(s):** D

**Your selection(s):** D

#### A. AWS Trusted Advisor

**Correct answer:** No · **Your selection:** Not selected

Trusted Advisor is an online tool that provides you with real-time guidance to help you provision your resources by following AWS best practices, but it does not provide SOC reports.

Learn more about Trusted Advisor .

#### B. AWS Health Dashboard

**Correct answer:** No · **Your selection:** Not selected

The AWS Health Dashboard provides alerts and remediation guidance when AWS is experiencing events that might impact you and the performance of your AWS services and accounts. It does not provide Service Organization Control (SOC) reports.

Learn more about AWS Health Dashboard .

#### C. Amazon S3

**Correct answer:** No · **Your selection:** Not selected

Amazon S3 is an object storage service that offers scalability, data availability, security, and performance, but it does not provide SOC reports.

Learn more about Amazon S3 .

#### D. AWS Artifact

**Correct answer:** Yes · **Your selection:** Selected

AWS Artifact is a web service that allows you to download AWS security and compliance documents such as ISO certifications and SOC reports.

Learn more about AWS Artifact .

### Question 2

**Type:** Multi-Select · **Time:** 17 seconds · **Result:** Correct

**Confidence level:** Confident

A cloud practitioner must define the AWS shared responsibility model. What is the customer's responsibility?

**Correct answer(s):** A, C

**Your selection(s):** A, C

#### A. Determine which services have access to an Amazon DynamoDB table

**Correct answer:** Yes · **Your selection:** Selected

The customer is responsible for controlling access between services. Access between services represents security in the cloud.

Learn more about DynamoDB .

Learn more about the shared responsibility model .

#### B. Patch the physical AWS network equipment

**Correct answer:** No · **Your selection:** Not selected

AWS exclusively maintains all physical network equipment.

Learn more about the shared responsibility model .

#### C. Configure IAM users for least-privilege access

**Correct answer:** Yes · **Your selection:** Selected

AWS provides the functionality of AWS Identity and Access Management (IAM). However, the customer determines who receives specific access rights. The customer defines IAM users and assigns policies to those users.

Learn more about IAM .

#### D. Patch the operating system used by AWS Lambda functions

**Correct answer:** No · **Your selection:** Not selected

Lambda is a fully managed service. Therefore, the customer is not responsible for patching the operating system.

Learn more about the shared responsibility model .

#### E. Install patches to the database of Amazon RDS DB instances

**Correct answer:** No · **Your selection:** Not selected

Amazon RDS is a fully managed database service. AWS manages patching of the RDS engine. However, the customer can choose a time window when the patching will occur.

Learn more about DB instance maintenance .

### Question 3

**Type:** Multiple Choice · **Time:** 17 seconds · **Result:** Correct

**Confidence level:** Confident

Which service provides risk auditing by continuously monitoring and logging API requests to resources in an account, which includes user actions in the AWS Management Console and AWS SDKs?

**Correct answer(s):** C

**Your selection(s):** C

#### A. Amazon CloudWatch

**Correct answer:** No · **Your selection:** Not selected

CloudWatch monitors your AWS resources and the applications that you run on AWS in real time. You can use CloudWatch to collect and track metrics, which are variables that you can measure for your resources and applications. However, CloudWatch does not record API activity.

Learn more about CloudWatch .

#### B. AWS Config

**Correct answer:** No · **Your selection:** Not selected

AWS Config provides a detailed view of the configuration of AWS resources in your AWS account. This view includes how the resources are related to one another and how they were configured in the past so that you can see how the configurations and relationships change over time. However, AWS Config does not log API calls to resources.

Learn more about AWS Config .

#### C. AWS CloudTrail

**Correct answer:** Yes · **Your selection:** Selected

CloudTrail helps to provide governance, compliance, and operational risk auditing of your AWS account. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface (AWS CLI), and AWS SDKs and APIs.

Learn more about CloudTrail .

#### D. AWS Health

**Correct answer:** No · **Your selection:** Not selected

AWS Health provides ongoing visibility into your resource performance and the availability of your AWS services and accounts. You can use AWS Health events to learn how service and resource changes might affect your applications that run on AWS. AWS Health provides relevant and timely information to help you manage events in progress. However, AWS Health does not log API calls to resources.

Learn more about AWS Health .

### Question 4

**Type:** Multiple Choice · **Time:** 26 seconds · **Result:** Incorrect

**Confidence level:** Confident

Which task is AWS responsible for in the AWS shared responsibility model for security and compliance?

**Correct answer(s):** B

**Your selection(s):** D

#### A. Granting access to individuals and services

**Correct answer:** No · **Your selection:** Not selected

It is the users' responsibility to grant access to individuals and services.

#### B. Updating Amazon EC2 hardware

**Correct answer:** Yes · **Your selection:** Not selected

It is the responsibility of AWS to update EC2 hardware based on the AWS shared responsibility model.

Learn more about the AWS shared responsibility model .

#### C. Updating a guest operating system deployed on Amazon EC2

**Correct answer:** No · **Your selection:** Not selected

It is the users' responsibility to update guest operating systems that are deployed on Amazon EC2.

#### D. Ensuring payment card industry (PCI) compliance of user applications hosted on AWS

**Correct answer:** No · **Your selection:** Selected

AWS ensures PCI compliance of selected AWS services, but the user must still have their own applications validated.

### Question 5

**Type:** Multi-Select · **Time:** 16 seconds · **Result:** Incorrect

**Confidence level:** Confident

Which security-related services or features does AWS offer?

**Correct answer(s):** D, E

**Your selection(s):** C, D

#### A. Amazon S3 copyrighted content detection

**Correct answer:** No · **Your selection:** Not selected

Amazon S3 does not provide copyrighted content detection.

Learn more about Amazon S3 .

#### B. Automated penetration testing

**Correct answer:** No · **Your selection:** Not selected

AWS does not provide automated penetration testing. AWS customers can carry out security assessments or penetration tests on their AWS infrastructure without prior approval for some services.

Learn more about penetration testing .

#### C. Complete PCI compliance for customer applications that run on AWS

**Correct answer:** No · **Your selection:** Selected

Customers are responsible for the certification of PCI compliance of their applications. Some AWS services are certified to be PCI compliant.

Learn more about AWS Security Competency Partners .

#### D. Data encryption

**Correct answer:** Yes · **Your selection:** Selected

Many AWS services support data encryption, including Amazon Elastic Block Store (Amazon EBS) and Amazon S3. Encryption adds another layer of security to your data.

Learn more about data encryption on Amazon S3 .

Learn more about data encryption on Amazon EBS .

#### E. AWS Trusted Advisor security checks

**Correct answer:** Yes · **Your selection:** Not selected

Trusted Advisor draws upon best practices learned from serving hundreds of thousands of AWS customers. These best practices include security checks.

Learn more about Trusted Advisor .

Learn more about Trusted Advisor security checks .

### Question 6

**Type:** Multiple Choice · **Time:** 10 seconds · **Result:** Incorrect

**Confidence level:** Confident

Which AWS service provides managed threat detection that will identify compromised instances and accounts?

**Correct answer(s):** D

**Your selection(s):** A

#### A. Amazon Inspector

**Correct answer:** No · **Your selection:** Selected

Amazon Inspector is an automated security assessment service that helps improve the security and compliance of workloads on AWS. Amazon Inspector monitors workloads for software vulnerabilities or network exposure. Amazon Inspector does not identify compromised instances and accounts.

Learn more about Amazon Inspector .

#### B. AWS Shield

**Correct answer:** No · **Your selection:** Not selected

Shield is a managed DDoS protection service for applications that run on AWS. You can use Shield to help protect applications from DDoS attacks. Shield does not identify compromised instances and accounts.

Learn more about Shield .

#### C. Amazon Macie

**Correct answer:** No · **Your selection:** Not selected

Macie is a security service that uses machine learning to automatically discover, classify, and protect sensitive data that is stored in Amazon S3 buckets. Macie does not identify compromised instances and accounts.

Learn more about Macie .

#### D. Amazon GuardDuty

**Correct answer:** Yes · **Your selection:** Not selected

GuardDuty provides continuous monitoring and threat detection services. GuardDuty uses threat intelligence feeds and machine learning to identify unauthorized and malicious activity within your AWS environment. You can use GuardDuty to identify compromised instances and accounts.

Learn more about GuardDuty .

### Question 7

**Type:** Multiple Choice · **Time:** 6 seconds · **Result:** Correct

**Confidence level:** Confident

A cloud practitioner wants to explicitly deny network traffic to a subnet inside of an Amazon VPC. Which solution will meet this requirement?

**Correct answer(s):** A

**Your selection(s):** A

#### A. Network ACLs

**Correct answer:** Yes · **Your selection:** Selected

Network ACLs are firewalls that you can use to deny traffic on the VPC subnet level.

Learn more about network ACLs .

#### B. Transit gateway

**Correct answer:** No · **Your selection:** Not selected

You can use a transit gateway to interconnect your VPC and on-premises networks through a central hub. You cannot use transit gateways to deny traffic on the subnet level.

Learn more about transit gateways .

#### C. Security groups

**Correct answer:** No · **Your selection:** Not selected

Security groups are firewalls that you can use on the resource level inside of a VPC subnet. You can use security groups to control inbound and outbound traffic to a resource.

Learn more about security groups .

#### D. Route table

**Correct answer:** No · **Your selection:** Not selected

You can use a route table to direct traffic from your subnet and gateway. Route tables cannot explicitly block network traffic inside of a VPC.

Learn more about route tables .

### Question 8

**Type:** Multiple Choice · **Time:** 21 seconds · **Result:** Correct

**Confidence level:** Confident

Which of the following is the customer responsible for updating and patching, according to the AWS shared responsibility model?

**Correct answer(s):** A

**Your selection(s):** A

#### A. Amazon WorkSpaces virtual Windows desktop

**Correct answer:** Yes · **Your selection:** Selected

WorkSpaces provides a managed Desktop as a Service offering. WorkSpaces gives users the ability to interact with a virtual desktop. It is the responsibility of the customer to update and patch the operating system and any software installed by the customer in WorkSpaces. You can schedule maintenance windows or manually make the update yourself.

Learn more about update and patch management in WorkSpaces .

Learn more about customer responsibilities in WorkSpaces .

#### B. Amazon RDS for Microsoft SQL Server

**Correct answer:** No · **Your selection:** Not selected

RDS for Microsoft SQL Server is a managed service that gives you the ability to set up and scale SQL Server deployments. AWS is responsible for updates and patches. You do not need to self-manage the database on your own.

Learn more about Amazon RDS maintenance .

#### C. AWS Directory Service for Microsoft Active Directory

**Correct answer:** No · **Your selection:** Not selected

AWS Managed Microsoft AD is a managed service that gives you the ability to connect to your existing active directory or to migrate workloads. AWS is responsible for updates and patches for AWS Managed Microsoft AD.

Learn more about patches and maintenance for AWS Managed Microsoft AD .

#### D. Amazon FSx for Windows File Server

**Correct answer:** No · **Your selection:** Not selected

FSx for Windows File Server is a fully managed service that provides shared storage built on a Windows Server. AWS is responsible for updates and patches of the server.

Learn more about customer responsibilities in Amazon FSx .

### Question 9

**Type:** Multiple Choice · **Time:** 9 seconds · **Result:** Correct

**Confidence level:** Confident

A company has a new requirement to log actions taken in a production account. Which AWS service should meet that requirement?

**Correct answer(s):** A

**Your selection(s):** A

#### A. AWS CloudTrail

**Correct answer:** Yes · **Your selection:** Selected

Actions performed in AWS are recorded as events in CloudTrail. You can use CloudTrail to log actions taken in a production account, such as actions taken in the AWS Management Console, AWS CLI, and AWS SDKs.

Learn more about CloudTrail .

#### B. Amazon Inspector

**Correct answer:** No · **Your selection:** Not selected

Amazon Inspector is used to scan AWS workloads for software vulnerabilities and unintended network exposure based on industry standards. Amazon Inspector does not log actions taken in an account.

Learn more about Amazon Inspector .

#### C. AWS Config

**Correct answer:** No · **Your selection:** Not selected

AWS Config is used to view the configuration of AWS resources in your account. AWS Config does not log actions taken in an account.

Learn more about AWS Config .

#### D. Amazon CloudWatch

**Correct answer:** No · **Your selection:** Not selected

CloudWatch is used to monitor resources and applications that you run on AWS in near real time. CloudWatch can collect and track metrics to measure specific resource concerns, but it does not log actions taken in an account.

Learn more about CloudWatch .

### Question 10

**Type:** Multiple Choice · **Time:** 19 seconds · **Result:** Correct

**Confidence level:** Confident

A company wants to add a virtual firewall to an Amazon VPC. The company wants all instances inside a specific subnet to be automatically covered under this firewall. Which feature meets these requirements?

**Correct answer(s):** B

**Your selection(s):** B

#### A. IAM role

**Correct answer:** No · **Your selection:** Not selected

An IAM role is an IAM identity used to apply specific permissions. You can use an IAM role to apply permission policies that specify what the identity can and cannot access. An IAM role does not filter network traffic.

Learn more about IAM roles .

#### B. Network ACLs

**Correct answer:** Yes · **Your selection:** Selected

Network ACLs are used to allow or deny specific traffic to a VPC at the subnet level. Network ACLs operate at the subnet level and meet the requirements to add a layer of security that acts as a firewall.

Learn more about network ACLs .

Learn more about a comparison between security groups and network ACLs .

#### C. Security groups

**Correct answer:** No · **Your selection:** Not selected

Security groups are applied at the interface level of resources that are deployed within a VPC. Although a security group can be applied to all resources within a subnet, each resource must be explicitly configured to use the security group.

Learn more about security groups .

#### D. VPC Flow Logs

**Correct answer:** No · **Your selection:** Not selected

VPC Flow Logs are used to capture information about IP traffic going to and from network interfaces in your VPC. VPC Flow Logs do not act as a firewall to filter network traffic for a subnet.

Learn more about VPC Flow Logs .

### Question 11

**Type:** Multiple Choice · **Time:** 5 seconds · **Result:** Correct

Which AWS service provides a quick and automated way to create and manage AWS accounts?

**Correct answer(s):** C

**Your selection(s):** C

#### A. Amazon QuickSight

**Correct answer:** No · **Your selection:** Not selected

QuickSight is a business analytics service to build visualizations, perform one-time analysis, and quickly get business insights from data. QuickSight is not used for account creation and management.

Learn more about QuickSight .

#### B. Amazon Connect

**Correct answer:** No · **Your selection:** Not selected

Amazon Connect is a cloud contact center. Amazon Connect is not used for account creation and management.

Learn more about Amazon Connect .

#### C. AWS Organizations

**Correct answer:** Yes · **Your selection:** Selected

Organizations offers an API to create and manage AWS accounts. Organizations can control permissions that are available to accounts and can consolidate billing.

Learn more about Organizations .

#### D. Amazon Lightsail

**Correct answer:** No · **Your selection:** Not selected

Lightsail is a virtual private server that you use to build and host applications in the AWS Cloud. Lightsail is not used for account creation and management.

Learn more about Lightsail .

### Question 12

**Type:** Multiple Choice · **Time:** 7 seconds · **Result:** Correct

Which service should someone use to turn on single sign-on (SSO) to the AWS Management Console?

**Correct answer(s):** A

**Your selection(s):** A

#### A. AWS IAM Identity Center

**Correct answer:** Yes · **Your selection:** Selected

IAM Identity Center provides you with the ability to manage sign-in security for your workforce users. IAM Identity Center can be used for SSO integration to access the AWS Management Console.

Learn more about IAM Identity Center .

#### B. Amazon API Gateway

**Correct answer:** No · **Your selection:** Not selected

API Gateway is used to create and manage REST, HTTP, and WebSocket APIs. Although you can create APIs that access AWS or other web services or applications, API Gateway does not provide SSO functionality for signing in to the AWS Management Console.

Learn more about API Gateway .

#### C. Amazon Cognito

**Correct answer:** No · **Your selection:** Not selected

Cognito is used as an authentication and user management service for web and mobile applications. Cognito provides users the ability to sign in to their web or mobile applications. Cognito does not provide the ability for SSO integration to access the AWS Management Console.

Learn more about Cognito .

#### D. AWS Directory Service

**Correct answer:** No · **Your selection:** Not selected

Directory Service is a managed directory service that provides a way to organize information related to your company. Directory Service does not provide the ability for SSO integration to access the AWS Management Console.

Learn more about Directory Service .

### Question 13

**Type:** Multiple Choice · **Time:** 14 seconds · **Result:** Correct

Which task is the customer's responsibility for AWS Lambda, according to the AWS shared responsibility model?

**Correct answer(s):** A

**Your selection(s):** A

#### A. Encryption of the application data at rest

**Correct answer:** Yes · **Your selection:** Selected

Although Lambda is a fully managed service, customers are still responsible for application data. Therefore, the customer is responsible for protection and encryption of application data at rest.

Learn more about the shared responsibility model .

#### B. Management of the application platform

**Correct answer:** No · **Your selection:** Not selected

AWS is responsible for the management of the underlying infrastructure, operating system, and application platform for Lambda.

#### C. Patching of the guest operating system

**Correct answer:** No · **Your selection:** Not selected

AWS is responsible for the management of the underlying infrastructure, operating system, and application platform for Lambda.

#### D. Security of the physical infrastructure

**Correct answer:** No · **Your selection:** Not selected

According to the shared responsibility model, AWS is responsible for the physical security of facilities where the service operates. AWS is responsible for the physical infrastructure that hosts compute storage and networking resources.

### Question 14

**Type:** Multi-Select · **Time:** 9 seconds · **Result:** Correct

Which service or feature will enhance the security of access to the AWS Management Console?

**Correct answer(s):** C, D

**Your selection(s):** C, D

#### A. Security groups

**Correct answer:** No · **Your selection:** Not selected

Security groups enhance the security of instances or services within a Virtual Private Cloud (VPC). They do not enhance the security to the AWS Management Console.

Learn more about security groups .

#### B. AWS Secrets Manager

**Correct answer:** No · **Your selection:** Not selected

Secrets Manager stores and maintains sensitive parameters, such as credentials, that can be used by applications when calling other applications or services. However, it does not enhance the security to the AWS Management Console.

Learn more about Secrets Manager .

#### C. Complex password requirements

**Correct answer:** Yes · **Your selection:** Selected

Complex password requirements help protect against improper access to the AWS Management Console by making passwords more difficult to guess.

Learn more about complex password requirements for IAM .

#### D. Multi-factor authentication (MFA)

**Correct answer:** Yes · **Your selection:** Selected

MFA is a simple best practice that adds an extra layer of protection on top of your username and password. When you configure MFA, a user who signs in to the AWS Management Console will be prompted for their username and password. This is the first factor of what they know. The user will then be prompted for an authentication code from their MFA device. This is the second factor of what they have. MFA provides increased security for your AWS account settings and resources.

Learn more about MFA for IAM .

#### E. AWS Certificate Manager (ACM)

**Correct answer:** No · **Your selection:** Not selected

ACM handles SSL/TLS certificates for your AWS-based websites and applications. It does not enhance the security to the AWS Management Console.

Learn more about AWS Certificate Manager .

### Question 15

**Type:** Multiple Choice · **Time:** 10 seconds · **Result:** Correct

Which AWS service uses machine learning to help discover, monitor, and protect sensitive data that is stored in Amazon S3 buckets?

**Correct answer(s):** A

**Your selection(s):** A

#### A. Amazon Macie

**Correct answer:** Yes · **Your selection:** Selected

Macie provides data security by using machine learning to discover, monitor, and provide automated protection of sensitive data that is stored in Amazon S3.

Learn more about Macie .

#### B. Amazon Cognito

**Correct answer:** No · **Your selection:** Not selected

Amazon Cognito provides user management and authentication for web and mobile applications. Amazon Cognito does not provide sensitive data discovery or protection for data that is stored in Amazon S3.

Learn more about Amazon Cognito .

#### C. AWS Network Firewall

**Correct answer:** No · **Your selection:** Not selected

Network Firewall is a managed network firewall service that provides intrusion detection and prevention for your VPC. Network Firewall does not provide sensitive data discovery or protection for data that is stored in Amazon S3.

Learn more about Network Firewall .

#### D. AWS Shield

**Correct answer:** No · **Your selection:** Not selected

Shield Standard and Shield Advanced are DDoS protection services that operate at the network layers. Shield does not provide sensitive data discovery or protection for data that is stored in Amazon S3.

Learn more about Shield .
