---
title: Configure doc reviews
description: Set GitHub App permissions, the pull request source, the review record folder, and notifications for doc reviews.
tag: Collaboration
readtime: 4 min read
---

# Configure doc reviews

As an admin, you control how finished [doc reviews](../workflows/run-a-doc-review) reach GitHub. Doc reviews are in preview, so some of these settings may change.

## Update the GitHub App permissions

When a doc review finishes, DraftView creates a branch and commits the accepted edits and the review record. For that, the DraftView GitHub App needs these permissions:

| Permission | Access |
|---|---|
| Contents | Read and write |
| Pull requests | Read and write |
| Metadata | Read-only |

If you installed the app before doc reviews were available, GitHub asks the owner of each installation to accept the updated permissions. Until they accept, a doc review that finishes in branch mode fails with a message that the app needs Contents and Pull requests write permission. A maintainer with push access to the repository can still finish it.

## Choose the pull request source

Each repository has its own pull request source. To change it:

1. In the [dashboard](https://www.draftview.app/dashboard), open the **Organization** tab.
2. Select **GitHub**.
3. Under **Doc reviews**, choose a pull request source next to the repository.

| Source | How it works | Requirements |
|---|---|---|
| Branch in the repo (default) | Creates the branch in the repository itself. | The person who finishes the review has push access, or the DraftView GitHub App has Contents and Pull requests write access. |
| Fork | Opens the pull request from the finisher's fork. | Public repositories only. The finisher needs a linked GitHub account and must authorize DraftView to open pull requests from a fork. |

**Fork** is turned off for private repositories.

If you haven't connected GitHub yet, new reviews use a branch in the repository.

## Choose where review records go

Each finished review commits a Markdown record of every comment, edit, and decision to its pull request. By default the record goes in `.draftview/reviews/`. Most docs site builds skip hidden folders, so the record doesn't show up on your site.

To use another folder, enter it in **Record folder** next to the repository. Leave the field empty to use the default.

## Send doc review events to Slack or a webhook

If your organization sends notifications to Slack or a webhook, you can choose which doc review events to send. Open the **Organization** tab, select **Notifications**, and select the events under **Doc reviews** in the **Events** list. Only admins see the **Notifications** tab.

| Event | On by default |
|---|---|
| A doc review was started | Yes |
| A comment or reply was added to a doc review | No |
| Edits were saved in a doc review | No |
| A suggested edit was accepted or rejected | Yes |
| A doc review was finished or cancelled | Yes |

Comments and saved edits are off by default because long reviews can send a lot of them.

## Related pages

- [Review files without a pull request](../workflows/run-a-doc-review)
- [Set up your team](set-up-your-team)
- [Roles and permissions](roles-and-permissions)
