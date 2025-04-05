import type { Components } from "@mui/material";

declare module "@mui/material/Menu" {}

export const MuiMenu: Components["MuiMenu"] = {
  defaultProps: {},
  styleOverrides: {
    root: {},
  },
};
