import type { Components, Theme } from "@mui/material";
import { responsiveTypography } from "#/utils/responsive-typography";

import { getPalette, getRadius } from "@gracefullight/krds-tokens";
import { dialogTitleClasses, iconButtonClasses } from "@mui/material";

declare module "@mui/material/Drawer" {}

export const MuiDrawer: Components["MuiDrawer"] = {
  defaultProps: {
    anchor: "bottom",
  },

  styleOverrides: {
    paper: ({ theme }) => ({
      baxShadow: "none",

      ...responsiveTypography("body.medium")({ theme: theme as Theme }),

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
