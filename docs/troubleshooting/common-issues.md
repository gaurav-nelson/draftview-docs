---
title: Troubleshooting common issues
description: Fix common DraftView issues across demo, queue, external links, and GitHub handoff.
tag: Troubleshooting
readtime: 5 min read
---

# Troubleshooting common issues

## I cannot load a PR in demo mode

Possible causes:

- The PR is private
- The URL is invalid
- You hit demo rate limits

Fix:

- Use a public PR for demo
- Check URL format
- Sign in for private PR workflows

## My sign-in magic link says expired or already used

Possible causes:

- The link passed its expiry window
- You already completed sign-in with that link

Fix:

- Request a new magic link from the sign-in page
- On the confirmation page the link opens, select the button to finish sign-in

The emailed link opens a confirmation page instead of signing you in directly. This keeps email security scanners from consuming your single-use link before you click it.

## The queue is empty after setup

Possible causes:

- App is not connected to the expected repositories
- No open doc PRs match supported formats

Fix:

- Verify repository selection in org setup
- Open or update a doc PR in a connected repo

## A magic-link reviewer submitted feedback, but nothing appears in GitHub

Cause:

- Feedback is pending and needs verify-and-push

Fix:

- Ask a GitHub-linked teammate to push pending feedback

## I cannot sign off

Possible causes:

- Your role is below Maintainer
- Free plan active reviewer limit was reached

Fix:

- Ask an admin to adjust role or item permissions
- Upgrade plan or wait for next monthly period

## External review link says expired or full

Cause:

- Link passed expiry date or max submissions

Fix:

- Create a new external review link for a new round

## External reviewer says comments disappeared

Cause:

- Reviewer reopened a different link token, or link was revoked

Fix:

- Confirm link token
- Check if owner revoked link
- Use link dashboard to manage active links

## A new commit landed, but state did not move to Addressed

Cause:

- Commit did not touch the commented region

Fix:

- Reopen review and verify changed regions
- Leave a follow-up comment with exact expected changes

## Related pages

- [Pull request lifecycle states](../reference/pr-lifecycle-states)
- [Push teammate feedback to GitHub](../send-to-github/push-reviewer-feedback)
- [Invite an external reviewer](../workflows/invite-an-external-reviewer)
