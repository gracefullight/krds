import type { BoxProps } from "@mui/material";
import type { ComponentType } from "react";

import { Box, styled } from "@mui/material";
import { getTypography } from "#/design-tokens/typography";

export const SkipLink: ComponentType<BoxProps> = styled(Box)(({ theme }) => ({
  ...getTypography("pc.body.small"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.small"),
  },

  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  paddingTop: "4.5px",
  paddingBottom: "4.5px",
}));
