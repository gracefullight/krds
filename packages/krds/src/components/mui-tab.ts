import type { Components } from "@mui/material";

import { tabClasses } from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";

declare module "@mui/material/Tab" {}

export const MuiTab: Components["MuiTab"] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      color: getPalette("text.subtle"),
    },
  },
};
