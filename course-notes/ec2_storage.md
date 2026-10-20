# EC2 Instance Storage

Work through the explanations, examples, and service comparisons below. Use the [reference notes](#reference-notes) for revision, or follow the [exam-task reading path](/study-guide#detailed-reading-by-exam-task) to study in syllabus order.

## Exam task 3.6: Storage services

### Start with the storage interface

| Model | How the application uses it | Course examples |
|---|---|---|
| Block | Disk-like blocks, often with an OS-managed filesystem or database above them | EBS; EC2 instance store |
| Object | Objects addressed by keys through service APIs | S3 |
| File | Shared files and directories through filesystem protocols | EFS; FSx |

Block storage supports small, frequent updates to disk blocks. Object storage suits independently addressed items such as images, backups, logs, and datasets. File storage suits applications that expect shared filesystem behavior.

The course's rule that every object change rewrites the whole object is a useful general-purpose S3 model, rather than a statement about every newer specialized object-storage feature. The fundamental exam distinction is API-addressed objects versus disk blocks versus filesystem semantics.

Many services can hold the same bytes. The decisive requirement is how the application needs to access and update them. Multiple devices retrieving images does not, by itself, prove they need a shared filesystem.

*Adapted study material; [Module 6, section 2 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/6Bz4a/introduction-to-storage).*

### EC2 instance store versus EBS

| Property | Instance store | Amazon EBS |
|---|---|---|
| Storage location | Local storage on the instance's physical host | Independently managed block volumes |
| Main use | Re-creatable temporary data, caches, scratch work | Persistent instance disks and suitable databases |
| Stop or termination | Data is lost | Stop preserves data; termination depends on volume settings |
| Availability | Present only on suitable instance types | Provision supported volumes for EC2 |
| Backup approach | Copy required data to persistent storage | EBS snapshots and backup policy |

Instance store is storage, not ordinary RAM. The reading's phrase “memory-based storage” should not make you confuse it with volatile process memory. Its defining risk is dependence on the instance/host lifecycle. A reboot is different from a stop; do not treat every restart-like action as identical. See [instance store persistence](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-store-lifetime.html).

EBS volumes persist independently of an instance stop. **Correction:** The reading repeatedly says they always survive termination. The `DeleteOnTermination` setting determines whether each volume is deleted or retained. Root volumes commonly default to deletion at termination. Retained volumes continue to incur charges. See [volume persistence settings](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/preserving-volumes-on-termination.html).

EBS is an AZ-level resource: a volume and the EC2 instance attaching it must be in the same AZ. Snapshots can support creating another volume in a different AZ; that is different from directly attaching the existing volume across AZs.

#### Capacity and performance

The course measures performance using IOPS, input/output operations per second. Workload requirements also involve throughput and latency. Choosing a suitable volume type and provisioning performance may help a database limited by storage I/O.

An EBS volume does not automatically grow because it is full. Supported changes can expand capacity or adjust performance, but application/filesystem steps and limits still matter. The reading's broad “different sizes without downtime” language does not mean arbitrary shrinking is supported.

The fitness-center example uses a database on EC2. EBS supplies its disk-like access; S3 is not a drop-in substitute for that database's live block device. A better EBS choice is useful only if storage is actually the bottleneck.

*Adapted study material; [Module 6, section 3 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/6Bz4a/introduction-to-storage).*

### Snapshots and EBS lifecycle

An EBS snapshot is a point-in-time backup. The first captures the written data needed for that point; later snapshots store changed blocks incrementally. This avoids treating the entire allocated disk as a fresh full backup every time.

Each retained snapshot can restore the corresponding volume state. AWS manages shared block dependencies. Deleting an older snapshot does not destroy blocks still needed by another retained snapshot.

The course explains that snapshots use S3 internally. **Exam extension:** They are not ordinary objects in a customer-browsable S3 bucket. Manage them through the EBS/EC2 interfaces. See [EBS snapshots](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-snapshots.html).

Customers decide backup frequency, retention, encryption/access, and recovery tests. EBS persistence and internal redundancy do not replace a backup policy.

Amazon Data Lifecycle Manager automates snapshot creation, retention, and deletion through policies. The lessons also mention options such as copying or sharing. Automation executes the policy; it does not determine the business's acceptable data loss or validate every application-level restore.

**Exam extension:** AWS Backup is a broader service for centralized backup management across supported AWS resources. Distinguish that broad role from the module's specific EBS snapshot lifecycle tooling.

*Adapted study material; [Module 6, section 4 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/6Bz4a/introduction-to-storage).*

### EFS: shared NFS files

Amazon EFS provides a managed NFS filesystem for supported clients. Multiple EC2 instances can access shared files. It grows and shrinks with data rather than requiring the same fixed disk-capacity planning as an EBS volume.

Choose EFS when shared filesystem semantics and NFS compatibility are stated requirements. It is not an object store merely because the files contain images or video.

**Correction:** The reading initially says EFS always replicates across AZs, then introduces One Zone options. Regional filesystems store data across multiple AZs; One Zone filesystems store data in one AZ and have different failure exposure. See [EFS filesystem types](https://docs.aws.amazon.com/efs/latest/ug/features.html).

The course discusses Standard, Infrequent Access, and Archive, with lifecycle policies for colder files and optional return to Standard. Check the filesystem type and supported configuration. Automatic tiering does not mean every EFS deployment has the same policies, availability, or bill.

The video contrasts EFS with EBS: EBS is attached block storage in the same AZ; EFS is accessed as a network filesystem. Appropriate connectivity, permissions, and mount configuration remain necessary, including for on-premises or cross-network access.

*Adapted study material; [Module 6, section 10 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/6Bz4a/introduction-to-storage).*

### FSx: choose the required filesystem

| FSx service | Recognition clue |
|---|---|
| FSx for Windows File Server | Windows file-sharing workloads |
| FSx for Lustre | High-performance parallel file workloads, HPC and suitable analytics |
| FSx for NetApp ONTAP | ONTAP capabilities and compatible existing workloads |
| FSx for OpenZFS | OpenZFS capabilities and NFS workloads |

FSx is a family of services rather than one universal protocol. Do not choose solely by file size: compatibility and filesystem capabilities matter.

**Qualification:** The reading's blanket claims that every FSx service automatically adjusts all resources and charges only for used storage are too broad. Capacity, throughput, backups, tiering, and billing differ by filesystem and configuration. Managed infrastructure reduces administration without eliminating resource planning.

*Adapted study material; [Module 6, section 11 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/6Bz4a/introduction-to-storage).*

Related explanations for this task: [s3](/notes/s3#exam-task-36-storage-services), [other aws services](/notes/other_aws_services#exam-task-36-storage-services).

Study source: independently reconstructed course guides and editorial exam-task notes. Course capture: 16 October 2026; task expansion: 20 October 2026. These explanations are not an official AWS publication. Service qualifications retain their stated review dates.
