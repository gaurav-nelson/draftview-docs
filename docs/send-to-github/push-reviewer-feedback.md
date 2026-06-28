---
title: Push reviewer feedback to a pull request
description: Verify a pending review from a teammate or external reviewer who has no GitHub account, then push it to the PR as suggested changes under your own account.
tag: Send changes to GitHub
readtime: 4 min read
---

# Push reviewer feedback to a pull request

Reviewers without a GitHub account cannot post suggested changes directly, because GitHub requires every suggestion to come from a real account. Their review waits as a pending review. A GitHub-linked teammate then verifies it and pushes it upstream. This is verify-and-push. Use this page when you are the teammate doing the pushing.

## When to use this

- A magic-link team member submitted a review and it is waiting to be pushed.
- An external reviewer submitted feedback through a shared link.
- You are the GitHub-linked person responsible for sending it to the PR.

## Prerequisites

- A GitHub account with access to comment on the PR.
- A pending review or an external review submission to push.

## Why this step exists

It keeps every upstream change attributed to a real GitHub account, while letting people who do not use GitHub still contribute precise feedback. You are not just forwarding the review. You are vouching for it, because it goes out under your account.

## Push a team member's pending review

<wc-steps>
<wc-step title="Open pending reviews">

In the team area, open the pending reviews surface. It lists reviews that magic-link members submitted and that need a GitHub-linked person to push.

</wc-step>
<wc-step title="Verify the content">

Read what the reviewer changed and commented. Confirm you are willing to put it on the PR under your account. Adjust nothing silently. If something is wrong, talk to the reviewer rather than pushing it.

</wc-step>
<wc-step title="Push it">

Push the review. DraftView posts the edits as suggested changes and the comments as review threads, attributed to your account.

</wc-step>
</wc-steps>

## Push an external reviewer's submission

<wc-steps>
<wc-step title="Open the review link">

Go to the external review link you created. It shows what the reviewer submitted. See [Invite an external reviewer](../workflows/invite-an-external-reviewer).

</wc-step>
<wc-step title="Review and push">

Check the submission, then push it to GitHub. Revoke the link afterward if the review is complete.

</wc-step>
</wc-steps>

## Result

The reviewer's edits and comments are on the PR as native GitHub suggestions and threads, under a real account. The PR author can accept the suggestions. The non-technical reviewer never needed GitHub.

## Common mistakes

- **Pushing without reading.** The review goes out under your name. Verify it first.
- **Editing the reviewer's intent without telling them.** If you change what they meant, tell them. Otherwise the attribution is misleading.
- **Leaving a shared link active.** Revoke external links once their review is pushed.

## Next steps

- Understand what the author sees in [How suggestions reach GitHub](how-suggestions-reach-github).
- Record the review outcome in [Sign-off and oversight records](../collaboration/sign-off-and-oversight).

## Related pages

- [Invite an external reviewer](../workflows/invite-an-external-reviewer)
- [How suggestions reach GitHub](how-suggestions-reach-github)
- [Roles and permissions](../collaboration/roles-and-permissions)
