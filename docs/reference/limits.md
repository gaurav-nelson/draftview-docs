---
title: Limits and constraints
description: Known constraints to keep in mind when using DraftView, including what it does not do and where exact limits are not yet documented.
tag: Reference
readtime: 2 min read
---

# Limits and constraints

Constraints to be aware of. Some exact numbers are not yet published and are marked below.

## What DraftView does not do

- It does not merge pull requests. A person merges in GitHub.
- It does not host or publish your documentation.
- It does not review code, config, or data files.
- It does not store the canonical copy of your content. GitHub does.

## Account and access constraints

- Submitting suggested changes to GitHub requires a GitHub account with access to comment on the PR.
- Reviewers without GitHub can review, but a GitHub-linked teammate must push their feedback.
- The "Edit this page" flow opens a real PR, so the editor needs a GitHub account to author it.

## Demo constraints

- The public demo loads public PRs only.
- The demo is rate-limited by IP.
- Nothing is submitted to GitHub from the demo.

## Not yet documented

[TODO: confirm maximum file size and maximum number of files per PR that DraftView renders.]

[TODO: confirm magic-link token lifetime and external review link expiry options.]

[TODO: confirm any rate limits on submissions and external review link usage.]

[TODO: confirm browser support matrix and minimum supported screen width for the comment lane.]

## Related pages

- [Supported file formats](supported-file-formats)
- [Before you begin](../get-started/prerequisites)
- [Troubleshooting common issues](../troubleshooting/common-issues)
