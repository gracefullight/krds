import type { Components } from "@mui/material";

declare module "@mui/material/Radio" {}

export const MuiRadio: Components["MuiRadio"] = {
  defaultProps: {},
  styleOverrides: {
    root: {},
  },
};
