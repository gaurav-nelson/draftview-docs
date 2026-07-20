---
title: Review AI-generated documentation PRs
description: "Run the core DraftView workflow: a provable human review loop for AI-generated docs before merge."
tag: Workflows
readtime: 6 min read
---

# Review AI-generated documentation PRs

Use this workflow to put a human checkpoint on AI-generated docs PRs before they merge. This is the core DraftView workflow.

## Why this workflow matters

- AI text can sound correct while containing factual errors.
- Diff-only review often misses wording and procedural issues.
- Teams need proof that qualified humans reviewed output before merge.

## What your team gets

- Keep up with AI output volume through a queue and lifecycle.
- Run doc-native review that non-technical experts can complete.
- Close the feedback loop by verifying what the AI changed.
- Prove oversight with sign-off and governance records.

## Steps

<wc-steps>
<wc-step title="Open queue items that need human review">

Filter queue items by state and authorship, then open items in New, In review, Addressed, or Ready to merge.

</wc-step>
<wc-step title="Review and request changes">

Review the rendered docs and leave comments or edits where content is wrong, unclear, or incomplete.

</wc-step>
<wc-step title="Send feedback to GitHub">

Submit feedback so the author or agent can respond in GitHub.

</wc-step>
<wc-step title="Verify follow-up revisions">

After a new commit, verify whether it touched and fixed your commented regions.

</wc-step>
<wc-step title="Sign off and merge">

A maintainer or admin signs off. When CI is green, move to Ready to merge and merge in GitHub.

</wc-step>
</wc-steps>

## How addressed detection works

DraftView marks feedback as Addressed when the follow-up commit changes the commented region. If a commit changes unrelated sections, DraftView keeps feedback open.

## Handle stalled items

If an item stays in Waiting on AI without response, DraftView can move it to Stalled. Maintainers and admins can nudge it back to Waiting on AI.

## Related pages

- [Pull request lifecycle states](../reference/pr-lifecycle-states)
- [Sign-off and oversight](../collaboration/sign-off-and-oversight)
- [Comment on a pull request](comment-on-a-pr)
