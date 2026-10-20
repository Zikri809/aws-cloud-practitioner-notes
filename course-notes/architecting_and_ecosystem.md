# AWS Architecting & Ecosystem

Work through the explanations, examples, and service comparisons below. Use the [reference notes](#reference-notes) for revision, or follow the [exam-task reading path](/study-guide#detailed-reading-by-exam-task) to study in syllabus order.

## Exam task 1.2: Cloud design principles

### A working application still needs architectural review

A solution can accept requests while still having weak recovery, excessive permissions, wasteful capacity, or difficult deployments. The Well-Architected Framework supplies a consistent way to examine those issues throughout a workload's lifecycle.

The six pillars are **Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability**. Learn their purposes and the distinctions between them. A single improvement can support several pillars; the question's stated objective determines the best answer. [Official pillar list](https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html).

| Pillar | Primary question | Typical examples |
|---|---|---|
| Operational Excellence | Can we operate, observe, learn, and improve effectively? | Repeatable deployments, runbooks, actionable monitoring, small reversible changes |
| Security | How do we protect information, identities, and systems? | Least privilege, encryption, traceability, incident preparation |
| Reliability | Can the workload perform its intended function and recover from disruption? | Redundancy, tested recovery, fault handling, controlled changes |
| Performance Efficiency | Are resources appropriate for required performance as demand changes? | Measurement, suitable instance/data models, caching, scaling |
| Cost Optimization | Are we delivering required value without unnecessary expenditure? | Rightsizing, eliminating waste, suitable purchase models, cost attribution |
| Sustainability | How do we reduce environmental impact for the workload's outcomes? | Higher utilization, less idle capacity, efficient processing and data lifecycle |

The framework is guidance, not a promise that following one checklist guarantees a secure or failure-free workload. Review tradeoffs, document decisions, and revisit them as the business or technology changes.

*Adapted study material; [Module 13, section 1 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/T6DZG/introduction-to-well-architected-solutions).*

### Distinguish the pillars in scenarios

**Operational Excellence:** A team repeatedly makes mistakes during releases. Infrastructure as code, automated pipelines, runbooks, and learning from incidents improve how it works. Monitoring alone is not enough; people need a clear response process. Automating a bad process without validation can repeat mistakes faster.

**Security:** An application has broad administrative permissions and handles customer information. Scope its identities and access, protect secrets, use appropriate encryption, and plan detection/response. A VPC provides network boundaries, not proof the whole system is secure.

**Reliability:** A workload must remain useful during an instance or Availability Zone failure and recover within requirements. Use appropriate redundancy, health checks, failure handling, backup/restore, and tested recovery. A backup existing is not proof it can be restored in time.

**Performance Efficiency:** Users need acceptable latency as traffic changes. Measure the workload, select suitable compute/storage/database options, and review bottlenecks. The biggest instance is not automatically the most efficient choice. A cache helps suitable repeated reads, while poor key design or application logic can remain a bottleneck.

**Cost Optimization:** Find unused resources and match capacity and purchase models to needs. Do not sacrifice required resilience merely to minimize a bill. Lower per-unit prices can coexist with unnecessary total spend.

**Sustainability:** Reduce resources and energy needed for useful outcomes, including unnecessary storage, processing, and idle time. It overlaps with cost efficiency but is not identical: a financial discount alone does not prove fewer physical resources or emissions. Serverless can help appropriate workloads, but it does not establish a universal carbon reduction without considering behavior and utilization.

**Exam extension:** Multi-AZ improves resilience to AZ failures; it is not the same as a multi-Region recovery design. Availability, recovery time, and acceptable data loss are distinct requirements. Think in terms of requirements and failure modes rather than always selecting the largest architecture.

*Adapted study material; [Module 13, section 2 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/T6DZG/introduction-to-well-architected-solutions).*

### The framework versus the Well-Architected Tool

The **Framework** is the body of guidance. The **AWS Well-Architected Tool**, AWS WA Tool, provides a structured way to document a workload, answer review questions, identify risks, and track improvements. Lenses tailor review guidance to a domain or organizational practice. Milestones record the state of a review so progress can be compared.

The video suggests creating a workload and running the tool against the account to generate a report. The better mental model is a **guided architecture review based on questions, evidence, and decisions**. It is not a universal automatic account scanner. Integrations can help gather information, but they do not replace accurate answers and engineering judgment. Marking a question not applicable should reflect the workload, not conceal an unresolved risk. [Well-Architected Tool purpose](https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html).

A practical review sequence is:

1. Define the workload's scope, owners, goals, and critical requirements.
2. Answer relevant questions using actual design and operational evidence.
3. Identify and prioritize risks and improvement actions.
4. Assign work, implement changes, and verify their effect.
5. Record a milestone and review again as the workload evolves.

The tool has no additional service charge, while resources used to implement improvements can still incur charges. A review is not a regulatory certification or automatic remediation service. Compare Trusted Advisor's best-practice checks with WA Tool's broader workload review; they can complement each other.

*Adapted study material; [Module 13, section 3 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/T6DZG/introduction-to-well-architected-solutions).*

### Apply all six pillars to the florist example

The reading revisits an e-commerce site using EC2, RDS, S3 images, and supporting services. Its later steps introduce or assume additional components. Treat the narrative as illustrative, not a complete verified deployment diagram.

| Pillar | Review question | Possible improvement and qualification |
|---|---|---|
| Operational Excellence | Can releases and incident responses be repeated safely? | Infrastructure as code, deployment gates, runbooks, monitored rollback |
| Security | Are customer data and access protected? | Patching, least privilege, secrets, at-rest/in-transit protection |
| Reliability | What happens during failure, and can we restore? | Appropriate multi-AZ design, recovery actions, tested backups |
| Performance Efficiency | Are latency and throughput requirements met? | Suitable sizing, database access, caching, CDN, measurement |
| Cost Optimization | Is capacity/purchase/retention aligned with demand? | Rightsize, monitor costs, choose suitable commitments and storage |
| Sustainability | Are we wasting processing, storage, or idle capacity? | Improve utilization, data lifecycle, efficient components and code |

Some examples support several pillars: Auto Scaling can improve operations, reliability, efficiency, cost, and resource utilization. CloudWatch provides measurements for multiple concerns. A service is not permanently assigned to exactly one pillar.

The reading's Spot suggestion needs an interruption-tolerant design; variable traffic alone is not enough. Budgets and Cost Explorer use billing data with delays, not guaranteed real-time spending control. A smaller RDS compute instance does not automatically shrink allocated storage. A Cost and Usage Report provides cost/usage information, not a direct measurement or guarantee of reduced carbon emissions.

Architecture involves tradeoffs. Additional replicas can improve availability/read capacity while adding cost and resources. Removing redundancy can reduce some expenditure but violate recovery requirements. Choose the design that meets the required outcome, record the tradeoff, and verify with measurements.

*Adapted study material; [Module 13, section 7 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/T6DZG/introduction-to-well-architected-solutions).*

### Further distinctions

#### Security pillar principles

Protect stored and transmitted data and enable traceability through monitoring, alerts, and auditing. Global deployment belongs to performance efficiency; operations as code belongs to operational excellence; expenditure attribution belongs to cost optimization.

#### Reliability design principles

Automatically recover from detected failures and test recovery procedures. A backup is useful only when restoration works within requirements. Consumption-based billing and measuring financial efficiency address cost optimization.

### Exam requirements and service choices

#### Recognize design principles through service examples

Knowing the six pillar names is only the starting point. Identify the outcome the question prioritizes, and explain how the proposed change produces it.

| Pillar | Services and features to associate | Deciding distinction |
|---|---|---|
| Operational Excellence | CloudFormation; CloudWatch; Systems Manager Automation; CodePipeline | Repeatable operations, observation, controlled changes, and learning |
| Security | IAM roles; CloudTrail; KMS; Secrets Manager | Scoped permissions, traceability, encryption, and credential protection |
| Reliability | Multi-AZ deployment; Auto Scaling health replacement; Route 53 health checks; AWS Backup | Continue or recover when components fail |
| Performance Efficiency | Suitable EC2 families; ElastiCache; CloudFront | Match resource characteristics and data delivery to performance needs |
| Cost Optimization | Cost Explorer; AWS Budgets; Compute Optimizer; Savings Plans | Measure spending, remove waste, and use suitable purchase commitments |
| Sustainability | Demand-based scaling; efficient instance selection; S3 Lifecycle | Reduce idle processing and unnecessary retained data per useful outcome |

General cloud design principles also include measuring rather than guessing capacity, automating repeatable changes, testing at realistic scale, evolving designs as requirements change, and practicing failure response through game days. CloudWatch supplies evidence for decisions; CloudFormation makes infrastructure changes reproducible. A game day tests the people and process as well as the resources. The exam expects recognition of these ideas rather than the ability to build the whole architecture.

Do not assign each service to only one pillar. A CloudWatch alarm can support security detection, reliability recovery, or performance investigation. If the question says "automatically recover a failed instance," reliability is the strongest match. If it says "understand and improve the release process," operational excellence is stronger even if the same monitoring tool appears.

**Worked choice:** A company buys an EC2 commitment discount while leaving its workload unchanged. That is primarily a cost optimization action. Reducing wasted compute through rightsizing can support both cost optimization and sustainability. A discount alone does not demonstrate lower resource consumption.

**Check yourself:** Which service performs a guided workload review? AWS Well-Architected Tool. Which provides supported account/resource best-practice checks? AWS Trusted Advisor. Which recommends suitable compute resources from utilization data? AWS Compute Optimizer. These inputs complement one another.

Sources: [General design principles](https://docs.aws.amazon.com/wellarchitected/latest/framework/general-design-principles.html), [the six pillars](https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html), and [Compute Optimizer](https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is-compute-optimizer.html).

### Before continuing

Explain all six pillars: operational excellence, security, reliability, performance efficiency, cost optimization, sustainability. A service can support several pillars; classify the stated objective.

Explain the main concepts aloud and compare the services with similar purposes. Return to the relevant section whenever you cannot justify the distinction.

Study source: independently reconstructed course guides and editorial exam-task notes. Course capture: 16 October 2026; task expansion: 20 October 2026. These explanations are not an official AWS publication. Service qualifications retain their stated review dates.
