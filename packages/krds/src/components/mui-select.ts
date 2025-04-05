import type { Components } from "@mui/material";

declare module "@mui/material/Select" {}

export const MuiSelect: Components["MuiSelect"] = {
  defaultProps: {},
  styleOverrides: {
    root: {},
  },
};
