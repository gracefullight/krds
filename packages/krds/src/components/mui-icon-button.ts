import type { Components, Theme } from "@mui/material";

declare module "@mui/material/IconButton" {}

export const MuiIconButton: Components["MuiIconButton"] = {
  defaultProps: {
    disableRipple: true,
  },
};
