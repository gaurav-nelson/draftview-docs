---
title: Move from GitHub PR review
description: Add DraftView on top of your existing GitHub pull request review without changing where your content lives or how PRs merge.
tag: Migration
readtime: 4 min read
---

# Move from GitHub PR review

GitHub's review works well when engineers review engineers. It breaks down when the reviewer is a PM, a lawyer, or an SME, and it shows nothing about whether an AI agent's follow-up commit addressed a comment. DraftView adds a review layer for those cases. You do not move off GitHub. You add to it.

## When to use this

- Engineers review fine in GitHub, but non-technical reviews do not happen there.
- AI doc PRs need a human read that the diff view does not support well.
- You want an oversight record GitHub does not produce.

## What changes and what does not

| Stays the same | Changes |
|---|---|
| Content lives in your GitHub repo | Doc PRs also appear in a DraftView queue |
| PRs merge in GitHub | Non-technical reviewers can review without GitHub |
| Engineers can keep reviewing in GitHub | Reviewers see rendered prose, not a diff |
| CI and branch protection | A sign-off and oversight record get added |

Nothing about your Git workflow is removed. DraftView is additive and removable.

## Steps

<wc-steps>
<wc-step title="Keep reviewing in GitHub where it works">

Leave engineer-to-engineer review where it is. Do not try to move it.

</wc-step>
<wc-step title="Connect one repo to DraftView">

Connect the GitHub App for a repo that gets non-technical or AI doc reviews. See [Set up your team](../collaboration/set-up-your-team).

</wc-step>
<wc-step title="Route the right reviews to DraftView">

Send doc reviews that need a PM, legal, SME, or AI-output check through DraftView. Invite those reviewers by email if they have no GitHub account.

</wc-step>
<wc-step title="Let suggestions flow back">

Reviewer edits return to the PR as GitHub suggested changes, so the author applies them in GitHub as usual. See [How suggestions reach GitHub](../send-to-github/how-suggestions-reach-github).

</wc-step>
</wc-steps>

## Result

Engineers keep their GitHub review. Non-technical and AI doc reviews happen in DraftView and land back on the same PRs. You gain a queue and an oversight record without changing where content lives or how it merges.

## Common mistakes

- **Trying to move all review into DraftView.** Keep engineer review in GitHub. DraftView is for the reviews GitHub does not serve well.
- **Treating it as a replacement.** GitHub stays the source of truth. DraftView sits on top.

## Next steps

- Connect your first repo in [Set up your team](../collaboration/set-up-your-team).
- Bring in non-technical reviewers in [Invite an external reviewer](../workflows/invite-an-external-reviewer).

## Related pages

- [Set up your team](../collaboration/set-up-your-team)
- [How suggestions reach GitHub](../send-to-github/how-suggestions-reach-github)
- [Who DraftView is for](../overview/who-its-for)
