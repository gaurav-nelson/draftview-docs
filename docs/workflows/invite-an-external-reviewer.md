---
title: Invite an external reviewer
description: Share a password-protected snapshot link and collect outside feedback safely.
tag: Workflows
readtime: 5 min read
---

# Invite an external reviewer

Use external review links when stakeholders need to review a PR but should not get repository access.

## What this workflow does

- Creates a password-protected review link
- Freezes the review content at link creation time
- Lets reviewers submit comments and edits without GitHub
- Lets a GitHub-linked teammate verify and push that feedback

## Steps

<wc-steps>
<wc-step title="Open the PR in DraftView">

Open the target PR in DraftView.

</wc-step>
<wc-step title="Create an external review link">

Create a link from the review surface or dashboard. Choose expiration and max submissions.

</wc-step>
<wc-step title="Share the link and password">

Send the URL and password to the reviewer.

</wc-step>
<wc-step title="Reviewer submits feedback">

The reviewer verifies password, enters a name, and submits feedback.

</wc-step>
<wc-step title="Push feedback to GitHub">

A GitHub-linked teammate verifies the submission and pushes it to GitHub.

</wc-step>
</wc-steps>

## Link behavior and limits

- Links review a frozen snapshot.
- Max submissions per link: 1 to 10.
- Expiration choices: 3, 7, 14, or 30 days.
- Active links per repository: 10.

If the PR updates after link creation, DraftView shows a staleness notice. Create a new link for the next round.

## Related pages

- [Push teammate feedback to GitHub](../send-to-github/push-reviewer-feedback)
- [Submit an edit as a pull request](../send-to-github/submit-an-edit-as-a-pr)
- [Limits and constraints](../reference/limits)
