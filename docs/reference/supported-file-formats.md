---
title: Supported file formats
description: The documentation file formats and extensions DraftView renders for review, plus how component syntaxes are handled.
tag: Reference
readtime: 2 min read
---

# Supported file formats

DraftView renders documentation files in a pull request. Files that are not in a supported format are ignored for review. This page lists what is supported.

## Supported extensions

| Format | Extensions |
|---|---|
| Markdown | `.md`, `.markdown`, `.mdown` |
| MDX | `.mdx` |
| AsciiDoc | `.adoc`, `.asciidoc`, `.ad`, `.asc` |

## Component syntaxes

DraftView recognizes component-style content inside these files:

- **MDX components** in PascalCase, such as `<Note>` or `<Card>`.
- **DocsLit components** in the `wc-` form, such as `<wc-callout>` or `<wc-steps>`, and their PascalCase aliases.

Recognized components render with their structure preserved and round-trip back to the source. Unmapped components fall back to a labeled placeholder that keeps the inner content, so nothing is dropped.

## Format fidelity on submit

DraftView serializes edits back to the file's original format. Markdown returns as Markdown. AsciiDoc returns as AsciiDoc, not Markdown. Component tags round-trip as written. See [How suggestions reach GitHub](../send-to-github/how-suggestions-reach-github).

## What is not supported

- Code, configuration, and data files. DraftView reviews documentation, not source.
- Binary files and images are not edited as prose.
- Word, PDF, and other non-Git formats. The content must be a file in a GitHub PR.

## Related pages

- [Suggest edits in the visual editor](../workflows/suggest-edits)
- [How suggestions reach GitHub](../send-to-github/how-suggestions-reach-github)
- [Limits](limits)
