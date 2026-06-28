---
title: Set up your team
description: Connect the GitHub App so documentation PRs auto-fill a review queue, invite reviewers including those without GitHub, and start a trial.
tag: Collaboration
readtime: 6 min read
---

# Set up your team

This is the main adoption path. Connect the GitHub App once, and documentation PRs from your repos collect in a shared review queue on their own. Then invite the people who review, including those who do not use GitHub. After this, you stop pasting PR links and start working from an inbox.

## When to use this

- AI or your team is opening doc PRs and you want them in one place.
- You want reviewers to find work without hunting through GitHub.
- You need to bring in non-technical reviewers by email.

## Prerequisites

- A GitHub account with admin rights on the repos you want to connect.
- Permission to install a GitHub App on the org or those repos.

[Assumption: installing the GitHub App requires GitHub admin or owner permission on the target organization or repositories.]

## What connecting does

When you connect the App and pick repositories, two things happen. New documentation PRs start flowing into the queue through GitHub webhooks. DraftView also backfills recent open doc PRs, so the queue is not empty on day one. A 14-day trial starts at connect time. No card is required.

## Steps

<wc-steps>
<wc-step title="Create or open your team">

Sign in with GitHub and open the team area. If you do not have a team yet, create one. See [Sign in to DraftView](../get-started/sign-in).

</wc-step>
<wc-step title="Connect the GitHub App">

Start the GitHub connection from the team panel. You go to GitHub, install the App, and choose which repositories it can see. Pick the repos whose documentation PRs you want to review.

</wc-step>
<wc-step title="Confirm the queue filled">

Return to DraftView. The queue should show recent open doc PRs from the connected repos, each with a lifecycle state and an AI-authorship label. See [Pull request lifecycle states](../reference/pr-lifecycle-states).

</wc-step>
<wc-step title="Invite reviewers">

Invite the people who will review. Use email for anyone without a GitHub account. Assign roles based on who reviews and who approves. See [Roles and permissions](roles-and-permissions).

</wc-step>
<wc-step title="Set up notifications (optional)">

Connect Slack or a webhook so the team hears about new PRs, addressed feedback, and sign-offs without watching the queue. See the notifications note below.

</wc-step>
</wc-steps>

## Result

Documentation PRs arrive in the queue automatically. Reviewers, including those without GitHub, can open and review them. The team has a single inbox for doc review instead of scattered PRs across repos.

## Notifications

DraftView can send events to Slack or a signed webhook when a PR is ingested, a review is submitted, feedback is addressed, a change is signed off, or a PR is ready to merge. Reviewers without GitHub also get loop emails, for example when an agent addresses their comment, since email is their only channel. Configure these in the team notification settings.

## Common mistakes

- **Connecting too many repos at once.** Start with one or two active repos so the queue is meaningful, then add more.
- **Inviting reviewers before the queue has content.** Connect and confirm the backfill first, so reviewers see real work when they arrive.
- **Assuming GitHub access for magic-link members.** They review, but a GitHub-linked teammate pushes their feedback. See [Push reviewer feedback to a pull request](../send-to-github/push-reviewer-feedback).

## Next steps

- Assign the right access in [Roles and permissions](roles-and-permissions).
- Start reviewing in [Review AI-generated documentation PRs](../workflows/review-ai-generated-doc-prs).

## Related pages

- [Roles and permissions](roles-and-permissions)
- [Pull request lifecycle states](../reference/pr-lifecycle-states)
- [Sign-off and oversight records](sign-off-and-oversight)
