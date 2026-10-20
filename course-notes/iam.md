# IAM: Identity Access & Management (IAM)

Work through the explanations, examples, and service comparisons below. Use the [reference notes](#reference-notes) for revision, or follow the [exam-task reading path](/study-guide#detailed-reading-by-exam-task) to study in syllabus order.

## Exam task 2.3: Identity and access management

### IAM fundamentals

AWS Identity and Access Management, IAM, controls access to AWS services and resources. Start with least privilege: give a person or workload the actions it needs on the appropriate resources, with suitable conditions. Avoid granting broad administrator access just to remove an access error.

| Concept | Purpose | Important distinction |
|---|---|---|
| Root user | Highly privileged AWS account identity | Reserve for tasks that require it |
| IAM user | Identity that can have long-term credentials | Credentials and permissions are separate |
| IAM user group | Collection of IAM users receiving shared permissions | A group is not a sign-in identity and cannot be assumed as a role |
| IAM role | Identity assumed using temporary credentials | Used by people, workloads, services, and cross-account access |
| IAM policy | Document describing permissions or constraints | Allow/deny depends on applicable policies and context |

#### Root account protection and workforce access

Protect root credentials with a strong password and MFA, avoid root access keys, and avoid routine root use. MFA combines factors, such as a password and a possession-based authenticator. Two passwords are not two independent factor types. MFA strengthens authentication; it does not itself grant authorization.

The reading recommends creating an IAM user for each person. Individual identities are better than shared credentials, but current AWS guidance generally prefers **federation with temporary credentials for human users**, often through IAM Identity Center, and **roles for workloads**. IAM users still exist for cases that require them. [IAM security best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html).

The video's statement that root “cannot be restricted” is too absolute. Root has broad privileges and cannot be restricted through ordinary IAM identity policies, but organizational controls can constrain a member account's root user, and some tasks or features have additional requirements. The practical exam takeaway remains: protect root and use appropriate non-root identities for daily work.

#### Roles and federation

A role has permissions and a trust relationship specifying who may assume it. An EC2 application can use an instance role to obtain temporary credentials rather than embedding long-term access keys. A federated employee can use an existing corporate identity and receive a role session. Cross-account access can also use roles.

When a person switches into a role, requests made in that role session use the role's effective permissions, rather than adding the person's original permissions to the role. This does not erase every other credential or session the person possesses. The course's changing-job analogy describes the active session, not permanent removal of all previous access.

IAM Identity Center centralizes workforce access to multiple AWS accounts and applications and can connect to an existing identity source. Federation and single sign-on are related but distinct: federation establishes trust between identity systems; SSO describes the experience of using one sign-in across services.

*Adapted study material; [Module 9, section 2 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/gIhAO/introduction-to-security-on-aws).*

### Reading a policy and understanding a deny

An IAM policy is commonly expressed in JSON. For this exam level, understand what its important fields mean rather than memorizing complex policy syntax.

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": "s3:ListBucket",
    "Resource": "arn:aws:s3:::example-coffee-reports"
  }]
}
```

This example allows listing the specified bucket, subject to other applicable controls. It does **not** grant `s3:GetObject` to read object contents. Bucket-level and object-level actions can require different resource identifiers. `Effect` expresses Allow or Deny, `Action` identifies operations, and `Resource` identifies the targets. Conditions can further narrow a statement.

The basic evaluation rules are: requests start implicitly denied; an applicable allow can grant access; an applicable explicit deny overrides an allow. Effective access can involve identity policies, resource policies, session policies, permissions boundaries, and organization controls. Do not assume the user must always have a directly attached allow;other applicable policy mechanisms can grant permissions. [IAM evaluation logic](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html).

**Exam extension:** A service control policy, SCP, sets a permissions ceiling for affected organization accounts; it does not grant permissions by itself. A permissions boundary similarly limits an IAM identity's maximum permissions rather than supplying all required allows. Learn the purpose without treating this brief summary as every advanced policy-evaluation exception.

*Adapted study material; [Module 9, section 3 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/gIhAO/introduction-to-security-on-aws).*

### Reconstructing the IAM demonstration

The video creates `john_doe`, adds that user to an `employees` group, and assigns an AWS managed `ViewOnlyAccess` policy to the group. It then creates an `s3_read_only` role with an MFA requirement and selected S3 read-only managed policies. No identities, credentials, or permissions were created in the user's AWS account while preparing these notes.

The learning sequence is:

1. Create an identity; creating it alone does not provide broad resource permissions.
2. Place IAM users with common needs in a group so shared permissions can be maintained together.
3. Distinguish AWS managed policies, maintained by AWS, from customer managed policies, maintained by the customer.
4. Create a role with a suitable trust relationship and permission policies.
5. An authorized principal assumes the role and receives temporary session credentials.

The recording's broad managed policies are demonstrations, not proof of least privilege for one bucket. A name such as “read only” does not mean “limited to precisely the intended data,” and it can still grant access to sensitive content. Inspect policy scope. View-only service metadata access and reading all object contents are also different needs. Creating a role alone does not mean every employee can assume it; trust and caller permissions must be configured as required.

*Adapted study material; [Module 9, section 4 (course background)](https://www.coursera.org/learn/aws-cloud-practitioner-essentials/lecture/gIhAO/introduction-to-security-on-aws).*

### Further distinctions

#### Remote EC2 access without inbound SSH

Systems Manager Session Manager supports access without opening inbound SSH ports or managing SSH keys for native sessions. Nodes still need the appropriate agent, IAM permissions, and connectivity to Systems Manager endpoints.

#### Recognize root-required account tasks

Recovering lost IAM administrator permissions and closing an AWS account are examples of sensitive account administration. Treat these as sensitive account administration, not daily root work. Actual Organizations member-account closure and centralized root-access procedures can use other authorized management paths; avoid the absolute claim that every closure always requires a root sign-in.

#### IAM group membership rules

IAM groups contain users only, cannot contain other groups, and do not have an automatic default group containing every new user. A user can belong to several groups. Organizational units are a different construct and can be nested.

#### IAM MFA and credential hygiene

Use MFA and manage credentials safely, including rotating or replacing long-term credentials when appropriate. Prefer temporary credentials and remove unnecessary long-term keys; credential rotation is not a reason to create root access keys.

### Before continuing

Explain least privilege, policies and explicit deny, federation, IAM Identity Center, cross-account roles, and authentication versus authorization. Groups collect users; roles are assumed; policies describe permissions.

Explain the main concepts aloud and compare the services with similar purposes. Return to the relevant section whenever you cannot justify the distinction.

Related explanations for this task: [advanced identity](/notes/advanced_identity#exam-task-23-identity-and-access-management).

Study source: independently reconstructed course guides and editorial exam-task notes. Course capture: 16 October 2026; task expansion: 20 October 2026. These explanations are not an official AWS publication. Service qualifications retain their stated review dates.
