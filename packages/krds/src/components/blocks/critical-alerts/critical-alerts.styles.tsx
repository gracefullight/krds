import type { BoxProps, TypographyProps } from "@mui/material";
import type { ComponentType } from "react";

import { getTypography } from "@gracefullight/krds-tokens";
import { getPalette } from "@gracefullight/krds-tokens";
import { getRadius } from "@gracefullight/krds-tokens";
import { Box, Typography, styled } from "@mui/material";

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

    "& svg": {
      width: "24px",
      height: "24px",
    },

    [theme.breakpoints.down("medium")]: {
      padding: "8px",

      "& svg": {
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

export const AlertTitle: ComponentType<TypographyProps> = styled(Typography)(
  ({ theme }) => ({
    ...getTypography("pc.heading.small"),
    color: getPalette("text.bolder"),

    [theme.breakpoints.down("medium")]: {
      ...getTypography("mobile.heading.small"),
    },
  }),
);

export const ButtonText: ComponentType<TypographyProps> = styled(Typography)(
  ({ theme }) => ({
    ...getTypography("pc.label.medium"),
    color: getPalette("text.basic"),

    [theme.breakpoints.down("medium")]: {
      display: "none",
    },
  }),
);
