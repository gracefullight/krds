import type { Components } from "@mui/material";

declare module "@mui/material/Alert" {}

export const MuiAlert: Components["MuiAlert"] = {
  defaultProps: {},
  styleOverrides: {
    root: {},
  },
};
