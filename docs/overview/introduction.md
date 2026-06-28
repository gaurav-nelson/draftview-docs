---
title: Introduction to DraftView
description: DraftView is the human review layer for AI-generated documentation pull requests. It runs on top of GitHub so a qualified person can review, edit, and sign off on doc changes before they merge.
tag: Overview
readtime: 4 min read
---

# Introduction to DraftView

DraftView is the human review layer for AI-generated documentation pull requests. It runs on top of GitHub. When an AI agent or a person opens a PR that changes documentation, DraftView is where someone qualified reads it, edits it, comments on it, and signs off before it merges. It also shows whether the agent's next commit actually addressed the feedback.

AI now writes a large share of documentation. Coding assistants and agents open doc PRs at machine speed. Review still happens at human speed, so the PRs pile up, age, and get approved without a real read. DraftView exists to keep the human checkpoint fast enough to match the output, and to make that checkpoint something you can prove happened.

The content stays in GitHub. DraftView does not host your docs, replace your repository, or build your site. It is additive and removable. GitHub still owns the files, the comments, and the merge. DraftView owns the review experience and the record of who reviewed what.

## The problem it solves

A unified diff is a fine way for an engineer to review another engineer's code. It is a poor way for a product manager, a lawyer, or a subject-matter expert to review prose. Red-and-green Markdown hides what the rendered page will look like, comments anchor to line numbers instead of sentences, and most of these reviewers do not have a GitHub account in the first place.

AI output makes this worse. Agents produce confident mistakes: a flag that does not exist, an API that was never shipped, a procedure that reads well but is wrong. None of it looks broken in a diff. Catching it takes a person who knows the subject, reading the page the way a real user would.

## What you can do with it

- Collect documentation PRs from connected repositories into one review queue.
- Read a PR as a formatted page instead of a diff, in Markdown, MDX, or AsciiDoc.
- Suggest wording changes that sync back to GitHub as native suggested changes.
- Invite reviewers who have no GitHub account, using an email magic link.
- Confirm that an agent's follow-up commit addressed a specific comment.
- Record a sign-off and export a human-oversight trail for each change.

## What it is not

DraftView is not a static site generator, a CMS, or a wiki, and it does not publish your docs. It is not a code review tool. It is not tied to one AI vendor, and it never merges a change on its own. A human always makes the final call in GitHub.

## A short example

An agent opens a PR that rewrites an installation guide. The PR lands in your DraftView queue, flagged as AI-authored. A support lead opens it, reads the rendered guide, and leaves two comments on steps that are wrong. The agent pushes a new commit. DraftView shows the before and after of each commented region, so the support lead can confirm the fix. An approver signs off, CI is green, and an engineer merges in GitHub. DraftView keeps the record of who reviewed it and what changed.

## Next steps

- See whether this matches your situation in [Who DraftView is for](who-its-for).
- Learn the moving parts in [How DraftView works](how-it-works).
- Open a real PR with no signup in [Try DraftView without an account](../get-started/try-without-an-account).

## Related pages

- [How DraftView works](how-it-works)
- [Review AI-generated documentation PRs](../workflows/review-ai-generated-doc-prs)
- [Sign-off and oversight records](../collaboration/sign-off-and-oversight)
