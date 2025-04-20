import type { Components, Theme } from "@mui/material";

import { tableCellClasses, tableRowClasses } from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";
import { getTypography } from "#/design-tokens/typography";

declare module "@mui/material/TableBody" {}

export const MuiTableBody: Components["MuiTableBody"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      [`& .${tableRowClasses.root}`]: {
        backgroundColor: getPalette("surface.white-subtle"),

        [`& .${tableCellClasses.root}`]: {
          ...getTypography("pc.label.medium"),

          [(theme as Theme).breakpoints.down("medium")]: {
            ...getTypography("mobile.label.medium"),
          },
        },
      },
    }),
  },
};
