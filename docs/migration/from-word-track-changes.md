---
title: Move from Word track changes
description: Replace emailed Word documents with tracked changes with a review that keeps the content in GitHub and turns reviewer edits into GitHub suggested changes.
tag: Migration
readtime: 3 min read
---

# Move from Word track changes

Some teams still review docs by emailing a Word file with track changes turned on. Each reviewer marks up their own copy, and someone merges the versions back together. It is familiar, but it produces conflicting copies, no shared thread, and a manual merge back into the real source.

DraftView keeps the tracked-change feel, with one shared version and edits that return to the PR.

## When to use this

- Doc reviews happen over emailed Word files.
- You end up merging several marked-up copies by hand.
- The reviewed content is, or should be, in a GitHub repo.

## What you gain

| Word track changes | DraftView |
|---|---|
| One copy per reviewer | One shared version everyone reviews |
| Changes merged by hand | Edits return as GitHub suggested changes |
| No shared comment thread | Comments anchored to the prose, with replies |
| Disconnected from the source | Content stays in GitHub |

## Steps

<wc-steps>
<wc-step title="Get the content into a PR">

The change has to be a pull request for DraftView to review it. If your docs are not in Git yet, that move comes first and is a prerequisite, not something DraftView does.

</wc-step>
<wc-step title="Invite reviewers by email">

Invite the people who used to receive the Word file. They join by magic link. See [Invite an external reviewer](../workflows/invite-an-external-reviewer).

</wc-step>
<wc-step title="Review in one place">

Everyone edits and comments on the same rendered version. No per-reviewer copies to merge.

</wc-step>
<wc-step title="Push to the PR">

A GitHub-linked teammate pushes the combined feedback as suggested changes. See [Push reviewer feedback to a pull request](../send-to-github/push-reviewer-feedback).

</wc-step>
</wc-steps>

## Result

One shared review replaces a stack of emailed copies. Edits land on the PR instead of in a manual merge. Reviewers keep a familiar markup experience.

## Common mistakes

- **Expecting DraftView to import a .docx file.** DraftView reviews PRs, not Word files. The content has to be in a GitHub repo first.
- **Keeping the email loop alive in parallel.** Move doc reviews fully to DraftView so copies stop multiplying.

## Next steps

- Set up the team in [Set up your team](../collaboration/set-up-your-team).
- See what formats DraftView reviews in [Supported file formats](../reference/supported-file-formats).

## Related pages

- [Invite an external reviewer](../workflows/invite-an-external-reviewer)
- [Supported file formats](../reference/supported-file-formats)
- [Move from a Google Docs review loop](from-google-docs)
