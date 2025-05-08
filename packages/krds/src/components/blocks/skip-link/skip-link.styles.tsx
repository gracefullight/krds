import type { BoxProps } from "@mui/material";
import type { ComponentType } from "react";

import { getPalette, getTypography } from "@gracefullight/krds-tokens";
import { Box, styled } from "@mui/material";

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
