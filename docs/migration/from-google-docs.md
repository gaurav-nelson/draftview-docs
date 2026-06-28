---
title: Move from a Google Docs review loop
description: Replace the copy-into-Google-Docs review loop with a review that keeps the content in GitHub and sends edits straight back to the PR.
tag: Migration
readtime: 4 min read
---

# Move from a Google Docs review loop

A common pattern: the writer pastes a doc change into Google Docs, reviewers comment and edit there, and the writer copies the accepted changes back into the repo by hand. Reviewers like it because it is familiar. The writer pays for it, often with an hour or more of reconciliation per change, and the audit trail ends up scattered across a doc, a PR, and email.

DraftView gives reviewers a similar editing experience without breaking the link to Git.

## When to use this

- Reviewers will not work in GitHub, so docs get copied into Google Docs.
- The writer spends real time reconciling Doc edits back into the repo.
- Feedback and approval are scattered and hard to reassemble later.

## What you gain

| Google Docs loop | DraftView |
|---|---|
| Reviewers edit a copy | Reviewers edit the actual PR content, rendered |
| Writer reconciles changes by hand | Edits return as GitHub suggested changes |
| Content forks from the repo | Content stays in GitHub |
| Approval lives in a doc or email | Sign-off recorded against the PR version |

## Steps

<wc-steps>
<wc-step title="Stop copying into Google Docs">

For the next doc change, do not paste it into a doc. Open the PR in DraftView instead.

</wc-step>
<wc-step title="Invite the same reviewers by email">

Invite the reviewers who used to comment in the doc. They join by magic link, no GitHub account needed. See [Invite an external reviewer](../workflows/invite-an-external-reviewer).

</wc-step>
<wc-step title="Let them edit the rendered page">

Reviewers edit prose the way they did in the doc. The difference is their edits map back to the PR.

</wc-step>
<wc-step title="Push feedback to the PR">

A GitHub-linked teammate pushes the reviewers' edits to the PR as suggested changes. No manual reconciliation. See [Push reviewer feedback to a pull request](../send-to-github/push-reviewer-feedback).

</wc-step>
</wc-steps>

## Result

Reviewers keep an editing experience close to what they had. The writer stops copying changes by hand. Approval is recorded against the exact version reviewed, in one place.

## Common mistakes

- **Keeping both loops.** Running Google Docs and DraftView in parallel recreates the scatter you are trying to remove. Pick DraftView for doc reviews and retire the doc copy.
- **Not telling reviewers why it changed.** Reviewers adopt faster when they know the edits now go straight to the PR with no retyping.

## Next steps

- Set up the team in [Set up your team](../collaboration/set-up-your-team).
- Record approval in [Sign-off and oversight records](../collaboration/sign-off-and-oversight).

## Related pages

- [Invite an external reviewer](../workflows/invite-an-external-reviewer)
- [Push reviewer feedback to a pull request](../send-to-github/push-reviewer-feedback)
- [Sign-off and oversight records](../collaboration/sign-off-and-oversight)
