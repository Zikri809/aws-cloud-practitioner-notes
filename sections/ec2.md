# EC2: Virtual Machines

- [EC2: Virtual Machines](#ec2-virtual-machines)
  - [What is Amazon EC2?](#what-is-amazon-ec2)
    - [EC2 Sizing \& Configuration Options](#ec2-sizing--configuration-options)
    - [EC2 User Data](#ec2-user-data)
    - [EC2 Instance Types - Overview](#ec2-instance-types---overview)
      - [General Purpose Instances](#general-purpose-instances)
      - [Compute Optimized Instances](#compute-optimized-instances)
      - [Memory Optimized Instances](#memory-optimized-instances)
      - [Storage Optimized Instances](#storage-optimized-instances)
    - [EC2 Instance Types: Example](#ec2-instance-types-example)
  - [Introduction to Security Groups](#introduction-to-security-groups)
    - [Common Use Cases](#common-use-cases)
  - [Deeper Dive](#deeper-dive)
    - [Security Groups Diagram](#security-groups-diagram)
    - [Examples of Security Group Rules](#examples-of-security-group-rules)
    - [Good to Know](#good-to-know)
  - [Classic Ports to Know](#classic-ports-to-know)
  - [EC2 Instance Launch Types](#ec2-instance-launch-types)
    - [On Demand Instance](#on-demand-instance)
    - [Reserved Instances](#reserved-instances)
    - [Savings Plans](#savings-plans)
    - [Spot Instances](#spot-instances)
    - [Dedicated Hosts](#dedicated-hosts)
    - [Dedicated Instances](#dedicated-instances)
    - [Capacity Reservations](#capacity-reservations)
    - [EC2 Instance Launch Types Comparison](#ec2-instance-launch-types-comparison)
  - [Which purchasing option is right for my use case?](#which-purchasing-option-is-right-for-my-use-case)
  - [Price Comparison Example – m4.large – us-east-1](#price-comparison-example--m4large--us-east-1)
  - [Shared Responsibility Model for EC2](#shared-responsibility-model-for-ec2)
  - [EC2 Section – Summary](#ec2-section--summary)

## What is Amazon EC2?

- **Amazon Elastic Compute Cloud (EC2)** is a scalable compute service that allows users to rent virtual servers in the cloud.
- It provides flexibility to scale compute resources up or down based on demand, offering a cost-effective solution for applications with variable workloads.
- Key features include:
  - **On-Demand Instances**: Pay for compute capacity by the hour or second, with no long-term commitments.
  - **Reserved Instances**: Commit for one or three years to receive a billing discount. No Upfront, Partial Upfront, and All Upfront options are available.
  - **Spot Instances**: Use spare EC2 capacity at a variable Spot price. This is not a highest-bidder auction; workloads must tolerate interruption.

### EC2 Sizing & Configuration Options

- EC2 allows for customized sizing and configurations, which include:
  - **Instance Type**: Selecting the appropriate type based on the application's performance requirements.
  - **Storage Options**: Using Amazon EBS for persistent block storage or instance store for temporary storage.
  - **Networking**: Configuring VPCs, subnets, and security groups to control access and manage traffic.
  - **Elastic Load Balancing**: Distributing incoming traffic across multiple EC2 instances to enhance availability and fault tolerance.
  - **Auto Scaling**: Automatically adjusting the number of instances based on demand, ensuring the application has the necessary resources.

### EC2 User Data

- **User data** is a powerful feature for automating the setup of EC2 instances.
- It can be specified at instance launch and is executed on the instance when it first boots.
- bootstrapping means launching commands when a machine starts
- That script is **only run once** at the instance **first start**
- **Common use cases include**:
  - Installing software packages (e.g., `yum install httpd -y` for Apache).
  - Downloading configuration files or scripts from Amazon S3.
  - Configuring system settings and services (e.g., starting an application server).

### EC2 Instance Types - Overview

Amazon EC2 offers a variety of instance types, each designed to meet specific application requirements.(<https://aws.amazon.com/ec2/instance-types/>)

#### General Purpose Instances

- General purpose instances provide a balanced mix of compute, memory, and network resources.
- They are suitable for a variety of workloads and can handle different application types effectively.
- **Use Cases**:
  - Web servers and applications
  - Small to medium-sized databases
  - Development and testing environments
  - Enterprise applications

| **Instance Type** | **vCPUs** | **Memory (GiB)** | **Network Performance** | **Storage** |
| ----------------- | --------- | ---------------- | ----------------------- | ----------- |
| **t4g.micro**     | 2         | 1                | Up to 5 Gigabit         | EBS only    |
| **t3.micro**      | 2         | 1                | Up to 5 Gigabit         | EBS only    |
| **m5.large**      | 2         | 8                | Up to 10 Gigabit        | EBS only    |
| **m5.xlarge**     | 4         | 16               | Up to 10 Gigabit        | EBS only    |

#### Compute Optimized Instances

- Compute optimized instances are designed for applications that require high-performance processors and are well-suited for compute-intensive workloads.
- **Use Cases**:
  - High-performance web servers
  - Batch processing
  - Data analytics
  - Machine learning inference

| **Instance Type** | **vCPUs** | **Memory (GiB)** | **Network Performance** | **Storage** |
| ----------------- | --------- | ---------------- | ----------------------- | ----------- |
| **c5.large**      | 2         | 4                | Up to 10 Gigabit        | EBS only    |
| **c5.xlarge**     | 4         | 8                | Up to 10 Gigabit        | EBS only    |
| **c5.2xlarge**    | 8         | 16               | Up to 10 Gigabit        | EBS only    |
| **c5n.9xlarge**   | 36        | 96               | 50 Gigabit              | EBS only    |

#### Memory Optimized Instances

- Memory optimized instances provide high memory bandwidth and are optimized for applications that require large amounts of memory.
- **Use Cases**:
  - High-performance databases (e.g., SAP HANA)
  - In-memory caches (e.g., Redis, Memcached)
  - Real-time big data analytics
  - Data mining applications

| **Instance Type** | **vCPUs** | **Memory (GiB)** | **Network Performance** | **Storage** |
| ----------------- | --------- | ---------------- | ----------------------- | ----------- |
| **r5.large**      | 2         | 16               | Up to 10 Gigabit        | EBS only    |
| **r5.xlarge**     | 4         | 32               | Up to 10 Gigabit        | EBS only    |
| **r5.4xlarge**    | 16        | 128              | Up to 10 Gigabit        | EBS only    |
| **r5b.12xlarge**  | 48        | 384              | 20 Gigabit              | EBS only    |

#### Storage Optimized Instances

- Storage optimized instances are designed for applications that require high, sequential read and write access to large datasets.
- **Use Cases**:
  - Data warehousing applications
  - Hadoop distributed computing
  - High-frequency trading applications
  - NoSQL databases (e.g., Cassandra)

| **Instance Type** | **vCPUs** | **Memory (GiB)** | **Network Performance** | **Storage**         |
| ----------------- | --------- | ---------------- | ----------------------- | ------------------- |
| **i3.large**      | 2         | 15               | Up to 10 Gigabit        | 1 x 475 GB NVMe SSD |
| **i3.xlarge**     | 4         | 30               | Up to 10 Gigabit        | 1 x 950 GB NVMe SSD |
| **i3.2xlarge**    | 8         | 61               | Up to 10 Gigabit        | 1 x 1.9 TB NVMe SSD |
| **d2.8xlarge**    | 36        | 244              | Up to 10 Gigabit        | 12 x 2 TB HDD       |

### EC2 Instance Types: Example

Here's a quick overview of some example instance types in each category, along with their characteristics:

| **Instance Type** | **vCPUs** | **Memory (GiB)** | **Storage**         | **Use Case**                                                                                                               |
| ----------------- | --------- | ---------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **t3.micro**      | 2         | 1                | EBS only            | General-purpose applications with burstable performance; suitable for low-traffic web servers or development environments. |
| **c5.large**      | 2         | 4                | EBS only            | Compute-intensive applications like gaming, web servers, and machine learning inference.                                   |
| **m5.xlarge**     | 4         | 16               | EBS only            | Balanced workloads, such as small databases and caching fleets. Ideal for web applications.                                |
| **r5.xlarge**     | 4         | 32               | EBS only            | Memory-intensive applications such as databases, in-memory caches, and analytics workloads.                                |
| **i3.2xlarge**    | 8         | 61               | 1 x 1.9 TB NVMe SSD | Storage-intensive applications like NoSQL databases, data warehousing, and big data analytics.                             |
| **p3.2xlarge**    | 8         | 61               | EBS only            | GPU-accelerated computing for machine learning, high-performance computing (HPC), and graphics-intensive applications.     |

The instance examples above illustrate families, not the newest generation or a promise of Free Tier eligibility. Accounts created on or after 15 July 2025 use the newer credit-based Free Tier. Check [EC2 Free Tier eligibility](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-free-tier-usage.html) for the account and instance type.

## Introduction to Security Groups

- **Security Groups** are **virtual firewalls** that control inbound and outbound traffic to Amazon EC2 instances.
- They act at the instance level, not the subnet level, and provide a way to manage access to resources within a VPC (Virtual Private Cloud).
- Security groups can be associated with multiple instances and can be modified at any time, allowing for flexible management of network access.
- **Key Features**:
  - By default, all inbound traffic is denied, and all outbound traffic is allowed.
  - You can specify rules based on protocol (TCP, UDP, ICMP), port number, and source IP address or CIDR block.

### Common Use Cases

- Restricting access to an application server (allowing only specific IPs).
- Allowing traffic from specific ports (e.g., HTTP/HTTPS).
- Isolating database instances from public access.

## Deeper Dive

- **Inbound Rules**: Define the traffic allowed into your instances.
- **Outbound Rules**: Define the traffic allowed out from your instances.
- Each rule includes:
  - **Type**: The protocol used (e.g., HTTP, SSH).
  - **Protocol**: The protocol number (TCP = 6, UDP = 17).
  - **Port Range**: The port(s) affected by the rule.
  - **Source/Destination**: The IP address or CIDR range from which traffic is allowed.

### Security Groups Diagram

![Security Groups Diagram](../images/Security_Groups_Diagram.png)

### Examples of Security Group Rules

| **Rule Type** | **Protocol** | **Port Range** | **Source/Destination**      |
| ------------- | ------------ | -------------- | --------------------------- |
| Inbound Rule  | TCP          | 22             | 203.0.113.0/24 (SSH Access) |
| Inbound Rule  | TCP          | 80             | 0.0.0.0/0 (HTTP Access)     |
| Outbound Rule | All Traffic  | All            | 0.0.0.0/0                   |

### Good to Know

- **Limits**: Each security group can have up to 60 inbound and 60 outbound rules by default (this limit can be increased by requesting through AWS Support).
- **Default Security Group**: Its initial inbound rule allows traffic from network interfaces assigned to the same security group; its outbound rule allows traffic out. A newly created custom group initially has no inbound rules. Existing rules can be changed.
- **Multiple Security Groups**: You can assign multiple security groups to a single EC2 instance, enabling fine-grained control over traffic.
- **Security Best Practices**:
  - Apply the principle of least privilege (only allow necessary traffic).
  - Regularly review and audit security group rules.
  - Use descriptive names and tags for easy management.

## Classic Ports to Know

| **Port Number** | **Protocol** | **Service**         | **Description**                                                                                     |
| --------------- | ------------ | ------------------- | --------------------------------------------------------------------------------------------------- |
| 20              | TCP          | FTP (Data Transfer) | Used for transferring files over FTP.                                                               |
| 21              | TCP          | FTP (Control)       | Used for controlling file transfer sessions.                                                        |
| 22              | TCP          | SSH                 | Secure Shell for secure logins and command execution.                                               |
| 80              | TCP          | HTTP                | Hypertext Transfer Protocol for web traffic.                                                        |
| 443             | TCP          | HTTPS               | Secure HTTP for secure web traffic.                                                                 |
| 3389            | TCP          | RDP                 | Used for Remote Desktop Protocol, allowing users to connect to and control remote Windows machines. |

## EC2 Instance Launch Types

- [**On Demand Instances**](#on-demand-instance): short workload, predictable pricing
- [**Reserved**](#reserved-instances): (1 & 3 years)
  - **Reserved Instances**: long workloads
  - **Convertible Reserved Instances**: long workloads with flexible instances
- [**Savings Plans**](#savings-plans) (1 & 3 years): commitment to an amount of usage, long workload
- [**Spot Instances**](#spot-instances): short workloads, for cheap, can lose instances
- [**Dedicated Instances**](#dedicated-instances): no other customers will share your hardware
- [**Dedicated Hosts**](#dedicated-hosts): book an entire physical server, control instance placement
- [**Capacity Reservations**](#capacity-reservations): reserve capacity in a specific AZ for any duration

### On Demand Instance

- Billing granularity depends on the operating system and software offering. Eligible instance usage is billed per second with a 60-second minimum; check the current pricing terms rather than assuming all other operating systems use hourly rounding.
- No upfront payment is required for standard On-Demand usage.
- No long-term commitment
- Recommended for **short-term** and **un-interrupted workloads**, where you can't predict how the application will behave

### Reserved Instances

- Up to 72% discount compared to On-demand
- You reserve a specific instance attributes (Instance Type, Region, Tenancy, OS)
- Reservation Period – 1 year (+discount) or 3 years (+++discount)
- Payment Options – No Upfront (+), Partial Upfront (++), All Upfront (+++)
- Reserved Instance’s Scope – Regional or Zonal (reserve capacity in an AZ)
- Recommended for steady-state usage applications (think database)
- You can buy and sell in the Reserved Instance Marketplace

- Convertible Reserved Instance
  - Can change the EC2 instance type, instance family, OS, scope and tenancy
  - Up to 66% discount

### Savings Plans

- Get a discount based on long-term usage (up to 72% - same as RIs)
- Commit to a certain type of usage ($10/hour for 1 or 3 years)
- Usage beyond EC2 Savings Plans is billed at the On-Demand price

- **EC2 Instance Savings Plans** are tied to an instance family in a Region. **Compute Savings Plans** are more flexible across eligible EC2, Fargate, and Lambda usage; they are not tied to one EC2 family or Region.
- Flexible across:
  - Instance Size (e.g., m5.xlarge, m5.2xlarge)
  - OS (e.g., Linux, Windows)
  - Tenancy (Host, Dedicated, Default)

### Spot Instances

- Can get a discount of up to 90% compared to On-demand
- Instances can be interrupted because AWS needs the capacity, the Spot price exceeds a configured maximum, or constraints cannot be met. A low price does not guarantee continued capacity.
- The MOST cost-efficient instances in AWS
- Useful for workloads that are resilient to failure
  - Batch jobs
  - Data analysis
  - Image processing
  - Any distributed workloads
  - Workloads with a flexible start and end time
- Not suitable for critical jobs or databases

### Dedicated Hosts

- A physical server with EC2 instance capacity fully dedicated to your use
- Allows you to address compliance requirements and use your existing server- bound software licenses (per-socket, per-core, pe—VM software licenses)
- Purchasing Options:
  - On-demand – pay per second for active Dedicated Host
  - Reserved - 1 or 3 years (No Upfront, Partial Upfront, All Upfront)
- Compare host-level pricing and license requirements with other options; a Dedicated Host is a physical host, not a per-instance price equivalent.
- Useful for software that have complicated licensing model (BYOL – Bring Your Own License)
- Or for companies that have strong regulatory or compliance needs

### Dedicated Instances

- Instances run on hardware that’s dedicated to you
- May share hardware with other instances in same account
- No control over instance placement (can move hardware after Stop / Start)

### Capacity Reservations

- Reserve On-Demand instances capacity in a specific AZ for any duration
- An active reservation holds matching capacity in the specified AZ, subject to its configuration and lifecycle.
- Immediate-use reservations normally have no term commitment. Future-dated reservations have commitment rules. A Capacity Reservation itself is not a billing discount.
- Combine with Regional Reserved Instances and Savings Plans to benefit from billing discounts
- You’re charged at On-Demand rate whether you run instances or not
- Suitable for short-term, uninterrupted workloads that needs to be in a specific AZ

### EC2 Instance Launch Types Comparison

| Purchasing option | Commitment and purpose | Important distinction |
| --- | --- | --- |
| On-Demand | Usage-based compute without a term commitment | Billing granularity depends on the OS and product. |
| Reserved Instances | One- or three-year billing commitment | Zonal reservations include capacity; Regional reservations provide billing benefits without reserving capacity. |
| Compute Savings Plans | One- or three-year hourly spend commitment | Covers eligible EC2, Fargate, and Lambda usage; other Savings Plans types have different scopes. |
| Spot | Spare EC2 capacity for interruption-tolerant work | Interruptions can result from capacity, price, or constraints; design for interruption. |
| Dedicated Hosts | Physical host allocation, including eligible BYOL uses | Compare host-level pricing and licensing requirements. |
| Dedicated Instances | Instances on hardware dedicated to one account | Does not provide the host placement controls of Dedicated Hosts. |
| Capacity Reservations | Holds matching EC2 capacity in an AZ | No inherent discount; future-dated reservations have commitment rules. |

## Which purchasing option is right for my use case?

- **On-Demand Instances**:
  - Staying at a resort whenever we want and paying the full price for each night.
  - Ideal for a startup running a web application with unpredictable traffic spikes.
- **Reserved Instances**:
  - Planning a long vacation in advance, allowing us to get a significant discount for booking ahead.
  - Best for a company operating a database server that requires constant uptime for a year.
- **Savings Plans**:
  - Committing to a set amount per hour for a specified duration while enjoying any room type
  - Suitable for a SaaS provider that anticipates steady usage of compute resources over three years.
- **Spot Instances**:
  - Using spare rooms at the provider's current discounted price, accepting that the capacity can be reclaimed.
  - Perfect for a research team processing large data sets where jobs can be paused and resumed.
- **Dedicated Hosts**:
  - Renting an entire wing of the resort exclusively for ourselves.
  - Appropriate for a financial institution needing to comply with strict regulatory requirements and using custom software licenses.
- **Dedicated Instances**:
  - Having a private room that's solely ours but sharing some amenities with other guests.
  - Great for a business running non-critical applications that need some level of hardware isolation.
- **Capacity Reservations**:
  - Booking a room for a set period at full price, even if we don’t end up using it.
  - Useful for an enterprise ensuring EC2 capacity for a new product launch in a specific availability zone.

## Price Comparison Example – m4.large – us-east-1

The old m4.large dollar-price table has been removed: it mixed instance and host pricing and lacked reproducible configuration and date information. Use the [AWS Pricing Calculator](https://calculator.aws/) with the exact Region, OS, tenancy, term, and payment option. Spot prices change, and monthly cost depends on actual usage.

## Shared Responsibility Model for EC2

| **Responsibility**          | **AWS Responsibilities**                                                                                 | **User Responsibilities**                                                 |
| --------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Infrastructure Security** | The security of the underlying infrastructure, including hardware, software, networking, and facilities. | Securing the EC2 instances, including operating systems and applications. |
| **Physical Security**       | Ensures physical security of data centers where EC2 instances run.                                       | N/A                                                                       |
| **Network Security**        | Implements security measures for the network, including firewalls and DDoS protection.                   | Configuring security groups, network ACLs, and VPC settings.              |
| **Data Protection**         | Provides encryption options for data at rest and in transit.                                             | Managing data encryption and access control.                              |
| **Access Management**       | Offers IAM services to manage access to AWS resources.                                                   | Configuring IAM users, roles, and policies for access management.         |
| **Compliance**              | Complies with various compliance standards and certifications for infrastructure.                        | Compliance related to the applications and data hosted on EC2 instances.  |
| **Patch Management**        | Provides a secure and up-to-date infrastructure.                                                         | Applying patches and updates to the operating system and applications.    |

## EC2 Section – Summary

- EC2 Instance: AMI (OS) + Instance Size (CPU + RAM) + Storage + security groups + EC2 User Data
- Security Groups: Firewall attached to the EC2 instance
- EC2 User Data: Script launched at the first start of an instance
- SSH: start a terminal into our EC2 Instances (port 22)
- EC2 Instance Role: link to IAM roles
- Purchasing Options: On-Demand, Spot, Reserved (Standard or Convertible), Savings Plans, Dedicated Hosts, Dedicated Instances, and Capacity Reservations.

## Discounts, capacity, and isolation

Answer three separate questions when choosing an EC2 purchasing option:

| Question | Distinction |
| --- | --- |
| How is usage billed? | On-Demand usage, eligible Reserved Instance discounts, Savings Plans commitments, or interruptible Spot capacity |
| Must capacity be held in a particular AZ? | A matching Capacity Reservation addresses capacity assurance; a discount alone is insufficient |
| Is physical host control required? | Dedicated Hosts provide host-level visibility and control; Dedicated Instances provide dedicated tenancy without the same controls |

A restartable batch job can consider Spot. A workload that must run uninterrupted cannot rely on spare-capacity availability alone. Commitments can be underused, and stopping an instance can leave storage and other charges.

Course basis: AWS Cloud Practitioner Essentials, Module 2, captured 16 October 2026. Reference: [EC2 purchasing options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html).

## AWS documentation review

Reviewed 16 October 2026. Corrected Spot pricing, RI payment choices, Savings Plans scope, default security-group behavior, instance examples, and unsupported price comparisons.

- [EC2 instance types](https://docs.aws.amazon.com/ec2/latest/instancetypes/instance-types.html)
- [EC2 On-Demand pricing](https://aws.amazon.com/ec2/pricing/on-demand/)
- [Spot interruptions](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-interruptions.html)
- [Default security group](https://docs.aws.amazon.com/vpc/latest/userguide/default-security-group.html)
- [Savings Plans types](https://docs.aws.amazon.com/savingsplans/latest/userguide/plan-types.html)
- [Capacity Reservations](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html)
