# Repository Guidelines

## Project Structure & Module Organization
- Monorepo managed by `pnpm` workspaces and Turborepo.
- `apps/storybook`: Storybook for component docs; stories in `apps/storybook/stories`.
- `apps/sample`: Next.js sample app; code in `apps/sample/src`, assets in `apps/sample/public`.
- `packages/krds`: Core KRDS design system (TypeScript, React, MUI). Source in `packages/krds/src`, build output in `dist`.
- `packages/krds-icons`: React icon components. Source in `packages/krds-icons/src`, build output in `dist`.

## Build, Test, and Development Commands
- Root install: `pnpm install` (uses `pnpm@10`).
- Develop all (parallel): `pnpm dev` (Turbo runs each package’s `dev`).
- Build all: `pnpm build` (Turbo caches `dist`, `.next`, `storybook-static`).
- Test (watch/interactive): `pnpm test` — Vitest across `apps/*` and `packages/*`.
- Test (CI): `pnpm test:ci` — non-watch run.
- Per app/package examples:
  - Storybook: `pnpm -C apps/storybook dev` | `pnpm -C apps/storybook build`
  - Sample app: `pnpm -C apps/sample dev` | `pnpm -C apps/sample build`
  - Libraries: `pnpm -C packages/krds dev` | `pnpm -C packages/krds-icons dev` (tsup watch)

## Coding Style & Naming Conventions
- Language: TypeScript; React 19; MUI v7 peer deps in `packages/krds`.
- Formatter/Linter: Biome (`biome.json`). Spaces indentation; double quotes; organized imports; `kebab-case` filenames enforced.
- Pre-commit: lint-staged runs `biome check --fix`; `package.json` is normalized by `sort-package-json`.
- Do not edit `dist`; change files under `src` only.

## Testing Guidelines
- Framework: Vitest (`vitest.config.ts`; `passWithNoTests: true`).
- Location/Names: co-locate tests with code using `*.test.ts` or `*.test.tsx`.
- Run: `pnpm test` locally; add UI changes to Storybook stories in `apps/storybook/stories`.

## Commit & Pull Request Guidelines
- Commits: Conventional Commits enforced by commitlint (e.g., `feat:`, `fix:`, `docs:`, `chore:`).
- PRs should include: clear description, linked issues, screenshots/GIFs for UI, and notes on Storybook/story or test updates.
- Keep diffs minimal and focused; update docs and stories when introducing or changing components.

## Security & Configuration Tips
- Use `pnpm` consistently; avoid `npm`/`yarn` lockfiles.
- Never commit secrets; if needed for apps, use local `.env` files ignored by VCS.
- Publishing: root script `publish-packages` runs builds and Changesets; do not run it from forks.
