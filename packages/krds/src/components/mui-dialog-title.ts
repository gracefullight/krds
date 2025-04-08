import type { Components, Theme } from "@mui/material";
import { getTypography } from "#/design-tokens/typography";

declare module "@mui/material/DialogTitle" {}

export const MuiDialogTitle: Components["MuiDialogTitle"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      ...getTypography("pc.heading.medium"),

      marginBottom: 0,

      [(theme as Theme).breakpoints.down("medium")]: {
        ...getTypography("mobile.heading.medium"),
      },
    }),
  },
};
