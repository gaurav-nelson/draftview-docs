---
title: Troubleshooting common issues
description: Fixes for the problems people hit most often with DraftView, including missing files, sign-in trouble, and feedback that did not reach GitHub.
tag: Troubleshooting
readtime: 4 min read
---

# Troubleshooting common issues

Fixes for the problems people hit most often. Each entry lists the symptom, the likely cause, and what to do.

## A PR shows no files to review

**Likely cause:** the PR does not change any supported documentation files, or the files are in an unsupported format.

**Fix:** confirm the PR touches Markdown, MDX, or AsciiDoc files. Code, config, and data files do not render. See [Supported file formats](../reference/supported-file-formats).

## The demo will not load my PR

**Likely cause:** the PR is private, or you hit the demo rate limit.

**Fix:** the demo loads public PRs only. To review a private PR, sign in and load it from your dashboard. If loading fails repeatedly, wait and retry, since the demo limits requests by IP. See [Review your first pull request](../get-started/review-your-first-pr).

## My magic link does not work

**Likely cause:** the link expired or was already used.

**Fix:** magic links are single-use and short-lived. Request a new one from `https://draftview.app/login`, and use the email address your invitation was sent to. See [Sign in to DraftView](../get-started/sign-in).

## I reviewed, but nothing appeared on the PR

**Likely cause:** you signed in by email magic link, so your review is a pending review waiting for a teammate to push.

**Fix:** ask a GitHub-linked teammate to verify and push your review. This keeps every GitHub suggestion attributed to a real account. See [Push reviewer feedback to a pull request](../send-to-github/push-reviewer-feedback).

## I cannot submit suggested changes

**Likely cause:** your GitHub account does not have access to comment on that PR.

**Fix:** confirm you have the GitHub access the repo requires. If you do not, route the review through a teammate who does, or join the team and have them push your feedback.

## The queue is empty after I connected the App

**Likely cause:** the connected repos have no recent open doc PRs, or the App was not given access to the right repos.

**Fix:** check that the GitHub App can see the repositories you expected, and that those repos have open documentation PRs. DraftView backfills recent open doc PRs at connect time. See [Set up your team](../collaboration/set-up-your-team).

## My AsciiDoc edits came back as Markdown

**Likely cause:** this should not happen. DraftView serializes AsciiDoc back to AsciiDoc.

**Fix:** if you see an AsciiDoc edit serialized as Markdown, treat it as a bug and report it. Include the file and the edit. See the support note below.

## An agent pushed a commit but my comment is still open

**Likely cause:** the commit did not touch the region your comment covers, so DraftView did not mark the feedback addressed.

**Fix:** open the before and after view for your comment to see what actually changed. If the agent fixed the wrong place, reply on the thread and ask again. See [Review AI-generated documentation PRs](../workflows/review-ai-generated-doc-prs).

## Get more help

For feedback, use the in-product feedback button.

## Related pages

- [Before you begin](../get-started/prerequisites)
- [Sign in to DraftView](../get-started/sign-in)
- [Limits and constraints](../reference/limits)
