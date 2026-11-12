import { getPalette, getTypography } from "@gracefullight/krds-tokens";
import { Box, styled } from "@mui/material";
import type { TextListMarker } from "#/components/blocks/text-list/text-list.types";

const MARKER_MAP: Record<TextListMarker, string> = {
  disc: "disc",
  circle: "circle",
  square: "square",
  dash: "'– '",
  decimal: "decimal",
  "decimal-leading-zero": "decimal-leading-zero",
  "lower-alpha": "lower-alpha",
  "upper-alpha": "upper-alpha",
  "lower-roman": "lower-roman",
  "upper-roman": "upper-roman",
  none: "none",
};

export const TextListBase = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$marker",
})<{ $marker: TextListMarker }>(({ theme, $marker }) => ({
  ...getTypography("pc.body.medium"),
  margin: 0,
  paddingLeft: "2.4rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  color: getPalette("text.basic"),
  listStyleType: MARKER_MAP[$marker],

  "& li::marker": {
    color: getPalette("text.subtle"),
  },

  // ? 하위 목록은 들여쓰기로 계층을 구분 (3수준 이내 권장)
  "& ul, & ol": {
    marginTop: "0.8rem",
    paddingLeft: "2.4rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
  },

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.medium"),
  },
}));
