import { getPalette, getTypography } from "@gracefullight/krds-tokens";
import { styled } from "@mui/material";

export const HeaderRoot = styled("header")(({ theme }) => ({
  backgroundColor: getPalette("surface.white"),
  borderBottom: `1px solid ${getPalette("border.gray-light")}`,
  position: "sticky",
  top: 0,
  width: "100%",
  zIndex: theme.zIndex.appBar,
}));

export const HeaderInner = styled("div")(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  margin: "0 auto",
  maxWidth: "1280px",
  minHeight: "80px",
  paddingLeft: "24px",
  paddingRight: "24px",

  [theme.breakpoints.down("medium")]: {
    minHeight: "56px",
    paddingLeft: "16px",
    paddingRight: "16px",
  },
}));

export const HeaderLogoArea = styled("a")({
  alignItems: "center",
  display: "flex",
  flexShrink: 0,
  textDecoration: "none",
});

export const HeaderLogoText = styled("span")(({ theme }) => ({
  ...getTypography("pc.heading.xsmall"),
  color: getPalette("text.bolder"),

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.heading.xsmall"),
  },
}));

export const HeaderNav = styled("nav")(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flex: 1,
  gap: "8px",
  justifyContent: "center",
  paddingLeft: "24px",
  paddingRight: "24px",

  [theme.breakpoints.down("medium")]: {
    display: "none",
  },
}));

const navItemStyles = (theme: import("@mui/material").Theme) => ({
  ...getTypography("pc.label.large"),
  background: "none",
  border: "none",
  borderRadius: "4px",
  color: getPalette("text.basic"),
  cursor: "pointer",
  padding: "8px 12px",
  textDecoration: "none",
  fontFamily: "inherit",

  "&:hover": {
    backgroundColor: getPalette("action.secondary-hover"),
    color: getPalette("text.primary"),
  },

  "&:focus-visible": {
    outline: `2px solid ${getPalette("border.primary")}`,
    outlineOffset: "2px",
  },

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.label.large"),
  },
});

export const HeaderNavLink = styled("a")(({ theme }) => navItemStyles(theme));
export const HeaderNavButton = styled("button")(({ theme }) =>
  navItemStyles(theme),
);

export const HeaderUtility = styled("div")(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexShrink: 0,
  gap: "8px",

  [theme.breakpoints.down("medium")]: {
    gap: "4px",
  },
}));

export const HeaderIconButton = styled("button")(({ theme }) => ({
  alignItems: "center",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "4px",
  color: getPalette("icon.gray"),
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  padding: "8px",

  "&:hover": {
    backgroundColor: getPalette("action.secondary-hover"),
  },

  "&:focus-visible": {
    outline: `2px solid ${getPalette("border.primary")}`,
    outlineOffset: "2px",
  },

  [theme.breakpoints.down("medium")]: {
    padding: "6px",
  },
}));

export const HeaderContactArea = styled("div")(({ theme }) => ({
  ...getTypography("pc.body.small"),
  alignItems: "center",
  color: getPalette("text.subtle"),
  display: "flex",
  gap: "16px",

  [theme.breakpoints.down("medium")]: {
    display: "none",
  },
}));

export const HeaderMobileMenuButton = styled("button")(({ theme }) => ({
  alignItems: "center",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "4px",
  color: getPalette("icon.gray"),
  cursor: "pointer",
  display: "none",
  justifyContent: "center",
  padding: "6px",

  "&:focus-visible": {
    outline: `2px solid ${getPalette("border.primary")}`,
    outlineOffset: "2px",
  },

  [theme.breakpoints.down("medium")]: {
    display: "flex",
  },
}));

export const HeaderMobileDrawer = styled("nav")(({ theme }) => ({
  backgroundColor: getPalette("surface.white"),
  borderTop: `1px solid ${getPalette("border.gray-light")}`,
  display: "none",
  flexDirection: "column",
  gap: "4px",
  padding: "16px",
  width: "100%",

  [theme.breakpoints.down("medium")]: {
    display: "flex",
  },
}));

const mobileNavItemStyles = (theme: import("@mui/material").Theme) => ({
  ...getTypography("mobile.label.large"),
  background: "none",
  border: "none",
  borderRadius: "4px",
  color: getPalette("text.basic"),
  cursor: "pointer",
  padding: "12px 16px",
  textAlign: "left" as const,
  textDecoration: "none",
  fontFamily: "inherit",

  "&:hover": {
    backgroundColor: getPalette("action.secondary-hover"),
    color: getPalette("text.primary"),
  },

  "&:focus-visible": {
    outline: `2px solid ${getPalette("border.primary")}`,
    outlineOffset: "2px",
  },

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.label.large"),
  },
});

export const HeaderMobileNavLink = styled("a")(({ theme }) =>
  mobileNavItemStyles(theme),
);
export const HeaderMobileNavButton = styled("button")(({ theme }) =>
  mobileNavItemStyles(theme),
);
