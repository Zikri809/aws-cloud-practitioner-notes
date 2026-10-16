export const groups = [
  "Foundations",
  "Core services",
  "Build & operate",
  "Security & costs",
] as const;
export const chapters = [
  {
    slug: "cloud_computing",
    title: "Cloud computing",
    description:
      "Cloud models, global infrastructure, and shared responsibility.",
    group: "Foundations",
  },
  {
    slug: "iam",
    title: "Identity & access management",
    description:
      "Users, roles, policies, and the principle of least privilege.",
    group: "Foundations",
  },
  {
    slug: "ec2",
    title: "EC2: virtual machines",
    description:
      "Instances, security groups, and choosing a purchasing option.",
    group: "Core services",
  },
  {
    slug: "ec2_storage",
    title: "EC2 instance storage",
    description: "EBS volumes, EFS, instance stores, and shared storage.",
    group: "Core services",
  },
  {
    slug: "elb_asg",
    title: "Load balancing & auto scaling",
    description:
      "Scalability, availability, and distributing application traffic.",
    group: "Core services",
  },
  {
    slug: "s3",
    title: "Amazon S3",
    description: "Buckets, storage classes, versioning, and object storage.",
    group: "Core services",
  },
  {
    slug: "databases",
    title: "Databases & analytics",
    description: "Relational databases, NoSQL, and analytics services.",
    group: "Core services",
  },
  {
    slug: "other_compute",
    title: "Other compute services",
    description: "Containers, serverless functions, and managed compute.",
    group: "Core services",
  },
  {
    slug: "deploying",
    title: "Deploying & managing infrastructure",
    description: "Infrastructure as code and tools for application deployment.",
    group: "Build & operate",
  },
  {
    slug: "global_infrastructure",
    title: "Global infrastructure",
    description: "Regions, Route 53, CloudFront, and the AWS edge.",
    group: "Build & operate",
  },
  {
    slug: "cloud_integration",
    title: "Cloud integration",
    description: "Messaging and streaming with SQS, SNS, Kinesis, and MQ.",
    group: "Build & operate",
  },
  {
    slug: "cloud_monitoring",
    title: "Cloud monitoring",
    description: "Metrics, audit logs, tracing, and application health.",
    group: "Build & operate",
  },
  {
    slug: "vpc",
    title: "Virtual private cloud",
    description: "Subnets, gateways, network access, and private connections.",
    group: "Build & operate",
  },
  {
    slug: "security_compliance",
    title: "Security & compliance",
    description: "Protect workloads, manage encryption, and meet requirements.",
    group: "Security & costs",
  },
  {
    slug: "machine_learning",
    title: "Machine learning",
    description: "Recognize the AWS services for common AI and ML use cases.",
    group: "Build & operate",
  },
  {
    slug: "account_management_billing_support",
    title: "Accounts, billing & support",
    description: "Organizations, pricing models, budgets, and support plans.",
    group: "Security & costs",
  },
  {
    slug: "advanced_identity",
    title: "Advanced identity",
    description: "Temporary credentials, Cognito, and identity federation.",
    group: "Security & costs",
  },
  {
    slug: "other_aws_services",
    title: "Other AWS services",
    description: "Migration, backup, business applications, and orchestration.",
    group: "Build & operate",
  },
  {
    slug: "architecting_and_ecosystem",
    title: "Architecting & the AWS ecosystem",
    description:
      "Well-Architected principles, right sizing, and AWS resources.",
    group: "Security & costs",
  },
] as const;

export type Chapter = {
  slug: string;
  title: string;
  description: string;
  group: string;
  minutes: number;
  topics: number;
};
export type ExamSummary = {
  slug: string;
  title: string;
  count: number;
  number: number;
};
export type Question = {
  id: number;
  prompt: string;
  options: { key: string; text: string }[];
  answers: string[];
  explanation: string;
};
