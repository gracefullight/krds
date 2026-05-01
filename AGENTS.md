# Repository Guidelines

## Project Structure & Module Organization
- Monorepo managed by `bun` workspaces and Turborepo.
- `apps/storybook`: Storybook for component docs; stories in `apps/storybook/stories`.
- `apps/sample`: Next.js sample app; code in `apps/sample/src`, assets in `apps/sample/public`.
- `packages/krds`: Core KRDS design system (TypeScript, React, MUI). Source in `packages/krds/src`, build output in `dist`.
- `packages/krds-icons`: React icon components. Source in `packages/krds-icons/src`, build output in `dist`.

## Build, Test, and Development Commands
- Root install: `bun install` (uses `bun@1`).
- Develop all (parallel): `bun run dev` (Turbo runs each package’s `dev`).
- Build all: `bun run build` (Turbo caches `dist`, `.next`, `storybook-static`).
- Test (watch/interactive): `bun run test` — Vitest across `apps/*` and `packages/*`.
- Test (CI): `bun run test:ci` — non-watch run.
- Per app/package examples:
  - Storybook: `bun run --cwd apps/storybook dev` | `bun run --cwd apps/storybook build`
  - Sample app: `bun run --cwd apps/sample dev` | `bun run --cwd apps/sample build`
  - Libraries: `bun run --cwd packages/krds dev` | `bun run --cwd packages/krds-icons dev` (tsup watch)

## Coding Style & Naming Conventions
- Language: TypeScript; React 19; MUI v7 peer deps in `packages/krds`.
- Formatter/Linter: Biome (`biome.json`). Spaces indentation; double quotes; organized imports; `kebab-case` filenames enforced.
- Pre-commit: lint-staged runs `biome check --fix`; `package.json` is normalized by `sort-package-json`.
- Do not edit `dist`; change files under `src` only.

## Testing Guidelines
- Framework: Vitest (`vitest.config.ts`; `passWithNoTests: true`).
- Location/Names: co-locate tests with code using `*.test.ts` or `*.test.tsx`.
- Run: `bun run test` locally; add UI changes to Storybook stories in `apps/storybook/stories`.

## Commit & Pull Request Guidelines
- Commits: Conventional Commits enforced by commitlint (e.g., `feat:`, `fix:`, `docs:`, `chore:`).
- PRs should include: clear description, linked issues, screenshots/GIFs for UI, and notes on Storybook/story or test updates.
- Keep diffs minimal and focused; update docs and stories when introducing or changing components.

## Security & Configuration Tips
- Use `bun` consistently; avoid `npm`/`yarn`/`pnpm` lockfiles.
- Never commit secrets; if needed for apps, use local `.env` files ignored by VCS.
- Publishing: root script `publish-packages` runs builds and Changesets; do not run it from forks.

<!-- OMA:START — managed by oh-my-agent. Do not edit this block manually. -->

# oh-my-agent

## Architecture

- **SSOT**: `.agents/` directory (do not modify directly)
- **Response language**: Follows `language` in `.agents/oma-config.yaml`
- **Skills**: `.agents/skills/` (domain specialists)
- **Workflows**: `.agents/workflows/` (multi-step orchestration)
- **Subagents**: Same-vendor native dispatch via Codex custom agents in `.codex/agents/{name}.toml`; cross-vendor fallback via `oma agent:spawn`

## Per-Agent Dispatch

1. Resolve `target_vendor_for_agent` from `.agents/oma-config.yaml`.
2. If `target_vendor_for_agent === current_runtime_vendor`, use the runtime's native subagent path.
3. If vendors differ, or native subagents are unavailable, use `oma agent:spawn` for that agent only.

## Workflows

Execute by naming the workflow in your prompt. Keywords are auto-detected via hooks.

| Workflow | File | Description |
|----------|------|-------------|
| orchestrate | `orchestrate.md` | Parallel subagents + Review Loop |
| work | `work.md` | Step-by-step with remediation loop |
| ultrawork | `ultrawork.md` | 5-Phase Gate Loop (11 reviews) |
| plan | `plan.md` | PM task breakdown |
| brainstorm | `brainstorm.md` | Design-first ideation |
| review | `review.md` | QA audit |
| debug | `debug.md` | Root cause + minimal fix |
| scm | `scm.md` | SCM + Git operations + Conventional Commits |

To execute: read and follow `.agents/workflows/{name}.md` step by step.

## Auto-Detection

Hooks: `UserPromptSubmit` (keyword detection), `PreToolUse`, `Stop` (persistent mode)
Keywords defined in `.agents/hooks/core/triggers.json` (multi-language).
Persistent workflows (orchestrate, ultrawork, work) block termination until complete.
Deactivate: say "workflow done".

## Rules

1. **Do not modify `.agents/` files** — SSOT protection
2. Workflows execute via keyword detection or explicit naming — never self-initiated
3. Response language follows `.agents/oma-config.yaml`

## Project Rules

Read the relevant file from `.agents/rules/` when working on matching code.

| Rule | File | Scope |
|------|------|-------|
| backend | `.agents/rules/backend.md` | on request |
| commit | `.agents/rules/commit.md` | on request |
| database | `.agents/rules/database.md` | **/*.{sql,prisma} |
| debug | `.agents/rules/debug.md` | on request |
| design | `.agents/rules/design.md` | on request |
| dev-workflow | `.agents/rules/dev-workflow.md` | on request |
| frontend | `.agents/rules/frontend.md` | **/*.{tsx,jsx,css,scss} |
| i18n-guide | `.agents/rules/i18n-guide.md` | always |
| infrastructure | `.agents/rules/infrastructure.md` | **/*.{tf,tfvars,hcl} |
| mobile | `.agents/rules/mobile.md` | **/*.{dart,swift,kt} |
| quality | `.agents/rules/quality.md` | on request |

<!-- OMA:END -->
