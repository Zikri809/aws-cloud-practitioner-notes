# Practice exam 3

Community practice material. Reviewed 16 October 2026 against AWS documentation. These are not official AWS exam questions.

1. Where can you store files in AWS? (Choose TWO)

   - A. Amazon EFS.
   - B. Amazon SNS.
   - C. Amazon EBS.
   - D. Amazon ECS.
   - E. Amazon EMR.

   <details><summary>Answer</summary>

   Correct answer: A, C

   AWS documentation: [Amazon EBS](https://docs.aws.amazon.com/ebs/latest/userguide/what-is-ebs.html)

   </details>

2. Which AWS service can be used to store and reliably deliver messages across distributed systems?

   - A. Amazon Simple Queue Service.
   - B. AWS Storage Gateway.
   - C. Amazon Simple Email Service.
   - D. Amazon Simple Storage Service.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [Amazon SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html)

   </details>

3. Which of the following describes the payment model that AWS makes available for customers that can commit to using Amazon EC2 over a one or 3-year term to reduce their total computing costs?

   - A. Pay less as AWS grows.
   - B. Pay as you go.
   - C. Pay less by using more.
   - D. Save when you reserve.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

4. A company is migrating its on-premises database to Amazon RDS. What should the company do to ensure Amazon RDS costs are kept to a minimum?

   - A. Right-size before and after migration.
   - B. Use a Multi-Region Active-Passive architecture.
   - C. Combine On-demand Capacity Reservations with Saving Plans.
   - D. Use a Multi-Region Active-Active architecture.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS migration services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/migration-services.html)

   </details>

5. What is the primary storage service used by Amazon RDS database instances?

   - A. Amazon Glacier.
   - B. Amazon EBS.
   - C. Amazon EFS.
   - D. Amazon S3.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Amazon EBS](https://docs.aws.amazon.com/ebs/latest/userguide/what-is-ebs.html)

   </details>

6. A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS Service should be used to troubleshoot these issues?

   - A. AWS CodePipeline.
   - B. AWS X-Ray.
   - C. Amazon Inspector.
   - D. AWS CloudTrail.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Overview of AWS services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/amazon-web-services-cloud-platform.html)

   </details>

7. Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind? (Choose TWO)

   - A. Amazon Redshift.
   - B. AWS Snowball.
   - C. Amazon Simple Storage Service.
   - D. Amazon EBS.
   - E. Amazon DynamoDB.

   <details><summary>Answer</summary>

   Correct answer: C, E

   AWS documentation: [Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)

   </details>

8. Which RDS features can support availability or recovery designs? A read replica requires promotion before it can replace a failed writer. (Choose TWO.)

   - A. AWS Regions.
   - B. Multi-AZ Deployment.
   - C. Automatic patching.
   - D. Read Replicas.
   - E. Edge Locations.

   <details><summary>Answer</summary>

   Correct answer: B, D

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

9. Sarah has deployed an application in the Northern California (us-west-1) region. After examining the application’s traffic, she notices that about 30% of the traffic is coming from Asia. What can she do to reduce latency for the users in Asia?

   - A. Replicate the current resources across multiple Availability Zones within the same region.
   - B. Migrate the application to a hosting provider in Asia.
   - C. Recreate the website content.
   - D. Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)

   </details>

10. An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?

   - A. AWS Identity and Access Management.
   - B. Amazon RDS.
   - C. Network Access Control Lists.
   - D. Amazon EMR.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

11. Using Amazon EC2 falls under which of the following cloud computing models?

   - A. Iaas & SaaS.
   - B. IaaS.
   - C. SaaS.
   - D. PaaS.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

12. Which of the below is a best-practice when building applications on AWS?

   - A. Strengthen physical security by applying the principle of least privilege.
   - B. Ensure that the application runs on hardware from trusted vendors.
   - C. Use IAM policies to maintain performance.
   - D. Decouple the components of the application so that they run independently.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS Well-Architected reliability](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html)

   </details>

13. Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?

   - A. Amazon EBS.
   - B. Amazon SQS.
   - C. Amazon Instance store.
   - D. Amazon S3.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [Amazon S3 storage classes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html)

   </details>

14. Amazon Glacier is an Amazon S3 storage class that is suitable for storing [...] & [...]. (Choose TWO)

   - A. Active archives.
   - B. Dynamic websites’ assets.
   - C. Long-term analytic data.
   - D. Active databases.
   - E. Cached data.

   <details><summary>Answer</summary>

   Correct answer: A, C

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

15. What does Amazon Elastic Beanstalk provide?

   - A. A PaaS solution to automate application deployment.
   - B. A compute engine for Amazon ECS.
   - C. A scalable file storage solution for use with AWS and on-premises servers.
   - D. A NoSQL database service.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

16. What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?

   - A. Amazon Kinesis.
   - B. Security groups.
   - C. Amazon Inspector.
   - D. AWS Network Access Control Lists.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [Amazon Inspector](https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html)

   </details>

17. Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? (Choose TWO)

   - A. Patch management controls.
   - B. Database controls.
   - C. Awareness & Training.
   - D. Environmental controls.
   - E. Physical controls.

   <details><summary>Answer</summary>

   Correct answer: D, E

   AWS documentation: [AWS shared responsibility model](https://aws.amazon.com/compliance/shared-responsibility-model/)

   </details>

18. Among these purchasing choices, which offers the lowest cost for the described continuously running RDS workload over a three-year commitment?

   - A. Reserved instances     - No Upfront.
   - B. Reserved instances     - Partial Upfront.
   - C. On-Demand instances.
   - D. Spot Instances.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

   </details>

19. Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users’ experience?

   - A. Elasticity.
   - B. Global reach.
   - C. Data durability.
   - D. High availability.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Cloud computing advantages](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html)

   </details>

20. Savings Plans are available for which of the following AWS compute services? (Choose TWO)

   - A. AWS Batch.
   - B. AWS Outposts.
   - C. Amazon Lightsail.
   - D. Amazon EC2.
   - E. AWS Lambda.

   <details><summary>Answer</summary>

   Correct answer: D, E

   AWS documentation: [Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

   </details>

21. A company has business critical workloads hosted on AWS and they are unwilling to accept any downtime. Which of the following is a recommended best practice to protect their workloads in the event of an unexpected natural disaster?

   - A. Replicate data across multiple Edge Locations worldwide and use Amazon CloudFront to perform automatic failover in the event of an outage.
   - B. Deploy AWS resources across multiple Availability Zones within the same AWS Region.
   - C. Create point-in-time backups in another subnet and recover this data when a disaster occurs.
   - D. Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS global infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/)

   </details>

22. Which statement is correct with regards to AWS service limits? (Choose TWO)

   - A. You can contact AWS support to increase the service limits.
   - B. Each IAM user has the same service limit.
   - C. There are no service limits on AWS.
   - D. You can use the AWS Trusted Advisor to monitor your service limits.
   - E. The Amazon Simple Email Service is responsible for sending email notifications when usage approaches a service limit.

   <details><summary>Answer</summary>

   Correct answer: A, D

   AWS documentation: [Trusted Advisor](https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor.html)

   </details>

23. What is the AWS tool that enables you to use scripts to manage all AWS services and resources?

   - A. AWS Console.
   - B. AWS Service Catalog.
   - C. AWS OpsWorks.
   - D. AWS CLI.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

24. What are the connectivity options that can be used to build hybrid cloud architectures? (Choose TWO)

   - A. AWS Artifact.
   - B. AWS Cloud9.
   - C. AWS Direct Connect.
   - D. AWS CloudTrail.
   - E. AWS VPN.

   <details><summary>Answer</summary>

   Correct answer: C, E

   AWS documentation: [AWS Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html)

   </details>

25. A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?

   - A. AWS EC2 Auto Recovery.
   - B. AWS Auto Scaling.
   - C. AWS Network Load Balancer.
   - D. AWS Application Load Balancer.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [Elastic Load Balancing](https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html)

   </details>

26. Which of the following AWS offerings is a MySQL-compatible relational database service that can scale capacity automatically based on demand?

   - A. Amazon Neptune.
   - B. Amazon Aurora.
   - C. Amazon RDS for SQL Server.
   - D. Amazon RDS for PostgreSQL.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html)

   </details>

27. Which of the following can help protect your EC2 instances from DDoS attacks? (Choose TWO)

   - A. AWS CloudHSM.
   - B. Security Groups.
   - C. AWS Batch.
   - D. AWS IAM.
   - E. Network Access Control Lists (Network ACLs).

   <details><summary>Answer</summary>

   Correct answer: B, E

   AWS documentation: [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)

   </details>

28. What is the AWS data warehouse service that supports a high level of query performance on large amounts of datasets?

   - A. Amazon Redshift.
   - B. Amazon Kinesis.
   - C. Amazon DynamoDB.
   - D. Amazon RDS.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html)

   </details>

29. Which of the following should be considered when performing a TCO analysis to compare the costs of running an application on AWS instead of on-premises?

   - A. Application development.
   - B. Market research.
   - C. Business analysis.
   - D. Physical hardware.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS global infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/)

   </details>

30. How are AWS customers billed for Linux-based Amazon EC2 usage?

   - A. EC2 instances will be billed on one second increments, with a minimum of one minute.
   - B. EC2 instances will be billed on one hour increments, with a minimum of one day.
   - C. EC2 instances will be billed on one minute increments, with a minimum of one hour.
   - D. EC2 instances will be billed on one day increments, with a minimum of one month.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

   </details>

31. Which of the following will impact the price paid for an EC2 instance? (Choose TWO)

   - A. Instance type.
   - B. The AWS Region where the instance runs.
   - C. Load balancing.
   - D. Number of buckets.
   - E. Number of private IPs.

   <details><summary>Answer</summary>

   Correct answer: A, B

   AWS documentation: [AWS global infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/)

   </details>

32. A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?

   - A. By creating an AWS Config template from the old instance and launching a new instance from it.
   - B. By creating an EBS Snapshot of the old instance.
   - C. By installing Aurora on EC2 and launching a new instance from it.
   - D. By creating an AMI from the old instance and launching a new instance from it.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

   </details>

33. A company uses AWS Organizations to manage all of its AWS accounts. Which of the following allows the company to restrict what services and actions are allowed in each individual account?

   - A. IAM Principals.
   - B. AWS Service Control Policies (SCPs).
   - C. IAM policies.
   - D. AWS Fargate.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html)

   </details>

34. Which of the following statements describes the AWS Cloud’s agility?

   - A. AWS allows you to host your applications in multiple regions around the world.
   - B. AWS provides customizable hardware at the lowest possible cost.
   - C. AWS allows you to provision resources in minutes.
   - D. AWS allows you to pay upfront to reduce costs.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [Cloud computing advantages](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html)

   </details>

35. What are the benefits of using the Amazon Relational Database Service? (Choose TWO)

   - A. Lower administrative burden.
   - B. Complete control over the underlying host.
   - C. Resizable compute capacity.
   - D. Scales automatically to larger or smaller instance types.
   - E. Supports the document and key-value data structure.

   <details><summary>Answer</summary>

   Correct answer: A, C

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

36. What is the connectivity option that uses Internet Protocol Security (IPSec) to establish encrypted connectivity between an on-premises network and the AWS Cloud?

   - A. Internet Gateway.
   - B. AWS IQ.
   - C. AWS Direct Connect.
   - D. AWS Site-to-Site VPN.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS Site-to-Site VPN](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html)

   </details>

37. What is the minimum level of AWS support that provides 24x7 access to technical support engineers via phone and chat?

   - A. Enterprise Support.
   - B. Developer Support.
   - C. Basic Support.
   - D. Business Support+.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS Support plans](https://docs.aws.amazon.com/awssupport/latest/user/aws-support-plans.html)

   </details>

38. Which of the following is used to control network traffic in AWS? (Choose TWO)

   - A. Network Access Control Lists (NACLs).
   - B. Key Pairs.
   - C. Access Keys.
   - D. IAM Policies.
   - E. Security Groups.

   <details><summary>Answer</summary>

   Correct answer: A, E

   AWS documentation: [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)

   </details>

39. A company has developed a media transcoding application in AWS. The application is designed to recover quickly from hardware failures. Which one of the following types of instance would be the most cost-effective choice to use?

   - A. Reserved instances.
   - B. Spot Instances.
   - C. On-Demand instances.
   - D. Dedicated instances.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

   </details>

40. Which AWS Service provides the current status of all AWS Services in all AWS Regions?

   - A. AWS Health Dashboard (service health).
   - B. AWS Management Console.
   - C. Amazon CloudWatch.
   - D. AWS Health Dashboard (your account health).

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS Health](https://docs.aws.amazon.com/health/latest/ug/what-is-aws-health.html)

   </details>

41. Which AWS service or feature can be used to call AWS Services from different programming languages?

   - A. AWS Software Development Kit.
   - B. AWS Command Line Interface.
   - C. AWS CodeDeploy.
   - D. AWS Management Console.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

42. Which AWS Service can be used to register a new domain name?

   - A. Amazon Personalize.
   - B. Amazon Route 53.
   - C. AWS KMS.
   - D. AWS Config.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)

   </details>

43. App development companies move their business to AWS to reduce time-to-market and improve customer satisfaction, what are the AWS automation tools that help them deploy their applications faster? (Choose TWO)

   - A. AWS CloudFormation.
   - B. AWS Migration Hub.
   - C. AWS IAM.
   - D. AWS Elastic Beanstalk.
   - E. Amazon Macie.

   <details><summary>Answer</summary>

   Correct answer: A, D

   AWS documentation: [AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)

   </details>

44. Which AWS service provides cost-optimization recommendations?

   - A. AWS Trusted Advisor.
   - B. AWS Pricing Calculator.
   - C. Amazon QuickSight.
   - D. AWS X-Ray.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [Trusted Advisor](https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor.html)

   </details>

45. A company has hundreds of VPCs in multiple AWS Regions worldwide. What service does AWS offer to simplify the connection management among the VPCs?

   - A. VPC Peering.
   - B. AWS Transit Gateway.
   - C. Amazon Connect.
   - D. Security Groups.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Transit Gateway](https://docs.aws.amazon.com/vpc/latest/tgw/what-is-transit-gateway.html)

   </details>

46. What is one benefit and one drawback of buying a reserved EC2 instance? (Select TWO)

   - A. Instances can be shut down by AWS at any time with no notification.
   - B. Reserved instances require at least a one-year pricing commitment.
   - C. There is no additional charge for using dedicated instances.
   - D. Reserved instances provide a significant discount compared to on-demand instances.
   - E. Reserved instances are best suited for periodic workloads.

   <details><summary>Answer</summary>

   Correct answer: B, D

   AWS documentation: [Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

   </details>

47. Why does every AWS Region contain multiple Availability Zones?

   - A. Multiple Availability Zones allows you to build resilient and highly available architectures.
   - B. Multiple Availability Zones results in lower total cost compared to deploying in a single Availability Zone.
   - C. Multiple Availability Zones allows for data replication and global reach.
   - D. Multiple Availability Zones within a region increases the storage capacity available in that region.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS global infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/)

   </details>

48. What is the most cost-effective purchasing option for running a set of EC2 instances that must always be available for a period of two months?

   - A. On-Demand Instances.
   - B. Spot Instances.
   - C. Reserved Instances     - All Upfront.
   - D. Reserved Instances     - No Upfront.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

49. Which of the following is a benefit of running an application in multiple Availability Zones?

   - A. Allows you to exceed AWS service limits.
   - B. Reduces application response time between servers and global users.
   - C. Increases available compute capacity.
   - D. Increases the availability of your application.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [Overview of AWS services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/amazon-web-services-cloud-platform.html)

   </details>

50. Data security is one of the top priorities of AWS. How does AWS deal with old storage devices that have reached the end of their useful life?

   - A. AWS sells the old devices to other hosting providers.
   - B. AWS destroys the old devices in accordance with industry-standard practices.
   - C. AWS sends the old devices for remanufacturing.
   - D. AWS stores the old devices in a secure place.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>
