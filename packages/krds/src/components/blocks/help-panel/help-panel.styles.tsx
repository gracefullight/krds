import {
  getPalette,
  getRadius,
  getTypography,
} from "@gracefullight/krds-tokens";
import { styled } from "@mui/material";

/** 패널 오버레이 (배경 딤) */
export const HelpPanelOverlay = styled("div")<{ $open: boolean }>(
  ({ $open }) => ({
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    bottom: 0,
    left: 0,
    opacity: $open ? 1 : 0,
    pointerEvents: $open ? "auto" : "none",
    position: "fixed",
    right: 0,
    top: 0,
    transition: "opacity 200ms ease",
    zIndex: 1200,
  }),
);

/** 패널 루트 (aside — 오른쪽 슬라이드인) */
export const HelpPanelRoot = styled("aside")<{ $open: boolean }>(
  ({ theme, $open }) => ({
    backgroundColor: getPalette("surface.white"),
    bottom: 0,
    boxShadow: "-4px 0 24px rgba(0, 0, 0, 0.12)",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    maxWidth: "480px",
    overflowY: "auto",
    position: "fixed",
    right: 0,
    top: 0,
    transform: $open ? "translateX(0)" : "translateX(100%)",
    transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
    width: "100%",
    zIndex: 1201,

    [theme.breakpoints.down("medium")]: {
      maxWidth: "100%",
    },
  }),
);

/** 패널 헤더 영역 */
export const HelpPanelHeader = styled("div")(({ theme }) => ({
  alignItems: "center",
  borderBottom: `1px solid ${getPalette("border.gray-light")}`,
  display: "flex",
  flexShrink: 0,
  justifyContent: "space-between",
  padding: "20px 24px",

  [theme.breakpoints.down("medium")]: {
    padding: "16px",
  },
}));

/** 패널 제목 */
export const HelpPanelTitle = styled("h2")(({ theme }) => ({
  ...getTypography("pc.heading.small"),
  color: getPalette("text.bolder"),
  margin: 0,

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.heading.small"),
  },
}));

/** 닫기 버튼 */
export const HelpPanelCloseButton = styled("button")({
  alignItems: "center",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: getRadius("medium2"),
  color: getPalette("icon.gray"),
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  padding: "8px",

  "&:hover": {
    backgroundColor: getPalette("action.secondary-hover"),
  },

  "&:focus-visible": {
    outline: `2px solid ${getPalette("border.primary")}`,
    outlineOffset: "2px",
  },
});

/** 패널 본문 스크롤 영역 */
export const HelpPanelBody = styled("div")(({ theme }) => ({
  flex: 1,
  overflowY: "auto",
  padding: "24px",

  [theme.breakpoints.down("medium")]: {
    padding: "16px",
  },
}));

/** 튜토리얼 단계 이미지 */
export const TutorialStepImage = styled("img")({
  borderRadius: getRadius("medium4"),
  display: "block",
  height: "auto",
  marginBottom: "20px",
  objectFit: "cover",
  width: "100%",
});

/** 튜토리얼 단계 제목 */
export const TutorialStepTitle = styled("h3")(({ theme }) => ({
  ...getTypography("pc.heading.xsmall"),
  color: getPalette("text.bolder"),
  margin: "0 0 8px 0",

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.heading.xsmall"),
  },
}));

/** 튜토리얼 단계 설명 */
export const TutorialStepDescription = styled("p")(({ theme }) => ({
  ...getTypography("pc.body.medium"),
  color: getPalette("text.basic"),
  margin: 0,

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.medium"),
  },
}));

/** 튜토리얼 하단 내비게이션 영역 */
export const TutorialFooter = styled("div")(({ theme }) => ({
  alignItems: "center",
  borderTop: `1px solid ${getPalette("border.gray-light")}`,
  display: "flex",
  flexShrink: 0,
  gap: "12px",
  justifyContent: "space-between",
  padding: "16px 24px",

  [theme.breakpoints.down("medium")]: {
    padding: "12px 16px",
  },
}));

/** 튜토리얼 dot indicator 컨테이너 */
export const TutorialDots = styled("div")({
  alignItems: "center",
  display: "flex",
  gap: "8px",
});

/** 단일 dot */
export const TutorialDot = styled("span")<{ $active: boolean }>(
  ({ $active }) => ({
    backgroundColor: $active
      ? getPalette("element.primary")
      : getPalette("element.disabled-light"),
    borderRadius: "50%",
    display: "block",
    height: $active ? "10px" : "8px",
    transition:
      "background-color 200ms ease, height 200ms ease, width 200ms ease",
    width: $active ? "10px" : "8px",
  }),
);

/** 단계 카운터 텍스트 */
export const TutorialStepCounter = styled("span")(({ theme }) => ({
  ...getTypography("pc.body.small"),
  color: getPalette("text.subtle"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.small"),
  },
}));

/** 내비게이션 버튼 그룹 */
export const TutorialNavButtons = styled("div")({
  alignItems: "center",
  display: "flex",
  gap: "8px",
});

/** 이전/다음 버튼 */
export const TutorialNavButton = styled("button")<{
  $variant?: "primary" | "secondary";
}>(({ theme, $variant = "secondary" }) => ({
  ...getTypography("pc.label.medium"),
  alignItems: "center",
  backgroundColor:
    $variant === "primary"
      ? getPalette("action.primary")
      : getPalette("action.white"),
  border:
    $variant === "primary" ? "none" : `1px solid ${getPalette("border.gray")}`,
  borderRadius: getRadius("medium2"),
  color:
    $variant === "primary"
      ? getPalette("text.inverse-static")
      : getPalette("text.basic"),
  cursor: "pointer",
  display: "flex",
  fontFamily: "inherit",
  gap: "4px",
  justifyContent: "center",
  padding: "8px 16px",
  whiteSpace: "nowrap" as const,

  "&:hover": {
    backgroundColor:
      $variant === "primary"
        ? getPalette("action.primary-hover")
        : getPalette("action.secondary-hover"),
  },

  "&:focus-visible": {
    outline: `2px solid ${getPalette("border.primary")}`,
    outlineOffset: "2px",
  },

  "&:disabled": {
    backgroundColor:
      $variant === "primary"
        ? getPalette("action.disabled")
        : getPalette("action.white"),
    color: getPalette("text.disabled"),
    cursor: "not-allowed",
  },

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.label.medium"),
    fontFamily: "inherit",
    padding: "6px 12px",
  },
}));
