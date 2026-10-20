# Global Infrastructure

Work through the explanations, examples, and service comparisons below. Use the [reference notes](#reference-notes) for revision, or follow the [exam-task reading path](/study-guide#detailed-reading-by-exam-task) to study in syllabus order.

## Exam task 3.2: Global infrastructure

### Global infrastructure: Region, AZ, data center

The hierarchy to remember is:

```text
AWS global infrastructure
  Region: a geographic area
    Availability Zone A: one or more data centers
    Availability Zone B: one or more data centers
    Availability Zone C: one or more data centers
```

Each Region has at least three Availability Zones. An AZ consists of one or more discrete data centers with redundant power, networking, and connectivity. Separate AZs reduce the risk that one local incident affects every copy of a workload. The course recommends spreading resources across multiple AZs. See the [AWS AZ reference](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-availability-zones.html).

Two servers in one AZ are still exposed to a failure affecting that AZ. Merely having several servers does not establish isolation across zones.

#### Choosing a Region

The module focuses on proximity to users and global reach. **Exam extension:** Also consider data location requirements, service availability, and cost. The closest Region may be unsuitable if another requirement controls the decision.

The [AWS Regions reference](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html) confirms `ap-southeast-1` for Singapore and `eu-west-1` for Ireland. Malaysia is `ap-southeast-5`, which is a useful local example. Learn the hierarchy and selection factors before memorizing a long list of codes.

#### Multiple AZs versus multiple Regions

| Approach | Typical purpose | What it does not establish by itself |
|---|---|---|
| Several resources in one AZ | More capacity or component redundancy | Protection from failure of that AZ |
| Resources across multiple AZs in one Region | Resilience to an AZ disruption | Recovery from a disruption affecting the entire Region |
| Resources across multiple Regions | Geographic reach and/or regional disaster recovery | Automatic data replication or failover for every service |

**Exam extension:** Deployment locations alone do not make an application resilient. Traffic routing, data availability, capacity, and recovery procedures also need to work. Multi-Region recovery adds complexity and cost; it is not a default requirement for every workload.

*Adapted study material; [Module 1, section 6 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/Bz4gC/welcome-to-aws-cloud-practitioner-essentials).*

### Rebuild the infrastructure hierarchy

| Component | What it represents | Main purpose in this module |
|---|---|---|
| Region | A geographic area containing multiple AZs | Choose a geographic deployment location |
| Availability Zone | An isolated location within a Region, containing one or more data centers | Reduce exposure to a single location failure |
| Edge location | A site in AWS's edge network | Bring supported network and content-delivery functions closer to users |

The course states that each Region has at least three AZs. Regions and AZs are deployment locations for regional workloads. An edge location is not another name for an AZ and does not offer every service available in a Region.

In the coffee shop analogy, full branches illustrate regional presence, while small coffee carts illustrate fast local delivery of popular items. Standard recipes illustrate consistent deployments. Use the analogy for those purposes rather than treating every shop detail as an exact technical mapping.

*Adapted study material; [Module 4, section 2 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/ZYOJJ/introduction-to-going-global).*

### Choose a Region using four factors

#### Compliance and data-location requirements

Begin with binding requirements about where a workload or data may be placed. If a question explicitly requires data to remain in a particular country, eliminate choices that violate that requirement before optimizing price or proximity.

The video uses financial data in Germany and data within UK borders as simplified examples. Do not convert those examples into universal statements about a country's laws. The exam lesson is to follow the requirement stated in the scenario. Choosing a Region alone does not establish complete application compliance.

**Qualification:** The video's claim that no data leaves a Region without explicit permission is an introductory control model, not a universal statement about every AWS service's data behavior. Review the services, integrations, backups, logs, and replication settings involved. Do not infer that placing the primary database in a Region settles every data-flow requirement.

#### Proximity to users

Serving users from a suitable nearby Region can reduce network delay. If most customers are in Singapore, the Singapore Region is a natural candidate, subject to other requirements. Latency depends on the network path and application behavior as well as physical distance.

A closest-location rule is therefore a useful starting point, not a guarantee that the geographically nearest Region is always the best answer.

#### Feature and service availability

Confirm that the required service and feature exist in the candidate Region. New offerings may become available in different Regions at different times. A nearby location is unsuitable if it cannot support a required capability.

**Exam extension:** Account access also matters. AWS commercial, China, and GovCloud environments have distinct account arrangements. Do not assume a normal commercial account can deploy to every AWS geographic location in the same way. The [AWS Regions reference](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html) explains account and availability distinctions.

#### Pricing

Compare the actual services and resource configuration required. Prices can differ between Regions. The course mentions operating costs and local taxes as influences; an exam answer should use the scenario's requirements rather than assume a particular country is always cheapest.

**Exam extension:** Include relevant storage, traffic, replication, and recovery resources in a comparison. A lower compute rate alone may not produce the lowest total cost.

#### A practical selection sequence

1. Identify non-negotiable location, access, and feature requirements.
2. Filter out unsuitable Regions.
3. Compare latency and total cost among the remaining choices.
4. Decide whether one Region, multiple AZs, or multiple Regions meet the availability requirement.

The four factors interact. Compliance can constrain the choices without making every other design consideration disappear.

*Adapted study material; [Module 4, section 3 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/ZYOJJ/introduction-to-going-global).*

### Multi-AZ versus multi-Region

Multiple AZs provide separate failure locations within a Region. Multiple Regions provide broader geographic separation and can support overseas users or recovery from a regional disruption.

| Requirement | Suitable starting point | Remaining design work |
|---|---|---|
| Survive an AZ disruption | Resources across multiple AZs | Traffic routing, state availability, and adequate surviving capacity |
| Recover from a Region-wide disruption | Recovery arrangement in another Region | Data replication, recovery procedures, routing, and testing |
| Improve access for users on another continent | Consider additional suitable Regions and/or content delivery | Choose what runs locally and how data is handled |

Two instances in one AZ are still exposed to that AZ's failure. Two AZs in the same Region do not establish recovery outside that Region. Merely creating resources in two Regions does not ensure that the second copy has current data or is ready to receive traffic.

The video describes automatic switching to a backup AZ. That result requires an appropriate service configuration and application design. Multi-AZ placement alone is not a universal automatic-failover feature.

**Exam extension:** An available recovery location can still involve downtime or data lag. Availability requirements should be translated into actual recovery and data needs rather than a blanket promise of uninterrupted operation. Detailed recovery architectures are beyond this module.

*Adapted study material; [Module 4, section 5 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/ZYOJJ/introduction-to-going-global).*

### Edge locations and CloudFront

Amazon CloudFront is a content delivery network (CDN). It uses edge locations to deliver content closer to viewers. The course gives slow-loading images and memes as examples, and also mentions video, applications, and APIs.

**Exam extension:** An origin is the source from which CloudFront retrieves content. On a cache hit, an eligible cached object can be served at the edge. On a miss, CloudFront retrieves it from the configured origin. Origin examples include S3 and HTTP servers. Caching depends on configuration; all content is not automatically copied to every edge location. See [CloudFront's introduction](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html).

```text
Viewer requests content
          |
          v
CloudFront edge location
    |              |
cache hit      cache miss
    |              |
serve copy     retrieve from origin
```

CloudFront and Region selection complement each other. Moving the application closer can reduce delay to its regional backend. Edge delivery can reduce the repeated journey for cacheable content. An edge cache does not become a complete replacement for the application's database or regional compute.

**Qualification:** Edge locations are separate infrastructure roles; they are not defined as locations exclusively outside all Regions or as a fourth level beneath an AZ. The course's emphasis is their content-delivery and network function.

*Adapted study material; [Module 4, section 6 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/ZYOJJ/introduction-to-going-global).*

### Distinguish the edge-related services

The infrastructure video briefly names Route 53, Global Accelerator, and Outposts. Learn their separate purposes:

| Service | Core role | Recognition clue |
|---|---|---|
| CloudFront | Content delivery through the edge network | CDN, caching, web assets |
| Route 53 | DNS and related domain/health functions | Resolve a domain name and direct users to an endpoint |
| Global Accelerator | Improve traffic paths to application endpoints over AWS's global network | Global application acceleration with static IP entry points |
| Outposts | AWS infrastructure and services at an on-premises site | Local processing near local systems |

The course says DNS converts URLs into IP addresses. More precisely, DNS resolves names; it does not interpret an entire URL's path. **Exam extension:** Route 53 also supports domain registration and health checking. See [Route 53 overview](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html).

**Exam extension:** Global Accelerator routes supported traffic through AWS's network to application endpoints. It does not serve as a CloudFront-style object cache. See [Global Accelerator overview](https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html).

The video's reference to Outposts for additional speed should be interpreted as latency to local workloads or systems that need on-premises processing. It does not mean an Outpost is universally faster for internet users around the world.

*Adapted study material; [Module 4, section 7 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/ZYOJJ/introduction-to-going-global).*

### Put the module together

An original example: an online retailer serves users in Europe and Southeast Asia and needs consistent deployments.

1. Filter candidate Regions by stated data-location and required-service constraints.
2. Compare proximity and overall cost among suitable locations.
3. Spread regional application capacity across AZs if the availability requirement calls for it.
4. Add a second Region if regional recovery or geographic application presence is required.
5. Use CloudFront for suitable web-content delivery at the edge.
6. Use DNS and traffic-routing features appropriate to how users should reach the application.
7. Model the infrastructure in CloudFormation and supply location-specific inputs.
8. Plan data movement and recovery explicitly, rather than assuming duplicated infrastructure copies live state.

Each choice addresses a different requirement. A CDN cannot replace all backend compute; an IaC template cannot substitute for a data-recovery plan.

*Adapted study material; [Module 4, section 9 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/ZYOJJ/introduction-to-going-global).*

### Exam requirements and service choices

#### Distinguish location, resilience, and delivery

| Building block | Scope | Related services/features |
|---|---|---|
| Region | A geographic area containing multiple AZs | Regional EC2, RDS, DynamoDB, and S3 choices |
| Availability Zone | One or more discrete data centers with independent infrastructure within a Region | Subnets, Multi-AZ compute deployments, RDS Multi-AZ |
| Edge location | A delivery/network presence closer to users | CloudFront delivery and Global Accelerator entry points |
| Outposts | Supported AWS infrastructure at the customer's site | Hybrid/local processing requirements connected with a Region |

An AZ is not necessarily one building. AZs are designed as separate failure boundaries with redundant high-speed connectivity; applications must deploy across them to use that protection. A subnet belongs to one AZ, while a VPC spans its Region. A regional service does not necessarily require customers to configure individual AZ instances themselves: S3 and DynamoDB abstract more of that infrastructure than an EC2 application does.

**Multi-AZ** addresses failures within a Region. **Multi-Region** can support regional disaster recovery, geographically distributed users, and business continuity. It also introduces data replication, consistency, routing, and cost choices. A backup in another Region is not a running application there, and a second application deployment without its required data is not a complete recovery design.

#### Match services to geographic requirements

Use **CloudFront** for delivery and caching of suitable content; the origin remains the source. Use **Global Accelerator** when the scenario emphasizes static anycast IP addresses and routing over the AWS global network to supported application endpoints. Use **Route 53** for DNS and configured routing/health-based failover. An edge location does not make every database or compute service available there, nor does it automatically replicate the application's full dataset globally.

Choose a Region using data residency/legal requirements, proximity to users, required service/features, and pricing. Check where primary data, copies, backups, logs, and any global delivery behavior reside. The closest Region is not always the permitted or functionally suitable Region.

**Worked choice:** A service must survive an AZ outage while its data stays in one approved Region. A suitable Multi-AZ design is the starting point. Choosing a second overseas Region solely because "more Regions means more availability" could violate the stated requirement. If the failure scenario changes to loss of the entire Region, a permitted multi-Region recovery plan needs consideration.

**Check yourself:** Does an ALB spread a database across AZs? No. Does CloudFront eliminate the need for a healthy origin for uncached content? No. Availability is a property of the whole design.

Sources: [Regions and AZs](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions-availability-zones.html), [CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html), and [Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html).

### Before continuing

Explain Region selection by compliance, service availability, latency, and price; edge locations support delivery closer to users. Placement alone does not configure replication or failover.

Explain the main concepts aloud and compare the services with similar purposes. Return to the relevant section whenever you cannot justify the distinction.

Study source: independently reconstructed course guides and editorial exam-task notes. Course capture: 16 October 2026; task expansion: 20 October 2026. These explanations are not an official AWS publication. Service qualifications retain their stated review dates.
