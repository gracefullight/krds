import type { Components } from "@mui/material";

declare module "@mui/material/TextField" {}

export const MuiTextField: Components["MuiTextField"] = {
  defaultProps: {},
  styleOverrides: {
    root: {},
  },
};
