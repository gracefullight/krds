import type { Components } from "@mui/material";

declare module "@mui/material/Pagination" {}

export const MuiPagination: Components["MuiPagination"] = {
  defaultProps: {},
  styleOverrides: {
    root: {},
  },
};
