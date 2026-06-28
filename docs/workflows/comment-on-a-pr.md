---
title: Comment on a pull request
description: Leave comments anchored to sentences and paragraphs instead of line numbers, and have them sync to GitHub review threads.
tag: Common workflows
readtime: 4 min read
---

# Comment on a pull request

Use comments when you want to flag something without editing it yourself: ask a question, explain a concern, or request a change you want the author or agent to make. Comments attach to the prose, so reviewers can point at a sentence instead of a line number.

## When to use this

- You want to question or explain rather than rewrite.
- You are asking the author or the agent to make a change.
- You want a thread that others can reply to and resolve.

## Prerequisites

- A PR open in the DraftView review surface.

## Steps

<wc-steps>
<wc-step title="Select the text">

Highlight the sentence or paragraph your comment is about. The comment anchors to that region, not to a line number.

</wc-step>
<wc-step title="Write the comment">

Add your note. Be specific about what you want changed and why, so the author or agent can act on it without guessing.

</wc-step>
<wc-step title="Submit with your review">

Comments post to the PR when you submit. On GitHub they appear as review comments and threads. Others can reply and resolve them.

</wc-step>
</wc-steps>

## Result

Your comments are on the PR as GitHub review threads, each tied to the right place in the file. The author or the agent can respond. When an agent pushes a follow-up commit, DraftView shows whether the commented region actually changed. See [Review AI-generated documentation PRs](review-ai-generated-doc-prs).

## Comments versus suggested edits

| Use a comment when | Use a suggested edit when |
|---|---|
| You want to ask or explain | You know the exact wording you want |
| The fix needs the author's judgment | The fix is unambiguous |
| You are requesting work from the agent | You can make the change yourself |

A precise suggested edit is faster to apply than a comment that describes a change in words. When you know the fix, suggest it. See [Suggest edits in the visual editor](suggest-edits).

## Common mistakes

- **Vague comments.** "This is unclear" gives the author nothing to act on. Say what is unclear and what would fix it.
- **Commenting when you could suggest.** If you know the exact wording, a suggested change is one click for the author to accept.

## Next steps

- Make direct changes in [Suggest edits in the visual editor](suggest-edits).
- Confirm the agent addressed your comment in [Review AI-generated documentation PRs](review-ai-generated-doc-prs).

## Related pages

- [Suggest edits in the visual editor](suggest-edits)
- [Review AI-generated documentation PRs](review-ai-generated-doc-prs)
