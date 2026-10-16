# Practice exam 20

Community practice material. Reviewed 16 October 2026 against AWS documentation. These are not official AWS exam questions.

1. Which AWS service helps identify malicious or unauthorized activities in AWS accounts and workloads?

   - A. Amazon Rekognition
   - B. AWS Trusted Advisor
   - C. Amazon GuardDuty
   - D. Amazon CloudWatch

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [Amazon GuardDuty](https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html)

   </details>

2. A company wants to try a third-party ecommerce solution before deciding to use it long term. <br/> Which AWS service or tool will support this effort?

   - A. AWS Marketplace
   - B. AWS Partner Network (APN)
   - C. AWS Managed Services
   - D. AWS Service Catalog

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [Overview of AWS services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/amazon-web-services-cloud-platform.html)

   </details>

3. Which AWS service is a managed NoSQL database?

   - A. Amazon Redshift
   - B. Amazon DynamoDB
   - C. Amazon Aurora
   - D. Amazon RDS for MariaDB

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)

   </details>

4. Which AWS service should be used to create a billing alarm?

   - A. AWS Trusted Advisor
   - B. AWS CloudTrail
   - C. Amazon CloudWatch
   - D. Amazon QuickSight

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html)

   </details>

5. A company is hosting a web application in a Docker container on Amazon EC2. <br/> AWS is responsible for which of the following tasks?

   - A. Scaling the web application and services developed with Docker
   - B. Provisioning or scheduling containers to run on clusters and maintain their availability
   - C. Performing hardware maintenance in the AWS facilities that run the AWS Cloud
   - D. Managing the guest operating system, including updates and security patches

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [Cloud computing advantages](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html)

   </details>

6. Users are reporting latency when connecting to a website with a global customer base. <br/> Which AWS service will improve the customer experience by reducing latency?

   - A. Amazon CloudFront
   - B. AWS Direct Connect
   - C. Amazon EC2 Auto Scaling
   - D. AWS Transit Gateway

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)

   </details>

7. Which actions represent best practices for using AWS IAM? (Choose two.)

   - A. Configure a strong password policy
   - B. Share the security credentials among users of AWS accounts who are in the same Region
   - C. Use access keys to log in to the AWS Management Console
   - D. Prefer temporary credentials from IAM roles and remove unused long-term keys.
   - E. Avoid using IAM roles to delegate permissions

   <details><summary>Answer</summary>

   Correct answer: A, D

   AWS documentation: [IAM security best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)

   </details>

8. Which AWS feature or service can be used to capture information about incoming and outgoing traffic in an AWS VPC infrastructure?

   - A. AWS Config
   - B. VPC Flow Logs
   - C. AWS Trusted Advisor
   - D. AWS CloudTrail

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)

   </details>

9. A company wants to use an AWS service to monitor the health of application endpoints, with the ability to route traffic to healthy regional endpoints to improve application availability. <br/> Which service will support these requirements?

   - A. Amazon Inspector
   - B. Amazon CloudWatch
   - C. AWS Global Accelerator
   - D. Amazon CloudFront

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [Overview of AWS services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/amazon-web-services-cloud-platform.html)

   </details>

10. According to the AWS Well-Architected Framework, what change management steps should be taken to achieve reliability in the AWS Cloud? (Choose two.)

   - A. Use AWS Config to generate an inventory of AWS resources
   - B. Use service limits to prevent users from creating or making changes to AWS resources
   - C. Use AWS CloudTrail to record AWS API calls into an auditable log file
   - D. Use AWS Certificate Manager to whitelist approved AWS resources and services
   - E. Use Amazon GuardDuty to validate configuration changes made to AWS resources

   <details><summary>Answer</summary>

   Correct answer: A, C

   AWS documentation: [AWS CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html)

   </details>

11. Which service can be used to monitor and receive alerts for AWS account root user AWS Management Console sign-in events?

   - A. Amazon EventBridge with CloudTrail sign-in events and an SNS notification target.
   - B. AWS Config
   - C. AWS Trusted Advisor
   - D. AWS IAM

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html)

   </details>

12. Which design principle should be considered when architecting in the AWS Cloud?

   - A. Think of servers as non-disposable resources
   - B. Use synchronous integration of services
   - C. Design loosely coupled components
   - D. Implement the least permissive rules for security groups

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

13. Which services support moving on-premises files or databases into AWS over a network? (Choose TWO.)

   - A. AWS DataSync.
   - B. AWS Lambda
   - C. AWS ElastiCache
   - D. AWS Database Migration Service (AWS DMS)
   - E. Amazon API Gateway

   <details><summary>Answer</summary>

   Correct answer: A, D

   AWS documentation: [AWS DataSync](https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html)

   </details>

14. A batch workload takes 5 hours to finish on an Amazon EC2 instance. The amount of data to be processed doubles monthly and the processing time is proportional. <br/> What is the best cloud architecture to address this consistently growing demand?

   - A. Run the application on a bigger EC2 instance size.
   - B. Switch to an EC2 instance family that better matches batch requirements.
   - C. Distribute the application across multiple EC2 instances and run the workload in parallel.
   - D. Run the application on a bare metal EC2 instance.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

   </details>

15. Each department within a company has its own independent AWS account and its own payment method. New company leadership wants to centralize departmental governance and consolidate payments. <br/> How can this be achieved using AWS services or features?

   - A. Forward monthly invoices for each account. Then create IAM roles to allow cross-account access.
   - B. Create a new AWS account. Then configure AWS Organizations and invite all existing accounts to join.
   - C. Configure AWS Organizations in each of the existing accounts. Then link all accounts together.
   - D. Use Cost Explorer to combine costs from all accounts. Then replicate IAM policies across accounts.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html)

   </details>

16. The ability to horizontally scale Amazon EC2 instances based on demand is an example of which concept in the AWS Cloud value proposition?

   - A. Economy of scale
   - B. Elasticity
   - C. High availability
   - D. Agility

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Cloud computing advantages](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html)

   </details>

17. An ecommerce company anticipates a huge increase in web traffic for two very popular upcoming shopping holidays. <br/> Which AWS service or feature can be configured to dynamically adjust resources to meet this change in demand?

   - A. AWS CloudTrail
   - B. Amazon EC2 Auto Scaling
   - C. Amazon Forecast
   - D. AWS Config

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

   </details>

18. Which AWS service enables users to securely connect to AWS resources over the public internet?

   - A. Amazon VPC peering
   - B. AWS Direct Connect
   - C. AWS VPN
   - D. Amazon Pinpoint

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Site-to-Site VPN](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html)

   </details>

19. Which tool is used to forecast AWS spending?

   - A. AWS Trusted Advisor
   - B. AWS Organizations
   - C. Cost Explorer
   - D. Amazon Inspector

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Cost Explorer](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html)

   </details>

20. A company is running an ecommerce application hosted in Europe. To decrease latency for users who access the website from other parts of the world, the company would like to cache frequently accessed static content closer to the users. <br/> Which AWS service will support these requirements?

   - A. Amazon ElastiCache
   - B. Amazon CloudFront
   - C. Amazon Elastic File System (Amazon EFS)
   - D. Amazon Elastic Block Store (Amazon EBS)

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)

   </details>

21. Which of the following is a component of the AWS Global Infrastructure?

   - A. Amazon Alexa
   - B. AWS Regions
   - C. Amazon Lightsail
   - D. AWS Organizations

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS global infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/)

   </details>

22. Which AWS service will help users determine if an application running on an Amazon EC2 instance has sufficient CPU capacity?

   - A. Amazon CloudWatch
   - B. AWS Config
   - C. AWS CloudTrail
   - D. Amazon Inspector

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html)

   </details>

23. Why is it beneficial to use Elastic Load Balancers with applications?

   - A. They allow for the conversion from Application Load Balancers to Classic Load Balancers.
   - B. They are capable of handling constant changes in network traffic patterns.
   - C. They automatically adjust capacity.
   - D. They are provided at no charge to users.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

24. Which tasks are the customer's responsibility in the AWS shared responsibility model? (Choose two.)

   - A. Infrastructure facilities access management
   - B. Cloud infrastructure hardware lifecycle management
   - C. Configuration management of user's applications
   - D. Networking infrastructure protection
   - E. Security groups configuration

   <details><summary>Answer</summary>

   Correct answer: C, E

   AWS documentation: [AWS shared responsibility model](https://aws.amazon.com/compliance/shared-responsibility-model/)

   </details>

25. IT systems should be designed to reduce interdependencies, so that a change or failure in one component does not cascade to other components. <br/> This is an example of which principle of cloud architecture design?

   - A. Scalability
   - B. Loose coupling
   - C. Automation
   - D. Automatic scaling

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

26. Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Choose two.)

   - A. AWS WAF
   - B. AWS Trusted Advisor
   - C. AWS Direct Connect
   - D. AWS Organizations
   - E. Network ACLs

   <details><summary>Answer</summary>

   Correct answer: A, E

   AWS documentation: [AWS WAF and Shield](https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html)

   </details>

27. An application runs on multiple Amazon EC2 instances that access a shared file system simultaneously. <br/> Which AWS storage service should be used?

   - A. Amazon EBS
   - B. Amazon EFS
   - C. Amazon S3
   - D. AWS Artifact

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Amazon EFS](https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html)

   </details>

28. A web application is hosted on AWS using an Elastic Load Balancer, multiple Amazon EC2 instances, and Amazon RDS. <br/> Which security measures fall under the responsibility of AWS? (Choose two.)

   - A. Running a virus scan on EC2 instances
   - B. Protecting against IP spoofing and packet sniffing
   - C. Installing the latest security patches on the RDS instance
   - D. Encrypting communication between the EC2 instances and the Elastic Load Balancer
   - E. Configuring a security group and a network access control list (NACL) for EC2

   <details><summary>Answer</summary>

   Correct answer: B, C

   AWS documentation: [Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html)

   </details>

29. What is the benefit of elasticity in the AWS Cloud?

   - A. Ensure web traffic is automatically spread across multiple AWS Regions.
   - B. Minimize storage costs by automatically archiving log data.
   - C. Enable AWS to automatically select the most cost-effective services.
   - D. Automatically adjust the required compute capacity to maintain consistent performance.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

30. Which cloud-economics concept describes AWS aggregating demand across customers to reduce unit infrastructure costs?

   - A. pay-as-you go pricing
   - B. the AWS global infrastructure
   - C. economies of scale
   - D. reserved storage pricing

   <details><summary>Answer</summary>

   Correct answer: C

   Aggregated infrastructure demand can reduce unit costs; it does not guarantee that every service price continually falls.

   AWS documentation: [AWS pricing principles](https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/key-principles.html)

   </details>

31. A company needs an Amazon S3 bucket that cannot have any public objects due to compliance requirements. <br/> How can this be accomplished?

   - A. Enable S3 Block Public Access from the AWS Management Console.
   - B. Hold a team meeting to discuss the importance if only uploading private S3 objects.
   - C. Require all S3 objects to be manually approved before uploading.
   - D. Create a service to monitor all S3 uploads and remove any public uploads.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [Amazon S3 storage classes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html)

   </details>

32. A Cloud Practitioner identifies a billing issue after examining the AWS Cost and Usage report in the AWS Management Console. <br/> Which action can be taken to resolve this?

   - A. Open a detailed case related to billing and submit it to AWS Support for help.
   - B. Upload data describing the issue to a new object in a private Amazon S3 bucket.
   - C. Create a pricing application and deploy it to a right-sized Amazon EC2 instance for more information.
   - D. Proceed with creating a new dashboard in Amazon QuickSight.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [Consolidated billing](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html)

   </details>

33. What does the AWS Pricing Calculator do?

   - A. Compares on-premises costs to colocation environments
   - B. Estimates monthly billing based on projected usage
   - C. Estimates power consumption at existing data centers
   - D. Estimates CPU utilization

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Consolidated billing](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html)

   </details>

34. Who is responsible for patching the guest operating system for Amazon RDS?

   - A. The AWS Product team
   - B. The customer Database Administrator
   - C. Managed partners
   - D. AWS Support

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

35. Which AWS services may be scaled using AWS Auto Scaling? (Choose two.)

   - A. Amazon EC2
   - B. Amazon DynamoDB
   - C. Amazon S3
   - D. Amazon Route 53
   - E. Amazon Redshift

   <details><summary>Answer</summary>

   Correct answer: A, B

   AWS documentation: [Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

   </details>

36. Which of the following are benefits of AWS Global Accelerator? (Choose two.)

   - A. Reduced cost to run services on AWS
   - B. Improved availability of applications deployed on AWS
   - C. Higher durability of data stored on AWS
   - D. Decreased latency to reach applications deployed on AWS
   - E. Higher security of data stored on AWS

   <details><summary>Answer</summary>

   Correct answer: B, D

   AWS documentation: [AWS Well-Architected reliability](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html)

   </details>

37. A user who wants to get help with billing and reactivate a suspended account should submit an account and billing request to:

   - A. the AWS Support forum
   - B. AWS Abuse
   - C. an AWS Solutions Architect
   - D. AWS Support

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

38. Which AWS Cloud best practice uses the elasticity and agility of cloud computing?

   - A. Provision capacity based on past usage and theoretical peaks
   - B. Dynamically and predictively scale to meet usage demands
   - C. Build the application and infrastructure in a data center that grants physical access
   - D. Break apart the application into loosely coupled components

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

   </details>

39. Which method helps to optimize costs of users moving to the AWS Cloud?

   - A. Paying only for what is used
   - B. Purchasing hardware before it is needed
   - C. Manually provisioning cloud resources
   - D. Purchasing for the maximum possible load

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

40. Under the AWS shared responsibility model, which of the following is a customer responsibility?

   - A. Installing security patches for the Xen and KVM hypervisors
   - B. Installing operating system patches for Amazon DynamoDB
   - C. Installing operating system security patches for Amazon EC2 database instances
   - D. Installing operating system security patches for Amazon RDS database instances

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS shared responsibility model](https://aws.amazon.com/compliance/shared-responsibility-model/)

   </details>

41. The AWS Cost Management tools give users the ability to do which of the following? (Choose two.)

   - A. Terminate all AWS resources automatically if budget thresholds are exceeded.
   - B. Break down AWS costs by day, service, and linked AWS account.
   - C. Create budgets and receive notifications if current of forecasted usage exceeds the budgets.
   - D. Switch automatically to Reserved Instances or Spot Instances, whichever is most cost-effective.
   - E. Move data stored in Amazon S3 to a more cost-effective storage class.

   <details><summary>Answer</summary>

   Correct answer: B, C

   AWS documentation: [AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html)

   </details>

42. For a self-managed application running on EC2, who is responsible for guest operating system security and patching?

   - A. AWS Support
   - B. the customer
   - C. AWS Systems Manager
   - D. AWS Config

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

43. Which AWS service makes it easy to create and manage AWS users and groups, and provide them with secure access to AWS resources at no charge?

   - A. AWS Direct Connect
   - B. Amazon Connect
   - C. AWS Identity and Access Management (IAM)
   - D. AWS Firewall Manager

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [IAM security best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)

   </details>

44. Which AWS service provides on-demand of AWS security and compliance documentation?

   - A. AWS Directory Service
   - B. AWS Artifact
   - C. AWS Trusted Advisor
   - D. Amazon Inspector

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS compliance and shared responsibility](https://aws.amazon.com/compliance/shared-responsibility-model/)

   </details>

45. Which AWS service can be used to turn text into life-like speech?

   - A. Amazon Polly
   - B. Amazon Transcribe
   - C. Amazon Rekognition
   - D. Amazon Lex

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS AI and ML services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/machine-learning.html)

   </details>

46. What is one of the core principles to follow when designing a highly available application in the AWS Cloud?

   - A. Design using a serverless architecture
   - B. Assume that all components within an application can fail
   - C. Design AWS Auto Scaling into every application
   - D. Design all components using open-source code

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

47. A user needs to generate a report that outlines the status of key security checks in an AWS account. The report must include:
    <br/> (The status of Amazon S3 bucket permissions, Whether multi-factor authentication is enabled for the AWS account root user, If any security groups are configured to allow unrestricted access.) <br/> Where can all this information be found in one location?

   - A. Amazon QuickSight dashboard
   - B. AWS CloudTrail trails
   - C. AWS Trusted Advisor report
   - D. IAM credential report

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [Trusted Advisor](https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor.html)

   </details>

48. Which Amazon EC2 pricing model should be used to comply with per-core software license requirements?

   - A. Dedicated Hosts
   - B. On-Demand Instances
   - C. Spot Instances
   - D. Reserved Instances

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

   </details>

49. Which of the AWS global infrastructure is used to cache copies of content for faster delivery to users across the globe?

   - A. AWS Regions
   - B. Availability Zones
   - C. Edge locations
   - D. Data centers

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)

   </details>

50. Using AWS Config to record, audit, and evaluate changes to AWS resources to enable traceability is an example of which AWS Well-Architected Framework pillar?

   - A. Security
   - B. Operational excellence
   - C. Performance efficiency
   - D. Cost optimization

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>
