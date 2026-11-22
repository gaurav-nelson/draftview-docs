---
title: DraftView changelog
description: Month-by-month highlights of the most significant product updates in DraftView.
tag: Overview
readtime: 7 min read
---

# DraftView changelog

Significant DraftView updates, grouped by month.

## November 2026

- **Render and edit Mermaid diagrams**: Mermaid diagram blocks (` ```mermaid `) render as graphical diagrams in both the review surface and the visual editor. You can edit diagram code directly in DraftView and see changes update live. Diagrams automatically match your active theme (System, Light, or Dark). See [Supported file formats](../reference/supported-file-formats#mermaid-diagrams).
- **Review and edit source-only files**: Files that contain no visual prose (such as metadata-only AsciiDoc files or configuration documents) open in a line-numbered source view with added and deleted lines highlighted. You can leave comments and suggest edits on individual lines just like in visual documents. See [Supported file formats](../reference/supported-file-formats#source-only-files).
- **Post reviews to any public PR without app installation**: Reviewers signed in with GitHub can now submit comments and suggested edits directly to any public GitHub pull request. You no longer need the repository owner to install the DraftView GitHub App first. Private repositories still require the app. See [Review your first pull request](../get-started/review-your-first-pr).
- **Scratch mode and local files in the editor**: The `/edit` screen now offers three equal doors: start a blank scratch file in Markdown, MDX, or AsciiDoc, open or drop a file from your computer (up to 512 KB) to edit locally in your browser, or open a file from GitHub or GitLab. Starter files include format-matched samples and quick download and copy controls. See [Edit files in DraftView](../workflows/edit-this-page#open-and-edit-files-in-draftview).
- **Cleaner suggestions and untouched section preservation**: When you submit edits, DraftView keeps the untouched sections of your document in their original format and only submits the specific blocks you changed. Suggestions avoid introducing formatting noise into your pull requests.
- **Focused list and container highlights**: Editing a list item, blockquote, or callout highlights only the specific item or line changed rather than highlighting the entire block.
- **Modified file diff notice**: When a modified file has changes that cannot be displayed visually, DraftView shows a notice above the document with a direct link to GitHub's file view.
- **Unified Reviews home**: The dashboard now groups all reviews into a single home with three focused tabs: **Needs you** (with clear reasons for items awaiting your action), **Open**, and **Done**. Merged pull requests move to Done automatically, and you can remove your own finished reviews.
- **Dedicated Insights navigation**: Team oversight reports and audit records now live under **Insights** in the main sidebar. See [Sign-off and oversight](../collaboration/sign-off-and-oversight).
- **Roles for external review links**: When creating a share link for external stakeholders, you can set their role to **Viewer**, **Commenter**, or **Editor**. Admins can also configure whether external reviewers see team comments or teammate names under **Roles & access**. See [Invite an external reviewer](../workflows/invite-an-external-reviewer).
- **Theme switch across all screens**: Easily toggle between System, Light, and Dark mode using the theme button in the top bar of every screen.

## October 2026

- Reorganized Organization settings into six tabs: **Members**, **Roles & access**, **GitHub**, **Notifications**, **Billing**, and **Oversight**. **Roles & access** shows what each role can do and gathers every permission setting in one place. See [Set up your team](../collaboration/set-up-your-team#organization-settings).
- Added doc reviews to the Governance oversight report, next to AI pull requests. The report shows how many finished reviews had review on record, how many accepted edits someone other than their author decided, and how many edits were self-approved. You can pick a reporting period, and AI PRs now break down by generator. See [Oversight report](../collaboration/sign-off-and-oversight#oversight-report).
- Added audit records for doc reviews. Download the Markdown record on any plan, or a sealed JSON audit record on Governance, from the review's **Record** dialog or the **Oversight** tab.
- Added an oversight ledger export on Governance, with one row for every queue PR and doc review in a period, as CSV or sealed JSON.
- DraftView now seals every JSON record it exports, including pull request records. Check a file under **Verify a record** in the **Oversight** tab.
- Added two Governance compliance alerts for doc reviews: one when a finished review's record is ready to export, and one when a review finishes with edits accepted by their own author.
- Added doc reviews, in preview. Your team can review documentation files straight from a branch, with no pull request and no GitHub account. Reviewers comment and suggest edits in DraftView, and a maintainer accepts or rejects each edit. When the maintainer finishes the review, DraftView opens one pull request with the accepted edits, commits a Markdown record of the review, and posts the remaining comments on the pull request. See [Review files without a pull request](../workflows/run-a-doc-review).
- Added per-repository settings for doc reviews: open the pull request from a branch in the repository or from a fork, and choose where review records go. See [Configure doc reviews](../collaboration/configure-doc-reviews).
- Added doc review events to Slack and webhook notifications.
- The DraftView GitHub App now asks for read and write access to repository contents, so it can open the pull request when a doc review finishes. Installation owners need to accept the updated permissions.
- Added Indent and Outdent toolbar buttons, plus Tab and Shift+Tab for list items, in every editor.
- Fixed comment cards that overlapped each other in the comment lane. Comment text now stays in the box when a save fails.
- Added a **Show resolved** toggle and an **Undo** option when you resolve a thread. Shared threads now refresh without a reload.
- Added a keyboard shortcut to comment on selected text: Cmd+Option+M on macOS, Ctrl+Alt+M on Windows and Linux.
- Viewers and View only queue items can no longer edit or delete comments. Comment actions now follow the same role and cap rules everywhere.
- Fixed comments on deleted content that sometimes didn't appear in the review surface. They now attach to the deletion block they belong to.
- Review threads that a link owner pushes for an external reviewer now show the external reviewer's name as the author in DraftView.
- Added an error page with a reference code. If something breaks, select **Try again** or share the reference code with support.

## August 2026

- Signed-in reviewers can open public PRs without the DraftView GitHub App installed on the repository. You can read, comment, and draft edits right away. You need the app only to submit your review.
- Comments now render as GitHub-flavored Markdown, including code, tables, task lists, and the inline HTML that review bots use for badges and collapsible sections.
- The public demo now shows a PR's existing review threads, and you can try replying to them without posting anything to GitHub.

## July 2026

- Made PR deletions reviewable: deleted content now renders inline, reviewers can comment on it, and the comments anchor to the removed lines in the GitHub diff.
- Added deletion-risk queue signals, including added and deleted line counts and a deletion-only badge, and added deleted content to the sign-off record.
- Added inline image rendering in the editor with repo-aware path resolution, plus insert and edit controls for images.
- Added a confirmation page for magic-link sign-in so email security scanners no longer consume single-use links.
- Added self-serve free Team plan requests for eligible open-source projects, verified through a DraftView link-back.
- Added an admin toggle for the human-review merge gate commit status.
- Added branded transactional emails and a welcome email with guides matched to how you joined.
- Rewrote the comment DraftView posts on docs PRs so it leads with the review link. When a PR looks AI-assisted, the comment says so without claiming the docs are AI-generated.
- Made demo work carry through signup, so comments and edits from the try experience import into your first real review session.
- Added MyST Markdown and Markdoc support for review and editing.
- Added support for Antora resource IDs in includes.
- Added GitLab support to the Edit this page flow.
- Added embed mode, suggested PRs, and onboarding improvements.
- Expanded the live review surface with head events, draft rebase support, external-review read-back, and a clearer sign-off view.
- Added a free-forever tier with an organization queue and improved billing sync when plans change in the portal.
- Improved team queue usability with intent-based queue behavior and contextual help tours.
- Strengthened security around org notifications, pending-review visibility, and invite allowlist handling.

## June 2026

- Shipped roles and permissions improvements for team collaboration controls.
- Added email domain allowlisting and invite resend flows for org onboarding.
- Improved queue reliability and usability, including queue controls/dialog fixes and org-connect flow fixes.
- Released anchored suggestion diffs and line highlight fixes, so feedback stays tied to the right lines.
- Clarified PR triage and review handoff in the AI docs review workflows.

## May 2026

- Introduced a major file editor upgrade with a Visual and Source toggle.
- Added IDE-style keyboard shortcuts and improved active-line selection behavior in the editor.
- Fixed AsciiDoc editing edge cases, including visual-source toggle link rendering and list parsing.
- Refreshed the UI, with mobile fixes and improved landing and editing flows.
- Added docs-as-code resources and calculators for planning review effort and reducing docs drift.

## April 2026

- Launched DraftView from early-access to production.
- Added the public PR try experience and expanded install and onboarding flow reliability.
- Improved dashboard architecture and UX, including settings split, onboarding tour, welcome banner, and performance improvements.
- Hardened auth and GitHub App installation handling, including compatibility fixes and fork PR install checks.
- Improved review and account reliability and hardened security handling.

## March 2026

- Released the first end-to-end DraftView review experience for documentation pull requests.
- Added magic-link access so external reviewers could review docs without full GitHub access.
- Introduced an interactive WYSIWYG review editor with inline comments, diff highlights, and context-aware editing.
- Added MDX and AsciiDoc support so teams could review more real-world docs formats.
- Improved GitHub submission reliability with stale-PR checks, retries, and safer resubmission flows.
