# Advanced Identity

Work through the explanations, examples, and service comparisons below. Use the [reference notes](#reference-notes) for revision, or follow the [exam-task reading path](/study-guide#detailed-reading-by-exam-task) to study in syllabus order.

## Exam task 2.3: Identity and access management

### Supporting access and operations services

**AWS Secrets Manager** stores and retrieves secrets such as database credentials and API keys, with supported rotation workflows. It helps avoid hardcoding credentials in application code. Rotation needs the appropriate integration and configuration; merely storing a secret does not automatically rotate every external credential or update every consuming application.

**AWS Systems Manager** supports operational management of managed nodes across AWS and supported hybrid environments. The lesson emphasizes inventory and automation, including patching. A node in this context is a managed machine or compute resource, rather than every generic network connection point. Enrollment, permissions, connectivity, and applicable agents/configuration determine what can be managed.

**Exam extension:** Remember the service boundary: IAM defines AWS permissions; Identity Center coordinates workforce access; Secrets Manager handles secret values; Systems Manager supports operations. These are complementary, not interchangeable password-management products.

*Adapted study material; [Module 9, section 5 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/gIhAO/introduction-to-security-on-aws).*

### Exam requirements and service choices

#### Choose the identity service for the audience

| Audience or need | Service/feature | Key distinction |
|---|---|---|
| Employees access several AWS accounts/applications | AWS IAM Identity Center | Workforce SSO and account permission assignments |
| Application customers sign up and sign in | Amazon Cognito | Application identities; user pools authenticate users, identity pools can provide temporary AWS credentials |
| Applications require Microsoft Active Directory features | AWS Directory Service | Managed Microsoft AD or connectivity to an existing directory, depending on the option |
| An EC2/Lambda workload calls another AWS service | IAM role; AWS STS temporary credentials | Workload authorization without embedded long-term user keys |
| Another account needs delegated access | Cross-account IAM role | Trust controls who can assume it; permissions control what the session can do |
| Several accounts should use a supported shared resource | AWS Resource Access Manager (AWS RAM) | Share supported resources, such as subnets; not a universal account-administration role |

Directory users, IAM users, and Cognito application users are not interchangeable collections. A Cognito user pool does not automatically grant account administrator access. RAM sharing does not remove IAM or organizational controls in the consuming account.

#### Credentials, policies, and root tasks

A console password authenticates a sign-in. Access keys sign programmatic requests. Temporary AWS credentials contain an access key ID, secret access key, and session token and expire. Prefer supported federation/role flows for people and workloads. IAM user password policies affect those users' passwords; they are not a substitute for root protection or an identity provider's password policy.

AWS managed policies are maintained by AWS; customer managed policies are reusable policies maintained by the customer; inline policies are embedded in a particular identity. A role trust policy specifies who can assume it, while permission policies specify allowed actions. Least privilege concerns actions, resources, and conditions, not merely whether a policy's name sounds restrictive.

CloudTrail provides evidence of supported identity/API activity. IAM access reports and IAM Access Analyzer can help review permissions and supported unused/external access. Reviewing activity and refining permissions is an ongoing least-privilege practice, rather than proof that a broad policy is safe because it worked once.

For root-required examples, recognize updating a standalone account's root email/password, closing a standalone account, recovering a sole IAM administrator's lost permissions, and configuring S3 MFA Delete. Organizations can provide central paths for specified member-account administration; this changes the procedure, not the need to protect privileged access. Routine resource provisioning and granting ordinary IAM permissions do not justify daily root use.

**Secrets Manager** fits secret storage and supported automated rotation. **Systems Manager Parameter Store** stores configuration parameters and encrypted SecureString values; do not assume it supplies the same built-in rotation workflow. Neither replaces the IAM role authorizing the application to retrieve the value.

**Worked choice:** Employees need company SSO, shoppers need website sign-up, and a server needs a database password. Use Identity Center, Cognito, and a workload role authorized to retrieve a Secrets Manager secret, respectively. These are three distinct identity/credential problems.

Sources: [Cognito](https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html), [Directory Service](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html), [AWS RAM](https://docs.aws.amazon.com/ram/latest/userguide/what-is.html), [root tasks](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html#root-user-tasks), and [Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html).

Related explanations for this task: [iam](/notes/iam#exam-task-23-identity-and-access-management).

Study source: independently reconstructed course guides and editorial exam-task notes. Course capture: 16 October 2026; task expansion: 20 October 2026. These explanations are not an official AWS publication. Service qualifications retain their stated review dates.
