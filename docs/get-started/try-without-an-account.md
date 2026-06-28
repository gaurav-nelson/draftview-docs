---
title: Try DraftView without an account
description: See the DraftView review experience on any public GitHub pull request in about a minute, with no signup and no install.
tag: Get started
readtime: 2 min read
---

# Try DraftView without an account

Use the public demo to see how DraftView renders a documentation PR before you commit to anything. Pick a public PR you already understand so you can judge the experience against something familiar.

## When to use this

- You are evaluating DraftView and do not want to sign in yet.
- You want to show a teammate what review looks like.
- You want to check how a specific public PR renders.

## Prerequisites

- A public GitHub pull request URL that changes documentation files.

## Steps

<wc-steps>
<wc-step title="Open the demo">

Go to `https://draftview.app/try`.

A default pull request loads so you can see the surface right away.

</wc-step>
<wc-step title="Load your own PR">

Paste a public GitHub PR URL, for example:

```text
https://github.com/your-org/your-repo/pull/142
```

DraftView fetches the documentation files in that PR and renders them.

</wc-step>
<wc-step title="Read and interact">

Read the rendered pages, expand changed sections, and try the editor. The demo is read-only for sending anything back to GitHub. Nothing is submitted to the PR.

</wc-step>
</wc-steps>

## Result

You see the PR as formatted prose with its changes marked, the same surface a reviewer uses. No data is written back to GitHub from the demo.

## Common mistakes

- **Private PR URL.** The demo only loads public PRs. To review a private PR, sign in. See [Review your first pull request](review-your-first-pr).
- **A PR with no doc files.** If the PR only changes code or config, there is nothing for DraftView to render. Pick a PR that touches Markdown, MDX, or AsciiDoc.
- **Rate limiting.** The demo limits requests by IP. If loading fails after several tries, wait a moment and retry.

## Next steps

- Review a PR you have access to in [Review your first pull request](review-your-first-pr).
- Understand the full workflow in [How DraftView works](../overview/how-it-works).

## Related pages

- [Review your first pull request](review-your-first-pr)
- [Supported file formats](../reference/supported-file-formats)
