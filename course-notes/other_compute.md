# Other Compute

Work through the explanations, examples, and service comparisons below. Use the [reference notes](#reference-notes) for revision, or follow the [exam-task reading path](/study-guide#detailed-reading-by-exam-task) to study in syllabus order.

## Exam task 3.3: Compute services

### Control and management form a spectrum

Module 2 introduced EC2 virtual machines. Customers choose and maintain the guest OS and installed applications, while AWS maintains the underlying infrastructure. The course calls this unmanaged compute to emphasize the customer's operational work. It does not mean AWS leaves its own infrastructure unmanaged.

Managed services shift more work to AWS. Serverless services remove the need to provision and administer the servers hosting the workload. Physical servers still exist. The change is who operates them and which controls the customer uses.

| Model illustrated in the course | Customer focus | Operational tradeoff |
|---|---|---|
| EC2 | Guest OS, application, and instance configuration | Greater host-level choice with more administration |
| Managed application deployment | Code and environment settings | Automates some infrastructure work while retaining resource visibility |
| Serverless function or container compute | Function code or container application and service settings | Less host administration, with service-specific constraints |

The coffee shop compares a highly configurable espresso machine with a simpler pod machine. The analogy illustrates control versus upkeep. It does not mean managed services are suitable only for simple applications.

#### Shared responsibility remains

Removing server maintenance does not remove responsibility for permissions, application logic, dependencies, secrets, data, and configuration. The video says Lambda handles all security; read that as the security of the service infrastructure, not every security requirement of your application.

For Fargate, AWS manages the underlying infrastructure and container runtime, while customers secure their container images and applications. This is described in [AWS's container responsibility guidance](https://docs.aws.amazon.com/eks/latest/best-practices/compliance.html).

*Adapted study material; [Module 3, section 2 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/o7lW1/introduction-to-serverless-computing).*

### Lambda runs functions in response to work

AWS Lambda is the function-oriented serverless compute service introduced here. You deploy code, configure how it is invoked, and let Lambda manage its execution infrastructure.

The course describes four steps:

1. Deploy function code.
2. Configure an event source or another invocation method.
3. Execute the function when work arrives.
4. Monitor behavior and pay according to the relevant usage model.

An event carries information about what happened or what work should be done. Examples in the lessons include image uploads, user actions, incoming requests, and messages waiting for processing.

#### Terms to distinguish

| Term | Meaning |
|---|---|
| Function | Your deployed code and its configuration |
| Runtime | The environment that connects the language-specific code to Lambda execution |
| Trigger or event source | How work reaches the function |
| Execution role | Permissions the function uses to access AWS resources |
| Memory setting | A configured resource choice affecting performance and price |
| Logs | Execution output used to inspect and diagnose behavior |

The course names Java, Python, and Node.js as supported runtime examples. It also mentions custom runtimes. “Any programming language” means runtime or packaging options can extend language support; it is not a promise that every language or dependency runs unchanged on every Lambda configuration.

#### When Lambda fits

The course's image-processing example is a good starting point: an upload creates a unit of work; code resizes or classifies the image; output is stored or a notification follows. Lambda also fits suitable request handling and short data-processing tasks.

Choose it when event-driven function execution and reduced server administration satisfy the requirement. A workload requiring detailed host control or an uninterrupted long-running process may fit another compute option better.

#### Execution time and scaling are bounded

The recorded video teaches a 15-minute maximum. For the standard function model used in the course, the configured timeout can reach 900 seconds. **Current-documentation qualification:** AWS now documents additional Lambda compute configurations with different limits for some invocation modes. Treat 15 minutes as the course's standard-function rule, rather than a universal claim about every current Lambda product configuration. See [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html).

**Exam extension:** Automatic scaling still operates within concurrency quotas and configured limits. It does not guarantee unlimited simultaneous execution or a particular response time. Application design and downstream dependencies still matter.

#### Pricing qualification

The reading repeatedly describes paying only for execution time. For ordinary on-demand functions, requests and execution duration are important billing dimensions, with allocated memory affecting duration pricing. Optional features and connected services can add charges. Do not treat elapsed runtime as the entire system bill. See [Lambda pricing](https://aws.amazon.com/lambda/pricing/).

*Adapted study material; [Module 3, section 3 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/o7lW1/introduction-to-serverless-computing).*

### Understand the SQS-to-Lambda demonstration

The demo reuses the queue concept from Module 2. The instructor places text messages in SQS and creates a Lambda function from a blueprint. The function logs message identifiers and text. An execution role grants the needed queue access, and an SQS event source mapping connects the workflow.

```text
Producer sends messages
        |
        v
     SQS queue
        |
        | Lambda polls through an event source mapping
        v
 Lambda function processes a batch
        |
        v
 CloudWatch logs show the function's output
```

The video says the queue triggers the function whenever a message is added. More precisely, the integration polls SQS and invokes the function with message batches. Successful processing permits the integration to delete the messages. Failures can cause messages to be delivered again. See [Lambda with SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html).

For the exam, retain the roles: SQS buffers work, Lambda executes processing, IAM permissions authorize access, and CloudWatch provides logs. A trigger configuration alone does not grant all resource permissions.

**Exam extension:** Consumers should handle duplicate processing safely. An empty queue alone is weaker evidence than confirming the expected work and logs; the demo checks logs as well. No queues, functions, roles, or other AWS resources were created while collecting this module.

*Adapted study material; [Module 3, section 4 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/o7lW1/introduction-to-serverless-computing).*

### Containers package an application environment

A container packages application code and its runtime dependencies into a deployable unit. This reduces differences between development, test, and production environments. The lesson addresses the familiar problem of software working on a developer's machine but failing elsewhere.

Distinguish an image from a running container: an image is the packaged artifact; a container is a running instance of that artifact.

| Virtual machine | Container |
|---|---|
| Has its own guest OS | Typically shares an operating-system kernel with its host environment |
| Virtualizes a machine environment | Packages and isolates an application environment |
| Usually includes more OS overhead | Often lighter and quicker to start |

The comparison is a general pattern, not a performance guarantee. Container portability also has constraints: operating system, CPU architecture, runtime, configuration, networking, and external services still need to be compatible. “Works on any computer” is too absolute.

Containers and VMs can be used together. Containers can run on EC2 instances; choosing containers does not automatically make the deployment serverless.

*Adapted study material; [Module 3, section 5 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/o7lW1/introduction-to-serverless-computing).*

### Separate registry, orchestration, and compute

This is the most useful container distinction in the module:

| Layer | Service examples | Question it answers |
|---|---|---|
| Registry | Amazon ECR | Where are the container images stored? |
| Orchestration | Amazon ECS or Amazon EKS | How are containers scheduled and managed? |
| Compute | EC2 or AWS Fargate | Where do the containers execute? |

Amazon Elastic Container Registry (ECR) stores and manages images. It is not the service that executes an application merely because its image has been uploaded.

Amazon Elastic Container Service (ECS) provides AWS container orchestration. Amazon Elastic Kubernetes Service (EKS) provides managed Kubernetes. Kubernetes is an open-source container orchestration platform. The deciding clue for EKS is a Kubernetes requirement or ecosystem, rather than simply the size of the organization.

Orchestration coordinates container lifecycle: placement, starting and stopping, recovery, and scaling according to configuration. It reduces manual work. It does not infer every desired scaling policy or fix application defects automatically.

#### EC2 versus Fargate for containers

| Choice | What the customer manages | Strong clue |
|---|---|---|
| Self-managed EC2 container hosts | Host selection, OS, capacity, and container workload configuration | Need for specific host capabilities or direct host control |
| Fargate | Container workload, resource settings, access, and application behavior | Run supported containers without administering the host fleet |

Fargate is a serverless compute engine for containers, usable with ECS and supported EKS workloads. It supplies compute; ECS/EKS supply orchestration. It does not replace the registry or the orchestrator. AWS's [container service decision guide](https://docs.aws.amazon.com/pdfs/decision-guides/latest/containers-on-aws-how-to-choose/containers-on-aws-how-to-choose.pdf) explains this separation.

The course labels some options as ideal for startups and others for enterprises. Use workload requirements instead of business size as your exam decision rule. A small team may need Kubernetes; an enterprise may choose Fargate to reduce operations.

**Exam extension:** The course's EC2-or-Fargate pair is a foundational comparison, not an exhaustive list of today's compute modes. AWS also documents options such as ECS Managed Instances. Learn the lesson's roles first and consult [current ECS capacity options](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/capacity-launch-type-comparison.html) when evaluating an actual deployment.

#### Put the pieces in order

Build an image, store it in ECR, define how the orchestrator should run the application, and choose compatible compute. The course illustrates this with ECR plus ECS/EKS plus EC2/Fargate.

Lambda and Fargate both reduce server administration but expose different workload models. Lambda centers on function invocation. Fargate centers on running containers through a container orchestrator. The fact that packaging can involve a container does not by itself decide the service.

*Adapted study material; [Module 3, section 6 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/o7lW1/introduction-to-serverless-computing).*

### Additional services solve specific requirements

#### Elastic Beanstalk: deploy the application and automate the environment

With Elastic Beanstalk, developers provide application code and environment choices. The service coordinates resources such as EC2, load balancing, scaling, and health monitoring, while customers retain visibility and control of the environment.

Choose it when the scenario emphasizes deploying a supported web application without assembling each infrastructure component separately. Distinguish it from Lambda function invocation and from Lightsail's simpler bundled hosting experience. “Managed” does not make the deployed resources disappear or eliminate application responsibility. See [Lightsail, Beanstalk, and EC2 compared](https://docs.aws.amazon.com/decision-guides/latest/decision-guides/lightsail-elastic-beanstalk-ec2.html).

#### AWS Batch: schedule and execute batch jobs

AWS Batch manages batch workloads and compute resources around job requirements. Course examples include simulations, data processing, transcoding, and scientific analysis.

Choose Batch when a scenario centers on scheduling and processing a collection of jobs. It can use different compute approaches; Batch is not a synonym for EC2 and is not restricted to function-style execution. **Qualification:** Infrastructure duties depend on whether the compute environment is managed or unmanaged and on its compute choice. See [AWS Batch overview](https://docs.aws.amazon.com/batch/latest/userguide/what-is-batch.html).

#### Amazon Lightsail: straightforward bundled hosting

Lightsail offers a simpler experience for workloads such as basic websites, blogs, and small applications. The reading highlights virtual private servers and predictable monthly bundles, along with related hosting resources.

Choose it when the requirement is a straightforward hosting package. A bundle still has limits and pricing terms; predictable pricing does not mean unlimited free consumption. Having a small business is a contextual clue, not a technical requirement for using the service.

#### AWS Outposts: AWS infrastructure at a local site

Outposts extends AWS infrastructure and services to an on-premises location. It supports workloads needing local processing, low latency to local systems, or particular data location requirements.

Distinguish physical AWS infrastructure at the customer's site from simply connecting an ordinary on-premises server to an AWS Region. **Exam extension:** Outposts offerings have requirements for site facilities and connectivity, and do not make every AWS service available locally. They are not a blanket solution for disconnected operation or all compliance requirements. See [AWS Outposts overview](https://docs.aws.amazon.com/outposts/latest/userguide/what-is-outposts.html).

*Adapted study material; [Module 3, section 7 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/o7lW1/introduction-to-serverless-computing).*

### Choose the service from the requirement

| Scenario clue | First service or combination to consider |
|---|---|
| Direct guest OS administration and machine configuration | EC2 |
| Suitable event-driven function processing | Lambda |
| Store and version container images | ECR |
| AWS-native container orchestration | ECS |
| Managed Kubernetes | EKS |
| Supported containers without managing host servers | Fargate with ECS or EKS |
| Deploy web application code into an automatically provisioned environment | Elastic Beanstalk |
| Schedule and run many batch jobs | AWS Batch |
| Simple hosting package | Lightsail |
| AWS infrastructure running at an on-premises site | Outposts |

These are study cues. Several services can technically support a broad workload, so the requirement about management, runtime, or environment usually determines the best answer.

*Adapted study material; [Module 3, section 8 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/o7lW1/introduction-to-serverless-computing).*

### Common errors to avoid

- Serverless still uses servers and still requires customer security configuration.
- A container is not automatically serverless, and an image registry does not execute containers.
- EKS supplies Kubernetes orchestration; Fargate supplies compatible container compute.
- An execution role grants resource access; an event source mapping connects queue processing.
- The standard Lambda timeout taught in the course should not be generalized to every newer compute configuration.
- Lambda cost is not solely a stopwatch measurement of code execution.
- Container portability reduces environment drift without guaranteeing compatibility everywhere.
- Fully managed does not mean every scaling, network, application, and permissions decision is automatic.

*Adapted study material; [Module 3, section 9 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/o7lW1/introduction-to-serverless-computing).*

### Put the module together: an online retailer

Suppose a retailer needs ordinary web serving, image processing, and order fulfillment. This original example combines the lessons:

1. Choose an appropriate EC2 category for each workload. Balanced web serving and accelerator-heavy processing may need different resource profiles.
2. Use a suitable AMI and repeatable provisioning to keep each tier consistent.
3. Place application capacity across multiple AZs for resilience.
4. Use an Auto Scaling group to adjust the web tier and ELB to distribute requests.
5. Put orders on SQS so workers can process a backlog independently of the storefront.
6. Use SNS if billing and fulfillment each need their own notification; separate subscribed queues can buffer their work.
7. Consider EventBridge if matching and routing events from several systems is the central requirement.
8. Match purchasing choices to the work: flexible initial use, committed predictable baseline, and interruptible batch processing have different needs.

These are illustrative choices, not a complete production design. The exam skill is identifying what each service contributes and which requirement determines the answer.

*Adapted study material; [Module 2, section 11 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/Awlt0/introduction-to-amazon-ec2).*

### Exam requirements and service choices

#### Choose control, packaging, and execution separately

| Service/feature | Recognition clue | What the customer still chooses |
|---|---|---|
| Amazon EC2 | Virtual machines and OS-level control | OS, instance family/size, patching, software, and permissions |
| Amazon Lightsail | Simplified virtual private server/application bundles | Bundle, application configuration, and applicable maintenance |
| AWS Elastic Beanstalk | Deploy supported application code with environment coordination | Code, environment settings, dependencies, and access |
| AWS Batch | Submit and schedule batch computing jobs | Job definitions, compute requirements, retry strategy, and permissions |
| AWS Lambda | Event-driven function execution | Code/runtime choices, memory, triggers, concurrency, and permissions |
| Amazon ECS | Managed container orchestration | Task/service definitions and compute option |
| Amazon EKS | Managed Kubernetes control plane | Kubernetes workloads and supported compute configuration |
| AWS Fargate | Run supported containers without managing worker servers | Task/pod resource needs, images, networking, and access |
| Amazon ECR | Store and distribute container images | Repositories, image contents, and access policies |
| AWS Outposts | Run supported AWS infrastructure at the customer site | Local requirements and supported deployment configuration |

ECR stores an image; ECS/EKS coordinate containers; Fargate or EC2 supplies eligible execution capacity. A container image in ECR is not running merely because it has been uploaded. Fargate is not a replacement orchestrator for Kubernetes; EKS remains the Kubernetes service when supported Fargate execution is selected.

#### Scaling and load balancers are different layers

EC2 Auto Scaling maintains configured instance capacity and adjusts it using chosen policies. Minimum, desired, and maximum capacity explain why it does not automatically launch unlimited servers or always scale to zero. AWS Auto Scaling is a broader scaling offering; **Application Auto Scaling** supports scalable dimensions of other supported services. Distinguish the scalable resource rather than assuming every scaling service manages EC2 instances.

**Application Load Balancer (ALB)** handles HTTP(S) application routing, such as paths or hostnames. **Network Load Balancer (NLB)** fits network/transport traffic such as TCP/UDP and static-IP requirements. **Gateway Load Balancer (GWLB)** supports distribution through compatible virtual network appliances. Elastic Load Balancing distributes requests to configured healthy targets; it does not itself buy the extra compute. For native WAF web ACL association with an ELB choice, ALB is the relevant option.

**Worked choice:** A company already uses Kubernetes and wants less worker-server management for eligible workloads. Consider EKS with Fargate. If it instead requires custom OS drivers on workers, EC2-based capacity may be necessary. A nightly restartable processing job suggests Batch and possibly Spot; a short event-triggered function suggests Lambda. Both may process data, but their execution models differ.

Sources: [AWS Batch](https://docs.aws.amazon.com/batch/latest/userguide/what-is-batch.html), [Fargate](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html), [ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html), and [load balancer types](https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html).

### Before continuing

Explain EC2 workload families, ECS versus EKS, Fargate versus managing hosts, Batch, and load-balancer purpose. Auto Scaling creates capacity; ELB distributes traffic.

Explain the main concepts aloud and compare the services with similar purposes. Return to the relevant section whenever you cannot justify the distinction.

Related explanations for this task: [ec2](/notes/ec2#exam-task-33-compute-services), [elb asg](/notes/elb_asg#exam-task-33-compute-services).

Study source: independently reconstructed course guides and editorial exam-task notes. Course capture: 16 October 2026; task expansion: 20 October 2026. These explanations are not an official AWS publication. Service qualifications retain their stated review dates.
