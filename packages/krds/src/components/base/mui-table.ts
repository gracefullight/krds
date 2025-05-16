import type { Components } from "@mui/material";

declare module "@mui/material/Table" {
  interface TablePropsSizeOverrides {
    small: false;
  }
}

export const MuiTable: Components["MuiTable"] = {
  defaultProps: {},

  styleOverrides: {
    root: {},
  },
};
