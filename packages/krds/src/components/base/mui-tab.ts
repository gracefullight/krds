import type { Components } from "@mui/material";

import { getPalette } from "@gracefullight/krds-tokens";

declare module "@mui/material/Tab" {}

export const MuiTab: Components["MuiTab"] = {
  defaultProps: {},

  styleOverrides: {
    root: {
      color: getPalette("text.subtle"),
    },
  },
};
