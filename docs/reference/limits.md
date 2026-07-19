---
title: Limits and constraints
description: Understand plan limits, external-link limits, and workflow boundaries in DraftView.
tag: Reference
readtime: 4 min read
---

# Limits and constraints

This page lists the limits that affect user workflows.

## Product boundaries

- DraftView does not merge pull requests.
- DraftView does not host docs sites.
- DraftView does not replace GitHub as the source of truth.

## Free plan limits

- Active reviewers per month: 2
- Queue repositories: 2

When a free org reaches the active reviewer limit for the month, new reviewers cannot perform gated review actions until the next period or upgrade.

## Trial and paid tiers

- Trial length: 14 days, starts when you connect the GitHub App
- Team and Governance remove free-plan reviewer and queue caps
- Governance adds audit export and oversight report surfaces

## Free Team plan for open-source projects

Eligible open-source projects can request a free Team plan from the Organization tab in the dashboard. The request requires a verified link back to DraftView through one of these methods:

- A DraftView badge in the repository README
- A DraftView link in the docs site footer
- DraftView Edit this page links on the docs site

DraftView verifies the link at request time and re-checks it periodically. The link must live on the repository's own site or the owner's `github.io` domain.

## External review link limits

- Active links per repository: 10
- Max submissions per link: 1 to 10
- Expiration choices: 3, 7, 14, 30 days

External links always review a frozen snapshot of the PR.

## Demo limits

- Demo only loads public PRs
- Demo is rate-limited by IP
- Demo does not post feedback to GitHub

## Identity and push limits

- Posting suggestions to GitHub requires a GitHub identity with PR access
- Magic-link reviewers can review, but a GitHub-linked teammate must verify and push

## Related pages

- [Push teammate feedback to GitHub](../send-to-github/push-reviewer-feedback)
- [Invite an external reviewer](../workflows/invite-an-external-reviewer)
- [Pull request lifecycle states](pr-lifecycle-states)
