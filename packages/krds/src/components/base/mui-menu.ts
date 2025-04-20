import type { Components, Theme } from "@mui/material";

import { menuClasses } from "@mui/material";
import { krdsSelectClasses } from "#/constants/classes";
import { getPalette } from "#/design-tokens/palettes";
import { getRadius } from "#/design-tokens/radius";
import { getTypography } from "#/design-tokens/typography";

declare module "@mui/material/Menu" {}

export const MuiMenu: Components["MuiMenu"] = {
  defaultProps: {},
  styleOverrides: {
    paper: ({ theme }) => ({
      border: `1px solid ${getPalette("border.gray-light")}`,
      borderRadius: getRadius("medium4"),
      boxShadow: "none",

      [`& .${menuClasses.list}`]: {
        color: getPalette("text.basic"),
        padding: "8px",
      },

      [`&.${krdsSelectClasses.sizeSmall}`]: {
        [`& .${menuClasses.list}`]: {
          ...getTypography("pc.label.small"),

          [(theme as Theme).breakpoints.down("medium")]: {
            ...getTypography("mobile.label.small"),
          },
        },
      },

      [`&.${krdsSelectClasses.sizeMedium}`]: {
        [`& .${menuClasses.list}`]: {
          ...getTypography("pc.label.medium"),

          [(theme as Theme).breakpoints.down("medium")]: {
            ...getTypography("mobile.label.medium"),
          },
        },
      },

      [`&.${krdsSelectClasses.sizeLarge}`]: {
        [`& .${menuClasses.list}`]: {
          ...getTypography("pc.label.large"),

          [(theme as Theme).breakpoints.down("medium")]: {
            ...getTypography("mobile.label.large"),
          },
        },
      },
    }),
  },
};
