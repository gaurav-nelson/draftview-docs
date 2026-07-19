---
title: Comment on a pull request
description: Leave clear, actionable comments in DraftView and sync them to GitHub review threads.
tag: Workflows
readtime: 3 min read
---

# Comment on a pull request

Use comments when you want the author to make a change, explain a decision, or confirm accuracy.

## Before you start

- Open the PR in DraftView.
- Confirm you have comment permission for that queue item.

## Steps

<wc-steps>
<wc-step title="Select the text region">

Open the file in the visual surface, then highlight the sentence or block you want to discuss.

</wc-step>
<wc-step title="Write a specific comment">

State what should change and why. Use concrete language that the author can act on.

</wc-step>
<wc-step title="Submit your review">

Submit your comments from the review toolbar.

</wc-step>
<wc-step title="Verify in GitHub">

DraftView posts your comments to the PR review thread in GitHub.

</wc-step>
</wc-steps>

## Comment on deleted content

DraftView shows content that the PR removes as inline deletion blocks in the review surface, including files that the PR deletes entirely.

To object to a deletion:

1. Find the deletion block at the place where the content was removed.
2. Select **Comment** on the block. DraftView quotes the deleted text into your comment so the author sees the full context.
3. Submit your review. DraftView anchors the comment to the deleted lines in the GitHub diff, so the thread appears on the removed content itself.

## Write comments that resolve faster

- Tie each comment to one issue.
- Include expected behavior or exact wording when possible.
- Ask one clear follow-up question if data is missing.

## Related pages

- [Suggest edits in the visual editor](suggest-edits)
- [How suggestions reach GitHub](../send-to-github/how-suggestions-reach-github)
- [Review AI-generated documentation PRs](review-ai-generated-doc-prs)
