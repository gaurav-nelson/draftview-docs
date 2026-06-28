---
title: Review your first pull request
description: Sign in, load a GitHub documentation PR by URL, read it as a formatted page, suggest an edit, and send it back to GitHub as a suggested change.
tag: Get started
readtime: 5 min read
---

# Review your first pull request

This walks through one full review on a single PR, from signing in to sending an edit back to GitHub. It is the fastest way to learn the review surface with real content. You do not need to connect a repository or set up a team for this.

## When to use this

- You want to do a real review, not just look at the demo.
- You are evaluating DraftView on your own repository's PRs.
- You want to learn the editor before rolling it out to a team.

## Prerequisites

- A GitHub account.
- Read access to the repository that holds the PR.
- A pull request that changes at least one Markdown, MDX, or AsciiDoc file.

## Steps

<wc-steps>
<wc-step title="Sign in with GitHub">

Go to `https://draftview.app` and sign in with GitHub. Authorize the OAuth request so DraftView can read the PRs you already have access to.

See [Sign in to DraftView](sign-in) for the magic-link option and details.

</wc-step>
<wc-step title="Load the PR by URL">

On your dashboard, paste the pull request URL:

```text
https://github.com/your-org/your-repo/pull/142
```

DraftView fetches the documentation files in the PR and opens the review surface. You can also navigate directly to the review URL:

```text
https://draftview.app/github.com/your-org/your-repo/pull/142
```

</wc-step>
<wc-step title="Read the rendered page">

The center pane shows the changed files as formatted prose. Changed blocks are marked. Use the file list on the left to move between files, and the outline to jump within a file.

To focus on what changed, collapse the unchanged sections with the fold toggle.

</wc-step>
<wc-step title="Suggest an edit">

Click into the text and edit it the way you would in a document. Fix a sentence, correct a term, tighten a steps list. DraftView tracks each change against the original.

</wc-step>
<wc-step title="Add a comment (optional)">

Select a sentence and add a comment to explain a change or ask a question. Comments attach to the prose, not to a line number. See [Comment on a pull request](../workflows/comment-on-a-pr).

</wc-step>
<wc-step title="Submit to GitHub">

Open the submit toolbar to preview your edits as discrete changes, then submit. DraftView posts them to the PR as native GitHub suggested changes.

</wc-step>
</wc-steps>

## Result

The pull request now has your edits as GitHub suggested changes and your comments as review comments. The PR author can accept each suggestion with one click in GitHub. The content stayed in GitHub the whole time.

## Common mistakes

- **No write path without GitHub access.** To submit suggested changes, your GitHub account needs the access GitHub requires to comment on the PR. If you were invited by email and have no GitHub account, your review is submitted as a pending review for a teammate to push. See [Push reviewer feedback to a pull request](../send-to-github/push-reviewer-feedback).
- **Editing a file DraftView did not render.** If a file is not a supported doc format, it will not appear for review. See [Supported file formats](../reference/supported-file-formats).
- **Expecting DraftView to merge.** DraftView never merges. A person merges in GitHub after the suggestions are applied.

## Next steps

- Go deeper on editing in [Suggest edits in the visual editor](../workflows/suggest-edits).
- Move from one-off reviews to an auto-filled queue in [Set up your team](../collaboration/set-up-your-team).

## Related pages

- [Suggest edits in the visual editor](../workflows/suggest-edits)
- [How suggestions reach GitHub](../send-to-github/how-suggestions-reach-github)
- [Sign in to DraftView](sign-in)
