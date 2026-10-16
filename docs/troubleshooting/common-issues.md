---
title: Troubleshooting common issues
description: Fix common DraftView issues across demo, queue, external links, and GitHub handoff.
tag: Troubleshooting
readtime: 7 min read
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

## I cannot open a PR after signing in

Possible causes:

- The repository is private and the DraftView GitHub App isn't installed on it
- The PR doesn't exist, or the URL is wrong

Fix:

- For a private repository, ask a repository admin to install the DraftView GitHub App
- Check the PR URL

Public PRs open without the app. You need the app only to submit your review.

## I cannot submit my review

Cause:

- The DraftView GitHub App isn't installed on the repository

Fix:

- Select the install link in the review banner. Your drafts stay saved, and you can submit after the install finishes.
- If the PR comes from your fork, install the app on your fork, not on the upstream repository.

## I see a "Something went wrong" page

DraftView reports the error automatically. Select **Try again**, or go back to your dashboard. If the error keeps happening, contact support and include the reference code shown on the page.

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

- The app is not connected to the expected repositories
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
- Your org reached the free plan active reviewer limit

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

## A reviewer can't open a doc review link

Cause:

- Only members of your DraftView organization can open a doc review

Fix:

- Invite the reviewer from **Members** in the **Organization** tab, then send the link again. They can join by magic link without a GitHub account.

## I can't comment or suggest edits in a doc review

Possible causes:

- Your role or the review's permission cap doesn't allow it
- A maintainer turned off **Allow comments**
- The review is finished or cancelled, so it's read-only

Fix:

- Check the top bar of the review. It shows **You can comment and suggest edits**, **You can comment**, or **View only**.
- Ask a maintainer to change your role or the review's **Everyone can, at most** setting

## My doc review edits are missing on another device

Cause:

- DraftView keeps unsaved edits in the browser where you made them

Fix:

- Go back to the first browser and select **Save**. Saved edits show up for everyone, on every device.

## Finishing a doc review fails

The error in the **Finish review** dialog names the cause. The most common ones:

- **The DraftView GitHub App needs Contents and Pull requests write permission on this installation.** Ask the installation owner to accept the updated app permissions in GitHub, or have a maintainer with push access finish the review.
- **Branch mode needs push access to the repo or the DraftView GitHub App installed on it.** Install the app on the repository, or have someone with push access finish the review.
- **Fork mode needs a linked GitHub account.** Link GitHub to your DraftView account, or ask an admin to switch the repository to branch mode.
- **Authorize DraftView to open pull requests from a fork.** Select **Authorize on GitHub**, then finish again.
- **Could not open the pull request.** A pull request from the same branch might already exist, or there might be nothing to merge.

See [Configure doc reviews](../collaboration/configure-doc-reviews).

## The Fork option is unavailable for a repository

Cause:

- The repository is private. Fork mode works only on public repositories.

Fix:

- Use **Branch in the repo** for private repositories

## Related pages

- [Pull request lifecycle states](../reference/pr-lifecycle-states)
- [Push teammate feedback to GitHub](../send-to-github/push-reviewer-feedback)
- [Invite an external reviewer](../workflows/invite-an-external-reviewer)
