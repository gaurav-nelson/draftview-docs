---
title: Set up your team
description: Connect DraftView to GitHub, start your org queue, and invite your first reviewers.
tag: Collaboration
readtime: 6 min read
---

# Set up your team

Set up your org queue once, then review doc PRs from a shared inbox.

## What setup enables

- Auto-ingest for doc PRs from connected repositories
- Team queue with lifecycle states
- Magic-link reviewers for users without GitHub
- 14-day trial for team features

## Prerequisites

- A GitHub account with admin rights on the repos you want to connect.
- Permission to install a GitHub App on the org or those repos.

## Steps

<wc-steps>
<wc-step title="Sign in and choose team setup">

Sign in at [https://www.draftview.app/login](https://www.draftview.app/login), then choose the team setup path from onboarding or [dashboard navigation](https://www.draftview.app/dashboard).

</wc-step>
<wc-step title="Connect the DraftView GitHub App">

Install the app for the repositories you want in the queue. The app asks for read and write access to contents and pull requests. DraftView needs write access to contents only to open the pull request when you finish a [doc review](../workflows/run-a-doc-review).

</wc-step>
<wc-step title="Confirm repository selection">

Confirm repository access in DraftView. DraftView backfills recent open doc PRs and starts ingesting new ones.

</wc-step>
<wc-step title="Invite members">

In the **Organization** tab, select **Members**, enter an email address under **Invite by email**, and choose a role. Reviewers without GitHub can join by magic link. To invite the collaborators on a connected repository at once, select **Invite collaborators from a GitHub repo**.

</wc-step>
<wc-step title="Run your first queue review">

Open a queue item, review it, submit feedback, and complete sign-off.

</wc-step>
</wc-steps>

## Organization settings

All org settings live in the **Organization** tab of the [dashboard](https://www.draftview.app/dashboard), grouped into tabs:

| Tab | What it covers | Who sees it |
|---|---|---|
| **Members** | Members and their roles, invitations, and pending invites | Everyone |
| **Roles & access** | What each role can do, access for new PRs, PRs from other repositories, and allowed email domains for invites | Everyone. Only admins can change settings. |
| **GitHub** | The GitHub App connection, the human-review merge gate, and [doc review](configure-doc-reviews) settings per repository | Everyone. Only admins can change settings. |
| **Notifications** | Slack, a custom webhook, and which events to send | Admins |
| **Billing** | Your plan, usage, and the open-source grant | Everyone |
| **Oversight** | The [oversight report](sign-off-and-oversight#oversight-report), record exports, and record verification | Maintainers and admins |

DraftView reopens the tab you used last. If the GitHub App isn't connected yet, admins land on **GitHub**.

## Plan and billing basics

- Trial starts when you connect the app.
- Free plan includes up to 2 active reviewers per month and 2 queue repositories.
- Team and Governance remove free-plan caps.

## Related pages

- [Roles and permissions](roles-and-permissions)
- [Sign-off and oversight](sign-off-and-oversight)
- [Configure doc reviews](configure-doc-reviews)
- [Push teammate feedback to GitHub](../send-to-github/push-reviewer-feedback)
