import type { Components } from "@mui/material";

declare module "@mui/material/Switch" {}

export const MuiSwitch: Components["MuiSwitch"] = {
  defaultProps: {},
  styleOverrides: {
    root: {},
  },
};
