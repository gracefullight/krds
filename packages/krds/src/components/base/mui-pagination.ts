import type { Components } from "@mui/material";

declare module "@mui/material/Pagination" {
  interface PaginationPropsColorOverrides {
    primary: false;
    standard: false;
  }

  interface PaginationPropsVariantOverrides {
    outlined: false;
  }
}

export const MuiPagination: Components["MuiPagination"] = {
  defaultProps: {
    color: "secondary",
    shape: "rounded",
  },
  styleOverrides: {
    root: {},
  },
};
