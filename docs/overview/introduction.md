---
title: Introduction to DraftView
description: Learn why DraftView is the human review layer for AI-generated docs and where to start.
tag: Overview
readtime: 4 min read
---

# The human review layer for your AI-generated docs

DraftView is the human review layer for AI-generated documentation pull requests, built on top of GitHub.

AI writes the docs. DraftView is where a qualified human reviews, edits, comments, and signs off before merge.

## Why teams adopt DraftView now

- AI assistants open documentation pull requests faster than people can review them.
- Review speed stays human, so teams rubber-stamp when queues pile up.
- More teams need to prove human oversight rather than claim it.

## What DraftView does in the loop

- Auto-ingests doc PRs into a queue with explicit lifecycle states.
- Gives reviewers a visual, doc-native review surface instead of diff-only review.
- Lets non-GitHub reviewers contribute through magic-link access.
- Runs [doc reviews](../workflows/run-a-doc-review) (in preview) of files on a branch with no pull request, then turns the accepted edits into one pull request.
- Shows whether the next AI commit addressed the exact feedback region.
- Records sign-off and preserves oversight evidence.

DraftView does not replace GitHub. Your repository remains the source of truth, and your team still merges in GitHub.

## Start here

- Run the main use case in [Review AI-generated documentation PRs](../workflows/review-ai-generated-doc-prs).
- Set up the team queue in [Set up your team](../collaboration/set-up-your-team).
- Review published docs with no pull request in [Review files without a pull request](../workflows/run-a-doc-review).
- Try the experience with no login in [Try DraftView without an account](../get-started/try-without-an-account).
- Access the [dashboard](https://www.draftview.app/dashboard) to start reviewing.

## Related pages

- [Who DraftView is for](who-its-for)
- [How DraftView works](how-it-works)
- [Sign-off and oversight](../collaboration/sign-off-and-oversight)
