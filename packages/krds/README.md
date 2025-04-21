# @gracefullight/krds

- [Korea Design System](https://www.krds.go.kr/)의 Mui 테마 제공

## 최소 지원 버전

- mui >= 7
- react >= 19

## 설치

```bash
pnpm install @gracefullight/krds
```

```ts
import type { PropsWithChildren } from "react";

import { createKrdsTheme } from "@gracefullight/krds";
import { ThemeProvider } from "@mui/material/styles";

const krdsTheme = createKrdsTheme();

export default function MuiProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={krdsTheme}>{children}</ThemeProvider>
  );
}
```

```ts
/// <reference types="@gracefullight/krds" />
```

## 사용

```tsx
import { Button } from "@mui/material";
import { CriticalAlerts } from "@gracefullight/krds/components";
```

## TODO

- [x] Mui 컴포넌트 추가, 조합 컴포넌트 추가: 0.9.0
  - critical-alerts
  - date-picker
  - tooltip
- [x] Mui 컴포넌트 추가: 0.8.0
  - stepper
  - switch
  - table
- [x] Mui 컴포넌트 추가: 0.7.0
  - menu
  - pagination
  - radio
  - select
- [x] Mui 컴포넌트 추가: 0.6.0
  - dialog
  - drawer
  - linear-progress
- [x] Mui 컴포넌트 추가: 0.5.0
  - checkbox
  - chip
  - circular-progress
- [x] Mui 컴포넌트 추가: 0.4.0
  - alert
  - badge
  - breadcrumbs
- [x] Mui 컴포넌트 추가: 0.3.0
  - link
  - tabs
- [x] Mui 테마 제공: 0.2.0
  - theme
  - button
  - typography
- [x] 초기화 스타일 제공: 0.1.1
- [x] 디자인 토큰 헬퍼 제공: 0.1.0
