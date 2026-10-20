# VPC

Work through the explanations, examples, and service comparisons below. Use the [reference notes](#reference-notes) for revision, or follow the [exam-task reading path](/study-guide#detailed-reading-by-exam-task) to study in syllabus order.

## Exam task 3.5: Network services

### VPCs and subnets organize the network

Amazon Virtual Private Cloud (VPC) provides a logically isolated virtual network in AWS. You choose addressing, subnets, routing, gateways, and traffic controls for resources launched into it.

A subnet is a range of addresses within a VPC. It groups resources for network placement and operational or security purposes. The coffee shop analogy separates customers and cashiers from the backstage baristas: the public-facing tier accepts customer interaction, while the private tier performs internal work.

**Exam extension:** A VPC is regional and can contain subnets in multiple AZs. Each subnet resides entirely in one AZ. Spreading a workload across AZs therefore requires separate subnets and suitable resources. See [AWS subnet concepts](https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html).

The diagrams use nested boundaries: AWS Cloud, Region, VPC, AZs, and subnets. Solid versus dashed outlines are drawing conventions used by the course, not what makes a deployed subnet private or public.

#### Public and private describe routing

A public subnet has a direct route to an internet gateway. A private subnet does not have that direct route. Naming a subnet Public, assigning an address, or drawing a dashed box does not establish the required routing.

For the demo's ordinary IPv4 EC2 internet path, the VPC needs an attached internet gateway, the subnet needs the appropriate route, the instance needs a suitable public IPv4 address, and the traffic controls must permit the communication. The application must also be listening on the expected port. See [internet gateway requirements](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html).

The introduction says private resources do not have internet access. More precisely, private subnets lack a direct internet-gateway route; they can have outbound access through an appropriate NAT arrangement. Private also does not mean unreachable by every other subnet or a connected corporate network.

*Adapted study material; [Module 5, section 2 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/rJ3Le/introduction-to-networking).*

### Address ranges and route tables

The demo creates a VPC with `10.0.0.0/16`. This CIDR notation describes an address range. Smaller, non-overlapping ranges within it are assigned to individual subnets.

| Demo subnet | Example range | Placement |
|---|---|---|
| Private 1 | `10.0.1.0/24` | AZ A |
| Private 2 | `10.0.2.0/24` | AZ B |
| Public 1 | `10.0.3.0/24` | AZ A |
| Public 2 | `10.0.4.0/24` | AZ B |

These are the video's examples, not mandatory addressing choices. For foundational exam study, understand the relationship between VPC range and subnet ranges before doing detailed subnet calculations.

A route table determines where traffic is sent. A route specifies a destination range and a target. In the demo, the public subnet route table adds `0.0.0.0/0` with the internet gateway as target. This is an IPv4 default route, used when no more-specific matching route applies. A local route handles the VPC's own address range.

Each subnet is associated with a route table. Changing a table that is not associated with the subnet will not establish the intended path for that subnet. Routing chooses a path; a route alone does not grant application access or override a firewall.

*Adapted study material; [Module 5, section 3 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/rJ3Le/introduction-to-networking).*

### Gateways have different jobs

| Component | Purpose | Do not confuse it with |
|---|---|---|
| Internet gateway | Internet connectivity for appropriately routed and addressed resources | Permission to expose every VPC resource |
| Public NAT gateway | Allow private-subnet workloads to initiate suitable outbound internet connections | A public inbound service endpoint for those workloads |
| Virtual private gateway | AWS-side gateway for a VPC's applicable private connectivity | The whole VPN service or a user's VPN client |
| Transit Gateway | Central network hub connecting VPCs and on-premises networks | An API publishing service |
| API Gateway | Create, publish, and manage APIs | A general VPC routing hub |

For the common IPv4 public-NAT pattern, a workload's private-subnet route sends internet-bound traffic to NAT. The public NAT gateway uses the VPC's internet gateway for that internet path. Return traffic for connections the workload initiated can flow back; unsolicited internet connections cannot use NAT to start a session with that private instance. See [NAT gateways](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html).

The course's statement that no one can reach a VPC without an internet gateway is too broad. It applies to the illustrated direct internet path. VPN, Direct Connect, and other private connectivity can provide alternative access.

**Exam extension:** Site-to-Site VPN can terminate on a virtual private gateway or Transit Gateway, depending on the architecture. A virtual private gateway is not mandatory in every VPN design. [Transit Gateway](https://docs.aws.amazon.com/vpc/latest/tgw/what-is-transit-gateway.html) is useful when the question emphasizes a central hub for many networks.

*Adapted study material; [Module 5, section 4 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/rJ3Le/introduction-to-networking).*

### Security groups versus network ACLs

This is the core comparison to practise until it is automatic:

| Property | Security group | Network ACL |
|---|---|---|
| Scope taught in the module | Resource or instance level | Subnet boundary |
| Rule actions | Allow only | Allow and deny |
| Connection state | Stateful | Stateless |
| Return traffic | Automatically allowed for tracked permitted connections | Must satisfy rules in the return direction |
| Rule evaluation | Combined allow permissions | Numbered rules, lowest first, first match |

The course's doorman analogy represents the security group; passport control represents the network ACL. Neither replaces routing or the other's applicable checks. AWS's [security comparison](https://docs.aws.amazon.com/vpc/latest/userguide/infrastructure-security.html) supports these distinctions.

**Exam extension:** For EC2, security groups are associated with network interfaces. One group can be used by multiple resources, and a resource can have multiple associated groups within service limits. Network ACLs are associated with subnets. They do not filter traffic between instances remaining within the same subnet. See [network ACL behavior](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html).

#### Stateful does not mean all outbound traffic is exempt

If a security group permits a new inbound connection, its tracked response traffic can leave regardless of outbound group rules. If it permits a new outbound connection, the response can return regardless of inbound group rules. New independent connections still need the applicable allow rules.

The video's doorman does not inspect guests leaving, but the technical lesson is automatic handling of return traffic, not that outbound rules never matter.

#### Stateless means both directions matter

A network ACL does not remember that a packet belongs to an allowed connection. The outbound and inbound rule sets are evaluated separately. A permitted request can still fail when the response is blocked.

An ACL's rules are processed in ascending rule-number order until a match. For example, if rule 100 allows a particular packet and rule 200 would deny it, the earlier matching allow takes effect. This is different from assuming every deny anywhere always wins.

#### Defaults need precise wording

| Component | Initial behavior to remember |
|---|---|
| Newly created custom security group | No inbound allow rules; outbound initially allows traffic |
| VPC's default security group | Includes an inbound rule permitting traffic from resources using that same group |
| Default network ACL | Initially allows inbound and outbound traffic |
| Custom network ACL | Initially denies traffic until suitable allow rules exist |

The lesson's statement that a default security group allows no inbound traffic confuses the baseline for a newly created group with the VPC's specifically named default group. See [default security group rules](https://docs.aws.amazon.com/vpc/latest/userguide/default-security-group.html).

Also, the default network ACL belongs to each VPC rather than being one shared ACL for the entire AWS account. Rules can be changed; do not assume the original defaults remain in every scenario.

*Adapted study material; [Module 5, section 5 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/rJ3Le/introduction-to-networking).*

### Trace a request and its response

Suppose instance A in subnet 1 opens a connection to instance B in subnet 2:

```text
A -> A security group (outbound)
  -> subnet 1 ACL (outbound)
  -> subnet 2 ACL (inbound)
  -> B security group (inbound) -> B

B -> B security group (tracked response)
  -> subnet 2 ACL (outbound)
  -> subnet 1 ACL (inbound)
  -> A security group (tracked response) -> A
```

Assume appropriate routing exists. The initial request needs relevant allows at each control. On the return path, the security groups recognize the permitted tracked connection, while the ACLs still evaluate the directional rules.

This explains a common exam scenario: the request is allowed, but replies cannot get through. Check the stateless return rules instead of assuming the original inbound allow covers both directions.

Customers configure these security groups, ACLs, and network settings under the shared responsibility model. AWS operates the underlying network infrastructure.

*Adapted study material; [Module 5, section 6 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/rJ3Le/introduction-to-networking).*

### Reconstruct the VPC demonstration

The video builds network infrastructure rather than a complete running application:

1. Choose the Region and create the VPC address range.
2. Create two private and two public-intended subnets across two AZs.
3. Configure the example public IPv4 assignment settings.
4. Create and attach an internet gateway.
5. Create a public route table and add its default internet route.
6. Associate that route table with the intended public subnets.
7. Plan traffic filtering before adding workloads.

The important demonstration detail is that the public-intended subnets are not made public simply by their names or auto-assignment setting. Routing is required. Equally, address assignment is still relevant for a directly reachable IPv4 EC2 instance.

**Qualification:** Not every AWS resource must be created inside a customer-created VPC. The reading's statement that creating your own VPC is the first step before creating any AWS resources is broader than the demonstrated EC2/VPC workflow.

*Adapted study material; [Module 5, section 7 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/rJ3Le/introduction-to-networking).*

### Choose connectivity from the requirement

| Service | Main requirement | Typical distinction |
|---|---|---|
| Client VPN | Remote users connect securely | Individual client-based remote access |
| Site-to-Site VPN | Connect an office, branch, or data-center network to AWS | Encrypted network-to-network connection |
| Direct Connect | Dedicated connectivity between the customer network and AWS | A private network path with capacity and consistency benefits |
| PrivateLink | Private access to supported services or resources | Service/resource access rather than broad arbitrary network routing |

#### Client VPN and Site-to-Site VPN

Client VPN supports users with a compatible client. Site-to-Site VPN connects networks using IPsec tunnels and configured gateways. The distinction is not simply small versus large company: identify whether the endpoint is a remote user's device or a corporate network. See [Client VPN](https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/what-is.html).

A VPN's encryption does not make its underlying shared network a dedicated physical connection. Performance depends on the whole path. The course mentions application acceleration; do not assume every basic VPN automatically enables optional acceleration or guarantees lower latency.

#### Direct Connect

Direct Connect avoids the ordinary public-internet path for the provisioned connection. It can suit sustained transfers and hybrid workloads needing dedicated network connectivity. It still needs provisioning, suitable capacity, routing, and resilience planning.

**Important qualification:** Private does not automatically mean encrypted. Direct Connect does not encrypt traffic by default. Encryption needs an appropriate additional mechanism, such as a compatible VPN arrangement or supported link encryption. See [Direct Connect encryption](https://docs.aws.amazon.com/directconnect/latest/UserGuide/encryption-in-transit.html).

The final video discusses a backup VPN or second Direct Connect connection. Those are resilience choices, not automatic properties of one physical line. A backup must be configured, have suitable capacity, and be tested. Combining links does not promise that one individual transfer gets the sum of every link's bandwidth.

#### PrivateLink

PrivateLink provides private access to supported services and resources through VPC endpoints. The lesson emphasizes avoiding an internet gateway or NAT just to reach that supported destination. It does not mean every destination in another cloud becomes reachable without a provider-side arrangement or network design. See [PrivateLink overview](https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html).

A useful recognition cue is private service access, while Transit Gateway addresses connecting networks through a hub. API Gateway answers a separate question about publishing and managing application APIs.

*Adapted study material; [Module 5, section 8 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/rJ3Le/introduction-to-networking).*

### DNS and global delivery

DNS resolves names into records that help clients find endpoints. Route 53 provides DNS, domain registration, and related routing and health features. It can direct users to resources inside or outside AWS.

The browser's application request is separate from the DNS query. Route 53 does not act as a proxy carrying every application packet through its DNS servers.

#### Routing policies named in the course

| Policy | Basic decision |
|---|---|
| Latency-based | Use the configured regional endpoint indicated by latency data |
| Geolocation | Match the user's geographic location to configured rules |
| Geoproximity | Geographic proximity with configurable bias |
| Weighted | Distribute DNS answers according to configured weights |

**Qualification:** Latency routing is not simply choosing the physically closest Region. Network conditions and AWS latency measurements matter. Geolocation routing is a configured geographic policy, not a guarantee of minimum latency. See [latency routing](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-latency.html) and [geolocation routing](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geo.html).

#### CloudFront versus Global Accelerator

CloudFront delivers web content through edge locations, caching eligible content close to viewers. Global Accelerator improves paths to supported application endpoints over AWS's global network. They address different delivery requirements; neither is the name-resolution service.

The reading's global-gaming example does not establish equal latency for users worldwide. Performance benefits are workload- and network-dependent, and no edge service guarantees all users always see the same response time.

*Adapted study material; [Module 5, section 9 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/rJ3Le/introduction-to-networking).*

### Correct the final global-architecture model

The course's final diagram blends DNS, regional selection, and edge selection too tightly. A sound basic model is:

```text
DNS query -> Route 53 answers for the configured name
Viewer -> CloudFront distribution -> suitable edge location
                                -> cache or configured origin
Origin may be a regional load balancer -> application instances
```

A Route 53 alias can point a domain to a CloudFront distribution. CloudFront's system handles edge delivery. Do not learn the reading's claim that Route 53 first selects a Region and then selects an edge location inside that Region as a universal CloudFront workflow. See [Route 53 with CloudFront](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html) and [CloudFront delivery](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowCloudFrontWorks.html).

Multi-Region origins and failover require deliberate configuration and data planning. Adding CloudFront and DNS records alone does not replicate every database or establish application recovery.

*Adapted study material; [Module 5, section 10 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/rJ3Le/introduction-to-networking).*

### One connected example

An original example: an online store uses a public-facing load balancer and private application/database tiers. It spreads appropriate resources across AZs. Security groups allow the intended tier-to-tier traffic, and subnet ACLs provide any additional filtering. Private instances can obtain updates through an appropriate NAT route without becoming direct inbound internet endpoints.

Employees use Client VPN if they need individual remote access. The corporate data center can use Site-to-Site VPN or dedicated Direct Connect connectivity according to its requirements, with encryption and backup paths considered separately. PrivateLink can provide access to supported private services. Route 53 resolves the store's name, while CloudFront can accelerate suitable web content.

The exam skill is identifying each service's contribution rather than using every service merely because it exists.

*Adapted study material; [Module 5, section 11 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/rJ3Le/introduction-to-networking).*

### Further distinctions

#### Detect website failure and change DNS answers

Route 53 combines health information with configured DNS failover to return alternate healthy endpoints. CloudFront is primarily a CDN. DNS caches and TTLs mean this is not instantaneous replacement of every existing connection.

### Exam requirements and service choices

#### Distinguish a route, a network permission, and service authorization

A network path needs suitable addressing and routing. Network filters must permit the traffic. The destination service or application must also authorize the request. An IAM permission does not create a route, and a route through a gateway does not grant access to the data.

| Network need | Service/feature | Distinction to remember |
|---|---|---|
| Isolated regional network with chosen IP ranges | Amazon VPC | Contains subnets and route tables; not a single-AZ resource |
| Place resources in an AZ and address range | Subnet | Each subnet belongs to one AZ |
| Internet route for appropriately configured public resources | Internet gateway | A route alone does not give an EC2 instance a public IP or open security rules |
| Outbound internet access from private IPv4 workloads | Public NAT gateway | Allows initiated outbound connectivity; not unsolicited inbound access to those private hosts |
| Private access to S3/DynamoDB via gateway routes | Gateway VPC endpoint | Different from a PrivateLink interface endpoint |
| Private access to supported services through endpoint interfaces | AWS PrivateLink/interface endpoint | Service access rather than general connectivity to every network behind the endpoint |
| Connect many networks centrally | AWS Transit Gateway | Routing hub for VPCs and supported on-premises connectivity |
| Connect two VPCs directly | VPC peering | No automatic transitive routing through a third VPC |
| Connect an office network over encrypted tunnels | AWS Site-to-Site VPN | Different from Client VPN for individual remote users |
| Dedicated private network connection | AWS Direct Connect | Does not provide encryption by default |
| Publish and manage application APIs | Amazon API Gateway | API requests, authorization integrations, and throttling; not a VPC routing gateway |

Security groups are stateful allow rules for associated interfaces/resources. Network ACLs are stateless subnet rules supporting allow/deny with numbered evaluation. **Amazon Inspector** identifies supported vulnerabilities/exposure; it is included in network-security study because vulnerable workloads matter, not because it replaces a packet filter. **VPC Flow Logs** provide flow metadata for investigation.

#### DNS and delivery services

**Route 53** provides DNS, domain registration capabilities, health checks, and configured routing policies. **CloudFront** delivers/cacheable content through a CDN. **Global Accelerator** uses static anycast IPs and the AWS network to reach supported endpoints. DNS failover does not instantly move every established connection because client caching and TTLs matter.

**Worked choice:** Private EC2 instances need to read S3 without routing through a NAT gateway. A gateway endpoint is a relevant option; IAM and bucket policies must still permit access. If the requirement changes to an office network's encrypted connection into the VPC, Site-to-Site VPN fits. PrivateLink is not a general substitute for that entire office-to-VPC network.

Sources: [Gateway endpoints](https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html), [VPC peering](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html), [PrivateLink](https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html), and [VPC Flow Logs](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html).

### Before continuing

Explain VPC/subnet boundaries, public/private routes, gateways, stateful security groups versus stateless network ACLs, endpoints, Direct Connect, and CloudFront.

Explain the main concepts aloud and compare the services with similar purposes. Return to the relevant section whenever you cannot justify the distinction.

Study source: independently reconstructed course guides and editorial exam-task notes. Course capture: 16 October 2026; task expansion: 20 October 2026. These explanations are not an official AWS publication. Service qualifications retain their stated review dates.
