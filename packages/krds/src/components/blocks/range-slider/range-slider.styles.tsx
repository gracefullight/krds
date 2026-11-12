import { getPalette, getTypography } from "@gracefullight/krds-tokens";
import { Box, styled } from "@mui/material";

export const RangeSliderGroup = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const RangeSliderLabelRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.8rem",
});

export const RangeSliderLabel = styled("label")(({ theme }) => ({
  ...getTypography("pc.label.medium"),
  color: getPalette("text.basic"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.label.medium"),
  },
}));

export const RangeSliderValue = styled("output")(({ theme }) => ({
  ...getTypography("pc.label.medium"),
  fontWeight: 700,
  color: getPalette("text.primary"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.label.medium"),
  },
}));

export const RangeSliderBounds = styled(Box)(({ theme }) => ({
  ...getTypography("pc.label.small"),
  display: "flex",
  justifyContent: "space-between",
  color: getPalette("text.subtle"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.label.small"),
  },
}));
