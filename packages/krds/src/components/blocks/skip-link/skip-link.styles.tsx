import { getPalette, getTypography } from "@gracefullight/krds-tokens";
import type { BoxProps } from "@mui/material";
import { Box, styled } from "@mui/material";
import type { ComponentType } from "react";

export const SkipLink: ComponentType<BoxProps> = styled(Box)(({ theme }) => ({
  ...getTypography("pc.body.small"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.small"),
  },

  alignItems: "center",
  backgroundColor: getPalette("surface.inverse"),
  color: getPalette("text.bolder-inverse"),
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  paddingBottom: "4.5px",
  paddingTop: "4.5px",
  width: "100%",
}));
