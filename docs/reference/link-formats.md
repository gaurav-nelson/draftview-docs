---
title: Link formats
description: Use the correct DraftView URLs for review routes, demo routes, and integrations.
tag: Reference
readtime: 3 min read
---

# Link formats

Use these URL formats when linking to DraftView workflows.

## Core routes

### Review a GitHub PR directly

```text
https://www.draftview.app/github.com/<owner>/<repo>/pull/<pr-number>
```

### Open the dashboard

```text
https://www.draftview.app/dashboard
```

### Sign in

```text
https://www.draftview.app/login
```

### Try the public demo

```text
https://www.draftview.app/try
```

## Integration routes

### Edit this page integration

```text
https://www.draftview.app/edit?url=https://github.com/<owner>/<repo>/blob/<branch-or-sha>/<path>
```

### External review route

```text
https://www.draftview.app/review/external/<token>
```

Create external links from DraftView. Do not handcraft token URLs.

## Related pages

- [Review your first pull request](../get-started/review-your-first-pr)
- [Replace Edit this page with DraftView](../workflows/edit-this-page)
- [Invite an external reviewer](../workflows/invite-an-external-reviewer)
