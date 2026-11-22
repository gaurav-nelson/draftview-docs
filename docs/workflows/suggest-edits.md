---
title: Suggest edits in the visual editor
description: Edit docs in the visual canvas and submit suggestions to GitHub.
tag: Workflows
readtime: 4 min read
---

# Suggest edits in the visual editor

Use this workflow when you want to propose exact wording changes instead of describing them in a comment.

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
- On public repositories, you can submit reviews under your own GitHub account without requiring the DraftView GitHub App installed on the repo.
- Magic-link reviewers create pending team feedback.
- A GitHub-linked teammate can verify and push pending feedback.
- DraftView preserves the original formatting of untouched blocks, so your pull request diff contains only the exact changes you made.

## Work with lists

To indent a list item, press Tab or select **Indent** in the toolbar. To outdent it, press Shift+Tab or select **Outdent**. These controls work in every DraftView editor. When reviewing changes to lists, DraftView highlights only the specific list items that changed rather than highlighting the entire list.

## Work with Mermaid diagrams

- Code blocks tagged `mermaid` render as graphical diagrams directly in the editor and review canvas.
- Select a Mermaid diagram block in the editor to edit its diagram definition. The diagram updates its visual preview live as you type.
- Diagram lines adapt automatically to light and dark themes.

## Work with source-only files

When a document has no visual prose (such as an attribute file or metadata document), DraftView displays it in a line-numbered source view. You can edit lines directly, and DraftView turns your edits into precise suggestions on those lines.

## Work with images

- Images render inline in the editor, including images referenced by relative paths in the repository. Images that the PR adds also preview correctly.
- Select an image to edit its source, alt text, and title, or to remove it.
- Use the **Insert image** button in the toolbar to add a new image.
- DraftView never rewrites stored image paths. Your edits submit with the original path style.

## Notes for AsciiDoc and includes

DraftView preserves source format on submit. AsciiDoc edits remain AsciiDoc. If a file includes other files, open and edit each included file directly.

## Related pages

- [Comment on a pull request](comment-on-a-pr)
- [Push teammate feedback to GitHub](../send-to-github/push-reviewer-feedback)
- [Supported file formats](../reference/supported-file-formats)
- [How suggestions reach GitHub](../send-to-github/how-suggestions-reach-github)
