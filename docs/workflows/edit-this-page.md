---
title: Replace "Edit this page" with DraftView
description: Point your documentation site's "Edit this page" link at DraftView so readers can edit in a visual editor and open a pull request without knowing Git.
tag: Common workflows
readtime: 5 min read
---

# Replace "Edit this page" with DraftView

Most documentation sites have an "Edit this page" link that sends readers to the raw file on GitHub. That works for contributors who know Git. It loses everyone else. Point the link at DraftView instead, and a reader can edit the page in a visual editor and open a pull request without touching Markdown or the GitHub UI.

## When to use this

- Your docs site is built from Markdown, MDX, or AsciiDoc in a GitHub repo.
- You want readers and non-technical contributors to suggest fixes.
- Your generator supports a configurable edit URL (Docusaurus, VitePress, MkDocs, and similar).

## Prerequisites

- A documentation site generator that lets you set the edit link per page.
- The GitHub repo, branch, and file path for each page, which your generator already knows.

## How it works

DraftView accepts a GitHub blob URL as a query parameter:

```text
https://draftview.app/edit?url=https://github.com/your-org/your-repo/blob/main/docs/intro.md
```

A reader opens that URL, edits the rendered page with no login, and submits. On submit, DraftView asks them to authorize GitHub, forks the repo if needed, commits the change, and opens a pull request. The change then enters your normal review flow, including DraftView review if the repo is connected.

## Steps

<wc-steps>
<wc-step title="Build the edit URL">

Construct the DraftView edit URL from each page's GitHub blob URL. The pattern is:

```text
https://draftview.app/edit?url=<github-blob-url>
```

</wc-step>
<wc-step title="Set it in your generator">

Configure your generator's edit-link option to produce that URL. For Docusaurus, set `editUrl` to the DraftView prefix plus the file path. The integration guide at `https://draftview.app/edit-this-page` shows the exact config for common generators.

</wc-step>
<wc-step title="Test one page">

Open a page on your live site, click the edit link, and confirm DraftView loads the right file. Make a small edit and submit to confirm the PR opens against your repo.

</wc-step>
</wc-steps>

## Result

Every page on your docs site has an edit link that opens a visual editor. A reader who spots a typo can fix it and open a PR in a couple of minutes, with no Git knowledge. You review the PR as usual.

## Common mistakes

- **Wrong branch in the blob URL.** The URL must point at the branch your generator builds from, usually `main`. A stale branch edits the wrong content.
- **Private repo with anonymous readers.** A reader can only open a PR against a repo they can fork or access. For private repos, contributors need the right GitHub access.
- **Unsupported file format.** Only Markdown, MDX, and AsciiDoc render in the editor. See [Supported file formats](../reference/supported-file-formats).

## Next steps

- See the per-generator setup at `https://draftview.app/edit-this-page`.
- Understand the PR that gets opened in [Submit an edit as a pull request](../send-to-github/submit-an-edit-as-a-pr).

## Related pages

- [Submit an edit as a pull request](../send-to-github/submit-an-edit-as-a-pr)
- [Supported file formats](../reference/supported-file-formats)
- [Move from a Git edit workflow](../migration/from-github-pr-review)
