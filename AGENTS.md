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
