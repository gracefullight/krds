import type { BoxProps, TypographyProps } from "@mui/material";
import type { ComponentType } from "react";

import { Box, Typography, styled } from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";

export const PaginationContainer: ComponentType<BoxProps> = styled(Box)({
  display: "flex",
  gap: "16px",
});

export const PaginationTextFieldContainer: ComponentType<BoxProps> = styled(
  Box,
)({
  display: "flex",
  alignItems: "center",
});

export const TotalPageTypography: ComponentType<TypographyProps> = styled(
  Typography,
)({
  color: getPalette("text.subtle"),
  marginLeft: "9px",
});
