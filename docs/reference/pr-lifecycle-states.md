---
title: Pull request lifecycle states
description: Learn what each queue lifecycle state means and what action to take next.
tag: Reference
readtime: 4 min read
---

# Pull request lifecycle states

Each queue item in DraftView has a lifecycle state.

## State reference

| State label | System state | Meaning | Typical next action |
|---|---|---|---|
| New | ingested | DraftView ingested the PR | Open and start review |
| In review | in_review | A reviewer is actively reviewing | Comment, edit, submit |
| Changes requested | changes_requested | Review feedback is recorded | Wait for author or agent update |
| Waiting on AI | waiting_on_ai | Team expects an AI follow-up | Monitor for revision |
| Addressed | addressed | New commit touched feedback region | Verify and continue review |
| Stalled | stalled | No response in expected window | Nudge or reassign |
| Signed off | signed_off | Maintainer or admin approved | Wait for CI or merge gate |
| Ready to merge | ready_to_merge | Signed off with green CI | Merge in GitHub |
| Merged | merged | PR merged in GitHub | Done |

## Queue signals

Beyond the lifecycle state, each queue item can show risk signals:

- An added and deleted line count for the whole PR.
- A deletion-only badge when a PR removes lines without adding any. Review these PRs closely, because deletions are easy to miss in a rendered view.

## Behavior notes

- DraftView can move any non-merged state to Merged when GitHub merge is detected.
- Addressed is region-based, not commit-message based.
- Feedback on deleted content also counts for Addressed tracking.
- Signed off does not merge the PR automatically.

## Related pages

- [Review AI-generated documentation PRs](../workflows/review-ai-generated-doc-prs)
- [Sign-off and oversight](../collaboration/sign-off-and-oversight)
- [Limits and constraints](limits)
