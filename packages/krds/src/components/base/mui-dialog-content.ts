import type { Components, Theme } from "@mui/material";

declare module "@mui/material/DialogContent" {}

export const MuiDialogContent: Components["MuiDialogContent"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      padding: "16px",

      [(theme as Theme).breakpoints.down("medium")]: {
        paddingLeft: "4px",
        paddingRight: "4px",
      },
    }),
  },
};
