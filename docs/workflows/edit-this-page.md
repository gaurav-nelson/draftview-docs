---
title: Replace Edit this page with DraftView
description: Route Edit this page links through DraftView for visual guest editing and pull request or merge request creation.
tag: Workflows
readtime: 4 min read
---

# Replace Edit this page with DraftView

Use this integration when you want contributors to edit docs visually before they open a pull request or merge request.

## What contributors experience

- They click Edit this page from your docs site.
- DraftView opens with the target file loaded.
- They edit visually.
- DraftView guides platform authorization, fork creation, commit, and request creation.

## Integration URL pattern

Link to DraftView with the source file URL in `url`.

GitHub example:

```text
https://www.draftview.app/edit?url=https://github.com/owner/repo/blob/main/docs/page.md
```

GitLab example:

```text
https://www.draftview.app/edit?url=https://gitlab.com/group/project/-/blob/main/docs/page.md
```

## Setup steps

<wc-steps>
<wc-step title="Find your current Edit this page template">

Locate the template where your docs site builds Edit this page links.

</wc-step>
<wc-step title="Wrap the existing source file URL">

Keep your existing source file URL generation, then wrap it with the DraftView URL pattern.

</wc-step>
<wc-step title="Test one page end to end">

Open a page, click Edit this page, edit, and confirm DraftView opens a pull request on GitHub or a merge request on GitLab.

</wc-step>
</wc-steps>

## Open and edit files in DraftView

You can also use the DraftView file editor directly at [https://www.draftview.app/edit](https://www.draftview.app/edit) without a docs site link. The entry screen offers three equal doors:

- **New file**: Start a blank scratch document in Markdown, MDX, or AsciiDoc. Includes starter content, a format switcher, and instant **Download** or **Copy source** buttons. Your scratch draft stays safely in your browser.
- **From your computer**: Select or drag-and-drop any Markdown, MDX, or AsciiDoc file (up to 512 KB) to edit locally in your browser. Files remain entirely in your browser's local storage and are never uploaded to a server.
- **From GitHub or GitLab**: Paste any public or private repository file URL to open and edit it visually.

You can also open format-matched sample documents using **Open a sample** to try out the editor.

## Notes

- DraftView works with Markdown, MDX, and AsciiDoc.
- You can edit AsciiDoc include targets in their own sessions.
- Supported source URL formats are `blob` and `edit` URLs from GitHub and GitLab.
- You can paste URLs copied from the browser. DraftView accepts query strings and fragments.

## Related pages

- [Submit an edit as a pull request](../send-to-github/submit-an-edit-as-a-pr)
- [Supported file formats](../reference/supported-file-formats)
- [Link formats](../reference/link-formats)
