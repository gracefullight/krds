import {
  getPalette,
  getRadius,
  getShadow,
  getTypography,
} from "@gracefullight/krds-tokens";
import { Box, Button, styled } from "@mui/material";

// ? 스포트라이트 외곽선: 인접 배경과 명도 대비 3:1 이상
export const SPOTLIGHT_OUTLINE = `3px solid ${getPalette("border.primary")}`;

export const CoachMarkContainer = styled(Box)({
  width: 320,
  maxWidth: "calc(100vw - 3.2rem)",
  padding: "1.6rem",
  borderRadius: getRadius("large1"),
  boxShadow: getShadow(3),
  backgroundColor: getPalette("surface.white"),
});

export const CoachMarkTitle = styled("div")(({ theme }) => ({
  ...getTypography("pc.heading.xsmall"),
  color: getPalette("text.basic"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.heading.xsmall"),
  },
}));

export const CoachMarkDescription = styled(Box)(({ theme }) => ({
  ...getTypography("pc.body.small"),
  marginTop: "0.8rem",
  color: getPalette("text.subtle"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.small"),
  },
}));

export const CoachMarkFooter = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.8rem",
  marginTop: "1.6rem",
});

export const CoachMarkFraction = styled("span")(({ theme }) => ({
  ...getTypography("pc.label.small"),
  color: getPalette("text.subtle"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.label.small"),
  },
}));

export const CoachMarkActions = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
});

export const CoachMarkTextButton = styled(Button)({
  color: getPalette("text.subtle"),
  minWidth: 0,
  padding: "0.4rem 0.8rem",
});

export const CoachMarkGhostButton = styled(Button)({
  borderColor: getPalette("button.tertiary-border"),
  color: getPalette("text.basic"),
  minWidth: 0,
  padding: "0.4rem 1.2rem",
});
