# Practice exam 10

Community practice material. Reviewed 16 October 2026 against AWS documentation. These are not official AWS exam questions.

1. Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO)

   - A. AWS Concierge.
   - B. AWS CloudFormation.
   - C. Amazon Simple Storage Service (Amazon S3).
   - D. Amazon EC2 Auto Scaling.
   - E. AWS Management Console.

   <details><summary>Answer</summary>

   Correct answer: B, E

   AWS documentation: [AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)

   </details>

2. Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?

   - A. One-year, No Upfront, Standard RI pricing.
   - B. One-year, All Upfront, Convertible RI pricing.
   - C. Three-year, All Upfront, Standard RI pricing.
   - D. Three-year, No Upfront, Convertible RI pricing.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS pricing principles](https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/key-principles.html)

   </details>

3. Which of the following are features of Amazon CloudWatch Logs? (Select TWO)

   - A. Summaries by Amazon Simple Notification Service (Amazon SNS).
   - B. Free Amazon Elasticsearch Service analytics.
   - C. Provided at no charge.
   - D. Real-time monitoring.
   - E. Adjustable retention.

   <details><summary>Answer</summary>

   Correct answer: D, E

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

4. Which of the following is an AWS-managed compute service?

   - A. Amazon SWF.
   - B. Amazon EC2.
   - C. AWS Lambda.
   - D. Amazon Aurora.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)

   </details>

5. A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?

   - A. Amazon Elastic Compute Cloud (Amazon EC2).
   - B. AWS Lambda.
   - C. Amazon DynamoDB.
   - D. AWS CodeCommit.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)

   </details>

6. Which of the following is the customer’s responsibility under the AWS shared responsibility model?

   - A. Patching underlying infrastructure
   - B. Physical security
   - C. Patching Amazon EC2 instances
   - D. Patching network infrastructure

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS shared responsibility model](https://aws.amazon.com/compliance/shared-responsibility-model/)

   </details>

7. According to the AWS shared responsibility model who is responsible for configuration management?

   - A. It is solely the responsibility of the customer.
   - B. It is solely the responsibility of AWS.
   - C. It is shared between AWS and the customer.
   - D. It is not part of the AWS shared responsibility model.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS shared responsibility model](https://aws.amazon.com/compliance/shared-responsibility-model/)

   </details>

8. Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?

   - A. Amazon GuardDuty.
   - B. Amazon Macie.
   - C. Amazon Inspector.
   - D. AWS Shield.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Amazon Macie](https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html)

   </details>

9. Which of the following BEST describe the AWS pricing model? (Select TWO)

   - A. Fixed-term.
   - B. Pay-as-you-go.
   - C. Colocation.
   - D. Planned.
   - E. Variable cost.

   <details><summary>Answer</summary>

   Correct answer: B, E

   AWS documentation: [AWS pricing principles](https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/key-principles.html)

   </details>

10. Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO)

   - A. Ensuring that application data is encrypted at rest.
   - B. Ensuring that AWS NTP servers are set to the correct time.
   - C. Ensuring that users have received security training in the use of AWS services.
   - D. Ensuring that access to data centers is restricted.
   - E. Ensuring that hardware is disposed of properly.

   <details><summary>Answer</summary>

   Correct answer: A, C

   AWS documentation: [AWS shared responsibility model](https://aws.amazon.com/compliance/shared-responsibility-model/)

   </details>

11. A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?

   - A. Create one global AWS account and move all AWS resources to that account.
   - B. Sign up for three years of Reserved Instance pricing up front.
   - C. Use the consolidated billing feature from AWS Organizations.
   - D. Sign up for the AWS Enterprise support plan to get volume discounts.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [Consolidated billing](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html)

   </details>

12. Among these listed purchasing options for the described steady EC2 workload, which offers the largest Reserved Instance discount?

   - A. A Partial Upfront Reserved Instances for a 1-year term.
   - B. All Upfront Reserved instances for a 1 year form.
   - C. All Upfront Reserved Instances for a 3 year term.
   - D. No Upfront Reserved Instances for a 3 year term.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

   </details>

13. Which AWS services should be used for read/write of constantly changing data? (Select TWO)

   - A. Amazon Glacier.
   - B. Amazon RDS.
   - C. AWS Snowball.
   - D. Amazon Redshift.
   - E. Amazon EFS.

   <details><summary>Answer</summary>

   Correct answer: B, E

   AWS documentation: [Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html)

   </details>

14. Which AWS service allows users to identify the changes made to a resource over time?

   - A. Amazon Inspector.
   - B. AWS Config.
   - C. AWS Service Catalog.
   - D. AWS IAM.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Config](https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html)

   </details>

15. According to best practices, how should an application be designed to run in the AWS Cloud?

   - A. Use tightly coupled components.
   - B. Use loosely coupled components.
   - C. Use infrequently coupled components.
   - D. Use frequently coupled components.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

16. Which benefits are included with the AWS Business Support+ plan? (Select TWO)

   - A. 24/7 assistance by way of live chat or a telephone call.
   - B. Support from a dedicated AWS Technical Account Manager.
   - C. An unlimited number of cases and contacts.
   - D. 15-minute response time for production system interruption cases.
   - E. Annual operational reviews with AWS Solutions Architects.

   <details><summary>Answer</summary>

   Correct answer: A, C

   AWS documentation: [Overview of AWS services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/amazon-web-services-cloud-platform.html)

   </details>

17. Which of the following is an AWS managed Domain Name System (DNS) web service?

   - A. Amazon Route 53.
   - B. Amazon Neptune.
   - C. Amazon SageMaker.
   - D. Amazon Lightsail.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)

   </details>

18. A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. When Amazon EC2 instance pricing option will meet these requirements?

   - A. Dedicated Hosts.
   - B. Dedicated Instances.
   - C. Spot Instances.
   - D. Reserved Instances.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

   </details>

19. Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?

   - A. Dedicated RIs.
   - B. Scheduled RIs.
   - C. Convertible RIs.
   - D. Standard RIs.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

20. Which service is best for storing common database query results, which helps to alleviate database access load?

   - A. Amazon Machine Learning.
   - B. Amazon SQS.
   - C. Amazon ElastiCache.
   - D. Amazon EC2 Instance Store.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [Amazon ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/WhatIs.html)

   </details>

21. When should a company consider using Amazon EC2 Spot Instances? (Select TWO)

   - A. Use Spot Instances for nonproduction jobs that can tolerate interruption.
   - B. For stateful workloads.
   - C. For applications that cannot have interruptions.
   - D. For fault-tolerant flexible applications.
   - E. For sensitive database applications.

   <details><summary>Answer</summary>

   Correct answer: A, D

   AWS documentation: [Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

   </details>

22. Which tools support AWS cost estimates or migration business-case analysis? (Choose TWO.)

   - A. Detailed billing report.
   - B. Cost allocation tags.
   - C. AWS Pricing Calculator.
   - D. AWS Migration Evaluator.
   - E. Cost Estimator.

   <details><summary>Answer</summary>

   Correct answer: C, D

   AWS documentation: [AWS Pricing Calculator](https://docs.aws.amazon.com/pricing-calculator/latest/userguide/what-is-pricing-calculator.html)

   </details>

23. A company wants to focus on business activities instead of managing compute and capacity. Which AWS service can be used to automatically add or remove Amazon EC2 instances based on demand?

   - A. Elastic Load Balancer.
   - B. Amazon EC2 Auto Scaling.
   - C. Amazon Route 53.
   - D. Amazon CloudFront.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

   </details>

24. Among these plans, which is the lowest current plan that includes a designated technical account manager?

   - A. Enterprise.
   - B. Business.
   - C. Developer.
   - D. Basic.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS Support plans](https://docs.aws.amazon.com/awssupport/latest/user/aws-support-plans.html)

   </details>

25. Access keys in AWS Identity and Access Management (IM1) are used to:

   - A. Log in to the AWS Management Console.
   - B. Make programmatic calls to AWS from AWS APIs.
   - C. Log in to Amazon EC2 instances.
   - D. Authenticate to AWS CodeCommit repositories.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

26. Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?

   - A. AWS Glue.
   - B. AWS Data Pipeline.
   - C. Amazon CloudSearch.
   - D. Amazon Athena.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS analytics services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/analytics.html)

   </details>

27. How does AWS shorten the time to provision IT resources?

   - A. It supplies an online IT ticketing platform for resource requests.
   - B. It supports automatic code validation services.
   - C. It provides the ability to programmatically provision existing resources.
   - D. It automates the resource request process from a company’s IT vendor list.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

28. Which AWS services can be used to gather information about AWS account activity? (Select TWO)

   - A. Amazon CloudFront.
   - B. AWS Cloud9.
   - C. AWS CloudTrail.
   - D. AWS CloudHSM.
   - E. Amazon CloudWatch.

   <details><summary>Answer</summary>

   Correct answer: C, E

   AWS documentation: [AWS CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html)

   </details>

29. Which of the following are characteristics of Amazon S3? (Select TWO)

   - A. A global file system.
   - B. An object store.
   - C. A local file store.
   - D. A network file system.
   - E. A durable storage system.

   <details><summary>Answer</summary>

   Correct answer: B, E

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

30. A user wants guidance on possible savings when migrating from on-premises to AWS. Which tool is suitable for this scenario?

   - A. AWS Budgets.
   - B. Cost Explorer.
   - C. AWS Migration Evaluator.
   - D. AWS Well-Architected Tool.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [Migration Evaluator](https://docs.aws.amazon.com/prescriptive-guidance/latest/migration-tools/discovery-migration-evaluator.html)

   </details>

31. Which of the following services is in the category of AWS serverless platform?

   - A. Amazon EMR.
   - B. Elastic Load Balancing.
   - C. AWS Lambda.
   - D. AWS Mobile Hub.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)

   </details>

32. The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?

   - A. Cost allocation tags.
   - B. Consolidated billing.
   - C. AWS Budgets.
   - D. AWS Marketplace.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [Consolidated billing](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html)

   </details>

33. Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?

   - A. AWS Cost Explorer.
   - B. AWS Trusted Advisor.
   - C. Consolidated billing.
   - D. Detailed billing.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Trusted Advisor](https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor.html)

   </details>

34. Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?

   - A. Cloud-native.
   - B. Partner network.
   - C. Hybrid architecture.
   - D. Infrastructure as a service.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

35. What technology enables compute capacity to adjust as loads change?

   - A. Load balancing.
   - B. Automatic failover.
   - C. Round robin.
   - D. Auto Scaling.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html)

   </details>

36. Which AWS service is a managed NoSQL database?

   - A. Amazon Redshift.
   - B. Amazon DynamoDB.
   - C. Amazon Aurora.
   - D. Amazon RDS for ManaDB.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)

   </details>

37. Which of the following is a correct relationship between regions, Availability Zones, and edge locations?

   - A. Data centers contain regions.
   - B. Regions contain Availability Zones.
   - C. Availability Zones contain edge locations.
   - D. Edge locations contain regions.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS global infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/)

   </details>

38. What approach to transcoding a large number of individual video files adheres to AWS architecture principles?

   - A. Using many instances in parallel.
   - B. Using a single large instance during off-peak hours.
   - C. Using dedicated hardware.
   - D. Using a large GPU instance type.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

39. Which AWS services can host a Microsoft SQL Server database? (Select TWO)

   - A. Amazon EC2.
   - B. Amazon Relational Database Service (Amazon RDS).
   - C. Amazon Aurora.
   - D. Amazon Redshift.
   - E. Amazon S3.

   <details><summary>Answer</summary>

   Correct answer: A, B

   AWS documentation: [Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html)

   </details>

40. Which credentials form a long-term IAM user programmatic access-key pair?

   - A. API keys.
   - B. Access keys.
   - C. User names/Passwords.
   - D. SSH keys.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [IAM security best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)

   </details>

41. The user is fully responsible for which action when running workloads on AWS?

   - A. Patching the infrastructure components.
   - B. Maintaining the underlying infrastructure components.
   - C. Maintaining physical and environmental controls.
   - D. Implementing controls to route application traffic.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

42. Which AWS support plan includes a dedicated Technical Account Manager?

   - A. Developer.
   - B. Enterprise.
   - C. Business Support+.
   - D. Basic.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Support plans](https://docs.aws.amazon.com/awssupport/latest/user/aws-support-plans.html)

   </details>

43. What time-savings advantage is offered with the use of Amazon Rekognition?

   - A. Amazon Rekognition provides automatic watermarking of images.
   - B. Amazon Rekognition provides automatic detection of objects appearing in pictures.
   - C. Amazon Recognition provides the ability to resize millions of images automatically.
   - D. Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS AI and ML services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/machine-learning.html)

   </details>

44. How does EC2 Auto Scaling help manage demand when policies and capacity bounds are configured?

   - A. Amazon AutoScaling.
   - B. Amazon Redshift.
   - C. AWS CloudTrail.
   - D. AWS Lambda.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html)

   </details>

45. Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?

   - A. AWS manages the data stored in Amazon RDS tables.
   - B. AWS manages the maintenance of the operating system.
   - C. AWS automatically scales up instance types on demand.
   - D. AWS manages the database type.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

46. A company’s web application currently has light dependencies on underlying components so when one component fails the entire web application fails. Applying which AWS Cloud design principle will address the current design issue?

   - A. Implementing elasticity enabling the application to scale up or scale down as demand changes.
   - B. Enabling several EC2 instances to run in parallel to achieve better performance.
   - C. Focusing on decoupling components by isolating them and ensuring individual components can function when other components.
   - D. Doubling EC2 computing resources to increase system fault tolerance.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Well-Architected reliability](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html)

   </details>

47. A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?

   - A. AWS Partners in the Software Path.
   - B. AWS Marketplace.
   - C. AWS Partners in the Services Path.
   - D. AWS Service Catalog.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Partner Paths](https://aws.amazon.com/partners/paths/)

   </details>

48. Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?

   - A. Amazon Glacier.
   - B. AWS Storage Gateway.
   - C. Amazon S3.
   - D. Amazon EBS.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [Amazon S3 storage classes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html)

   </details>

49. Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?

   - A. Implement automation.
   - B. Design for agility.
   - C. Design for failure.
   - D. Implement elasticity.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Well-Architected reliability](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html)

   </details>

50. Which service should a customer use to consolidate and centrally manage multiple AWS accounts?

   - A. AWS IAM.
   - B. AWS Organizations.
   - C. AWS Schema Conversion Tool.
   - D. AWS Config.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html)

   </details>
