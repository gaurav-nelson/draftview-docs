---
title: Roles and permissions
description: Assign the right DraftView roles and understand how item-level permissions interact with roles.
tag: Collaboration
readtime: 6 min read
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

To see the same table in DraftView, open the **Organization** tab and select **Roles & access**. Admins change a member's role in **Members**.

## Item permission caps

Each queue item has one cap:

- View only
- Comment only
- Edit

Effective permission is the lower of the role capability and the item cap.

Examples:

- An Editor on a Comment only item can comment but cannot edit.
- A Maintainer on a View only item can only view that item.

Admins set the cap that new queue items start with in **Access for new PRs**, under **Roles & access**. Maintainers can change the cap on each item.

## Doc reviews

[Doc reviews](../workflows/run-a-doc-review) use the same roles and caps. The maintainer who starts a review sets its cap in **Everyone can, at most**.

- Viewers can read the files, comments, and edits.
- Commenters can comment, reply, and resolve threads.
- Editors can also suggest edits.
- Maintainers and admins can start a review, add files, change its settings, accept or reject edits, and finish or cancel it. They can manage the review whatever its cap.

Two per-review settings switch capabilities off for everyone. **Allow comments** controls whether anyone can start threads and reply. **Only maintainers resolve threads** limits resolving to maintainers and admins.

Only members of your organization can open a doc review.

## Legacy naming

If you used older docs, role names mapped as follows:

- Owner maps to Admin
- Approver maps to Maintainer
- Reviewer maps to Editor

## Related pages

- [Set up your team](set-up-your-team)
- [Sign-off and oversight](sign-off-and-oversight)
- [Team roles reference](../reference/org-roles)
