import type { BoxProps, TypographyProps } from "@mui/material";
import type { AnchorHTMLAttributes } from "react";
import type { ComponentType } from "react";

import { getPalette, getTypography } from "@gracefullight/krds-tokens";
import { Box, Typography, styled } from "@mui/material";

export const FooterContainer: ComponentType<BoxProps> = styled(Box)(
  ({ theme }) => ({
    backgroundColor: getPalette("surface.inverse"),
    boxSizing: "border-box",
    paddingTop: "40px",
    paddingBottom: "40px",
    paddingLeft: "80px",
    paddingRight: "80px",
    width: "100%",

    [theme.breakpoints.down("medium")]: {
      paddingTop: "24px",
      paddingBottom: "24px",
      paddingLeft: "16px",
      paddingRight: "16px",
    },
  }),
);

export const FooterTopRow: ComponentType<BoxProps> = styled(Box)(
  ({ theme }) => ({
    alignItems: "flex-start",
    borderBottom: `1px solid ${getPalette("divider.gray-dark")}`,
    display: "flex",
    flexDirection: "row",
    gap: "40px",
    justifyContent: "space-between",
    paddingBottom: "24px",

    [theme.breakpoints.down("medium")]: {
      flexDirection: "column",
      gap: "16px",
      paddingBottom: "16px",
    },
  }),
);

export const FooterLogoArea: ComponentType<BoxProps> = styled(Box)({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  minWidth: "160px",
});

export const FooterOrgName: ComponentType<TypographyProps> = styled(Typography)(
  ({ theme }) => ({
    ...getTypography("pc.heading.xsmall"),
    color: getPalette("text.bolder-inverse"),

    [theme.breakpoints.down("medium")]: {
      ...getTypography("mobile.heading.xsmall"),
    },
  }),
);

export const FooterLinksRow: ComponentType<BoxProps> = styled(Box)(
  ({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "0",
    listStyle: "none",
    margin: 0,
    padding: 0,

    [theme.breakpoints.down("medium")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  }),
);

export const FooterLinkItem: ComponentType<BoxProps> = styled(Box)(
  ({ theme }) => ({
    alignItems: "center",
    display: "flex",

    "& + &::before": {
      color: getPalette("text.subtle-inverse"),
      content: '"|"',
      display: "inline-block",
      paddingLeft: "12px",
      paddingRight: "12px",
    },

    [theme.breakpoints.down("medium")]: {
      "& + &::before": {
        display: "none",
      },
    },
  }),
);

export const FooterLinkAnchor: ComponentType<
  AnchorHTMLAttributes<HTMLAnchorElement> & { isBold?: boolean }
> = styled("a")<{ isBold?: boolean }>(({ isBold, theme }) => ({
  ...getTypography(isBold ? "pc.body.small-bold" : "pc.body.small"),
  color: getPalette("text.basic-inverse"),
  cursor: "pointer",
  textDecoration: "none",

  "&:hover": {
    color: getPalette("text.bolder-inverse"),
    textDecoration: "underline",
  },

  "&:focus-visible": {
    outline: `2px solid ${getPalette("border.primary")}`,
    outlineOffset: "2px",
    borderRadius: "2px",
  },

  [theme.breakpoints.down("medium")]: {
    ...getTypography(isBold ? "mobile.body.small-bold" : "mobile.body.small"),
    paddingTop: "6px",
    paddingBottom: "6px",
  },
}));

export const FooterInfoArea: ComponentType<BoxProps> = styled(Box)(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    paddingTop: "24px",
    paddingBottom: "24px",

    [theme.breakpoints.down("medium")]: {
      paddingTop: "16px",
      paddingBottom: "16px",
    },
  }),
);

export const FooterInfoText: ComponentType<TypographyProps> = styled(
  Typography,
)(({ theme }) => ({
  ...getTypography("pc.body.small"),
  color: getPalette("text.subtle-inverse"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.xsmall"),
  },
}));

export const FooterInfoRow: ComponentType<BoxProps> = styled(Box)(
  ({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "16px",

    [theme.breakpoints.down("medium")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "4px",
    },
  }),
);

export const FooterBottomRow: ComponentType<BoxProps> = styled(Box)(
  ({ theme }) => ({
    alignItems: "center",
    borderTop: `1px solid ${getPalette("divider.gray-dark")}`,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "16px",
    justifyContent: "space-between",
    paddingTop: "24px",

    [theme.breakpoints.down("medium")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "12px",
      paddingTop: "16px",
    },
  }),
);

export const FooterCopyright: ComponentType<TypographyProps> = styled(
  Typography,
)(({ theme }) => ({
  ...getTypography("pc.body.xsmall"),
  color: getPalette("text.subtle-inverse"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.xsmall"),
  },
}));

export const FooterSocialsRow: ComponentType<BoxProps> = styled(Box)({
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  gap: "12px",
  listStyle: "none",
  margin: 0,
  padding: 0,
});

export const FooterSocialAnchor = styled("a")(({ theme }) => ({
  alignItems: "center",
  borderRadius: "4px",
  color: getPalette("icon.inverse"),
  display: "inline-flex",
  justifyContent: "center",
  textDecoration: "none",

  "& svg": {
    height: "24px",
    width: "24px",
  },

  "&:hover": {
    color: getPalette("text.bolder-inverse"),
  },

  "&:focus-visible": {
    outline: `2px solid ${getPalette("border.primary")}`,
    outlineOffset: "2px",
  },

  [theme.breakpoints.down("medium")]: {
    "& svg": {
      height: "20px",
      width: "20px",
    },
  },
}));
