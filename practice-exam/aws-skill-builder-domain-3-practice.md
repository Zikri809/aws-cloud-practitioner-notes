# AWS Skill Builder — Domain 3 Practice

AWS Certified Cloud Practitioner (CLF-C02) — Cloud Technology and Services

## Assessment results

- Score: 85%
- Attempt: 1
- Correct answers: 17
- Incorrect answers: 3
- Skipped: 0
- Total time: 4 minutes 46 seconds
- Average time per question: 14 seconds

Extracted from the supplied assessment results. AWS wording and explanations are preserved. Navigation and repeated table headings are removed. Reference labels are retained; the paste did not include their URLs.

## Questions, answers, and explanations

### Question 1

**Type:** Multiple Choice · **Time:** 10 seconds · **Result:** Correct

Which AWS service can analyze a set of documents to generate valuable insights from text?

**Correct answer(s):** A

**Your selection(s):** A

#### A. Amazon Comprehend

**Correct answer:** Yes · **Your selection:** Selected

Amazon Comprehend uses a pre-trained model to gain insights about the content of documents. You can use Amazon Comprehend to analyze documents and generate valuable insights from the text.

Learn more about Amazon Comprehend .

#### B. Amazon Polly

**Correct answer:** No · **Your selection:** Not selected

You can use Amazon Polly to convert text into lifelike speech. Amazon Polly does not analyze documents or generate insights from the text.

Learn more about Amazon Polly .

#### C. Amazon Transcribe

**Correct answer:** No · **Your selection:** Not selected

Amazon Transcribe is a speech recognition service that you can use to convert audio to text. Amazon Transcribe does not analyze documents or generate insights from the text.

Learn more about Amazon Transcribe .

#### D. Amazon Textract

**Correct answer:** No · **Your selection:** Not selected

Amazon Textract uses machine learning to automatically extract text, handwriting, and data from scanned documents. You can use Amazon Textract to extract data from documents. However, Amazon Textract does not analyze documents or generate insights from the text.

Learn more about Amazon Textract .

### Question 2

**Type:** Multiple Choice · **Time:** 9 seconds · **Result:** Correct

A company would like to host its MySQL databases on AWS and maintain full control over the operating system, database installation, and configuration. Which AWS service should the company use to host the databases?

**Correct answer(s):** D

**Your selection(s):** D

#### A. Amazon RDS

**Correct answer:** No · **Your selection:** Not selected

Amazon RDS is a fully managed relational database service on AWS. Amazon RDS includes an option for MySQL databases. However, this solution would not give the company the ability to maintain full control over the operating system, database installation, and configuration.

Learn more about Amazon RDS .

#### B. Amazon Aurora

**Correct answer:** No · **Your selection:** Not selected

Aurora is a fully managed relational database on AWS. Aurora is compatible with MySQL. However, this solution would not give the company the ability to maintain full control over the operating system, database installation, and configuration.

Learn more about Aurora .

#### C. Amazon DynamoDB

**Correct answer:** No · **Your selection:** Not selected

DynamoDB is an AWS-managed non-relational database service that is fast and scalable. This solution would not meet the company's requirement to host MySQL databases.

Learn more about DynamoDB .

#### D. Amazon EC2

**Correct answer:** Yes · **Your selection:** Selected

Amazon EC2 is a service that provides resizable compute capacity in the AWS Cloud. You can use Amazon EC2 to host a MySQL database similar to one that runs on premises. The company will have full control over the operating system, database installation, and configuration.

Learn more about Amazon EC2 .

### Question 3

**Type:** Multiple Choice · **Time:** 19 seconds · **Result:** Incorrect

A business-critical application requires multi-Region deployment to meet availability service level agreements (SLAs). Which AWS service or feature should be used for network routing and load balancing for this application?

**Correct answer(s):** C

**Your selection(s):** B

#### A. Amazon API Gateway

**Correct answer:** No · **Your selection:** Not selected

You can use API Gateway to create and manage REST, HTTP, and WebSocket APIs. API Gateway cannot route traffic to different Regions.

Learn more about API Gateway .

#### B. Application Load Balancer (ALB)

**Correct answer:** No · **Your selection:** Selected

ALBs can distribute traffic to different resources within a Region. ALBs are a regional service. ALBs cannot route traffic to different Regions.

Learn more about ALBs .

#### C. Amazon Route 53

**Correct answer:** Yes · **Your selection:** Not selected

Route 53 is a DNS service that can route traffic to resources. You can use Route 53 to implement traffic routing across multiple Regions to meet availability SLAs.

Learn more about Route 53 .

#### D. AWS Site-to-Site VPN

**Correct answer:** No · **Your selection:** Not selected

You can use Site-to-Site VPN to establish a secure and private connection from your on-premises networks to the AWS Cloud. Site-to-Site VPN cannot route traffic to different Regions.

Learn more about Site-to-Site VPN .

### Question 4

**Type:** Multiple Choice · **Time:** 12 seconds · **Result:** Incorrect

A company needs a database for queries. The database must summarize columns of data for analytical reports. Which AWS service will meet these requirements?

**Correct answer(s):** A

**Your selection(s):** C

#### A. Amazon Redshift

**Correct answer:** Yes · **Your selection:** Not selected

Amazon Redshift is a fully managed, petabyte-scale data warehouse service. You can use Amazon Redshift as a columnar database. Amazon Redshift can provide fast retrieval, which is often necessary in analytical applications.

Learn more about Amazon Redshift .

#### B. Amazon Neptune

**Correct answer:** No · **Your selection:** Not selected

Neptune is a fully managed graph database. Neptune is not suitable for columnar summarization.

Learn more about Neptune .

#### C. Amazon Aurora

**Correct answer:** No · **Your selection:** Selected

Aurora is a relational database compatible with MySQL and PostgreSQL. Aurora is not suitable for columnar summarization.

Learn more about Aurora .

#### D. Amazon DynamoDB

**Correct answer:** No · **Your selection:** Not selected

DynamoDB is a fully managed NoSQL database service. DynamoDB is not suitable for columnar summarization.

Learn more about DynamoDB .

### Question 5

**Type:** Multiple Choice · **Time:** 9 seconds · **Result:** Correct

A web developer has limited knowledge of AWS networking services such as Amazon VPC, Elastic Load Balancing, and Auto Scaling, but wants to host a highly available web application. Which AWS service would automatically handle the deployment and reduce the complexity for the developer?

**Correct answer(s):** B

**Your selection(s):** B

#### A. AWS CodeDeploy

**Correct answer:** No · **Your selection:** Not selected

CodeDeploy is a deployment service used to automate application deployment on compute resources. However, the developer is still required to have knowledge of how to manage the underlying infrastructure and AWS networking services.

Learn more about CodeDeploy .

#### B. AWS Elastic Beanstalk

**Correct answer:** Yes · **Your selection:** Selected

Elastic Beanstalk gives you the ability to deploy and manage web applications in AWS Cloud without having to understand or manage the underlying infrastructure.

Learn more about Elastic Beanstalk .

#### C. AWS Resource Access Manager

**Correct answer:** No · **Your selection:** Not selected

AWS Resource Access Manager (AWS RAM) is a service that gives you the ability to securely share AWS resources with any AWS account or within your AWS Organization. AWS RAM is not used to host web applications.

Learn more about AWS RAM .

#### D. AWS CloudFormation

**Correct answer:** No · **Your selection:** Not selected

CloudFormation is a service used to model, provision, and manage AWS resources with infrastructure as code. CloudFormation requires knowledge of networking services to provision the resources.

Learn more about CloudFormation .

### Question 6

**Type:** Multiple Choice · **Time:** 18 seconds · **Result:** Correct

**Confidence level:** Unsure

Which AWS service automatically handles application health monitoring?

**Correct answer(s):** C

**Your selection(s):** C

#### A. AWS Config

**Correct answer:** No · **Your selection:** Not selected

AWS Config is a service that gives you the ability to assess, audit, and evaluate the configurations of your AWS resources, but does not support application health checks.

Learn more about AWS Config .

#### B. Amazon API Gateway

**Correct answer:** No · **Your selection:** Not selected

API Gateway does not handle application health monitoring. It is a service used to create, maintain, and monitor different types of APIs at scale.

Learn more about API Gateway .

#### C. AWS Elastic Beanstalk

**Correct answer:** Yes · **Your selection:** Selected

Elastic Beanstalk gives you the ability to deploy and manage applications in AWS Cloud without you having to understand or manage the underlying infrastructure. Elastic Beanstalk also includes functionality to monitor the health of your application.

Learn more about Elastic Beanstalk .

Learn more about monitoring in Elastic Beanstalk .

#### D. AWS Lambda

**Correct answer:** No · **Your selection:** Not selected

Lambda does not automatically handle application health monitoring. Lambda is a serverless compute service that gives you the ability to run code without having to provision and manage servers.

Learn more about Lambda .

### Question 7

**Type:** Multiple Choice · **Time:** 9 seconds · **Result:** Correct

A systems administrator wants to migrate a static website to AWS. The systems administrator wants to stop paying for the compute power necessary to run web servers. Which AWS service will meet these requirements?

**Correct answer(s):** C

**Your selection(s):** C

#### A. Amazon EC2

**Correct answer:** No · **Your selection:** Not selected

Amazon EC2 provides pay-as-you-go compute capacity that you can use for website hosting. However, the systems administrator wants to migrate away from servers.

Learn more about Amazon EC2 .

#### B. Amazon Lightsail

**Correct answer:** No · **Your selection:** Not selected

You can use Lightsail to host a static website. However, the website would run on an EC2 instance. Therefore, you would need to pay for the compute charges associated with running the EC2 instance.

Learn more about Lightsail .

#### C. Amazon S3

**Correct answer:** Yes · **Your selection:** Selected

Amazon S3 provides object storage. Additionally, you can use Amazon S3 to host static website content, including HTML, JavaScript, and CSS files. With Amazon S3, you do not need an always-running EC2 instance.

Learn more about S3 static website hosting .

#### D. AWS Lambda

**Correct answer:** No · **Your selection:** Not selected

Lambda is a serverless compute service that you can use to run code without the need to provision infrastructure. You can use Lambda for dynamic content, to run functions, or to process requests. However, Lambda is not appropriate to host a static website. Additionally, Lambda is a compute service, and you pay for the compute runtime.

Learn more about Lambda .

### Question 8

**Type:** Multiple Choice · **Time:** 4 seconds · **Result:** Correct

Which AWS service can convert text to lifelike speech?

**Correct answer(s):** A

**Your selection(s):** A

#### A. Amazon Polly

**Correct answer:** Yes · **Your selection:** Selected

Amazon Polly is a service that turns text into lifelike speech. Amazon Polly gives you the ability to create applications that talk. With Amazon Polly, you can build entirely new categories of speech-enabled products.

Learn more about Amazon Polly .

#### B. Amazon Transcribe

**Correct answer:** No · **Your selection:** Not selected

Amazon Transcribe is a speech recognition service that uses machine learning models to convert audio to text. You can use Amazon Transcribe as a standalone transcription service. Additionally, you can use Amazon Transcribe to add speech-to-text capabilities to any application. Amazon Transcribe does not convert text to lifelike speech.

Learn more about Amazon Transcribe .

#### C. Amazon Textract

**Correct answer:** No · **Your selection:** Not selected

Amazon Textract is a machine learning service that automatically extracts text, handwriting, and data from scanned documents. Amazon Textract goes beyond basic optical character recognition (OCR) to identify, understand, and extract data from forms and tables. Amazon Textract does not convert text to lifelike speech.

Learn more about Amazon Textract .

#### D. Amazon Comprehend

**Correct answer:** No · **Your selection:** Not selected

Amazon Comprehend is a natural language processing (NLP) service that uses machine learning models to uncover information in unstructured data. Amazon Comprehend develops insights by recognizing the entities, key phrases, language, sentiments, and other common elements in a document. Amazon Comprehend does not convert text to lifelike speech.

Learn more about Amazon Comprehend .

### Question 9

**Type:** Multiple Choice · **Time:** 28 seconds · **Result:** Incorrect

A company is running an application replicated on six Linux-based Amazon EC2 instances across two Availability Zones in an AWS Region. The application needs shared access to data. The data is going to be frequently changed by the application within existing data files. Which AWS storage solution would meet the company's needs with the LEAST operational overhead?

**Correct answer(s):** D

**Your selection(s):** A

#### A. Amazon Elastic Block Store (Amazon EBS) Multi-Attach

**Correct answer:** No · **Your selection:** Selected

Amazon EBS Multi-Attach gives multiple EC2 instances the ability to share access to the same EBS volumes. However, all the instances would need to be in the same Availability Zone. This scenario has instances across two Availability Zones.

Learn more about Amazon EBS Multi-Attach .

#### B. Amazon S3

**Correct answer:** No · **Your selection:** Not selected

Amazon S3 is an object storage solution. With object storage, you would need to upload an entire file for each data change. This solution requires more operational overhead.

Learn more about Amazon S3 .

#### C. Amazon FSx for Windows File Server

**Correct answer:** No · **Your selection:** Not selected

Amazon FSx for Windows File Server is optimized for Windows workloads using the SMB protocol. This approach would require additional configuration and compatibility layers for Linux-based instances.

Learn more about Amazon FSx for Windows File Server .

#### D. Amazon Elastic File System (Amazon EFS)

**Correct answer:** Yes · **Your selection:** Not selected

Amazon EFS is a shared file system that gives EC2 instances the ability to share access to data in different Availability Zones in the same AWS Region.

Learn more about Amazon EFS .

### Question 10

**Type:** Multi-Select · **Time:** 22 seconds · **Result:** Correct

Which AWS services or features support data replication across AWS Regions?

**Correct answer(s):** D, E

**Your selection(s):** D, E

#### A. Amazon Elastic Block Store (Amazon EBS)

**Correct answer:** No · **Your selection:** Not selected

Amazon EBS automatically replicates data within an Availability Zone. Amazon EBS does not support Cross-Region Replication.

Learn more about Amazon EBS .

#### B. AWS Storage Gateway

**Correct answer:** No · **Your selection:** Not selected

Storage Gateway connects an on-premises software appliance with cloud-based storage. Storage Gateway provides integration with data security features between your on-premises IT environment and AWS storage infrastructure such as Amazon S3. Storage Gateway does not directly support Cross-Region Replication.

Learn more about Storage Gateway with Amazon S3 .

#### C. Amazon EC2 instance store

**Correct answer:** No · **Your selection:** Not selected

An EC2 instance store is block storage that is attached to an EC2 instance. This storage is located on disks that are physically attached to the host computer. An instance store is ideal for temporary storage of information that changes frequently. The data that is stored on an instance store is temporary. There is no built-in mechanism to replicate data across Regions.

Learn more about EC2 instance stores .

#### D. Amazon S3

**Correct answer:** Yes · **Your selection:** Selected

Amazon S3 supports Cross-Region Replication. With Cross-Region Replication, you designate a destination S3 bucket in another Region. When Cross-Region Replication is turned on, any new object that is uploaded will be replicated to the destination S3 bucket.

Learn more about replicating objects with Amazon S3 .

#### E. Amazon RDS

**Correct answer:** Yes · **Your selection:** Selected

You can use Amazon RDS to host relational databases on AWS. One RDS DB instance resides in a single Region. With Amazon RDS, you can create read replicas across Regions. Amazon RDS replicates any data from the primary DB instance to the read replica across Regions.

Learn more about Amazon RDS .

### Question 11

**Type:** Multiple Choice · **Time:** 16 seconds · **Result:** Correct

**Confidence level:** Unsure

Which AWS service provides virtually unlimited throughput and scale?

**Correct answer(s):** A

**Your selection(s):** A

#### A. Amazon DynamoDB

**Correct answer:** Yes · **Your selection:** Selected

DynamoDB is a serverless, non-relational database that can automatically scale tables for both storage and throughput while still maintaining performance.

Learn more about DynamoDB .

#### B. Amazon Redshift

**Correct answer:** No · **Your selection:** Not selected

Amazon RedShift is a very scalable database. However, there are limits on throughput and scale that can be achieved with an Amazon Redshift cluster.

Learn more about Amazon Redshift quotas .

#### C. Amazon RDS for Oracle

**Correct answer:** No · **Your selection:** Not selected

Amazon RDS for Oracle has limitations on both throughput and storage, and these limits relate to the instance size of the DB instance.

Learn more about Amazon RDS for Oracle .

Learn more about Amazon RDS limitations on storage .

#### D. Amazon OpenSearch Service

**Correct answer:** No · **Your selection:** Not selected

OpenSearch Service has limitations on both throughput and storage based on the size of the cluster.

Learn more about OpenSearch Service quotas .

### Question 12

**Type:** Multiple Choice · **Time:** 12 seconds · **Result:** Correct

Which element defines an AWS Availability Zone?

**Correct answer(s):** A

**Your selection(s):** A

#### A. One or more physical data centers with redundant power and network

**Correct answer:** Yes · **Your selection:** Selected

The AWS infrastructure is built with redundancy to avoid single points of failure. Availability Zones have low-latency connections between them within an AWS Region.

Learn more about the AWS global infrastructure .

#### B. One or more edge locations based around the world

**Correct answer:** No · **Your selection:** Not selected

Edge locations are data centers that AWS services use to perform specific operations.

Learn more about how CloudFront delivers content with edge locations .

#### C. A geographic location that is completely isolated from other AWS locations

**Correct answer:** No · **Your selection:** Not selected

Complete geographical isolation is a feature of AWS Regions.

Learn more about the AWS global infrastructure .

#### D. A data center location with a single source of power and networking

**Correct answer:** No · **Your selection:** Not selected

The AWS infrastructure is built with redundancy to avoid single points of failure.

Learn more about the AWS global infrastructure .

### Question 13

**Type:** Multi-Select · **Time:** 19 seconds · **Result:** Correct

What are benefits of running a database on Amazon RDS compared to an on-premises database?

**Correct answer(s):** C, D

**Your selection(s):** C, D

#### A. RDS security groups are managed by AWS.

**Correct answer:** No · **Your selection:** Not selected

Although security groups are used to control traffic inbound and outbound for a database instance, they are managed by the user and are not managed by AWS.

Learn more about security groups .

#### B. RDS supports any relational database.

**Correct answer:** No · **Your selection:** Not selected

Amazon RDS does not support all relational databases but, instead, supports a variety of popular relational database engines, which include Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle Database, and SQL Server.

Learn more about Amazon RDS .

#### C. RDS provides backups by default.

**Correct answer:** Yes · **Your selection:** Selected

When using Amazon RDS, you can decide how frequently backups are completed. However, AWS manages the backing up of the data and the storing of the backup. Backups are automated based on the frequency that you define.

Learn more about backups with Amazon RDS .

#### D. RDS database compute capacity can be easily scaled.

**Correct answer:** Yes · **Your selection:** Selected

Amazon RDS database instances can be scaled up or down based on demand. This can often be completed with little to no downtime. A database instance can also be scaled vertically to give it more memory or compute capacity.

Learn more about Amazon RDS scaling .

#### E. RDS costs the same regardless of the database engine that is used.

**Correct answer:** No · **Your selection:** Not selected

Some third-party database engines have different costs than others because there is a third-party license fee that is incurred for using the database. Therefore, the cost can vary depending on the database engine.

Learn more about Amazon RDS pricing .

### Question 14

**Type:** Multiple Choice · **Time:** 34 seconds · **Result:** Correct

A company needs to establish a dedicated and isolated network connection between the company's on-premises data center and AWS. Which AWS service will meet this requirement?

**Correct answer(s):** D

**Your selection(s):** D

#### A. AWS Site-to-Site VPN

**Correct answer:** No · **Your selection:** Not selected

Site-to-Site VPN can establish connections through tunnels that travel across the internet. Site-to-Site VPN cannot establish secure network connections with dedicated links that are isolated from the internet.

Learn more about Site-to-Site VPN .

#### B. Amazon Route 53

**Correct answer:** No · **Your selection:** Not selected

Route 53 is a highly available and scalable DNS web service. Route 53 cannot establish secure network connections with dedicated links that are isolated from the internet.

Learn more about Route 53 .

#### C. AWS WAF

**Correct answer:** No · **Your selection:** Not selected

AWS WAF is a web application firewall that filters traffic at the application layer. AWS WAF cannot establish secure network connections with dedicated links that are isolated from the internet.

Learn more about AWS WAF .

#### D. AWS Direct Connect

**Correct answer:** Yes · **Your selection:** Selected

Direct Connect can establish a secure and consistent network connection with dedicated links that are isolated from the internet.

Learn more about Direct Connect .

### Question 15

**Type:** Multiple Choice · **Time:** 5 seconds · **Result:** Correct

Which AWS service can be used to provide an on-demand, cloud-based contact center?

**Correct answer(s):** A

**Your selection(s):** A

#### A. Amazon Connect

**Correct answer:** Yes · **Your selection:** Selected

Amazon Connect is a cloud-based contact center service that you can use to set up an on-demand contact center.

Learn more about Amazon Connect .

#### B. AWS Managed Services

**Correct answer:** No · **Your selection:** Not selected

AWS Managed Services (AMS) provides a number of operational services to manage a customer's AWS infrastructure and services on their behalf.

Learn more about AMS .

#### C. AWS Support

**Correct answer:** No · **Your selection:** Not selected

AWS Support is the hub used by users to request and manage support requests from AWS.

Learn more about AWS Support .

#### D. AWS Direct Connect

**Correct answer:** No · **Your selection:** Not selected

Direct Connect provides direct network connectivity from an internal network to AWS public services. This connectivity gives users with their own data centers the ability to connect directly to services provided by AWS, with no communication going over public internet.

Learn more about AWS Direct Connect .

### Question 16

**Type:** Multiple Choice · **Time:** 6 seconds · **Result:** Correct

Which AWS service can be used to decouple applications?

**Correct answer(s):** D

**Your selection(s):** D

#### A. AWS Config

**Correct answer:** No · **Your selection:** Not selected

AWS Config provides you with the ability to assess, audit, and evaluate configurations of your AWS resources. AWS Config cannot be used to decouple the application.

Learn more about AWS Config .

#### B. Amazon Simple Email Service (Amazon SES)

**Correct answer:** No · **Your selection:** Not selected

Amazon SES is a cloud-based email service designed to help you send and receive emails. Amazon SES cannot be used to decouple the application.

Learn more about Amazon SES .

#### C. AWS Batch

**Correct answer:** No · **Your selection:** Not selected

AWS Batch is designed to run processing jobs at scale. It is not used to decouple the application.

Learn more about AWS Batch .

#### D. Amazon Simple Queue Service (Amazon SQS)

**Correct answer:** Yes · **Your selection:** Selected

Amazon SQS is a fully managed message queue service that provides you with the ability to decouple and scale microservices, distributed systems, and serverless applications. Amazon SQS eliminates the complexity and overhead associated with managing and operating message-oriented middleware, and empowers developers to focus on differentiating work.

Learn more about Amazon SQS .

### Question 17

**Type:** Multiple Choice · **Time:** 21 seconds · **Result:** Correct

A company requires an encrypted connection from the company's on-premises data center to AWS. The connection must use the company's existing internet connection. Which solution will meet these requirements?

**Correct answer(s):** B

**Your selection(s):** B

#### A. AWS Client VPN

**Correct answer:** No · **Your selection:** Not selected

Client VPN is a managed, client-based VPN service. Client VPN gives you the ability to securely access your AWS resources and resources in your on-premises network. With Client VPN, you can access your resources from any location by using an OpenVPN-based VPN client. Client VPN provides network connections for individual laptops, not data centers.

Learn more about Client VPN .

#### B. AWS Site-to-Site VPN

**Correct answer:** Yes · **Your selection:** Selected

Site-to-Site VPN creates an encrypted network path between your on-premises network and your AWS Cloud network. This connection between your on-premises network and your AWS Cloud network uses the internet. 

Learn more about Site-to-Site VPN .

#### C. AWS Direct Connect

**Correct answer:** No · **Your selection:** Not selected

Direct Connect links your internal network to a Direct Connect location over a standard Ethernet, fiber-optic cable. One end of the cable connects to your router. The other end connects to a Direct Connect router. Direct Connect requires a dedicated network connection and cannot use an existing network connection.

Learn more about Direct Connect .

#### D. Amazon Connect

**Correct answer:** No · **Your selection:** Not selected

Amazon Connect is an omnichannel cloud contact center. Amazon Connect helps you provide customer service at a low cost. Amazon Connect uses an omnichannel design to provide a seamless experience across voice and chat for your customers and agents. Amazon Connect does not make a network connection from an on-premises data center to the AWS Cloud.

Learn more about Amazon Connect .

### Question 18

**Type:** Multiple Choice · **Time:** 5 seconds · **Result:** Correct

A company needs to securely deliver data, videos, applications, and APIs to users globally with low latency. Which AWS service will meet this requirement?

**Correct answer(s):** C

**Your selection(s):** C

#### A. Amazon EC2

**Correct answer:** No · **Your selection:** Not selected

Amazon EC2 is a web service that provides secure, resizable compute capacity in the cloud. Amazon EC2 does not directly deliver content to global users with low latency.

Learn more about Amazon EC2 .

#### B. Amazon RDS

**Correct answer:** No · **Your selection:** Not selected

Amazon RDS gives you the ability to set up, operate, and scale a relational database in the cloud. Amazon RDS does not deliver content such as data, videos, applications, and APIs to global users with low latency.

Learn more about Amazon RDS .

#### C. Amazon CloudFront

**Correct answer:** Yes · **Your selection:** Selected

CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to users globally with low latency and high transfer speeds.

Learn more about CloudFront .

#### D. Amazon VPC

**Correct answer:** No · **Your selection:** Not selected

Amazon VPC gives you the ability to provision a logically isolated section of the AWS Cloud. With Amazon VPC, you can launch AWS resources in a virtual network that you define. Amazon VPC does not deliver content to global users with low latency.

Learn more about Amazon VPC .

### Question 19

**Type:** Multi-Select · **Time:** 4 seconds · **Result:** Correct

Which AWS services offer compute capabilities?

**Correct answer(s):** A, B

**Your selection(s):** A, B

#### A. Amazon EC2

**Correct answer:** Yes · **Your selection:** Selected

Amazon EC2 provides you with the ability to provision virtual servers in the AWS Cloud. Amazon EC2 provides compute capabilities.

Learn more about Amazon EC2 .

#### B. AWS Lambda

**Correct answer:** Yes · **Your selection:** Selected

Lambda is a serverless service and provides you with the ability to run code without the need to provision or manage servers. Lambda provides compute capabilities.

Learn more about Lambda .

#### C. Amazon Elastic Block Store (Amazon EBS)

**Correct answer:** No · **Your selection:** Not selected

Amazon EBS provides block-level storage that can be used with EC2 instances. Amazon EBS is a storage service and does not provide compute capabilities.

Learn more about Amazon EBS .

#### D. Amazon Cognito

**Correct answer:** No · **Your selection:** Not selected

Cognito is used to provide authentication, authorization, and user management for your mobile or web applications. Cognito is an identity and access management service, and does not provide compute capabilities.

Learn more about Cognito .

#### E. Amazon S3

**Correct answer:** No · **Your selection:** Not selected

Amazon S3 provides object storage in the AWS Cloud. Amazon S3 is a storage service and does not provide compute capabilities.

Learn more about Amazon S3 .

### Question 20

**Type:** Multi-Select · **Time:** 24 seconds · **Result:** Correct

What should AWS edge locations be used for?

**Correct answer(s):** A, E

**Your selection(s):** A, E

#### A. Reducing the load on Amazon EC2 based web servers

**Correct answer:** Yes · **Your selection:** Selected

AWS edge locations are used to host the content delivery network (CDN) service Amazon CloudFront, which gives you the ability to cache frequently accessed data closer to end users. When data is cached at an edge location and an end user requests data, the request is first routed to the edge location. If the data is found at the edge location, then the data is returned to the end user and the request never reaches the back-end server. This reduces the load on back-end servers because some requests are being offloaded to the edge location.

Learn more about CloudFront and edge locations .

#### B. Hosting applications and databases

**Correct answer:** No · **Your selection:** Not selected

AWS edge locations are used as points of presence around the world for users to connect to the AWS network. Although you can run functions at edge locations using Lambda@Edge, you cannot host applications or databases at the edge locations.

Learn more about CloudFront and edge locations .

#### C. Sending notification messages to end users

**Correct answer:** No · **Your selection:** Not selected

Edge locations are not used to send notification messages to end users or run applications that send messages to end users, and because of this reason, this answer is incorrect. Notification messages would likely come from a service or program hosted in an AWS Region.

Learn more about CloudFront and edge locations .

#### D. Running NoSQL database caching services

**Correct answer:** No · **Your selection:** Not selected

Although you can cache data at edge locations using services such as Amazon S3 as the origin, a different pattern is generally followed for caching information that comes from a NoSQL database. The cache for a NoSQL database would be located inside an AWS Region, not the edge location.

Learn more about NoSQL database caching .

#### E. Delivering content closer to users

**Correct answer:** Yes · **Your selection:** Selected

AWS edge locations are used to host the content delivery network (CDN) service Amazon CloudFront, which gives you the ability to cache frequently accessed data closer to end users. This ability can reduce latency in data retrieval times for end users all over the world because the edge locations are often closer to the end users than the region in which the data is hosted.

Learn more about CloudFront and edge locations .
