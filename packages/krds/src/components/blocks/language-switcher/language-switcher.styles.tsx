import { getPalette, getTypography } from "@gracefullight/krds-tokens";
import { Box, Link, styled } from "@mui/material";

export const LanguageSwitcherLink = styled(Link)(({ theme }) => ({
  ...getTypography("pc.label.medium"),
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4rem",
  color: getPalette("text.basic"),
  cursor: "pointer",

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.label.medium"),
  },
}));

export const LanguageSwitcherDropdown = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4rem",
  color: getPalette("icon.gray"),
});
