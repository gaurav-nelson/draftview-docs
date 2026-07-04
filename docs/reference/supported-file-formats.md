---
title: Supported file formats
description: See which documentation formats DraftView can render, edit, and send back to GitHub.
tag: Reference
readtime: 3 min read
---

# Supported file formats

DraftView reviews documentation files in pull requests.

## Supported extensions

| Format | Extensions |
|---|---|
| Markdown | .md, .markdown, .mdown |
| MDX | .mdx |
| AsciiDoc | .adoc, .asciidoc, .ad, .asc |

## Component support

DraftView supports common docs component syntax in supported files, including MDX components and DocsLit `wc-*` components.

## Round-trip behavior

DraftView keeps source format on submit.

- Markdown edits return as Markdown.
- MDX edits return as MDX.
- AsciiDoc edits return as AsciiDoc.

## Not supported

- Code and config files for prose editing
- Binary documents and image formats as editable prose

## Related pages

- [Suggest edits in the visual editor](../workflows/suggest-edits)
- [How suggestions reach GitHub](../send-to-github/how-suggestions-reach-github)
- [Limits and constraints](limits)
