---
title: Sign-off and oversight
description: Record accountable sign-off and track oversight outputs for documentation pull requests.
tag: Collaboration
readtime: 5 min read
---

# Sign-off and oversight

Use sign-off when review is complete and a responsible team member approves the change for merge.

## Who can sign off

Maintainers and admins can sign off queue items.

## What sign-off records

- Who signed off
- Role at sign-off time
- PR head SHA
- CI state at sign-off time

## What happens after sign-off

- If CI is green, DraftView moves the item to Ready to merge.
- If CI is pending or failing, the item stays Signed off until CI passes.
- A person still merges in GitHub.

## Oversight surfaces

- Governance plans can export per-PR JSON audit records.
- Governance plans can view the oversight metrics report.

DraftView records sign-off data for all plans. Governance controls export and reporting surfaces.

## Related pages

- [Pull request lifecycle states](../reference/pr-lifecycle-states)
- [Roles and permissions](roles-and-permissions)
- [Limits and constraints](../reference/limits)
