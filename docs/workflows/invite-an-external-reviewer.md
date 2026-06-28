---
title: Invite an external reviewer
description: Share a documentation PR for review with someone who has no GitHub account or repo access, using a password-protected link or an email team invitation.
tag: Common workflows
readtime: 5 min read
---

# Invite an external reviewer

Use this when the person who should review a change does not have a GitHub account or access to the repository. That is the common case for product managers, legal reviewers, subject-matter experts, and people outside your company such as outside counsel or a localization vendor.

There are two ways to bring in a reviewer without GitHub. Pick based on whether they are a recurring team member or a one-time outside reviewer.

## Choose an approach

| Approach | Use it for | How they get in |
|---|---|---|
| Email team membership | Recurring reviewers inside your org | Email magic link, joins the team and the queue |
| Shareable review link | One-time or outside reviewers | A tokenized link, optionally password-protected, with an expiry |

## When to use this

- A reviewer has no GitHub account and will not get one.
- You need a one-time review from someone outside the team.
- You want feedback to come back into the PR, not as an email or a doc.

## Prerequisites

- For team membership: you are an admin on a DraftView team. See [Set up your team](../collaboration/set-up-your-team).
- For a shareable link: a PR loaded in DraftView that you can create a link for.

## Invite a recurring reviewer by email

<wc-steps>
<wc-step title="Send the invitation">

In the team panel, invite the reviewer by email address and assign a role. For someone who reviews but does not approve, the reviewer role is the right fit. See [Roles and permissions](../collaboration/roles-and-permissions).

</wc-step>
<wc-step title="They sign in">

The reviewer opens the invitation and signs in with the magic link. No GitHub account is needed. See [Sign in to DraftView](../get-started/sign-in).

</wc-step>
<wc-step title="They review from the queue">

The reviewer opens queue items, reads the rendered pages, edits, and comments. Their edits become a pending review.

</wc-step>
<wc-step title="A teammate pushes it">

A GitHub-linked teammate verifies the pending review and pushes it to GitHub under their own account. See [Push reviewer feedback to a pull request](../send-to-github/push-reviewer-feedback).

</wc-step>
</wc-steps>

## Share a one-time review link

<wc-steps>
<wc-step title="Create the link">

From a loaded PR, create an external review link. Set a password, an expiry, and a maximum number of submissions to match how widely you are sharing it.

</wc-step>
<wc-step title="Send it">

Share the link and the password with the reviewer. They open it, enter the password, and add a display name.

</wc-step>
<wc-step title="They review">

The reviewer reads the PR in a read-only editor, adds comments and edits, and submits. No account is required.

</wc-step>
<wc-step title="You push their feedback">

As the link owner, review what they submitted and push it to GitHub. You can revoke the link at any time. See [Push reviewer feedback to a pull request](../send-to-github/push-reviewer-feedback).

</wc-step>
</wc-steps>

## Result

The reviewer gives precise feedback without a GitHub account, and that feedback lands in the PR through a real account. You keep control of what gets pushed and can revoke a shared link whenever you want.

## Common mistakes

- **Sharing a link without a password for sensitive content.** Set a password and an expiry. A link with neither is open to anyone who gets the URL.
- **Forgetting to revoke.** Revoke a link once the review is done so it cannot be reused.
- **Expecting external edits to post automatically.** Nothing reaches GitHub until a GitHub-linked person pushes it. This is by design, so every upstream change is attributed to a real account.

## Next steps

- Push what the reviewer submitted in [Push reviewer feedback to a pull request](../send-to-github/push-reviewer-feedback).
- Set up a team so reviewers join the queue in [Set up your team](../collaboration/set-up-your-team).

## Related pages

- [Push reviewer feedback to a pull request](../send-to-github/push-reviewer-feedback)
- [Roles and permissions](../collaboration/roles-and-permissions)
- [Sign in to DraftView](../get-started/sign-in)
