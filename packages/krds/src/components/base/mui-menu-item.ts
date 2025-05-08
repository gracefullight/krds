import type { Components } from "@mui/material";

import { getPalette, getRadius } from "@gracefullight/krds-tokens";
import { menuItemClasses } from "@mui/material";

declare module "@mui/material/MenuItem" {}

export const MuiMenuItem: Components["MuiMenuItem"] = {
  styleOverrides: {
    root: {
      borderRadius: getRadius("medium2"),
      padding: "10px 8px",

      ":hover": {
        backgroundColor: getPalette("action.secondary-hover"),
      },

      ":active": {
        backgroundColor: getPalette("action.secondary-pressed"),
      },

      [`&.${menuItemClasses.selected}`]: {
        backgroundColor: getPalette("action.secondary-selected"),

        ":hover": {
          backgroundColor: getPalette("action.secondary-hover"),
        },
      },
    },
  },
};
