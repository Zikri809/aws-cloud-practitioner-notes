# Practice exam 22

Community practice material. Reviewed 16 October 2026 against AWS documentation. These are not official AWS exam questions.

1. A company needs isolated environments with separate account-level cost allocation. Which account structure supports this?

   - A. Use multiple AWS accounts
   - B. Use resource tagging
   - C. Use multiple VPCs
   - D. Use Cost Explorer

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

2. Which AWS service can be used in the application deployment process?

   - A. AWS AppSync
   - B. AWS Batch
   - C. AWS CodePipeline
   - D. AWS DataSync

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS developer tools](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/developer-tools.html)

   </details>

3. What can be used to reduce the cost of running Amazon EC2 instances? (Choose two.)

   - A. Spot Instances for stateless and flexible workloads
   - B. Memory optimized instances for high-compute workloads
   - C. On-Demand Instances for high-cost and sustained workloads
   - D. Reserved Instances for sustained workloads
   - E. Spend limits set using AWS Budgets

   <details><summary>Answer</summary>

   Correct answer: A, D

   AWS documentation: [Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

   </details>

4. A company is launching an e-commerce site that will store and process credit card data. The company requires information about AWS compliance reports and AWS agreements. <br/> Which AWS service provides on-demand access to these items?

   - A. AWS Certificate Manager
   - B. AWS Config
   - C. AWS Artifact
   - D. AWS CloudTrail

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS compliance and shared responsibility](https://aws.amazon.com/compliance/shared-responsibility-model/)

   </details>

5. Which AWS service or feature allows the user to manage cross-region application traffic?

   - A. Amazon AppStream 2.0
   - B. Amazon VPC
   - C. Elastic Load Balancer
   - D. Amazon Route 53

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)

   </details>

6. Which AWS service can be used to track unauthorized API calls?

   - A. AWS Config
   - B. AWS CloudTrail
   - C. AWS Trusted Advisor
   - D. Amazon Inspector

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html)

   </details>

7. A user needs to regularly audit and evaluate the setup of all AWS resources, identify non-compliant accounts, and be notified when a resource changes. <br/> Which AWS service can be used to meet these requirements?

   - A. AWS Trusted Advisor
   - B. AWS Config
   - C. AWS Resource Access Manager
   - D. AWS Systems Manager

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Config](https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html)

   </details>

8. A user is planning to launch two additional Amazon EC2 instances to increase availability. <br/> Which action should the user take?

   - A. Launch the instances across multiple Availability Zones in a single AWS Region.
   - B. Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone.
   - C. Launch the instances in multiple AWS Regions, but in the same Availability Zone.
   - D. Launch the instances as EC2 Spot Instances in the same AWS Region, but in different Availability Zones.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS global infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/)

   </details>

9. A company must store critical business data in Amazon S3 with a backup to another AWS Region. <br/> How can this be achieved?

   - A. Use an Amazon CloudFront Content Delivery Network (CDN) to cache data globally
   - B. Set up Amazon S3 cross-region replication to another AWS Region
   - C. Configure the AWS Backup service to back up to the data to another AWS Region
   - D. Take Amazon S3 bucket snapshots and copy that data to another AWS Region

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Amazon S3 storage classes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html)

   </details>

10. Which AWS Cloud service can send alerts to customers if custom spending thresholds are exceeded?

   - A. AWS Budgets
   - B. AWS Cost Explorer
   - C. AWS Cost Allocation Tags
   - D. AWS Organizations

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html)

   </details>

11. What is required before a customer penetration-tests its own permitted AWS resources?

   - A. Open a support case
   - B. Follow the AWS penetration-testing policy; prior AWS approval is not required for permitted tests.
   - C. Request a penetration test from your technical account manager
   - D. Contact your AWS sales representative

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS documentation](https://aws.amazon.com/security/penetration-testing/)

   </details>

12. A user needs to automatically discover, classify, and protect sensitive data stored in Amazon S3. <br/> Which AWS service can meet these requirements?

   - A. Amazon Inspector
   - B. Amazon Macie
   - C. Amazon GuardDuty
   - D. AWS Secrets Manager

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Amazon Macie](https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html)

   </details>

13. For a Site-to-Site VPN terminating on an AWS virtual private gateway, which two gateway components are involved? (Choose TWO.)

   - A. Internet gateway
   - B. NAT gateway
   - C. Customer gateway
   - D. Transit gateway
   - E. Virtual private gateway

   <details><summary>Answer</summary>

   Correct answer: C, E

   AWS documentation: [AWS Site-to-Site VPN](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html)

   </details>

14. Which Amazon EC2 pricing option is best suited for applications with short-term, spiky, or unpredictable workloads that cannot be interrupted?

   - A. Spot Instances
   - B. Dedicated Hosts
   - C. On-Demand Instances
   - D. Reserved Instances

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

15. Which AWS cloud architecture principle states that systems should reduce interdependencies?

   - A. Scalability
   - B. Services, not servers
   - C. Removing single points of failure
   - D. Loose coupling

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

16. What is the MOST effective resource for staying up to date on AWS security announcements?

   - A. AWS Health Dashboard (your account health)
   - B. AWS Secrets Manager
   - C. AWS Security Bulletins
   - D. Amazon Inspector

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

17. Which AWS service offers persistent storage for a file system?

   - A. Amazon S3
   - B. Amazon EC2 instance store
   - C. Amazon Elastic Block Store (Amazon EBS)
   - D. Amazon ElastiCache

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [Amazon EBS](https://docs.aws.amazon.com/ebs/latest/userguide/what-is-ebs.html)

   </details>

18. Which of the following allows AWS users to manage cost allocations for billing?

   - A. Tagging resources
   - B. Limiting who can create resources
   - C. Adding a secondary payment method
   - D. Running all operations on a single AWS account

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

19. Which AWS service allows users to download security and compliance reports about the AWS infrastructure on demand?

   - A. Amazon GuardDuty
   - B. AWS Security Hub
   - C. AWS Artifact
   - D. AWS Shield

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS compliance and shared responsibility](https://aws.amazon.com/compliance/shared-responsibility-model/)

   </details>

20. Which of the following AWS services are serverless? (Choose two.)

   - A. AWS Lambda
   - B. Amazon Elasticsearch Service
   - C. AWS Elastic Beanstalk
   - D. Amazon DynamoDB
   - E. Amazon Redshift

   <details><summary>Answer</summary>

   Correct answer: A, D

   AWS documentation: [Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)

   </details>

21. Which AWS managed services can be used to extend an on-premises data center to the AWS network? (Choose two.)

   - A. AWS VPN
   - B. NAT gateway
   - C. AWS Direct Connect
   - D. Amazon Connect
   - E. Amazon Route 53

   <details><summary>Answer</summary>

   Correct answer: A, C

   AWS documentation: [AWS Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html)

   </details>

22. Which requirement must be met for a member account to be unlinked from an AWS Organizations account?

   - A. The linked account must be actively compliant with AWS System and Organization Controls (SOC).
   - B. The payer and the linked account must both create AWS Support cases to request that the member account be unlinked from the organization.
   - C. The member account must meet the requirements of a standalone account.
   - D. The payer account must be used to remove the linked account from the organization.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

23. What AWS benefit refers to a customer's ability to deploy applications that scale up and down the meet variable demand?

   - A. Elasticity
   - B. Agility
   - C. Security
   - D. Scalability

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [Cloud computing advantages](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html)

   </details>

24. During a compliance review, one of the auditors requires a copy of the AWS SOC 2 report. <br/> Which service should be used to submit this request?

   - A. AWS Health Dashboard (your account health)
   - B. AWS Trusted Advisor
   - C. AWS Artifact
   - D. Amazon S3

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS compliance and shared responsibility](https://aws.amazon.com/compliance/shared-responsibility-model/)

   </details>

25. A workload needs multiple Availability Zones and recovery from a regional interruption. Which configurations provide cross-Region recovery options? (Choose TWO.)

   - A. Run on two Availability Zones in one AWS Region, using the additional Availability Zones in the AWS Region for the disaster recovery site.
   - B. Run on two Availability Zones in one AWS Region, using another AWS Region for the disaster recovery site.
   - C. Run on two Availability Zones in one AWS Region, using a local AWS Region for the disaster recovery site.
   - D. Run across two AWS Regions, using a third AWS Region for the disaster recovery site.

   <details><summary>Answer</summary>

   Correct answer: B, D

   AWS documentation: [AWS global infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/)

   </details>

26. A customer can transport its own storage devices to a designated AWS facility for upload. Which service provides this physical transfer location?

   - A. AWS Data Transfer Terminal.
   - B. AWS Direct Connect
   - C. AWS VPN
   - D. Amazon S3

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS Data Transfer Terminal](https://aws.amazon.com/data-transfer-terminal/)

   </details>

27. Which AWS service can run a managed PostgreSQL database that provides online transaction processing (OLTP)?

   - A. Amazon DynamoDB
   - B. Amazon Athena
   - C. Amazon RDS
   - D. Amazon EMR

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html)

   </details>

28. Which of the following assist in identifying costs by department? (Choose two.)

   - A. Using tags on resources
   - B. Using multiple AWS accounts
   - C. Using an account manager
   - D. Using AWS Trusted Advisor
   - E. Using Consolidated Billing

   <details><summary>Answer</summary>

   Correct answer: A, B

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

29. A company wants to allow full access to an Amazon S3 bucket for a particular user. <br/> Which element in the S3 bucket policy holds the user details that describe who needs access to the S3 bucket?

   - A. Principal
   - B. Action
   - C. Resource
   - D. Statement

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

30. Which AWS service allows for effective cost management of multiple AWS accounts?

   - A. AWS Organizations
   - B. AWS Trusted Advisor
   - C. AWS Direct Connect
   - D. Amazon Connect

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html)

   </details>

31. A company is piloting a new customer-facing application on Amazon Elastic Compute Cloud (Amazon EC2) for one month. <br/> What pricing model is appropriate?

   - A. Reserved Instances
   - B. Spot Instances
   - C. On-Demand Instances
   - D. Dedicated Hosts

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

32. Which AWS tools automatically forecast future AWS costs?

   - A. AWS Support Center
   - B. AWS Migration Evaluator
   - C. AWS Pricing Calculator
   - D. Cost Explorer

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS Cost Explorer](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html)

   </details>

33. Under the AWS shared responsibility model, which of the following is a responsibility of AWS?

   - A. Enabling server-side encryption for objects stored in S3
   - B. Applying AWS IAM security policies
   - C. Patching the operating system on an Amazon EC2 instance
   - D. Applying updates to the hypervisor

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS shared responsibility model](https://aws.amazon.com/compliance/shared-responsibility-model/)

   </details>

34. A user is able to set up a master payer account to view consolidated billing reports through:

   - A. AWS Budgets.
   - B. Amazon Macie.
   - C. Amazon QuickSight.
   - D. AWS Organizations.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html)

   </details>

35. Performing operations as code is a design principle that supports which pillar of the AWS Well-Architected Framework?

   - A. Performance efficiency
   - B. Operational excellence
   - C. Reliability
   - D. Security

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

36. Which design principle is achieved by following the reliability pillar of the AWS Well-Architected Framework?

   - A. Vertical scaling
   - B. Manual failure recovery
   - C. Testing recovery procedures
   - D. Changing infrastructure manually

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

37. What is a characteristic of Convertible Reserved Instances (RIs)?

   - A. Users can exchange Convertible RIs for other Convertible RIs from a different instance family with an equal or higher value than the Convertible Reserved Instances that you are exchanging.
   - B. Users can exchange Convertible RIs for other Convertible RIs in different AWS Regions.
   - C. Users can sell and buy Convertible RIs on the AWS Marketplace.
   - D. Users can shorten the term of their Convertible RIs by merging them with other Convertible RIs.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

   </details>

38. The user is fully responsible for which action when running workloads on AWS?

   - A. Patching the infrastructure components
   - B. Implementing controls to route application traffic
   - C. Maintaining physical and environmental controls
   - D. Maintaining the underlying infrastructure components

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

39. An architecture design includes Amazon EC2, an Elastic Load Balancer, and Amazon RDS. <br/> What is the BEST way to get a monthly cost estimation for this architecture?

   - A. Open an AWS Support case, provide the architecture proposal, and ask for a monthly cost estimation.
   - B. Collect the published prices of the AWS services and calculate the monthly estimate.
   - C. Use the AWS Pricing Calculator to estimate the monthly cost.
   - D. Use the AWS Migration Evaluator to estimate the monthly cost.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Pricing Calculator](https://docs.aws.amazon.com/pricing-calculator/latest/userguide/what-is-pricing-calculator.html)

   </details>

40. Which are benefits of using Amazon RDS over Amazon EC2 when running relational databases on AWS? (Choose two.)

   - A. Automated backups
   - B. Schema management
   - C. Indexing of tables
   - D. Software patching
   - E. Extract, transform, and load (ETL) management

   <details><summary>Answer</summary>

   Correct answer: A, D

   AWS documentation: [Overview of AWS services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/amazon-web-services-cloud-platform.html)

   </details>

41. What does the Amazon S3 Intelligent-Tiering storage class offer?

   - A. Payment flexibility by reserving storage capacity
   - B. Long-term retention of data by copying the data to an encrypted Amazon Elastic Block Store (Amazon EBS) volume
   - C. Automatic cost savings by moving objects between tiers based on access pattern changes
   - D. Secure, durable, and lowest cost storage for data archival

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS pricing principles](https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/key-principles.html)

   </details>

42. A company has multiple data sources across the organization and wants to consolidate data into one data warehouse. <br/> Which AWS service can be used to meet this requirement?

   - A. Amazon DynamoDB
   - B. Amazon Redshift
   - C. Amazon Athena
   - D. Amazon QuickSight

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html)

   </details>

43. Which AWS service can be used to track resource changes and establish compliance?

   - A. Amazon CloudWatch
   - B. AWS Config
   - C. AWS CloudTrail
   - D. AWS Trusted Advisor

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Config](https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html)

   </details>

44. A user has underutilized on-premises resources. <br/> Which AWS Cloud concept can BEST address this issue?

   - A. High availability
   - B. Elasticity
   - C. Security
   - D. Loose coupling

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Cloud computing advantages](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html)

   </details>

45. A user has a stateful workload that will run on Amazon EC2 for the next 3 years. <br/> What is the MOST cost-effective pricing model for this workload?

   - A. On-Demand Instances
   - B. Reserved Instances
   - C. Dedicated Instances
   - D. Spot Instances

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

   </details>

46. A cloud practitioner needs an Amazon EC2 instance to launch and run for 7 hours without interruptions. <br/> What is the most suitable and cost-effective option for this task?

   - A. On-Demand Instance
   - B. Reserved Instance
   - C. Dedicated Host
   - D. Spot Instance

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

47. Which of the following are benefits of using AWS Trusted Advisor? (Choose two.)

   - A. Providing high-performance container orchestration
   - B. Creating and rotating encryption keys
   - C. Detecting underutilized resources to save costs
   - D. Improving security by proactively monitoring the AWS environment
   - E. Implementing enforced tagging across AWS resources

   <details><summary>Answer</summary>

   Correct answer: C, D

   AWS documentation: [AWS pricing principles](https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/key-principles.html)

   </details>

48. A developer has been hired by a large company and needs AWS credentials. <br/> Which are security best practices that should be followed? (Choose two.)

   - A. Grant the developer access to only the AWS resources needed to perform the job.
   - B. Share the AWS account root user credentials with the developer.
   - C. Add the developer to the administrator's group in AWS IAM.
   - D. Configure a password policy that ensures the developer's password cannot be changed.
   - E. Ensure the account password policy requires a minimum length.

   <details><summary>Answer</summary>

   Correct answer: A, E

   AWS documentation: [IAM security best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)

   </details>

49. Which AWS service offers designated physical facilities where customers can bring their own storage devices for high-throughput upload to AWS?

   - A. AWS Storage Gateway
   - B. Amazon S3 Glacier Deep Archive
   - C. Amazon Lightsail
   - D. AWS Data Transfer Terminal.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS Data Transfer Terminal](https://aws.amazon.com/data-transfer-terminal/)

   </details>

50. Which service provides a user the ability to warehouse data in the AWS Cloud?

   - A. Amazon EFS
   - B. Amazon Redshift
   - C. Amazon RDS
   - D. Amazon VPC

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html)

   </details>
