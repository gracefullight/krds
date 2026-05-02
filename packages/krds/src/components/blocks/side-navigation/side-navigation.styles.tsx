import type { SideNavItemStyledProps } from "#/components/blocks/side-navigation/side-navigation.types";

import { getPalette, getTypography } from "@gracefullight/krds-tokens";
import { styled } from "@mui/material";

/** 사이드 내비게이션 루트 nav */
export const SideNavRoot = styled("nav")({
  backgroundColor: getPalette("surface.white"),
  borderRight: `1px solid ${getPalette("border.gray-light")}`,
  boxSizing: "border-box",
  minWidth: "200px",
  width: "100%",
});

/** 최상위 ul 목록 */
export const SideNavList = styled("ul")({
  listStyle: "none",
  margin: 0,
  padding: "8px 0",
});

/** 하위 depth ul 목록 */
export const SideNavSubList = styled("ul")({
  listStyle: "none",
  margin: 0,
  padding: 0,
});

/** li 아이템 래퍼 */
export const SideNavListItem = styled("li")({
  margin: 0,
  padding: 0,
});

const itemBaseStyles = ({ $active, $depth = 0 }: SideNavItemStyledProps) => ({
  ...getTypography($depth === 0 ? "pc.body.medium" : "pc.body.small"),
  alignItems: "center",
  backgroundColor: $active
    ? getPalette("action.primary-selected")
    : "transparent",
  border: "none",
  borderLeft: $active
    ? `3px solid ${getPalette("border.primary")}`
    : "3px solid transparent",
  borderRadius: 0,
  boxSizing: "border-box" as const,
  color: $active ? getPalette("text.primary") : getPalette("text.basic"),
  cursor: "pointer",
  display: "flex",
  fontFamily: "inherit",
  justifyContent: "space-between",
  paddingBottom: $depth === 0 ? "10px" : "8px",
  paddingLeft: `${16 + $depth * 16}px`,
  paddingRight: "16px",
  paddingTop: $depth === 0 ? "10px" : "8px",
  textAlign: "left" as const,
  textDecoration: "none",
  width: "100%",

  "&:hover": {
    backgroundColor: $active
      ? getPalette("action.primary-selected")
      : getPalette("action.secondary-hover"),
    color: $active ? getPalette("text.primary") : getPalette("text.basic"),
  },

  "&:focus-visible": {
    outline: `2px solid ${getPalette("border.primary")}`,
    outlineOffset: "-2px",
  },
});

/** href가 있는 링크 아이템 */
export const SideNavLink = styled("a")<SideNavItemStyledProps>(
  ({ $active, $depth }) => itemBaseStyles({ $active, $depth }),
);

/** href 없는 버튼 아이템 (onClick 전용) */
export const SideNavButton = styled("button")<SideNavItemStyledProps>(
  ({ $active, $depth }) => itemBaseStyles({ $active, $depth }),
);

/** children이 있을 때 expand/collapse 토글 버튼 */
export const SideNavExpandButton = styled("button")<SideNavItemStyledProps>(
  ({ $active, $depth }) => ({
    ...itemBaseStyles({ $active, $depth }),
    // aria-expanded 상태는 JS로 제어
  }),
);

/** expand/collapse 아이콘 래퍼 */
export const SideNavExpandIcon = styled("span")<{ $expanded: boolean }>(
  ({ $expanded }) => ({
    alignItems: "center",
    display: "inline-flex",
    flexShrink: 0,
    marginLeft: "8px",
    transform: $expanded ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 200ms ease",
  }),
);

/** 하위 목록 래퍼 (collapse 애니메이션) */
export const SideNavCollapseWrapper = styled("div")<{ $expanded: boolean }>(
  ({ $expanded }) => ({
    overflow: "hidden",
    maxHeight: $expanded ? "9999px" : "0",
    transition: $expanded
      ? "max-height 300ms ease-in"
      : "max-height 200ms ease-out",
  }),
);

/** 최상위 항목 사이 구분선 */
export const SideNavDivider = styled("hr")({
  border: "none",
  borderTop: `1px solid ${getPalette("divider.gray-light")}`,
  margin: "4px 0",
});
