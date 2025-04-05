import type { Components } from "@mui/material";

declare module "@mui/material/Badge" {}

export const MuiBadge: Components["MuiBadge"] = {
  defaultProps: {},
  styleOverrides: {
    root: {},
  },
};
