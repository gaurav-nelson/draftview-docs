---
title: Push teammate feedback to GitHub
description: Verify and push pending feedback from teammates who reviewed without GitHub accounts.
tag: Send changes to GitHub
readtime: 5 min read
---

# Push teammate feedback to GitHub

Use this workflow when a teammate reviewed through magic link and DraftView saved their feedback as pending.

## Why this exists

GitHub requires a GitHub identity to post PR review suggestions. DraftView separates review from push so non-GitHub teammates can still review.

## Prerequisites

- You are signed in with GitHub.
- You can access the target PR.
- Pending teammate feedback exists for that PR.

## Steps

<wc-steps>
<wc-step title="Open pending feedback">

Open the queue item or review page and find pending teammate submissions.

</wc-step>
<wc-step title="Review what will be pushed">

Inspect comments and edit chunks to confirm quality.

</wc-step>
<wc-step title="Push to GitHub">

Push the submission. DraftView posts it to GitHub with your account.

</wc-step>
<wc-step title="Confirm attribution details">

DraftView keeps teammate attribution in the DraftView record so your team can trace who authored feedback.

</wc-step>
</wc-steps>

## Related pages

- [How suggestions reach GitHub](how-suggestions-reach-github)
- [Invite an external reviewer](../workflows/invite-an-external-reviewer)
- [Roles and permissions](../collaboration/roles-and-permissions)
