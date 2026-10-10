---
title: How suggestions reach GitHub
description: Understand how DraftView converts visual feedback into GitHub-native PR review content.
tag: Send changes to GitHub
readtime: 4 min read
---

# How suggestions reach GitHub

When you submit review feedback, DraftView maps comments and edits to the PR so authors can apply changes in normal GitHub review flow.

## What DraftView sends

- Review comments
- Suggested changes for edited chunks
- Comments on deleted content, anchored to the removed lines in the GitHub diff
- Replies to existing review threads, and threads you resolved or reopened
- Attribution to the GitHub identity that posted the review

## How DraftView anchors feedback

- Comments on current text anchor to the matching lines in the PR diff.
- Comments on deleted content anchor to the removed lines on the base side of the diff, so the thread appears on the deletion itself.
- Feedback on regions outside the PR diff posts as a file-level comment, and DraftView labels it that way in the submit panel before you submit.

## Submission paths

### GitHub-linked reviewer

DraftView posts directly to GitHub with that reviewer's account.

### Magic-link reviewer

DraftView stores feedback as pending team review. A GitHub-linked teammate verifies and pushes it.

## What authors see in GitHub

Authors see normal GitHub review comments and suggested changes. They can apply suggestions with standard GitHub controls.

## Related pages

- [Push teammate feedback to GitHub](push-reviewer-feedback)
- [Suggest edits in the visual editor](../workflows/suggest-edits)
- [Comment on a pull request](../workflows/comment-on-a-pr)
