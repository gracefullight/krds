import type { Components } from "@mui/material";

declare module "@mui/material/Dialog" {}

export const MuiDialog: Components["MuiDialog"] = {
  defaultProps: {},
  styleOverrides: {
    root: {},
  },
};
