import type { Components } from "@mui/material";

declare module "@mui/material/CircularProgress" {}

export const MuiCircularProgress: Components["MuiCircularProgress"] = {
  defaultProps: {},
  styleOverrides: {
    root: {},
  },
};
