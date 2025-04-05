import type { Components } from "@mui/material";

declare module "@mui/material/Tooltip" {}

export const MuiTooltip: Components["MuiTooltip"] = {
  defaultProps: {},
  styleOverrides: {},
};
