import type { Components, Theme } from "@mui/material";

import { iconButtonClasses, svgIconClasses } from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";
import { getTypography } from "#/design-tokens/typography";

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
        padding: 0,
        position: "absolute",
        top: 0,
        right: 0,

        [`& .${svgIconClasses.root}`]: {
          width: "24px",
          height: "24px",
          color: getPalette("icon.gray"),
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
