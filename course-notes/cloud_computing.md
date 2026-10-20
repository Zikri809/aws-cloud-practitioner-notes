# Cloud Computing

Work through the explanations, examples, and service comparisons below. Use the [reference notes](#reference-notes) for revision, or follow the [exam-task reading path](/study-guide#detailed-reading-by-exam-task) to study in syllabus order.

## Exam task 1.1: Cloud benefits

### Start with the client-server model

A client sends a request. A server processes it and returns a response, subject to the application's permissions and rules. A web browser requesting a product page is a client; the application serving that page acts as the server.

The course uses a coffee shop: the customer requests a drink, the barista validates the order and payment, then returns the drink. The useful idea is the request-and-response relationship. The shop's staffing also illustrates adjusting resources to demand.

Do not assume every application uses one client and one server. Real applications can involve several services, databases, and storage systems. Also, the client-server model exists both on premises and in the cloud. A server becomes a cloud resource because of how it is provided and operated, not simply because it answers requests.

For this exam, recognize Amazon EC2 as virtual compute capacity and Amazon S3 as object storage. The module also mentions Amazon SQS in AWS's history. Detailed configuration and historical launch dates are lower priorities than identifying business benefits and responsibilities.

*Adapted study material; [Module 1, section 2 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/Bz4gC/welcome-to-aws-cloud-practitioner-essentials).*

### What cloud computing means

AWS describes cloud computing through four connected ideas:

| Idea | Plain explanation | Business consequence |
|---|---|---|
| Resources when needed | Provision resources without first buying and installing hardware | Start quickly and adjust capacity |
| IT resources | Compute, storage, databases, networking, and other technology services | Assemble an application from services |
| Remote delivery | Access services through network connections, commonly the internet | Work with infrastructure outside your building |
| Usage-based pricing | Pay according to the service's consumption and pricing model | Replace much of the initial infrastructure investment with ongoing costs |

Suppose a small business needs a temporary test environment. Traditionally, purchasing hardware might delay the experiment and leave equipment unused afterward. With AWS, the team can provision resources, test its idea, and remove resources it no longer needs. The value combines speed, flexibility, and reduced idle capacity.

**Exam extension:** The introductory internet definition does not mean all workloads must expose data publicly or use only public internet connections. AWS also supports private connectivity. Study the detailed networking choices in the networking module.

The cloud still runs on physical infrastructure. AWS takes responsibility for operating that underlying infrastructure; the customer still makes choices about applications, data, access, configuration, and costs.

*Adapted study material; [Module 1, section 3 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/Bz4gC/welcome-to-aws-cloud-practitioner-essentials).*

### The six benefits and how exam scenarios describe them

#### 4.1 Trade fixed expense for variable expense

An organization building a data center must plan for buildings or space, servers, power, cooling, personnel, and maintenance. Much of that cost exists even when the equipment is underused. Cloud consumption allows the business to start smaller and increase spending as its requirements grow.

The exam commonly expresses this as moving from capital investment toward operating expenditure. The useful distinction is buying capacity ahead of demand versus consuming resources as needed. This is a conceptual comparison, not a claim that every cloud bill has the same accounting treatment.

Scenario clue: a startup wants to launch without buying servers. Choose the benefit concerning reduced upfront investment and variable expense.

#### 4.2 Benefit from massive economies of scale

AWS aggregates demand across many customers and purchases infrastructure at a large scale. That scale can reduce unit costs and support lower prices for customers.

Scenario clue: the question emphasizes the provider's purchasing power or aggregated usage. Choose economies of scale. It describes the provider's scale, while elasticity describes matching an individual workload's resources to demand.

#### 4.3 Stop guessing capacity

Buying too much capacity wastes money. Buying too little can produce delays, poor performance, or failed requests. Cloud resources can be adjusted as actual demand changes.

**Exam extension:** Scalability is the ability to handle changing workloads by changing capacity. Elasticity emphasizes expanding and contracting capacity to match demand, often through automation. Rightsizing means selecting a suitable resource size or type for a workload. These concepts work together but answer different questions.

Scenario clue: a retailer needs more resources during a sale and fewer afterward. Choose elasticity. A team replacing an oversized resource with one that fits its measured usage is rightsizing.

Cloud capacity is not literally unlimited. Quotas, regional availability, and service constraints still matter. The benefit is avoiding much of the long procurement cycle, while planning and monitoring remain necessary.

#### 4.4 Increase speed and agility

Teams can create environments quickly, test ideas, and remove unsuccessful experiments. Faster provisioning shortens the time between having an idea and evaluating it.

Scenario clue: developers want to try several approaches without waiting weeks for hardware. Choose agility. A question about continuously matching capacity to customer traffic instead points to elasticity.

#### 4.5 Stop spending money running and maintaining data centers

AWS runs the facilities and underlying hardware. Customers can direct more effort toward their applications and customers rather than maintaining racks, power systems, and cooling.

This does not eliminate every operational task. An EC2 customer still manages the guest operating system and installed applications. The service chosen determines how much operational work AWS handles.

Scenario clue: a company wants its staff to spend less time replacing physical servers. Choose reducing data center operation and maintenance.

#### 4.6 Go global in minutes

Customers can deploy into existing AWS Regions instead of first constructing overseas infrastructure. Hosting an application closer to its users can reduce network latency.

Scenario clue: a company wants to serve customers on another continent quickly. Choose global reach. If the problem is surviving a failure within the existing location, availability and redundancy are more directly relevant.

#### A cost example with no invented AWS prices

Imagine a workload requires two equal-sized compute resources for 20 hours, then six resources for four hours. Buying for peak demand means supplying six resources for all 24 hours: 144 resource-hours of capacity. Matching the stated demand uses 64 resource-hours: `(2 × 20) + (6 × 4)`.

This illustrates reducing unused capacity. It does not estimate an AWS bill. Actual charges depend on resource type, pricing model, storage, network use, and other services. Savings require suitable design and management.

*Adapted study material; [Module 1, section 4 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/Bz4gC/welcome-to-aws-cloud-practitioner-essentials).*

### Availability, fault tolerance, and latency

High availability means keeping a service accessible with minimal downtime. Redundant components and failover can help achieve it. Fault tolerance means continuing to operate through specified failures, with little or no interruption. The exact protection depends on the failures the design can handle.

The course describes fault tolerance in terms of withstanding multiple component failures. A more useful exam distinction is continued operation during failure versus minimizing downtime through recovery or failover. Do not define the terms solely by counting failed components.

Latency is delay, such as the time for a user request to travel to the application and for a response to return. Moving closer to users can reduce the network portion of that delay. A low-latency application can still be unavailable during a failure; performance and availability address different needs.

In the coffee shop analogy, another working branch lets customers continue buying coffee when one branch closes. In a cloud application, redundancy can play a similar role, provided the application can route requests and access the data it needs.

*Adapted study material; [Module 1, section 7 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/Bz4gC/welcome-to-aws-cloud-practitioner-essentials).*

### Distinguish availability, agility, and elasticity

| Concept | Question it answers | Example |
|---|---|---|
| High availability | How can the service remain accessible with minimal downtime? | Redundant application capacity across AZs |
| Agility | How quickly can the team implement or change an approach? | Create a new deployment from an existing definition |
| Elasticity | How can capacity adjust to changing demand? | Add and remove compute as traffic changes |
| Low latency | How quickly can a request receive a response? | Serve suitable content near the user |

The reading initially describes high availability as operating continuously without failing. The more useful definition is minimizing downtime through suitable design; individual components can still fail. Having AWS locations available does not automatically configure an application for all of these benefits.

*Adapted study material; [Module 4, section 4 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/ZYOJJ/introduction-to-going-global).*

### Exam requirements and service choices

#### Connect each cloud benefit to an AWS capability

For Task 1.1, explain the business benefit first and then identify a capability that enables it. Buying an AWS service does not automatically deliver the benefit: scaling policies, deployment choices, and application design still matter.

| Requirement | Related AWS services or features | Why the connection matters |
|---|---|---|
| Handle demand that rises and falls | Amazon EC2 Auto Scaling; AWS Lambda | Scaling adjusts capacity; Lambda handles eligible event-driven work without managing servers |
| Keep serving through an infrastructure failure | Multiple Availability Zones; Elastic Load Balancing; Amazon RDS Multi-AZ | Redundancy and failover reduce dependence on a single location or component |
| Launch environments quickly | AWS CloudFormation; AWS Elastic Beanstalk | Repeatable infrastructure and managed application deployment reduce manual setup |
| Reach distant customers | AWS Regions; Amazon CloudFront; Amazon Route 53 | Regions place workloads geographically; CloudFront delivers suitable content near users; DNS routes requests |
| Reduce undifferentiated maintenance | Amazon RDS; Amazon DynamoDB; AWS Fargate | AWS operates more of the infrastructure, leaving customers to focus on data and applications |
| Align resource consumption with demand | On-Demand usage; Auto Scaling; S3 Lifecycle | Flexible usage and retention can reduce idle capacity and unnecessary storage |

Elastic Load Balancing distributes traffic; it does not create replacement servers. Auto Scaling adjusts the instance fleet; it does not replace DNS, backups, or application health design. Likewise, moving content into CloudFront can improve delivery latency without moving the application's database into every edge location.

**Worked choice:** A shop's traffic spikes every evening. The requirement is to add capacity during the spike and remove it afterward. Elasticity is the benefit; EC2 Auto Scaling is a relevant mechanism. If the question instead emphasizes launching a new test environment in minutes, agility is the deciding concept, with CloudFormation as a relevant enabler. Both examples use automation, but they solve different business problems.

**Check yourself:** Does a second AZ automatically make every part of an application highly available? No. Application instances, traffic distribution, data access, and failover must all support the intended failure scenario. Does a commitment discount create elasticity? No. It changes pricing for eligible usage, not application capacity.

Sources: [AWS cloud benefits](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html), [EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html), and the detailed compute, infrastructure, and network chapters in this pack.

### Before continuing

Explain economies of scale, reduced upfront investment, and avoiding capacity guesswork. Explain agility, elasticity, availability, and global reach in one sentence each.

Explain the main concepts aloud and compare the services with similar purposes. Return to the relevant section whenever you cannot justify the distinction.

## Exam task 1.4: Cloud economics

### Three pricing principles

The course introduces **pay as you go**, **save when you commit**, and **pay less per unit at eligible higher volumes**. These describe different pricing mechanisms rather than a promise that all services have identical billing.

| Principle | Meaning | Good scenario clue |
|---|---|---|
| Pay as you go | Pay for measured/provisioned resources under the service's rules | Variable workload or uncertain demand |
| Save when you commit | Exchange a defined commitment for eligible discounts | Predictable baseline usage |
| Volume pricing | Eligible usage tiers reduce the marginal/per-unit rate | Larger eligible aggregate consumption |

“Pay only for what you use” can include **provisioned capacity**, idle running resources, or retained storage. It does not mean AWS charges only when a human is actively using the application. Discounts also do not make additional unnecessary consumption free. A lower per-GB rate can accompany a higher total bill.

**Exam extension:** Savings Plans generally involve an eligible hourly spending commitment for one or three years. Reserved Instances provide discounts under their service/type terms; do not assume every RI is the same as a capacity reservation. Spot uses spare EC2 capacity and can be interrupted. A steady baseline may suit a commitment, while flexible retryable work may suit Spot. Avoid buying a large commitment before rightsizing the workload.

*Adapted study material; [Module 11, section 1 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/jHvBw/introduction-to-pricing-and-support).*

### Managed services and customer responsibility

Running a database on EC2 gives the customer extensive control and operational responsibility: install the engine, maintain the operating system, plan patching, configure backups, and build availability. RDS removes much of that infrastructure work. DynamoDB removes server and database-instance management as well.

Managed does not mean that AWS chooses the data model or secures every application decision. Customers still control their data, access permissions, credentials, application behavior, schema or key design, and applicable configuration. They choose protection settings and retention suitable for their requirements, monitor usage, and test recovery. Features and divisions of responsibility vary by service.

**Exam extension:** A question asking to reduce database administration usually points toward a managed service. A requirement for unusual operating-system access or a database engine feature unavailable in the managed offering may favor a self-managed deployment. Do not assume that every RDS database can be administered as if you owned its underlying server.

*Adapted study material; [Module 7, section 2 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/sn11y/introduction-to-databases).*

### Reconstructing the optimization architecture

The course discusses an application using EC2, a load balancer/scaling, RDS, S3, and VPC networking. No AWS resources, subscriptions, or purchase commitments were created while preparing these notes.

#### EC2 and compute

1. Measure utilization and workload needs; use Compute Optimizer recommendations where appropriate.
2. Rightsize based on performance and reliability, not CPU averages alone.
3. Use configured Auto Scaling to add/remove eligible capacity as demand changes. Minimum capacity and policies matter; an idle workload is not automatically scaled to zero.
4. Consider Spot for interruption-tolerant, retryable workloads. “Up to 90%” is a maximum comparison, not a guaranteed saving or capacity supply.
5. Review idle resources and retained storage. Confirm ownership and recovery needs before removing volumes or snapshots.

A load balancer improves distribution and supports scaling designs, but it also has costs. It does not by itself reduce the number of running instances or ensure every application is cheap.

#### RDS and caching

The video's “spin up RDS, and it scales up and down” is too broad. Ordinary RDS DB instance compute sizing is not automatic bidirectional demand scaling. **RDS storage autoscaling** can increase allocated storage up to a configured limit; it does not shrink that allocated storage when demand falls. [RDS storage autoscaling](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.Autoscaling.html).

Read replicas can offload supported reads, and ElastiCache can reduce repeated database retrievals. Both add resources and charges; they save money only if their overall effect and requirements justify those costs. Neither automatically handles primary write scaling, nor replaces all availability and recovery features.

#### S3 and retention

Choose classes using access frequency, retrieval needs, minimum durations, and availability requirements. Intelligent-Tiering suits unknown/changing access patterns, subject to its fees and behavior. Glacier Deep Archive fits rarely accessed data that can tolerate long retrieval times.

Compression can reduce stored bytes but adds processing and can affect how applications access data. A Lambda compression workflow requires configuration and care to avoid unintended repeated processing. Lifecycle rules can transition or expire appropriate objects and versions; current versions, noncurrent versions, delete markers, and retention protections need separate consideration.

The example of retaining only 30 days instead of ten years illustrates matching retention to a real requirement. It is not authorization to delete historical data just because a shorter retention would be cheaper.

#### Network path

Review cross-AZ, cross-Region, internet, and NAT processing costs without removing resilience required by the workload. Consolidating everything into one AZ can lower some traffic charges while weakening availability.

For supported same-Region S3 access, a **gateway endpoint** can avoid a NAT path and its applicable processing charges; gateway endpoints have no additional endpoint charge. Interface endpoints have different pricing. An endpoint does not erase ordinary cross-Region transfer charges or make every architecture cheaper. The video's “especially out-of-Region” statement is therefore too broad for the S3 gateway-endpoint example. [Gateway endpoints](https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html).

*Adapted study material; [Module 11, section 7 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/jHvBw/introduction-to-pricing-and-support).*

### Free Tier and planning context

**Exam extension:** Free Tier offers are eligibility- and time/usage-dependent, not a general promise that learning resources are free. Current AWS material describes new-customer credits and Free/Paid plans, with conditions and a limited Free-plan period. Older accounts and service offers can differ. Verify the account's actual offer rather than applying a recorded lesson's Free Tier assumptions. [Current Free Tier](https://aws.amazon.com/free/).

A cost estimate should include the workload's lifecycle: deployment, idle periods, growth, backups, retention, transfer, support, and shutdown. For a migration comparison, total cost also includes administration, licensing, facilities, staff effort, and transition work;not only EC2 price versus server purchase price.

*Adapted study material; [Module 11, section 8 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/jHvBw/introduction-to-pricing-and-support).*

### Exam requirements and service choices

#### Compare total cost and licensing explicitly

This task requires more than choosing a cheap instance. Total cost of ownership includes the costs of acquiring, running, protecting, and supporting a workload over its lifetime.

| On-premises cost | Cloud comparison to evaluate |
|---|---|
| Servers, storage, buildings, and installation | Provisioned or consumed compute/storage rather than a new physical purchase |
| Power, cooling, physical security, and hardware replacement | Included in the provider's infrastructure operation; still reflected economically in service charges |
| OS/database administration and patching | Customer work on EC2; more AWS-managed work with services such as RDS |
| Idle peak capacity | Rightsizing, scheduling, and demand-based scaling can reduce unused resources |
| Software licenses and support | License-included or eligible BYOL terms; software and support charges remain relevant |
| Migration and change work | Data movement, staff training, parallel operation, testing, and transition effort |

Fixed and variable costs describe how expenditure behaves; capital and operating expenditure describe accounting treatment. Exam scenarios often connect buying equipment upfront with capital expense and usage-based service charges with operating expense. Avoid assuming that every contract or accounting decision follows one universal treatment.

**Bring Your Own License (BYOL)** reuses an existing eligible software entitlement under its vendor's terms. **License included** bundles eligible licensing into the selected offering's price. BYOL is not permission to move any license to any shared host. Host/socket/core licensing constraints can make **EC2 Dedicated Hosts** relevant. **Dedicated Instances** isolate tenancy but do not provide equivalent host-level placement and licensing visibility. **AWS License Manager** helps track and manage licensing rules; it does not supply rights the vendor did not grant.

#### Tools that change the economics

| Tool or feature | Role in the decision | Limit |
|---|---|---|
| Migration Evaluator | Build a migration business case | An assessment does not perform the migration |
| AWS Pricing Calculator | Estimate a proposed AWS design | Inputs and assumptions determine the estimate |
| AWS Compute Optimizer | Recommend suitable supported resources from utilization | Validate performance requirements before resizing |
| AWS Cost Explorer | Understand actual usage and spending patterns | It analyzes billing information rather than benchmarking application performance |
| CloudFormation and Systems Manager Automation | Reduce repeated manual provisioning/operations work | Automation needs maintained definitions and appropriate permissions |
| Auto Scaling and scheduling | Reduce excess active capacity | Scaling limits and minimum capacity still matter |

Rightsizing changes the resource type or size to meet measured requirements. A reservation changes the price for eligible usage. Automation changes how work is carried out. Economies of scale concern the provider's aggregated purchasing/operating scale, while eligible volume tiers concern the customer's pricing schedule. These mechanisms can work together, but are not synonyms.

**Worked choice:** A test server is oversized and runs through weekends without users. First measure requirements, resize appropriately, and schedule unnecessary runtime off. Buying a large long-term commitment first could lock in waste. Compare retained disks, licenses, and restart needs before estimating the saving.

**Check yourself:** If RDS costs more per hour than a bare EC2 instance, must it have higher total cost? No. Include database administration, backup/availability operations, licensing, and required staffing. Managed services reduce selected duties, not every customer responsibility.

Sources: [Cloud economics](https://aws.amazon.com/economics/), [License Manager](https://docs.aws.amazon.com/license-manager/latest/userguide/license-manager.html), [Dedicated Hosts](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html), and [Compute Optimizer](https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is-compute-optimizer.html).

### Before continuing

Explain fixed versus variable expense, total cost of ownership, economies of scale, rightsizing, automation, and licensing. A lower unit price does not guarantee a lower total bill.

Explain the main concepts aloud and compare the services with similar purposes. Return to the relevant section whenever you cannot justify the distinction.

## Exam task 2.1: Shared responsibility

### Shared responsibility: decide who controls the layer

AWS protects the underlying cloud infrastructure. Customers protect their workloads and the way they use AWS services. The service determines the boundary.

| Task or layer | Typical responsibility |
|---|---|
| Physical data center access, power, cooling, hardware | AWS |
| Underlying host infrastructure and virtualization | AWS |
| Customer data classification and permissions | Customer |
| Guest OS updates and installed application security on EC2 | Customer |
| Configuration of an EC2 security group | Customer |
| Underlying OS for abstracted services such as S3 and DynamoDB | AWS |

These examples follow [AWS's shared responsibility explanation](https://aws.amazon.com/compliance/shared-responsibility-model/). For managed services, AWS handles more of the underlying stack. Customers still choose access and data protection settings.

The same control can apply at different layers. For example, AWS patches its infrastructure while the customer patches an EC2 guest OS. Shared responsibility means allocated duties; it does not mean both parties perform every task together.

#### A practical decision sequence

1. Identify the service and the resource named in the question.
2. Identify the specific layer or setting involved.
3. Decide whether AWS operates that layer or the customer configures it.
4. Check whether the question asks about protecting data or granting access, which remains a customer concern.

Example: a company uses EC2 to run its own web application. AWS secures the physical machine and facility. The company patches its guest OS, secures its code, and controls user access. Moving data to S3 changes who manages the underlying OS; the company still determines who may access its objects.

#### Encryption does not replace correct access control

The video uses a locked-house analogy and suggests encryption can make exposed data unreadable. **Exam extension:** Encryption protects data in particular contexts; authorized service requests may still receive decrypted data. Secure permissions and appropriate key access remain necessary. Do not assume encryption makes a public data configuration safe.

*Adapted study material; [Module 1, section 8 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/Bz4gC/welcome-to-aws-cloud-practitioner-essentials).*

### Authentication, authorization, and shared responsibility

Authentication answers **who is making the request?** Authorization answers **what may that identity do?** A coffee shop employee can authenticate successfully to the employee portal but still lack permission to view another employee's records. Knowing a password does not automatically grant access to every resource.

AWS and customers share security responsibilities. AWS secures the infrastructure supporting its services: facilities, physical hardware, networking infrastructure, and the virtualization layer. Customers secure what they configure and use: data, identities, permissions, applications, and applicable operating-system or service settings.

| Example | Main responsibility |
|---|---|
| Physical access to an AWS data center | AWS |
| Replacing a failed physical server | AWS |
| Hypervisor maintenance | AWS |
| Patching the guest operating system on a self-managed EC2 instance | Customer |
| Selecting permissions for an S3 bucket | Customer |
| Protecting application credentials and choosing who can decrypt data | Customer |
| Maintaining managed service infrastructure | AWS, within the service's responsibility boundary |

The split changes with the service. Managing an EC2 guest OS is different from using DynamoDB, where AWS operates the underlying database infrastructure. “Managed” reduces operational work; it does not remove customer responsibility for data and access choices. The shared responsibility model describes this division rather than being a security product that blocks attacks.

*Adapted study material; [Module 9, section 1 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/gIhAO/introduction-to-security-on-aws).*

### Shared responsibility and final check

Customers retain responsibility for classification, permissions, encryption/key choices as applicable, lifecycle and retention policies, and recovery requirements. Managed storage does not remove the risk of an authorized but mistaken deletion or a poorly configured policy.

Explain block/object/file, stop/terminate/reboot, EBS snapshot versus volume, S3 durability versus availability, Instant versus Flexible retrieval, Lifecycle versus Intelligent-Tiering, EFS versus FSx, and the gateway modes. Then use [community practice sets](/practice), [chapter reference notes](/notes/cloud_computing#reference-notes), and [chapter reference notes](/notes/cloud_computing#reference-notes).

*Adapted study material; [Module 6, section 15 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/6Bz4a/introduction-to-storage).*

### Further distinctions

#### Shared awareness and training control

Awareness and training is shared: AWS trains its workforce and the customer trains its workforce. Shared means each party carries out the control in its own scope. Configuring a customer's EC2 instance is a customer duty.

### Exam requirements and service choices

#### Follow the responsibility boundary as the service changes

The exam explicitly compares EC2, RDS, and Lambda. "Managed" moves particular operational duties to AWS; it does not transfer ownership of customer data, application logic, or access decisions.

| Duty | EC2 with a self-managed database | Amazon RDS | AWS Lambda |
|---|---|---|---|
| Physical servers and host infrastructure | AWS | AWS | AWS |
| Guest/server operating-system maintenance | Customer | AWS manages underlying OS | AWS manages execution infrastructure |
| Database engine installation/maintenance | Customer | AWS supplies managed engine maintenance; customer selects applicable settings/windows | Not a database-hosting model; duties for a database called by the function depend on that database service |
| Application code and bundled dependencies | Customer | Customer for the application using RDS | Customer, including code and packaged dependencies |
| IAM identities, permissions, and data access | Customer | Customer | Customer, including execution-role permissions |
| Recovery requirements and configuration | Customer implements backups and recovery | Customer chooses retention/availability options and validates recovery | Customer designs retries, event handling, and protection for external state |

For Lambda managed runtimes, AWS maintains runtime components under the runtime update model. For a customer-provided container image or custom runtime, the customer must maintain the supplied contents. Serverless therefore does not mean AWS fixes vulnerabilities in every dependency that a developer packages.

For S3, AWS operates the storage infrastructure; the customer determines what is stored, who can access it, and appropriate protection/retention settings. Encryption defaults do not remove responsibility for bucket policies or data classification. For DynamoDB, AWS operates database infrastructure, while customers still choose access patterns, permissions, and applicable backup settings.

#### Shared controls and compliance

Inherited controls are operated by AWS at its layer, such as physical/environmental controls. Shared controls involve both parties operating their own portions. For patching, AWS patches infrastructure it manages and the customer patches components it manages. For awareness and training, each trains its own personnel. Customer-specific controls, such as application permissions and business-specific data classification, remain customer work.

AWS's compliance reports document AWS controls within their stated scope. Customers must still satisfy their own obligations and use the service in an appropriate configuration.

**Worked choice:** A vulnerable library was uploaded inside a Lambda function package. The customer fixes the package. If a physical host needs replacement, AWS handles it. If RDS needs its underlying OS maintained, that is part of the managed service boundary; choosing the application's database privileges remains customer work.

Sources: [Shared responsibility model](https://aws.amazon.com/compliance/shared-responsibility-model/), [RDS shared responsibility](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.html), and [Lambda runtime updates](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html).

### Before continuing

Use the service and layer to decide responsibility. AWS handles more of the stack for RDS/Lambda than EC2; customer data, access, and configuration remain customer concerns.

Explain the main concepts aloud and compare the services with similar purposes. Return to the relevant section whenever you cannot justify the distinction.

Study source: independently reconstructed course guides and editorial exam-task notes. Course capture: 16 October 2026; task expansion: 20 October 2026. These explanations are not an official AWS publication. Service qualifications retain their stated review dates.
