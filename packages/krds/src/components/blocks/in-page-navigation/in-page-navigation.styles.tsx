import { getPalette, getTypography } from "@gracefullight/krds-tokens";
import { styled } from "@mui/material";

export const InPageNavigationRoot = styled("nav")<{
  sticky?: boolean;
  stickyTop?: number;
}>(({ sticky, stickyTop = 0 }) => ({
  backgroundColor: getPalette("surface.white"),
  borderLeft: `2px solid ${getPalette("border.gray-light")}`,
  ...(sticky && {
    position: "sticky",
    top: stickyTop,
  }),
}));

export const InPageNavigationList = styled("ol")({
  listStyle: "none",
  margin: 0,
  padding: 0,
});

export const InPageNavigationItem = styled("li")({
  display: "flex",
});

export const InPageNavigationLink = styled("a")<{ active?: boolean }>(
  ({ theme, active }) => ({
    ...getTypography("pc.body.small"),
    borderLeft: "2px solid transparent",
    color: active ? getPalette("text.primary") : getPalette("text.subtle"),
    cursor: "pointer",
    display: "block",
    fontFamily: "inherit",
    fontWeight: active ? 600 : 400,
    marginLeft: "-2px",
    padding: "8px 16px",
    textDecoration: "none",
    transition: "color 150ms ease, border-color 150ms ease",
    width: "100%",

    ...(active && {
      borderLeftColor: getPalette("border.primary"),
    }),

    "&:hover": {
      backgroundColor: getPalette("action.secondary-hover"),
      color: getPalette("text.primary"),
    },

    "&:focus-visible": {
      outline: `2px solid ${getPalette("border.primary")}`,
      outlineOffset: "2px",
    },

    [theme.breakpoints.down("medium")]: {
      ...getTypography("mobile.body.small"),
    },
  }),
);
