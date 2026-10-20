# Elastic Load Balancing & Auto Scaling Groups

Work through the explanations, examples, and service comparisons below. Use the [reference notes](#reference-notes) for revision, or follow the [exam-task reading path](/study-guide#detailed-reading-by-exam-task) to study in syllabus order.

## Exam task 3.3: Compute services

### Scale the right part of the application

| Direction | What changes | Example |
|---|---|---|
| Scale up | More power in an individual resource | A larger EC2 instance |
| Scale down | Less power in an individual resource | A smaller instance |
| Scale out | More resources | More EC2 instances processing requests |
| Scale in | Fewer resources | Remove excess instances after a peak |

Scalability is the ability to handle changing load by changing capacity. Elasticity emphasizes adjusting capacity with demand, commonly using automation. The course associates scalability with long-term growth, but it is not exclusively a long-term planning concept.

The coffee shop illustrates separate tiers: staff take orders and other staff prepare drinks. Increasing the order-taking capacity may expose a bottleneck in drink production. Each tier can need different capacity. Scaling every tier equally wastes resources when their workloads differ.

Extra capacity also differs from redundancy. Several instances across suitable AZs reduce exposure to a location failure; an individual larger instance can still be a single point of failure.

*Adapted study material; [Module 2, section 7 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/Awlt0/introduction-to-amazon-ec2).*

### EC2 Auto Scaling maintains and adjusts capacity

An Auto Scaling group (ASG) manages a set of instances. At this introductory level, understand three settings:

| Setting | Meaning |
|---|---|
| Minimum | Lower bound on the group's capacity |
| Desired | Capacity the group currently aims to maintain |
| Maximum | Upper bound for ordinary configured scaling behavior |

For an example with minimum 4, desired 6, and maximum 12, the group aims for 6 instances, not automatically 4 or 12. It can change the desired capacity within the configured limits. The minimum is a floor, not always the initial target. This corrects the reading's suggestion that the minimum itself determines the initial instance count. See [ASG capacity settings](https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-capacity-limits.html).

The lessons use instance counts. **Exam extension:** More advanced groups can use weighted capacity; do not generalize these simple arithmetic examples to every production configuration.

Dynamic scaling responds to demand or metrics. Predictive scaling uses anticipated demand to prepare capacity. CloudWatch collects metrics that scaling policies can use. An upper limit helps constrain resource growth but does not guarantee a healthy application if demand exceeds what that limit can handle.

Capacity changes take time. Launching an instance, bootstrapping software, and becoming ready for traffic are not instantaneous. The video describes the intended behavior, not an assurance that the exact target is continuously available during every transition.

*Adapted study material; [Module 2, section 8 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/Awlt0/introduction-to-amazon-ec2).*

### Load balancing distributes requests

Elastic Load Balancing (ELB) routes incoming traffic across targets, such as application instances. Its endpoint lets callers reach the application without tracking every individual backend instance.

Auto Scaling and load balancing solve related problems:

| Question | Service role |
|---|---|
| How many instances should run? | EC2 Auto Scaling |
| Where should a request go? | Elastic Load Balancing |
| What measurements describe workload behavior? | CloudWatch |

Adding servers does not by itself distribute requests. A load balancer does not by itself increase the number of application instances. With an appropriate integration, new eligible instances can be registered to receive traffic and removed when they leave the group.

**Correction:** The reading lists round robin, least connections, IP hash, and least response time as though they are a universal ELB menu. Routing algorithms depend on load-balancer type and configuration. Application Load Balancer target groups, for example, support round robin, least outstanding requests, and weighted random. See [ALB target groups](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html). For this exam, prioritize distribution and service purpose rather than that generic algorithm list.

The video's claim that elasticity adds no hourly cost is also too broad. ELB has charges, including time and applicable capacity or usage components. More traffic can increase costs. See [ELB pricing](https://aws.amazon.com/elasticloadbalancing/pricing/).

*Adapted study material; [Module 2, section 9 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/Awlt0/introduction-to-amazon-ec2).*

Related explanations for this task: [ec2](/notes/ec2#exam-task-33-compute-services), [other compute](/notes/other_compute#exam-task-33-compute-services).

Study source: independently reconstructed course guides and editorial exam-task notes. Course capture: 16 October 2026; task expansion: 20 October 2026. These explanations are not an official AWS publication. Service qualifications retain their stated review dates.
