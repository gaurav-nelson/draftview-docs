---
title: Suggest edits in the visual editor
description: Edit a documentation PR as formatted prose and have your changes sent back to GitHub as suggested changes the author can accept in one click.
tag: Common workflows
readtime: 5 min read
---

# Suggest edits in the visual editor

This page covers the core review act: changing the wording of a documentation PR and sending those changes to GitHub. Use it once you can open a PR in DraftView and want to make edits that the author can apply.

## When to use this

- You are reviewing a doc PR and want to fix wording, not just comment on it.
- You want your changes to land in the PR, not in a separate message.
- A non-technical reviewer needs to edit prose without touching Markdown.

## Prerequisites

- A PR open in the DraftView review surface. See [Review your first pull request](../get-started/review-your-first-pr).
- For direct submission to GitHub, a GitHub account with access to comment on the PR. Reviewers without GitHub submit a pending review instead.

## How editing works

You edit the rendered document, not the raw source. DraftView keeps the original version and tracks each block you change. When you submit, it converts your changes into discrete suggested changes, mapping your edits back to the right lines in the raw file. The author sees normal GitHub suggestions.

The editor supports Markdown, MDX, and AsciiDoc. An AsciiDoc file round-trips back to AsciiDoc, not Markdown, so your edits keep the original syntax.

## Steps

<wc-steps>
<wc-step title="Find what changed">

Use the fold toggle to collapse unchanged sections so you can focus on the new content. Changed blocks are marked in the gutter.

</wc-step>
<wc-step title="Edit the text">

Click into the prose and edit it. Rewrite a sentence, fix a term, reorder a list. Use the toolbar for structure such as headings, code blocks, and tables. For raw control, switch to the source view.

</wc-step>
<wc-step title="Review your changes">

Open the submit toolbar. It lists your edits as separate chunks with a short summary of each, so you can check exactly what will go to GitHub.

</wc-step>
<wc-step title="Submit">

Submit the review. DraftView posts each chunk as a GitHub suggested change on the PR. If you added comments, they post as review comments.

</wc-step>
</wc-steps>

## Result

The PR has your edits as suggested changes. The author opens GitHub, clicks to accept each one, and the change is applied to the branch. Nothing was retyped and the source of truth stayed in GitHub.

## Edit AsciiDoc and multi-file docs

AsciiDoc files often pull in other files with include directives. DraftView shows an include as a block with an "Edit this file" action, so you can open and edit the included file in its own session. Edits to each file submit against that file.

## Common mistakes

- **Changing structure the format cannot express.** If you build something the source format does not support, the serializer may not produce a clean suggestion. Prefer edits that map to normal prose, lists, tables, and code blocks.
- **Large rewrites as one suggestion.** A suggestion that replaces a whole section is harder for the author to accept and reason about. Smaller, focused edits apply more cleanly.
- **No GitHub account.** Your edits become a pending review for a teammate to push. See [Push reviewer feedback to a pull request](../send-to-github/push-reviewer-feedback).

## Next steps

- Add context to your edits in [Comment on a pull request](comment-on-a-pr).
- Understand the GitHub side in [How suggestions reach GitHub](../send-to-github/how-suggestions-reach-github).

## Related pages

- [Comment on a pull request](comment-on-a-pr)
- [Supported file formats](../reference/supported-file-formats)
- [How suggestions reach GitHub](../send-to-github/how-suggestions-reach-github)
