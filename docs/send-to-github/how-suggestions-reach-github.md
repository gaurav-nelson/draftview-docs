---
title: How suggestions reach GitHub
description: What happens when you submit a review in DraftView, how your prose edits become native GitHub suggested changes, and what the PR author sees.
tag: Send changes to GitHub
readtime: 4 min read
---

# How suggestions reach GitHub

This page explains what DraftView does when you submit a review, so you know what arrives on the pull request and why. Read it if you want to understand the mechanics before you rely on the workflow.

## The short version

You edit rendered prose. DraftView keeps the original source and tracks each block you change. On submit, it converts your changes into discrete suggested changes, maps them back to the correct lines in the raw file, and posts them to the PR through the GitHub API. The author sees standard GitHub suggestions and review comments.

## What gets created on the PR

| In DraftView | On GitHub |
|---|---|
| An edit to a block of text | A suggested change on the matching lines |
| A comment on a sentence | A review comment in a thread |
| A full review submission | A single GitHub review containing the above |

## Why edits become discrete chunks

DraftView splits a full-file edit into separate chunks rather than replacing the whole file. Each chunk maps to the lines it touches. This keeps suggestions small and specific, so the author can accept them one at a time and see exactly what each one changes. The submit toolbar previews these chunks before you send them.

## Format fidelity

DraftView serializes your edits back into the file's original format. A Markdown file goes back as Markdown. An AsciiDoc file goes back as AsciiDoc, using AsciiDoc syntax, not Markdown. DocsLit component tags round-trip as written. This matters because a suggestion that changed the syntax would be wrong even if the words were right.

## Who can submit directly

To post suggested changes under your own account, you sign in with GitHub and have access to comment on the PR. GitHub requires a real account for every suggestion. Reviewers who signed in by email magic link cannot post directly. Their review is held as a pending review for a GitHub-linked teammate to push. See [Push reviewer feedback to a pull request](push-reviewer-feedback).

## Result

After you submit, the PR carries your edits as suggestions the author can accept with one click, and your comments as threads. The content stayed in GitHub the whole time. DraftView did not change the file itself, only proposed changes for a human to apply.

## Common mistakes

- **Expecting the file to change.** Suggested changes are proposals. Nothing is applied until the author accepts them, or until someone commits them.
- **Edits that do not map cleanly.** Heavy structural changes can be hard to express as a clean suggestion. Prefer prose-level edits.

## Next steps

- Push a teammate's review in [Push reviewer feedback to a pull request](push-reviewer-feedback).
- Open a brand-new PR from an edit in [Submit an edit as a pull request](submit-an-edit-as-a-pr).

## Related pages

- [Suggest edits in the visual editor](../workflows/suggest-edits)
- [Push reviewer feedback to a pull request](push-reviewer-feedback)
- [Supported file formats](../reference/supported-file-formats)
