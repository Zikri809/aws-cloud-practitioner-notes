# AWS Skill Builder — Official Practice Question Set

AWS Certified Cloud Practitioner (CLF-C02)

## Assessment results

- Score: 80%
- Attempt: 1
- Correct answers: 16
- Incorrect answers: 4
- Skipped: 0
- Total time: 4 minutes 45 seconds
- Average time per question: 14 seconds

Extracted from the supplied assessment results. AWS wording and explanations are preserved. Navigation and repeated table headings are removed. Reference labels are retained; the paste did not include their URLs.

## Questions, answers, and explanations

### Question 1

**Type:** Multiple Choice · **Time:** 9 seconds · **Result:** Correct

Which AWS service identifies security groups that allow unrestricted access to a user's AWS resources?

**Correct answer(s):** D

**Your selection(s):** D

#### A. Amazon CloudWatch

**Correct answer:** No · **Your selection:** Not selected

CloudWatch is a monitoring service that collects and tracks metrics for AWS resources. It does not identify security groups that allow unrestricted access.

Learn more about CloudWatch .

#### B. AWS CloudTrail

**Correct answer:** No · **Your selection:** Not selected

CloudTrail provides an audit record of API calls. It does not identify security groups that allow unrestricted access.

Learn more about CloudTrail .

#### C. AWS Identity and Access Management (IAM)

**Correct answer:** No · **Your selection:** Not selected

IAM is a service that you can use to manage permissions that control which AWS resources users can access. IAM does not identify security groups that allow unrestricted access.

Learn more about IAM .

#### D. AWS Trusted Advisor

**Correct answer:** Yes · **Your selection:** Selected

Trusted Advisor checks security groups for rules that allow unrestricted access to a resource. Unrestricted access increases opportunities for malicious activity, such as hacking, denial-of-service attacks, or loss of data. 

Learn more about Trusted Advisor checks .

### Question 2

**Type:** Multiple Choice · **Time:** 35 seconds · **Result:** Correct

A company is hosting a static website from a single Amazon S3 bucket. Which AWS service will achieve lower latency and high transfer speeds?

**Correct answer(s):** B

**Your selection(s):** B

#### A. Amazon Route 53

**Correct answer:** No · **Your selection:** Not selected

Route 53 is a highly available and scalable DNS web service. The three main functions of Route 53 are registering domain names, routing internet traffic to the resources for your domain, and checking the health of those resources. Route 53 can direct traffic to S3 buckets. But because the question describes only one S3 bucket, Route 53 would have only one potential route and could not reduce latency.

Learn more about Route 53 .

Learn more about how to route to S3 buckets with Route 53 .

#### B. Amazon CloudFront

**Correct answer:** Yes · **Your selection:** Selected

CloudFront is a web service that speeds up the distribution of your static and dynamic web content, such as .html, .css, .js, and image files, to your users. Content is cached in edge locations. Content that is repeatedly accessed can be served from the edge locations instead of the source S3 bucket.

Learn more about CloudFront .

#### C. AWS Elastic Beanstalk

**Correct answer:** No · **Your selection:** Not selected

Elastic Beanstalk is a service to deploy and scale web applications and services developed with common programming languages on automatically deployed infrastructure with capacity management, load balancing, auto scaling, and monitoring. Elastic Beanstalk makes it easier to provision and support an application. Elastic Beanstalk does not reduce website latency.

Learn more about Elastic Beanstalk .

#### D. Amazon DynamoDB Accelerator (DAX)

**Correct answer:** No · **Your selection:** Not selected

DAX is used to reduce response times from a DynamoDB table from single-digit milliseconds to microseconds. DynamoDB tables cannot host static websites.

Learn more about DAX .

### Question 3

**Type:** Multiple Choice · **Time:** 5 seconds · **Result:** Correct

A user needs to automatically discover, classify, and protect sensitive data stored in Amazon S3. Which AWS service can meet these requirements?

**Correct answer(s):** D

**Your selection(s):** D

#### A. Amazon GuardDuty

**Correct answer:** No · **Your selection:** Not selected

GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts and workloads. GuardDuty does not perform S3 data classification.

Learn more about GuardDuty .

#### B. AWS Secrets Manager

**Correct answer:** No · **Your selection:** Not selected

Secrets Manager helps you protect secrets needed to access your applications, services, and IT resources. Secrets Manager does not perform S3 data classification and automatic discovery.

Learn more about Secrets Manager .

#### C. Amazon Inspector

**Correct answer:** No · **Your selection:** Not selected

Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on Amazon EC2 instances. Amazon Inspector does not perform S3 data classification and automatic discovery.

Learn more about Amazon Inspector .

#### D. Amazon Macie

**Correct answer:** Yes · **Your selection:** Selected

Macie is a fully managed data security and data privacy service that uses machine learning and pattern matching to discover and protect sensitive data in AWS. Macie automatically discovers and classifies sensitive data in S3 buckets.

Learn more about Macie .

### Question 4

**Type:** Multi-Select · **Time:** 20 seconds · **Result:** Correct

What are benefits of using the AWS Cloud for companies with customers in many countries around the world?

**Correct answer(s):** A, E

**Your selection(s):** A, E

#### A. Amazon CloudFront has multiple edge locations around the world to reduce latency.

**Correct answer:** Yes · **Your selection:** Selected

CloudFront is a content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to global customers with low latency and high transfer speeds.

Learn more about how CloudFront delivers content .

Learn more about the CloudFront edge network .

#### B. Amazon Comprehend allows users to build applications that can respond to user requests in many languages.

**Correct answer:** No · **Your selection:** Not selected

Amazon Comprehend is a natural language processing (NLP) service that uses machine learning to find insights and relationships in text. Amazon Comprehend does not translate text.

Learn more about Amazon Comprehend .

#### C. Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world, which reduces latency.

**Correct answer:** No · **Your selection:** Not selected

A load balancer accepts incoming traffic from clients and routes requests to its registered targets (such as EC2 instances) in one or more Availability Zones. However, a load balancer does not accept targets across Regions.

Learn more about Elastic Load Balancing .

#### D. Amazon Translate automatically translates third-party website interfaces into multiple languages.

**Correct answer:** No · **Your selection:** Not selected

Amazon Translate does not provide automatic translation of third-party website interfaces.

Learn more about Amazon Translate .

#### E. Companies can deploy applications in multiple AWS Regions to reduce latency.

**Correct answer:** Yes · **Your selection:** Selected

The use of Regions around the world will improve an application's global performance and reduce latency for users.

Learn more about AWS Global Infrastructure .

Learn more about AWS Regions .

### Question 5

**Type:** Multiple Choice · **Time:** 10 seconds · **Result:** Incorrect

A company has an on-premises Linux-based server with an Oracle database that runs on it. The company wants to migrate the database server to run on an Amazon EC2 instance in AWS. Which service should the company use to complete the migration?

**Correct answer(s):** A

**Your selection(s):** B

#### A. AWS Application Migration Service (AWS MGN)

**Correct answer:** Yes · **Your selection:** Not selected

AWS MGN is an automated lift-and-shift solution. This solution can migrate physical servers and any databases or applications that run on them to EC2 instances in AWS.

Learn more about AWS MGN .

#### B. AWS Schema Conversion Tool (AWS SCT)

**Correct answer:** No · **Your selection:** Selected

AWS SCT is used to convert an existing database schema from one database engine to another database engine. You cannot use AWS SCT to migrate the server to run on an EC2 instance

Learn more about AWS SCT .

#### C. AWS Outposts

**Correct answer:** No · **Your selection:** Not selected

AWS Outposts is a fully managed service that extends AWS infrastructure and services to an on-premises site. AWS Outposts does not perform system migrations.

Learn more about AWS Outposts .

#### D. AWS Database Migration Service (AWS DMS)

**Correct answer:** No · **Your selection:** Not selected

AWS DMS can be used to migrate data from an on-premises database to a database in AWS. However, AWS DMS does not migrate the actual server to an EC2 instance.

Learn more about AWS DMS .

### Question 6

**Type:** Multi-Select · **Time:** 11 seconds · **Result:** Correct

Which tasks are the customer's responsibility according to the AWS shared responsibility model?

**Correct answer(s):** B, C

**Your selection(s):** B, C

#### A. Install patches on Amazon RDS DB instances.

**Correct answer:** No · **Your selection:** Not selected

AWS provides Amazon RDS as a service. AWS manages patches for the Amazon RDS engine. The customer can choose a time window to install patches.

Learn more about patch management for Amazon RDS .

#### B. Configure IAM users according to the principle of least privilege.

**Correct answer:** Yes · **Your selection:** Selected

AWS provides AWS Identity and Access Management (IAM) as a service. The customer defines IAM users and the access policies that apply to those users.

Learn more about the Shared Responsibility Model .

#### C. Configure security groups for Amazon EC2 instances.

**Correct answer:** Yes · **Your selection:** Selected

The customer is responsible for configuring and managing security groups to control access to their EC2 instances.

Learn more about the Shared Responsibility Model .

#### D. Control physical access to the data center that contains a customer's VPC.

**Correct answer:** No · **Your selection:** Not selected

AWS does not allow access to data centers. A customer can take a virtual tour of a data center to understand the security measures and controls. Customers cannot visit data centers in person.

Learn more about AWS data centers .

#### E. Patch the operating system that AWS Lambda functions use.

**Correct answer:** No · **Your selection:** Not selected

AWS provides Lambda as a service. The customer does not have to patch the operating system.

Learn more about the Shared Responsibility Model .

### Question 7

**Type:** Multiple Choice · **Time:** 8 seconds · **Result:** Correct

A user deploys an Amazon RDS DB instance in multiple Availability Zones. This strategy involves which pillar of the AWS Well-Architected Framework?

**Correct answer(s):** C

**Your selection(s):** C

#### A. Cost optimization

**Correct answer:** No · **Your selection:** Not selected

The cost optimization pillar includes the ability to run systems to deliver business value at the lowest price point. Reliability is supported by using resources in multiple Availability Zones. The use of multiple Availability Zones for resources will increase cost.

Learn more about cost optimization .

#### B. Security

**Correct answer:** No · **Your selection:** Not selected

The security pillar includes the ability to protect data, systems, and assets to take advantage of cloud technologies to improve a company's security. The use of multiple Availability Zones for resources does not make an application more secure.

Learn more about security .

#### C. Reliability

**Correct answer:** Yes · **Your selection:** Selected

The reliability pillar includes the ability of a workload to perform its intended function correctly and consistently when it is expected to do so. The deployment of Amazon RDS in multiple Availability Zones supports the goal of reliability because it reduces single points of failure.

Learn more about reliability .

#### D. Performance efficiency

**Correct answer:** No · **Your selection:** Not selected

The performance efficiency pillar includes the ability to use computing resources efficiently to meet system requirements, and to maintain that efficiency as demand changes and technologies evolve. The use of multiple Availability Zones does not increase performance efficiency.

Learn more about performance efficiency .

### Question 8

**Type:** Multiple Choice · **Time:** 9 seconds · **Result:** Correct

A company wants to establish a consistent and private connection from the company's on-premises data center to the AWS Cloud. Which AWS service will meet these requirements?

**Correct answer(s):** D

**Your selection(s):** D

#### A. AWS Site-to-Site VPN

**Correct answer:** No · **Your selection:** Not selected

Site-to-Site VPN creates an encrypted network path between your on-premises network and your AWS Cloud network. This connection uses the internet, so you cannot expect consistency. Even though the traffic is encrypted, the connection is not private because the internet is a shared resource.

Learn more about Site-to-Site VPN .

#### B. AWS Client VPN

**Correct answer:** No · **Your selection:** Not selected

Client VPN is a managed client-based VPN service that gives you the ability to securely access your AWS resources and the resources in your on-premises network. With Client VPN, you can access your resources from any location through an OpenVPN-based VPN client. You would use Client VPN to connect individual laptops to AWS, not an entire data center.

Learn more about Client VPN .

#### C. Amazon Connect

**Correct answer:** No · **Your selection:** Not selected

Amazon Connect is an omnichannel cloud contact center that helps you provide superior customer service at a lower cost. Amazon Connect provides a seamless experience across voice and chat for your customers and agents. Amazon Connect is not a service that connects an on-premises network to AWS.

Learn more about Amazon Connect .

#### D. AWS Direct Connect

**Correct answer:** Yes · **Your selection:** Selected

Direct Connect links your internal network to a Direct Connect location through a standard Ethernet fiber-optic cable. One end of the cable connects to your router. The other end of the cable connects to a Direct Connect router. AWS Direct Connect is consistent and private because your company is the only user of the cable.

Learn more about Direct Connect .

### Question 9

**Type:** Multiple Choice · **Time:** 8 seconds · **Result:** Incorrect

What is the MINIMUM AWS Support plan that provides technical support through phone calls?

**Correct answer(s):** A

**Your selection(s):** D

#### A. Business

**Correct answer:** Yes · **Your selection:** Not selected

You can call or chat with technical support by using the Business Support plan or the Enterprise Support plan. The Business Support plan is the minimum plan that provides this feature.

Learn more about AWS Support plans .

#### B. Enterprise

**Correct answer:** No · **Your selection:** Not selected

The Enterprise Support plan provides phone support, but it is not the minimum plan to do so.

#### C. Basic

**Correct answer:** No · **Your selection:** Not selected

The Basic Support plan provides customer support for non-technical issues, such as increases in service quotas. However, the Basic Support plan does not provide technical support.

#### D. Developer

**Correct answer:** No · **Your selection:** Selected

The Developer Support plan allows only email creation of support tickets and does not provide phone support.

### Question 10

**Type:** Multiple Choice · **Time:** 51 seconds · **Result:** Correct

An application development team needs a solution that sends an alert to an entire development team if a quality assurance test fails on an application. Which AWS service should the application development team use to meet the requirement?

**Correct answer(s):** B

**Your selection(s):** B

#### A. Amazon EventBridge

**Correct answer:** No · **Your selection:** Not selected

EventBridge is a serverless event bus that you can use to connect multiple applications together. EventBridge can combine multiple application data sources to deliver a real-time data stream. This data stream can help you integrate more services to build event-driven applications. EventBridge is not a messaging service that can deliver notification alerts.

Learn more about EventBridge .

#### B. Amazon Simple Notification Service (Amazon SNS)

**Correct answer:** Yes · **Your selection:** Selected

Amazon SNS is a service used to deliver publications to subscribers. You can use Amazon SNS to send notifications, such as mobile text messages, push notifications, or emails, to subscribers of a quality assurance test-failure topic.

Learn more about Amazon SNS .

#### C. Amazon Connect

**Correct answer:** No · **Your selection:** Not selected

Amazon Connect is a service used to create a cloud contact center that gives you the ability to engage with your users. Amazon Connect is not a messaging service and cannot send notification alerts.

Learn more about Amazon Connect .

#### D. Amazon Simple Queue Service (Amazon SQS)

**Correct answer:** No · **Your selection:** Not selected

Amazon SQS is a service used to decouple applications and systems. You can use Amazon SQS to host a queue for requests that are sent to your applications. Amazon SQS is not a messaging service and cannot send notifications alerts.

Learn more about Amazon SQS .

### Question 11

**Type:** Multiple Choice · **Time:** 11 seconds · **Result:** Correct

A company requires a relational database on AWS that records new customer orders from a website. Which AWS service or feature will meet this requirement?

**Correct answer(s):** D

**Your selection(s):** D

#### A. Amazon Elastic Block Store (Amazon EBS)

**Correct answer:** No · **Your selection:** Not selected

Amazon EBS is an easy-to-use, high-performance block-storage service. You can use Amazon EBS with Amazon EC2 for both throughput- and transaction-intensive workloads at any scale. You can run a database on Amazon EC2 instances and use Amazon EBS for the storage for that database. However, Amazon EBS by itself is not a relational database.

Learn more about Amazon EBS .

#### B. AWS Global Accelerator

**Correct answer:** No · **Your selection:** Not selected

Global Accelerator is a networking service that improves the performance of your users’ network traffic by up to 60%. Global Accelerator uses the AWS global network infrastructure. Global Accelerator is not a relational database.

Learn more about Global Accelerator .

#### C. Amazon DynamoDB

**Correct answer:** No · **Your selection:** Not selected

DynamoDB is a fully managed NoSQL database service. DynamoDB provides fast and predictable performance with seamless scalability. However, DynamoDB is not a relational database.

Learn more about DynamoDB .

#### D. Amazon Aurora

**Correct answer:** Yes · **Your selection:** Selected

Aurora is a MySQL- and PostgreSQL-compatible relational database built for the cloud. Aurora combines the performance and availability of traditional enterprise databases with the simplicity and cost-effectiveness of open source databases.

Learn more about Aurora .

### Question 12

**Type:** Multiple Choice · **Time:** 7 seconds · **Result:** Correct

Which AWS service allows customers to purchase unused Amazon EC2 capacity at an often discounted rate?

**Correct answer(s):** B

**Your selection(s):** B

#### A. On-Demand Instances

**Correct answer:** No · **Your selection:** Not selected

On-Demand Instances are the default purchase option and are immediately available. On-Demand Instances are not discounted.

Learn more about On-Demand Instances .

#### B. Spot Instances

**Correct answer:** Yes · **Your selection:** Selected

With Spot Instances, you can access unused EC2 capacity. Spot Instances can be discounted.

Learn more about Spot Instances .

#### C. Dedicated Instances

**Correct answer:** No · **Your selection:** Not selected

Dedicated Instances run in VPCs on hardware dedicated to that individual customer and are often used when there are licensing or compliance constraints. Dedicated Instances are not discounted.

Learn more about Dedicated Instances .

#### D. Reserved Instances

**Correct answer:** No · **Your selection:** Not selected

Reserved Instances reserve some capacity for your use at any time. Reserved Instances can sometimes give you a discount. However, this capacity is not unused capacity.

Learn more about Reserved Instances .

### Question 13

**Type:** Multi-Select · **Time:** 17 seconds · **Result:** Incorrect

Which credential components are required to gain programmatic access to an AWS account?

**Correct answer(s):** A, C

**Your selection(s):** C, D

#### A. An access key ID

**Correct answer:** Yes · **Your selection:** Not selected

Programmatic access requires an access key ID and a secret access key that can be assigned to an AWS user.

Learn more about access key best practices .

#### B. A primary key

**Correct answer:** No · **Your selection:** Not selected

A primary key is a feature used in database management. It does not grant AWS account access.

Learn more about AWS security credentials .

#### C. A secret access key

**Correct answer:** Yes · **Your selection:** Selected

Programmatic access requires an access key ID and a secret access key that can be assigned to an AWS user.

Learn more about access key best practices .

#### D. A user ID

**Correct answer:** No · **Your selection:** Selected

A user ID is used for IAM security credentials, but not for programmatic access.

Learn more about IAM users .

#### E. A secondary key

**Correct answer:** No · **Your selection:** Not selected

A secondary key is a feature used in database management. It does not grant AWS account access.

Learn more about AWS security credentials .

### Question 14

**Type:** Multi-Select · **Time:** 19 seconds · **Result:** Correct

How does AWS charge for AWS Lambda usage once the free tier has been exceeded?

**Correct answer(s):** C, E

**Your selection(s):** C, E

#### A. By the number of versions of a specific Lambda function

**Correct answer:** No · **Your selection:** Not selected

The number of versions of a specific Lambda function does not contribute to the cost. You are charged based on the number of requests for your Lambda functions and the duration of time it takes for your code to run.

#### B. By the programming language that is used for the Lambda function

**Correct answer:** No · **Your selection:** Not selected

The programming language that is used to create the Lambda function does not contribute to the cost. You are charged based on the number of requests for your Lambda functions and the duration of time it takes for your code to run.

#### C. By the number of requests made for a given Lambda function

**Correct answer:** Yes · **Your selection:** Selected

Lambda charges are dependent on the number of requests for your Lambda functions.

Learn more about Lambda pricing .

Learn more about Lambda .

#### D. By the total number of Lambda functions in an AWS account

**Correct answer:** No · **Your selection:** Not selected

There is no charge based on the number of functions in an AWS account. You are charged based on the number of requests for your Lambda functions and the duration of time it takes for your code to run.

#### E. By the time it takes for the Lambda function to run

**Correct answer:** Yes · **Your selection:** Selected

Lambda charges are dependent on the amount of time it takes to run the code.

Learn more about Lambda pricing .

Learn more about Lambda .

### Question 15

**Type:** Multi-Select · **Time:** 7 seconds · **Result:** Correct

Which of the functionalities are characteristics of Amazon S3?

**Correct answer(s):** A, E

**Your selection(s):** A, E

#### A. An object store

**Correct answer:** Yes · **Your selection:** Selected

Amazon S3 is an object storage service.

Learn more about Amazon S3 .

#### B. A local file store

**Correct answer:** No · **Your selection:** Not selected

Amazon S3 is not a local file store. Amazon S3 is an object storage service.

Learn more about Amazon S3 .

#### C. A network file system

**Correct answer:** No · **Your selection:** Not selected

Amazon S3 is not a network file system. Amazon S3 is an object storage service.

Learn more about Amazon S3 .

#### D. A global file system

**Correct answer:** No · **Your selection:** Not selected

Amazon S3 is not a global file system. Amazon S3 is an object storage service.

Learn more about Amazon S3 .

#### E. A durable storage system

**Correct answer:** Yes · **Your selection:** Selected

Amazon S3 is a durable object storage service.

Learn more about data protection in Amazon S3 .

### Question 16

**Type:** Multi-Select · **Time:** 11 seconds · **Result:** Correct

What are the advantages of deploying an application with Amazon EC2 instances in multiple Availability Zones?

**Correct answer(s):** A, D

**Your selection(s):** A, D

#### A. Preventing a single point of failure

**Correct answer:** Yes · **Your selection:** Selected

The deployment of the EC2 instances in multiple Availability Zones prevents a single point of failure. Availability Zones are designed for physical redundancy and to provide resilience with uninterrupted performance.

Learn more about Availability Zones .

#### B. Reducing the operational costs of the application

**Correct answer:** No · **Your selection:** Not selected

Multiple Availability Zones prevent single points of failure. As a result, the overall availability of the application improves. Multiple Availability Zones will not reduce the operational costs of the application.

#### C. Increasing the load of the application

**Correct answer:** No · **Your selection:** Not selected

Multiple Availability Zones will prevent single points of failure. As a result, the overall availability of the application will improve. However, two EC2 instances that run in the same Availability Zone or in different Availability Zones will not change the overall load of the application.

#### D. Increasing the availability of the application

**Correct answer:** Yes · **Your selection:** Selected

If you host all your instances in a single location that is affected by a failure, none of your instances would be available. Availability Zones are designed for physical redundancy and to provide resilience with uninterrupted performance.

Learn more about Availability Zones .

#### E. Allowing the application to serve cross-Region users with low latency

**Correct answer:** No · **Your selection:** Not selected

The best option to serve users with low latency across Regions is to launch another EC2 instance in the second Region that is closer to the user's location.

### Question 17

**Type:** Multiple Choice · **Time:** 21 seconds · **Result:** Correct

Each department within a company has its own independent AWS account and its own payment method. The company needs to centralize departmental governance and consolidate payments. How can the company achieve these objectives by using AWS services or features?

**Correct answer(s):** A

**Your selection(s):** A

#### A. Create an organization in AWS Organizations with all features enabled within one account. Invite all accounts to join the organization.

**Correct answer:** Yes · **Your selection:** Selected

Organizations provides centralized governance and billing for an AWS environment, including multiple accounts.

Learn more about Organizations .

#### B. Configure AWS IAM Identity Center in each account.

**Correct answer:** No · **Your selection:** Not selected

IAM Identity Center helps manage user access across multiple AWS accounts. However, configuring IAM Identity Center independently in each account would not provide centralized governance or consolidated billing. This approach would create separate identity management rather than a unified governance structure, and would not address the payment consolidation requirement.

Learn more about IAM Identity Center .

#### C. Use the AWS Cost and Usage Reports page of the AWS Billing and Cost Management console.

**Correct answer:** No · **Your selection:** Not selected

This solution consolidates the billing in a report, but it will work only for the individual accounts (without cross-account billing). This solution does not address central governance.

Learn more about Cost and Usage Reports .

#### D. Use AWS Systems Manager OpsCenter.

**Correct answer:** No · **Your selection:** Not selected

OpsCenter provides a central location for IT professionals to view, investigate, and resolve operational work items. OpsCenter does not consolidate billing.

Learn more about OpsCenter .

### Question 18

**Type:** Multiple Choice · **Time:** 7 seconds · **Result:** Correct

A company requires an encrypted connection between the company's on-premises servers and AWS. The connection must use the company's existing internet connection. Which solution will meet these requirements?

**Correct answer(s):** B

**Your selection(s):** B

#### A. Amazon Connect

**Correct answer:** No · **Your selection:** Not selected

Amazon Connect is an omnichannel cloud contact center. Amazon Connect helps you provide customer service at a low cost. Amazon Connect uses an omnichannel design to provide a seamless experience across voice and chat for your customers and agents. Amazon Connect does not provide a network connection.

Learn more about Amazon Connect .

#### B. AWS Site-to-Site VPN

**Correct answer:** Yes · **Your selection:** Selected

Site-to-Site VPN creates an encrypted network path between your on-premises network and your AWS Cloud network. This connection between your on-premises network and your AWS Cloud network uses the internet. 

Learn more about Site-to-Site VPN .

#### C. AWS Direct Connect

**Correct answer:** No · **Your selection:** Not selected

Direct Connect links your internal network to a Direct Connect location over a network connection. One end of the connection attaches to your on-premises router. The other end connects to a Direct Connect router. With this connection, you can bypass the ISPs in your network path. However, the company must use an existing internet connection in this scenario.

Learn more about Direct Connect .

#### D. Amazon CloudFront

**Correct answer:** No · **Your selection:** Not selected

CloudFront is a web service that speeds up the distribution of your static and dynamic web content to your users. CloudFront delivers your content through a worldwide network of data centers known as edge locations. When a user requests content that you serve through CloudFront, the request is routed to the edge location that provides the lowest latency. However, CloudFront does not provide a network connection.

Learn more about CloudFront .

### Question 19

**Type:** Multiple Choice · **Time:** 9 seconds · **Result:** Correct

A company wants to create a learning application for students. The learning application must give students the option to choose a button to have the text read out loud to them. Which AWS machine learning service will meet this requirement?

**Correct answer(s):** D

**Your selection(s):** D

#### A. Amazon Translate

**Correct answer:** No · **Your selection:** Not selected

Amazon Translate is a machine learning language translation service. Amazon Translate is not a text-to-speech conversion service.

Learn more about Amazon Translate .

#### B. Amazon Textract

**Correct answer:** No · **Your selection:** Not selected

Amazon Textract is a machine learning service that can extract text from scanned documents. Amazon Textract is not a text-to-speech conversion service.

Learn more about Amazon Textract .

#### C. Amazon Transcribe

**Correct answer:** No · **Your selection:** Not selected

Amazon Transcribe is a service that uses machine learning to convert audio data to text. Amazon Transcribe is not a text-to-speech conversion service.

Learn more about Amazon Transcribe .

#### D. Amazon Polly

**Correct answer:** Yes · **Your selection:** Selected

Amazon Polly is a machine learning service that converts text to speech. This service provides the ability to read text out loud.

Learn more about Amazon Polly .

### Question 20

**Type:** Multiple Choice · **Time:** 10 seconds · **Result:** Incorrect

Which AWS service should be used to implement encryption in transit?

**Correct answer(s):** C

**Your selection(s):** B

#### A. AWS Shield

**Correct answer:** No · **Your selection:** Not selected

Shield is a service that is used to protect against distributed denial of service (DDoS) attacks. You cannot use Shield to implement encryption of data in transit.

Learn more about Shield .

#### B. AWS Resource Access Manager (AWS RAM)

**Correct answer:** No · **Your selection:** Selected

AWS RAM is a service that is used to share resources across your AWS accounts. You cannot use AWS RAM to implement encryption of data in transit.

Learn more about AWS RAM .

#### C. AWS Certificate Manager (ACM)

**Correct answer:** Yes · **Your selection:** Not selected

ACM is a service that is used to create, store, and renew public and private SSL/TLS certificates. You can use ACM to implement encryption in transit and at rest by using a protocol, such as TLS.

Learn more about ACM .

Learn more about how to encrypt data at rest and in transit .

#### D. AWS Security Hub

**Correct answer:** No · **Your selection:** Not selected

Security Hub is a service that is used to centrally view your security posture in AWS. You can use Security Hub to check your AWS environment against security industry standards and best practices. You cannot use Security Hub to implement encryption of data in transit.

Learn more about Security Hub .
