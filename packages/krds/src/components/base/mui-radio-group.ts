import type { Components } from "@mui/material";

declare module "@mui/material/RadioGroup" {}

export const MuiRadioGroup: Components["MuiRadioGroup"] = {
  defaultProps: {
    row: true,
  },

  styleOverrides: {
    root: {},
  },
};
