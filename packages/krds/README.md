# @gracefullight/krds

- [Korea Design System](https://www.krds.go.kr/)의 Mui 테마 제공

## 최소 지원 버전

- mui >= 6
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

## TODO

- [x] 디자인 토큰 헬퍼 제공: 0.1.0
- [x] 초기화 스타일 제공: 0.1.1
- [x] Mui 테마 제공: 0.2.0
  - theme
  - button
  - typography
- [x] Mui 컴포넌트 추가: 0.3.0
  - link
  - tabs
