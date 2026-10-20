# Other Compute

## What is Docker?

- Docker is a software development platform to deploy apps
- Apps are packaged in containers for a compatible operating-system kernel and CPU architecture.
- Apps run the same, regardless of where they’re run
  - Any machine
  - Packages dependencies consistently; host and runtime compatibility still matter.
  - Predictable behavior
  - Less work
  - Easier to maintain and deploy
  - Supports many languages and technologies when a compatible container image and host are available.
- Scale containers up and down very quickly (seconds)

### Where are Docker images stored?

- **Docker Hub**: Centralized public repository for storing Docker images.
- Public: Docker Hub <https://hub.docker.com/>
- Private: **Amazon ECR (Elastic Container Registry)**: AWS service for storing, managing, and deploying container images.

### Docker versus Virtual Machines

- Docker is ”sort of” a virtualization technology, but not exactly
- Resources are shared with the host => many containers on one server

| **Docker Containers**                  | **Virtual Machines (VMs)**                |
| -------------------------------------- | ----------------------------------------- |
| Lightweight, shares the host OS kernel | Heavier, includes full OS                 |
| Starts in seconds                      | Slower startup (minutes)                  |
| Portable, fast scaling                 | Not as portable, more resource-intensive  |
| Best for microservices & modern apps   | Best for running multiple OS environments |

## ECS (Elastic Container Service)

- Fully managed container orchestration service.
- Supports Docker containers.
- Launch Docker containers on AWS
- AWS takes care of starting / stopping containers
- Core compute choices include customer-managed EC2 instances and Fargate. ECS also offers managed-instance and external-capacity options; distinguish orchestration from responsibility for the host.
- Provides integration with IAM, VPC, ELB, and ECR.

## Fargate

- Serverless compute engine for containers, works with ECS and EKS.
- No need to manage EC2 instances.
- Pay for resources used (vCPU and memory).
- AWS just runs containers for you based on the CPU / RAM you need

## ECR (Elastic Container Registry)

- Fully managed Docker container registry.
- Stores, manages, and secures Docker images.
- Integrated with **ECS**, **EKS**, and **Fargate** for easy deployment.
- This is where you store your Docker images so they can be run by ECS or Fargate

## What’s Serverless?

- No need to provision, scale, or manage servers.
- Resources are automatically provisioned and scaled by AWS.
- Serverless is a new paradigm in which the developers don’t have to manage servers anymore…
- They just deploy code
- They just deploy… functions !
- Initially... Serverless == FaaS (Function as a Service)
- A managed service is not automatically serverless. For example, provisioned RDS instances still have capacity and instance choices; Lambda and Fargate remove host-server management for their supported workloads.
- Serverless does not mean there are no servers…
- it means you just don’t manage / provision / see them
- Ideal for event-driven and stateless applications.

## Why AWS Lambda?

- Serverless compute service to run code without managing infrastructure.
- Executes code in response to events (e.g., API calls, file uploads).
- Scales automatically and you only pay for usage.

| EC2                                                | Lambda                                    |
| -------------------------------------------------- | ----------------------------------------- |
| Virtual Servers in the Cloud                       | Virtual functions – no servers to manage! |
| Limited by RAM and CPU                             | Limited by time - short executions        |
| Continuously running                               | Run on-demand                             |
| EC2 Auto Scaling can add and remove instances automatically | Lambda scales supported invocations subject to concurrency and service quotas |

### Benefits of AWS Lambda

- **No server management**: AWS handles the infrastructure.
- **Automatic scaling**: Scales based on event triggers.
- **Flexible scaling**: Runs from a few requests per day to thousands per second.
- **Event-driven architecture**: Ideal for apps that need to respond to events.
- Easy Pricing:
  - Pay per request and compute time
  - Free tier of 1,000,000 AWS Lambda requests and 400,000 GBs of compute time
- Integrated with the whole AWS suite of services
- Event-Driven: functions get invoked by AWS when needed
- Integrated with many programming languages
- Easy monitoring through AWS CloudWatch
- Easy to get more resources per functions (up to 10GB of RAM!)
- Increasing RAM will also improve CPU and network!

### AWS Lambda Language Support

- Node.js
- Python
- Ruby
- Java
- Go through a supported OS-only/custom runtime (the old managed go1.x runtime is deprecated)
- Supported .NET runtimes
- Other languages through a custom runtime that implements the Lambda Runtime API; supported container images are another packaging option.
- Lambda Container Image
  - The container image must implement the Lambda Runtime API
  - ECS / Fargate is preferred for running arbitrary Docker images

### AWS Lambda Pricing: Example

- Based on number of requests and execution time.
- You can find overall pricing information here: <https://aws.amazon.com/lambda/pricing/>
- First **1 million requests/month** are free.
- After that, **$0.20 per million requests**.
- **Execution duration**: $0.00001667 for every GB-second used (first 400,000 GB-seconds free per month).
- - Pay per duration: (in increment of 1 ms)
  - 400,000 GB-seconds of compute time per month for FREE
  - == 400,000 seconds if function is 1GB RAM
  - == 3,200,000 seconds if function is 128 MB RAM
  - After that $1.00 for 600,000 GB-seconds
- These figures describe a conventional request/duration pricing example, not a quote for every configuration. Architecture, Region, usage tiers, provisioned concurrency, extra ephemeral storage, and newer execution options can change cost. Check current Lambda pricing and Free Tier account eligibility.

## Amazon API Gateway

- Managed service for creating, publishing, and monitoring REST, HTTP, and WebSocket APIs.
- Integrates with AWS Lambda for fully serverless APIs.
- Serverless and scalable
- Support for security, user authentication, API throttling, API keys, monitoring.
- Features depend on API type. For example, API Gateway's built-in API cache is a REST API feature; do not assume HTTP and WebSocket APIs provide the same features.

## AWS Batch

- Fully managed service for running batch processing workloads.
- Dynamically provisions compute resources based on job requirements.
- Suitable for large-scale data processing, such as machine learning and rendering tasks.
- Efficiently run 100,000s of computing batch jobs on AWS
- A “batch” job is a job with a start and an end (opposed to continuous)
- Batch will dynamically launch EC2 instances or Spot Instances
- AWS Batch provisions the right amount of compute / memory
- You submit or schedule batch jobs and AWS Batch does the rest!
- Batch jobs are defined as Docker images and run on ECS
- Helpful for cost optimizations and focusing less on the infrastructure

## Batch vs Lambda

| **AWS Batch**                               | **AWS Lambda**                             |
| ------------------------------------------- | ------------------------------------------ |
| Designed for **batch processing**           | Designed for **event-driven** architecture |
| Handles large-scale compute jobs            | Executes short-lived functions             |
| Custom EC2 instances or Fargate tasks       | Fully serverless, no server management     |
| Jobs may take minutes to hours              | Max execution time of 15 minutes           |
| Rely on EBS / instance store for disk space | Limited temporary disk space               |

## Amazon Lightsail

- Virtual servers, storage, databases, and networking
- Low & predictable pricing
- Simpler alternative to using EC2, RDS, ELB, EBS, Route 53…
- Great for people with little cloud experience!
- Can setup notifications and monitoring of your Lightsail resources
- Use cases:
  - Simple web applications (has templates for LAMP, Nginx, MEAN, Node.js…)
  - Websites (templates for WordPress, Magento, Plesk, Joomla)
  - Dev / Test environment
- Has high availability but no auto-scaling, limited AWS integrations

## Lambda Summary

- Lambda is Serverless, Function as a Service, seamless scaling, reactive
- Lambda Billing:
  - By the time run x by the RAM provisioned
  - By the number of invocations
- Lambda supports runtime-compatible container images. It is not a service for arbitrary long-running containers; use ECS/Fargate for those workloads.
- Invocation time: up to 15 minutes
- Use cases:
  - Create Thumbnails for images uploaded onto S3
  - Run a Serverless cron job
- API Gateway: expose Lambda functions as HTTP API

## Other Compute Summary

- Docker: container technology to run applications
- ECS: run Docker containers on EC2 instances
- Fargate:
- Run Docker containers without provisioning the infrastructure
- Serverless offering (no EC2 instances)
- ECR: managed private and public container-image repositories.
- Batch: run batch jobs on AWS across managed EC2 instances
- Lightsail: predictable & low pricing for simple application & DB stacks

## Registry, orchestration, and compute

A container image packages an application and its dependencies. A container is a running instance of that image. Three separate decisions describe a container deployment:

| Decision | AWS service |
| --- | --- |
| Where to store and retrieve images | Amazon ECR |
| How to coordinate containers | Amazon ECS, or Amazon EKS for Kubernetes |
| What supplies execution capacity | Compatible EC2 capacity or AWS Fargate |

For a Kubernetes requirement with supported containers and no host fleet to administer, consider EKS with Fargate. ECR stores the images; it does not schedule or execute them. Compatibility and service restrictions still apply.

In the course's SQS-to-Lambda example, an event source mapping polls the queue and invokes the function with batches. The execution role grants permissions; it is separate from the trigger. Failed processing can cause retries, so processing must account for repeated messages.

Course basis: AWS Cloud Practitioner Essentials, Module 3, captured 16 October 2026. References: [Fargate](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html) and [Using Lambda with SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html).

## AWS documentation review

Reviewed 16 October 2026. Corrected serverless definitions, EC2 scaling, Lambda runtime and container support, and pricing assumptions.

- [Lambda runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html)
- [Lambda container images](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html)
- [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html)
- [Lambda pricing](https://aws.amazon.com/lambda/pricing/)
- [ECS compute options](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html)
- [API Gateway API types](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html)
