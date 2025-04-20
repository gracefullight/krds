import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

// ! getPalette 사용시 storybook에서 manager.ts 인식 오류
// * manager-bundle.js:318 [Storybook] One of your manager-entries failed:manager-bundle.js
// * TypeError: Cannot read properties of undefined (reading 'recentlyCreatedOwnerStacks')
const krdsTheme = create({
  base: "light",

  // 브랜딩
  brandTitle: "Korea Design System - MUI",
  brandUrl: "https://github.com/gracefullight/krds",

  // UI
  colorPrimary: "#256ef4",
  colorSecondary: "#063a74",

  // 앱 UI
  appBg: "#f4f5f6",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#cdd1d5",
  appBorderRadius: 8, // medium.3 값

  // 타이포그래피
  fontBase:
    '"Pretendard GOV Variable", "Pretendard GOV", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
  fontCode: "monospace",
  textColor: "#1e2124",
  textInverseColor: "#ffffff",
  textMutedColor: "#6d7882",

  // 사이드바 & 툴바
  barTextColor: "#464c53",
  barHoverColor: "#1c589c",
  barSelectedColor: "#063a74",
  barBg: "#ffffff",

  // 폼 컨트롤
  buttonBg: "#e6e8ea",
  buttonBorder: "#cdd1d5",
  booleanBg: "#e6e8ea",
  booleanSelectedBg: "#2563eb",
  inputBg: "#ffffff",
  inputBorder: "#b1b8be",
  inputTextColor: "#1e2124",
  inputBorderRadius: 8, // medium.3 값
});

addons.setConfig({
  theme: krdsTheme,
});
