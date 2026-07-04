---
title: Replace Edit this page with DraftView
description: Route Edit this page links through DraftView for visual guest editing and GitHub PR creation.
tag: Workflows
readtime: 4 min read
---

# Replace Edit this page with DraftView

Use this integration when you want contributors to edit docs visually before opening a PR.

## What contributors experience

- They click Edit this page from your docs site.
- DraftView opens with the target file loaded.
- They edit visually.
- DraftView guides GitHub OAuth, fork, commit, and PR creation.

## Integration URL pattern

Link to DraftView with the source file URL in `url`:

```text
https://www.draftview.app/edit?url=https://github.com/owner/repo/blob/main/docs/page.md
```

## Setup steps

<wc-steps>
<wc-step title="Find your current Edit this page template">

Locate the template where your docs site builds Edit this page links.

</wc-step>
<wc-step title="Wrap the existing GitHub file URL">

Keep your existing GitHub file URL generation, then wrap it with the DraftView URL pattern.

</wc-step>
<wc-step title="Test one page end to end">

Open a page, click Edit this page, edit, and confirm DraftView can open a PR.

</wc-step>
</wc-steps>

## Notes

- DraftView works with Markdown, MDX, and AsciiDoc.
- AsciiDoc include targets can be edited in their own sessions.

## Related pages

- [Submit an edit as a pull request](../send-to-github/submit-an-edit-as-a-pr)
- [Supported file formats](../reference/supported-file-formats)
- [Link formats](../reference/link-formats)
