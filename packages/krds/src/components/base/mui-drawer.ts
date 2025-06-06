import type { Components, Theme } from "@mui/material";

import {
  getPalette,
  getRadius,
  getTypography,
} from "@gracefullight/krds-tokens";
import { dialogTitleClasses, iconButtonClasses } from "@mui/material";

declare module "@mui/material/Drawer" {}

export const MuiDrawer: Components["MuiDrawer"] = {
  defaultProps: {
    anchor: "bottom",
  },

  styleOverrides: {
    paper: ({ theme }) => ({
      baxShadow: "none",

      ...getTypography("pc.body.medium"),
      [(theme as Theme).breakpoints.down("medium")]: {
        ...getTypography("mobile.body.medium"),
      },

      [`& .${dialogTitleClasses.root}`]: {
        padding: "0 40px 16px 0",

        [`&:has(.${iconButtonClasses.root})`]: {
          paddingTop: 0,
        },

        [`& .${iconButtonClasses.root}`]: {
          color: getPalette("icon.gray"),
          top: "4px",
        },
      },

      variants: [
        {
          props: { anchor: "bottom" },
          style: {
            borderTopLeftRadius: getRadius("xlarge2"),
            borderTopRightRadius: getRadius("xlarge2"),

            padding: "24px 16px 40px 16px",
          },
        },
      ],
    }),
  },
};
