import type { BoxProps } from "@mui/material";
import type { ComponentType } from "react";

import { getPalette, getTypography } from "@gracefullight/krds-tokens";
import { Box, styled } from "@mui/material";

// ─── Default variant (dl/dt/dd) ─────────────────────────────────────────────

/**
 * Box wraps the dl so that sx prop works on the outermost element.
 * component="dl" renders as <dl> in the DOM.
 */
export const DefaultRoot: ComponentType<BoxProps> = styled(Box)(
  ({ theme }) => ({
    borderTop: `1px solid ${getPalette("border.gray")}`,
    margin: 0,
    padding: 0,
    width: "100%",

    [theme.breakpoints.down("medium")]: {
      borderTopWidth: "1px",
    },
  }),
);

export const DefaultRow = styled("div")(({ theme }) => ({
  borderBottom: `1px solid ${getPalette("divider.gray")}`,
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  padding: "16px 0",

  [theme.breakpoints.down("medium")]: {
    flexDirection: "column",
    gap: "4px",
    padding: "12px 0",
  },
}));

export const DefaultTerm = styled("dt")(({ theme }) => ({
  ...getTypography("pc.label.medium"),
  color: getPalette("text.subtle"),
  flexShrink: 0,
  minWidth: "160px",
  width: "160px",

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.label.small"),
    minWidth: "unset",
    width: "auto",
  },
}));

export const DefaultDetail = styled("dd")(({ theme }) => ({
  ...getTypography("pc.body.medium"),
  color: getPalette("text.bolder"),
  flex: 1,
  margin: 0,
  wordBreak: "break-word",

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.medium"),
  },
}));

// ─── Table variant ───────────────────────────────────────────────────────────

/**
 * Box wraps the table so that sx prop works on the outermost element.
 * Enables horizontal scroll on small viewports.
 */
export const TableWrapper: ComponentType<BoxProps> = styled(Box)(
  ({ theme }) => ({
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    width: "100%",

    [theme.breakpoints.down("medium")]: {
      overflowX: "auto",
    },
  }),
);

export const TableRoot = styled("table")({
  borderCollapse: "collapse",
  borderTop: `2px solid ${getPalette("border.gray-dark")}`,
  tableLayout: "fixed",
  width: "100%",
});

export const TableCaption = styled("caption")({
  captionSide: "top",
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  overflow: "hidden",
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
});

export const TableHead = styled("thead")({});

export const TableBody = styled("tbody")({});

export const TableHeadRow = styled("tr")({});

export const TableRow = styled("tr")({
  "&:not(:last-child)": {
    borderBottom: `1px solid ${getPalette("divider.gray")}`,
  },
});

export const TableHeaderCell = styled("th")(({ theme }) => ({
  ...getTypography("pc.label.medium"),
  backgroundColor: getPalette("surface.gray-subtler"),
  borderBottom: `1px solid ${getPalette("border.gray")}`,
  borderRight: `1px solid ${getPalette("divider.gray-light")}`,
  color: getPalette("text.subtle"),
  padding: "12px 16px",
  textAlign: "center",
  verticalAlign: "middle",
  whiteSpace: "nowrap",

  "&:last-child": {
    borderRight: "none",
  },

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.label.small"),
    padding: "10px 12px",
  },
}));

export const TableRowHeader = styled("th")(({ theme }) => ({
  ...getTypography("pc.label.medium"),
  backgroundColor: getPalette("surface.gray-subtler"),
  borderBottom: `1px solid ${getPalette("divider.gray")}`,
  borderRight: `1px solid ${getPalette("divider.gray-light")}`,
  color: getPalette("text.subtle"),
  padding: "12px 16px",
  textAlign: "left",
  verticalAlign: "middle",
  whiteSpace: "nowrap",
  width: "160px",

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.label.small"),
    padding: "10px 12px",
    width: "120px",
  },
}));

export const TableDataCell = styled("td")(({ theme }) => ({
  ...getTypography("pc.body.medium"),
  borderRight: `1px solid ${getPalette("divider.gray-light")}`,
  color: getPalette("text.bolder"),
  padding: "12px 16px",
  textAlign: "left",
  verticalAlign: "middle",
  wordBreak: "break-word",

  "&:last-child": {
    borderRight: "none",
  },

  [theme.breakpoints.down("medium")]: {
    ...getTypography("mobile.body.medium"),
    padding: "10px 12px",
  },
}));
