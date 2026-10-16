# Practice exam 4

Community practice material. Reviewed 16 October 2026 against AWS documentation. These are not official AWS exam questions.

1. Which AWS service is recommended for provisioning and managing a TLS certificate for an HTTPS application integrated with supported AWS services?

   - A. Amazon Route 53.
   - B. AWS ACM.
   - C. AWS Directory Service.
   - D. AWS Identity & Access Management.
   - E. AWS Data Pipeline.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS Certificate Manager manages certificates. IAM server-certificate storage is a legacy alternative, not the recommended certificate provisioning service.

   AWS documentation: [AWS Certificate Manager](https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html)

   </details>

2. Which of the following AWS services scale automatically without your intervention? (Choose TWO)

   - A. Amazon EC2.
   - B. Amazon S3.
   - C. AWS Lambda.
   - D. Amazon EMR.
   - E. Amazon EBS.

   <details><summary>Answer</summary>

   Correct answer: B, C

   AWS documentation: [Amazon S3 storage classes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html)

   </details>

3. A company is planning to migrate an application from Amazon EC2 to AWS Lambda to use a serverless architecture. Which of the following will be the responsibility of AWS after migration? (Choose TWO)

   - A. Application management.
   - B. Capacity management.
   - C. Access control.
   - D. Operating system maintenance.
   - E. Data management.

   <details><summary>Answer</summary>

   Correct answer: B, D

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

4. How do ELBs improve the reliability of your application?

   - A. By distributing traffic across multiple S3 buckets.
   - B. By replicating data to multiple availability zones.
   - C. By creating database Read Replicas.
   - D. By ensuring that only healthy targets receive traffic.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

5. A company needs to migrate their website from on-premises to AWS. Security is a major concern for them, so they need to host their website on hardware that is NOT shared with other AWS customers. Which of the following EC2 instance options meets this requirement?

   - A. On-demand instances.
   - B. Spot instances.
   - C. Dedicated instances.
   - D. Reserved instances.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

   </details>

6. A new customer can bring its own high-capacity storage devices to a designated AWS facility to upload data. Which AWS service provides this physical transfer location?

   - A. AWS DataSync.
   - B. S3 Transfer Acceleration.
   - C. AWS Data Transfer Terminal.
   - D. Amazon VPC.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Data Transfer Terminal](https://aws.amazon.com/data-transfer-terminal/)

   </details>

7. Which S3 archive class offers a Standard retrieval option that typically completes in 3–5 hours, rather than immediate object access?

   - A. S3 Glacier Flexible Retrieval.
   - B. Amazon EFS.
   - C. Amazon S3 Standard.
   - D. Amazon EBS.

   <details><summary>Answer</summary>

   Correct answer: A

   Retrieval times depend on the class and retrieval tier; they are not a universal guaranteed five-hour limit.

   AWS documentation: [Amazon S3 storage classes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html)

   </details>

8. Which AWS Service is used to manage user permissions?

   - A. Security Groups.
   - B. Amazon ECS.
   - C. AWS IAM.
   - D. AWS Support.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [IAM security best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)

   </details>

9. Which support plan includes AWS Support Concierge Service?

   - A. Premium Support.
   - B. Business Support+.
   - C. Enterprise Support.
   - D. Standard Support.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Support plans](https://docs.aws.amazon.com/awssupport/latest/user/aws-support-plans.html)

   </details>

10. A company needs to track resource changes using the API call history. Which AWS service can help the company achieve this goal?

   - A. AWS Config.
   - B. Amazon CloudWatch.
   - C. AWS CloudTrail.
   - D. AWS CloudFormation.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html)

   </details>

11. What are the benefits of using an AWS-managed service? (Choose TWO)

   - A. Provides complete control over the virtual infrastructure.
   - B. Allows customers to deliver new solutions faster.
   - C. Lowers operational complexity.
   - D. Eliminates the need to encrypt data.
   - E. Allows developers to control all patching related activities.

   <details><summary>Answer</summary>

   Correct answer: B, C

   AWS documentation: [AWS AI and ML services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/machine-learning.html)

   </details>

12. Which of the following are use cases for Amazon S3? (Choose TWO)

   - A. Hosting static websites.
   - B. Hosting websites that require sustained high CPU utilization.
   - C. Cost-effective database and log storage.
   - D. A media store for the CloudFront service.
   - E. Processing data streams at any scale.

   <details><summary>Answer</summary>

   Correct answer: A, D

   AWS documentation: [Amazon EBS](https://docs.aws.amazon.com/ebs/latest/userguide/what-is-ebs.html)

   </details>

13. What is the AWS’ recommendation regarding access keys?

   - A. Delete all access keys and use passwords instead.
   - B. Only share them with trusted people.
   - C. Prefer temporary credentials; when long-term access keys are necessary, update them when needed and remove unused keys.
   - D. Save them within your application code.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [IAM security best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)

   </details>

14. What is the AWS IAM feature that provides an additional layer of security on top of user-name and password authentication?

   - A. Key Pair.
   - B. Access Keys.
   - C. SDK.
   - D. MFA.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [IAM security best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)

   </details>

15. What is the benefit of using an API to access AWS Services?

   - A. It improves the performance of AWS resources.
   - B. It reduces the time needed to provision AWS resources.
   - C. It reduces the number of developers necessary.
   - D. It allows for programmatic management of AWS resources.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

16. A company is planning to migrate a database with high read/write activity to AWS. What is the best storage option to use?

   - A. AWS Storage Gateway.
   - B. Amazon S3.
   - C. Amazon EBS.
   - D. Amazon Glacier.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [Amazon EBS](https://docs.aws.amazon.com/ebs/latest/userguide/what-is-ebs.html)

   </details>

17. How can AWS customers track and avoid over-spending on underutilized reserved instances?

   - A. Customers can add all AWS accounts to an AWS Organization, enable Consolidated Billing, and turn off Reserved Instance sharing.
   - B. Customers can use Amazon Neptune to track and analyze their usage patterns, detect underutilized reserved instances, and then sell them on the Amazon EC2 Reserved Instance Marketplace.
   - C. Customers can use the AWS Budgets service to track the reserved instances usage and set up alert notifications when their utilization drops below the threshold that they define.
   - D. Customers can use Amazon CloudTrail to automatically check for unused reservations and get recommendations to reduce their bill.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html)

   </details>

18. Which AWS-managed relational database service provides MySQL-compatible and PostgreSQL-compatible database engines?

   - A. Amazon Aurora.
   - B. Amazon Redshift.
   - C. Amazon DynamoDB.
   - D. Amazon Neptune.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html)

   </details>

19. What does AWS Service Catalog provide?

   - A. It enables customers to quickly find descriptions and use cases for AWS services.
   - B. It enables customers to explore the different catalogs of AWS services.
   - C. It simplifies organizing and governing commonly deployed IT services.
   - D. It allows developers to deploy infrastructure on AWS using familiar programming languages.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

20. For managed services like Amazon DynamoDB, which of the below is AWS responsible for? (Choose TWO)

   - A. Protecting credentials.
   - B. Logging access activity.
   - C. Patching the database software.
   - D. Operating system maintenance.
   - E. Creating access policies.

   <details><summary>Answer</summary>

   Correct answer: C, D

   AWS documentation: [AWS database services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/database.html)

   </details>

21. Which AWS service helps build a data-driven business case for migrating on-premises servers to AWS?

   - A. AWS Snowball Migration Service.
   - B. AWS Migration Evaluator.
   - C. AWS DMS.
   - D. AWS Migration Hub.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Migration Evaluator](https://docs.aws.amazon.com/prescriptive-guidance/latest/migration-tools/discovery-migration-evaluator.html)

   </details>

22. A company is trying to analyze the costs applied to their AWS account recently. Which of the following provides them the most granular data about their AWS costs and usage?

   - A. Amazon Machine Image.
   - B. AWS Cost Explorer.
   - C. AWS Cost & Usage Report.
   - D. Amazon CloudWatch.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [Consolidated billing](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html)

   </details>

23. Which statement best describes the concept of an AWS region?

   - A. An AWS Region is a geographical location with a collection of Edge locations.
   - B. An AWS Region is a virtual network dedicated only to a single AWS customer.
   - C. An AWS Region is a geographical location with a collection of Availability Zones.
   - D. An AWS Region represents the country where the AWS infrastructure exist.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS global infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/)

   </details>

24. A company has discovered that multiple S3 buckets were deleted, but it is unclear who deleted the buckets. Which of the following can the company use to determine the identity that deleted the buckets?

   - A. SNS logs.
   - B. SQS logs.
   - C. CloudWatch Logs.
   - D. CloudTrail logs.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html)

   </details>

25. Which of the following are factors in determining the appropriate database technology to use for a specific workload? (Choose TWO)

   - A. Availability Zones.
   - B. Data sovereignty.
   - C. The number of reads and writes per second.
   - D. The nature of the queries.
   - E. Software bugs.

   <details><summary>Answer</summary>

   Correct answer: C, D

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

26. What are the benefits of implementing a tagging strategy for AWS resources? (Choose TWO)

   - A. Quickly identify resources that belong to a specific project.
   - B. Quickly identify software solutions on AWS.
   - C. Track API calls in your AWS account.
   - D. Quickly identify deleted resources and their metadata.
   - E. Track AWS spending across multiple resources.

   <details><summary>Answer</summary>

   Correct answer: A, E

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

27. What are AWS shared controls?

   - A. Controls that are solely the responsibility of the customer based on the application they are deploying within AWS services.
   - B. Controls that a customer inherits from AWS.
   - C. Controls that apply to both the infrastructure layer and customer layers.
   - D. Controls that the customer and AWS collaborate together upon to secure the infrastructure.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS global infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/)

   </details>

28. Which design principles relate to performance efficiency in AWS? (Choose TWO)

   - A. Build multi-region architectures to better serve global customers.
   - B. Apply security at all layers.
   - C. Implement strong Identity and Access controls.
   - D. Use serverless architectures.
   - E. Enable audit logging.

   <details><summary>Answer</summary>

   Correct answer: A, D

   AWS documentation: [AWS global infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/)

   </details>

29. Which of the below are responsibilities of the customer when using Amazon EC2? (Choose TWO)

   - A. Protecting sensitive data.
   - B. Patching of the underlying infrastructure.
   - C. Setup and operation of managed databases.
   - D. Maintaining consistent hardware components.
   - E. Installing and configuring third-party software.

   <details><summary>Answer</summary>

   Correct answer: A, E

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

30. Why would an organization decide to use AWS over an on-premises data center? (Choose TWO)

   - A. Free commercial software licenses.
   - B. Free technical support.
   - C. Elastic resources.
   - D. On-site visits for auditing.
   - E. Cost Savings.

   <details><summary>Answer</summary>

   Correct answer: C, E

   AWS documentation: [AWS pricing principles](https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/key-principles.html)

   </details>

31. Which of the following AWS services can help you perform security analysis and regulatory compliance auditing? (Choose TWO)

   - A. Amazon Inspector.
   - B. AWS Virtual Private Gateway.
   - C. AWS Batch.
   - D. Amazon ECS.
   - E. AWS Config.

   <details><summary>Answer</summary>

   Correct answer: A, E

   AWS documentation: [AWS Config](https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html)

   </details>

32. Which of the following is NOT a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)?

   - A. Amazon EC2 is considered a Serverless Web Service.
   - B. Amazon EC2 eliminates the need to invest in hardware upfront.
   - C. Amazon EC2 can launch as many or as few virtual servers as needed.
   - D. Amazon EC2 offers scalable computing.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

   </details>

33. What is the AWS Compute service that executes code only when triggered by events?

   - A. AWS Lambda.
   - B. Amazon CloudWatch.
   - C. AWS Transit Gateway.
   - D. Amazon EC2.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)

   </details>

34. Both AWS and traditional IT distributors provide a wide range of virtual servers to meet their customers’ requirements. What is the name of these virtual servers in AWS?

   - A. Amazon EBS Snapshots.
   - B. Amazon VPC.
   - C. AWS Managed Servers.
   - D. Amazon EC2 Instances.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

   </details>

35. What is the framework created by AWS Professional Services that helps organizations design a road map to successful cloud adoption?

   - A. AWS Secrets Manager.
   - B. AWS WAF.
   - C. AWS CAF.
   - D. Amazon EFS.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

36. TYMO Cloud Corp is looking forward to migrating their entire on-premises data center to AWS. What tool can they use to perform a cost-benefit analysis of moving to the AWS Cloud?

   - A. AWS Cost Explorer.
   - B. AWS Migration Evaluator (Migration Evaluator)
   - C. AWS Budgets.
   - D. AWS Pricing Calculator.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Migration Evaluator](https://docs.aws.amazon.com/prescriptive-guidance/latest/migration-tools/discovery-migration-evaluator.html)

   </details>

37. Which of the following activities supports the Operational Excellence pillar of the AWS Well-Architected Framework?

   - A. Using AWS Trusted Advisor to find underutilized resources.
   - B. Using AWS CloudTrail to record user activities.
   - C. Using AWS CloudFormation to manage infrastructure as code.
   - D. Deploying an application in multiple Availability Zones.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)

   </details>

38. Why do many startup companies prefer AWS over traditional on-premises solutions? (Choose TWO)

   - A. AWS allows them to pay later when their business succeed.
   - B. AWS can build complete data centers faster than any other Cloud provider.
   - C. Using AWS, they can reduce time-to-market by focusing on business activities rather than on building and managing data centers.
   - D. AWS removes the need to invest in operational expenditure.
   - E. Using AWS allows companies to replace large capital expenditure with low variable costs.

   <details><summary>Answer</summary>

   Correct answer: C, E

   AWS documentation: [AWS global infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/)

   </details>

39. What are the benefits of using DynamoDB? (Choose TWO)

   - A. Automatically scales to meet required throughput capacity.
   - B. Provides resizable instances to match the current demand.
   - C. Supports both relational and non-relational data models.
   - D. Offers extremely low (single-digit millisecond) latency.
   - E. Supports the most popular NoSQL database engines such as CouchDB and MongoDB.

   <details><summary>Answer</summary>

   Correct answer: A, D

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

40. Which of the following can be used to protect data at rest on Amazon S3? (Choose TWO)

   - A. Versioning.
   - B. Deduplication.
   - C. Permissions.
   - D. Decryption.
   - E. Conversion.

   <details><summary>Answer</summary>

   Correct answer: A, C

   AWS documentation: [IAM security best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)

   </details>

41. As part of the AWS Migration Acceleration Program (MAP), what does AWS provide to accelerate Enterprise adoption of AWS? (Choose TWO)

   - A. AWS Partners.
   - B. AWS Artifact.
   - C. AWS Professional Services.
   - D. Amazon Athena.
   - E. Amazon PinPoint.

   <details><summary>Answer</summary>

   Correct answer: A, C

   AWS documentation: [AWS Partner Paths](https://aws.amazon.com/partners/paths/)

   </details>

42. AWS recommends some practices to help organizations avoid unexpected charges on their bill. Which of the following is NOT one of these practices?

   - A. Deleting unused EBS volumes after terminating an EC2instance.
   - B. Deleting unused AutoScaling launch configuration.
   - C. Deleting unused Elastic Load Balancers.
   - D. Releasing unused Elastic IPs after terminating an EC2instance.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html)

   </details>

43. What is the AWS tool that can help a company visualize their AWS spending in the last few months?

   - A. AWS Cost Explorer.
   - B. AWS Pricing Calculator.
   - C. AWS Budgets.
   - D. AWS Consolidated Billing.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS Cost Explorer](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html)

   </details>

44. When running a workload in AWS, the customer is NOT responsible for: (Select TWO)

   - A. Running penetration tests.
   - B. Reserving capacity.
   - C. Data center operations.
   - D. Auditing and regulatory compliance.
   - E. Infrastructure security.

   <details><summary>Answer</summary>

   Correct answer: C, E

   AWS documentation: [AWS global infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/)

   </details>

45. Which AWS messaging service can publish SMS notifications to supported destinations, subject to country availability and messaging requirements?

   - A. Amazon Simple Email Service (Amazon SES).
   - B. Amazon Simple Storage Service (Amazon S3).
   - C. Amazon Simple Notification Service (Amazon SNS).
   - D. Amazon Simple Queue Service (Amazon SQS).

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [Amazon SNS](https://docs.aws.amazon.com/sns/latest/dg/welcome.html)

   </details>

46. Which of the following allows you to create new RDS instances? (Choose TWO)

   - A. AWS CodeDeploy.
   - B. AWS Quick Starts.
   - C. AWS CloudFormation.
   - D. AWS DMS.
   - E. AWS Management Console.

   <details><summary>Answer</summary>

   Correct answer: C, E

   AWS documentation: [AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)

   </details>

47. One of the major advantages of using AWS is cost savings. What does AWS provide to reduce the cost of running Amazon EC2 instances?

   - A. Low monthly instance maintenance costs.
   - B. Low-cost instance tagging.
   - C. Per-second instance billing.
   - D. Low instance start-up fees.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [Consolidated billing](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html)

   </details>

48. Which AWS Group assists customers in achieving their desired business outcomes?

   - A. AWS Security Team.
   - B. AWS Professional Services.
   - C. AWS Trusted Advisor.
   - D. AWS Concierge Support Team.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

49. Which AWS service or feature is used to manage the keys used to encrypt customer data?

   - A. AWS KMS.
   - B. AWS Service Control Policies (SCPs).
   - C. Multi-Factor Authentication (MFA).
   - D. Amazon Macie.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS cryptography services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/security-services.html)

   </details>

50. Which AWS Service allows customers to download AWS SOC & PCI reports?

   - A. AWS Well-Architected Tool.
   - B. AWS Artifact.
   - C. AWS Glue.
   - D. Amazon Chime.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS compliance and shared responsibility](https://aws.amazon.com/compliance/shared-responsibility-model/)

   </details>
