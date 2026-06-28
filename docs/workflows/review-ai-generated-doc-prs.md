---
title: Review AI-generated documentation PRs
description: Work through AI-authored documentation pull requests in the queue, catch the mistakes AI makes, and confirm the agent's follow-up commit actually addressed your feedback.
tag: Common workflows
readtime: 6 min read
---

# Review AI-generated documentation PRs

This is the workflow DraftView is built for. An agent opens a documentation PR, it lands in your queue, a qualified person reviews it, the agent responds to feedback, and someone confirms the response was right before the change merges. This page covers that loop end to end.

## When to use this

- Agents or assistants are opening documentation PRs in your repos.
- You need a person to catch what the AI got wrong before it merges.
- You need to confirm that the agent's fix actually addressed the comment.

## Why AI doc PRs need a different review

AI produces confident, plausible text. The mistakes it makes do not look like mistakes in a diff: a configuration flag that does not exist, an API that was never shipped, a procedure that reads correctly but does not work, wording that drifts from what the code change actually did. Catching these takes a person who knows the subject, reading the page the way a real user would, not scanning red-and-green lines.

## Prerequisites

- A connected repository so AI doc PRs land in the queue. See [Set up your team](../collaboration/set-up-your-team).
- A reviewer who knows the subject of the change.

## Steps

<wc-steps>
<wc-step title="Open the queue">

Go to the team queue. Each doc PR appears with a lifecycle state and a label showing whether it looks AI-authored. Filter to the AI PRs that need a human read. See [Pull request lifecycle states](../reference/pr-lifecycle-states).

</wc-step>
<wc-step title="Read the rendered page critically">

Open a PR and read the changed pages as a user would. Check claims against what you know: do the flags exist, do the steps work, does the page match what the code change did? Do not trust fluent prose.

</wc-step>
<wc-step title="Comment and suggest">

Leave comments where the agent got something wrong, and make direct edits where you know the fix. Comments anchor to the prose. See [Comment on a pull request](comment-on-a-pr) and [Suggest edits in the visual editor](suggest-edits).

</wc-step>
<wc-step title="Let the agent respond">

The agent pushes a new commit to address your feedback. The PR state moves to reflect that it is waiting on a human to verify the response.

</wc-step>
<wc-step title="Confirm the feedback was addressed">

DraftView ties each comment to the region it covers. When the new commit lands, it shows the before and after of that exact region. Confirm the change fixed the problem. A push only counts as addressing feedback if it touched a commented region, so a commit that changed something unrelated does not close your comment for you.

</wc-step>
<wc-step title="Sign off">

When the change is right, an approver records a sign-off. With CI green, the PR reaches ready-to-merge. A person merges in GitHub. See [Sign-off and oversight records](../collaboration/sign-off-and-oversight).

</wc-step>
</wc-steps>

## Result

The AI doc PR got a real human read, the agent's fix was verified against the actual feedback, and the review is recorded. The change merges in GitHub with a person accountable for it, and you have an oversight trail you can export.

## Common mistakes

- **Rubber-stamping under volume.** When PRs pile up, approving without reading is the easy path and the exact failure review exists to prevent. The queue and the substantive-review metric exist to make that visible. See [Sign-off and oversight records](../collaboration/sign-off-and-oversight).
- **Trusting the AI label.** The label is a best guess to help you prioritize. It does not tell you the content is correct. Review on the merits.
- **Assuming a new commit means the comment is resolved.** Use the before and after view to confirm the commit changed the region you commented on, and that the change is actually correct.

## Next steps

- Record the review in [Sign-off and oversight records](../collaboration/sign-off-and-oversight).
- Fill the queue automatically in [Set up your team](../collaboration/set-up-your-team).

## Related pages

- [Sign-off and oversight records](../collaboration/sign-off-and-oversight)
- [Pull request lifecycle states](../reference/pr-lifecycle-states)
- [Comment on a pull request](comment-on-a-pr)
