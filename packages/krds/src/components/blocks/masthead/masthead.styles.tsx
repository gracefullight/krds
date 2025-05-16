import type { BoxProps, TypographyProps } from "@mui/material";
import type { ComponentType } from "react";

import { getPalette, getTypography } from "@gracefullight/krds-tokens";
import { Box, Typography, styled } from "@mui/material";

export const MastheadContainer: ComponentType<BoxProps> = styled(Box)(
  ({ theme }) => ({
    alignItems: "center",
    backgroundColor: getPalette("surface.secondary-subtler"),
    display: "flex",
    gap: "8px",
    justifyContent: "flex-start",
    paddingBottom: "4.5px",
    paddingTop: "4.5px",

    [theme.breakpoints.down("medium")]: {
      paddingLeft: "16px",
      paddingRight: "16px",
    },

    svg: {
      width: "24px",
      height: "24px",
    },
  }),
);

export const MastheadText: ComponentType<TypographyProps> = styled(Typography)(
  ({ theme }) => ({
    ...getTypography("pc.body.small"),

    [theme.breakpoints.down("medium")]: {
      ...getTypography("mobile.body.small"),
    },
  }),
);
