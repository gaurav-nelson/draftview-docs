---
title: How DraftView works
description: The main concepts behind DraftView, including the review queue, the visual review surface, the closed feedback loop with AI agents, and the human-oversight record.
tag: Overview
readtime: 6 min read
---

# How DraftView works

This page explains the parts of DraftView and how they fit together. Read it before you set up a team so the later task pages make sense.

DraftView sits on top of GitHub. Your documentation never leaves your repository. DraftView reads pull requests, presents them for review, and writes review activity back to GitHub.

## The review queue

When you connect the GitHub App to a repository, DraftView watches for documentation pull requests and adds each one to a queue. The queue is a single inbox across all your connected repos, so doc PRs do not get scattered or lost. Each item carries a state, an owner, and a label showing whether the change looks AI-authored.

You do not have to paste links to fill the queue. PRs arrive on their own as they open. For evaluation, you can also load a single PR by URL without connecting anything. See [Review your first pull request](../get-started/review-your-first-pr).

## AI authorship detection

DraftView labels each PR with a best guess at whether an AI agent wrote it. The signals come from the author, the branch, the PR body, and commit trailers, and the detection is generator-agnostic. It is not tied to one assistant. The label helps you filter and prioritize. It does not change what you are allowed to do with a PR.

[Assumption: AI authorship is shown as a label and used for filtering. It does not block or gate review actions.]

## Visual review

Open a queue item and you get the pull request rendered as a formatted page, not a diff. Changed sections are marked so you can see what moved, but you read the prose the way a user would. You can:

- Edit text directly, the way you would in a word processor.
- Leave comments anchored to a sentence or paragraph, not a line number.
- Switch to a raw source view when you want it.

The editor handles Markdown, MDX, and AsciiDoc. DocsLit components are recognized. See [Supported file formats](../reference/supported-file-formats).

## Reviewers without GitHub

Most subject experts do not have a GitHub account. DraftView lets them join a team by email magic link and review immediately. They never see GitHub.

GitHub requires every suggested change to come from a real authenticated account. So when a reviewer without GitHub submits edits, those edits wait as a pending review. A teammate who has linked GitHub then verifies the feedback and pushes it upstream under their own account. This is called verify-and-push. See [Push reviewer feedback to a pull request](../send-to-github/push-reviewer-feedback).

## The closed feedback loop

Reviewing AI output is not a one-shot act. A reviewer comments, the agent pushes a new commit, and someone has to confirm the commit actually fixed the thing, not just that a line changed.

DraftView ties each comment to the region it covers. When a new commit lands, it shows the before and after of that exact region so the reviewer can confirm the loop closed. A push only counts as addressing feedback if it touches a commented region. See [Review AI-generated documentation PRs](../workflows/review-ai-generated-doc-prs).

## Sign-off and the oversight record

When the change is right, an approver signs off. DraftView writes an append-only sign-off entry: who reviewed, what changed, how long it took, and against which version. Once a sign-off is in place and CI is green, the PR reaches a ready-to-merge state. A human still merges in GitHub. DraftView never merges on its own.

The sign-off entries roll up into an exportable human-oversight record. This is the artifact GitHub does not produce, and it is what you hand to an auditor or attach to a compliance review. See [Sign-off and oversight records](../collaboration/sign-off-and-oversight).

## The lifecycle

Each PR moves through a defined set of states, from ingested through in-review and changes-requested to ready-to-merge and merged. The states are how the queue stays honest about what needs a human, what is waiting on the agent, and what is done. See [Pull request lifecycle states](../reference/pr-lifecycle-states).

## How the pieces connect

<wc-steps>
<wc-step title="A PR opens">

An agent or a person opens a documentation PR in a connected repo. DraftView ingests it into the queue with a state and an AI-authorship label.

</wc-step>
<wc-step title="A human reviews it">

A reviewer opens the rendered page, edits prose, and leaves comments. Edits sync to GitHub as suggested changes. Reviewers without GitHub submit pending reviews.

</wc-step>
<wc-step title="The agent responds">

The agent pushes a new commit. DraftView shows the before and after of each commented region so the reviewer can confirm the feedback was addressed.

</wc-step>
<wc-step title="A human signs off">

An approver records a sign-off. With CI green, the PR is ready to merge. A person merges in GitHub, and DraftView keeps the oversight record.

</wc-step>
</wc-steps>

## Next steps

- Set up the queue for your repos in [Set up your team](../collaboration/set-up-your-team).
- Try the review surface on a real PR in [Review your first pull request](../get-started/review-your-first-pr).

## Related pages

- [Pull request lifecycle states](../reference/pr-lifecycle-states)
- [Roles and permissions](../collaboration/roles-and-permissions)
- [Review AI-generated documentation PRs](../workflows/review-ai-generated-doc-prs)
