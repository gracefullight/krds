import type { Components } from "@mui/material";

declare module "@mui/material/Stepper" {}

export const MuiStepper: Components["MuiStepper"] = {
  defaultProps: {},
  styleOverrides: {
    root: {},
  },
};
