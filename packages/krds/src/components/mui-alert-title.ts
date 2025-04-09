import type { Components, Theme } from "@mui/material";

import { getTypography } from "#/design-tokens/typography";

declare module "@mui/material/AlertTitle" {}

export const MuiAlertTitle: Components["MuiAlertTitle"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      ...getTypography("pc.heading.xsmall"),

      marginBottom: 0,

      [(theme as Theme).breakpoints.down("medium")]: {
        ...getTypography("mobile.heading.xsmall"),
      },
    }),
  },
};
