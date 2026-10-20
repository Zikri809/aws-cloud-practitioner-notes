# Databases & Analytics

Work through the explanations, examples, and service comparisons below. Use the [reference notes](#reference-notes) for revision, or follow the [exam-task reading path](/study-guide#detailed-reading-by-exam-task) to study in syllabus order.

## Exam task 3.4: Database services

### Start with the application's data and access pattern

The course uses a coffee shop loyalty program: customers place orders, buy products, and earn rewards. A database stores records that an application must retrieve and update. Choosing one starts with questions such as: Does the application join orders to customers? Retrieve one record by an identifier? Traverse a network of relationships? Repeatedly read the same product details?

AWS offers purpose-built databases because those patterns have different needs. A relational database can represent relationships; a graph database specializes in traversing them. A document database can store product data; a key-value database can also store products when key-based access suits the application. Choose the service that meets the stated requirement, rather than treating any example as an exclusive rule.

| Requirement in a scenario | First service to consider | Reason |
|---|---|---|
| Managed relational database using familiar engines and SQL | Amazon RDS | Tables, relationships, transactions, managed operations |
| AWS-designed relational database compatible with MySQL or PostgreSQL | Amazon Aurora | Relational capabilities with distributed storage |
| Serverless key-value or document database at scale | Amazon DynamoDB | Managed access by keys with flexible item attributes |
| Repeated reads, sessions, or an in-memory application cache | Amazon ElastiCache | Keeps frequently accessed data in memory |
| In-memory accelerator specifically for DynamoDB reads | DynamoDB Accelerator, DAX | Specialized DynamoDB caching |
| Document workloads with MongoDB compatibility | Amazon DocumentDB | Managed document database |
| Social links, fraud networks, or relationship traversal | Amazon Neptune | Graph database |
| Database migration or ongoing supported replication | AWS Database Migration Service, DMS | Moves database data between supported sources and targets |
| Centralized backup policies for supported AWS services | AWS Backup | Coordinates protection rather than serving application queries |
| Shared blockchain ledger/network requirements | Amazon Managed Blockchain | Blockchain capabilities; distinct from a graph database |

*Adapted study material; [Module 7, section 1 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/sn11y/introduction-to-databases).*

### Relational databases and Amazon RDS

A relational database organizes data into tables. A row represents a record and columns define attributes. Keys identify records and connect tables. SQL can filter, aggregate, and join related data.

For the coffee shop, a Customers table might contain CustomerID and Name; Products might contain ProductID and Price; Orders might contain OrderID and CustomerID. Order lines connect orders to purchased products. A join can answer, “Which products did this customer order?” without storing the customer's full details in every order line.

Relational schemas impose structure and constraints. They can evolve through schema changes; “fixed schema” does not mean that the structure can never change. SQL knowledge alone does not decide the hosting service: a familiar engine can run on EC2 or in a managed database.

RDS manages common operational tasks such as provisioning infrastructure, patching through supported mechanisms, and automated backups when configured. Examples of supported engines discussed in the course include MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server. Aurora is also part of the RDS database family. Treat examples as examples, rather than memorizing an engine count that can change.

#### Availability, read scaling, and recovery solve different problems

| Feature | Primary purpose | What to remember |
|---|---|---|
| Multi-AZ deployment | Availability and failover | Maintains a deployment across Availability Zones |
| Read replica | Offload supported read workloads | Application must direct appropriate reads to the replica |
| Automated backups and logs | Restore within a configured recovery window | Enable supported point-in-time recovery |
| Manual snapshot | Preserve a captured database state | Restore the snapshot's capture point |

In a **traditional RDS Multi-AZ DB instance** deployment, the standby exists for failover and does not serve application reads. A read replica addresses read scaling. Avoid turning this into “all Multi-AZ secondaries cannot read”: **RDS Multi-AZ DB clusters** have a writer and readable instances. [RDS instance standby versus read replica](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_MySQL.Replication.ReadReplicas.MultiAZ.html), [Multi-AZ DB clusters](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html).

A replica is not an independent historical backup. If a valid but unwanted delete propagates, availability alone does not recover yesterday's data. Likewise, a snapshot alone does not provide arbitrary point-in-time recovery between snapshots. Match the feature to the failure: instance failure, read overload, accidental deletion, or a recovery-time requirement.

*Adapted study material; [Module 7, section 3 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/sn11y/introduction-to-databases).*

### Amazon Aurora

Aurora is an AWS-designed relational database with MySQL-compatible and PostgreSQL-compatible editions. Compatibility helps applications use familiar drivers and database tools, but migration still requires checking supported versions, extensions, and behavior.

Aurora separates database compute from distributed cluster storage. Storage redundancy across Availability Zones protects the stored data; Aurora readers provide additional database compute for read workloads and can support failover. These are related but different layers. Aurora can have up to 15 Aurora Replicas; that number is a service capability, not a requirement to create 15 readers. [Aurora availability](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html).

The course includes performance comparisons with standard MySQL and PostgreSQL. Understand the intended benefit;managed relational performance and availability;without interpreting a benchmark multiplier as a guarantee for every query or deployment. Exact storage limits and configuration options change; they are less useful for foundational exam reasoning than compatibility, data model, and purpose.

**Course clarification:** Amazon Aurora DSQL is a separate serverless distributed SQL service. It is not a third engine selection inside a conventional Aurora MySQL/PostgreSQL cluster. Its name appears in the course discussion; recognize the distinction without letting it replace the core Aurora comparison. [Aurora DSQL overview](https://docs.aws.amazon.com/aurora-dsql/latest/userguide/what-is-aurora-dsql.html).

*Adapted study material; [Module 7, section 4 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/sn11y/introduction-to-databases).*

### DynamoDB and nonrelational data

NoSQL is a category containing several data models, including key-value, document, and graph databases. It does not mean that every NoSQL service has the same query interface or stores data the same way.

DynamoDB is a managed, serverless NoSQL database supporting key-value and document data. You work with tables, items, and attributes rather than managing database servers. Every item needs the table's required primary-key attributes. Other attributes can vary between items: one product can have a size while another has a roast level.

Flexible attributes do not remove design work. Good key design starts with access patterns, such as “retrieve order 123” or “list this customer's recent orders.” The partition key, optional sort key, and indexes influence efficient retrieval. A table scan examines items broadly and is not interchangeable with a targeted query. At scale, scanning everything can consume more reads and require pagination.

**Exam extension:** DynamoDB offers on-demand and provisioned capacity modes. On-demand handles capacity allocation without the customer specifying a read/write throughput target. Provisioned capacity uses configured capacity, optionally adjusted with auto scaling. Neither description means every cost or scaling choice disappears. [DynamoDB capacity modes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/capacity-mode.html).

#### Availability within a Region versus replication between Regions

DynamoDB replicates data across multiple Availability Zones within its Region. That does not mean that every ordinary table automatically has replicas in other Regions. Configure **Global Tables** for multi-Region replication. The course reading's wording about built-in replicas across Regions is too broad. [DynamoDB Global Tables](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html).

For exam scenarios, distinguish “survive an Availability Zone failure” from “serve local reads and writes in multiple Regions.” The latter points toward a configured global database capability, with associated architecture and cost decisions.

*Adapted study material; [Module 7, section 5 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/sn11y/introduction-to-databases).*

### Reconstructing the database demonstration

The video demonstrates two different workflows. No AWS resources were created while preparing these notes.

#### RDS workflow

1. Create an RDS MySQL database and select its deployment settings.
2. Obtain the database endpoint and connection details.
3. Establish the required network path, permit the intended connection in the security group, and authenticate with database credentials.
4. Create tables for users, products, and orders; insert records.
5. Use SQL, including joins, to retrieve related information.

The useful lesson is how a managed relational endpoint supports a familiar SQL workflow. A publicly accessible database in a recorded demonstration is not a recommendation for production exposure. A successful connection needs network reachability, allowed traffic, and valid authentication. The video's Free Tier selections describe the recording, not a promise of present eligibility or zero charges.

#### DynamoDB workflow

1. Create an orders table with a numeric order identifier as its partition key.
2. Use an AWS SDK from Python to write sample items.
3. Inspect stored items in the console.
4. Compare browsing/scanning the table with retrieving records using the relevant key.

This illustrates the operational difference: the application calls DynamoDB APIs without provisioning a MySQL server or maintaining a relational schema. The key attributes still have defined requirements. For the exam, understand the workflow rather than memorizing console positions or the particular sample identifiers.

*Adapted study material; [Module 7, section 6 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/sn11y/introduction-to-databases).*

### In-memory caching: ElastiCache and DAX

A cache keeps reusable data close to the application in memory. Reading an already cached result can avoid a slower database retrieval and reduce database load. ElastiCache supports Valkey, Redis OSS, and Memcached options. Features depend on the engine and deployment. [ElastiCache overview](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/WhatIs.html).

In the course's product example, many shoppers request the same product details. A common cache-aside pattern is:

1. The application looks for the product in the cache.
2. On a **cache hit**, it returns the cached value.
3. On a **cache miss**, it reads the database, stores an appropriate copy in the cache, and returns the result.
4. Expiration or application invalidation prevents outdated values from remaining indefinitely.

The cache does not automatically intercept every database query. Applications or integrated components must use it. A cache can hold stale information, and an empty cache must be repopulated. A product description may tolerate brief staleness while a balance or rapidly changing stock count needs stricter handling. Expiration is a design choice, not proof that every returned value is current.

Sessions, leaderboards, and repeatedly accessed results are other common examples. Replication, persistence, and automatic failover differ across engines and configurations; do not apply Redis/Valkey capabilities to every Memcached deployment. Very low latency is the goal, not a universal guarantee for every request.

DAX is an in-memory accelerator built specifically for appropriate DynamoDB read workloads. Choose it when a question explicitly describes DynamoDB caching and microsecond-level access. Choose ElastiCache for broader application caching requirements. DAX does not replace the underlying DynamoDB table or make every workload faster. [DAX suitability](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/evaluate-dax-suitability.html).

*Adapted study material; [Module 7, section 7 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/sn11y/introduction-to-databases).*

### Additional services

#### Amazon DocumentDB

DocumentDB stores document data and provides MongoDB compatibility. Catalogs, content management, and profiles with varying attributes are examples. It is itself a nonrelational database; a course sentence contrasting it with “nonrelational databases” should not be read as classifying it as relational.

MongoDB compatibility is not a guarantee of complete equivalence. Check supported APIs and functional differences before migrating an application; some applications require changes. [DocumentDB compatibility differences](https://docs.aws.amazon.com/documentdb/latest/devguide/functional-differences.html).

#### Amazon Neptune

Neptune is a managed graph database. Think of entities as nodes and their relationships as edges. In fraud analysis, accounts, devices, and transactions may form a suspicious connected network. A graph query can traverse those connections. Other examples include social networks, recommendations, and knowledge graphs.

Relational databases also represent relationships. The reason to select Neptune is a workload centered on graph relationships and traversal, not the mere existence of two connected records. A graph is not automatically a blockchain ledger.

#### Amazon Managed Blockchain

The lesson introduces blockchain through shared records across organizations, such as supply-chain participants. Recognize the shared-ledger requirement and the service name. Do not choose it simply because a question asks to back up records, store documents, or query relationships.

#### AWS Backup

AWS Backup centralizes backup management for supported AWS resources. Backup plans, retention, and supported copy options help coordinate protection across services such as databases and storage. Cross-Region and cross-account copies depend on supported resources and configuration. It is not an application database and does not make all workloads compliant automatically. The summary's “Amazon Backup” refers to **AWS Backup**. [AWS Backup overview](https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html).

#### AWS Database Migration Service

DMS helps migrate data between supported databases and can use ongoing replication to reduce interruption while migration proceeds. It does not promise zero downtime for every migration or move an entire application automatically. A heterogeneous migration may also need schema conversion and application changes. Recognize the trigger: moving a database while keeping the source operational for much of the migration. [DMS overview and schema conversion](https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html).

*Adapted study material; [Module 7, section 8 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/sn11y/introduction-to-databases).*

### Database migration: DMS versus schema conversion

A **homogeneous** migration uses the same database engine type at source and target. A **heterogeneous** migration changes engine type, often introducing differences in data types, SQL behavior, functions, and stored procedures. Same-engine does not mean no planning: versions, extensions, access controls, network paths, and capacity still need review.

**AWS Database Migration Service**, DMS, migrates data between supported sources and targets and supports ongoing change replication for eligible paths. A typical pattern is initial data loading followed by capture of ongoing source changes. This can reduce the final interruption while the source remains in operation during much of migration.

**AWS Schema Conversion Tool**, SCT, helps assess and convert supported schemas and code objects such as views, functions, and stored procedures. Items that cannot be converted automatically require review and manual work. DMS also has schema-conversion capabilities within its broader offering; the course's distinction remains useful: moving records and converting database structure/code are different tasks.

| Requirement | Primary capability |
|---|---|
| Copy supported database data and ongoing changes | DMS replication/migration |
| Assess/convert source schema and code for a different engine | SCT or supported DMS Schema Conversion |
| Move a complete server largely as-is | MGN server migration |
| Copy general files into AWS storage | DataSync/appropriate file-transfer capability |

The video's description of DMS as a VM running replication software explains one deployment model. Do not infer that every DMS option requires manually managing such a VM. Supported serverless options and other modes exist. More importantly, DMS does not move every application dependency or automatically eliminate all license costs.

**Exam extension:** A database migration plan validates row counts, data quality, application behavior, ongoing-change lag, and cutover readiness. Falling back to the old database after new writes reach the target is not automatically safe: you must account for those writes and consistency. Schema conversion does not prove the application is compatible, and continuous replication is not a substitute for testing or backups.

*Adapted study material; [Module 12, section 6 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/BljPn/introduction-to-migration).*

### Work through the requirement, then eliminate distractors

**Example A:** An application uses PostgreSQL, needs joins, and its team wants less patching work. RDS for PostgreSQL is a direct fit. If the requirement specifically asks for AWS-designed PostgreSQL-compatible distributed storage, consider Aurora PostgreSQL. DynamoDB would require a different data/access model.

**Example B:** A mobile application needs managed key-based access to user preferences with variable attributes. DynamoDB fits. A later requirement for replicas in several Regions points to Global Tables; Regional multi-AZ durability alone does not satisfy that new requirement.

**Example C:** A store's primary database is healthy, but repeated catalog reads overload it. ElastiCache can reduce repeated retrievals. If the scenario instead emphasizes scaling supported relational reads, read replicas may fit. Look for whether the question asks to cache reusable results or run database reads on additional instances.

**Example D:** An administrator accidentally deletes useful rows. A standby can preserve availability but can also reflect the delete. Restore using the relevant backup or point-in-time recovery capability. Availability, caching, and recovery are separate requirements.

**Example E:** An investigator follows many connections among people, devices, and payments. Neptune matches graph traversal. DocumentDB matches document requirements, while Managed Blockchain matches a shared blockchain ledger requirement.

*Adapted study material; [Module 7, section 9 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/sn11y/introduction-to-databases).*

### Exam requirements and service choices

#### Use the access pattern before choosing a database

| Service | Best recognition clue | Important feature or limit |
|---|---|---|
| Amazon RDS | Managed relational engines, SQL, joins, transactions | Engine-dependent backups, Multi-AZ, and read replicas |
| Amazon Aurora | AWS relational database compatible with MySQL or PostgreSQL | Cluster storage and replica/failover capabilities; compatibility is not every vendor feature |
| Amazon DynamoDB | Managed key-value/document access at scale | Partition/sort key access, on-demand or provisioned capacity, Global Tables where configured |
| Amazon ElastiCache | Low-latency in-memory caching using supported engines | Application/integration uses the cache and handles freshness |
| Amazon DocumentDB | MongoDB-compatible document workload | Check compatibility rather than assume identical behavior |
| Amazon Neptune | Graph traversal among highly connected entities | Fraud networks, social relationships, knowledge graphs |
| EC2-hosted database | Database/OS control unavailable in the managed choice | Customer installs, patches, backs up, and operates it |

Database type and management model are separate choices. SQL requirements suggest a relational engine; they do not by themselves determine EC2 versus RDS. The need to reduce administration favors a managed database. The need for privileged OS access or unsupported database features can favor self-management.

Amazon Redshift is an analytical data warehouse, taught in Task 3.7. Distinguish large aggregations/reporting across historical datasets from the operational transactions and record lookups that commonly drive RDS/Aurora or DynamoDB selection. The presence of SQL in a requirement alone does not make RDS and Redshift interchangeable.

#### Availability, scaling, and recovery are different features

In a traditional **RDS Multi-AZ DB instance** deployment, the synchronous standby supports availability/failover and does not serve read traffic. **Read replicas** support read scaling and generally use asynchronous replication, with potential lag. RDS also has Multi-AZ DB cluster deployments with readable instances; do not turn the traditional standby distinction into a claim that every Multi-AZ product has identical behavior.

**Backups and point-in-time recovery** restore earlier data states within configured retention. A standby can replicate a mistaken delete, so it is not a replacement for recovery history. **DynamoDB Global Tables** provide supported multi-Region replication; a normal Regional table being resilient across AZs does not make it a multi-Region table. **DAX** is specifically a DynamoDB read accelerator; ElastiCache is the broader application cache choice.

**DMS** moves and, where supported, continuously replicates data. **AWS SCT** assesses and converts supported schema/code for engine changes. A homogeneous move does not necessarily require schema conversion. A heterogeneous move may require manual work for constructs the conversion tools cannot handle. Validate data and application behavior before cutover.

**Worked choice:** The database's repeated product reads are slow, but the primary also needs AZ resilience and recovery from accidental deletion. Caching or read replicas, Multi-AZ, and backup/PITR answer three different needs. No single word such as "replica" proves all three are satisfied.

Sources: [RDS Multi-AZ](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html), [RDS read replicas](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html), [DynamoDB Global Tables](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html), and [DMS](https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html).

### Before continuing

Explain RDS/Aurora relational storage, DynamoDB NoSQL, read replicas versus Multi-AZ availability, graph databases, and database migration tooling.

Explain the main concepts aloud and compare the services with similar purposes. Return to the relevant section whenever you cannot justify the distinction.

## Exam task 3.7: AI ML and analytics

### Analytics and data preparation

Data analytics derives insights from data: totals, comparisons, trends, relationships, and hypothesis tests. ML can contribute predictions, anomaly detection, and recommendations. They overlap and can share the same prepared dataset. Analytics is not restricted to old data, and an ML model is not automatically more useful or cost-effective than a straightforward query.

The course introduces data pipelines as repeatable flows from source systems to useful destinations. A pipeline can ingest, store, catalog, transform, and expose data. Stages need not always occur in one rigid order.

- **ETL:** extract from sources, transform into the required representation, then load the destination.
- **ELT:** extract, load, then transform within or through the destination environment.
- **Zero-ETL integrations:** reduce the need to build and operate a custom ETL pipeline for supported connections. They do not eliminate all data movement, quality checks, governance, or transformations in every architecture.
- **Batch:** process accumulated data periodically when delay is acceptable.
- **Streaming:** process incoming events continuously when low latency matters.

Automating a pipeline reduces manual work and makes execution repeatable. It does not make the process error-free. Validation, monitoring, retries, and handling duplicates or malformed data remain important.

*Adapted study material; [Module 8, section 5 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/Fz1tu/introduction-to-ai-and-machine-learning).*

### Further distinctions

#### Petabyte SQL analytics over S3 data

Amazon Redshift fits the stated warehouse and business-intelligence workload; Redshift Spectrum can query supported data in S3. Athena is also relevant to ad hoc SQL on S3, but choose from the actual requirements and options rather than treating S3 SQL as unique to one service.

Related explanations for this task: [machine learning](/notes/machine_learning#exam-task-37-ai-ml-and-analytics), [cloud integration](/notes/cloud_integration#exam-task-37-ai-ml-and-analytics).

Study source: independently reconstructed course guides and editorial exam-task notes. Course capture: 16 October 2026; task expansion: 20 October 2026. These explanations are not an official AWS publication. Service qualifications retain their stated review dates.
