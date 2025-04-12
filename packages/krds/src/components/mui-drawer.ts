import type { Components, Theme } from "@mui/material";

import { dialogTitleClasses, iconButtonClasses } from "@mui/material";
import { getRadius } from "#/design-tokens/radius";
import { getTypography } from "#/design-tokens/typography";

declare module "@mui/material/Drawer" {}

export const MuiDrawer: Components["MuiDrawer"] = {
  defaultProps: {
    anchor: "bottom",
  },

  styleOverrides: {
    paper: ({ theme }) => ({
      ...getTypography("pc.body.medium"),

      baxShadow: "none",

      [(theme as Theme).breakpoints.down("medium")]: {
        ...getTypography("mobile.body.medium"),
      },

      [`& .${dialogTitleClasses.root}`]: {
        padding: "0 40px 16px 0",

        [`&:has(.${iconButtonClasses.root})`]: {
          paddingTop: 0,
        },

        [`& .${iconButtonClasses.root}`]: {
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
