---
title: Link and URL formats
description: The DraftView URLs for reviewing a PR, editing a page, the public demo, and signing in, with the placeholders each one takes.
tag: Reference
readtime: 2 min read
---

# Link and URL formats

The URL patterns DraftView uses. Replace the placeholders in angle brackets with your own values.

## Review a pull request

Open a specific PR in the review surface:

```text
https://draftview.app/github.com/<owner>/<repo>/pull/<pr-number>
```

Example:

```text
https://draftview.app/github.com/your-org/your-repo/pull/142
```

## Edit a page ("Edit this page")

Open a single file for editing, using its GitHub blob URL:

```text
https://draftview.app/edit?url=<github-blob-url>
```

Example:

```text
https://draftview.app/edit?url=https://github.com/your-org/your-repo/blob/main/docs/intro.md
```

See [Replace "Edit this page" with DraftView](../workflows/edit-this-page).

## Public demo

Try DraftView on any public PR, no login:

```text
https://draftview.app/try
```

## Sign in by email

Request an email magic link:

```text
https://draftview.app/login
```

## External review link

A reviewer-facing link uses a token DraftView generates. You do not build this by hand. Create it from a loaded PR. See [Invite an external reviewer](../workflows/invite-an-external-reviewer).

```text
https://draftview.app/review/external/<token>
```

[Assumption: these URL patterns match the app's routes as described in the project structure. Confirm the production hostname and any path changes.]

## Related pages

- [Review your first pull request](../get-started/review-your-first-pr)
- [Replace "Edit this page" with DraftView](../workflows/edit-this-page)
- [Try DraftView without an account](../get-started/try-without-an-account)
