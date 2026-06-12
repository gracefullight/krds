import type { Components, Theme } from "@mui/material";
import { responsiveTypography } from "#/utils/responsive-typography";

import { getPalette } from "@gracefullight/krds-tokens";
import { tableCellClasses, tableRowClasses } from "@mui/material";

declare module "@mui/material/TableBody" {}

export const MuiTableBody: Components["MuiTableBody"] = {
  defaultProps: {},

  styleOverrides: {
    root: ({ theme }) => ({
      [`& .${tableRowClasses.root}`]: {
        backgroundColor: getPalette("surface.white-subtle"),

        [`& .${tableCellClasses.root}`]: {
          ...responsiveTypography("label.medium")({ theme: theme as Theme }),
        },
      },
    }),
  },
};
