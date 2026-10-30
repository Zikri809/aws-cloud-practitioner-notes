# AWS Skill Builder — Official Practice Exam

AWS Certified Cloud Practitioner (CLF-C02)

## Assessment results

- Outcome: Passed
- Score: 781
- Passing score: 700
- Attempt: 1
- Correct answers: 55
- Incorrect answers: 10
- Skipped: 0
- Total time: 33 minutes 49 seconds
- Average time per question: 31 seconds

Extracted from the supplied assessment results. AWS wording and explanations are preserved. Navigation and repeated table headings are removed. Reference labels are retained; the paste did not include their URLs.

## Questions, answers, and explanations

### Question 1

**Type:** Multiple Choice · **Time:** 23 seconds · **Result:** Correct

**Confidence level:** Confident

A company is launching a new application in the AWS Cloud. The application will run on an Amazon EC2 instance. More EC2 instances will be needed when the workload increases. Which AWS service or tool can the company use to launch the number of EC2 instances that will be needed to handle the workload?

**Correct answer(s):** A

**Your selection(s):** A

#### A. Amazon EC2 Auto Scaling

**Correct answer:** Yes · **Your selection:** Selected

You can use Amazon EC2 Auto Scaling to automatically make more EC2 instances available to handle the load for your application.

Learn more about Amazon EC2 Auto Scaling .

#### B. AWS App2Container (A2C)

**Correct answer:** No · **Your selection:** Not selected

App2Container is a command line tool. You can use App2Container to lift and shift the applications from your on-premises data centers or virtual machines to container platforms on AWS. App2Container can run on containers managed by Amazon Elastic Container Service (Amazon ECS), Amazon Elastic Kubernetes Service (Amazon EKS), or AWS App Runner.

Learn more about App2Container .

#### C. AWS Systems Manager

**Correct answer:** No · **Your selection:** Not selected

Systems Manager offers features to manage and to gain operational insights into resources on AWS, on premises, and on other clouds. Systems Manager does not launch additional EC2 instances to handle the increased load on an application.

Learn more about Systems Manager .

#### D. Elastic Load Balancing (ELB)

**Correct answer:** No · **Your selection:** Not selected

ELB automatically distributes incoming traffic across multiple targets, including EC2 instances, containers, and IP addresses. ELB does not launch new instances when the load increases.

Learn more about ELB .

### Question 2

**Type:** Multiple Choice · **Time:** 19 seconds · **Result:** Correct

**Confidence level:** Confident

According to the AWS shared responsibility model, which task is the responsibility of AWS for workloads running on Amazon EC2?

**Correct answer(s):** A

**Your selection(s):** A

#### A. Updating the physical hardware

**Correct answer:** Yes · **Your selection:** Selected

It is the responsibility of AWS to ensure the security and compliance of the AWS Cloud, which includes physical hardware.

Learn more about the shared responsibility model .

#### B. Updating the user data

**Correct answer:** No · **Your selection:** Not selected

Any data that is owned by the user, which includes user data, is the responsibility of the user to secure, update, and maintain.

#### C. Updating the database engine

**Correct answer:** No · **Your selection:** Not selected

The database engine that runs on an EC2 instance is the responsibility of the user. Therefore, the user is also responsible for the update of the database engine.

#### D. Updating the operating system

**Correct answer:** No · **Your selection:** Not selected

It is the responsibility of the user to patch operating systems.

### Question 3

**Type:** Multiple Choice · **Time:** 20 seconds · **Result:** Correct

**Confidence level:** Educated guess

A company needs to perform queries and interactively search and analyze log data. Which AWS service or feature will meet this requirement?

**Correct answer(s):** D

**Your selection(s):** D

#### A. Amazon CloudWatch anomaly detection

**Correct answer:** No · **Your selection:** Not selected

CloudWatch anomaly detection uses machine learning algorithms to detect anomalies in metrics. CloudWatch anomaly detection does not provide interactive query capabilities for log data analysis.

Learn more about CloudWatch anomaly detection .

#### B. Amazon EventBridge

**Correct answer:** No · **Your selection:** Not selected

EventBridge is a serverless event bus service that connects application components together. EventBridge can process events from logs. However, you cannot use EventBridge to interactively search and analyze log data.

Learn more about EventBridge .

#### C. Amazon CloudWatch Logs streams

**Correct answer:** No · **Your selection:** Not selected

CloudWatch Logs streams are sequences of log events that share the same source. CloudWatch Logs streams store log data. However, CloudWatch Logs streams do not independently provide interactive query and analysis capabilities.

Learn more about CloudWatch Logs streams .

#### D. Amazon CloudWatch Logs Insights

**Correct answer:** Yes · **Your selection:** Selected

You can use CloudWatch Logs Insights to interactively search and analyze log data. CloudWatch Logs Insights provides a purpose-built query language for log analysis. You can query multiple log groups in a single operation.

Learn more about CloudWatch Logs Insights .

### Question 4

**Type:** Multi-Select · **Time:** 25 seconds · **Result:** Correct

**Confidence level:** Confident

According to the AWS shared responsibility model, which of the following tasks are AWS responsibilities?

**Correct answer(s):** B, D

**Your selection(s):** B, D

#### A. Defining network firewalls inside the VPC.

**Correct answer:** No · **Your selection:** Not selected

It is the user's responsibility to define and configure security groups in the VPC because it is considered security in the cloud.

#### B. The physical security of AWS facilities.

**Correct answer:** Yes · **Your selection:** Selected

It is the responsibility of AWS to maintain the physical security of facilities.

Learn more about the shared responsibility model .

#### C. Patching operating systems on Amazon EC2.

**Correct answer:** No · **Your selection:** Not selected

It is the user's responsibility to manage and patch the operating system on their EC2 instances.

#### D. Patching and updating the hypervisor.

**Correct answer:** Yes · **Your selection:** Selected

It is the responsibility of AWS to patch and update the hypervisor because it is considered security of the cloud.

Learn more about the shared responsibility model .

#### E. Encrypting customer data.

**Correct answer:** No · **Your selection:** Not selected

It is the user's responsibility to manage their data, which includes encryption.

### Question 5

**Type:** Multiple Choice · **Time:** 1 minutes 39 seconds · **Result:** Correct

**Confidence level:** Confident

A company has a stateless application that can handle interruptions. The application must be available all day and night. Traffic increases heavily during business hours. Which instance types for base and peak traffic are MOST cost-efficient to meet these requirements?

**Correct answer(s):** C

**Your selection(s):** C

#### A. On-Demand Instances for base traffic and On-Demand Instances with auto scaling for peak traffic

**Correct answer:** No · **Your selection:** Not selected

On-Demand Instances are more expensive when compared to Spot Instances or Reserved Instances because the price is fixed. If you use only On-Demand instances, it would not be the most cost-effective instance type for base or peak traffic.

Learn more about EC2 Instance purchasing options .

#### B. On-Demand Instances for base traffic and Spot Instances for peak traffic using an Amazon EC2 Fleet

**Correct answer:** No · **Your selection:** Not selected

On-Demand Instances would not be the most cost-effective purchase option for base traffic. Because the base traffic requires the application to be available all day and night, you can use Reserved Instances. This setup provides you with cost savings because Reserved Instances are less expensive when compared to On-Demand Instances.

Learn more about EC2 instance purchasing options .

Learn more about EC2 Fleet .

#### C. Reserved Instances for base traffic and Spot Instances for peak traffic using an Amazon EC2 Fleet

**Correct answer:** Yes · **Your selection:** Selected

Reserved Instances are cost-effective for base traffic because you can commit to use a certain capacity over a one-year or three-year agreement. Reserved Instances give you the ability to realize cost savings when you receive a discount for your Reserved Instance contract. Spot Instances for peak traffic gives you the ability to take advantage of discounted EC2 capacity. When combined with EC2 Fleet, you can set capacity targets that use your instance types to accommodate both predictable base traffic and peak traffic.

Learn more about Reserved Instances .

Learn more about Spot Instances .

Learn more about EC2 Fleet .

#### D. Reserved Instances for both the base and peak traffic

**Correct answer:** No · **Your selection:** Not selected

Reserved Instances have a one-year or three-year commitment. Reserved Instances are not cost-effective for a workload that only peaks during business hours.

Learn more about Reserved Instances .

### Question 6

**Type:** Multi-Select · **Time:** 38 seconds · **Result:** Incorrect

**Confidence level:** Educated guess

Which of the following are security principles in the AWS Well-Architected Framework?

**Correct answer(s):** C, D

**Your selection(s):** B, C

#### A. Analyze and attribute expenditures.

**Correct answer:** No · **Your selection:** Not selected

Analyze and attribute expenditures is a principle of the cost optimization pillar of the Well-Architected Framework.

Learn more about cost optimization principles .

#### B. Deploy globally in minutes.

**Correct answer:** No · **Your selection:** Selected

Deploy globally in minutes is a principle of the performance efficiency pillar of the Well-Architected Framework.

Learn more about performance efficiency principles .

#### C. Protect data in transit and at rest.

**Correct answer:** Yes · **Your selection:** Selected

To protect data in transit and at rest is a principle of the security pillar of the Well-Architected Framework.

Learn more about security principles .

#### D. Monitor, alert, and audit actions and changes to AWS resources.

**Correct answer:** Yes · **Your selection:** Not selected

Traceability includes monitor and alert actions. Traceability is a principle of the security pillar of the Well-Architected Framework.

Learn more about security principles .

#### E. Perform operations as code.

**Correct answer:** No · **Your selection:** Not selected

Perform operations as code is a principle of the operational excellence pillar of the Well-Architected Framework.

Learn more about operational excellence principles .

### Question 7

**Type:** Multiple Choice · **Time:** 16 seconds · **Result:** Correct

**Confidence level:** Confident

A company is moving its office and must establish an encrypted connection to AWS. Which AWS service will meet this requirement?

**Correct answer(s):** B

**Your selection(s):** B

#### A. Amazon Connect

**Correct answer:** No · **Your selection:** Not selected

You can use Amazon Connect to set up a scalable contact center in the AWS Cloud. You would not use Amazon Connect to encrypt traffic between two different networks.

Learn more about Amazon Connect .

#### B. AWS VPN

**Correct answer:** Yes · **Your selection:** Selected

AWS provides AWS VPN as a managed service. AWS VPN establishes a secure encrypted connection between AWS and your on-premises or branch-office networks.

Learn more about AWS VPN services .

#### C. Amazon Route 53

**Correct answer:** No · **Your selection:** Not selected

Route 53 is a DNS web service offered by AWS. You can use Route 53 for domain registration, DNS routing, and health checks.

Learn more about Route 53 .

#### D. AWS Direct Connect

**Correct answer:** No · **Your selection:** Not selected

You can use Direct Connect to privately connect your on-premises network to the AWS Cloud. However, communication over Direct Connect is not encrypted.

Learn more about Direct Connect .

### Question 8

**Type:** Multiple Choice · **Time:** 58 seconds · **Result:** Incorrect

**Confidence level:** Unsure

Which AWS offering can be natively associated with AWS WAF?

**Correct answer(s):** C

**Your selection(s):** B

#### A. Gateway Load Balancer (GWLB)

**Correct answer:** No · **Your selection:** Not selected

GWLBs operate at layer 3/4 of the OSI model. Layer 3/4 is the network layer. GWLBs can deploy, scale, and manage virtual appliances. You cannot directly associate a GWLB with AWS WAF. GWLBs do not operate at the application layer.

Learn more about GWLBs .

#### B. Network Load Balancer (NLB)

**Correct answer:** No · **Your selection:** Selected

NLBs operate at layer 4 of the OSI model. Layer 4 is the transport layer. You cannot directly associate an NLB with AWS WAF. AWS WAF requires layer 7 capabilities to inspect and filter web traffic.

Learn more about NLBs .

#### C. Application Load Balancer (ALB)

**Correct answer:** Yes · **Your selection:** Not selected

You can directly associate an ALB with AWS WAF to protect web applications from common web exploits. ALBs operate at layer 7 of the OSI model. Layer 7 is the application layer. Therefore, ALBs are compatible with AWS WAF web traffic filtering capabilities. You can integrate these AWS offerings to implement web ACLs directly on your ALB.

Learn more about ALBs and AWS WAF .

#### D. AWS Lambda

**Correct answer:** No · **Your selection:** Not selected

Lambda is a compute service that you can use to run code without the need to manage servers. You can use Lambda to create custom AWS WAF rules or to process AWS WAF logs. However, you cannot directly associate Lambda with AWS WAF.

Learn more about Lambda .

### Question 9

**Type:** Multiple Choice · **Time:** 21 seconds · **Result:** Correct

**Confidence level:** Confident

Which AWS service can create copies of resources across AWS Regions?

**Correct answer(s):** A

**Your selection(s):** A

#### A. AWS CloudFormation

**Correct answer:** Yes · **Your selection:** Selected

You can use CloudFormation to model your infrastructure as code. You can use CloudFormation to create identical copies of resources across different Regions. By using the same template in multiple Regions, CloudFormation provides a consistent and repeatable deployment of resources. You can use CloudFormation to create cross-Region copies of your infrastructure.

Learn more about CloudFormation .

#### B. AWS Systems Manager

**Correct answer:** No · **Your selection:** Not selected

Systems Manager is a management service that you can use to automate operational tasks across AWS resources. Systems Manager can manage resources across Regions. However, you cannot use Systems Manager to create copies of resources across Regions.

Learn more about Systems Manager .

#### C. AWS CloudTrail

**Correct answer:** No · **Your selection:** Not selected

CloudTrail is a service that logs API activity and events across your AWS infrastructure. You can configure CloudTrail to work across multiple Regions for logging purposes. However, CloudTrail does not provide the ability to create copies of AWS resources.

Learn more about CloudTrail .

#### D. Amazon ElastiCache

**Correct answer:** No · **Your selection:** Not selected

ElastiCache is a fully managed in-memory caching service. ElastiCache can replicate data within a Region for high availability. However, ElastiCache cannot copy general AWS resources across Regions.

Learn more about ElastiCache .

### Question 10

**Type:** Multiple Choice · **Time:** 21 seconds · **Result:** Correct

**Confidence level:** Confident

A user needs to perform a one-time backup of an Amazon Elastic Block Store (Amazon EBS) volume that is attached to an Amazon EC2 instance. What is the MOST operationally efficient way to perform this backup?

**Correct answer(s):** B

**Your selection(s):** B

#### A. Attach another EBS volume to the EC2 instance, and copy the contents.

**Correct answer:** No · **Your selection:** Not selected

You can attach another EBS volume and copy the contents. However, this approach requires multiple manual steps. You must attach the new volume, mount the volume, and manage the copy process. This approach is not the most operationally efficient.

Learn more about EBS volumes .

#### B. Create an EBS snapshot of the volume.

**Correct answer:** Yes · **Your selection:** Selected

An EBS snapshot is a built-in feature that provides a point-in-time backup of an EBS volume. An EBS snapshot requires only a single API call or a single click. Snapshots are incremental. AWS automatically stores EBS snapshots in Amazon S3. You can create an EBS snapshot while the volume is attached and in use. This is the most operationally efficient way to perform a backup because you use built-in AWS functionality with minimal effort.

Learn more about EBS snapshots .

#### C. Create a custom script to copy the EBS file contents to Amazon S3.

**Correct answer:** No · **Your selection:** Not selected

You can create and maintain a custom script to copy contents to Amazon S3. However, this approach requires development effort, testing, and ongoing maintenance. This approach is not as operationally efficient as using a built-in capability of Amazon EBS.

Learn more about Amazon S3 .

#### D. Copy the EBS volume to a server that is running outside AWS and is connected with AWS Direct Connect.

**Correct answer:** No · **Your selection:** Not selected

You can use Direct Connect to connect an internal network to the AWS Cloud through an Ethernet fiber-optic cable. You can copy an EBS volume to an external server over Direct Connect. However, this approach is not the most operationally efficient way to perform the backup. This approach requires additional infrastructure and complex data transfer processes. This approach is both time-consuming and resource-intensive.

Learn more about Direct Connect .

### Question 11

**Type:** Multi-Select · **Time:** 23 seconds · **Result:** Correct

**Confidence level:** Confident

Which AWS Cloud design principles can help increase reliability?

**Correct answer(s):** A, E

**Your selection(s):** A, E

#### A. Automatically recovering from failure

**Correct answer:** Yes · **Your selection:** Selected

This principle is part of the reliability pillar of the AWS Well-Architected Framework. Automatic failure recovery is the implementation of processes that can activate without manual intervention in the event of a detected failure.

Learn more about the principles of the reliability pillar .

#### B. Adopting a consumption model

**Correct answer:** No · **Your selection:** Not selected

This principle is part of the cost optimization pillar of the AWS Well-Architected Framework. When you adopt a consumption model, you pay for only the services that you need and use. When you adopt a consumption model, it is not about increasing reliability or the reliability pillar.

Learn more about the cost optimization pillar .

Learn more about the reliability pillar .

#### C. Using monolithic architecture

**Correct answer:** No · **Your selection:** Not selected

In a monolithic architecture, all of your components are tightly coupled, which means that they run as a single service. Using a monolithic architecture goes against the AWS Well-Architected Framework. A micro-service oriented architecture is recommended.

Learn more about the AWS Well-Architected Framework .

#### D. Measuring overall efficiency

**Correct answer:** No · **Your selection:** Not selected

This principle is part of the cost optimization pillar of the AWS Well-Architected Framework. Cost optimization ensures that you can achieve your required outputs at the best possible price point. Cost optimization is not about increasing reliability or the reliability pillar.

Learn more about the cost optimization pillar .

Learn more about the reliability pillar .

#### E. Testing recovery procedures

**Correct answer:** Yes · **Your selection:** Selected

This principle is part of the reliability pillar of the AWS Well-Architected Framework. Testing recovery procedures validates your procedures so that you can reliably recover from a failure.

Learn more about the principles of the reliability pillar .

### Question 12

**Type:** Multiple Choice · **Time:** 51 seconds · **Result:** Correct

**Confidence level:** Educated guess

A company wants to ensure that two Amazon EC2 instances are in separate data centers with minimal communication latency between the data centers. How can the company meet this requirement?

**Correct answer(s):** A

**Your selection(s):** A

#### A. Place the EC2 instances in two separate Availability Zones within the same AWS Region.

**Correct answer:** Yes · **Your selection:** Selected

The use of two Availability Zones in the same Region ensures low latency and provides protection against failure of one Availability Zone.

Learn more about Availability Zones and low latency .

#### B. Place the EC2 instances in two separate AWS Regions connected with a VPC peering connection.

**Correct answer:** No · **Your selection:** Not selected

Although separate Regions can achieve the requirement of separate facilities, it is not the best option for low latency.

Learn more about VPC peering connections .

#### C. Place both EC2 instances in a placement group for dedicated bandwidth.

**Correct answer:** No · **Your selection:** Not selected

There are no placement groups with dedicated bandwidth. Placement groups can only run within the same Availability Zone to minimize latency.

Learn more about placement groups .

#### D. Place one EC2 instance on premises and the other in an AWS Region. Then connect them by using an AWS VPN connection.

**Correct answer:** No · **Your selection:** Not selected

An EC2 instance cannot be run outside of AWS unless you have AWS Outposts servers installed on-premises. Although deploying an EC2 instance to another Region would meet the separate data center requirement, it would not ensure low latency.

Learn more about Outposts .

### Question 13

**Type:** Multiple Choice · **Time:** 21 seconds · **Result:** Correct

**Confidence level:** Confident

Which benefit does Amazon Rekognition provide?

**Correct answer(s):** C

**Your selection(s):** C

#### A. The ability to place watermarks on images

**Correct answer:** No · **Your selection:** Not selected

Amazon Rekognition uses pre-trained machine learning models to detect objects in images. However, Amazon Rekognition does not add watermarks to the image.

#### B. The ability to resize millions of images automatically

**Correct answer:** No · **Your selection:** Not selected

Amazon Rekognition uses pre-trained machine learning models to detect objects in images. However, Amazon Rekognition does not resize the image.

#### C. The ability to detect objects that appear in pictures

**Correct answer:** Yes · **Your selection:** Selected

Amazon Rekognition uses pre-trained machine learning models to detect objects in images.

Learn more about Amazon Rekognition .

#### D. The ability to bid on object detection jobs

**Correct answer:** No · **Your selection:** Not selected

Amazon Rekognition uses pre-trained machine learning models to detect objects in images. However, Amazon Rekognition does not bid on object detection jobs.

### Question 14

**Type:** Multiple Choice · **Time:** 32 seconds · **Result:** Correct

**Confidence level:** Confident

A system automatically recovers from failure when a company launches its workload on the AWS Cloud services platform. Which pillar of the AWS Well-Architected Framework does this situation demonstrate?

**Correct answer(s):** A

**Your selection(s):** A

#### A. Reliability

**Correct answer:** Yes · **Your selection:** Selected

The reliability pillar focuses on workloads that perform their intended functions and how to recover quickly from failure to meet demands. One of the design principles of the reliability pillar is automatic recovery from failure.

Learn more about the reliability pillar .

#### B. Performance efficiency

**Correct answer:** No · **Your selection:** Not selected

The performance efficiency pillar focuses on structured and streamlined allocation of IT and computing resources. Key topics include how to select resource types and sizes optimized for workload requirements, monitor performance, and maintain efficiency as business needs evolve.

Learn more about the performance efficiency pillar .

#### C. Cost optimization

**Correct answer:** No · **Your selection:** Not selected

The cost optimization pillar focuses on how to avoid unnecessary costs. Key topics include how to spend over time and control fund allocation, select resources of the right type and quantity, and scale to meet business needs without overspending.

Learn more about the cost optimization pillar .

#### D. Operational excellence

**Correct answer:** No · **Your selection:** Not selected

The operational excellence pillar focuses on how to run and monitor systems, and continually improve processes and procedures. Key topics include how to automate changes, respond to events, and define standards to manage daily operations.

Learn more about the operational excellence pillar .

### Question 15

**Type:** Multiple Choice · **Time:** 44 seconds · **Result:** Incorrect

**Confidence level:** Confident

What is a benefit of moving to the AWS Cloud in terms of improving time to market?

**Correct answer(s):** B

**Your selection(s):** A

#### A. Increased application security

**Correct answer:** No · **Your selection:** Selected

Security is an important consideration when you move to the AWS Cloud. However, security does not relate to the time necessary to deploy applications to market.

Learn more about security in the AWS Cloud .

#### B. Increased business agility

**Correct answer:** Yes · **Your selection:** Not selected

Businesses that move to the AWS Cloud can become more agile. IT resources are available to deploy within minutes. Businesses can deploy new features or applications much quicker because resources are readily available.

Learn more about agility .

#### C. Increased backup capabilities

**Correct answer:** No · **Your selection:** Not selected

Backup capabilities are a benefit of the AWS Cloud. However, backup capabilities do not relate to the time necessary to deploy applications to market.

Learn more about backup capabilities in AWS Backup .

#### D. Decreased deployment speed

**Correct answer:** No · **Your selection:** Not selected

When you move to the AWS Cloud, you can deploy resources quickly. Resources can be available within minutes. Therefore, deployment speed will increase as a result of moving to the AWS Cloud, not decrease.

Learn more about deployment speed .

### Question 16

**Type:** Multiple Choice · **Time:** 1 minutes 5 seconds · **Result:** Correct

**Confidence level:** Educated guess

A company needs to generate reports for business intelligence and operational analytics on petabytes of semi-structured and structured data. These reports are produced from standard SQL queries on data that is in an Amazon S3 data lake. Which AWS service provides the ability to analyze this data?

**Correct answer(s):** B

**Your selection(s):** B

#### A. Amazon RDS

**Correct answer:** No · **Your selection:** Not selected

Amazon RDS is a managed relational database service for operational database workloads. Amazon RDS supports SQL queries. However, Amazon RDS is not designed to analyze petabytes of data in S3 data lakes. Instead, Amazon RDS is optimized for transactional processing and day-to-day database operations.

Learn more about Amazon RDS .

#### B. Amazon Redshift

**Correct answer:** Yes · **Your selection:** Selected

Amazon Redshift is a fully managed data warehouse service. Amazon Redshift can analyze petabyte-scale data by using standard SQL queries. You can directly query data that is stored in S3 data lakes by using Amazon Redshift Spectrum. Therefore, this service is suitable for business intelligence and operational analytics on large-scale semi-structured and structured data.

Learn more about Amazon Redshift .

#### C. Amazon DynamoDB

**Correct answer:** No · **Your selection:** Not selected

DynamoDB is a fully managed NoSQL database service. DynamoDB is designed for high-performance applications that need consistent single-digit millisecond latency. DynamoDB does not support standard SQL queries. DynamoDB is not designed to analyze petabytes of data in S3 data lakes.

Learn more about DynamoDB .

#### D. Amazon Neptune

**Correct answer:** No · **Your selection:** Not selected

Neptune is a fully managed graph database service that can store billions of relationships. Neptune can query a graph with millisecond latency. Neptune is not designed for SQL-based analytics on semi-structured and structured data in S3 data lakes.

Learn more about Neptune .

### Question 17

**Type:** Multiple Choice · **Time:** 24 seconds · **Result:** Correct

**Confidence level:** Confident

A company is migrating an application to AWS. As part of the migration, the company needs to move the application’s database to Amazon RDS. Which AWS service should the company use to migrate the database?

**Correct answer(s):** C

**Your selection(s):** C

#### A. AWS Schema Conversion Tool (AWS SCT)

**Correct answer:** No · **Your selection:** Not selected

You can use AWS SCT to convert database schemas from one database engine to another. You can use AWS SCT in conjunction with AWS DMS. However, AWS SCT alone cannot migrate the database.

Learn more about AWS SCT .

#### B. AWS Application Migration Service

**Correct answer:** No · **Your selection:** Not selected

You can use Application Migration Service to migrate applications and any associated servers to AWS. However, you cannot use Application Migration Service for database migration.

Learn more about Application Migration Service .

#### C. AWS Database Migration Service (AWS DMS)

**Correct answer:** Yes · **Your selection:** Selected

AWS DMS is designed to help migrate databases to AWS. AWS DMS provides minimal downtime during the migration process. AWS DMS can migrate the application's database to Amazon RDS.

Learn more about AWS DMS .

#### D. Migration Evaluator

**Correct answer:** No · **Your selection:** Not selected

Migration Evaluator is a tool that you can use to analyze on-premises environments. Migration Evaluator can create business cases for AWS Cloud migrations. Migration Evaluator helps assess and plan migrations by providing cost and resource projections. However, Migration Evaluator alone cannot perform database migrations. Migration Evaluator is an assessment tool, not a migration service.

Learn more about Migration Evaluator .

### Question 18

**Type:** Multiple Choice · **Time:** 45 seconds · **Result:** Correct

**Confidence level:** Educated guess

A company wants to improve its security and audit posture by limiting Amazon EC2 inbound access. What should the company use to access instances remotely instead of opening inbound SSH ports and managing SSH keys?

**Correct answer(s):** C

**Your selection(s):** C

#### A. Network ACLs

**Correct answer:** No · **Your selection:** Not selected

A network ACL is an additional layer of security for your VPC. Network ACLs act as a firewall that controls traffic in and out of one or more subnets. You would not use network ACLs to connect to EC2 instances remotely.

Learn more about network ACLs .

#### B. EC2 key pairs

**Correct answer:** No · **Your selection:** Not selected

EC2 key pairs provide authorization when you make an SSH connection with security keys.

Learn more about EC2 key pairs .

#### C. AWS Systems Manager Session Manager

**Correct answer:** Yes · **Your selection:** Selected

Session Manager is a node management service for the cloud or for on-premises compute units. Session Manager provides a secure connection through shell scripting. You can establish the connection without the need to open ports.

Learn more about Session Manager .

#### D. AWS Identity and Access Management (IAM)

**Correct answer:** No · **Your selection:** Not selected

You can use IAM to create users, roles, groups, and policies that authorize access to your AWS resources. However, you would not use IAM to connect to EC2 instances remotely.

Learn more about IAM .

### Question 19

**Type:** Multi-Select · **Time:** 21 seconds · **Result:** Correct

**Confidence level:** Confident

Which of the following are characteristics of AWS Regions and Availability Zones?

**Correct answer(s):** C, D

**Your selection(s):** C, D

#### A. Regions are within 100 km (60 miles) of each other.

**Correct answer:** No · **Your selection:** Not selected

Regions are not within 100 km (60 miles) of each other. Regions are located around the world. Each Region is divided into multiple Availability Zones. Availability Zones provide failover within the Region.

Learn more about Regions and Availability Zones .

#### B. Regions bring AWS services to on-premises facilities.

**Correct answer:** No · **Your selection:** Not selected

By default, Regions will not allow services to make on-premises connections without an additional service. For example, you could use AWS Outposts to bring Amazon EC2 on premises.

Learn more about Outposts .

#### C. Regions consist of multiple Availability Zones.

**Correct answer:** Yes · **Your selection:** Selected

Regions contain multiple, isolated areas of deployment named Availability Zones. Availability Zones make workloads highly available.

Learn more about Regions and Availability Zones .

#### D. Regions are located around the world.

**Correct answer:** Yes · **Your selection:** Selected

Regions are located around the world. Regions are a portion of the AWS global network.

Learn more about the location of Regions .

#### E. An Availability Zone contains several Regions.

**Correct answer:** No · **Your selection:** Not selected

Availability Zones are a collection of data centers that reside within a Region.

Learn more about Regions and Availability Zones .

### Question 20

**Type:** Multiple Choice · **Time:** 22 seconds · **Result:** Correct

**Confidence level:** Educated guess

A company wants to continuously monitor AWS account activity, including actions taken through the AWS Management Console, AWS software development kits (SDKs), and command line tools. Which AWS service meets these requirements?

**Correct answer(s):** B

**Your selection(s):** B

#### A. Amazon CloudWatch

**Correct answer:** No · **Your selection:** Not selected

CloudWatch continually monitors and collects metrics on resources and applications that run on AWS in real time. You can use the metrics to gain insights, create alarms, and send notifications. You can integrate CloudWatch with CloudTrail. However, by itself CloudWatch does not monitor activity in an AWS account.

Learn more about CloudWatch .

#### B. AWS CloudTrail

**Correct answer:** Yes · **Your selection:** Selected

CloudTrail continuously monitors and logs activity in an AWS account. CloudTrail logs include actions that users take through the console, SDKs, API calls, and the AWS CLI.

Learn more about CloudTrail .

#### C. AWS Trusted Advisor

**Correct answer:** No · **Your selection:** Not selected

Trusted Advisor inspects your AWS environment and makes recommendations to help you save money and to improve security, performance, and the availability of resources. However, Trusted Advisor does not monitor activity in an AWS account.

Learn more about Trusted Advisor .

#### D. Amazon Inspector

**Correct answer:** No · **Your selection:** Not selected

Amazon Inspector searches for software vulnerabilities and unintended network exposure in select AWS resources. The resources include Amazon EC2 instances, AWS Lambda functions, and container images that are stored in Amazon Elastic Container Registry (Amazon ECR). Amazon Inspector does not monitor activity in an AWS account.

Learn more about Amazon Inspector .

### Question 21

**Type:** Multiple Choice · **Time:** 50 seconds · **Result:** Correct

**Confidence level:** Confident

A company runs MySQL database workloads on self-managed servers in an on-premises data center. The company wants to migrate the database workloads to an AWS managed service. Which migration strategy should the company use?

**Correct answer(s):** A

**Your selection(s):** A

#### A. Replatform

**Correct answer:** Yes · **Your selection:** Selected

Replatform is also known as lift and reshape. The replatform migration strategy involves making targeted optimizations to achieve tangible benefits without changing the core architecture. You can move MySQL databases from self-managed servers to an AWS managed service such as Amazon RDS. This strategy maintains the same database engine and uses an AWS managed service for reduced operational overhead.

Learn more about the replatform migration strategy .

Learn more about how to migrate an on-premises MySQL database to Amazon RDS .

#### B. Rehost

**Correct answer:** No · **Your selection:** Not selected

Rehost is also known as lift and shift. The rehost migration strategy involves moving applications to AWS without making changes to the architecture. This strategy would keep the MySQL databases as self-managed workloads. However, the workloads would run on AWS instead of on premises. This strategy does not meet the requirement to migrate to an AWS managed service.

Learn more about the rehost migration strategy .

#### C. Repurchase

**Correct answer:** No · **Your selection:** Not selected

Repurchase is also known as drop and shop. The repurchase migration strategy involves moving to a different product. Repurchasing typically involves purchasing new software licenses. This strategy is not suitable for migrating existing MySQL database workloads. You would need to replace the database workloads with entirely different products.

Learn more about the repurchase migration strategy .

#### D. Refactor

**Correct answer:** No · **Your selection:** Not selected

The refactor migration strategy involves re-architecting and re-coding portions of an application to benefit from cloud features. This level of change is not necessary to migrate MySQL database workloads to a managed service.

Learn more about the refactor migration strategy .

### Question 22

**Type:** Multiple Choice · **Time:** 14 seconds · **Result:** Correct

**Confidence level:** Confident

A company does not own a physical data center but needs a network solution that connects employee laptops directly to the AWS Cloud. Which AWS service will meet this requirement?

**Correct answer(s):** D

**Your selection(s):** D

#### A. AWS Outposts

**Correct answer:** No · **Your selection:** Not selected

Outposts is a fully managed service that extends AWS infrastructure, services, APIs, and tools to customer premises. Outposts provides local access to AWS managed infrastructure. Outposts gives users the ability to build and run applications on premises by using the same programming interfaces as in AWS Regions. Outposts uses local compute and storage resources for lower latency and local data processing needs. Outposts does not provide a direct connection to AWS for individual laptops.

Learn more about Outposts .

#### B. Amazon Connect

**Correct answer:** No · **Your selection:** Not selected

Amazon Connect is a cloud-based contact center service that is used to provide customer service. Amazon Connect does not provide a direct network connection to AWS for individual laptops.

Learn more about Amazon Connect .

#### C. Amazon CloudFront

**Correct answer:** No · **Your selection:** Not selected

CloudFront is a web service that speeds up distribution of your static and dynamic web content, such as .html, .css, .js, and image files, to your users. CloudFront delivers your content through a worldwide network of data centers known as edge locations. CloudFront does not provide a direct network connection to AWS for individual laptops.

Learn more about CloudFront .

#### D. AWS Client VPN

**Correct answer:** Yes · **Your selection:** Selected

Client VPN is a managed client-based VPN service that gives you the ability to securely access your AWS resources and the resources in your on-premises network. With Client VPN, you can access your resources from any location through an OpenVPN-based VPN client. 

Learn more about Client VPN .

### Question 23

**Type:** Multi-Select · **Time:** 18 seconds · **Result:** Correct

**Confidence level:** Confident

According to the AWS shared responsibility model, which security-related tasks are the customer's responsibility?

**Correct answer(s):** B, E

**Your selection(s):** B, E

#### A. Security of edge locations

**Correct answer:** No · **Your selection:** Not selected

The security of physical edge locations is the responsibility of AWS.

#### B. Client-side data encryption

**Correct answer:** Yes · **Your selection:** Selected

Client-side data encryption is the responsibility of the customer.

Learn more about the shared responsibility model .

#### C. Hardware security within AWS Regions

**Correct answer:** No · **Your selection:** Not selected

Hardware security of AWS data centers within Regions is the responsibility of AWS.

#### D. AWS global infrastructure network security

**Correct answer:** No · **Your selection:** Not selected

The network security of the AWS global infrastructure is the responsibility of AWS.

#### E. Customer data integrity

**Correct answer:** Yes · **Your selection:** Selected

Customer data integrity is the responsibility of the customer. The customer must ensure data remains protected by using services that AWS offers.

Learn more about the shared responsibility model .

### Question 24

**Type:** Multiple Choice · **Time:** 20 seconds · **Result:** Correct

**Confidence level:** Confident

Which AWS service provides a simple way to set up a new multi-account AWS environment and govern it at scale?

**Correct answer(s):** B

**Your selection(s):** B

#### A. AWS Security Hub

**Correct answer:** No · **Your selection:** Not selected

Security Hub provides a comprehensive view of how your AWS environment compares to security standards best practices. Security Hub also provides you with high-priority security alerts or findings. Security Hub is not used to set up and govern a multi-account environment.

Learn more about Security Hub .

#### B. AWS Control Tower

**Correct answer:** Yes · **Your selection:** Selected

AWS Control Tower provides you with the ability to set up, govern, and manage multiple AWS accounts.

Learn more about AWS Control Tower .

#### C. AWS Resource Access Manager

**Correct answer:** No · **Your selection:** Not selected

Resource Access Manager (AWS RAM) gives you the ability to share AWS resources with any AWS account within AWS Organization.

Learn more about AWS RAM .

#### D. AWS Trusted Advisor

**Correct answer:** No · **Your selection:** Not selected

Trusted Advisor is used to inspect and provide recommendations for areas to improve your AWS environment. Trusted Advisor is not used to set up and govern a multi-account environment.

Learn more about Trusted Advisor .

### Question 25

**Type:** Multi-Select · **Time:** 34 seconds · **Result:** Correct

**Confidence level:** Confident

Which tasks are the customer's responsibility, according to the AWS shared responsibility model?

**Correct answer(s):** B, C

**Your selection(s):** B, C

#### A. Physically secure the data center hardware.

**Correct answer:** No · **Your selection:** Not selected

The customer cannot access data centers. Therefore, the customer is not responsible for physically securing hardware in a data center.

#### B. Patch the guest operating system.

**Correct answer:** Yes · **Your selection:** Selected

The customer has full responsibility to patch operating systems and applications. AWS is not responsible for patching the guest operating system.

Learn more about the shared responsibility model .

#### C. Configure firewalls.

**Correct answer:** Yes · **Your selection:** Selected

The customer has full responsibility to configure all firewall routes in relation to the operating system and application. AWS is not responsible for configuring the customer firewall.

Learn more about the shared responsibility model .

#### D. Patch the network hardware.

**Correct answer:** No · **Your selection:** Not selected

The customer does not have physical access to the network hardware. Therefore, the customer is not responsible for patching network hardware. AWS is responsible for patching network hardware.

#### E. Decommission deprecated storage devices.

**Correct answer:** No · **Your selection:** Not selected

AWS is responsible for physical hardware. Therefore, AWS is responsible for decommissioning deprecated storage devices.

### Question 26

**Type:** Multiple Choice · **Time:** 29 seconds · **Result:** Correct

**Confidence level:** Confident

A company wants to build a data analytics application that uses Amazon Redshift. The company needs a cost estimate for its future Amazon Redshift usage. Which AWS tool will provide a high-level cost estimation?

**Correct answer(s):** A

**Your selection(s):** A

#### A. AWS Pricing Calculator

**Correct answer:** Yes · **Your selection:** Selected

AWS Pricing Calculator gives you the ability to create estimates for your AWS use cases before you build the applications. AWS Pricing Calculator can provide a cost estimate.

Learn more about AWS Pricing Calculator .

#### B. AWS Budgets

**Correct answer:** No · **Your selection:** Not selected

You can use AWS Budgets to set custom cost and usage budgets. You can use AWS Budgets to receive alerts when existing workloads exceed the forecast or the budget. You would not use AWS Budgets for cost estimates.

Learn more about AWS Budgets .

#### C. Savings Plans

**Correct answer:** No · **Your selection:** Not selected

Savings Plans are a flexible pricing model that you can use for cost savings based on your AWS compute usage. You would use Savings Plans primarily for EC2 instances pricing cost optimization. You would not use Savings Plans for cost estimates.

Learn more about Savings Plans .

#### D. AWS Cost Explorer

**Correct answer:** No · **Your selection:** Not selected

Cost Explorer gives you the ability to visualize, understand, and manage your AWS costs and usage over time. You would not use Cost Explorer for cost estimates.

Learn more about Cost Explorer .

### Question 27

**Type:** Multiple Choice · **Time:** 24 seconds · **Result:** Correct

**Confidence level:** Confident

After selecting an Amazon EC2 Dedicated Host reservation, which pricing option would provide the largest discount?

**Correct answer(s):** C

**Your selection(s):** C

#### A. Hourly on-demand payment

**Correct answer:** No · **Your selection:** Not selected

Hourly, on-demand pricing provides flexibility in usage. However, this pricing structure does not provide the largest discount.

Learn more about Dedicated Host hourly, on-demand pricing .

#### B. No upfront payment

**Correct answer:** No · **Your selection:** Not selected

No upfront payment means that you do not need to provide any initial payment to reserve the Dedicated Host. However, this pricing option does not provide the largest discount.

Learn more about Dedicated Host reservation pricing .

#### C. All upfront payment

**Correct answer:** Yes · **Your selection:** Selected

All upfront pricing requires you to pay everything ahead of time. This pricing option provides the largest discount.

Learn more about Dedicated Host reservation pricing .

#### D. Partial upfront payment

**Correct answer:** No · **Your selection:** Not selected

Partial upfront payment has a lower initial cash payment. However, this type of payment does not provide the largest discount.

Learn more about Dedicated Host reservation pricing .

### Question 28

**Type:** Multiple Choice · **Time:** 56 seconds · **Result:** Correct

**Confidence level:** Confident

What is an example of high availability in the AWS Cloud?

**Correct answer(s):** B

**Your selection(s):** B

#### A. Making any AWS service available for use by paying on demand

**Correct answer:** No · **Your selection:** Not selected

This option is an example of pay-as-you-go pricing rather than high availability.

Learn more about pay-as-you-go pricing .

#### B. Ensuring that an application remains accessible, even if a resource fails

**Correct answer:** Yes · **Your selection:** Selected

High availability in the AWS Cloud ensures that an application remains accessible, even if a resource fails. High availability architecture is designed to have no single point of failure.

Learn more about high availability .

#### C. Consulting AWS technical support at any time of the day

**Correct answer:** No · **Your selection:** Not selected

Technical support is available 24 hours a day, 7 days a week. However, this is not a high availability arrangement for your application. There is downtime when you call technical support. High availability prevents downtime.

Learn more about AWS Support .

#### D. Deploying in any part of the world by using AWS Regions

**Correct answer:** No · **Your selection:** Not selected

This option is an example of the global presence of AWS, not high availability.

Learn more about the benefits of global presence of AWS .

### Question 29

**Type:** Multiple Choice · **Time:** 15 seconds · **Result:** Correct

**Confidence level:** Confident

Which of the following is a benefit of using an AWS managed service?

**Correct answer(s):** C

**Your selection(s):** C

#### A. Increased fixed costs that can be predicted by a finance team

**Correct answer:** No · **Your selection:** Not selected

One benefit of AWS Cloud computing is to trade fixed costs for variable costs. Therefore, an increase in fixed costs is not a benefit.

Learn more about the benefits of cloud computing .

#### B. Removal of the need to follow compliance standards

**Correct answer:** No · **Your selection:** Not selected

AWS supports a comprehensive list of security standards and compliance controls. However, to meet compliance standards is a shared responsibility between AWS and AWS customers. The use of managed services alone would not remove the need to follow compliance standards.

Learn more about AWS security and compliance .

Learn more about the shared responsibility model .

#### C. Reduced operational overhead for a company's IT staff

**Correct answer:** Yes · **Your selection:** Selected

Generally, companies can save annually on operational costs by using AWS managed services with operational best practices.

Learn more about AWS Managed Services .

Learn more about the benefits of AWS Managed Services .

#### D. Removal of the need to have a backup strategy

**Correct answer:** No · **Your selection:** Not selected

Some AWS managed services perform backups on behalf of the user. However, users should also have proper backup strategies in place.

Learn more about backup strategies .

### Question 30

**Type:** Multiple Choice · **Time:** 14 seconds · **Result:** Incorrect

**Confidence level:** Confident

Which of the following will help a user determine if they need to request a VPC service limit increase?

**Correct answer(s):** D

**Your selection(s):** B

#### A. AWS Health Dashboard

**Correct answer:** No · **Your selection:** Not selected

Health Dashboard gives you the ability to see the status and health of all AWS services. The dashboard also shows reported service-related events for services across AWS Regions.

Learn more about Health Dashboard .

#### B. AWS Service Catalog

**Correct answer:** No · **Your selection:** Selected

Service Catalog gives IT administrators the ability to create, manage, and distribute portfolios of approved products to end users.

Learn more about Service Catalog .

#### C. AWS Cost and Usage Report

**Correct answer:** No · **Your selection:** Not selected

Cost and Usage Report tracks your AWS usage and provides estimated charges associated with your account.

Learn more about Cost and Usage Report .

#### D. AWS Trusted Advisor

**Correct answer:** Yes · **Your selection:** Not selected

Trusted Advisor performs many checks on your AWS environment and makes recommendations for improvement. One of these checks includes VPC service limit checks, which you can use to determine if you need a VPC service limit increase.

Learn more about Trusted Advisor .

Learn more about service limit checks with Trusted Advisor .

### Question 31

**Type:** Multi-Select · **Time:** 3 minutes 22 seconds · **Result:** Correct

**Confidence level:** Confident

Which tasks require use of the AWS account root user?

**Correct answer(s):** C, D

**Your selection(s):** C, D

#### A. Grouping resources in AWS Systems Manager

**Correct answer:** No · **Your selection:** Not selected

You are not required to access the root user account to use Systems Manager. An IAM user with the necessary permissions can work with AWS Systems Manager.

#### B. Running applications in Amazon Elastic Kubernetes Service (Amazon EKS)

**Correct answer:** No · **Your selection:** Not selected

You are not required to access the root account to use Amazon EKS. An IAM user with the necessary permissions can run microservices applications in Amazon EKS.

#### C. Restoring IAM administrator permissions

**Correct answer:** Yes · **Your selection:** Selected

You must use the root user account to restore IAM permissions if the only IAM administrator accidentally revokes their own permissions.

Learn more about tasks that require root user credentials .

#### D. Closing an AWS account

**Correct answer:** Yes · **Your selection:** Selected

The root account must be used to close an AWS account.

Learn more about tasks that require root user credentials .

#### E. Modifying an Amazon EC2 instance type

**Correct answer:** No · **Your selection:** Not selected

You are not required to access the root user account to modify an EC2 instance type. An IAM user with the necessary permissions can modify an EC2 instance type.

### Question 32

**Type:** Multiple Choice · **Time:** 8 seconds · **Result:** Correct

**Confidence level:** Confident

What is an AWS best practice for managing an AWS account root user?

**Correct answer(s):** D

**Your selection(s):** D

#### A. Share the root user password with the operations team.

**Correct answer:** No · **Your selection:** Not selected

It is against AWS best practices to share the root user password.

Learn more about root user best practices .

#### B. Create an access key for the root user.

**Correct answer:** No · **Your selection:** Not selected

It is against AWS best practices to create access keys for the root user.

Learn more about root user access key best practices .

#### C. Do not rotate the root user password.

**Correct answer:** No · **Your selection:** Not selected

It is an AWS best practice to rotate passwords regularly, including the root user password. Additionally, the root user password should be long and complex. You should not use the same password for any other accounts.

Learn more about root user password best practices .

#### D. Turn on multi-factor authentication (MFA) for the root user.

**Correct answer:** Yes · **Your selection:** Selected

It is an AWS best practice to turn on MFA for all users, including the root user.

Learn more about MFA .

### Question 33

**Type:** Multiple Choice · **Time:** 24 seconds · **Result:** Correct

**Confidence level:** Confident

A company is building a web application using AWS. Which AWS service will help prevent network layer DDoS attacks against the web application?

**Correct answer(s):** B

**Your selection(s):** B

#### A. AWS Firewall Manager

**Correct answer:** No · **Your selection:** Not selected

Firewall Manager is a security management service. You can use Firewall Manager to centrally configure and manage firewall rules across your accounts and applications. Firewall Manager can help manage security policies such as AWS WAF rules. However, Firewall Manager alone does not provide DDoS protection. Firewall Manager is primarily a management tool for other security services.

Learn more about Firewall Manager .

#### B. AWS Shield

**Correct answer:** Yes · **Your selection:** Selected

Shield is a managed DDoS protection service. Shield helps protect applications that run on AWS. Shield automatically protects AWS resources from common DDoS attacks on the network and transport layers.

Learn more about Shield .

#### C. AWS WAF

**Correct answer:** No · **Your selection:** Not selected

AWS WAF protects web applications from specific web exploits. With AWS WAF, you can define customizable web security rules. You can use AWS WAF to protect against SQL injection, cross-site scripting, and other application-level attacks. However, AWS WAF does not help prevent network layer DDoS attacks.

Learn more about AWS WAF .

#### D. Amazon GuardDuty

**Correct answer:** No · **Your selection:** Not selected

GuardDuty is a threat detection service. GuardDuty continuously monitors your AWS accounts and workloads for malicious activity and unauthorized behavior. GuardDuty can detect some aspects of DDoS attacks after the attacks occur. However, GuardDuty is primarily a monitoring and detection service, not a protection mechanism against active DDoS attacks.

Learn more about GuardDuty .

### Question 34

**Type:** Multiple Choice · **Time:** 21 seconds · **Result:** Correct

**Confidence level:** Confident

Which AWS benefit enables users to deploy cloud infrastructure that consists of multiple geographic Regions connected by a network with low latency, high throughput, and redundancy?

**Correct answer(s):** B

**Your selection(s):** B

#### A. Economies of scale

**Correct answer:** No · **Your selection:** Not selected

AWS achieves economies of scale by the aggregation of usage from hundreds of thousands of customers in the cloud. This benefit leads to lower pay-as-you-go prices. However, this benefit does not provide a connected network with low latency, high throughput, and redundancy.

Learn more about the benefits of AWS Cloud computing .

#### B. Global reach

**Correct answer:** Yes · **Your selection:** Selected

AWS global infrastructure provides the benefit of global reach. AWS global infrastructure consists of multiple geographic Regions that are connected by a network with low latency, high throughput, and redundancy.

Learn more about AWS global infrastructure .

#### C. Elasticity

**Correct answer:** No · **Your selection:** Not selected

Elasticity gives you the ability to automatically add resources when demand increases. Additionally, you can automatically remove or scale down the resources when demand decreases. However, this benefit does not provide a connected network with low latency, high throughput, and redundancy.

Learn more about elasticity .

#### D. Security

**Correct answer:** No · **Your selection:** Not selected

AWS provides many services and features to ensure that customers can deploy resources globally in a secure and controlled manner. However, this benefit does not provide a connected network with low latency, high throughput, and redundancy.

Learn more about the security pillar .

Learn more about security in the AWS Cloud .

### Question 35

**Type:** Multiple Choice · **Time:** 20 seconds · **Result:** Correct

**Confidence level:** Confident

A cloud practitioner is developing a disaster recovery plan and intends to replicate data between multiple geographic areas. Which component of the AWS Cloud should the company use to meet these requirements?

**Correct answer(s):** A

**Your selection(s):** A

#### A. AWS Regions

**Correct answer:** Yes · **Your selection:** Selected

A Region is a named set of AWS resources in the same geographic area. A Region comprises at least two Availability Zones. Regions would be the appropriate way to replicate data in a DR plan.

Learn more about the AWS global infrastructure .

#### B. Edge locations

**Correct answer:** No · **Your selection:** Not selected

While edge locations are global, they are used to perform service-specific operations. For example, Amazon CloudFront, the content delivery network (CDN) service, uses edge locations to cache static and dynamic content. Edge locations are not designed to support DR.

Learn more about CloudFront and edge locations .

#### C. Availability Zones

**Correct answer:** No · **Your selection:** Not selected

An Availability Zone is one or more discrete data centers with redundant power, networking, and connectivity within an AWS Region. For a DR plan, it is a best practice to replicate the data between separate geographic areas.

Learn more about the AWS global infrastructure .

#### D. AWS accounts

**Correct answer:** No · **Your selection:** Not selected

AWS accounts control resources and payment for the AWS activity that is related to these resources. AWS accounts are unrelated to geographic areas.

Learn more about disaster recovery options .

### Question 36

**Type:** Multiple Choice · **Time:** 51 seconds · **Result:** Incorrect

**Confidence level:** Educated guess

A company needs access to cloud support engineers 24 hours a day, 7 days a week. What is the LEAST expensive AWS Support plan that meets this requirement?

**Correct answer(s):** A

**Your selection(s):** B

#### A. AWS Business Support+

**Correct answer:** Yes · **Your selection:** Not selected

Correct. Business Support+ is the least expensive support plan that includes access to cloud support engineers 24 hours a day, 7 days a week.

Learn more about AWS support plans .

#### B. AWS Enterprise Support

**Correct answer:** No · **Your selection:** Selected

Incorrect. Enterprise Support provides access to cloud support engineers 24 hours a day, 7 days a week. However, this support plan is more expensive than Business Support.

#### C. AWS Unified Operations

**Correct answer:** No · **Your selection:** Not selected

Incorrect. AWS Unified Operations provides 24 hours a day, 7 days a week access to cloud support engineers, but it is a higher-tier plan than Business Support+ and is therefore more expensive. It is not the least expensive option that meets the requirement.

#### D. AWS Basic Support

**Correct answer:** No · **Your selection:** Not selected

Incorret. Basic Support provides access to customer service, documentation, and whitepapers 24 hours a day, 7 days a week. However, Basic Support does not provide access to a cloud support engineer.

### Question 37

**Type:** Multiple Choice · **Time:** 38 seconds · **Result:** Correct

**Confidence level:** Confident

A company has a Java web application. The company wants to use auto deployment to create the AWS environment and deploy new versions of its application. Which AWS service will meet these requirements?

**Correct answer(s):** C

**Your selection(s):** C

#### A. AWS Auto Scaling

**Correct answer:** No · **Your selection:** Not selected

AWS Auto Scaling monitors applications or workloads that run on AWS and automatically adjusts the resource capacity to meet demand. AWS Auto Scaling does not create the resources necessary to deploy an application.

Learn more about auto scaling .

#### B. AWS Control Tower

**Correct answer:** No · **Your selection:** Not selected

AWS Control Tower provides a way to create and manage a multi-account environment that follows AWS best practices. AWS Control Tower does not create the resources necessary to deploy an application.

Learn more about AWS Control Tower .

#### C. AWS Elastic Beanstalk

**Correct answer:** Yes · **Your selection:** Selected

Elastic Beanstalk deploys and scales web applications and services. First, you upload your code to Elastic Beanstalk. Then, Elastic Beanstalk automatically manages the deployment. Additionally, Elastic Beanstalk manages capacity provisioning, load balancing, auto scaling, and application health monitoring.

Learn more about Elastic Beanstalk .

#### D. Amazon EC2

**Correct answer:** No · **Your selection:** Not selected

Amazon EC2 provides scalable compute servers in the AWS Cloud. Customers manage EC2 instances. Amazon EC2 does not provide the automatic deployment functionality required in this scenario.

Learn more about Amazon EC2 .

### Question 38

**Type:** Multiple Choice · **Time:** 34 seconds · **Result:** Correct

**Confidence level:** Educated guess

A company has existing software licenses that it wants to bring to AWS, but the licensing model requires licensing physical cores. How can the company meet this requirement in the AWS Cloud?

**Correct answer(s):** D

**Your selection(s):** D

#### A. Launch an Amazon EC2 instance with default tenancy.

**Correct answer:** No · **Your selection:** Not selected

Default tenancy automatically applies to an EC2 instance that you launch on demand. AWS places the EC2 instance on physical hardware that you share with other accounts. You have no control of the physical layer. Therefore, you would not be able to use the existing software license on the physical cores.

Learn more about default tenancy .

#### B. Purchase Dedicated Reserved Instances.

**Correct answer:** No · **Your selection:** Not selected

Dedicated Reserved Instances give you the ability to launch an EC2 instance on a physical server that is isolated from other accounts. The account user must commit for 1 year or 3 years. Dedicated Reserved Instances do not give you the ability to control the physical layer of the instance.

Learn more about Reserved Instances .

#### C. Create an On-Demand Capacity Reservation.

**Correct answer:** No · **Your selection:** Not selected

You can reserve a set number of On-Demand EC2 instances with shared tenancy in an Availability Zone. This solution makes On-Demand EC2 instances available when needed. However, a solution that creates an On-Demand Capacity Reservation would not meet the requirement of licensing physical cores.

Learn more about On-Demand Capacity Reservations .

#### D. Launch an Amazon EC2 instance on a Dedicated Host.

**Correct answer:** Yes · **Your selection:** Selected

A Dedicated Host can isolate EC2 instances from other accounts. You can control portions of the physical layer. Dedicated Hosts give you the ability to use existing software licenses.

Learn more about Dedicated Hosts .

### Question 39

**Type:** Multiple Choice · **Time:** 7 seconds · **Result:** Correct

**Confidence level:** Confident

Which AWS database service provides in-memory data storage?

**Correct answer(s):** A

**Your selection(s):** A

#### A. Amazon ElastiCache

**Correct answer:** Yes · **Your selection:** Selected

ElastiCache is a fully managed in-memory data caching service for databases.

Learn more about ElastiCache .

Learn more about different AWS Cloud databases .

#### B. Amazon Timestream

**Correct answer:** No · **Your selection:** Not selected

Timestream is a database service for time series data that you can persist to durable storage. Therefore, Timestream is not in-memory data storage.

Learn more about Timestream .

#### C. Amazon RDS

**Correct answer:** No · **Your selection:** Not selected

Amazon RDS is a fully managed service for relational databases engines, including Amazon Aurora, MySQL, PostgreSQL, SQL Server, Oracle, and MariaDB. None of these engines provide in-memory data storage.

Learn more about Amazon RDS .

#### D. Amazon DynamoDB

**Correct answer:** No · **Your selection:** Not selected

DynamoDB is a key-value data store that you can use to persist writes to durable storage. Therefore, DynamoDB is not in-memory data storage.

Learn more about DynamoDB .

### Question 40

**Type:** Multiple Choice · **Time:** 18 seconds · **Result:** Incorrect

**Confidence level:** Confident

A company needs to audit its AWS resources. The company must document any changes that have been made to the resources. Which AWS service will meet these requirements?

**Correct answer(s):** C

**Your selection(s):** A

#### A. Amazon CloudWatch

**Correct answer:** No · **Your selection:** Selected

CloudWatch collects and tracks metrics to help monitor AWS resources in real time. CloudWatch does not audit or document changes to AWS resources.

Learn more about CloudWatch .

#### B. AWS Artifact

**Correct answer:** No · **Your selection:** Not selected

AWS Artifact provides a central location to access AWS security and compliance reports and agreements. AWS Artifact does not audit or document changes to AWS resources.

Learn more about AWS Artifact .

#### C. AWS Config

**Correct answer:** Yes · **Your selection:** Not selected

AWS Config is a fully managed service that can provide inventory and configuration history audit reports of AWS resources.

Learn more about AWS Config .

#### D. Amazon Inspector

**Correct answer:** No · **Your selection:** Not selected

Amazon Inspector scans AWS workloads, including Amazon EC2 instances, Amazon Elastic Container Registry (Amazon ECR) container images, and AWS Lambda functions. Amazon Inspector scans these workloads for software vulnerabilities and unintended network exposure. Amazon Inspector does not audit or document changes to AWS resources.

Learn more about Amazon Inspector .

### Question 41

**Type:** Multiple Choice · **Time:** 19 seconds · **Result:** Incorrect

**Confidence level:** Confident

Which AWS service can help a company detect an outage of its website servers and redirect users to alternate servers?

**Correct answer(s):** A

**Your selection(s):** C

#### A. Amazon Route 53

**Correct answer:** Yes · **Your selection:** Not selected

Route 53 resolves domain names to IP addresses through records. You can use Route 53 routing policies for failover routing to another set of resources.

Learn more about Route 53 .

#### B. Amazon GuardDuty

**Correct answer:** No · **Your selection:** Not selected

GuardDuty is a security service that monitors your workloads for unusual activity and unauthorized access. GuardDuty does not redirect users to alternate servers in the event of an outage.

Learn more about GuardDuty .

#### C. Amazon CloudFront

**Correct answer:** No · **Your selection:** Selected

CloudFront provides the ability for static or dynamic data to be cached at edge locations as a content delivery network (CDN) solution. This solution alleviates the need to provision additional servers in the cloud to supply the data for a client to access. CloudFront does not redirect users to alternate servers in the event of an outage.

Learn more about CloudFront .

#### D. AWS Trusted Advisor

**Correct answer:** No · **Your selection:** Not selected

Trusted Advisor analyzes your account and produces recommendations on cost optimization, performance, security, fault tolerance, and service limits for your workloads. Trusted Advisor does not redirect users to alternate servers in the event of an outage.

Learn more about AWS Trusted Advisor .

### Question 42

**Type:** Multi-Select · **Time:** 1 minutes · **Result:** Incorrect

**Confidence level:** Educated guess

What are characteristics of AWS IAM users and groups?

**Correct answer(s):** A, E

**Your selection(s):** B, E

#### A. Groups can contain users only and cannot be nested.

**Correct answer:** Yes · **Your selection:** Not selected

A user group can only contain users, but not other user groups.

Learn more about user groups .

#### B. All new users are automatically added to a default group.

**Correct answer:** No · **Your selection:** Selected

There are no default user groups that are automatically assigned to a user when created. You must add users to groups.

#### C. Groups can be nested and can contain other groups.

**Correct answer:** No · **Your selection:** Not selected

It is not possible to have nested groups. Groups can only contain users, not other groups.

#### D. A user can only be a member of a single group at one time.

**Correct answer:** No · **Your selection:** Not selected

Users can be in more than one user group at a time.

Learn more about IAM users .

#### E. A user can be a member of multiple groups.

**Correct answer:** Yes · **Your selection:** Selected

A user can be added to multiple groups.

Learn more about user groups .

Learn more about IAM users .

### Question 43

**Type:** Multiple Choice · **Time:** 18 seconds · **Result:** Correct

**Confidence level:** Educated guess

A developer needs to access AWS resources from the AWS CLI. Which feature in AWS Identity and Access Management (IAM) can the developer use for authentication?

**Correct answer(s):** D

**Your selection(s):** D

#### A. IAM policies

**Correct answer:** No · **Your selection:** Not selected

IAM policies define the permissions of IAM identities and AWS resources. You cannot use IAM policies as credentials to access AWS.

Learn more about IAM policies .

#### B. SSH keys

**Correct answer:** No · **Your selection:** Not selected

SSH keys are a network method for remote server access. You cannot use SSH keys for authentication with the AWS CLI.

Learn more about SSH keys .

#### C. Account password policies

**Correct answer:** No · **Your selection:** Not selected

You can use an account password policy to define the necessary complexity and mandatory password rotation period of passwords for IAM users. You cannot use an account password policy to access AWS programmatically.

Learn more about account password policies .

#### D. IAM access keys

**Correct answer:** Yes · **Your selection:** Selected

IAM access keys are short-term or long-term credentials. Access keys give you the ability to access AWS programmatically.

Learn more about IAM access keys .

### Question 44

**Type:** Multiple Choice · **Time:** 5 seconds · **Result:** Correct

**Confidence level:** Confident

Which AWS compute service is serverless?

**Correct answer(s):** B

**Your selection(s):** B

#### A. Amazon RDS

**Correct answer:** No · **Your selection:** Not selected

Amazon RDS is not a serverless service. Amazon RDS runs a database engine on top of DB instances. When you create a database by using Amazon RDS, you must first select the DB instance size and type as part of the capacity planning process. Then, as the Amazon RDS storage or usage capacity gets consumed, you must implement capacity provisioning and management tasks. AWS does not automatically handle the capacity and management tasks.

Learn more about Amazon RDS .

#### B. AWS Lambda

**Correct answer:** Yes · **Your selection:** Selected

Lambda is a serverless service. When you use Lambda, you upload code and choose an event that will determine when the function runs. AWS manages all the patches, infrastructure maintenance, and capacity planning of Lambda. 

Learn more about Lambda .

#### C. Amazon EC2

**Correct answer:** No · **Your selection:** Not selected

Amazon EC2 is not a serverless service. Amazon EC2 provides secure, resizable compute capacity in the cloud. When you provision an EC2 instance, you have access to the EC2 instance and operating system to implement patches or maintenance tasks. When you use Amazon EC2, you must implement infrastructure management tasks like capacity provisioning.

Learn more about Amazon EC2 .

#### D. Amazon Elastic Container Service (Amazon ECS)

**Correct answer:** No · **Your selection:** Not selected

Amazon ECS is not a serverless service in all use cases. Amazon ECS is a container orchestration service that gives you the ability to run containers on various platforms. You can run the containers on an Amazon EC2 based compute platform, on external instances, or on an AWS Fargate serverless compute platform. With Amazon EC2 based compute clusters as the host platform, you must manage the compute cluster that the containers are hosted on. This use case requires you to manage capacity planning and patching tasks. Therefore, in this use case, Amazon ECS is not serverless.

Learn more about Amazon ECS .

### Question 45

**Type:** Multiple Choice · **Time:** 21 seconds · **Result:** Correct

**Confidence level:** Confident

Which feature can be used to protect Amazon S3 buckets from accidental overwrites or deletions?

**Correct answer(s):** A

**Your selection(s):** A

#### A. Bucket versioning

**Correct answer:** Yes · **Your selection:** Selected

Bucket versioning gives you the ability to maintain multiple versions of an object in an S3 bucket. Therefore, if you accidentally delete or overwrite an object, Amazon S3 does not remove the object permanently. Instead, Amazon S3 inserts a delete marker for the object in buckets with versioning turned on. This feature gives you the ability to restore previous versions of every object that is stored in the bucket.

Learn more about S3 bucket versioning .

#### B. Server-side encryption

**Correct answer:** No · **Your selection:** Not selected

You can use server-side encryption to protect data that is stored in Amazon S3. However, server-side encryption does not prevent overwrites or deletions.

Learn more about server-side encryption .

#### C. S3 access points

**Correct answer:** No · **Your selection:** Not selected

You can use S3 access points to simplify access to a subset of objects in an S3 bucket. However, S3 access points do not prevent overwrites or deletions.

Learn more about S3 access points .

#### D. Lifecycle policies

**Correct answer:** No · **Your selection:** Not selected

You can use lifecycle policies to set rules to transition objects to different storage classes. You cannot use lifecycle policies to protect S3 buckets from overwrites or deletions.

Learn more about S3 lifecycle policies .

### Question 46

**Type:** Multiple Choice · **Time:** 1 minutes 15 seconds · **Result:** Correct

**Confidence level:** Unsure

A company hosts an application on an Amazon EC2 instance. The EC2 instance needs to access several AWS resources, including Amazon S3 and Amazon DynamoDB. What is the MOST operationally efficient solution to delegate permissions?

**Correct answer(s):** A

**Your selection(s):** A

#### A. Create an IAM role with the required permissions. Attach the role to the EC2 instance.

**Correct answer:** Yes · **Your selection:** Selected

A solution that creates an IAM role with appropriate permissions and attaches the role to the EC2 instance will provide access to the AWS resources. This solution is a security best practice.

Learn more about roles for Amazon EC2 .

#### B. Create an IAM user and use its access key and secret access key to create a CLI profile in the EC2 instance.

**Correct answer:** No · **Your selection:** Not selected

A solution that creates an IAM user and uses its access key and secret access key in a profile is not necessary. This solution is not a security best practice. The best solution would be to attach an IAM role with appropriate permissions to the EC2 instance.

#### C. Create an IAM role with the required permissions. Attach the role to the administrative IAM user.

**Correct answer:** No · **Your selection:** Not selected

To create an IAM role with appropriate permissions would be the correct solution. However, you should attach the IAM role to the EC2 instance, not to an IAM user.

#### D. Create an IAM user and use its access key and secret access key in the application.

**Correct answer:** No · **Your selection:** Not selected

A solution that includes access keys and secret access keys in application code is not necessary. This solution is not a security best practice. The best solution would be to attach an IAM role with appropriate permissions to the EC2 instance.

### Question 47

**Type:** Multiple Choice · **Time:** 8 seconds · **Result:** Correct

**Confidence level:** Confident

Which AWS service offers the MOST cost-effective means of storing static images?

**Correct answer(s):** A

**Your selection(s):** A

#### A. Amazon S3

**Correct answer:** Yes · **Your selection:** Selected

Amazon S3 is the most cost effective option to store static images because you only pay for what you use.

Learn more about Amazon S3 pricing .

#### B. Amazon Elastic File System (Amazon EFS)

**Correct answer:** No · **Your selection:** Not selected

Amazon EFS provides scalable file storage but is designed and priced for active file system workloads rather than static content storage. While EFS can store images, the pricing model is higher per GB than Amazon S3 for static content.

Learn more about Amazon EFS .

#### C. Amazon DynamoDB

**Correct answer:** No · **Your selection:** Not selected

DynamoDB is a NoSQL key value database. You can use DynamoDB to store JSON documents, but you cannot store images in DynamoDB.

Learn more about DynamoDB .

#### D. Amazon Elastic Block Store (Amazon EBS)

**Correct answer:** No · **Your selection:** Not selected

Amazon EBS pricing is based on the amount of storage provisioned and the level of performance required. Although you can use Amazon EBS to store static images, Amazon S3 is more cost-effective for storing images on a price-per-GB basis.

Learn more about EBS pricing .

### Question 48

**Type:** Multi-Select · **Time:** 29 seconds · **Result:** Correct

**Confidence level:** Confident

An online retail company has seasonal sales spikes several times a year, primarily around holidays. Demand is lower at other times. The company finds it difficult to predict the increasing infrastructure demand for each season. Which advantages of moving to the AWS Cloud would MOST benefit the company?

**Correct answer(s):** C, D

**Your selection(s):** C, D

#### A. AWS service quotas

**Correct answer:** No · **Your selection:** Not selected

Service quotas are checks for the serve limits for a specific AWS service. Service quotas are not a benefit of cloud computing. Service quotas are related to how many resources you can create and deploy.

Learn more about service quotas .

#### B. AWS shared responsibility model

**Correct answer:** No · **Your selection:** Not selected

The AWS shared responsibility model outlines user security responsibilities in the cloud and AWS security responsibilities of the cloud.

Learn more about the AWS shared responsibility model .

#### C. Elasticity

**Correct answer:** Yes · **Your selection:** Selected

Elasticity is a benefit that eliminates the need to guess infrastructure capacity needs, and gives you the ability to scale up and down a needed. Because the company has seasonal spikes in demand, elasticity of the cloud is an advantage the company could benefit from.

Learn more about the benefits of cloud computing .

#### D. Pay-as-you-go pricing

**Correct answer:** Yes · **Your selection:** Selected

The pay-as-you-go pricing model is a benefit of the AWS Cloud. This model gives you the ability to pay for only the resources that you use. Instead of investing in data centers and servers, you pay only when and how many computing resources are consumed. This pricing model would give the company the ability to pay for resources only when they use them, especially during seasonal spikes in demand.

Learn more about the benefits of cloud computing .

Learn more about pay-as-you-go pricing .

#### E. Global footprint

**Correct answer:** No · **Your selection:** Not selected

The ability to have global reach is a benefit of cloud computing. However, the global reach is not directly related to the company's need to increase and decrease capacity to match seasonal spikes.

Learn more about the benefits of cloud computing .

### Question 49

**Type:** Multiple Choice · **Time:** 12 seconds · **Result:** Correct

**Confidence level:** Confident

Which AWS Support plan includes a designated AWS technical account manager (TAM)?

**Correct answer(s):** C

**Your selection(s):** C

#### A. AWS Basic Support

**Correct answer:** No · **Your selection:** Not selected

Incorrect. AWS Basic Support does not include a designated TAM. A TAM is exclusive to AWS Enterprise Support.

#### B. AWS Unified Operations

**Correct answer:** No · **Your selection:** Not selected

Incorrect. AWS Unified Operations does not include a designated TAM. Instead, it provides designated domain specialist engineers and incident management engineers. A TAM is exclusive to AWS Enterprise Support.

#### C. AWS Enterprise Support

**Correct answer:** Yes · **Your selection:** Selected

Correct. Enterprise Support includes access to a designated TAM.

Learn more about AWS support plans .

Learn more about features of AWS support plans .

#### D. AWS Business Support+

**Correct answer:** No · **Your selection:** Not selected

Incorrect. AWS Business Support+ does not include a designated TAM. A TAM is exclusive to AWS Enterprise Support.

### Question 50

**Type:** Multiple Choice · **Time:** 21 seconds · **Result:** Correct

**Confidence level:** Unsure

A company has an Amazon EC2 instance that must access AWS Secrets Manager to retrieve credentials. Which identity or service is required by the EC2 instance to perform the task?

**Correct answer(s):** B

**Your selection(s):** B

#### A. Multi-factor authentication (MFA)

**Correct answer:** No · **Your selection:** Not selected

MFA is a feature of AWS Identity and Access Management (IAM). MFA adds an extra layer of protection by requiring a second authentication factor for sign-in credentials. MFA does not provide an EC2 instance with access to Secrets Manager.

Learn more about MFA .

#### B. IAM role

**Correct answer:** Yes · **Your selection:** Selected

The EC2 instance will require an instance profile associated with an IAM role to be able to access Secrets Manager. The IAM role will provide the necessary permissions to the EC2 instance.

Learn more about IAM identities .

Learn more about IAM roles .

#### C. IAM group

**Correct answer:** No · **Your selection:** Not selected

An IAM group is a collection of IAM users that you can use to provide permissions to a group of users. You cannot use an IAM group to access Secrets Manager.

Learn more about IAM user groups .

#### D. Security groups

**Correct answer:** No · **Your selection:** Not selected

Security groups are a feature of Amazon VPC. Security groups attach to EC2 instances to control network traffic. Security groups do not provide an EC2 instance with access to Secrets Manager.

Learn more about security groups .

### Question 51

**Type:** Multiple Choice · **Time:** 22 seconds · **Result:** Correct

**Confidence level:** Unsure

Which architecture design principle applies to the concept of rightsizing the AWS Cloud infrastructure?

**Correct answer(s):** C

**Your selection(s):** C

#### A. Make frequent, small, reversible changes.

**Correct answer:** No · **Your selection:** Not selected

The solution to make frequent, small, reversible changes is a design principle related to the operational excellence pillar. This solution does not relate to rightsizing.

Learn more about operational excellence .

#### B. Perform operations as code.

**Correct answer:** No · **Your selection:** Not selected

The solution to perform operations as code is a design principle related to the operational excellence pillar. This solution does not include rightsizing.

Learn more about operational excellence .

#### C. Optimize for cost.

**Correct answer:** Yes · **Your selection:** Selected

You can use metrics from the currently running workload to select the right size and type to optimize for cost. This solution is one of the best practices on the cost optimization pillar for the Well-Architected Framework.

Learn more about cost optimization .

#### D. Scale horizontally for increased workload availability.

**Correct answer:** No · **Your selection:** Not selected

You can scale horizontally to increase aggregate workload availability as part of the reliability pillar. However, this solution does not relate to rightsizing.

Learn more about reliability .

### Question 52

**Type:** Multiple Choice · **Time:** 40 seconds · **Result:** Correct

**Confidence level:** Unsure

A company plans to migrate to the AWS Cloud. The company wants to use the AWS Cloud Adoption Framework (AWS CAF) to define and track business outcomes as part of its cloud transformation journey. Which AWS CAF governance perspective capability will meet these requirements?

**Correct answer(s):** B

**Your selection(s):** B

#### A. Cloud financial management

**Correct answer:** No · **Your selection:** Not selected

Cloud financial management helps you manage and optimize cloud costs and investments. Cloud financial management involves tracking financial metrics. However, this capability does not help you define and track overall business outcomes for cloud transformation.

#### B. Benefits management

**Correct answer:** Yes · **Your selection:** Selected

Benefits management within AWS CAF helps you define, track, and realize business outcomes from cloud investments. Benefits management helps you identify, measure, and communicate the business value that cloud adoption can provide. You can use this capability to track transformation outcomes.

Learn more about AWS CAF benefits management .

Learn more about AWS CAF governance perspectives .

#### C. Risk management

**Correct answer:** No · **Your selection:** Not selected

Risk management within AWS CAF helps you identify, assess, and mitigate any risks of cloud adoption for your use case. Risk management does not specifically address defining and tracking business outcomes.

#### D. Application portfolio management

**Correct answer:** No · **Your selection:** Not selected

Application portfolio management helps you plan and manage your application portfolio during cloud migration. Application portfolio management helps you determine your migration strategy. However, this capability does not help you define and track business outcomes.

### Question 53

**Type:** Multiple Choice · **Time:** 9 seconds · **Result:** Correct

**Confidence level:** Confident

Which AWS service or feature can a developer use to access AWS services programmatically?

**Correct answer(s):** C

**Your selection(s):** C

#### A. AWS CodeDeploy

**Correct answer:** No · **Your selection:** Not selected

CodeDeploy is a deployment service used to automate application deployments on AWS compute resources, which includes on-premises instances.

Learn more about CodeDeploy .

#### B. AWS CodePipeline

**Correct answer:** No · **Your selection:** Not selected

CodePipeline is a continuous delivery service used to model, visualize, and automate the entire software release process up to production.

Learn more about CodePipeline .

#### C. AWS software development kits (SDKs)

**Correct answer:** Yes · **Your selection:** Selected

With AWS SDK, users can programmatically access AWS services with an API from the programming languages of your choice.

Learn more about AWS SDKs .

#### D. AWS Management Console

**Correct answer:** No · **Your selection:** Not selected

AWS Management Console does not provide programmatic access to AWS services. The Management Console gives users the ability to interact with AWS services through a web user interface.

Learn more about the AWS Management Console .

### Question 54

**Type:** Multiple Choice · **Time:** 31 seconds · **Result:** Incorrect

**Confidence level:** Confident

Which responsibility is shared between the user and AWS?

**Correct answer(s):** B

**Your selection(s):** A

#### A. Configure an Amazon EC2 instance

**Correct answer:** No · **Your selection:** Selected

Amazon EC2 is categorized as infrastructure as a service (IaaS). Amazon EC2 requires the user to perform the necessary security configuration and management tasks. The configuration of an EC2 instance is a user's responsibility.

#### B. Provide awareness and training

**Correct answer:** Yes · **Your selection:** Not selected

AWS trains AWS employees, but a user must train their own employees. Therefore, this responsibility is a shared control.

Learn more about the AWS shared responsibility model .

#### C. Control the environment of physical AWS data centers

**Correct answer:** No · **Your selection:** Not selected

AWS is responsible for the protection of the infrastructure that runs all of the services offered in the AWS Cloud.

#### D. Provide a key for Amazon S3 client-side encryption

**Correct answer:** No · **Your selection:** Not selected

It is the user’s responsibility to provide client-side encryption keys. Users often must maintain their own keys because of regulatory requirements.

### Question 55

**Type:** Multi-Select · **Time:** 53 seconds · **Result:** Correct

**Confidence level:** Educated guess

Which of the following are security best practices for using AWS Identity and Access Management (IAM)?

**Correct answer(s):** B, E

**Your selection(s):** B, E

#### A. Do not remove credentials, even if they are never used.

**Correct answer:** No · **Your selection:** Not selected

It is an AWS best practice to regularly review and remove unnecessary credentials.

Learn more about credential best practices .

#### B. Enable multi-factor authentication (MFA).

**Correct answer:** Yes · **Your selection:** Selected

It is an AWS best practice to require MFA for privileged users. MFA requires another authentication factor to sign in. Therefore, MFA provides an additional layer of security.

Learn more about IAM best practices .

#### C. Use AWS account root user credentials for IAM tasks.

**Correct answer:** No · **Your selection:** Not selected

It is against AWS best practices to use the root user for non-essential tasks. You should only use root user credentials for tasks that require the root user.

Learn more about root user best practices .

#### D. Use inline policies instead of customer managed policies.

**Correct answer:** No · **Your selection:** Not selected

You should use customer managed policies instead of inline policies. Inline policies attach to a single IAM identity. However, you can apply customer managed policies to multiple principal entities.

Learn more about how to select the correct policy type .

#### E. Rotate credentials regularly.

**Correct answer:** Yes · **Your selection:** Selected

It is an AWS best practice to rotate credentials regularly.

Learn more about credential best practices .

### Question 56

**Type:** Multiple Choice · **Time:** 57 seconds · **Result:** Correct

**Confidence level:** Educated guess

An application is receiving SQL injection attacks from multiple external resources. Which AWS service or feature can help automate mitigation against these attacks?

**Correct answer(s):** B

**Your selection(s):** B

#### A. Security groups

**Correct answer:** No · **Your selection:** Not selected

Security groups are used to manage traffic from specific IP addresses or ranges to specific ports. Security groups do not mitigate against SQL injection attacks.

Learn more about how to filter traffic using security groups .

#### B. AWS WAF

**Correct answer:** Yes · **Your selection:** Selected

AWS WAF is a web application firewall that helps protect your web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources.

Learn more about how to use AWS WAF to protect against SQL injection attacks .

#### C. Network ACL

**Correct answer:** No · **Your selection:** Not selected

Network ACL rules can allow or deny traffic based on only port, protocols, or IP addresses. Network ACLs cannot filter SQL injection attacks, and, therefore, cannot provide mitigation against these attacks.

Learn more about network ACL rules .

#### D. Elastic Load Balancing (ELB)

**Correct answer:** No · **Your selection:** Not selected

ELB is used to distribute traffic or requests across a pool of resources. ELB does not filter URL traffic. Instead, ELB passes the request to the resource.

Learn more about ELB .

### Question 57

**Type:** Multiple Choice · **Time:** 17 seconds · **Result:** Correct

**Confidence level:** Educated guess

Which option is an AWS Cloud Adoption Framework (AWS CAF) foundational capability for the operations perspective?

**Correct answer(s):** D

**Your selection(s):** D

#### A. Application portfolio management

**Correct answer:** No · **Your selection:** Not selected

Application portfolio management is a capability of the governance perspective in AWS CAF.

#### B. Identity and access management

**Correct answer:** No · **Your selection:** Not selected

Identity and access management is a capability of the security perspective in AWS CAF.

#### C. Product management

**Correct answer:** No · **Your selection:** Not selected

Product management is a capability of the business perspective in AWS CAF.

#### D. Performance and capacity management

**Correct answer:** Yes · **Your selection:** Selected

Performance and capacity management is a capability of the operations perspective in AWS CAF.

Learn more about AWS CAF .

### Question 58

**Type:** Multiple Choice · **Time:** 24 seconds · **Result:** Correct

**Confidence level:** Educated guess

Which service can a customer use to set up a management payer account to view consolidated billing reports?

**Correct answer(s):** D

**Your selection(s):** D

#### A. AWS Budgets

**Correct answer:** No · **Your selection:** Not selected

You can use AWS Budgets to track and to act on AWS accounts costs and usage. You cannot use AWS Budgets to consolidate billing reports.

Learn more about how to manage costs with AWS Budgets .

#### B. Amazon QuickSight

**Correct answer:** No · **Your selection:** Not selected

QuickSight is a business intelligence service that delivers insights with dashboards. You cannot use QuickSight to consolidate billing reports.

Learn more about QuickSight .

#### C. Amazon Macie

**Correct answer:** No · **Your selection:** Not selected

Macie is a security service that uses machine learning and pattern matching to automatically discover, classify, and protect sensitive data in Amazon S3. You cannot use Macie to consolidate billing reports.

Learn more about Macie .

#### D. AWS Organizations

**Correct answer:** Yes · **Your selection:** Selected

Organizations is an account management service that gives you the ability to consolidate multiple AWS accounts to centrally manage. Consolidated billing is a feature in Organizations that you can use to consolidate billing and payment for multiple AWS accounts.

Learn more about Organizations .

Learn more about consolidated billing for Organizations .

### Question 59

**Type:** Multiple Choice · **Time:** 23 seconds · **Result:** Correct

**Confidence level:** Confident

A company is building an application that requires the ability to send, store, and receive messages between application components. The company has another requirement to process messages in first-in, first-out (FIFO) order. Which AWS service should the company use?

**Correct answer(s):** C

**Your selection(s):** C

#### A. Amazon Simple Notification Service (Amazon SNS)

**Correct answer:** No · **Your selection:** Not selected

Amazon SNS is a publish/subscribe messaging service. Amazon SNS pushes messages to subscribers, rather than providing message storage and retrieval. Amazon SNS does not meet the requirement to store and process messages in FIFO order.

Learn more about Amazon SNS .

#### B. AWS Step Functions

**Correct answer:** No · **Your selection:** Not selected

Step Functions is a serverless workflow service that you can use to coordinate multiple AWS services into serverless workflows. Step Functions is designed to orchestrate complex workflows with various steps and states. However, you would not use Step Functions for messaging between application components. Step Functions does not provide a message queue with FIFO capabilities.

Learn more about Step Functions .

#### C. Amazon Simple Queue Service (Amazon SQS)

**Correct answer:** Yes · **Your selection:** Selected

Amazon SQS is a fully managed message queuing service. You can use Amazon SQS to decouple and scale microservices, distributed systems, and serverless applications. Amazon SQS provides standard queues and FIFO queues. FIFO queues process messages once in the exact order that the messages were sent.

Learn more about Amazon SQS .

#### D. Amazon Kinesis Data Streams

**Correct answer:** No · **Your selection:** Not selected

Kinesis Data Streams is a real-time data streaming service that can handle ordered data. However, Kinesis Data Streams is designed for high-volume streaming data use cases. Kinesis Data Streams is not a message queuing service. Kinesis Data Streams does not provide FIFO capabilities.

Learn more about Kinesis Data Streams .

### Question 60

**Type:** Multiple Choice · **Time:** 27 seconds · **Result:** Correct

**Confidence level:** Confident

Which AWS service should be used to monitor Amazon EC2 instances for CPU and network utilization?

**Correct answer(s):** A

**Your selection(s):** A

#### A. Amazon CloudWatch

**Correct answer:** Yes · **Your selection:** Selected

CloudWatch monitors resources and collects real-time logs. The logs can give you insight on your resource's overall health. With the CloudWatch agent installed on an EC2 instance, you can monitor your EC2 instances for CPU and network utilization.

Learn more about CloudWatch .

#### B. AWS Config

**Correct answer:** No · **Your selection:** Not selected

AWS Config analyzes past and present configurations of your resources. AWS Config can help keep your resource configurations compliant with remediation rules that can detect and reverse configurations changes. AWS Config does not monitor EC2 instances for CPU and network utilization.

Learn more about AWS Config .

#### C. AWS CloudTrail

**Correct answer:** No · **Your selection:** Not selected

CloudTrail logs API activity as event history within your AWS account, which can help with monitoring, governance, and compliance. The logs record actions taken in your AWS account, such as actions taken by a user or role. CloudTrail does not monitor EC2 instances for CPU and network utilization.

Learn more about CloudTrail .

#### D. Amazon Inspector

**Correct answer:** No · **Your selection:** Not selected

Amazon Inspector searches for security vulnerabilities in software and network best practices. Although Amazon Inspector can scan EC2 instances, it does not monitor for CPU and network utilization.

Learn more about Amazon Inspector .

### Question 61

**Type:** Multiple Choice · **Time:** 13 seconds · **Result:** Correct

**Confidence level:** Confident

What is a responsibility of AWS under the AWS shared responsibility model?

**Correct answer(s):** C

**Your selection(s):** C

#### A. Update the guest operating systems on deployed Amazon EC2 instances.

**Correct answer:** No · **Your selection:** Not selected

The customer must manage updates on the customer's provisioned infrastructure.

#### B. Configure new resources within an AWS account.

**Correct answer:** No · **Your selection:** Not selected

The customer decides which services to use and how to use them.

#### C. Secure the physical infrastructure.

**Correct answer:** Yes · **Your selection:** Selected

AWS fully maintains the physical controls.

Learn more about the AWS shared responsibility model .

#### D. Design a customer's application for disaster recovery.

**Correct answer:** No · **Your selection:** Not selected

AWS offers many services to help with disaster recovery and business continuity planning. However, according to the shared responsibility model, it is the customer’s responsibility to decide which services to use.

### Question 62

**Type:** Multiple Choice · **Time:** 10 seconds · **Result:** Correct

**Confidence level:** Educated guess

Which AWS service can generate a finding when personally identifiable information (PII) is stored within an Amazon S3 bucket?

**Correct answer(s):** D

**Your selection(s):** D

#### A. Amazon GuardDuty

**Correct answer:** No · **Your selection:** Not selected

GuardDuty is a threat detection service that can monitor AWS accounts and workloads for malicious activity. GuardDuty can generate security findings and remediation suggestions. However, GuardDuty does not generate a finding when PII is stored in an S3 bucket.

Learn more about GuardDuty .

#### B. Amazon Inspector

**Correct answer:** No · **Your selection:** Not selected

Amazon Inspector is an automated vulnerability management service that scans your AWS workloads for software vulnerabilities or unintended network exposure. Amazon Inspector does not generate a finding when PII is stored in an S3 bucket.

Learn more about Amazon Inspector .

#### C. AWS Trusted Advisor

**Correct answer:** No · **Your selection:** Not selected

Trusted Advisor can evaluate your AWS account and provide recommendations to help you follow AWS best practices. Trusted Advisor does not generate a finding when PII is stored in an S3 bucket.

Learn more about Trusted Advisor .

#### D. Amazon Macie

**Correct answer:** Yes · **Your selection:** Selected

Macie applies machine learning and pattern matching techniques to identify sensitive data, including PII. Macie can generate a finding if sensitive data is found. You can select specific S3 buckets for Macie to search.

Learn more about Macie .

### Question 63

**Type:** Multiple Choice · **Time:** 17 seconds · **Result:** Incorrect

**Confidence level:** Educated guess

What is an IAM best practice for AWS account root user access keys?

**Correct answer(s):** D

**Your selection(s):** C

#### A. Allow the system administrator group to use the root user credentials for daily access.

**Correct answer:** No · **Your selection:** Not selected

Root user credentials should not be used for daily access. You should only use the root user for tasks that only the root user can perform.

Learn more about root user best practices .

#### B. Use root user credentials to access production database instances.

**Correct answer:** No · **Your selection:** Not selected

Root user credentials should not be used for daily access. Instead, IAM policies should be used to provide access to production database instances.

Learn more about security best practices for the root user .

Learn more about security best practices in IAM .

#### C. Use root user credentials to access sensitive information stored on AWS.

**Correct answer:** No · **Your selection:** Selected

Access to sensitive information should be restricted by using IAM identities. It is not recommended to use root credentials for daily work. A policy can be created and assigned to groups or users that need to access this sensitive information.

Learn more about policies and permissions in IAM .

Learn more about root user best practices .

#### D. Delete all root user access keys, if possible.

**Correct answer:** Yes · **Your selection:** Not selected

It is not recommended to generate access keys for the root user because the root user provides full access to resources for all AWS services. The root user should not be used for everyday tasks. Root user should be used to complete the tasks that only the root user can perform.

Learn more about security best practices for the root user .

### Question 64

**Type:** Multiple Choice · **Time:** 22 seconds · **Result:** Correct

**Confidence level:** Confident

A company needs to run an application on Amazon EC2 instances. The running workload cannot be interrupted. The company needs an instance purchasing option that requires no commitment. Which instance purchasing option will meet these requirements MOST cost effectively?

**Correct answer(s):** A

**Your selection(s):** A

#### A. On-Demand Instances

**Correct answer:** Yes · **Your selection:** Selected

With On-Demand Instances, you only pay for the compute power that you use. You can pay by the hour or by the second. There is no time commitment.

Learn more about On-Demand Instances .

#### B. Dedicated Hosts

**Correct answer:** No · **Your selection:** Not selected

Dedicated Hosts give you the ability to use server-bound licenses. However, Dedicated Hosts are more expensive than non-dedicated hosts.

Learn more about Dedicated Hosts .

#### C. Reserved Instances

**Correct answer:** No · **Your selection:** Not selected

Reserved Instances can provide significant discounts. However, Reserved Instances require a 1-year or 3-year commitment.

Learn more about Reserved Instances .

#### D. Spot Instances

**Correct answer:** No · **Your selection:** Not selected

Spot Instances provide discounted rates for EC2 instances. However, you should use Spot Instances for applications or workloads that have flexible start times and stop times. A Spot Instance only runs when capacity is available. Therefore, this instance type is not feasible for a workload that cannot be interrupted.

Learn more about Spot Instances .

### Question 65

**Type:** Multiple Choice · **Time:** 11 seconds · **Result:** Correct

**Confidence level:** Confident

Which AWS service or tool can a company use to visualize, understand, and manage AWS spending and usage over time?

**Correct answer(s):** A

**Your selection(s):** A

#### A. AWS Cost Explorer

**Correct answer:** Yes · **Your selection:** Selected

Cost Explorer gives you the ability to visualize, understand, and manage your AWS spending and usage over time.

Learn more about Cost Explorer .

#### B. AWS Budgets

**Correct answer:** No · **Your selection:** Not selected

AWS Budgets gives you the ability to set custom budgets. You can receive alerts when you exceed the spending or usage thresholds that you set in your budget. You would not use AWS Budgets to visualize or understand AWS spending and usage over time.

Learn more about AWS Budgets .

#### C. AWS Trusted Advisor

**Correct answer:** No · **Your selection:** Not selected

Trusted Advisor analyzes your AWS environment and provides best practice recommendations. You would not use Trusted Advisor to visualize or understand spending and usage over time.

Learn more about Trusted Advisor .

#### D. Amazon CloudWatch

**Correct answer:** No · **Your selection:** Not selected

You can use CloudWatch to monitor the performance of AWS workloads. You would not use CloudWatch to visualize or understand AWS spending and usage over time.

Learn more about CloudWatch .
