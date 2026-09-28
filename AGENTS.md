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

Follow `.agents/skills/_shared/core/execution-policy.md` for authorization, clarification, verification, and completion. System/developer instructions and the user's request take precedence over OMA defaults. Never build, compile, bundle, or package software unless the user explicitly requests a build.

- **SSOT**: Do not modify `.agents/` definitions (skills, workflows, rules, agents, config) directly. Run outputs under `.agents/results/` and `.agents/state/` are generated artifacts and may be written.
- **Response language**: Follow `language` in `.agents/oma-config.yaml`.
- **Skills**: Read the relevant `.agents/skills/{name}/SKILL.md` when needed.
- **Subagents**:
  - claude: Same-vendor native dispatch via Claude Code Agent tool with `.claude/agents/{name}.md`; cross-vendor fallback via `oma agent spawn`
  - codex: Same-vendor native dispatch via Codex custom agents in `.codex/agents/{name}.toml`; cross-vendor fallback via `oma agent spawn`
  - cursor: `@agent-name` (defined in `.cursor/agents/`)
  - qwen: Same-vendor native dispatch via Qwen Code subagents in `.qwen/agents/{name}.md`; cross-vendor fallback via `oma agent spawn`
  - pi: pi has no native subagent API; use `oma agent spawn {agent} {prompt} {sessionId} --vendor pi` for CLI subprocess dispatch
- Write non-ASCII tool-call parameters as literal UTF-8, not Unicode escapes.

## Per-Agent Dispatch

Resolve each agent from `.agents/oma-config.cue` or `.agents/oma-config.yaml`, overlaid by `.agents/oma-config.local.cue` or `.agents/oma-config.local.yaml` when present. With `model_preset: free`, always use `oma agent spawn` so the subprocess receives the FreeLLMAPI route; `free.model` replaces per-agent model pins. Otherwise, explicit `agents:` overrides take priority. With `model_preset: auto`, follow the current vendor's native agent/model settings; use `default_cli` only when the runtime is unknown. Use native subagents when the target matches the current runtime; otherwise, or when native dispatch is unavailable, use `oma agent spawn`.

## Code Search

Serena MCP is required for code search and discovery. Load deferred tools before use. Use `find_file` for paths, `search_for_pattern` for content, and `find_symbol` / `get_symbols_overview` for symbols; the PreToolUse guard allows native searches confined to confirmed provider exclusions or paths outside this project. Use native search/read when Serena is unavailable, times out, or cannot search the requested path (prefix the shell command with `OMA_CI_ALLOW_NATIVE=1`), or for plain non-code content.

## Workflows

Run workflows only when explicitly requested or detected by a hook; never self-initiate. Read and follow `.agents/workflows/{name}.md`. Continue active workflows until complete or explicitly cancelled.

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
| i18n-arb | `.agents/rules/i18n-arb.md` | **/*.arb |
| i18n-guide | `.agents/rules/i18n-guide.md` | always |
| infrastructure | `.agents/rules/infrastructure.md` | **/*.{tf,tfvars,hcl} |
| market | `.agents/rules/market.md` | on request |
| mobile | `.agents/rules/mobile.md` | **/*.{dart,swift,kt} |
| quality | `.agents/rules/quality.md` | on request |

<!-- OMA:END -->
