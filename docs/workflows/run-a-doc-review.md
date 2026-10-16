---
title: Review files without a pull request
description: Start a doc review of files on any branch, collect comments and suggested edits from your team, and turn the accepted edits into one pull request.
tag: Workflows
readtime: 8 min read
---

# Review files without a pull request

A doc review lets your team review documentation files straight from a branch, with no pull request. Reviewers comment and suggest edits in DraftView, and they don't need a GitHub account. When a maintainer finishes the review, DraftView opens one pull request with the accepted edits and commits a record of the whole review in it.

Use a doc review for content that's already published, such as a yearly policy review, a legal or compliance check, or a review by subject matter experts who don't use GitHub.

<wc-callout type="info" title="Preview">
Doc reviews are in preview. We're still building them, so some details may change.
</wc-callout>

## How a doc review works

1. A maintainer picks a repository, a branch, and up to 25 files.
2. DraftView pins each file at the branch's latest commit. Everyone reviews that same snapshot, even if the branch moves during the review.
3. Team members open the review link, comment, and suggest edits. Nothing reaches GitHub during the review.
4. A maintainer accepts or rejects each suggested edit.
5. A maintainer finishes the review. DraftView opens one pull request with the accepted edits, commits a Markdown record of the review, and posts the remaining comments and edits on the pull request.

DraftView creates the pull request branch from the pinned commit. Git then merges the accepted edits with any changes that landed on the branch while the review was open.

## Who can do what

Only members of your DraftView organization can open a doc review. Reviewers without GitHub join your organization by magic link and get a role like anyone else.

| Action | Lowest role |
|---|---|
| Read files, comments, and edits | Viewer |
| Comment, reply, and resolve threads | Commenter |
| Suggest edits | Editor |
| Start a review, add files, change settings | Maintainer |
| Accept or reject edits | Maintainer |
| Finish or cancel a review | Maintainer |

Each review also has a permission cap, set in **Everyone can, at most**. The cap works the same way as on queue items: each person gets the lower of their role and the cap. For example, an Editor in a **Comment only** review can comment but can't suggest edits. Maintainers and admins can always manage the review.

The top bar of the review shows what you can do: **You can comment and suggest edits**, **You can comment**, or **View only**.

## Start a doc review

Before you start:

- You need the Maintainer or Admin role.
- Your organization needs the DraftView GitHub App connected, or you need a linked GitHub account.
- Add any reviewers who aren't in your organization yet. See [Set up your team](../collaboration/set-up-your-team).

<wc-steps>
<wc-step title="Open the chooser">

In the [dashboard](https://www.draftview.app/dashboard), go to the Queue and select **Add to team queue**. Then select **Doc review**.

</wc-step>
<wc-step title="Pick the repository and branch">

In **Repository**, enter the repository as `owner/name`, or pick it from the list. In **Branch**, keep the default branch or pick another one. DraftView lists the documentation files on that branch.

</wc-step>
<wc-step title="Pick the files">

Select up to 25 files. Use **Filter files** to narrow the list. DraftView fills in a title, which you can change in **Title**.

</wc-step>
<wc-step title="Set the permission cap">

In **Everyone can, at most**, choose **View only**, **Comment only**, or **Edit**.

</wc-step>
<wc-step title="Start the review and share the link">

Select **Start review**. Copy the review link and send it to your reviewers, then select **Done**. The new review appears in the **Doc reviews** table on the Queue, below **PR reviews**.

</wc-step>
</wc-steps>

## Comment on files

Select the text you want to discuss and add a comment. Comments, replies, and resolved threads are shared with everyone in the review. Other reviewers see them within a few seconds, without reloading the page.

To hide resolved threads, select **Hide resolved**. Select **Show resolved** to bring them back.

## Suggest edits

Every edit in a doc review is a suggestion. A maintainer decides which ones go into the pull request.

<wc-steps>
<wc-step title="Edit the text">

Type directly in the document, the same way you edit a pull request in DraftView. See [Suggest edits in the visual editor](suggest-edits) for the editor controls.

</wc-step>
<wc-step title="Save your edits">

Select **Save** to share your edits with everyone in the review. Until you save, only you can see them.

</wc-step>
</wc-steps>

A few things to know about edits:

- DraftView keeps unsaved edits in your current browser only. Save before you switch to another device. If you try to leave the page with unsaved edits, DraftView asks first.
- Everyone's saved edits appear in the document text, with a stripe next to each changed line. **Highlights** is on by default and tints proposed and accepted edits. Select **Hide highlights** to turn the tint off.
- Each open edit has a card in the comment lane with a red and green diff and the author's name. Everyone in the review can see the author's email address on the card.
- To withdraw one of your open edits, select **Cancel edit** on its card, then **Yes, cancel it**. You can't cancel an edit after a maintainer accepts or rejects it.
- If you change text inside a teammate's edit, DraftView saves your change as a competing suggestion for that region. The maintainer accepts one of them.
- You can suggest an edit on top of an accepted edit, for example to put a heading back. The card shows the change from the accepted text. If the maintainer accepts it, it replaces the earlier accepted edit.

On a narrow screen, comments and edits move from the side lane to a dock at the bottom of the page.

## Accept or reject edits

If you're a maintainer, select **Accept** or **Reject** on each edit card. Accepted edits go into the pull request when you finish the review. An accepted edit's card leaves the lane, but the edit stays in the text and in the review record.

Accept and reject are final. Reject an edit before you accept a different one for the same lines.

The toolbar counts the open threads, proposed edits, and accepted edits in the review.

## See the review record

Select **Record** to see everything that happened in the review: every comment, edit, and decision, who made it, and when. Each edit shows exactly what it added and removed, and you can expand it into a red and green diff. Accepted and rejected edits link back to the proposal they decided.

Maintainers and admins can download the record from the same dialog. **Download .md** saves the Markdown record that **Finish** commits to the pull request, and works on every plan. **Audit record (JSON)** saves a sealed audit record on the Governance plan. See [Export audit records](../collaboration/sign-off-and-oversight#export-audit-records).

## Change the review

Maintainers can change a review while it's open:

- Select **Settings** to change the title, the permission cap, **Allow comments**, and **Only maintainers resolve threads**.
- Select **Files** to add more files. New files come from the same pinned commit as the rest of the review.

## Finish the review

<wc-steps>
<wc-step title="Open the Finish dialog">

Select **Finish review**. The dialog shows the number of accepted edits, open edits, and open threads.

</wc-step>
<wc-step title="Finish">

Select **Finish and open PR**. If no edits were accepted, the button reads **Finish review** and no pull request opens.

</wc-step>
<wc-step title="Open the pull request">

The **Review finished** dialog links to the new pull request. Review and merge it in GitHub as usual.

</wc-step>
</wc-steps>

After you finish, the review is read-only for everyone.

### What DraftView sends to GitHub

When you finish a review with accepted edits, DraftView does the following:

- Applies the accepted edits to the pinned files, creates a branch from the pinned commit, and opens one pull request against the review's branch. An admin chooses whether the branch lives in the repository or in a fork. See [Configure doc reviews](../collaboration/configure-doc-reviews).
- Adds a Markdown review record to the same commit, in `.draftview/reviews/` unless an admin set another folder. The record lists every thread, every edit with its outcome and diff, and a timeline. It never includes email addresses.
- Posts each comment thread on the pull request. A thread goes on its lines when they're part of the pull request diff. Otherwise DraftView posts a file-level comment that names the original lines. Replies stay in the same comment, with each reviewer's name in the text.
- Posts rejected, undecided, and cancelled edits as GitHub suggestions when the original lines are unchanged and in the diff. Otherwise it posts them as a diff block.
- Resolves settled threads on GitHub, so a "require conversation resolution" rule doesn't block the merge. Settled threads are threads resolved in DraftView, plus rejected and cancelled edits.
- Credits reviewers. People with a linked GitHub account get a `Co-authored-by` trailer with their GitHub noreply address. The pull request description names everyone else.

GitHub shows the person who finished the review, or the DraftView GitHub App, as the author of the pull request comments.

Open edits aren't included in the pull request. The description lists any unresolved threads, and any accepted edits that DraftView couldn't apply automatically.

If DraftView opens the pull request but can't post some of the comments, the **Review finished** dialog shows a warning. The pull request and the review record are unaffected.

When no edits were accepted, DraftView writes nothing to GitHub. The comments and the full record stay in DraftView.

## Cancel a review

To close a review without opening a pull request, select **Finish review**, then **Cancel review**, then **Yes, cancel review**. The review becomes read-only, and nothing is sent to GitHub.

## Related pages

- [Configure doc reviews](../collaboration/configure-doc-reviews)
- [Roles and permissions](../collaboration/roles-and-permissions)
- [Sign in to DraftView](../get-started/sign-in)
- [Limits and constraints](../reference/limits)
