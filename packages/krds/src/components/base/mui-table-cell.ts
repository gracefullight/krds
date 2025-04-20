import { type Components, tableCellClasses } from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";

declare module "@mui/material/TableCell" {}

export const MuiTableCell: Components["MuiTableCell"] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      [`&.${tableCellClasses.head}`]: {
        borderBottom: `1px solid ${getPalette("border.secondary-light")}`,
        color: getPalette("text.bolder"),
        padding: "8px 16px",
      },

      [`&.${tableCellClasses.body}`]: {
        borderBottom: `1px solid ${getPalette("divider.gray-light")}`,
        color: getPalette("text.subtle"),
        padding: "12px 16px",
      },
    },
  },
};
