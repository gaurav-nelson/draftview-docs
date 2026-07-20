---
title: DraftView changelog
description: Month-by-month highlights of the most significant product updates in DraftView.
tag: Overview
readtime: 6 min read
---

# DraftView changelog

Significant DraftView updates, grouped by month.

## July 2026

- Made PR deletions reviewable: deleted content now renders inline, reviewers can comment on it, and the comments anchor to the removed lines in the GitHub diff.
- Added deletion-risk queue signals, including added and deleted line counts and a deletion-only badge, and added deleted content to the sign-off record.
- Added inline image rendering in the editor with repo-aware path resolution, plus insert and edit controls for images.
- Added a confirmation page for magic-link sign-in so email security scanners no longer consume single-use links.
- Added self-serve free Team plan requests for eligible open-source projects, verified through a DraftView link-back.
- Added an admin toggle for the human-review merge gate commit status.
- Added branded transactional emails and a welcome email with guides matched to how you joined.
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
