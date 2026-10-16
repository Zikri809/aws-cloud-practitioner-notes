import fs from "node:fs/promises";

const replacements = [
  [
    "https://docs.aws.amazon.com/migrationhub/latest/ug/migration-hub-availability-change.html",
    "https://docs.aws.amazon.com/mhj/latest/userguide/migrationhub-availability-change.html",
  ],
  [
    "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html",
    "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-nodes.html",
  ],
  [
    "https://docs.aws.amazon.com/storagegateway/latest/userguide/WhatIsStorageGateway.html",
    "https://aws.amazon.com/storagegateway/",
  ],
  [
    "https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/pricing-models.html",
    "https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/key-principles.html",
  ],
  [
    "and Snowcone reached end of support in 2024",
    "and Snowcone is not available to new customers",
  ],
  ["Snowcone end of support", "Snow device availability"],
  [
    "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snowcone-end-of-support.html",
    "https://docs.aws.amazon.com/snowball/latest/developer-guide/snowball-edge-availability-change.html",
  ],
  [
    "https://docs.aws.amazon.com/managed-blockchain/latest/managementguide/managed-blockchain-end-of-support.html",
    "https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/managed-blockchain-end-of-support.html",
  ],
  [
    "AWS CodeStar ended support on 31 July 2024 according to its service guide",
    "AWS CodeStar ended support in 2024",
  ],
  [
    "OpsWorks Stacks ended support on 26 May 2024; OpsWorks for Chef Automate and Puppet Enterprise ended support on 5 May 2024",
    "The AWS OpsWorks services ended support in 2024",
  ],
  [
    "https://docs.aws.amazon.com/codestar/latest/userguide/welcome.html",
    "https://docs.aws.amazon.com/general/latest/gr/full_shutdown_services.html",
  ],
  [
    "https://docs.aws.amazon.com/opsworks/latest/userguide/stacks-eol-faqs.html",
    "https://docs.aws.amazon.com/general/latest/gr/full_shutdown_services.html",
  ],
  [
    "CodeGuru Reviewer is closed to new customers",
    "CodeGuru Reviewer no longer accepts new repository associations; existing associations can continue",
  ],
  [
    "https://docs.aws.amazon.com/migration-evaluator/latest/ug/what-is-migration-evaluator.html",
    "https://docs.aws.amazon.com/prescriptive-guidance/latest/migration-tools/discovery-migration-evaluator.html",
  ],
  [
    "https://docs.aws.amazon.com/repost/latest/userguide/what-is.html",
    "https://repost.aws/",
  ],
];
for (const directory of ["sections", "content-review"]) {
  for (const file of await fs.readdir(directory)) {
    if (!/\.(md|json)$/.test(file)) continue;
    const name = `${directory}/${file}`;
    let text = await fs.readFile(name, "utf8");
    for (const [before, after] of replacements)
      text = text.replaceAll(before, after);
    if (directory === "sections") {
      text = text.replace(/^(\S[^\n]+)(?:\n\1)+$/gm, "$1");
      text = text.replace(/^(\S[^\n]+)(?:\n\n\1)+$/gm, "$1");
    }
    await fs.writeFile(name, text);
  }
}
