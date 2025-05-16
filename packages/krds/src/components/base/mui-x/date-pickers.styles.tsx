import type {
  BoxProps,
  ButtonProps,
  DialogActionsProps,
  IconButtonProps,
} from "@mui/material";
import type { ComponentType } from "react";

import {
  getPalette,
  getRadius,
  getTypography,
} from "@gracefullight/krds-tokens";
import {
  Box,
  Button,
  DialogActions,
  IconButton,
  buttonClasses,
  styled,
} from "@mui/material";

export const HeaderContainer: ComponentType<BoxProps> = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 24px",
  width: "100%",
});

export const HeaderButtonsContainer: ComponentType<BoxProps> = styled(Box)({
  display: "flex",
  gap: "8px",
});

export const SelectorButton: ComponentType<ButtonProps> = styled(Button)(
  ({ theme }) => ({
    ...getTypography("pc.heading.small"),
    [theme.breakpoints.down("medium")]: {
      ...getTypography("mobile.heading.small"),
    },

    color: getPalette("text.basic"),
    minWidth: "auto",
    textTransform: "none",

    [`& .${buttonClasses.endIcon} svg`]: {
      color: getPalette("icon.gray"),
      width: "16px",
      height: "16px",
    },
  }),
);

export const MonthIconButton: ComponentType<IconButtonProps> = styled(
  IconButton,
)({
  border: `0.8px solid ${getPalette("border.gray-light")}`,
  borderRadius: getRadius("max"),

  "& svg": {
    color: getPalette("icon.gray"),
    width: "19.2px",
    height: "19.2px",
  },
});

export const ActionBarContainer: ComponentType<DialogActionsProps> = styled(
  DialogActions,
)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

export const ActionButtonsContainer: ComponentType<BoxProps> = styled(Box)({
  display: "flex",
  gap: "8px",
});

export const ActionButton: ComponentType<ButtonProps> = styled(Button)({
  minWidth: "64px",
});
