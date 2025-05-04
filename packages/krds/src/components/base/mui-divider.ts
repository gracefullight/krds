import type { Components } from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";

declare module "@mui/material/Divider" {}

export const MuiDivider: Components["MuiDivider"] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      borderColor: getPalette("divider.gray"),
    },
  },
};
