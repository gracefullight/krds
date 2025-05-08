# @gracefullight/krds

The official MUI (Material UI) theme and component library for the Korea Design System, based on the official guidelines. It provides consistent design, accessibility support, and a fast development experience for React applications.

## Key Features

- **Official KRDS Design**: Implements the Korea Design System as-is.
- **MUI Compatible**: Works with MUI v7+ and React v19+.
- **Rich Component Library**: Includes common components like Alert, Button, Table, and composite components.
- **Design Tokens & Utilities**: Provides color, typography tokens, and helper functions.
- **Easy Theme Application**: Apply the theme to your entire app with MUI's ThemeProvider.

## Minimum Requirements

- MUI >= 7
- React >= 19

## Getting Started

### 1. Install the Package

```bash
pnpm install @gracefullight/krds
```

### 2. Apply the Theme

```tsx
import type { PropsWithChildren } from "react";

import { createKrdsTheme } from "@gracefullight/krds";
import { ThemeProvider } from "@mui/material/styles";

export default function MuiProvider({ children }: PropsWithChildren) {
  const krdsTheme = createKrdsTheme();

  return <ThemeProvider theme={krdsTheme}>{children}</ThemeProvider>;
}
```

> **Note:** If you need type definitions, add:

```ts
/// <reference types="@gracefullight/krds" />
```

## Usage Example

```tsx
import { Button } from "@mui/material";
import { CriticalAlerts } from "@gracefullight/krds/components";
```

Refer to the [official documentation](https://www.krds.go.kr/) or [Storybook](https://krds.gracefullight.dev) for more components and usage.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for the detailed release history.
