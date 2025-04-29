# @gracefullight/krds

**@gracefullight/krds**는 [Korea Design System](https://www.krds.go.kr/)의 공식 가이드라인을 기반으로 한 MUI(Material-UI) 테마 및 컴포넌트 모음입니다. 일관된 디자인, 접근성, 그리고 빠른 개발을 지원하며, React 프로젝트에서 손쉽게 대한민국 정부 디자인 시스템을 적용할 수 있습니다.

## 주요 특징

- **KRDS 공식 디자인 반영**: 대한민국 정부 디자인 시스템을 그대로 제공합니다.
- **MUI 호환**: MUI v7 이상과 React v19 이상에서 동작합니다.
- **다양한 컴포넌트**: Alert, Button, Table 등 자주 쓰이는 UI 컴포넌트와 조합 컴포넌트 제공
- **디자인 토큰/헬퍼**: 색상, 타이포그래피 등 디자인 토큰과 유틸리티 함수 포함
- **간편한 테마 적용**: ThemeProvider로 전체 앱에 손쉽게 테마 적용 가능

## 최소 지원 버전

- mui >= 7
- react >= 19

## 시작하기

### 1. 패키지 설치

```bash
pnpm install @gracefullight/krds
```

### 2. 테마 적용

아래 예시처럼 ThemeProvider에 KRDS 테마를 적용하세요.

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

> **참고:** 타입 지원이 필요하다면 아래를 추가하세요.

```ts
/// <reference types="@gracefullight/krds" />
```

## 사용 예시

KRDS 테마가 적용된 MUI 컴포넌트와 KRDS 전용 컴포넌트를 함께 사용할 수 있습니다.

```tsx
import { Button } from "@mui/material";
import { CriticalAlerts } from "@gracefullight/krds/components";
```

- 더 많은 컴포넌트와 사용법은 [공식 문서](https://www.krds.go.kr/) 또는 [Storybook](https://krds.gracefullight.dev)을 참고하세요.

## 변경 이력

- [x] 조합 컴포넌트 추가: 0.10.0
  - chip
  - chip-group
  - masthead
  - skip-link
  - splash-screen
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
