import type { DropdownPanelStyledProps } from "#/components/blocks/main-menu/main-menu.types";

import {
  getPalette,
  getShadow,
  getTypography,
} from "@gracefullight/krds-tokens";
import { styled } from "@mui/material";

/** 전체 내비게이션 컨테이너 */
export const NavContainer = styled("nav")(({ theme }) => ({
  backgroundColor: getPalette("surface.white"),
  borderBottom: `1px solid ${getPalette("border.gray-light")}`,
  position: "relative",
  zIndex: 100,

  [theme.breakpoints.down("medium")]: {
    borderBottom: "none",
  },
}));

/** 데스크톱 수평 메뉴 바 */
export const MenuBar = styled("ul")(({ theme }) => ({
  display: "flex",
  alignItems: "stretch",
  listStyle: "none",
  margin: 0,
  padding: 0,

  [theme.breakpoints.down("medium")]: {
    display: "none",
  },
}));

const topLevelItemStyles = (theme: import("@mui/material").Theme) => ({
  ...getTypography("pc.body.medium"),
  color: getPalette("text.basic"),
  padding: "16px 20px",
  position: "relative" as const,
  whiteSpace: "nowrap" as const,
  borderRadius: 0,
  background: "transparent",
  border: "none",
  cursor: "pointer",
  fontFamily: "inherit",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",

  "&:hover, &:focus-visible": {
    backgroundColor: getPalette("action.secondary-hover"),
    color: getPalette("text.secondary"),
    outline: "none",
  },

  "&[aria-expanded='true']": {
    backgroundColor: getPalette("action.secondary-active"),
    color: getPalette("text.bolder-inverse"),
  },

  "&:focus-visible": {
    outline: `2px solid ${getPalette("border.primary")}`,
    outlineOffset: "-2px",
  },

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.medium"),
  },
});

/** 각 최상위 메뉴 아이템 — 링크 */
export const TopLevelLink = styled("a")(({ theme }) =>
  topLevelItemStyles(theme),
);

/** 각 최상위 메뉴 아이템 — 버튼 */
export const TopLevelButton = styled("button")(({ theme }) =>
  topLevelItemStyles(theme),
);

/**
 * 드롭다운 패널
 *
 * v1.1.0 — 뷰포트 높이 aware max-height:
 * `max-height: calc(100dvh - <headerOffset>px)` + `overflow-y: auto`
 * 패널 콘텐츠가 화면을 넘어가더라도 항상 뷰포트 안에서 스크롤됩니다.
 */
export const DropdownPanel = styled("div", {
  shouldForwardProp: (prop) => prop !== "$headerOffset" && prop !== "$open",
})<DropdownPanelStyledProps>(({ $headerOffset, $open }) => ({
  backgroundColor: getPalette("surface.white"),
  borderTop: `1px solid ${getPalette("border.gray-light")}`,
  boxShadow: getShadow(2),
  left: 0,
  opacity: $open ? 1 : 0,
  overflowY: "auto",
  position: "absolute",
  right: 0,
  top: "100%",
  transform: $open ? "translateY(0)" : "translateY(-8px)",
  transition: "opacity 200ms ease, transform 200ms ease",
  visibility: $open ? "visible" : "hidden",
  pointerEvents: $open ? "auto" : "none",

  /**
   * v1.1.0: 뷰포트 높이에 따른 메뉴 영역 최대 높이
   * `100dvh` — dynamic viewport height (모바일 툴바 포함)
   * `$headerOffset` — 헤더 높이만큼 차감
   */
  maxHeight: `calc(100dvh - ${$headerOffset}px)`,
}));

/** 드롭다운 패널 내부 내용 컨테이너 */
export const DropdownInner = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  padding: "24px 40px",

  [theme.breakpoints.down("medium")]: {
    padding: "16px",
  },
}));

/** 드롭다운 내 카테고리 그룹 */
export const DropdownGroup = styled("div")({
  minWidth: "160px",
});

/** 드롭다운 카테고리 제목 */
export const DropdownGroupTitle = styled("div")(({ theme }) => ({
  ...getTypography("pc.body.medium-bold"),
  color: getPalette("text.secondary"),
  marginBottom: "8px",
  padding: "4px 8px",

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.medium-bold"),
  },
}));

/** 드롭다운 하위 링크 목록 */
export const DropdownList = styled("ul")({
  padding: 0,
  margin: 0,
  listStyle: "none",
});

const dropdownItemStyles = (theme: import("@mui/material").Theme) => ({
  ...getTypography("pc.body.small"),
  color: getPalette("text.basic"),
  borderRadius: "4px",
  padding: "6px 8px",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  fontFamily: "inherit",
  textDecoration: "none",
  display: "block",
  width: "100%",
  textAlign: "left" as const,

  "&:hover, &:focus-visible": {
    backgroundColor: getPalette("action.secondary-hover"),
    color: getPalette("text.secondary"),
    outline: "none",
  },

  "&:focus-visible": {
    outline: `2px solid ${getPalette("border.primary")}`,
    outlineOffset: "-2px",
  },

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.small"),
  },
});

/** 드롭다운 하위 링크 — 앵커 */
export const DropdownItemLink = styled("a")(({ theme }) =>
  dropdownItemStyles(theme),
);

/** 드롭다운 하위 링크 — 버튼 */
export const DropdownItemButton = styled("button")(({ theme }) =>
  dropdownItemStyles(theme),
);

/** 모바일 햄버거 버튼 */
export const HamburgerButton = styled("button")(({ theme }) => ({
  display: "none",
  cursor: "pointer",
  padding: "8px",
  borderRadius: "4px",
  alignItems: "center",
  justifyContent: "center",
  color: getPalette("text.basic"),
  background: "transparent",
  border: "none",
  fontFamily: "inherit",

  "&:hover": {
    backgroundColor: getPalette("action.secondary-hover"),
  },

  "&:focus-visible": {
    outline: `2px solid ${getPalette("border.primary")}`,
    outlineOffset: "2px",
  },

  [theme.breakpoints.down("medium")]: {
    display: "flex",
  },
}));

const drawerTopItemStyles = (theme: import("@mui/material").Theme) => ({
  ...getTypography("mobile.body.large-bold"),
  color: getPalette("text.basic"),
  padding: "14px 20px",
  borderBottom: `1px solid ${getPalette("border.gray-light")}`,
  background: "transparent",
  border: "none",
  borderBottomWidth: "1px",
  borderBottomStyle: "solid" as const,
  borderBottomColor: getPalette("border.gray-light"),
  cursor: "pointer",
  fontFamily: "inherit",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  width: "100%",
  textAlign: "left" as const,

  "&:focus-visible": {
    outline: `2px solid ${getPalette("border.primary")}`,
    outlineOffset: "-2px",
  },

  [theme.breakpoints.up("medium")]: {
    ...getTypography("pc.body.large-bold"),
  },
});

/** 모바일 드로어 내부 최상위 메뉴 항목 — 링크 */
export const DrawerTopLink = styled("a")(({ theme }) =>
  drawerTopItemStyles(theme),
);

/** 모바일 드로어 내부 최상위 메뉴 항목 — 버튼 */
export const DrawerTopButton = styled("button")(({ theme }) =>
  drawerTopItemStyles(theme),
);

const drawerSubItemStyles = (theme: import("@mui/material").Theme) => ({
  ...getTypography("mobile.body.medium"),
  color: getPalette("text.basic"),
  padding: "10px 32px",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  fontFamily: "inherit",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  width: "100%",
  textAlign: "left" as const,

  "&:hover": {
    backgroundColor: getPalette("action.secondary-hover"),
    color: getPalette("text.secondary"),
  },

  "&:focus-visible": {
    outline: `2px solid ${getPalette("border.primary")}`,
    outlineOffset: "-2px",
  },

  [theme.breakpoints.up("medium")]: {
    ...getTypography("pc.body.medium"),
  },
});

/** 모바일 드로어 하위 메뉴 항목 — 링크 */
export const DrawerSubLink = styled("a")(({ theme }) =>
  drawerSubItemStyles(theme),
);

/** 모바일 드로어 하위 메뉴 항목 — 버튼 */
export const DrawerSubButton = styled("button")(({ theme }) =>
  drawerSubItemStyles(theme),
);
