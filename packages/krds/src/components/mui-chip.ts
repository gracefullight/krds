import type { Components } from "@mui/material";

declare module "@mui/material/Chip" {}

export const MuiChip: Components["MuiChip"] = {
  defaultProps: {},
  styleOverrides: {
    root: {},
  },
};
