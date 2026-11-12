import {
  getPalette,
  getRadius,
  getTypography,
} from "@gracefullight/krds-tokens";
import type { BoxProps } from "@mui/material";
import { Box, IconButton, styled } from "@mui/material";

export const QuantityToggleGroup = styled(Box)<BoxProps>({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  border: "none",
  margin: 0,
  padding: 0,
  minWidth: 0,
});

export const QuantityToggleLabel = styled("legend")(({ theme }) => ({
  ...getTypography("pc.label.medium"),
  color: getPalette("text.basic"),
  padding: 0,

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.label.medium"),
  },
}));

export const QuantityToggleRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1.2rem",
});

export const QuantityToggleButton = styled(IconButton)({
  width: 44,
  height: 44,
  borderRadius: getRadius("medium2"),
  border: `1px solid ${getPalette("border.gray-light")}`,
  backgroundColor: getPalette("surface.white"),
  color: getPalette("icon.gray"),

  "&:hover": {
    backgroundColor: getPalette("surface.gray-subtler"),
  },

  "&.Mui-disabled": {
    backgroundColor: getPalette("surface.white"),
    color: getPalette("icon.disabled"),
    borderColor: getPalette("border.disabled"),
  },
});

export const QuantityToggleValue = styled("output")(({ theme }) => ({
  ...getTypography("pc.body.large"),
  minWidth: 64,
  padding: "0.8rem 1.6rem",
  textAlign: "center",
  borderRadius: getRadius("medium2"),
  border: `1px solid ${getPalette("border.gray-light")}`,
  backgroundColor: getPalette("input.surface"),
  color: getPalette("text.basic"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.large"),
  },
}));
