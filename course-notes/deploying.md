# Deploying and Managing Infrastructure at Scale

Work through the explanations, examples, and service comparisons below. Use the [reference notes](#reference-notes) for revision, or follow the [exam-task reading path](/study-guide#detailed-reading-by-exam-task) to study in syllabus order.

## Exam task 3.1: Deploy and operate workloads

### Deployment models

The companion reading adds deployment models that are easy to miss if you study only the videos.

| Model | Where the workload operates | Example | Main distinction |
|---|---|---|---|
| Cloud | In a cloud provider's environment | An application using cloud compute, databases, and storage | Cloud-hosted resources |
| On premises | In the organization's own or colocated environment | A locally operated application using virtualized servers | The organization retains local infrastructure operations |
| Hybrid | Across connected cloud and on-premises environments | A local legacy application works with cloud analytics | The environments work together |

A requirement to keep one system locally does not prevent an organization from using cloud services for other parts of its business.

**Exam extension:** Multi-cloud means using more than one cloud provider. Hybrid emphasizes integrating different environments, typically on premises with cloud. The reading says multi-cloud deployments can also be considered hybrid; avoid learning that as a universal synonym. In an exam scenario, identify the actual environments and their integration.

Deployment models differ from service models such as IaaS, PaaS, and SaaS. Deployment describes where resources operate; service models describe the level of service and management supplied. Revisit those service models in later modules.

*Adapted study material; [Module 1, section 5 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/Bz4gC/welcome-to-aws-cloud-practitioner-essentials).*

### Provision resources through AWS APIs

An API defines operations that software can request. The course shows three ways of invoking AWS service APIs:

| Method | How you use it | Choose it when |
|---|---|---|
| AWS Management Console | Browser-based interface | You need visual exploration or an individual administrative task |
| AWS CLI | Commands in a terminal or script | You want repeatable command-line operations |
| AWS SDK | Language-specific libraries in application code | Your program needs to interact with AWS services |

The CLI and SDK do not bypass permissions. They provide different interfaces to authorized operations. Repeated manual clicks can introduce inconsistencies; scripts can repeat the intended configuration, provided the script is correct.

AWS CloudShell is the browser-accessible shell environment shown in the video, with the AWS CLI available. CloudShell and the CLI are different concepts: one is an environment in which commands run, while the other is the command-line tool.

**Exam extension:** Infrastructure as code describes resources in versioned definitions for repeatable provisioning. AWS CloudFormation is an example. The exam can distinguish this from manually provisioning a resource once. This module demonstrates CLI and SDK automation rather than teaching full infrastructure-as-code workflows.

#### EC2 responsibilities remain with the chosen layer

AWS operates the physical facilities, hardware, and underlying virtualization. You configure the EC2 guest OS, patches, installed applications, security groups, and access. The reading calls EC2 an unmanaged service to emphasize these customer duties. That does not mean AWS leaves its physical infrastructure unmanaged.

*Adapted study material; [Module 2, section 4 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/Awlt0/introduction-to-amazon-ec2).*

### Infrastructure as code makes deployment repeatable

Manual setup requires a person to reproduce configuration choices correctly each time. IaC describes infrastructure in a reusable definition that automation can apply. Benefits include repeatability, reviewable changes, version history, and less manual configuration drift between intended deployments.

The module focuses on AWS CloudFormation. You describe resources and properties in a declarative template: what should exist, rather than a sequence of individual console clicks. CloudFormation then coordinates the resource operations through AWS APIs.

**Exam extension:** Templates use JSON or YAML. A stack is the deployed collection managed as a unit. A template is a definition; it is not itself the running infrastructure. See [CloudFormation concepts](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-overview.html).

#### Keep access tools and deployment tools distinct

| Method | Best fit in a scenario |
|---|---|
| Management Console | Visual inspection or an individual interactive operation |
| CLI | Commands and scripts for routine operations |
| SDK | AWS operations called from application code |
| CloudFormation | Model and manage related resources as repeatable infrastructure |

A script can automate API calls without providing all the resource-management features of an IaC service. Likewise, using the CLI does not rule out IaC: it can be used to initiate a CloudFormation deployment.

#### Reusing templates across locations

The same logical design can be deployed into different environments. Regional resource identifiers, service availability, quotas, permissions, and input values can differ. A template improves consistency but does not guarantee byte-for-byte identical deployments in every Region or account.

**Exam extension:** StackSets supports coordinated deployment of stacks across accounts and Regions. One ordinary stack is not itself a deployment spanning arbitrary accounts and Regions. See [CloudFormation StackSets](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html).

#### What automation does not do by itself

CloudFormation does not automatically copy the live data inside every deployed resource, establish application failover, or turn an unsuitable design into a resilient one. It can deploy the resources and configuration you specify. The design still needs to meet its availability, security, and data requirements.

Template-driven deployment also does not make mistakes impossible. Incorrect templates can repeat incorrect configurations. Version control, review, and validation make changes easier to assess. See [CloudFormation best practices](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html).

*Adapted study material; [Module 4, section 8 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/ZYOJJ/introduction-to-going-global).*

### Reconstruct the instance launch demonstration

The demo launches a simple web server. Learn what each choice controls:

| Choice | Purpose | Distinguish it from |
|---|---|---|
| Name | Makes the resource recognizable | Its hardware specification |
| Amazon Machine Image (AMI) | Starting software and OS image, with launch-related configuration | Instance type |
| Instance type | Compute, memory, and other resource capabilities | Installed application software |
| Key pair | Supports suitable instance login methods | A rule allowing application network traffic |
| Network settings | Placement, connectivity, and permitted traffic | The guest OS image |
| EBS storage | Persistent block storage for the example instance | CPU or memory capacity |
| User data | Startup instructions, such as installing a web server | An AMI containing all software beforehand |

An AMI can be AWS-provided, custom-built, or supplied through AWS Marketplace. Reusing a suitable AMI helps launch consistent instances. It is a launch template for software configuration, not a running instance itself.

In the video, user data installs and starts Nginx. Selecting a generic Linux AMI by itself does not make that instance a configured web server. The example also permits HTTP traffic and uses the public address to view the page.

The demo mentions `t2.micro` and Free Tier eligibility. Treat that as a recorded example. Current eligibility depends on account and offer terms; this pack does not promise a free lab. No AWS resources were created while collecting these materials.

For certification study, identify why each configuration exists. You do not need to reproduce every console screen from memory.

*Adapted study material; [Module 2, section 5 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/Awlt0/introduction-to-amazon-ec2).*

### Further distinctions

#### Deploy Java code and its environment

Elastic Beanstalk coordinates deployment and supporting infrastructure for compatible applications. It can manage capacity, load balancing, scaling, and health monitoring. The customer still owns application code, environment choices, permissions, and applicable maintenance duties.

#### Authenticate programmatic CLI access

Access keys authenticate programmatic requests. A long-term IAM user key has an access key ID and secret access key; temporary role credentials also include a session token. Prefer federated/role-based temporary access for current human and workload use where possible.

### Exam requirements and service choices

#### Choose an access method and a repeatable operating process

| Need | AWS method/service | Reason to choose it |
|---|---|---|
| Explore a setting or perform an occasional manual change | AWS Management Console | Browser-based service interface |
| Script commands from a terminal | AWS CLI | Repeatable command-line calls using AWS APIs |
| Call AWS from application code | AWS SDKs | Language libraries handle service calls and common request mechanics |
| Integrate directly with a service endpoint | AWS APIs | Programmatic service operations; authentication and authorization still apply |
| Reproduce a complete resource environment | AWS CloudFormation | Declarative templates and stacks track provisioned infrastructure |
| Define infrastructure using a familiar programming language | AWS CDK | Related context: synthesizes CloudFormation templates; it is not a separate runtime hosting service |
| Deploy supported application code with environment management | AWS Elastic Beanstalk | Coordinates deployment and supporting resources, rather than merely storing a template |
| Offer preapproved infrastructure to internal teams | AWS Service Catalog | Curated products with provisioning controls |
| Operate managed nodes at scale | AWS Systems Manager | Inventory, patching, commands, sessions, and automation where configured |
| Understand a resource ceiling | Service Quotas | View applicable quotas and request increases for supported adjustable quotas |

A shell script can repeat commands, but an IaC template also describes the intended resources and their relationships. CloudFormation uses that definition to create/update a stack. Neither copying a template nor creating a stack automatically copies the data inside an existing database. Commands, templates, and application code all require authorized credentials; the interface does not grant access by itself.

**One-time versus repeatable:** Reviewing one unfamiliar setting in the console can be reasonable. Rebuilding the same network and application environment for several teams calls for a maintained, reviewed definition. Systems Manager then helps operate eligible machines after deployment. CodePipeline can coordinate application release stages, while CodeBuild performs a build stage; neither is a replacement name for CloudFormation.

#### Deployment models and operating evidence

Cloud deployment runs the workload in cloud infrastructure. An on-premises environment runs in the customer's environment. Hybrid connects or combines on-premises and cloud resources. **AWS Outposts** extends supported AWS infrastructure/services to a customer site and connects with an AWS Region; it is not an independent public Region. **Direct Connect** and **VPN** provide connectivity for suitable hybrid designs.

For ongoing operations, use CloudWatch for metrics/logs/alarms, CloudTrail for API actions, and Config for supported resource configuration history. Service Quotas concerns permitted resource usage ceilings; a quota increase is not the same as buying capacity, and not every quota is adjustable.

**Worked choice:** A team needs identical infrastructure in three Regions, applications making AWS calls in Python, and secure administration of managed EC2 nodes. CloudFormation, an AWS SDK, and Systems Manager fit those requirements respectively. A saved console bookmark does not reproduce an infrastructure environment.

Sources: [CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html), [Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html), [Service Quotas](https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html), and [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/home.html).

### Before continuing

Explain Console versus CLI versus SDK/API, repeatable IaC, cloud/hybrid/on-premises deployment, and operational automation. Choose by how the user needs to provision or operate resources.

Explain the main concepts aloud and compare the services with similar purposes. Return to the relevant section whenever you cannot justify the distinction.

## Exam task 3.8: Other service categories

### Development services: build, orchestrate, trace, and expose data

| Requirement | Service | Distinction |
|---|---|---|
| Compile code, run tests, produce artifacts | AWS CodeBuild | Executes build jobs |
| Coordinate release stages and integrations | AWS CodePipeline | Orchestrates the delivery workflow |
| Trace requests through distributed components | AWS X-Ray | Timing, errors, service relationships |
| Managed GraphQL API over data sources | AWS AppSync | API/data integration rather than CI/CD |
| Develop/host/manage frontend and full-stack app capabilities | AWS Amplify | Application development and hosting workflow |

CodePipeline can invoke CodeBuild. They are not interchangeable names for the same task: a workflow has stages, and a build stage needs a build executor. Pipeline behavior follows its configuration; automatic release does not mean every code change must immediately enter production without approvals or checks.

**Exam extension:** Continuous delivery keeps changes ready for release and can include a production approval. Continuous deployment automatically releases passing changes according to the workflow. The course uses CI/CD broadly; focus on automation and service roles rather than assuming all pipelines have identical gates.

X-Ray helps find where time is spent or where a request fails across a distributed system. A trace differs from an aggregate CloudWatch metric or an API audit event in CloudTrail. Tracing requires supported integration/instrumentation, permissions, context propagation, and sampling choices. It does not automatically record every request through every component merely because the service exists.

**Current implementation note:** AWS has moved the X-Ray SDKs/daemon into maintenance mode and recommends OpenTelemetry-based instrumentation. This concerns instrumentation, not a claim that the X-Ray service has disappeared. Retain “X-Ray → distributed tracing” for course recognition; use current guidance for new implementation. [X-Ray instrumentation guidance](https://docs.aws.amazon.com/xray/latest/devguide/xray-sdk-migration.html).

AppSync helps expose supported backend sources through a managed GraphQL API. GraphQL lets the client specify fields it needs. Authorization, resolvers, and backend access still require configuration. Amplify supports app development/hosting and integration of capabilities such as authentication, data, APIs, and storage; it does not remove all application security or cost decisions.

*Adapted study material; [Module 13, section 4 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/T6DZG/introduction-to-well-architected-solutions).*

Related explanations for this task: [cloud integration](/notes/cloud_integration#exam-task-38-other-service-categories), [other aws services](/notes/other_aws_services#exam-task-38-other-service-categories).

Study source: independently reconstructed course guides and editorial exam-task notes. Course capture: 16 October 2026; task expansion: 20 October 2026. These explanations are not an official AWS publication. Service qualifications retain their stated review dates.
