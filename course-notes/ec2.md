# EC2: Virtual Machines

Work through the explanations, examples, and service comparisons below. Use the [reference notes](#reference-notes) for revision, or follow the [exam-task reading path](/study-guide#detailed-reading-by-exam-task) to study in syllabus order.

## Exam task 3.3: Compute services

### EC2 supplies compute capacity

Compute means processing power for applications and calculations. Amazon Elastic Compute Cloud (Amazon EC2) supplies resizable computing capacity. In the course's main examples, an EC2 instance is a virtual server on which you choose an operating system and run software.

Compared with buying physical servers, provisioning an instance avoids procurement and installation delays. You can choose a suitable configuration, run it when needed, and change your approach as the workload becomes clearer. Flexibility still requires management: cloud resources do not automatically choose the cheapest configuration or secure your application.

#### Multi-tenancy and isolation

Default-tenancy instances can share a physical host with other customers' instances. A virtualization layer isolates workloads while sharing the underlying hardware. AWS manages that host infrastructure and isolation. Customers manage their guest operating systems, installed software, data, and access configuration.

The lesson's statement that EC2 instances share hardware describes the standard model. Dedicated Hosts and Dedicated Instances provide different tenancy choices. Do not infer that every EC2 purchase option uses shared customer hardware.

The coffee shop uses different coffee machines to illustrate choosing compute for the work. The useful comparison is resource fit: an expensive specialized machine is useful when its capabilities match the task, rather than simply because it is larger.

*Adapted study material; [Module 2, section 2 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/Awlt0/introduction-to-amazon-ec2).*

### Choose an instance category by the bottleneck

| Category | Main resource emphasis | Useful workload clues |
|---|---|---|
| General purpose | Balanced CPU, memory, networking | Ordinary web services, repositories, uncertain initial requirements |
| Compute optimized | CPU-intensive processing | Scientific modeling, CPU-heavy processing, high-performance computing |
| Memory optimized | Large working sets in RAM | In-memory analytics and memory-heavy databases |
| Accelerated computing | Hardware accelerators | GPU processing, graphics, suitable machine-learning workloads |
| Storage optimized | High-performance access to local data | Heavy local I/O, suitable data-processing and database workloads |

A workload label alone can be ambiguous. A database might be limited by memory or storage I/O; machine learning might need CPU processing or specialized accelerators. Read the resource requirement that the question provides.

Instance category describes its resource balance. Instance size describes the amount of those resources. Rightsizing selects a suitable type and size using workload needs and measurements. Paying for a larger instance is not proof of a better design.

**Exam extension:** Changing to a larger instance is vertical scaling. Adding more instances is horizontal scaling. Resizing can require lifecycle changes and compatibility checks; it is not a universal promise of interruption-free growth.

*Adapted study material; [Module 2, section 3 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/Awlt0/introduction-to-amazon-ec2).*

Related explanations for this task: [other compute](/notes/other_compute#exam-task-33-compute-services), [elb asg](/notes/elb_asg#exam-task-33-compute-services).

## Exam task 4.1: Pricing models

### Separate price, capacity, and tenancy

The pricing reading mixes several decisions that become easier when separated:

- Pricing: what rate or commitment applies to usage?
- Capacity: is matching compute capacity held for you?
- Tenancy: do you need dedicated physical hardware or control over a host?

These choices can overlap. A discounted rate alone does not establish a capacity reservation.

#### Main choices

| Option | Core tradeoff | Typical scenario |
|---|---|---|
| On-Demand | Flexible use without a long-term commitment | New, short-lived, or unpredictable workloads |
| Reserved Instances (RIs) | Discount for eligible matching usage under a one- or three-year commitment | Stable, predictable EC2 usage |
| Savings Plans | Discount in exchange for a one- or three-year spend commitment, measured in dollars per hour | Predictable baseline usage with plan-specific flexibility |
| Spot Instances | Spare EC2 capacity that may be interrupted | Flexible batch jobs and restartable processing |
| Dedicated Hosts | Physical host dedicated to your use, with host-level control | Certain server-bound licensing or placement requirements |
| Dedicated Instances | Instances on hardware isolated from other customers | Dedicated tenancy without the same host-level control |
| Capacity Reservations | Hold matching capacity in a specific AZ | Critical need for capacity in that location |

The [EC2 purchasing overview](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html) supports these broad distinctions. Do not memorize the course's maximum discount percentages as universal rates. Savings depend on the exact product, term, payment choice, and workload.

#### Savings Plans: flexibility depends on type

The reading groups several forms of Savings Plans too broadly. For this module, distinguish Compute Savings Plans, which can cover eligible EC2, Fargate, and Lambda usage, from EC2 Instance Savings Plans, which commit to a particular instance family in a Region. SageMaker AI has a separate plan type. A plan is not one discount covering every AWS service. See [Savings Plans types](https://docs.aws.amazon.com/savingsplans/latest/userguide/plan-types.html).

#### Capacity reservation is not merely a discount

An ordinary regional RI discount and a Savings Plan do not reserve capacity. A zonal RI can include a capacity benefit. An On-Demand Capacity Reservation addresses availability in a specified AZ. Reserved capacity can be billable even when it is not being used; eligible discounts may be combined with it. The reading's statement that you only pay for running instances contradicts its own explanation of reservation charges. See [Capacity Reservations](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html).

**Exam extension:** RI size flexibility has eligibility conditions. Do not assume every RI automatically applies across arbitrary families, operating systems, tenancies, or Regions.

#### Spot requires interruption tolerance

Spot suits work that can checkpoint, retry, or be rescheduled. A job with a strict uninterrupted execution requirement is a poor fit merely because Spot is cheaper. Its spare-capacity availability is not guaranteed. The reading's bidding language should not be understood as an auction where the highest bidder always wins.

AWS provides interruption notices on a best-effort basis. The usual two-minute advance notice applies to stop or termination; hibernation starts immediately. Design the workload for interruption rather than assuming a guaranteed recovery window. See [Spot interruption notices](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-instance-termination-notices.html).

#### Stopping compute does not remove every bill

The introductory video simplifies EC2 cost to running instances. A stopped EBS-backed instance can leave billable storage. Other resources and financial commitments can remain. Review the entire workload, not just one instance's power state. See [EC2 stop/start costs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/how-ec2-instance-stop-start-works.html).

*Adapted study material; [Module 2, section 6 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/Awlt0/introduction-to-amazon-ec2).*

### Understand cost drivers and the full bill

The main course drivers are compute, storage, and outbound data transfer. Actual bills can also include requests, provisioned IOPS, processing, retrieval, public IPv4 addresses, managed networking, licenses, and support. Service, Region, architecture, operating system, purchase model, and configuration all matter.

#### Compute

Compute pricing can depend on instance size/type, time, architecture, operating system, execution duration, or capacity model. An EC2 instance incurs compute charges while running, even when idle. Stopping an eligible instance usually stops its instance compute charge but does not eliminate retained EBS storage or every related charge. Commitment charges do not disappear just because the workload stops.

The reading's `t4g.nano` example illustrates selecting a size that meets requirements; it is not proof that this instance is the cheapest valid choice for every application. Architecture compatibility, memory, performance, and availability requirements must be checked.

#### Storage

EBS is commonly billed for provisioned storage and applicable performance settings. S3 costs can include storage volume/class, requests, retrieval, replication, transitions, and transfer. Lower storage rates may come with retrieval delays, minimum durations, or request charges. Compare total cost for the actual access pattern.

The source lists S3 Object Lambda as one example of an extra feature. Treat that as the recorded example rather than a required component or a recommendation to adopt every named feature. There is no need to memorize a fixed count of S3 cost components.

#### Data transfer and network processing

Inbound internet transfer is commonly free, while internet egress and other paths can incur charges. Same-Region does **not** universally mean free: cross-AZ paths, service-specific rules, and networking processing charges matter. Check the endpoints, direction, service, Region/AZ relationship, and any NAT or endpoint processing.

The transcript's static-site example illustrates egress as a driver, not a claim that every individual response always produces a separate billable amount regardless of allowances. Similarly, sending data to another system is not enough information to calculate a rate. Price the complete path.

*Adapted study material; [Module 11, section 2 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/jHvBw/introduction-to-pricing-and-support).*

### Choose an S3 storage class

| Class introduced | Main fit | Main tradeoff |
|---|---|---|
| Standard | Frequently accessed general-purpose data | Storage cost versus colder alternatives |
| Intelligent-Tiering | Unknown or changing access patterns | Automatic access-based tiering with applicable monitoring/feature charges |
| Standard-IA | Infrequent access needing rapid retrieval | Retrieval fees and minimum-duration considerations |
| One Zone-IA | Infrequent, re-creatable data | Single-AZ exposure |
| Express One Zone | Latency-sensitive, frequently accessed objects | Specialized single-AZ design; not simply an inexpensive archive |
| Glacier Instant Retrieval | Rare access needing milliseconds retrieval | Retrieval and duration economics |
| Glacier Flexible Retrieval | Archives tolerating minutes-to-hours retrieval | Restore workflow rather than immediate access |
| Glacier Deep Archive | Long retention with substantial retrieval delay acceptable | Longer restore delay |
| S3 on Outposts | Object storage at an Outposts site | Local deployment requirements |

The course's general distinction is access frequency, required retrieval speed, resilience, and cost. An archive label does not mean every Glacier option has the same retrieval behavior. See [S3 storage classes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html).

Glacier Instant Retrieval permits real-time access. Flexible Retrieval and Deep Archive require restoration before ordinary object retrieval. Restore timing depends on the chosen option; “Deep Archive always returns within 12 hours” is too absolute. Minimum storage durations and retrieval charges can affect total cost, so the lowest storage rate may not be the lowest workload cost. See [Glacier comparison](https://docs.aws.amazon.com/AmazonS3/latest/userguide/glacier-storage-classes.html).

The video gives an incorrect fixed count for Intelligent-Tiering's tiers. **Qualification:** It has automatic frequent, infrequent, and archive-instant tiers, plus optional archive-access tiers. Learn the automatic access-pattern concept rather than the recorded count. See [Intelligent-Tiering](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering-overview.html).

*Adapted study material; [Module 6, section 7 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/6Bz4a/introduction-to-storage).*

### Further distinctions

#### Predictable baseline plus interruptible peaks

Use Reserved Instance discounts for a stable baseline and Spot capacity for interruption-tolerant peaks. EC2 Fleet can combine purchase options and instance types. A commitment for short peaks can waste money; Spot requires interruption handling.

#### Largest reservation payment discount

Within an equivalent Dedicated Host reservation term, compare All Upfront, Partial Upfront, and No Upfront payment options. Compare equivalent reservation terms and verify current pricing for an actual purchase; the study rule concerns this payment-option comparison.

### Exam requirements and service choices

#### Explain Reserved Instance flexibility rather than only the discount

**Standard EC2 Reserved Instances** trade a commitment for an eligible usage discount, with specified modification flexibility. **Convertible Reserved Instances** allow exchanges under AWS rules for configurations such as another instance family, operating system, or tenancy; the replacement must meet value requirements. Convertible does not mean cancel whenever convenient or freely move a commitment to any Region.

**Regional RIs** apply to matching eligible usage across AZs in the selected Region and do not reserve capacity. Eligible Linux/UNIX default-tenancy regional RIs can provide size flexibility within the instance family, using normalized capacity. **Zonal RIs** include a capacity benefit in the selected AZ and have stricter matching. These distinctions are more useful than assuming every RI automatically follows any instance resize.

With **AWS Organizations consolidated billing**, eligible RI discounts can apply to matching usage in participating accounts according to discount-sharing preferences. The purchasing account receives its applicable benefit first, and eligible unused discount benefit can apply elsewhere under the rules. Sharing a billing discount does not give another account general access to the instance, nor does it share a zonal RI's capacity reservation. Resource/capacity sharing is a separate feature.

#### Compare the purchase choices using the constraint

| Constraint | Candidate | Reason |
|---|---|---|
| Unknown duration and no long-term commitment | On-Demand | Flexible usage charges |
| Predictable matching baseline | RI or suitable Savings Plan | Commitment discount can fit stable demand |
| Flexible usage across eligible EC2/Fargate/Lambda | Compute Savings Plan | Spend commitment rather than a fixed instance reservation |
| Retryable jobs that can be interrupted | Spot | Spare-capacity pricing with interruption risk |
| Need capacity in a particular AZ | On-Demand Capacity Reservation or eligible zonal RI | Capacity benefit is distinct from a price discount |
| Need physical-host visibility for eligible licensing | Dedicated Host | Host-level allocation/control |
| Need dedicated tenancy without that host control | Dedicated Instance | Hardware isolation is not the same as licensing visibility |

For equivalent products/terms, payment options can include All Upfront, Partial Upfront, and No Upfront. Paying no money upfront still involves the contractual commitment. The lowest unit rate can be a poor total-cost choice if a large fraction of the committed usage goes unused.

Storage pricing follows access requirements: EBS provisioned capacity/performance differs from S3 stored bytes, requests, retrieval, and class-specific minimums. An archive class can cost less to store but more to retrieve or restore. Network pricing depends on the full path: inbound internet transfer is commonly free, while egress, cross-AZ/cross-Region transfer, and NAT/endpoint processing have applicable rules. Same Region does not universally mean free.

**Worked choice:** Account A owns an eligible unused RI discount and account B runs matching usage in the same organization with sharing enabled. B may receive the billing benefit. That does not let B operate A's resources. If B needs guaranteed capacity in an AZ, evaluate a capacity mechanism separately.

Sources: [RI offering classes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/reserved-instances-types.html), [RI scope](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/reserved-instances-scope.html), [discount application](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/apply_ri.html), and [RI billing/sharing](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-reserved-instances-application.html).

### Before continuing

Explain Savings Plans, Reserved Instance flexibility, Dedicated Hosts versus Dedicated Instances, Capacity Reservations, storage tiers, and data-transfer charging. A billing discount and a capacity guarantee are different features.

Explain the main concepts aloud and compare the services with similar purposes. Return to the relevant section whenever you cannot justify the distinction.

Study source: independently reconstructed course guides and editorial exam-task notes. Course capture: 16 October 2026; task expansion: 20 October 2026. These explanations are not an official AWS publication. Service qualifications retain their stated review dates.
