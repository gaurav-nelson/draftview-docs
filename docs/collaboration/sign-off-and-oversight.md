---
title: Sign-off and oversight records
description: Record that a qualified human reviewed a documentation change, and export an oversight trail that shows who reviewed what, when, and against which version.
tag: Collaboration
readtime: 5 min read
---

# Sign-off and oversight records

A green checkmark on a pull request says someone clicked approve. It does not show that a qualified person actually read the change. When you need to prove human oversight, especially for AI-generated content, that gap matters. DraftView records the review act and lets you export it.

## When to use this

- You need evidence that a human reviewed an AI doc PR before it merged.
- An auditor, a customer, or a regulation asks you to show human oversight.
- You want to track whether AI PRs get real review or get rubber-stamped.

## What a sign-off is

When a change is ready, an approver records a sign-off. DraftView writes an append-only entry that captures who signed off, what changed, how long the review took, and which version of the PR they reviewed. Append-only means the record is added to, not edited or deleted, so the history stands.

A sign-off does not merge anything. With a sign-off in place and CI green, the PR reaches a ready-to-merge state. A person still merges in GitHub. DraftView never merges on its own.

## Record a sign-off

<wc-steps>
<wc-step title="Finish the review">

Confirm the content is correct and that any agent follow-up addressed the feedback. See [Review AI-generated documentation PRs](../workflows/review-ai-generated-doc-prs).

</wc-step>
<wc-step title="Sign off">

As an owner or approver, record the sign-off on the PR. DraftView writes the entry. See [Roles and permissions](roles-and-permissions).

</wc-step>
<wc-step title="Merge in GitHub">

With the sign-off recorded and CI green, the PR is ready to merge. A person merges it in GitHub.

</wc-step>
</wc-steps>

## The oversight record

Sign-off entries roll up into a per-PR oversight record you can export. It is the durable artifact GitHub does not produce: the trail you hand to an auditor or attach to a compliance review. It ties the human review to a specific version of the change, so it shows what was actually reviewed, not just that an approval happened.

[Assumption: the per-PR oversight record is exportable. The export format and any tier gating are not confirmed here.]

## The substantive-review metric

Alongside individual records, DraftView reports the share of AI-authored doc PRs that received a substantive human edit before merge, versus those that were approved without one. This is the number that shows whether review is real or whether PRs are being rubber-stamped under volume. Use it to spot where oversight is slipping.

[Assumption: the substantive-review metric is a report-only measure and may be gated to a higher plan tier. Confirm availability.]

## Common mistakes

- **Treating sign-off as a formality.** The record is only worth as much as the review behind it. Sign off because you read it, not to clear the queue.
- **Signing off before the loop closed.** On AI PRs, confirm the agent's follow-up addressed the feedback before you sign off.
- **Relying on GitHub approval as evidence.** A GitHub approval is not the oversight record. The DraftView entry is.

## Next steps

- Do the review that precedes sign-off in [Review AI-generated documentation PRs](../workflows/review-ai-generated-doc-prs).
- Understand the states around ready-to-merge in [Pull request lifecycle states](../reference/pr-lifecycle-states).

## Related pages

- [Review AI-generated documentation PRs](../workflows/review-ai-generated-doc-prs)
- [Roles and permissions](roles-and-permissions)
- [Pull request lifecycle states](../reference/pr-lifecycle-states)
