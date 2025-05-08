import type { Components } from "@mui/material";

import { getPalette } from "@gracefullight/krds-tokens";

declare module "@mui/material/Divider" {}

export const MuiDivider: Components["MuiDivider"] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      borderColor: getPalette("divider.gray"),
    },
  },
};
