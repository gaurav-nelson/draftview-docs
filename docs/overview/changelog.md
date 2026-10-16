---
title: DraftView changelog
description: Month-by-month highlights of the most significant product updates in DraftView.
tag: Overview
readtime: 7 min read
---

# DraftView changelog

Significant DraftView updates, grouped by month.

## October 2026

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
