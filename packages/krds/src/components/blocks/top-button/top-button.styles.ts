import type { BoxProps } from "@mui/material";
import type { ComponentType } from "react";
import type { FabStyledProps } from "#/components/blocks/top-button/top-button.types";

import {
  getPalette,
  getRadius,
  getShadow,
  getTypography,
} from "@gracefullight/krds-tokens";
import { Box, Fab, styled } from "@mui/material";

export const TopButtonBase: ComponentType<FabStyledProps> = styled(Fab, {
  shouldForwardProp: (prop) => prop !== "$buttonType",
})<FabStyledProps>(({ $buttonType }) => ({
  backgroundColor: getPalette("action.white"),
  borderRadius: getRadius("medium3"),
  boxShadow: getShadow(2),
  color: getPalette("text.basic"),
  outline: `1px solid ${getPalette("border.gray-light")}`,
  width: $buttonType === "label" ? "64px" : "56px",
  height: $buttonType === "label" ? "64px" : "56px",

  "&:hover": {
    backgroundColor: getPalette("action.secondary-hover"),
  },

  "&:active": {
    backgroundColor: getPalette("action.secondary-pressed"),
  },

  "& svg": {
    color: getPalette("icon.gray"),
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
