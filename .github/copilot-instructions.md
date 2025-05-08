# GitHub Copilot Instructions for KRDS Project

## Project Overview

KRDS is a monorepo project using pnpm workspaces with the following structure:
- `apps/`: Contains application projects
  - `sample/`: A Next.js application
  - `storybook/`: A storybook instance for component documentation
- `packages/`: Contains shared libraries
  - `krds/`: Main package with component library
  - `krds-tokens/`: Design tokens package with colors, typography, and other design system primitives

## Technology Stack

- **Package Manager**: pnpm with workspaces
- **Build System**: Turbo
- **Code Quality**: Biome for linting and formatting
- **Testing**: Vitest
- **UI Components**: React-based component library
- **Frameworks**: Next.js
- **Component Build**: tsup for building the component library
- **Code Generation**: Turbo generators for scaffolding new components and features

## Development Conventions

### Code Style

- Follow the Biome formatting rules
- Use TypeScript for type safety
- Ensure all code is properly typed - type errors must be fixed, not ignored
- Never use the `any` or `unknown` types - use proper type definitions and generics instead
- Component naming should use PascalCase
- Utility functions should use camelCase
- Use es-toolkit library exclusively for utility functions - do not use lodash or implement custom utility functions
- When creating utility types, prioritize using types from the type-fest library instead of creating custom ones
- String conventions:
  - Always use double quotes (`"`) for strings, including in import statements
  - Use template literals only when they contain variables
  - Examples:
    ```typescript
    // Correct
    import React from "react";
    const name = "Button";
    const greeting = `Hello, ${name}`;
    
    // Incorrect
    import React from 'react';
    const name = 'Button';
    const greeting = `Hello, Button`;  // Should use double quotes instead
    ```
- Import conventions:
  - Type imports (`import type`) should be grouped at the top
  - Regular imports should follow after a blank line
  - Always use path aliases defined in tsconfig.json instead of relative paths
  - Import aliases vary by directory:
    - In `apps/` directories: Use `@/` prefix
    - In `packages/` directories: Use `#/` prefix
  - Example for packages:
    ```typescript
    import type { ButtonProps } from "#/components/Button/Button.types";
    import type { ThemeType } from "#/types";
    
    import { styled } from "@mui/material";
    import { isEmpty, isNil } from "es-toolkit";
    import { Typography } from "#/components/Typography";
    ```
  - Example for apps:
    ```typescript
    import type { PageProps } from "@/types";
    import type { UserData } from "@/features/user/types";
    
    import { styled } from "@mui/material";
    import { groupBy, uniq } from "es-toolkit";
    import { Header } from "@/components/Header";
    ```

### Comment Style

- Write all comments in English
- Follow Better Comments VSCode extension style:
  - `// !` for alerts and warnings (red)
  - `// ?` for questions and queries (blue)
  - `// TODO` for todos (orange)
  - `// *` for highlights (green)
  - `//` for regular comments (gray)
- Always place comments on the line above the code they refer to, not inline
- Example:
  ```typescript
  // ! This function has a performance issue that needs to be fixed
  function expensiveOperation() {
    // * This calculation is the core functionality
    const result = heavyCalculation();
    
    // ? Should we add caching here?
    return result;
  }
  
  // TODO: Implement error handling
  function processData(data: unknown) {
    return data;
  }
  ```

### File Structure

- Component files should be structured logically:
  - Each component in its own directory with related files
  - Index files for clean exports
  - Keep styles close to components
- File naming conventions:
  - Use kebab-case for file names with appropriate suffixes based on file type:
    - React components: `component-name.tsx`
    - Stories: `component-name.stories.tsx`
    - Types: `component-name.types.ts`
    - Tests: `component-name.test.tsx`
    - Styles: `component-name.styles.ts`
  - Component directories: Use PascalCase (matching the component name)
  - Configuration files: Use the standard convention for each tool (e.g., `tsconfig.json`, `biome.json`)
  - No strict rule for other file naming, but maintain consistency within each directory

### Git Workflow

- Use conventional commits (follows @commitlint/config-conventional)
  - Format: `type(scope): subject`
  - Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
  - Example: `feat(button): add disabled state styling`

### Testing

- Write tests using Vitest
- Component tests should focus on functionality and accessibility
- Aim for good test coverage of core components

### Component Development

- Each component should have a corresponding story in the storybook app
- Components should be exported from the main library entry point (packages/krds/src/index.ts)
- Components should follow accessibility guidelines (WCAG 2.1 AA standards)
- Build components using tsup configuration (packages/krds/tsup.config.ts)

## Common Commands

- `pnpm dev`: Run development servers for all packages
- `pnpm test`: Run tests
- `pnpm build`: Build all packages
- `turbo run build --filter=./packages/*`: Build only packages
- `turbo gen token`: Generate new design tokens using the built-in generator

## Best Practices

1. **Components**
   - Follow atomic design principles
   - Include proper accessibility attributes
   - Document props using TypeScript interfaces/types

2. **State Management**
   - Use React hooks for local state
   - Consider Jotai for global state when needed

3. **Performance**
   - Keep component renders efficient
   - Memoize expensive calculations
   - Lazy load components when appropriate

4. **Documentation**
   - Document components in Storybook
   - Include usage examples
   - Document props and their default values

## Release Process

Changes are tracked using Changesets:
1. Create a changeset describing your changes
2. Submit a PR with your changes and the changeset
3. When merged to main, a release PR will be created
4. Once the release PR is merged, packages will be published

## Troubleshooting

- If encountering dependency issues, try `pnpm install --force`
- For build issues, check Turbo cache with `turbo clean`
- Run specific commands for a single package using filters: `pnpm --filter=package-name command`