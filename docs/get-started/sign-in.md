---
title: Sign in to DraftView
description: The two ways to sign in to DraftView, GitHub OAuth and email magic link, and which one to use depending on your role.
tag: Get started
readtime: 3 min read
---

# Sign in to DraftView

DraftView has two sign-in methods. Which one you use depends on whether you have a GitHub account and what you need to do.

## When to use this

- You received a team invitation and need to get in.
- You want to know whether you need a GitHub account.
- You are deciding how to invite reviewers who do not use GitHub.

## The two methods

| Method | Use it when | What it lets you do |
|---|---|---|
| GitHub OAuth | You have a GitHub account and access to the repos | Load PRs, submit suggested changes under your own account, push teammates' pending reviews |
| Email magic link | You do not have a GitHub account, or you were invited by email | Review and edit in connected repos, submit a pending review for a teammate to push |

Both methods create the same session. A magic-link member and a GitHub member can be on the same team and review the same PRs. The difference is who can push suggestions directly to GitHub.

## Sign in with GitHub

<wc-steps>
<wc-step title="Start the OAuth flow">

Go to `https://draftview.app` and choose to sign in with GitHub.

</wc-step>
<wc-step title="Authorize">

Approve the OAuth request. DraftView reads only the PRs you already have access to. It does not gain access to anything you cannot already see on GitHub.

</wc-step>
</wc-steps>

## Sign in with an email magic link

<wc-steps>
<wc-step title="Request a link">

Go to `https://draftview.app/login` and enter your email address. If you have a team invitation, use the address it was sent to.

</wc-step>
<wc-step title="Open the email">

DraftView emails a single-use link. Open it to sign in. The link expires after a short time, so request a new one if it lapses.

</wc-step>
</wc-steps>

[Assumption: magic-link tokens are single-use and expire after 15 minutes, matching the magic-link implementation described in the project.]

## Result

You have an active session. GitHub members can load and submit PRs directly. Magic-link members can review in their team's connected repos.

## Common mistakes

- **Magic link expired.** Request a new one. Links are single-use and short-lived.
- **Wrong email address.** Use the address the invitation was sent to, or the membership will not match.
- **Expecting to push suggestions as a magic-link member.** GitHub requires a real account for suggested changes. Submit your review and a GitHub-linked teammate pushes it. See [Push reviewer feedback to a pull request](../send-to-github/push-reviewer-feedback).

## Next steps

- Do a review in [Review your first pull request](review-your-first-pr).
- Invite people who do not use GitHub in [Invite an external reviewer](../workflows/invite-an-external-reviewer).

## Related pages

- [Before you begin](prerequisites)
- [Roles and permissions](../collaboration/roles-and-permissions)
