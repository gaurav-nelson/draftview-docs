---
title: Pull request lifecycle states
description: The states a documentation PR moves through in the DraftView queue, from ingested to merged, and what each one means.
tag: Reference
readtime: 3 min read
---

# Pull request lifecycle states

Every PR in the queue carries a lifecycle state. The state tells you what needs a human, what is waiting on the agent, and what is done. Transitions are controlled, so a PR moves through valid states rather than jumping around. This page describes the states and the order they follow.

## States

| State | Meaning | What to do |
|---|---|---|
| Ingested | The PR was picked up and added to the queue | Assign or open it for review |
| In review | A human is reviewing it | Read, comment, and suggest edits |
| Changes requested | Reviewers asked for changes | Wait for the author or agent to respond |
| Waiting on AI | The agent is expected to push a follow-up | Watch for the new commit |
| Addressed | A follow-up commit touched a commented region | Verify the change with the before and after view |
| Signed off | An approver recorded a sign-off | Merge in GitHub once CI is green |
| Ready to merge | Sign-off recorded and CI green | A person merges in GitHub |
| Merged | The PR merged in GitHub | Done. The oversight record is retained |

[Assumption: these state names and order approximate the lifecycle described in the project (ingested through ready-to-merge to merged). Confirm the exact set and names against the product.]

## How states change

- New doc PRs in connected repos enter as ingested.
- Opening and working a PR moves it into review.
- Reviewer feedback can move it to changes requested or waiting on AI.
- A follow-up commit that touches a commented region moves it to addressed. A commit that changes something unrelated does not. See [Review AI-generated documentation PRs](../workflows/review-ai-generated-doc-prs).
- An approver's sign-off, with CI green, leads to ready to merge.
- A human merge in GitHub is the terminal state. DraftView never merges.

## Related pages

- [Review AI-generated documentation PRs](../workflows/review-ai-generated-doc-prs)
- [Sign-off and oversight records](../collaboration/sign-off-and-oversight)
- [How DraftView works](../overview/how-it-works)
