---
title: Suggest edits in the visual editor
description: Edit docs in the visual canvas and submit suggestions to GitHub.
tag: Workflows
readtime: 4 min read
---

# Suggest edits in the visual editor

Use this workflow when you want to propose exact wording changes, not only comments.

## Before you start

- Open the target PR in DraftView.
- Confirm you have edit permission on that queue item.

## Steps

<wc-steps>
<wc-step title="Open the changed file">

Use the file list to move to the section you want to edit.

</wc-step>
<wc-step title="Edit the text">

Edit directly in the rendered content. Keep each change focused so authors can apply it quickly.

</wc-step>
<wc-step title="Review your changes">

Open the submit panel and review the chunks DraftView prepared.

</wc-step>
<wc-step title="Submit">

Submit your review. DraftView posts suggestions and comments to the PR.

</wc-step>
</wc-steps>

## What happens on submit

- GitHub-linked reviewers post directly to GitHub.
- Magic-link reviewers create pending team feedback.
- A GitHub-linked teammate can verify and push pending feedback.

## Notes for AsciiDoc and includes

DraftView preserves source format on submit. AsciiDoc edits remain AsciiDoc. If a file includes other files, open and edit each included file directly.

## Related pages

- [Comment on a pull request](comment-on-a-pr)
- [Push teammate feedback to GitHub](../send-to-github/push-reviewer-feedback)
- [Supported file formats](../reference/supported-file-formats)
- [How suggestions reach GitHub](../send-to-github/how-suggestions-reach-github)
