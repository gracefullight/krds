import type { BoxProps, FabProps } from "@mui/material";
import type { ComponentType } from "react";
import type { TopButtonStyleProps } from "#/components/blocks/top-button/top-button.types";

import { Box, Fab, styled } from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";
import { getShadow } from "#/design-tokens/shadow";
import { getTypography } from "#/design-tokens/typography";

export const TopButtonBase: ComponentType<FabProps & TopButtonStyleProps> =
  styled(Fab, {
    shouldForwardProp: (prop) => prop !== "showLabel",
  })<TopButtonStyleProps>(({ showLabel = false }) => ({
    backgroundColor: getPalette("action.white"),
    boxShadow: getShadow(2),
    color: getPalette("text.basic"),
    width: showLabel ? "64px" : "56px",
    height: showLabel ? "64px" : "56px",

    "&:hover": {
      backgroundColor: getPalette("action.secondary-hover"),
    },

    "&:active": {
      backgroundColor: getPalette("action.secondary-pressed"),
    },
  }));

export const TopButtonLabel: ComponentType<BoxProps> = styled(Box)(
  ({ theme }) => ({
    ...getTypography("pc.label.small"),

    [theme.breakpoints.down("medium")]: {
      ...getTypography("mobile.label.small"),
    },
  }),
);
