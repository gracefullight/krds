import type { Components, Theme } from "@mui/material";
import { responsiveTypography } from "#/utils/responsive-typography";

import { getPalette } from "@gracefullight/krds-tokens";
import { tableCellClasses, tableRowClasses } from "@mui/material";

declare module "@mui/material/TableHead" {}

export const MuiTableHead: Components["MuiTableHead"] = {
  defaultProps: {},

  styleOverrides: {
    root: ({ theme }) => ({
      [`& .${tableRowClasses.root}`]: {
        backgroundColor: getPalette("surface.secondary-subtler"),

        [`& .${tableCellClasses.root}`]: {
          ...responsiveTypography("heading.xxsmall")({ theme: theme as Theme }),
        },
      },
    }),
  },
};
