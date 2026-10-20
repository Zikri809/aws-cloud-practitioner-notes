# Cloud Monitoring

Work through the explanations, examples, and service comparisons below. Use the [reference notes](#reference-notes) for revision, or follow the [exam-task reading path](/study-guide#detailed-reading-by-exam-task) to study in syllabus order.

## Exam task 2.2: Security governance and compliance

### CloudWatch: operating health and performance

CloudWatch provides monitoring and observability capabilities for resources and applications. The course emphasizes four features.

**Metrics** are time-series measurements. EC2 CPU utilization is an example of a service metric; an application can publish a custom metric such as orders completed. A metric has context such as its name, namespace, and dimensions. A value without its time, unit, or resource context can be misleading.

**Alarms** evaluate metric conditions over configured periods. An alarm can notify through SNS or invoke supported actions/integrations. The course's espresso example publishes a count, creates a threshold at 1,000, and notifies a manager that cleaning is due. The application or integration must supply the count; CloudWatch does not automatically discover a physical espresso machine.

**Dashboards** arrange graphs and other widgets into a shared operational view. They display information; creating a dashboard alone does not make missing telemetry appear or implement a remediation action.

**Logs** contain event records and messages from configured sources. CloudWatch Logs supports collection, retention, search, and analysis. Metrics and logs are different data types: CloudWatch Logs is not automatically the storage location for every metric displayed on a dashboard. The video's transition from dashboards to historical logs should not be read that way.

#### Reconstructing the monitoring example

1. Observe EC2 utilization using the available metric.
2. Configure application log collection separately.
3. Define an alarm that evaluates sustained high utilization, rather than reacting blindly to one sample.
4. Configure the appropriate notification or Auto Scaling integration.
5. Use a dashboard and logs to assess behavior before and after the action.

No live monitoring resources or actions were created while preparing this pack. An alarm does not launch an instance simply because it exists; its action and scaling policy need appropriate configuration.

**Exam extension:** Common guest-OS measurements such as memory utilization and filesystem free space are not all standard EC2 metrics automatically published by the platform. An agent or custom publishing can provide additional telemetry. Similarly, application log collection needs configuration. The reading's “all resources” means broad collection capability, not automatic collection of everything without setup.

*Adapted study material; [Module 10, section 3 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/S8ErT/introduction-to-monitoring-compliance-and-governance-in-the-aws-cloud).*

### CloudTrail: activity and API auditing

CloudTrail records supported account activity as events, including API operations made through the console, CLI, SDKs, or other services. An event can include identity, event time, operation, source IP, resource context, and success/error information. Exact contents vary. It is useful for questions such as “Who changed this security group?”

The video repeatedly says “every request gets logged.” That is too broad. **Management events** describe control-plane activity such as changing permissions or configuring resources. **Data events** describe supported data-plane operations such as accessing S3 objects or modifying DynamoDB items. These require the appropriate event-selection configuration; a default history is not an archive of every data access. [CloudTrail event configuration](https://docs.aws.amazon.com/en_en/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html).

| Capability | What to remember |
|---|---|
| Event history | Recent 90 days of management events in an AWS Region; viewing history has no CloudTrail charge |
| Trail | Configured ongoing event delivery to S3, with scope/event selection choices |
| CloudTrail Lake | Event storage/query capabilities with configured collection and retention |
| CloudTrail Insights | Optional analysis of unusual supported API activity patterns |

Retaining records beyond history requires a suitable configured trail or event data store. Data-event coverage, retention, delivery, and costs depend on the chosen setup. [CloudTrail operation and retention](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/how-cloudtrail-works.html).

A CloudTrail log is also not a complete snapshot of all resulting resource state: use Config for configuration history. Describing CloudTrail as automatically monitoring every on-premises or other-cloud operation is misleading; non-AWS activity requires supported ingestion/integration and configuration.

Log-file integrity validation can help detect changes to delivered files when configured and used. It does not itself prevent deletion. Separate logging accounts and carefully scoped permissions improve separation of duties, but a central bucket is not magically immutable merely because it is in S3. Select retention and protections according to the requirement.

*Adapted study material; [Module 10, section 4 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/S8ErT/introduction-to-monitoring-compliance-and-governance-in-the-aws-cloud).*

Related explanations for this task: [security compliance](/notes/security_compliance#exam-task-22-security-governance-and-compliance), [account management billing support](/notes/account_management_billing_support#exam-task-22-security-governance-and-compliance).

Study source: independently reconstructed course guides and editorial exam-task notes. Course capture: 16 October 2026; task expansion: 20 October 2026. These explanations are not an official AWS publication. Service qualifications retain their stated review dates.
