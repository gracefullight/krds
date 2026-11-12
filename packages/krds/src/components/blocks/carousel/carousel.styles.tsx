import {
  getPalette,
  getRadius,
  getTypography,
} from "@gracefullight/krds-tokens";
import type { BoxProps } from "@mui/material";
import { Box, IconButton, styled } from "@mui/material";

export const CarouselContainer = styled(Box)<BoxProps>({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
});

export const CarouselViewport = styled(Box)({
  position: "relative",
  overflow: "hidden",
  borderRadius: getRadius("large1"),
  border: `1px solid ${getPalette("border.gray-light")}`,
  backgroundColor: getPalette("surface.white"),
});

export const CarouselSlide = styled(Box)({
  padding: "2.4rem",
});

export const CarouselControls = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.6rem",
});

export const CarouselNavButton = styled(IconButton)({
  width: 44,
  height: 44,
  borderRadius: getRadius("max"),
  border: `1px solid ${getPalette("border.gray-light")}`,
  backgroundColor: getPalette("surface.white"),
  color: getPalette("icon.gray"),

  "&:hover": {
    backgroundColor: getPalette("surface.gray-subtler"),
  },

  "&.Mui-disabled": {
    color: getPalette("icon.disabled"),
    borderColor: getPalette("border.disabled"),
  },
});

export const CarouselDots = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
});

export const CarouselDot = styled("button", {
  shouldForwardProp: (prop) => prop !== "$active",
})<{ $active: boolean }>(({ $active }) => ({
  width: $active ? 24 : 8,
  height: 8,
  padding: 0,
  border: "none",
  borderRadius: getRadius("max"),
  cursor: "pointer",
  backgroundColor: $active
    ? getPalette("element.primary")
    : getPalette("element.gray-light"),
  transition: "width 0.2s, background-color 0.2s",

  "&:focus-visible": {
    outline: `2px solid ${getPalette("border.primary")}`,
    outlineOffset: 2,
  },
}));

export const CarouselFraction = styled("span")(({ theme }) => ({
  ...getTypography("pc.label.medium"),
  color: getPalette("text.subtle"),
  minWidth: 48,
  textAlign: "center",

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.label.medium"),
  },
}));
