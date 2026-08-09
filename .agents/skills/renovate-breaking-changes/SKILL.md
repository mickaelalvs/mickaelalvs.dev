---
name: renovate-breaking-changes
description: Reads a Renovate dependency-update PR's changelog and checks whether this codebase is affected by any breaking change; if so, fixes the code. CI-only — explicit invocation required (disable-model-invocation), never triggered automatically during normal Cursor/Claude Code sessions.
disable-model-invocation: true
---

# Renovate breaking-change triage

You are running inside a GitHub Actions job on a Renovate dependency-update pull
request. `PR_NUMBER` is set in the environment. `gh` is authenticated (`GH_TOKEN` is
set). You are checked out on the PR's branch with push access already configured.

## 1. Read the changelog

Run:

```bash
gh pr view "$PR_NUMBER" --json title,body
```

Renovate embeds the relevant changelog/release-notes excerpt in the PR body. Use it as
your primary source for what changed between the old and new version.

If the body has no changelog section, or it looks truncated/empty (this happens when the
package has no `repository` field, is privately hosted, or uses a changelog format
Renovate doesn't recognize), look the package up yourself: check its GitHub releases
page or `CHANGELOG.md` for the versions between the old and new version referenced in
the PR title.

## 2. Decide impact

Read through the breaking changes (if any) mentioned in the changelog. Search this
codebase for usage of the affected APIs/exports of the updated package. Only treat a
breaking change as relevant if the codebase actually calls the changed API — a breaking
change in a part of the package this repo doesn't use is not impact.

## 3. No impact found

If nothing in the changelog affects this codebase, make no code changes and run:

```bash
gh pr comment "$PR_NUMBER" --body "🤖 Changelog analysé, aucun breaking change impactant ce repo détecté. Aucune modification nécessaire."
```

Stop here.

## 4. Impact found — fix loop (max 5 attempts)

Repeat the following up to **5 times**:

1. Edit the code to address the breaking change(s) you identified.
2. Validate:
   ```bash
   pnpm build && pnpm lint && pnpm format:check
   ```
3. If the validation command succeeds: commit and push, then stop.
   ```bash
   git add -A
   git commit -m "fix: adapt to breaking change in <package>@<version>"
   git push
   ```
   Replace `<package>` and `<version>` with the actual package name and new version.
4. If it fails: read the error output, adjust your fix, and try again — this counts as
   the next attempt.

Never exceed 5 attempts total. If you reach the 5th failed attempt, stop trying and run:

```bash
gh pr comment "$PR_NUMBER" --body "⚠️ Breaking change détecté dans <package> mais non résolu après 5 tentatives. Détails de ce qui a été essayé : <summary>. Intervention humaine nécessaire."
```

Replace `<package>` and `<summary>` with the actual package name and a concrete
description of what you tried and why it still fails — never leave template
placeholders in the literal comment text you post.

## Constraints

- Never make more than 5 fix attempts.
- Never commit or push if `pnpm build && pnpm lint && pnpm format:check` fails.
- Only comment on the PR in the two cases above (no-impact, or exhausted attempts) — do
  not post a comment when a fix succeeds; the passing CI check and the commits already
  communicate that.
