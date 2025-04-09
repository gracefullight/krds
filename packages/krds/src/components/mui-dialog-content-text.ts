import type { Components, Theme } from "@mui/material";

import { getTypography } from "#/design-tokens/typography";

declare module "@mui/material/DialogContentText" {}

export const MuiDialogContentText: Components["MuiDialogContentText"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      ...getTypography("pc.body.medium"),

      marginBottom: 0,

      [(theme as Theme).breakpoints.down("medium")]: {
        ...getTypography("mobile.body.medium"),
      },
    }),
  },
};
