import type { BoxProps } from "@mui/material";
import type { ComponentType } from "react";
import type { FabStyledProps } from "#/components/blocks/top-button/top-button.types";

import { Box, Fab, styled } from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";
import { getRadius } from "#/design-tokens/radius";
import { getShadow } from "#/design-tokens/shadow";
import { getTypography } from "#/design-tokens/typography";

export const TopButtonBase: ComponentType<FabStyledProps> = styled(Fab, {
  shouldForwardProp: (prop) => prop !== "type",
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
}));

export const TopButtonLabel: ComponentType<BoxProps> = styled(Box)(
  ({ theme }) => ({
    ...getTypography("pc.label.small"),

    [theme.breakpoints.down("medium")]: {
      ...getTypography("mobile.label.small"),
    },
  }),
);
