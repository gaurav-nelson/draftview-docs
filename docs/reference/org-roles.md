---
title: Team roles
description: Quick reference for DraftView org roles and item-level permission caps.
tag: Reference
readtime: 2 min read
---

# Team roles

Use this table as a quick lookup for org-level role capabilities.

| Role | View | Comment | Edit | Curate queue | Sign off | Manage org |
|---|---|---|---|---|---|---|
| Viewer | Yes | No | No | No | No | No |
| Commenter | Yes | Yes | No | No | No | No |
| Editor | Yes | Yes | Yes | No | No | No |
| Maintainer | Yes | Yes | Yes | Yes | Yes | No |
| Admin | Yes | Yes | Yes | Yes | Yes | Yes |

## Item caps

Queue items and doc reviews can be capped at:

- View only
- Comment only
- Edit

Effective permission is the lower of the role capability and the item cap.

In a doc review, Curate queue covers starting the review, managing its files and settings, and accepting or rejecting edits. Sign off covers finishing the review.

## Legacy mapping

- Owner -> Admin
- Approver -> Maintainer
- Reviewer -> Editor

## Related pages

- [Roles and permissions](../collaboration/roles-and-permissions)
- [Sign-off and oversight](../collaboration/sign-off-and-oversight)
