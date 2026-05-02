import {
  getPalette,
  getRadius,
  getShadow,
  getTypography,
} from "@gracefullight/krds-tokens";
import { styled } from "@mui/material";

/**
 * 음성지원 플로팅 컨테이너 — 화면 우측 하단에 고정
 */
export const VoiceAssistRoot = styled("div")({
  bottom: "96px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "8px",
  position: "fixed",
  right: "24px",
  zIndex: 1200,
});

/**
 * 메인 FAB 버튼 (음성 재생/일시정지 토글)
 */
export const VoiceAssistFab = styled("button")<{ $playing: boolean }>(
  ({ $playing }) => ({
    alignItems: "center",
    backgroundColor: $playing
      ? getPalette("action.primary-selected")
      : getPalette("action.white"),
    border: "none",
    borderRadius: getRadius("medium3"),
    boxShadow: getShadow(2),
    color: $playing ? getPalette("text.primary") : getPalette("text.basic"),
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    height: "64px",
    justifyContent: "center",
    outline: `1px solid ${getPalette("border.gray-light")}`,
    padding: "8px",
    width: "64px",

    "&:hover": {
      backgroundColor: $playing
        ? getPalette("action.primary-selected")
        : getPalette("action.secondary-hover"),
    },

    "&:active": {
      backgroundColor: getPalette("action.secondary-pressed"),
    },

    "&:focus-visible": {
      outline: `2px solid ${getPalette("border.primary")}`,
      outlineOffset: "2px",
    },

    "& svg": {
      color: $playing ? getPalette("icon.primary") : getPalette("icon.gray"),
      flexShrink: 0,
    },
  }),
);

export const VoiceAssistFabLabel = styled("span")(({ theme }) => ({
  ...getTypography("pc.label.small"),
  display: "block",
  lineHeight: 1,
  whiteSpace: "nowrap",

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.label.small"),
  },
}));

/**
 * 재생 중 표시되는 컨트롤 패널
 */
export const VoiceAssistPanel = styled("div")({
  alignItems: "center",
  backgroundColor: getPalette("surface.white"),
  border: `1px solid ${getPalette("border.gray-light")}`,
  borderRadius: getRadius("medium3"),
  boxShadow: getShadow(2),
  display: "flex",
  gap: "4px",
  padding: "8px 12px",
});

/**
 * 패널 내 아이콘 버튼 (정지, 속도 등)
 */
export const VoiceAssistIconButton = styled("button")({
  alignItems: "center",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: getRadius("small1"),
  color: getPalette("icon.gray"),
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  padding: "6px",

  "&:hover": {
    backgroundColor: getPalette("action.secondary-hover"),
    color: getPalette("icon.primary"),
  },

  "&:focus-visible": {
    outline: `2px solid ${getPalette("border.primary")}`,
    outlineOffset: "2px",
  },
});

/**
 * 속도 선택 드롭다운
 */
export const VoiceAssistSpeedSelect = styled("select")(({ theme }) => ({
  ...getTypography("pc.label.small"),
  appearance: "none",
  backgroundColor: "transparent",
  border: `1px solid ${getPalette("border.gray")}`,
  borderRadius: getRadius("xsmall2"),
  color: getPalette("text.basic"),
  cursor: "pointer",
  fontFamily: "inherit",
  padding: "4px 8px",
  textAlign: "center",

  "&:focus-visible": {
    outline: `2px solid ${getPalette("border.primary")}`,
    outlineOffset: "2px",
  },

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.label.small"),
  },
}));

/**
 * aria-live 영역 — 시각적으로 숨김, 스크린리더에만 노출
 */
export const VoiceAssistLiveRegion = styled("span")({
  border: 0,
  clip: "rect(0,0,0,0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
});
