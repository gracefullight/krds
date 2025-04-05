import type { Components } from "@mui/material";

declare module "@mui/material/Checkbox" {}

export const MuiCheckbox: Components["MuiCheckbox"] = {
  defaultProps: {},
  styleOverrides: {
    root: {},
  },
};
