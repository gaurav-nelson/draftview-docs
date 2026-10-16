---
title: Sign-off and oversight
description: Record accountable sign-off, report on human oversight of pull requests and doc reviews, and export sealed audit records.
tag: Collaboration
readtime: 7 min read
---

# Sign-off and oversight

Use sign-off when review is complete and a responsible team member approves the change for merge.

## Who can sign off

Maintainers and admins can sign off queue items.

## What sign-off records

- Who signed off
- Role at sign-off time
- PR head SHA
- CI state at sign-off time

The sign-off record also lists the content that each file deletes, so sign-off covers what the PR removed as well as what remains.

## What happens after sign-off

- If CI is green, DraftView moves the item to Ready to merge.
- If CI is pending or failing, the item stays Signed off until CI passes.
- A person still merges in GitHub.

## The merge gate setting

DraftView posts a `draftview/human-review` commit status to GitHub so branch protection can require human review before merge.

Admins can turn this merge gate off. In the [dashboard](https://www.draftview.app/dashboard), open the **Organization** tab, select **GitHub**, and clear **Human-review merge gate** under **Pull request checks**. When the gate is off:

- DraftView posts no commit statuses.
- The scorecard comment and oversight records stay on.

Before you turn the gate off, remove the `draftview/human-review` check from branch protection in GitHub. Otherwise, PRs wait on a status that never arrives.

## Oversight report

The oversight report shows how much human review your AI-generated doc PRs and doc reviews actually got. It's part of the Governance plan. DraftView records the data on every plan, so when you upgrade, the report covers your full history.

To open it, go to the **Organization** tab in the [dashboard](https://www.draftview.app/dashboard) and select **Oversight**. Only maintainers and admins see this tab. Use **Period** to pick the last 30 days, the last 90 days (the default), the last 12 months, or all time.

The **AI pull requests** section shows:

- The share of merged AI PRs that got a substantive human review (an edit, a comment, or a submitted review) before merge
- How many AI PRs DraftView ingested and how many merged
- How many merged without a substantive review (rubber-stamped)
- The average time to first review and the total active review hours
- The same review rate for PRs written by people, for comparison
- A breakdown by AI generator

The **Doc reviews** section shows:

- The share of finished doc reviews with review on record. A review counts as reviewed when it has at least one comment or suggested edit.
- The share of accepted edits decided independently, meaning someone other than the edit's author accepted it
- How many accepted edits were self-approved, and how many reviews finished without any review
- Reviews started and finished, reviewers, accepted and rejected edits, and resolved threads
- The average time to the first comment or edit, and the average review length

Below the metrics, **Recent doc reviews** lists each review with its status, repository, and edit counts. A review is tagged **Self-approved** when its author accepted their own edit, and **No review on record** when it finished with no comments or edits.

## Export audit records

Maintainers and admins can export these records:

| Record | Where | Plan |
|---|---|---|
| Pull request oversight record (JSON) | The download icon on a signed-off or merged item in the **Queue** | Governance |
| Doc review audit record (JSON) | **Record** next to a review in **Recent doc reviews**, or **Audit record (JSON)** in a review's **Record** dialog | Governance |
| Doc review record (Markdown) | **.md** next to a review in **Recent doc reviews**, or **Download .md** in a review's **Record** dialog | Every plan |
| Oversight ledger (CSV or JSON) | **Oversight ledger (CSV)** or **Sealed ledger (JSON)** in the **Oversight** tab | Governance |

The pull request record covers who reviewed, time spent, edits, and sign-off. The doc review audit record covers the reviewed files and their content hashes, each participant and their role, every thread, every edit with its outcome and who decided it, and the full event log. The Markdown record is the same record that **Finish** commits to the pull request, and you can download it while the review is still open.

The ledger has one row for every queue PR and every doc review in the selected period. Each row includes review and edit counts, self-approved edits, sign-offs, and links to the PR, the review, and its record.

## Verify a sealed record

DraftView seals every JSON record it exports. The seal holds only if your organization exported the file and nobody changed it afterward.

To check a file that someone sends you, open the **Oversight** tab, find **Verify a record**, and select **Choose a record**. DraftView checks the file on the server and doesn't store it. A valid file shows **Seal verified. This record is unchanged.** and the time it was sealed.

## Compliance alerts

On the Governance plan, admins can send these alerts to Slack or a webhook. Select them under **Compliance alerts** in the **Notifications** tab.

| Alert | When DraftView sends it |
|---|---|
| AI PR reached merge without a substantive review | An AI PR merges after a rubber-stamp review |
| Oversight record ready to export | A PR is signed off or a doc review finishes |
| A doc review finished with edits approved by their own author | A doc review finishes and at least one accepted edit was accepted by its author |

## Related pages

- [Pull request lifecycle states](../reference/pr-lifecycle-states)
- [Roles and permissions](roles-and-permissions)
- [Review files without a pull request](../workflows/run-a-doc-review)
- [Limits and constraints](../reference/limits)
