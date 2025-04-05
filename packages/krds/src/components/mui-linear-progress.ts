import type { Components } from "@mui/material";

declare module "@mui/material/LinearProgress" {}

export const MuiLinearProgress: Components["MuiLinearProgress"] = {
  defaultProps: {},
  styleOverrides: {
    root: {},
  },
};
