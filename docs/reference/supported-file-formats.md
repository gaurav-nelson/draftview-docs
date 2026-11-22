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
| Markdoc | .mdoc, .markdoc |

DraftView also parses MyST Markdown syntax in Markdown files.

## Component support

DraftView supports common docs component syntax in supported files, including MDX components and DocsLit `wc-*` components.

### MyST Markdown

- Admonition directives, such as `:::{note}`, render as native admonitions.
- Tab, card, grid, and dropdown directives render as rich components.
- Code and figure directives render as code blocks and images.
- DraftView preserves unknown directives and inline roles verbatim, so they round-trip exactly.

### Markdoc

- Tags such as `{% callout %}` and `{% tabs %}` render as rich components with editable bodies.
- DraftView preserves self-closing tags, such as `{% partial /%}`, verbatim.

### Mermaid diagrams

- Code blocks tagged `mermaid` render as visual SVG diagrams in both the review surface and the editor.
- Diagrams dynamically adapt to the active theme (System, Light, or Dark).
- In the visual editor, you can edit the diagram definition directly and preview the updated diagram live.

### Images

- Markdown, MDX, and AsciiDoc images render inline in the editor, including images referenced by relative paths in the repository.
- Images that the PR itself adds or moves resolve against the PR head commit.
- Raw HTML image blocks in Markdown files, such as badge and logo headers, render as image previews.

## Round-trip behavior

DraftView keeps source format on submit.

- Markdown edits return as Markdown.
- MDX edits return as MDX.
- AsciiDoc edits return as AsciiDoc.
- MyST and Markdoc edits return in their own syntax, including directive options and tag attributes.
- Untouched blocks keep their original source formatting verbatim, so suggestions submit only what you changed without adding formatting noise.

## Source-only files

Files that do not contain visual prose (such as AsciiDoc files containing only attribute entries and comments, or metadata and configuration documents) open in a line-numbered source view.

- Added lines are tinted and removed lines are struck through.
- Reviewers can comment on individual lines and suggest edits line by line.
- Suggested edits submit cleanly to GitHub as suggestions on the edited lines.

## Not supported

- Binary documents and image formats as editable prose
- Full source code repositories for general code review (DraftView is designed specifically for documentation files and docs-as-code assets)

## Related pages

- [Suggest edits in the visual editor](../workflows/suggest-edits)
- [How suggestions reach GitHub](../send-to-github/how-suggestions-reach-github)
- [Limits and constraints](limits)
