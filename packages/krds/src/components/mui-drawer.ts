import type { Components } from "@mui/material";

declare module "@mui/material/Drawer" {}

export const MuiDrawer: Components["MuiDrawer"] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      variants: [{ props: { anchor: "bottom " }, style: {} }],
    },
  },
};
