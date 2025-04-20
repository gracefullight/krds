import type { Components } from "@mui/material";

declare module "@mui/material/Accordion" {}

export const MuiAccordion: Components["MuiAccordion"] = {
  defaultProps: {},
  styleOverrides: {
    root: {},
  },
};
