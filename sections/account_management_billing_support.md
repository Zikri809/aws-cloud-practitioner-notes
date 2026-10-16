# Account Management, Billing & Support

- [Account Management, Billing \& Support](#account-management-billing--support)
  - [AWS Organizations](#aws-organizations)
  - [Multi Account Strategies](#multi-account-strategies)
  - [Service Control Policies (SCP)](#service-control-policies-scp)
  - [AWS Organization - Consolidated Billing](#aws-organization---consolidated-billing)
  - [AWS Control Tower](#aws-control-tower)
  - [AWS Resource Access Manager (AWS RAM)](#aws-resource-access-manager-aws-ram)
  - [AWS Service Catalog](#aws-service-catalog)
  - [Pricing Models in AWS](#pricing-models-in-aws)
  - [Compute Pricing](#compute-pricing)
    - [EC2](#ec2)
    - [Lambda \& ECS](#lambda--ecs)
  - [Storage Pricing](#storage-pricing)
    - [S3](#s3)
    - [EBS](#ebs)
  - [Database Pricing - RDS](#database-pricing---rds)
  - [Content Delivery - CloudFront](#content-delivery---cloudfront)
  - [Networking Costs in AWS per GB - Simplified](#networking-costs-in-aws-per-gb---simplified)
  - [Savings Plan](#savings-plan)
  - [AWS Compute Optimizer](#aws-compute-optimizer)
  - [Billing and Costing Tools](#billing-and-costing-tools)
  - [AWS Pricing Calculator](#aws-pricing-calculator)
  - [Cost Allocation Tags](#cost-allocation-tags)
  - [Tagging and Resource Groups](#tagging-and-resource-groups)
  - [Cost and Usage Reports](#cost-and-usage-reports)
  - [Cost Explorer](#cost-explorer)
  - [Billing Alarms in CloudWatch](#billing-alarms-in-cloudwatch)
  - [AWS Budgets](#aws-budgets)
  - [AWS Cost Anomaly Detection](#aws-cost-anomaly-detection)
  - [AWS Service Quotas](#aws-service-quotas)
  - [Trusted Advisor](#trusted-advisor)
  - [Trusted Advisor - Support Plans](#trusted-advisor---support-plans)
  - [AWS Basic Support Plan](#aws-basic-support-plan)
  - [AWS Developer Support Plan](#aws-developer-support-plan)
  - [AWS Business Support Plan (24/7)](#aws-business-support-plan-247)
  - [AWS Enterprise On-Ramp Support Plan (24/7)](#aws-enterprise-on-ramp-support-plan-247)
  - [AWS Enterprise Support Plan (24/7)](#aws-enterprise-support-plan-247)
  - [Account Best Practices - Summary](#account-best-practices---summary)
  - [Billing and Costing Tools - Summary](#billing-and-costing-tools---summary)

## AWS Organizations

- Global service
- Allows to manage **multiple AWS accounts**
- The organization's controlling account is the **management account**. Master account is legacy terminology.
- Cost Benefits:
  - Consolidated Billing across all accounts - single payment method
  - Pricing benefits from aggregated usage (volume discount for EC2, S3…)
  - Pooling of Reserved EC2 instances for optimal savings
- API is available to **automate AWS account creation**
- Restrict account privileges using Service Control Policies (SCP)

## Multi Account Strategies

- Create accounts per **department**, per **cost center**, per **dev / test / prod**, based on regulatory restrictions (using SCP), for better resource isolation (ex: VPC), to have separate per-account service limits, isolated account for logging
- Multi Account vs One Account Multi VPC
- Use tagging standards for billing purposes
- Enable CloudTrail on all accounts, send logs to central S3 account
- Send CloudWatch Logs to central logging account

## Service Control Policies (SCP)

- Whitelist or blacklist IAM actions
- Applied at the OU or Account level
- SCPs do not restrict principals in the management account. They constrain applicable principals in member accounts and do not grant permissions themselves.
- SCP is applied to all the Users and Roles of the Account, including Root user
- The SCP does not affect service-linked roles
  - Service-linked roles enable other AWS services to integrate with AWS Organizations and can't be restricted by SCPs.
- Effective access depends on the complete SCP hierarchy plus IAM permissions. An allow-list strategy requires an allow at every applicable level; a deny-list strategy usually retains FullAWSAccess. Neither an SCP allow nor FullAWSAccess grants an IAM principal permissions by itself.
- Use cases:
  - Restrict access to certain services (for example: can’t use EMR)
  - Enforce PCI compliance by explicitly disabling services

## AWS Organization - Consolidated Billing

- When enabled, provides you with:
  - Combined Usage – combine the usage across all AWS accounts in the AWS Organization to share the volume pricing, Reserved Instances and Savings Plans discounts
  - One Bill – get one bill for all AWS Accounts in the AWS Organization
- The management account can turn off Reserved Instances discount sharing for any account in the AWS Organization, including itself

## AWS Control Tower

- Easy way to set up and govern a secure and compliant multi-account AWS environment based on best practices
- Benefits:
  - Automate the set up of your environment in a few clicks
  - Automate ongoing policy management using guardrails
  - Detect policy violations and remediate them
  - Monitor compliance through an interactive dashboard
- AWS Control Tower runs on top of AWS Organizations:
  - It automatically sets up AWS Organizations to organize accounts and implement SCPs (Service Control Policies)

## AWS Resource Access Manager (AWS RAM)

- Share AWS resources that you own with other AWS accounts
- Share with any account or within your Organization
- Avoid resource duplication!
- Supported resources include Aurora, VPC Subnets, Transit Gateway, Route 53, EC2 Dedicated Hosts, License Manager Configurations.

## AWS Service Catalog

- Users that are new to AWS have too many options, and may create stacks that are not compliant or in line with the rest of the organization
- Some users just want a quick self-service portal to launch a set of authorized products pre-defined by admins
- Includes: virtual machines, databases, storage options, etc…
- Enter AWS Service Catalog!

<img src="../images/service_catalog.png" height="230" width="350">

## Pricing Models in AWS

- AWS has 4 pricing models:
- **Pay as you go**: pay for what you use, remain agile, responsive, meet scale demands
- **Save when you reserve**: minimize risks, predictably manage budgets, comply with long-terms requirements
  - Reservations are available for EC2 Reserved Instances, DynamoDB Reserved Capacity, ElastiCache Reserved Nodes, RDS Reserved Instance, Redshift Reserved Nodes
- **Pay less by using more**: volume-based discounts
- **Pay less as AWS grows**

## Compute Pricing

### EC2

- Only charged for what you use
- Number of instances
- Instance configuration:
  - Physical capacity
  - Region
  - OS and software
  - Instance type
  - Instance size
- ELB running time and amount of data processed
- Detailed monitoring

- On-demand instances:
  - Minimum of 60s
  - Billing granularity depends on the OS/software offering; eligible usage is billed per second with a 60-second minimum.
- Reserved instances:
  - Discount depends on the term, offering, and payment choice; compare with the current published EC2 RI rates.
  - 1- or 3-years commitment
  - All upfront, partial upfront, no upfront
- Spot instances:
  - Up to 90% discount compared to On-demand on hourly rate
  - Use spare capacity at the current Spot price, accepting interruptions; this is not a highest-bidder auction.
- Dedicated Host:
  - On-demand
  - Reservation for 1 year or 3 years commitment
  - Savings plans as an alternative to save on sustained usage

### Lambda & ECS

- Lambda:
  - Pay per call
  - Pay per duration
- ECS:
  - EC2 Launch Type Model: No additional fees, you pay for AWS resources stored and created in your application
- Fargate:
  - Fargate Launch Type Model: Pay for vCPU and memory resources allocated to your applications in your containers

## Storage Pricing

### S3

- Storage class: S3 Standard, S3 Infrequent Access, S3 One-Zone IA, S3 Intelligent Tiering, S3 Glacier and S3 Glacier Deep Archive
- Number and size of objects: Price can be tiered (based on volume)
- Number and type of requests
- Data transfer OUT of the S3 region
- S3 Transfer Acceleration
- Lifecycle transitions
- Similar service: EFS (pay per use, has infrequent access & lifecycle rules)

### EBS

- Volume type (based on performance)
- Storage volume in GB per month provisioned
- IOPS:
  - General Purpose SSD: baseline performance is included; additional gp3 IOPS/throughput can incur charges.
  - Provisioned IOPS SSD: provisioned amount in IOPS
  - Magnetic: Number of requests
- Snapshots:
  - Added data cost per GB per month
- Data transfer:
  - Outbound data transfer are tiered for volume discounts
  - Inbound is free

## Database Pricing - RDS

- Per hour billing
- Database characteristics:
  - Engine
  - Size
  - Memory class
- Purchase type:
  - On-demand
  - Reserved DB instances offer supported No Upfront, Partial Upfront, or All Upfront choices; availability depends on the offering.
- Backup Storage: There is no additional charge for backup storage up to 100% of your total database storage for a region.
- Additional storage (per GB per month)
- Number of input and output requests per month
- Deployment type (storage and I/O are variable):
  - Single AZ
  - Multiple AZs
- Data transfer:
  - Outbound data transfer are tiered for volume discounts
  - Inbound is free

## Content Delivery - CloudFront

- Pricing is different across different geographic regions
- Aggregated for each edge location, then applied to your bill
- Data Transfer Out (volume discount)
- Number of HTTP/HTTPS requests
- CloudFront also offers flat-rate plans. The above describes pay-as-you-go factors, not every current pricing option.

## Networking Costs in AWS per GB - Simplified

- Use Private IP instead of Public IP for good savings and better network performance
- Evaluate data paths and service-specific cross-AZ charges, but preserve the resilience the workload requires. A cost note is not a recommendation to remove Multi-AZ redundancy. Public IPv4 addresses can also incur charges.

## Savings Plan

- Commit a certain $ amount per hour for 1 or 3 years
- Easiest way to setup long-term commitments on AWS
- EC2 Savings Plan
  - Up to 72% discount compared to On-Demand
  - Commit to usage of individual instance families in a region (e.g. C5 or M5)
  - Regardless of AZ, size (m5.xl to m5.4xl), OS (Linux/Windows) or tenancy
  - All upfront, partial upfront, no upfront
- Compute Savings Plan
  - Up to 66% discount compared to On-Demand
  - Regardless of Family, Region, size, OS, tenancy, compute options
  - Compute Options: EC2, Fargate, Lambda
- AWS also offers SageMaker AI Savings Plans and Database Savings Plans for supported usage. Database plans have different scope and eligibility; do not treat an EC2 reservation as a database-wide commitment.
- Manage commitments using the current Billing and Cost Management interfaces.
- Estimate pricing at <https://aws.amazon.com/savingsplans/pricing/>

## AWS Compute Optimizer

- Reduce costs and improve performance by recommending optimal AWS resources for your workloads
- Helps you choose optimal configurations and right - size your workloads (over/under provisioned)
- Uses Machine Learning to analyze your resources’ configurations and their utilization CloudWatch metrics
- Supported resources
  - EC2 instances
  - EC2 Auto Scaling Groups
  - EBS volumes
  - Lambda functions
- Potential savings depend on the workload and whether the recommended changes are appropriate; no fixed reduction is guaranteed.
- Recommendations can be exported to S3

## Billing and Costing Tools

- Estimating costs in the cloud:
  - Pricing Calculator
- Tracking costs in the cloud:
  - Billing Dashboard
  - Cost Allocation Tags
  - Cost and Usage Reports
  - Cost Explorer
- Monitoring against costs plans:
  - Billing Alarms
  - Budgets

## AWS Pricing Calculator

- Available at <https://calculator.aws/>
- Estimate the cost for your solution architecture

## Cost Allocation Tags

- Use cost allocation tags to track your AWS costs on a detailed level
- AWS generated tags
  - Automatically applied to the resource you create
  - Starts with Prefix aws: (e.g. aws: createdBy)
- User-defined tags
  - Defined by the user
  - User-defined cost allocation tags do not require a user: prefix. Activate the desired tag keys for billing allocation; aws: is the reserved AWS-generated prefix.

## Tagging and Resource Groups

- Tags are used for organizing resources:
  - EC2: instances, images, load balancers, security groups…
  - RDS, VPC resources, Route 53, IAM users, etc…
  - Resources created by CloudFormation are all tagged the same way
- Free naming, common tags are: Name, Environment, Team …
- Tags can be used to create **Resource Groups**
  - Create, maintain, and view a collection of resources that share common tags
  - Manage these tags using the Tag Editor

## Cost and Usage Reports

- Dive deeper into your AWS costs and usage
- The AWS Cost & Usage Report contains the most comprehensive set of AWS cost and usage data available, including additional metadata about AWS services, pricing, and reservations (e.g., Amazon EC2 Reserved Instances (RIs)).
- The AWS Cost & Usage Report lists AWS usage for each service category used by an account and its IAM users in hourly or daily line items, as well as any tags that you have activated for cost allocation purposes.
- Can be integrated with Athena, Redshift or QuickSight

## Cost Explorer

- Visualize, understand, and manage your AWS costs and usage over time
- Create custom reports that analyze cost and usage data.
- Analyze your data at a high level: total costs and usage across all accounts
- Or Monthly, hourly, resource level granularity
- Choose an optimal **Savings Plan**(to lower prices on your bill)
- **Current monthly cost/usage forecasts extend up to 18 months**, subject to supported granularity and sufficient history. Forecasts are estimates, not guaranteed bills.

- Cost Explorer – Monthly Cost by AWS Service
- Cost Explorer– Hourly & Resource Level
- Cost Explorer – Savings Plan Alternative to Reserved Instances
- Cost Explorer – Forecast Usage

## Billing Alarms in CloudWatch

- Billing data metric is stored in CloudWatch us-east1
- Billing data are for overall worldwide AWS costs
- It’s for actual cost, not for projected costs
- Intended a simple alarm (not as powerful as AWS Budgets)

## AWS Budgets

- Create budget and send alarms when costs exceeds the budget
- Budgets cover cost, usage, RI utilization/coverage, and Savings Plans utilization/coverage.
- For Reserved Instances (RI)
  - Track utilization
  - Supports EC2, ElastiCache, RDS, Redshift
- Up to 5 SNS notifications per budget
- Can filter by: Service, Linked Account, Tag, Purchase Option, Instance Type, Region, Availability Zone, API Operation, etc…
- Same options as AWS Cost Explorer!
- Monitoring-only budgets are free under current pricing; action-enabled budgets have their own allowance and pricing. Check AWS Cost Management pricing. Budgets are not a universal hard spending cap: notifications and actions can occur after charges are incurred.

## AWS Cost Anomaly Detection

- Continuously monitor your cost and usage using ML to detect unusual spends
- It learns your unique, historic spend patterns to detect one-time cost spike
and/or continuous cost increases (you don't need to define thresholds)
- Monitor AWS services, member accounts, cost allocation tags, or cost categories
- Sends you the anomaly detection report with root-cause analysis
- Get notified with individual alerts or daily/weekly summary (using SNS)

## AWS Service Quotas

- Notify you when you're close to a service quota value threshold
- Create CloudWatch Alarms on the Service Quotas console
- Example: Lambda concurrent executions
- Request a quota increase from AWS Service Quotas or shutdown resources before limit is reached


## Trusted Advisor

Trusted Advisor checks configurations and recommends improvements across **cost optimization, performance, security, fault tolerance, service limits, and operational excellence**. The old five-category and fixed seven-check descriptions are outdated. Access depends on support-plan entitlement; use the current check reference.

## Trusted Advisor - Support Plans

Basic includes a limited selection of checks. Business Support+, Enterprise Support, and Unified Operations provide broader capabilities; consult the current entitlement documentation.

## AWS Basic Support Plan

Included for all customers. Provides account/billing help, documentation, public service-health information, and community resources. Basic is not a paid technical support plan.

## Current paid support plans

| Plan | Distinguishing capability |
| --- | --- |
| Business Support+ | 24/7 technical support and AWS Support API access |
| Enterprise Support | Designated TAM and response targets for critical production cases |
| Unified Operations | Additional operational engagement, specialist expertise, and critical-workload support |

Compare current severity definitions and response targets on the official plan pages. Targets describe initial response or engagement, not guaranteed incident resolution.

## Legacy support-plan transition

As of this review, Developer Support, the old Business Support, and Enterprise On-Ramp are transition-era plans with a stated end date of **1 January 2027** in the commercial AWS Regions. Existing-customer transition rules differ by plan. AWS documents an exception for AWS GovCloud (US), where these plans remain available. New-account questions should use the current plan lineup rather than the old names.

## Account Best Practices - Summary

- Operate multiple accounts using Organizations
- Use SCP (service control policies) to restrict account power
- Easily setup multiple accounts with best-practices with AWS Control Tower
- Use Tags & Cost Allocation Tags for easy management & billing
- IAM guidelines: federated workforce access, temporary credentials, MFA, least privilege, and appropriate password/credential controls.
- Config to record all resources configurations & compliance over time
- CloudFormation to deploy stacks across accounts and regions
- Trusted Advisor to get insights, Support Plan adapted to your needs
- Send Service Logs and Access Logs to S3 or CloudWatch Logs
- CloudTrail to record API calls made within your account
- If your Account is compromised: change the root password, delete and rotate all passwords / keys, contact the AWS support

## Billing and Costing Tools - Summary

- **Compute Optimizer**: recommends resources’ configurations to reduce cost
- **Pricing Calculator**: cost of services on AWS
- **Billing Dashboard**: high level overview + free tier dashboard
- **Cost Allocation Tags**: tag resources to create detailed reports
- **Cost and Usage Reports**: most comprehensive billing dataset
- **Cost Explorer**: View current usage (detailed) and forecast usage
- **Billing Alarms**: in us-east-1 – track overall and per-service billing
- **Budgets**: more advanced – track usage, costs, RI, and get alerts
- **Savings Plans**: easy way to save based on long-term usage of AWS
- **Cost Anomaly Detection**: detect unusual spends using Machine Learning
- **Service Quotas**: notify you when you're close to service quota threshold

## AWS documentation review

Reviewed 16 October 2026. Updated support plans, Trusted Advisor categories, budget behavior, forecasting horizon, terminology, pricing caveats, and Free Tier guidance.

- [Current AWS Support plans](https://docs.aws.amazon.com/awssupport/latest/user/aws-support-plans.html)
- [Legacy support-plan transitions](https://docs.aws.amazon.com/awssupport/latest/user/support-plans-eos.html)
- [Trusted Advisor categories](https://docs.aws.amazon.com/awssupport/latest/user/get-started-with-aws-trusted-advisor.html)
- [AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html)
- [Cost Explorer forecasting](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html)
- [Cost allocation tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html)
- [Current Free Tier](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier.html)
- [Savings Plans types](https://docs.aws.amazon.com/savingsplans/latest/userguide/plan-types.html)
- [CloudFront pricing](https://aws.amazon.com/cloudfront/pricing/)
