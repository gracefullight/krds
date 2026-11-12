import {
  getPalette,
  getRadius,
  getShadow,
  getTypography,
} from "@gracefullight/krds-tokens";
import { Box, IconButton, styled } from "@mui/material";

export const ContextualHelpTrigger = styled(IconButton)({
  width: 32,
  height: 32,
  color: getPalette("icon.gray"),

  "&:hover": {
    backgroundColor: getPalette("surface.gray-subtler"),
  },
});

export const ContextualHelpContainer = styled(Box)({
  width: 320,
  maxWidth: "calc(100vw - 3.2rem)",
  padding: "1.6rem",
  borderRadius: getRadius("large1"),
  boxShadow: getShadow(3),
  backgroundColor: getPalette("surface.white"),
});

export const ContextualHelpHeader = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "0.8rem",
});

export const ContextualHelpTitle = styled("div")(({ theme }) => ({
  ...getTypography("pc.heading.xsmall"),
  color: getPalette("text.basic"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.heading.xsmall"),
  },
}));

export const ContextualHelpClose = styled(IconButton)({
  width: 28,
  height: 28,
  flexShrink: 0,
  color: getPalette("icon.gray"),
});

export const ContextualHelpBody = styled(Box)(({ theme }) => ({
  ...getTypography("pc.body.small"),
  marginTop: "0.8rem",
  color: getPalette("text.subtle"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.small"),
  },
}));
