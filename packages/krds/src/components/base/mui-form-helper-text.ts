import type { Components, Theme } from "@mui/material";

import { getPalette, getTypography } from "@gracefullight/krds-tokens";

declare module "@mui/material/FormHelperText" {}

export const MuiFormHelperText: Components["MuiFormHelperText"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      ...getTypography("pc.label.medium"),

      color: getPalette("text.basic"),

      [(theme as Theme).breakpoints.down("medium")]: {
        ...getTypography("mobile.label.medium"),
      },

      variants: [
        // * disabled
        {
          props: { disabled: true },
          style: { color: getPalette("text.disabled") },
        },
      ],
    }),
  },
};
