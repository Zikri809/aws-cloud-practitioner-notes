# AWS Skill Builder — Domain 1 Practice

AWS Certified Cloud Practitioner (CLF-C02) — Cloud Concepts

## Assessment results

- Score: 93%
- Attempt: 1
- Correct answers: 14
- Incorrect answers: 1
- Skipped: 0
- Total time: 3 minutes 14 seconds
- Average time per question: 13 seconds

Extracted from the supplied assessment results. AWS wording and explanations are preserved. Navigation and repeated table headings are removed. Reference labels are retained; the paste did not include their URLs.

## Questions, answers, and explanations

### Question 1

**Type:** Multi-Select · **Time:** 14 seconds · **Result:** Correct

What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises?

**Correct answer(s):** D, E

**Your selection(s):** D, E

#### A. AWS patches user applications.

**Correct answer:** No · **Your selection:** Not selected

The application and its patching is the responsibility of the customer according to the AWS shared responsibility model.

Learn more about the AWS shared responsibility model .

#### B. AWS operates the application.

**Correct answer:** No · **Your selection:** Not selected

AWS does not operate user applications. Based on the AWS shared responsibility model, user applications are the responsibility of the user.

Learn more about the AWS shared responsibility model .

#### C. AWS automatically distributes the data globally for higher durability.

**Correct answer:** No · **Your selection:** Not selected

AWS does not automatically move data out of the AWS Region where you have placed it. Some services offer features to accomplish this. However, user data and its distribution is the responsibility of the user.

Learn more about the AWS shared responsibility model .

#### D. AWS can scale resources of changing application demands.

**Correct answer:** Yes · **Your selection:** Selected

By providing an elastic method to provision the right amount of computing resources for your application demand, AWS gives you the ability to focus more on the application and less on its capacity.

Learn more about elasticity and scalability with AWS Cloud computing .

#### E. AWS provides options to architect for high availability.

**Correct answer:** Yes · **Your selection:** Selected

By providing multiple Availability Zones within an AWS Region, AWS provides a highly available infrastructure platform for architecting new applications.

Learn more about high availability with AWS Cloud computing .

### Question 2

**Type:** Multiple Choice · **Time:** 14 seconds · **Result:** Correct

A company is starting its migration to the AWS Cloud. The company wants to use AWS experience and best practices to help ensure its success in moving to the AWS Cloud. The company wants a combination of business-oriented and technical points of view. Which AWS service or guidance will meet these requirements?

**Correct answer(s):** B

**Your selection(s):** B

#### A. AWS Well-Architected Framework

**Correct answer:** No · **Your selection:** Not selected

The Well-Architected Framework helps cloud architects to build secure, efficient, high-performing, and resilient infrastructures on AWS. The Well-Architected Framework is primarily focused on the technical point of view, rather than a combination of technical and business points of view.

Learn more about the Well-Architected Framework .

#### B. AWS Cloud Adoption Framework (AWS CAF)

**Correct answer:** Yes · **Your selection:** Selected

AWS CAF identifies capabilities in six perspectives that support successful transitions to the AWS Cloud. The six perspectives include business, people, governance, platform, security, and operations.

Learn more about AWS CAF .

#### C. AWS Control Tower

**Correct answer:** No · **Your selection:** Not selected

AWS Control Tower would help the company set up and govern an AWS multi-account environment that follows AWS best practices. However, AWS Control Tower does not provide guidance on moving to the AWS Cloud.

Learn more about AWS Control Tower .

#### D. AWS Trusted Advisor

**Correct answer:** No · **Your selection:** Not selected

Trusted Advisor inspects an AWS environment and makes recommendations about improvements and changes that can be made. The recommendations can help to increase security, reduce costs, and improve system performance and availability. However, Trusted Advisor does not provide guidance on how to move to the AWS Cloud.

Learn more about Trusted Advisor .

### Question 3

**Type:** Multiple Choice · **Time:** 20 seconds · **Result:** Correct

A company has an application that has dependencies between its underlying components. When one component fails, the entire application fails. Which AWS Cloud design principle should be applied to address the current weakness of the application?

**Correct answer(s):** B

**Your selection(s):** B

#### A. Enable several Amazon EC2 instances to run in parallel to achieve better performance

**Correct answer:** No · **Your selection:** Not selected

Although running instances in parallel can increase performance, the question describes a monolithic application. The principle that makes this application more resilient and flexible is the decoupling of the application.

#### B. Decouple components by isolating them and ensuring that individual components can function when other components fail

**Correct answer:** Yes · **Your selection:** Selected

You can decouple an application into component applications, or microservices, to isolate parts of the application. A failure in a component does not cause a failure of the entire application. This solution also presents opportunities to scale the subcomponents independently.

Learn more about how to decouple an application .

#### C. Double Amazon EC2 computing resources to increase system fault tolerance

**Correct answer:** No · **Your selection:** Not selected

Doubling computing resources will only affect fault tolerance if the application is already preserving the state of transactions that are being processed. The principle that makes this application more resilient and flexible is the decoupling of the application.

Learn more about how to decouple an application .

#### D. Implement elasticity, which enables the application to scale up or scale down as demand changes

**Correct answer:** No · **Your selection:** Not selected

Elasticity is the ability to acquire resources as you need them and release resources when you no longer need them. In the cloud, you want to perform this process automatically. However, the question describes an application that will benefit from decoupling. Be aware that the two can be related. When an application has been decoupled, each component benefits from elastic scaling.

Learn more about elasticity .

Learn more about how to decouple an application .

### Question 4

**Type:** Multiple Choice · **Time:** 12 seconds · **Result:** Correct

A company wants help to design a new cloud content-management application using AWS best practices. Which service or tool should provide guidance?

**Correct answer(s):** B

**Your selection(s):** B

#### A. AWS Schema Conversion Tool

**Correct answer:** No · **Your selection:** Not selected

AWS Schema Conversion Tool (AWS SCT) is used to convert an existing database schema from one database engine to another. AWS SCT does not assist with best practices in architecture design.

Learn more about AWS SCT .

#### B. AWS Well-Architected Tool

**Correct answer:** Yes · **Your selection:** Selected

AWS WA Tool is used to improve your architecture using AWS best practices. The AWS WA Tool can provide guidance on architecture design for a new application.

Learn more about the AWS WA Tool .

#### C. Amazon Inspector

**Correct answer:** No · **Your selection:** Not selected

You can use Amazon Inspector to scan workloads for software vulnerabilities and unintended network exposure. Amazon Inspector does not provide guidance on architecture design.

Learn more about Amazon Inspector .

#### D. AWS AppSync

**Correct answer:** No · **Your selection:** Not selected

AWS AppSync is a fully managed GraphQL service that is used to connect applications to data sources. AWS AppSync is not for architectural advice.

Learn more about AWS AppSync .

### Question 5

**Type:** Multiple Choice · **Time:** 11 seconds · **Result:** Correct

Which on-premises expense will be eliminated if the company migrates their entire application to Amazon EC2?

**Correct answer(s):** B

**Your selection(s):** B

#### A. Costs of transferring data to the internet

**Correct answer:** No · **Your selection:** Not selected

Data transfer for EC2 instances to the internet is charged separately.

Learn more about EC2 pricing .

#### B. Server hardware costs

**Correct answer:** Yes · **Your selection:** Selected

Server hardware costs are included in EC2 instance costs.

Learn more about EC2 pricing .

#### C. Licensing costs

**Correct answer:** No · **Your selection:** Not selected

You have the option to bring your own licenses into AWS, but you still need to pay for the licensing costs.

Learn more about AWS License Manager .

#### D. Storage backup costs

**Correct answer:** No · **Your selection:** Not selected

Backups from EC2 instances and their Amazon Elastic Block Store (Amazon EBS) snapshots to Amazon S3 are charged separately.

Learn more about Amazon EBS snapshots costs .

### Question 6

**Type:** Multi-Select · **Time:** 10 seconds · **Result:** Correct

What are valid AWS Cloud Adoption Framework (AWS CAF) perspectives?

**Correct answer(s):** B, C

**Your selection(s):** B, C

#### A. Cost optimization

**Correct answer:** No · **Your selection:** Not selected

The cost optimization pillar is part of the AWS Well-Architected Framework and is not a perspective of AWS CAF.

Learn more about the cost optimization pillar .

#### B. Governance

**Correct answer:** Yes · **Your selection:** Selected

The governance perspective is one of the six AWS CAF perspectives.

Learn more about the governance perspective .

#### C. Platform

**Correct answer:** Yes · **Your selection:** Selected

The platform perspective is one of the six AWS CAF perspectives.

Learn more about the platform perspective .

#### D. Performance efficiency

**Correct answer:** No · **Your selection:** Not selected

The performance efficiency pillar is part of the AWS Well-Architected Framework and is not a perspective of AWS CAF.

Learn more about the performance efficiency pillar .

#### E. Sustainability

**Correct answer:** No · **Your selection:** Not selected

The sustainability pillar is part of the AWS Well-Architected Framework and is not a perspective of AWS CAF.

Learn more about the sustainability pillar .

### Question 7

**Type:** Multiple Choice · **Time:** 34 seconds · **Result:** Correct

A company that operates in the AWS Cloud wants to test workloads and team responses to simulated events. The company will conduct an exercise to identify potential issues that need to be addressed. Which design principle of the AWS Well-Architected Framework does this exercise represent?

**Correct answer(s):** C

**Your selection(s):** C

#### A. Measure overall cost efficiency.

**Correct answer:** No · **Your selection:** Not selected

To measure overall cost efficiency is a principle of the cost optimization pillar of the Well-Architected Framework. To measure cost efficiency, you should ensure that your workloads get the best output at the lowest cost.

Learn more about the principles of the cost optimization pillar .

#### B. Automatically recover from failure.

**Correct answer:** No · **Your selection:** Not selected

Automatic recovery from failure is a principle of the reliability pillar of the Well-Architected Framework. To automatically recover from failure, you should configure automated processes that can detect and repair failures.

Learn more about the principles of the reliability pillar .

#### C. Anticipate failure.

**Correct answer:** Yes · **Your selection:** Selected

Anticipate failure is a principle of the operational excellence pillar of the Well-Architected Framework. To anticipate failure, you can perform test exercises to identify potential sources of failure.

Learn more about the principles of the operational excellence pillar .

#### D. Implement loosely coupled dependencies.

**Correct answer:** No · **Your selection:** Not selected

Loose coupling is the practice of removal or reduction of direct dependencies between various resources in your AWS Cloud architecture. Loose coupling is a best practice in architecture design.

Learn more about loose coupling .

### Question 8

**Type:** Multiple Choice · **Time:** 10 seconds · **Result:** Correct

Which concept in the AWS Cloud value proposition is an example of the ability to horizontally scale Amazon EC2 instances based on demand?

**Correct answer(s):** A

**Your selection(s):** A

#### A. Elasticity

**Correct answer:** Yes · **Your selection:** Selected

Elasticity is the ability to scale your infrastructure based on changes in user demand.

Learn more about elasticity .

#### B. High availability

**Correct answer:** No · **Your selection:** Not selected

High availability is the ability to provide redundancy in your architecture. High availability mitigates single points of failure. With high availability, your solution is more resilient to outages. High availability does not relate to horizontal scaling.

Learn more about high availability .

#### C. Agility

**Correct answer:** No · **Your selection:** Not selected

Agility is the ability to add or to remove new or existing services quickly. Agility does not relate to horizontal scaling.

Learn more about agility .

#### D. Economies of scale

**Correct answer:** No · **Your selection:** Not selected

Economies of scale provide AWS with buying power. With economies of scale, AWS can provide services at a lower cost to the customer. However, economies of scale does not relate to horizontal scaling.

Learn more about economies of scale .

### Question 9

**Type:** Multi-Select · **Time:** 15 seconds · **Result:** Incorrect

A company needs to move an on-premises IBM Db2 database to the AWS Cloud. The company wants to convert the database to a fully managed Amazon Aurora database. Which AWS services or features can the company use to analyze, synchronize, deploy, and monitor the conversion of the database?

**Correct answer(s):** B, C

**Your selection(s):** C, D

#### A. Amazon S3 File Gateway

**Correct answer:** No · **Your selection:** Not selected

S3 File Gateway connects on-premises software appliances to AWS Cloud storage so that you can store and retrieve objects in Amazon S3.

Learn more about S3 File Gateway .

#### B. AWS Schema Conversion Tool (AWS SCT)

**Correct answer:** Yes · **Your selection:** Not selected

You can use AWS SCT to convert an existing database schema from one database engine to another.

Learn more about AWS SCT .

#### C. AWS Database Migration Service (AWS DMS)

**Correct answer:** Yes · **Your selection:** Selected

You can use AWS DMS to migrate databases between sources, including between on premises and the cloud.

Learn more about AWS DMS .

#### D. AWS Application Migration Service (AWS MGN)

**Correct answer:** No · **Your selection:** Selected

AWS MGN is used for lift-and-shift migration of servers and applications to AWS. AWS MGN can help migrate entire servers that contain databases, but does not provide the database-specific capabilities needed to convert an IBM Db2 database schema to Amazon Aurora or manage the database migration process. AWS MGN focuses on server replication and cutover automation rather than database schema conversion and data synchronization.

Learn more about AWS MGN .

#### E. AWS Direct Connect

**Correct answer:** No · **Your selection:** Not selected

Direct Connect is a network connection from your on-premises data center to the cloud. You can use Direct Connect to move data. However, Direct Connect does not provide the database schema management that is required in the scenario.

Learn more about Direct Connect .

### Question 10

**Type:** Multiple Choice · **Time:** 5 seconds · **Result:** Correct

What is a benefit of using the AWS Cloud?

**Correct answer(s):** B

**Your selection(s):** B

#### A. Automatically achieve 100% uptime

**Correct answer:** No · **Your selection:** Not selected

AWS Cloud computing can improve overall system uptime through redundancy, fault tolerance, and load balancing. AWS Cloud offers 99.999% or higher availability and reliability of many services. However, automatically achieving 100% uptime is not guaranteed.

#### B. Trade fixed expenses for variable expenses

**Correct answer:** Yes · **Your selection:** Selected

Trading fixed expenses for variable expenses is one of the key benefits of AWS Cloud computing. Cloud computing gives companies the ability to shift from large upfront investments in hardware and infrastructure to a more flexible cost model where expenses vary based on the actual usage. This cost model gives you the ability to scale resources up or down as needed, which optimizes costs and avoids the responsibility to maintain and upgrade on-premises infrastructure.

Learn more about the advantages of AWS Cloud computing .

#### C. Gain unlimited processing power

**Correct answer:** No · **Your selection:** Not selected

AWS Cloud computing provides the ability to scale resources based on demand. This scalability is a benefit of cloud computing. However, this benefit is not a guarantee of unlimited processing power.

#### D. Eliminate the need for backups

**Correct answer:** No · **Your selection:** Not selected

AWS Cloud computing provides data redundancy and backup capabilities. However, AWS Cloud computing does not eliminate the need for backups altogether. It is still crucial for individuals and companies to establish proper backup strategies. Backup strategies will help to protect against data loss, accidental deletions, and other unforeseen events. Backups are an essential part of a comprehensive data protection plan.

### Question 11

**Type:** Multiple Choice · **Time:** 11 seconds · **Result:** Correct

A company has on-premises compute resources that are fully utilized at the end of each month. However, during the remainder of the month, those resources are underutilized. Which AWS Cloud benefit would BEST address this issue?

**Correct answer(s):** D

**Your selection(s):** D

#### A. High availability

**Correct answer:** No · **Your selection:** Not selected

High availability focuses on ensuring that your resources are available when needed. It does not focus directly on resource utilization.

Learn more about high availability in the AWS cloud .

#### B. Security

**Correct answer:** No · **Your selection:** Not selected

Although security is always a prime consideration, it is unrelated to having underutilized resources. Managing resources is more related to elasticity.

Learn more about security in the AWS cloud .

#### C. Loose coupling

**Correct answer:** No · **Your selection:** Not selected

Loose coupling, or decoupling, refers to the design principle of separating resources in the design architecture. Decoupling your architecture prevents your entire system from failing if one component fails. Loose coupling is unrelated to having underutilized on-premises resources.

Learn more about loose coupling .

#### D. Elasticity

**Correct answer:** Yes · **Your selection:** Selected

The AWS Cloud gives you the ability to stop planning capacity and let it automatically scale up when needed and scale down as demand goes down. This elasticity could stop you from having underutilized resources.

Learn more about how elasticity can help optimize underutilized on-premises resources .

### Question 12

**Type:** Multiple Choice · **Time:** 12 seconds · **Result:** Correct

A company wants to migrate its application to AWS. The company wants to replace upfront expenses with variable payment that is based on usage. What should the company do to meet these requirements?

**Correct answer(s):** D

**Your selection(s):** D

#### A. Purchase Reserved Instances.

**Correct answer:** No · **Your selection:** Not selected

Reserved Instance pricing is available with no upfront payments. However, the pricing is a fixed model based on the reserved capacity. Reserved Instance pricing is not variable based on usage.

Learn more about Reserved Instance pricing .

#### B. Pay less by using more.

**Correct answer:** No · **Your selection:** Not selected

AWS pricing might decrease on a per-unit basis as you use more resources. However, this solution does not address the requirement for no upfront payments.

Learn more about AWS pricing .

#### C. Rightsize instances.

**Correct answer:** No · **Your selection:** Not selected

To rightsize might reduce costs. However, this solution does not address the requirement for no upfront payments.

Learn more about AWS pricing .

Learn more about rightsizing instances .

#### D. Use pay-as-you-go pricing.

**Correct answer:** Yes · **Your selection:** Selected

AWS offers pay-as-you-go pricing for more than 200 cloud services. Pay-as-you-go pricing requires no upfront payments, and you only pay for what you use.

Learn more about AWS pricing .

### Question 13

**Type:** Multiple Choice · **Time:** 10 seconds · **Result:** Correct

Which pillar of the AWS Well-Architected Framework has the design principle "perform operations as code"?

**Correct answer(s):** C

**Your selection(s):** C

#### A. Security

**Correct answer:** No · **Your selection:** Not selected

The principle to perform operations as code is not a design principle of the security pillar.

Learn more about the security pillar .

#### B. Performance efficiency

**Correct answer:** No · **Your selection:** Not selected

The principle to perform operations as code is not a design principle of the performance efficiency pillar.

Learn more about the performance efficiency pillar .

#### C. Operational excellence

**Correct answer:** Yes · **Your selection:** Selected

The principle to perform operations as code is a design principle of the operational excellence pillar. By performing operations as code, you limit human error and enable consistent responses to events.

Learn more about the operational excellence pillar .

#### D. Reliability

**Correct answer:** No · **Your selection:** Not selected

The principle to perform operations as code is not a design principle of the reliability pillar.

Learn more about the reliability pillar .

### Question 14

**Type:** Multiple Choice · **Time:** 8 seconds · **Result:** Correct

A user wants the ability to easily scale compute resources in and out, while only paying for the resources used. Which benefit of the AWS Cloud should the user take advantage of?

**Correct answer(s):** D

**Your selection(s):** D

#### A. Durability

**Correct answer:** No · **Your selection:** Not selected

Durability is the ability of a system to remain functional when faced with the challenges of normal operation over its lifetime. Durability is not related to the ability to scale compute resources based on usage.

Learn more about durability .

#### B. High availability

**Correct answer:** No · **Your selection:** Not selected

High availability refers to a system or component that is continuously operational. High availability is not related to the ability to scale compute resources based on usage.

Learn more about high availability .

#### C. Fault tolerance

**Correct answer:** No · **Your selection:** Not selected

Fault tolerance is the property that gives a system the ability to continue operating properly in the event of the failure. Fault tolerance is not related to the ability to scale compute resources based on usage.

Learn more about fault tolerance .

#### D. Elasticity

**Correct answer:** Yes · **Your selection:** Selected

In the AWS Cloud, compute resources are elastic, which means that they can quickly scale to match the requirements of a specific application. Elasticity gives you the ability to match the supply of resources to demand, which gives you the ability to scale compute resources based on demand.

Learn more about elasticity .

### Question 15

**Type:** Multiple Choice · **Time:** 8 seconds · **Result:** Correct

Which of the following is an advantage of AWS Cloud computing?

**Correct answer(s):** D

**Your selection(s):** D

#### A. Trade operational excellence for agility.

**Correct answer:** No · **Your selection:** Not selected

Agility and designing for operational excellence are both advantages of the AWS Cloud. You would not trade an advantage of operational excellence for an agility advantage.

Learn more about operational excellence .

Learn more about the advantages of cloud computing .

#### B. Trade elasticity for performance.

**Correct answer:** No · **Your selection:** Not selected

Performance and elasticity are both advantages of the AWS Cloud. You would not trade an elasticity advantage for a performance advantage.

Learn more about elasticity .

Learn more about performance efficiency .

#### C. Trade security for elasticity.

**Correct answer:** No · **Your selection:** Not selected

Elasticity and security are both advantages of the AWS Cloud. You would not trade a security advantage for an elasticity advantage.

Learn more about elasticity .

Learn more about the advantages of cloud computing .

#### D. Trade fixed expenses for variable expenses.

**Correct answer:** Yes · **Your selection:** Selected

An advantage of the AWS Cloud is to trade fixed expenses for variable expenses. With the AWS Cloud, you only pay for what you use. Therefore, you can move away from fixed expenses. With fixed expenses, you pay upfront, regardless of whether you use the full capacity. For example, to maintain your own data centers and servers would be a fixed expense.

Learn more about the advantages of cloud computing .
