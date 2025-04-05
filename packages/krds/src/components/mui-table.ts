import type { Components } from "@mui/material";

declare module "@mui/material/Table" {}

export const MuiTable: Components["MuiTable"] = {
  defaultProps: {},
  styleOverrides: {
    root: {},
  },
};
