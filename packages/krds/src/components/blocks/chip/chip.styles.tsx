import type { BoxProps, ButtonBaseProps } from "@mui/material";
import type { ComponentType } from "react";
import type { ChipStyleProps } from "#/components/blocks/chip/chip.types";

import {
  getPalette,
  getRadius,
  getTypography,
} from "@gracefullight/krds-tokens";
import { Box, ButtonBase, styled, svgIconClasses } from "@mui/material";

type ChipBaseProps = ButtonBaseProps & ChipStyleProps;

export const ChipBase: ComponentType<ChipBaseProps> = styled(ButtonBase, {
  shouldForwardProp: (prop) =>
    !["disabled", "selected", "multiple", "size"].includes(prop as string),
})<ChipStyleProps>(({ disabled, selected, size, theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: getPalette("action.white"),
  border: `1px solid ${getPalette("border.gray")}`,
  borderRadius: getRadius("medium2"),
  color: getPalette("text.basic"),
  cursor: "pointer",
  userSelect: "none",
  whiteSpace: "nowrap",

  [`.${svgIconClasses.root}`]: {
    color: getPalette("element.disabled-dark"),
  },

  // * size
  ...(size === "small" && {
    ...getTypography("pc.label.small"),
    [theme.breakpoints.down("medium")]: {
      ...getTypography("mobile.label.small"),
    },

    padding: "8.5px 10px",
  }),

  ...((size === "medium" || !size) && {
    ...getTypography("pc.label.medium"),
    [theme.breakpoints.down("medium")]: {
      ...getTypography("mobile.label.medium"),
    },

    padding: "11px 12px",
  }),

  ...(size === "large" && {
    ...getTypography("pc.label.large"),
    [theme.breakpoints.down("medium")]: {
      ...getTypography("mobile.label.large"),
    },

    padding: "13.5px 16px",
  }),

  // * selected
  ...(selected && {
    borderColor: getPalette("border.primary"),
    backgroundColor: getPalette("action.primary-selected"),
    color: getPalette("text.primary"),

    [`.${svgIconClasses.root}`]: {
      color: getPalette("icon.primary"),
    },
  }),

  // * disabled
  ...(disabled && {
    backgroundColor: getPalette("action.disabled"),
    borderColor: getPalette("border.disabled"),
    color: getPalette("text.disabled-on"),
    cursor: "default",

    [`.${svgIconClasses.root}`]: {
      color: getPalette("icon.disabled-on"),
    },
  }),
}));

export const ChipGroup: ComponentType<BoxProps> = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: "4px",
});
