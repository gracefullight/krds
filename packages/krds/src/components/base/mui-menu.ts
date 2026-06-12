import type { Components, Theme } from "@mui/material";
import { responsiveTypography } from "#/utils/responsive-typography";

import { getPalette, getRadius } from "@gracefullight/krds-tokens";
import { menuClasses } from "@mui/material";
import { krdsSelectClasses } from "#/constants/classes";

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
          ...responsiveTypography("label.small")({ theme: theme as Theme }),
        },
      },

      [`&.${krdsSelectClasses.sizeMedium}`]: {
        [`& .${menuClasses.list}`]: {
          ...responsiveTypography("label.medium")({ theme: theme as Theme }),
        },
      },

      [`&.${krdsSelectClasses.sizeLarge}`]: {
        [`& .${menuClasses.list}`]: {
          ...responsiveTypography("label.large")({ theme: theme as Theme }),
        },
      },
    }),
  },
};
