---
title: Submit an edit as a pull request
description: Turn an edit made through the "Edit this page" flow into a new GitHub pull request, including the fork and commit steps DraftView handles for you.
tag: Send changes to GitHub
readtime: 3 min read
---

# Submit an edit as a pull request

The "Edit this page" flow does not suggest changes on an existing PR. It opens a new one. Use this page to understand what DraftView does when a reader edits a page and submits, and what they need for it to work.

## When to use this

- A reader or contributor edited a page through the `/edit` flow.
- You want to know what GitHub access they need.
- You are setting up "Edit this page" and want to understand the output.

## Prerequisites

- An edit started from a GitHub blob URL, usually through an "Edit this page" link. See [Replace "Edit this page" with DraftView](../workflows/edit-this-page).
- A GitHub account, requested at submit time if the editor is not signed in.

## What DraftView does on submit

<wc-steps>
<wc-step title="Authorize GitHub">

If the editor is not signed in, DraftView starts a GitHub authorization with the scope needed to fork a repo and open a PR.

</wc-step>
<wc-step title="Fork if needed">

If the editor cannot push to the repo directly, DraftView forks it to their account.

</wc-step>
<wc-step title="Commit the change">

DraftView commits the edited file to a branch.

</wc-step>
<wc-step title="Open the pull request">

DraftView opens a PR with the change and shows the editor a link to it.

</wc-step>
</wc-steps>

## Result

A new pull request exists with the reader's edit. From there it follows your normal review process. If the repo is connected to a DraftView team, the PR also enters the review queue. See [Review AI-generated documentation PRs](../workflows/review-ai-generated-doc-prs) for the review flow, which applies to human-authored PRs too.

## Common mistakes

- **No GitHub account at all.** The edit flow opens a real PR, so the editor needs a GitHub account to author it. The no-account path is review, not authoring. See [Invite an external reviewer](../workflows/invite-an-external-reviewer).
- **Editing a page that is not in the repo.** The blob URL must point at a real file on the right branch.

## Next steps

- Set up the entry point in [Replace "Edit this page" with DraftView](../workflows/edit-this-page).
- Review the resulting PR in [Review your first pull request](../get-started/review-your-first-pr).

## Related pages

- [Replace "Edit this page" with DraftView](../workflows/edit-this-page)
- [How suggestions reach GitHub](how-suggestions-reach-github)
