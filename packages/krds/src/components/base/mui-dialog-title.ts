import type { Components, Theme } from "@mui/material";

import { getPalette, getTypography } from "@gracefullight/krds-tokens";
import { iconButtonClasses } from "@mui/material";

declare module "@mui/material/DialogTitle" {}

export const MuiDialogTitle: Components["MuiDialogTitle"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      ...getTypography("pc.heading.medium"),

      marginBottom: 0,
      padding: "8px 16px 16px 16px",
      position: "relative",

      // * close icon 위치 조정
      [`& .${iconButtonClasses.root}`]: {
        color: getPalette("icon.gray"),
        padding: 0,
        position: "absolute",
        top: 0,
        right: 0,

        "& svg": {
          width: "24px",
          height: "24px",
        },
      },

      [`&:has(.${iconButtonClasses.root})`]: {
        paddingTop: "32px",
      },

      [(theme as Theme).breakpoints.down("medium")]: {
        ...getTypography("mobile.heading.medium"),

        padding: "8px 4px 16px 4px",

        [`&:has(.${iconButtonClasses.root})`]: {
          paddingTop: "32px",
        },
      },
    }),
  },
};
