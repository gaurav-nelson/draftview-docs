---
title: Roles and permissions
description: The team roles in DraftView, what each one can do, and how to choose roles for reviewers, approvers, and admins.
tag: Collaboration
readtime: 4 min read
---

# Roles and permissions

DraftView teams have four roles. Assign them based on who reviews content, who approves it, and who runs the team. This page describes what each role does and how to choose.

## When to use this

- You are inviting people and need to pick a role for each.
- You want to know who can sign off versus who can only review.
- You are auditing who has access to your team.

## The roles

| Role | Can review and comment | Can sign off | Can manage the team | Typical person |
|---|---|---|---|---|
| Owner | Yes | Yes | Yes, including billing and connections | The person who connected the App |
| Approver | Yes | Yes | No | A docs lead or accountable approver |
| Reviewer | Yes | No | No | A PM, SME, or legal reviewer |
| Viewer | No, read-only | No | No | A stakeholder who watches but does not act |

[Assumption: the four roles are owner, approver, reviewer, and viewer, and only owner and approver can record a sign-off. Confirm the exact capability boundaries against the product.]

## How to choose

- **The person who sets up the team** is the owner. There is at least one.
- **Anyone who is accountable for approving a change** is an approver. This is the person whose sign-off counts as human oversight.
- **Anyone who reviews but does not give final approval** is a reviewer. Most subject experts fit here. Reviewers can be magic-link members with no GitHub account.
- **Anyone who needs visibility but not a say** is a viewer.

## Billing and roles

The team is billed by active reviewer per month, meaning a member who actually reviewed, edited, signed off, or pushed a review. Inviting people is free. Viewing and admin work do not count. So you can add stakeholders as viewers and invite reviewers freely without changing the bill until they do review work.

[Assumption: billing counts active reviewers only; inviting, viewing, and admin actions do not count. Confirm against current pricing.]

## GitHub access versus role

A role is about what someone can do inside the team. It is separate from whether they have a GitHub account. A reviewer with no GitHub account reviews normally, but their feedback is pushed by a GitHub-linked teammate. See [Push reviewer feedback to a pull request](../send-to-github/push-reviewer-feedback).

## Common mistakes

- **Making everyone an approver.** Sign-off is the accountable act. Keep the approver set small so it means something.
- **Using viewer for people who need to review.** Viewers are read-only. A reviewer who needs to edit should have the reviewer role.

## Next steps

- Invite people in [Set up your team](set-up-your-team).
- Understand what a sign-off records in [Sign-off and oversight records](sign-off-and-oversight).

## Related pages

- [Set up your team](set-up-your-team)
- [Sign-off and oversight records](sign-off-and-oversight)
- [Invite an external reviewer](../workflows/invite-an-external-reviewer)
