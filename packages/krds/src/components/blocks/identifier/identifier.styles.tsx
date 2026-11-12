import { getPalette, getTypography } from "@gracefullight/krds-tokens";
import { Box, Link, styled } from "@mui/material";

export const IdentifierSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
  padding: "3.2rem 2.4rem",
  borderTop: `1px solid ${getPalette("border.gray-light")}`,
  backgroundColor: getPalette("surface.white"),

  [theme.breakpoints.up("medium")]: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: "3.2rem",
    padding: "3.2rem 4rem",
  },
}));

export const IdentifierLogo = styled(Box)({
  flexShrink: 0,
  display: "flex",
  alignItems: "center",

  "& img": {
    display: "block",
    maxHeight: 48,
    width: "auto",
  },
});

export const IdentifierBody = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const IdentifierText = styled("p")(({ theme }) => ({
  ...getTypography("pc.body.medium"),
  margin: 0,
  color: getPalette("text.basic"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.medium"),
  },
}));

export const IdentifierMeta = styled("p")(({ theme }) => ({
  ...getTypography("pc.body.small"),
  margin: 0,
  color: getPalette("text.subtle"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.small"),
  },
}));

export const IdentifierLinks = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: "1.6rem",
  marginTop: "0.8rem",
});

export const IdentifierLink = styled(Link)(({ theme }) => ({
  ...getTypography("pc.body.small"),
  color: getPalette("text.subtle"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.small"),
  },
}));
