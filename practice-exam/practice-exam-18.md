# Practice exam 18

Community practice material. Reviewed 16 October 2026 against AWS documentation. These are not official AWS exam questions.

1. Under the AWS shared responsibility model, which of the following is an example of security in the AWS Cloud?

   - A. Managing edge locations
   - B. Physical security
   - C. Firewall configuration
   - D. Global infrastructure

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS shared responsibility model](https://aws.amazon.com/compliance/shared-responsibility-model/)

   </details>

2. How can an AWS user with an AWS Basic Support plan obtain technical assistance from AWS?

   - A. AWS Senior Support Engineers
   - B. AWS Technical Account Managers
   - C. AWS Trusted Advisor
   - D. AWS re:Post

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS re:Post](https://repost.aws/)

   </details>

3. Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)

   - A. Multiple Availability Zones
   - B. Performance efficiency
   - C. Security
   - D. Encryption usage
   - E. High availability

   <details><summary>Answer</summary>

   Correct answer: B, C

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

4. After selecting an Amazon EC2 Dedicated Host reservation, which pricing option would provide the largest discount?

   - A. No upfront payment
   - B. Hourly on-demand payment
   - C. Partial upfront payment
   - D. All upfront payment

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS pricing principles](https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/key-principles.html)

   </details>

5. What is an advantage of deploying an application across multiple Availability Zones?

   - A. There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region.
   - B. The application will have higher availability because it can withstand a service disruption in one Availability Zone.
   - C. There will be better coverage as Availability Zones are geographically distant and can serve a wider area.
   - D. There will be decreased application latency that will improve the user experience.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS global infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/)

   </details>

6. A Cloud Practitioner is asked how to estimate the cost of using a new application on AWS. <br/> What is the MOST appropriate response?

   - A. Inform the user that AWS pricing allows for on-demand pricing.
   - B. Direct the user to the AWS Pricing Calculator for an estimate.
   - C. Use Amazon QuickSight to analyze current spending on-premises.
   - D. Use Amazon AppStream 2.0 for real-time pricing analytics.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Pricing Calculator](https://docs.aws.amazon.com/pricing-calculator/latest/userguide/what-is-pricing-calculator.html)

   </details>

7. A company wants to migrate its applications to a VPC on AWS. These applications will need to access on-premises resources. <br/> What combination of actions will enable the company to accomplish this goal? (Choose two.)

   - A. Use the AWS Service Catalog to identify a list of on-premises resources that can be migrated.
   - B. Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC.
   - C. Use Amazon Athena to query data from the on-premises database servers.
   - D. Connect the company's on-premises data center to AWS using AWS Direct Connect.
   - E. Leverage Amazon CloudFront to restrict access to static web content provided through the company's on-premises web servers.

   <details><summary>Answer</summary>

   Correct answer: B, D

   AWS documentation: [AWS Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html)

   </details>

8. A web application running on AWS has been spammed with malicious requests from a recurring set of IP addresses. <br/> Which AWS service can help secure the application and block the malicious traffic?

   - A. AWS IAM
   - B. Amazon GuardDuty
   - C. Amazon Simple Notification Service (Amazon SNS)
   - D. AWS WAF

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS WAF and Shield](https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html)

   </details>

9. Treating infrastructure as code in the AWS Cloud allows users to:

   - A. automate migration of on-premises hardware to AWS data centers.
   - B. let a third party automate an audit of the AWS infrastructure.
   - C. turn over application code to AWS so it can run on the AWS infrastructure.
   - D. automate the infrastructure provisioning process.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS global infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/)

   </details>

10. A company requires a dedicated network connection between its on-premises servers and the AWS Cloud. <br/> Which AWS service should be used?

   - A. AWS VPN
   - B. AWS Direct Connect
   - C. Amazon API Gateway
   - D. Amazon Connect

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html)

   </details>

11. Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?

   - A. AWS Glue
   - B. AWS Data Pipeline
   - C. Amazon CloudSearch
   - D. Amazon Athena

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS analytics services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/analytics.html)

   </details>

12. AWS CloudFormation is designed to help the user:

   - A. model and provision resources.
   - B. update application code.
   - C. set up data lakes.
   - D. create reports for billing.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

13. Which of the following is an AWS database service?

   - A. Amazon Redshift
   - B. Amazon Elastic Block Store (Amazon EBS)
   - C. Amazon S3 Glacier
   - D. AWS Snowball

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html)

   </details>

14. A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports. <br/> What is the SIMPLEST way to do this?

   - A. Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0.
   - B. Run AWS Trusted Advisor and review the findings.
   - C. Open the AWS IAM console and check the inbound rule filters for open access.
   - D. In AWS Config, create a custom rule that invokes an AWS Lambda function to review rules for inbound access.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Trusted Advisor](https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor.html)

   </details>

15. What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises? (Choose two.)

   - A. AWS automatically distributes the data globally for higher durability.
   - B. AWS will take care of operating the application.
   - C. AWS makes it easy to architect for high availability.
   - D. AWS can easily accommodate application demand changes.
   - E. AWS takes care application security patching.

   <details><summary>Answer</summary>

   Correct answer: C, D

   AWS documentation: [AWS Well-Architected reliability](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html)

   </details>

16. A user needs an automated security assessment report that will identify unintended network access to Amazon EC2 instances and vulnerabilities on those instances. <br/> Which AWS service will provide this assessment report?

   - A. EC2 security groups
   - B. AWS Config
   - C. Amazon Macie
   - D. Amazon Inspector

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [Amazon Inspector](https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html)

   </details>

17. How can a company isolate the costs of production and non-production workloads on AWS?

   - A. Create Identity and Access Management (IAM) roles for production and non-production workloads.
   - B. Use different accounts for production and non-production expenses.
   - C. Use Amazon EC2 for non-production workloads and other services for production workloads.
   - D. Use Amazon CloudWatch to monitor the use of services.

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Overview of AWS services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/amazon-web-services-cloud-platform.html)

   </details>

18. Where can users find a catalog of AWS-recognized providers of third-party security solutions?

   - A. AWS Service Catalog
   - B. AWS Marketplace
   - C. AWS Quick Start
   - D. AWS CodeDeploy

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Overview of AWS services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/amazon-web-services-cloud-platform.html)

   </details>

19. Which S3 class is designed for the lowest-cost long-term archive storage among these choices, when retrieval can take hours and the minimum storage duration is acceptable?

   - A. Amazon S3
   - B. AWS Snowball
   - C. Amazon Redshift
   - D. Amazon S3 Glacier Deep Archive.

   <details><summary>Answer</summary>

   Correct answer: D

   Use the current class and retrieval tier documentation; archive storage prices do not imply immediate access.

   AWS documentation: [Amazon S3 storage classes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html)

   </details>

20. What are the immediate benefits of using the AWS Cloud? (Choose two.)

   - A. Increased IT staff.
   - B. Capital expenses are replaced with variable expenses.
   - C. User control of infrastructure.
   - D. Increased agility.
   - E. AWS holds responsibility for security in the cloud.

   <details><summary>Answer</summary>

   Correct answer: B, D

   AWS documentation: [Overview of AWS services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/amazon-web-services-cloud-platform.html)

   </details>

21. Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?

   - A. Amazon GuardDuty
   - B. Amazon Macie
   - C. Amazon Inspector
   - D. AWS Shield

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Amazon Macie](https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html)

   </details>

22. What is the purpose of AWS Storage Gateway?

   - A. It ensures on-premises data storage is 99.999999999% durable.
   - B. It transports petabytes of data to and from AWS.
   - C. It connects to multiple Amazon EC2 instances.
   - D. It connects on-premises data storage to the AWS Cloud.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [Overview of AWS services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/amazon-web-services-cloud-platform.html)

   </details>

23. What should users do if they want to install an application in geographically isolated locations?

   - A. Install the application using multiple internet gateways.
   - B. Deploy the application to an Amazon VPC.
   - C. Deploy the application to multiple AWS Regions.
   - D. Configure the application using multiple NAT gateways.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS global infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/)

   </details>

24. A system in the AWS Cloud is designed to withstand the failure of one or more components. <br/> What is this an example of?

   - A. Elasticity
   - B. High Availability
   - C. Scalability
   - D. Agility

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Well-Architected reliability](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html)

   </details>

25. A Cloud Practitioner needs a consistent and dedicated connection between AWS resources and an on-premises system. <br/> Which AWS service can fulfill this requirement?

   - A. AWS Direct Connect
   - B. AWS VPN
   - C. Amazon Connect
   - D. AWS Data Pipeline

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html)

   </details>

26. Within the AWS shared responsibility model, who is responsible for security and compliance?

   - A. The customer is responsible.
   - B. AWS is responsible.
   - C. AWS and the customer share responsibility.
   - D. AWS shares responsibility with the relevant governing body.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS shared responsibility model](https://aws.amazon.com/compliance/shared-responsibility-model/)

   </details>

27. Which approach is recommended for a workforce user authenticating to the AWS CLI?

   - A. a password policy.
   - B. Use IAM Identity Center or federation to obtain temporary role credentials.
   - C. a managed policy.
   - D. an API key.

   <details><summary>Answer</summary>

   Correct answer: B

   The AWS CLI does not require every user to create a long-term access key.

   AWS documentation: [IAM security best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)

   </details>

28. Which AWS service is used to provide encryption for Amazon EBS?

   - A. AWS Certificate Manager
   - B. AWS Systems Manager
   - C. AWS KMS
   - D. AWS Config

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS cryptography services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/security-services.html)

   </details>

29. How does AWS charge for AWS Lambda usage once the free tier has been exceeded? (Choose two.)

   - A. By the time it takes for the Lambda function to execute.
   - B. By the number of versions of a specific Lambda function.
   - C. By the number of requests made for a given Lambda function.
   - D. By the programming language that is used for the Lambda function.
   - E. By the total number of Lambda functions in an AWS account.

   <details><summary>Answer</summary>

   Correct answer: A, C

   AWS documentation: [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)

   </details>

30. Which of the following describes the relationships among AWS Regions, Availability Zones, and edge locations? (Choose two.)

   - A. There are more AWS Regions than Availability Zones.
   - B. There are more edge locations than AWS Regions.
   - C. An edge location is an Availability Zone.
   - D. There are more AWS Regions than edge locations.
   - E. There are more Availability Zones than AWS Regions.

   <details><summary>Answer</summary>

   Correct answer: B, E

   AWS documentation: [Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)

   </details>

31. What does AWS Shield Standard provide?

   - A. WAF rules
   - B. DDoS protection
   - C. Identity and Access Management (IAM) permissions and access to resources
   - D. Data encryption

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS WAF and Shield](https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html)

   </details>

32. A company wants to build its new application workloads in the AWS Cloud instead of using on-premises resources. <br/> What expense can be reduced using the AWS Cloud?

   - A. The cost of writing custom-built Java or Node .js code
   - B. Penetration testing for security
   - C. hardware required to support new applications
   - D. Writing specific test cases for third-party applications.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

33. What does AWS Marketplace allow users to do? (Choose two.)

   - A. Sell unused Amazon EC2 Spot Instances.
   - B. Sell solutions to other AWS users.
   - C. Buy third-party software that runs on AWS.
   - D. Purchase AWS security and compliance documents.
   - E. Order AWS Snowball.

   <details><summary>Answer</summary>

   Correct answer: B, C

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

34. What does it mean if a user deploys a hybrid cloud architecture on AWS?

   - A. All resources run using on-premises infrastructure.
   - B. Some resources run on-premises and some run in a colocation center.
   - C. All resources run in the AWS Cloud.
   - D. Some resources run on-premises and some run in the AWS Cloud.

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [Overview of AWS services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/amazon-web-services-cloud-platform.html)

   </details>

35. Which AWS service allows users to identify the changes made to a resource over time?

   - A. Amazon Inspector
   - B. AWS Config
   - C. AWS Service Catalog
   - D. AWS IAM

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS Config](https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html)

   </details>

36. How can a company reduce its Total Cost of Ownership (TCO) using AWS?

   - A. By minimizing large capital expenditures
   - B. By having no responsibility for third-party license costs
   - C. By having no operational expenditures
   - D. By having AWS manage applications

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS pricing principles](https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/key-principles.html)

   </details>

37. Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?

   - A. Ensuring network connectivity from AWS to the internet
   - B. Patching and fixing flaws within the AWS Cloud infrastructure
   - C. Ensuring the physical security of cloud data centers
   - D. Ensuring Amazon EBS volumes are backed up

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [AWS shared responsibility model](https://aws.amazon.com/compliance/shared-responsibility-model/)

   </details>

38. What are the advantages of the AWS Cloud? (Choose two.)

   - A. Fixed rate monthly cost
   - B. No need to guess capacity requirements
   - C. Increased speed to market
   - D. Increased upfront capital expenditure
   - E. Physical access to cloud data centers

   <details><summary>Answer</summary>

   Correct answer: B, C

   AWS documentation: [Cloud computing advantages](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html)

   </details>

39. When comparing the total cost of ownership (TCO) of an on-premises infrastructure to a cloud architecture, what costs should be considered? (Choose two.)

   - A. The credit card processing fees for application transactions in the cloud.
   - B. The cost of purchasing and installing server hardware in the on-premises data.
   - C. The cost of administering the infrastructure, including operating system and software installations, patches, backups, and recovering from failures.
   - D. The costs of third-party penetration testing.
   - E. The advertising costs associated with an ongoing enterprise-wide campaign.

   <details><summary>Answer</summary>

   Correct answer: B, C

   AWS documentation: [Overview of AWS services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/amazon-web-services-cloud-platform.html)

   </details>

40. Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?

   - A. Service control policies (SCPs)
   - B. Consolidated billing
   - C. All Upfront Reserved Instances
   - D. AWS Cost Explorer

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [Consolidated billing](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html)

   </details>

41. What is one of the customer's responsibilities according to the AWS shared responsibility model?

   - A. Virtualization infrastructure
   - B. Network infrastructure
   - C. Application security
   - D. Physical security of hardware

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS shared responsibility model](https://aws.amazon.com/compliance/shared-responsibility-model/)

   </details>

42. What helps a company provide a lower latency experience to its users globally?

   - A. Using an AWS Region that is central to all users
   - B. Using a second Availability Zone in the AWS Region that is using used
   - C. Enabling caching in the AWS Region that is being used
   - D. Using edge locations to put content closer to all users

   <details><summary>Answer</summary>

   Correct answer: D

   AWS documentation: [Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)

   </details>

43. How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?

   - A. Users do not have to wait for infrastructure provisioning.
   - B. The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure.
   - C. AWS takes over application configuration management on behalf of users.
   - D. Users do not need to address security and compliance issues.

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS global infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/)

   </details>

44. Which AWS service provides a quick and automated way to create and manage AWS accounts?

   - A. AWS QuickSight
   - B. Amazon Lightsail
   - C. AWS Organizations
   - D. Amazon Connect

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html)

   </details>

45. Which Amazon RDS feature can be used to achieve high availability?

   - A. Multiple Availability Zones
   - B. Amazon Reserved Instances
   - C. Provisioned IOPS storage
   - D. Enhanced monitoring

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS global infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/)

   </details>

46. Where should users report that AWS resources are being used for malicious purposes?

   - A. AWS Abuse team
   - B. AWS Shield
   - C. AWS Support
   - D. AWS Developer Forums

   <details><summary>Answer</summary>

   Correct answer: A

   AWS documentation: [AWS Cloud Practitioner exam domains](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html)

   </details>

47. Which service records management API activity for longer-term audit retention when a trail or event data store is configured?

   - A. AWS CloudTrail
   - B. Amazon Simple Notification Service (Amazon SNS)
   - C. VPC Flow Logs
   - D. AWS CloudHSM

   <details><summary>Answer</summary>

   Correct answer: A

   CloudTrail Event history already provides recent management events; trails and event data stores support configured retention and event selection.

   AWS documentation: [AWS CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html)

   </details>

48. What is an AWS Cloud design best practice?

   - A. Tight coupling of components
   - B. Single point of failure
   - C. High availability
   - D. Overprovisioning of resources

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [AWS Well-Architected reliability](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html)

   </details>

49. Why is AWS more economical than traditional data centers for applications with varying compute workloads?

   - A. Amazon Elastic Compute Cloud (Amazon EC2) costs are billed on a monthly basis.
   - B. Customers retain full administrative access to their Amazon EC2 instances.
   - C. Amazon EC2 instances can be launched on-demand when needed.
   - D. Customers can permanently run enough instances to handle peak workloads.

   <details><summary>Answer</summary>

   Correct answer: C

   AWS documentation: [Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)

   </details>

50. Which AWS service would simplify migration of a database to AWS?

   - A. AWS Storage Gateway
   - B. AWS Database Migration Service (AWS DMS)
   - C. Amazon Elastic Compute Cloud (Amazon EC2)
   - D. Amazon AppStream 2.0

   <details><summary>Answer</summary>

   Correct answer: B

   AWS documentation: [AWS database services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/database.html)

   </details>
