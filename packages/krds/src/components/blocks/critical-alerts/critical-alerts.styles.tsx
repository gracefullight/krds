import type { BoxProps, TypographyProps } from "@mui/material";
import type { ComponentType } from "react";

import { Box, Typography, styled, svgIconClasses } from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";
import { getRadius } from "#/design-tokens/radius";
import { getTypography } from "#/design-tokens/typography";

export const AlertContainer: ComponentType<BoxProps> = styled(Box)(
  ({ theme }) => ({
    alignItems: "center",
    backgroundColor: getPalette("surface.white-subtler"),
    borderRadius: getRadius("large2"),
    boxSizing: "border-box",
    display: "flex",
    width: "100%",
    outline: `1px solid ${getPalette("border.gray-light")}`,
    padding: "16px",

    [theme.breakpoints.down("medium")]: {
      padding: "12px",
      borderRadius: getRadius("medium4"),
    },
  }),
);

export const IconContainer: ComponentType<BoxProps> = styled(Box)(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "11px 10px",
    gap: "4px",
    borderRadius: getRadius("medium2"),
    marginRight: "16px",
    color: getPalette("text.inverse-static"),

    [`& .${svgIconClasses.root}`]: {
      width: "24px",
      height: "24px",
    },

    [theme.breakpoints.down("medium")]: {
      padding: "8px",

      [`& .${svgIconClasses.root}`]: {
        width: "20px",
        height: "20px",
      },
    },
  }),
);

export const IconLabel: ComponentType<BoxProps> = styled(Box)(({ theme }) => ({
  ...getTypography("pc.body.medium-bold"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.small-bold"),
  },
}));

export const ContentContainer: ComponentType<BoxProps> = styled(Box)({
  flex: 1,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "16px",
});

export const AlertTitle: ComponentType<TypographyProps> = styled(Typography)({
  color: getPalette("text.bolder"),
});

export const ButtonText: ComponentType<TypographyProps> = styled(Typography)(
  ({ theme }) => ({
    ...getTypography("pc.label.medium"),
    color: getPalette("text.basic"),

    [theme.breakpoints.down("medium")]: {
      display: "none",
    },
  }),
);
