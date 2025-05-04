import type { BoxProps, StackProps, TypographyProps } from "@mui/material";
import type { ComponentType } from "react";
import type {
  InfoBoxSize,
  InfoBoxType,
} from "#/components/blocks/info-box/info-box.types";

import { Box, Stack, Typography, styled } from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";
import { getRadius } from "#/design-tokens/radius";
import { getTypography } from "#/design-tokens/typography";

export const InfoBoxContainer: ComponentType<
  StackProps & { type: InfoBoxType }
> = styled(Stack)<{
  type: InfoBoxType;
}>(({ type }) => {
  const isSecondary = type === "secondary";

  return {
    borderRadius: getRadius("xlarge2"),
    backgroundColor: getPalette(
      isSecondary ? "surface.gray-subtler" : "surface.secondary-subtler",
    ),
    outline: `1px solid ${getPalette(isSecondary ? "border.gray-light" : "border.secondary-light")}`,
    padding: "16px",
    gap: "12px",
  };
});

export const InfoBoxHeader: ComponentType<BoxProps & { type: InfoBoxType }> =
  styled(Box)<{
    type: InfoBoxType;
  }>(({ type }) => {
    const isSecondary = type === "secondary";

    return {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      color: getPalette(isSecondary ? "icon.gray" : "icon.secondary"),
    };
  });

export const InfoBoxTitleTypography: ComponentType<
  TypographyProps & {
    type: InfoBoxType;
  }
> = styled(Typography)<{
  type: InfoBoxType;
}>(({ type, theme }) => {
  const isSecondary = type === "secondary";

  return {
    color: getPalette(isSecondary ? "text.basic" : "text.secondary"),
    ...getTypography("pc.heading.xsmall"),

    [theme.breakpoints.down("medium")]: {
      ...getTypography("mobile.heading.xsmall"),
    },
  };
});

export const InfoBoxContentTypography: ComponentType<
  TypographyProps & {
    size: InfoBoxSize;
  }
> = styled(Typography)<{
  size: InfoBoxSize;
}>(({ size, theme }) => {
  const isDefault = size === "default";

  return {
    color: getPalette("text.subtle"),
    paddingLeft: isDefault ? "28px" : 0,

    ...getTypography("pc.body.small"),

    [theme.breakpoints.down("medium")]: {
      ...getTypography("mobile.body.small"),
    },
  };
});

export const InfoBoxDividerContainer: ComponentType<BoxProps> = styled(Box)({
  paddingLeft: "28px",
});

export const InfoBoxItemsContainer: ComponentType<StackProps> = styled(Stack)({
  gap: "8px",
  paddingLeft: "28px",
});

export const InfoBoxItemContainer: ComponentType<BoxProps> = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  color: getPalette("text.subtle"),
});

export const InfoBoxItemBullet: ComponentType<BoxProps> = styled(Box)({});

export const InfoBoxItemTypography: ComponentType<TypographyProps> = styled(
  Typography,
)(({ theme }) => ({
  color: getPalette("text.subtle"),
  ...getTypography("pc.body.small"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.small"),
  },
}));
