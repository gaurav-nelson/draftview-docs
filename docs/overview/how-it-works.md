---
title: How DraftView works
description: Learn the review lifecycle, queue behavior, and GitHub handoff model in DraftView.
tag: Overview
readtime: 7 min read
---

# How DraftView works

DraftView runs a human-in-the-loop review process for AI-generated documentation pull requests on top of GitHub.

## The AI review loop

1. AI or a teammate opens a documentation pull request.
2. DraftView ingests the PR into a queue.
3. A human reviewer reads, comments, and edits in a visual review surface.
4. DraftView syncs that feedback to GitHub.
5. AI pushes an updated commit.
6. Reviewer verifies whether that commit addressed the original feedback region.
7. Maintainer or admin signs off.
8. Team merges in GitHub.

## Team queue lifecycle

Connected repositories feed an org queue automatically. Each queue item tracks a lifecycle state:

- New
- In review
- Changes requested
- Waiting on AI
- Addressed
- Stalled
- Signed off
- Ready to merge
- Merged

See full definitions in [Pull request lifecycle states](../reference/pr-lifecycle-states).

## Live review surface

When a PR head moves, DraftView updates the review session quickly.

- You see a banner when a newer revision is available.
- You can switch to a focused view that shows changes since your last review.
- Draft edits rebase onto the latest content when possible, so reviewer work is not lost.

## External review links

External links are snapshot-based by design.

- DraftView captures the PR state at link creation time.
- External reviewers always review that same snapshot.
- If the PR moves later, reviewers see a staleness notice and can request a new link.

## Doc reviews

Not every review starts with a pull request. A doc review (in preview) lets your team review files straight from a branch.

- A maintainer picks up to 25 files on a branch. DraftView pins them at the branch's latest commit, so everyone reviews the same snapshot.
- Org members, including reviewers without GitHub, comment and suggest edits in DraftView. Nothing reaches GitHub during the review.
- A maintainer accepts or rejects each edit, then finishes the review. DraftView opens one pull request with the accepted edits, commits a record of the whole review, and posts the remaining comments on the pull request.

See [Review files without a pull request](../workflows/run-a-doc-review).

## Sign-off and oversight

Maintainers and admins can sign off queue items.

Sign-off records who approved, at which head SHA, and with which CI status. Governance plan orgs get an oversight report that covers AI PRs and doc reviews, plus sealed audit records that maintainers can check for changes later.

See [Sign-off and oversight](../collaboration/sign-off-and-oversight).

## Related pages

- [Set up your team](../collaboration/set-up-your-team)
- [Review AI-generated documentation PRs](../workflows/review-ai-generated-doc-prs)
- [How suggestions reach GitHub](../send-to-github/how-suggestions-reach-github)
