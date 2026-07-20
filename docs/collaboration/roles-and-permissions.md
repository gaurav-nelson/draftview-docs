---
title: Roles and permissions
description: Assign the right DraftView roles and understand how item-level permissions interact with roles.
tag: Collaboration
readtime: 5 min read
---

# Roles and permissions

DraftView uses org roles and per-item permission caps.

## Org roles

| Role | Can view | Can comment | Can edit | Can curate queue | Can sign off | Can manage org |
|---|---|---|---|---|---|---|
| Viewer | Yes | No | No | No | No | No |
| Commenter | Yes | Yes | No | No | No | No |
| Editor | Yes | Yes | Yes | No | No | No |
| Maintainer | Yes | Yes | Yes | Yes | Yes | No |
| Admin | Yes | Yes | Yes | Yes | Yes | Yes |

## Item permission caps

Each queue item has one cap:

- View only
- Comment only
- Edit

Effective permission is the lower of the role capability and the item cap.

Examples:

- An Editor on a Comment only item can comment but cannot edit.
- A Maintainer on a View only item can only view that item.

## Legacy naming

If you used older docs, role names mapped as follows:

- Owner maps to Admin
- Approver maps to Maintainer
- Reviewer maps to Editor

## Related pages

- [Set up your team](set-up-your-team)
- [Sign-off and oversight](sign-off-and-oversight)
- [Team roles reference](../reference/org-roles)
