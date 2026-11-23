---
title: Quickstart
description: Choose your path with DraftView. Review and edit docs with just a GitHub account, or install DraftView on your repository for team-wide review.
tag: Get started
readtime: 5 min read
---

# Quickstart

DraftView is the collaborative review layer for all the docs in your Git workflow. Engineers stay in the pull request. Everyone else reviews the rendered page.

Depending on your workflow, you can use DraftView immediately with just a GitHub account (no repository installation needed), or install the DraftView GitHub App on your repository for team-wide review and collaboration.

---

## 1. Using DraftView without installing it on your repository

If you have a personal GitHub account, you can use DraftView right away on public repositories without installing anything or requesting repository permissions.

### Review an existing pull request

Review documentation changes as formatted pages rather than raw markup or Git diffs.

- **Open any public PR**: Enter any public PR URL on the [DraftView demo page](https://www.draftview.app/try) or use direct URLs (`https://www.draftview.app/github.com/owner/repo/pull/123`).
- **See the page, not the markup**: Markdown, MDX, and AsciiDoc render with tables, callouts, and Mermaid diagrams intact.
- **Comment and propose edits**: Highlight text to leave inline comments, or type directly in the rendered page to suggest edits.
- **Submit directly to GitHub**: Sign in with GitHub and authorize posting. Your review comments and suggestions post directly to the GitHub PR under your personal account.

See [Review your first pull request](review-your-first-pr) and [Comment on a pull request](../workflows/comment-on-a-pr).

### Edit any GitHub file and create a pull request

Edit documentation visually and submit changes without cloning repositories or configuring local environments.

- **Open any file**: Go to the [DraftView file editor](https://www.draftview.app/edit) and paste a file URL from GitHub or GitLab.
- **Visual editing**: Edit Markdown, MDX, or AsciiDoc with full formatting controls, image tools, and diagram support.
- **Submit as a PR**: DraftView guides you through creating a fork, committing your changes, and opening a new pull request directly on GitHub.
- **Scratch drafts and local files**: You can also start a new blank document or drag-and-drop a file from your computer (up to 512 KB) to edit locally in your browser without touching GitHub.

See [Edit files in DraftView](../workflows/edit-this-page) and [Submit an edit as a pull request](../send-to-github/submit-an-edit-as-a-pr).

---

## 2. Installing DraftView on your repository

Installing the DraftView GitHub App connects your repository to your organization. This provides shared review queues, access for non-GitHub reviewers, role-based permissions, and sign-off records.

### Review existing pull requests without a GitHub account

Invite teammates from product, legal, and support into the review without giving them repository write permissions or requiring GitHub accounts.

- **Invite anyone by email**: Teammates and external reviewers join via secure magic links without needing a GitHub account.
- **Complete review surface**: Reviewers read rendered docs, leave comments, reply in threads, resolve conversations, and suggest edits in the visual editor.
- **Roles and permissions**: Control who can do what with team roles (**Viewer**, **Commenter**, **Editor**, **Maintainer**, **Admin**) and per-review permission caps.
- **Organized team queue**: Connected repositories automatically feed an inbox with clear tabs (**Needs you**, **Open**, and **Done**), review lifecycle tracking, and optional human-review merge gates.
- **Auditable sign-off and Insights**: Record accountable sign-offs and generate oversight reports and sealed audit records.

See [Set up your team](../collaboration/set-up-your-team), [Roles and permissions](../collaboration/roles-and-permissions), and [Sign-off and oversight](../collaboration/sign-off-and-oversight).

### Edit repository files without a GitHub account (Doc reviews)

Review and edit documentation directly on a branch without opening a pull request or creating GitHub accounts.

- **Start on any branch**: A maintainer selects files on a branch to start a doc review. DraftView pins the files at the branch's latest commit.
- **Team-wide visual editing**: Anyone invited by email can suggest edits and comment directly in the visual editor. DraftView saves edits and displays them with line highlights and diff cards.
- **Maintainer curation**: Maintainers accept or reject each proposed edit in DraftView.
- **Automated pull request creation**: When a maintainer finishes the review, DraftView automatically creates a branch, commits the accepted edits, attaches a Markdown audit record, and opens a single clean pull request on GitHub with the remaining comments attached.

See [Review files without a pull request](../workflows/run-a-doc-review) and [Configure doc reviews](../collaboration/configure-doc-reviews).

---

## At a glance: Comparing the two paths

| Capability | With GitHub account (No repo install) | With DraftView installed on repository |
|---|---|---|
| **Review public PRs** | Yes (via `/try` or direct PR URL) | Yes (plus team queue and tracking) |
| **Review private PRs** | No (requires app installation) | Yes |
| **Reviewers without GitHub** | No (requires personal GitHub) | Yes (join by email / magic link) |
| **Comment & suggest edits** | Yes (posted with your account) | Yes (with team sync & maintainer accept/reject) |
| **Roles & permission caps** | No | Yes (Viewer, Commenter, Editor, Maintainer, Admin) |
| **Branch doc reviews (no PR needed to start)** | No | Yes (collaboratively edit and open one PR) |
| **Review queue & lifecycle** | Personal reviews list | Full team queue (**Needs you**, **Open**, **Done**) |
| **Merge gates & oversight** | No | Yes (`draftview/human-review` status & Insights) |

---

## Next steps

- Want to try it now? [Try on a public PR](try-without-an-account) or [Edit a file in DraftView](https://www.draftview.app/edit).
- Ready to connect your team? [Set up your team](../collaboration/set-up-your-team).
