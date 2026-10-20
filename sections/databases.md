# Databases & Analytics

- [Databases \& Analytics](#databases--analytics)
  - [Databases Intro](#databases-intro)
  - [Relational Databases (SQL)](#relational-databases-sql)
  - [NoSQL Databases](#nosql-databases)
    - [NoSQL data example: JSON](#nosql-data-example-json)
  - [Databases \& Shared Responsibility on AWS](#databases--shared-responsibility-on-aws)
  - [AWS RDS Overview](#aws-rds-overview)
    - [Advantage over using RDS versus deploying DB on EC2](#advantage-over-using-rds-versus-deploying-db-on-ec2)
    - [RDS Deployments](#rds-deployments)
    - [RDS Deployments: Read Replicas, Multi-AZ](#rds-deployments-read-replicas-multi-az)
    - [RDS Deployments: Multi-Region](#rds-deployments-multi-region)
  - [Amazon Aurora](#amazon-aurora)
  - [Amazon ElastiCache Overview](#amazon-elasticache-overview)
  - [DynamoDB](#dynamodb)
    - [DynamoDB Accelerator (DAX)](#dynamodb-accelerator-dax)
    - [DynamoDB Global Tables](#dynamodb-global-tables)
  - [Redshift Overview](#redshift-overview)
  - [Amazon EMR (Elastic MapReduce)](#amazon-emr-elastic-mapreduce)
  - [Amazon Athena](#amazon-athena)
  - [Amazon QuickSight](#amazon-quicksight)
  - [DocumentDB (with MongoDB Compatibility)](#documentdb-with-mongodb-compatibility)
  - [Amazon Neptune](#amazon-neptune)
  - [Amazon QLDB](#amazon-qldb)
  - [Amazon Managed Blockchain](#amazon-managed-blockchain)
  - [AWS Glue](#aws-glue)
  - [DMS - Database Migration Service](#dms---database-migration-service)
  - [Databases \& Analytics Summary](#databases--analytics-summary)

## Databases Intro

- Storing data on disk (EFS, EBS, EC2 Instance Store, S3) can have its limits
- Sometimes, you want to store data in a database…
- You can structure the data
- You build indexes to efficiently query / search through the data
- You define relationships between your datasets
- Databases are optimized for a purpose and come with different features, shapes and constraint
- **Managed Databases**: AWS takes care of maintenance, backups, and security for databases.
- **Benefits**: Reduced operational complexity, built-in high availability, disaster recovery, scalability, and enhanced security.
- **Types**:
  - **Relational Databases** (SQL)
  - **NoSQL Databases**
  - **Data Warehousing**
  - **In-memory Caching**

## Relational Databases (SQL)

- **Structured Data**: Stored in predefined schema tables, managed with SQL.
- **Use Cases**: Transactional applications, financial systems.
- **Examples**: MySQL, PostgreSQL, Oracle, SQL Server, MariaDB.

## NoSQL Databases

- **Flexible Schema**: No predefined schema, designed for fast and scalable data storage.
- **Use Cases**: Real-time applications, IoT, mobile apps.
- Benefits:
  - Flexibility: easy to evolve data model
  - Scalability: designed to scale-out by using distributed clusters
  - High-performance: optimized for a specific data model
  - Highly functional: types optimized for the data model
- **Examples**: DynamoDB, MongoDB (DocumentDB), Key-value, document, graph, in-memory, search databases

### NoSQL data example: JSON

- JSON is a common form of data that fits into a NoSQL model
- Data can be nested
- Fields can change over time
- Support for new types: arrays, etc…

```json
{
  "name": "Abc",
  "age": 30,
  "cars": [
    "Ford",
    "BMW",
    "Fiat"
  ],
  "address": {
    "type": "house",
    "number": 23,
    "street": "Abc Road"
  }
}
```

## Databases & Shared Responsibility on AWS

| **AWS Responsibility**                      | **Customer Responsibility**                      |
| ------------------------------------------- | ------------------------------------------------ |
| Infrastructure management, backups, patches | Data security, encryption, access controls (IAM) |
| Availability and failover                   | Data management, monitoring, performance tuning  |

## AWS RDS Overview

- **RDS (Relational Database Service)**: Fully managed service for relational databases.
  - It’s a managed DB service for DB use SQL as a query language.
  - Supports engines including MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, and Db2. Aurora is a MySQL/PostgreSQL-compatible engine with its own architecture.
  - Handles **backup**, **patching**, **high availability** (Multi-AZ), and **scaling**.

### Advantage over using RDS versus deploying DB on EC2

- RDS is a managed service:
  - Automated provisioning, OS patching
  - Continuous backups and restore to specific timestamp (Point in Time Restore)!
  - Monitoring dashboards
  - Read replicas for improved read performance
  - Multi AZ setup for DR (Disaster Recovery)
  - Maintenance windows for upgrades
  - Scaling capability (vertical and horizontal)
  - RDS DB instance storage includes supported gp2/gp3 and provisioned-IOPS options; available choices depend on the engine and deployment.
- BUT you can’t SSH into your instances

### RDS Deployments

- **Read Replicas**: Improves read performance, **asynchronous** replication.
- **Multi-AZ**: Automatic failover, high availability for production environments.
- **Multi-Region**: Disaster recovery across regions, global availability.

### RDS Deployments: Read Replicas, Multi-AZ

| Read Replicas                       | Multi-AZ                                          |
| ----------------------------------- | ------------------------------------------------- |
| Scale the read workload of your DB  | Failover in case of AZ outage (high availability) |
| Replica limits depend on the engine; do not assume a universal maximum of five | A traditional Multi-AZ DB instance has one non-readable standby |
| Applications normally write to the primary | A Multi-AZ DB cluster has a writer and two readable instances across three AZs |

![Read Replicas Multi-AZ](../images/read_replicas_multi_AZ.png)

### RDS Deployments: Multi-Region

- Multi-Region (Read Replicas)
  - Disaster recovery in case of region issue
  - Local performance for global reads
  - Replication cost

![Multi-Region](../images/multi_region.png)

## Amazon Aurora

- **Amazon Aurora**: High-performance RDS database.
  - Compatible with **MySQL** and **PostgreSQL**.
  - AWS publishes workload-specific performance comparisons; do not interpret a marketing multiple as a guaranteed speedup for every application.
  - Storage grows automatically. Supported newer engine versions can reach 256 TiB; engine/version limits apply, so 64 TB is not a universal current limit.
  - Supports **Multi-AZ** and up to **15 read replicas**.
  - Great for **enterprise-grade** applications requiring high availability and performance.
  - Compare workload-specific pricing and storage configurations; there is no universal 20% Aurora surcharge over every RDS database.

## Amazon ElastiCache Overview

- **ElastiCache**: In-memory data caching service.
  - **Valkey and Redis OSS**: In-memory key-value engines with supported replication features. Persistence and backup behavior depend on the engine and configuration.
  - **Memcached**: Simple, memory-only caching service.
  - Reduces database load and speeds up applications by **caching frequent queries**.
  - Caches are in-memory databases with high performance, low latency
  - AWS takes care of OS maintenance / patching, optimizations, setup, configuration, monitoring, failure recovery and backup

## DynamoDB

- Fully managed, serverless NoSQL database.
- Supports key-value and document data models.
- Automatically scales based on demand.
- Provides high availability and durability with replication across 3 AZ
- Millions of requests per seconds, trillions of row, 100s of TB of storage
- Fast and consistent in performance
- Single-digit millisecond latency – low latency retrieval
- Integrated with IAM for security, authorization and administration
- Low cost and auto scaling capabilities
- Standard & Infrequent Access (IA) Table Class

### DynamoDB Accelerator (DAX)

- In-memory caching for DynamoDB.
- **10x faster** read performance.  Single-digit millisecond latency to microseconds latency – when accessing your DynamoDB tables
- Secure, highly scalable & highly available
- Ideal for use cases where **low-latency reads** are critical.

### DynamoDB Global Tables

- Multi-region replication for **global** applications.
- **Low-latency** reads and writes across multiple regions.
- Ensures data availability globally with **multi-master replication**.

## Redshift Overview

- Managed data warehousing service.
- Optimized for **online analytical processing (OLAP)** and big data analytics.
- Uses **columnar storage** for fast query performance.
- 10x better performance than other data warehouses, scale to PBs of data
- Columnar storage of data (instead of row based)
- Supports integration with **BI tools** (QuickSight, Tableau).
- Massively Parallel Query Execution (MPP), highly available.
- Has a SQL interface for performing the queries.
- Provisioned Redshift uses node-based pricing with reservation options. Redshift Serverless bills compute using RPU capacity and usage; it is not simply a per-query fee. Managed storage is billed separately.
- Designed for **massive datasets**.

## Amazon EMR (Elastic MapReduce)

- Managed big data processing service.
- Uses **Hadoop**, **Apache Spark**, and **Hive** for processing large data sets.
- Ideal for **data transformation**, **machine learning**, and **ETL** (Extract, Transform, Load).
- Integration with **S3**, **DynamoDB**, and **Redshift**.
- The clusters can be made of hundreds of EC2 instances
- EMR takes care of all the provisioning and configuration
- Auto-scaling and integrated with Spot instances
- Use cases: data processing, machine learning, web indexing, big data

## Amazon Athena

- Serverless query service
- Use **SQL** to query structured and unstructured data stored in **S3**.
- No infrastructure to manage, pay-per-query.
- Supports various formats like **CSV**, **JSON**, **Parquet**, and **ORC**.
- Pricing: $5.00 per TB of data scanned
- Use compressed or columnar data for cost-savings (less scan)
- Use cases: Business intelligence / analytics / reporting, analyze & query VPC Flow Logs, ELB Logs, CloudTrail trails, etc...
- Analyze data in S3 using serverless SQL, use Athena

## Amazon QuickSight

- Business Intelligence (BI) tool for data visualization.
- Serverless machine learning-powered business intelligence service to create interactive dashboards
- Fast, automatically scalable, embeddable, with per-session pricing
- Supports data from S3, Redshift, RDS, and other AWS data sources.
- **Pay-per-session** pricing model for cost efficiency.
- Use cases:
  - Business analytics
  - Building visualizations
  - Perform ad-hoc analysis
  - Get business insights using data

## DocumentDB (with MongoDB Compatibility)

- Managed document database, **MongoDB-compatible**.
- DocumentDB implements compatible MongoDB APIs, but is not the MongoDB server; check supported APIs and functional differences before migration.
- Highly scalable and durable with **Multi-AZ**.
- Built for **JSON** document storage.
- DocumentDB has its own cluster storage behavior and quotas. Do not apply an old Aurora storage limit to DocumentDB.
- Automatically scales to workloads with millions of requests per seconds
- Use cases: Content management, cataloging, and mobile backends.

## Amazon Neptune

- Fully managed graph database
- A popular graph dataset would be a social network
  - Users have friends
  - Posts have comments
  - Comments have likes from users
  - Users share and like posts…
- Highly available across 3 AZ, with up to 15 read replicas
- Build and run applications working with highly connected datasets – optimized for these complex and hard queries
- Can store up to billions of relations and query the graph with milliseconds latency
- Highly available with replications across multiple AZs
- Great for knowledge graphs (Wikipedia), fraud detection, recommendation engines, social networking

## Amazon QLDB

Historical service: Amazon Quantum Ledger Database ended support on 31 July 2025. Older descriptions of its cryptographically verifiable journal explain its former purpose; it is not a current database choice. Select a supported database and audit/history design for new applications.

## Amazon Managed Blockchain

- Blockchain makes it possible to build applications where multiple parties can execute transactions without the need for a trusted, central authority.
- Amazon Managed Blockchain is a managed service to:
  - Join public blockchain networks
  - Or create your own scalable private network
- Historically supported Hyperledger Fabric and public blockchain access. AWS has announced an end-of-support date of 29 September 2027 for Amazon Managed Blockchain; follow its service-specific migration guidance rather than recommending a new deployment without that context.

## AWS Glue

- Managed extract, transform, and load (ETL) service
- Useful to prepare and transform data for analytics
- Fully serverless service
- Glue Data Catalog: catalog of datasets
  - can be used by Athena, Redshift, EMR

## DMS - Database Migration Service

- Quickly and securely migrate databases to AWS, resilient, self healing
- The source database remains available during the migration
- Supports:
  - Homogeneous migrations: ex Oracle to Oracle
  - Heterogeneous migrations: ex Microsoft SQL Server to Aurora

## Databases & Analytics Summary

- Relational Databases - OLTP: RDS & Aurora (SQL)
- Differences between Multi-AZ, Read Replicas, Multi-Region
- In-memory Database: ElastiCache
- Key/Value Database: DynamoDB (serverless) & DAX (cache for DynamoDB)
- Warehouse - OLAP: Redshift (SQL)
- Hadoop Cluster: EMR
- Athena: query data on Amazon S3 (serverless & SQL)
- QuickSight: dashboards on your data (serverless)
- DocumentDB: managed document database with MongoDB API compatibility, not an Aurora engine or the MongoDB server.
- Amazon QLDB: retired ledger database, retained as historical context only.
- Amazon Managed Blockchain: managed Hyperledger Fabric & Ethereum blockchains
- Glue: Managed ETL (Extract Transform Load) and Data Catalog service
- Database Migration: DMS
- Neptune: graph database

## From stored data to analytics

A database serving application transactions, a data warehouse, and a search engine meet different requirements. Choose the service by the operation in the scenario.

| Requirement | Service role |
| --- | --- |
| SQL analysis directly over suitable S3 datasets | Athena |
| Data warehouse analytics | Redshift |
| Search and log analytics | OpenSearch Service |
| Store data lake objects | S3 |
| Describe tables, schemas, and dataset locations | Glue Data Catalog |
| Prepare and transform data | AWS Glue |
| Run big-data frameworks such as Spark | Amazon EMR |
| Present business dashboards | QuickSight, the BI service name used in the course |

ETL extracts, transforms, then loads data. ELT loads before transformation. Batch processing groups work; streaming processes arriving events. The Data Catalog stores metadata rather than the dataset itself. A dashboard presents query results; it does not replace the underlying storage or query engine.

For example, put suitable analysis data in S3, describe it in the Glue Data Catalog, and query it with Athena. Preparing that dataset and choosing dashboard permissions remain separate tasks.

Course basis: Module 8, [Introduction to Data Analytics](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/supplement/diDjS/introduction-to-data-analytics), captured 16 October 2026. Current references: [Athena](https://docs.aws.amazon.com/athena/latest/ug/what-is.html) and [Glue Data Catalog](https://docs.aws.amazon.com/glue/latest/dg/catalog-and-crawler.html).

## AWS documentation review

Reviewed 16 October 2026. Corrected RDS deployment distinctions, Aurora storage and pricing claims, Redshift billing, DocumentDB wording, and retired QLDB guidance.

- [RDS Multi-AZ DB clusters](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html)
- [RDS quotas](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html)
- [Aurora quotas and storage limits](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_Limits.html)
- [ElastiCache engines](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/WhatIs.html)
- [Redshift Serverless billing](https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-billing.html)
- [AWS services in full shutdown](https://docs.aws.amazon.com/general/latest/gr/full_shutdown_services.html)
- [Managed Blockchain end of support](https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/managed-blockchain-end-of-support.html)
