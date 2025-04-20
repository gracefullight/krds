import type { Components, Theme } from "@mui/material";

import { tableCellClasses, tableRowClasses } from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";
import { getTypography } from "#/design-tokens/typography";

declare module "@mui/material/TableHead" {}

export const MuiTableHead: Components["MuiTableHead"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      [`& .${tableRowClasses.root}`]: {
        backgroundColor: getPalette("surface.secondary-subtler"),

        [`& .${tableCellClasses.root}`]: {
          ...getTypography("pc.heading.xxsmall"),

          [(theme as Theme).breakpoints.down("medium")]: {
            ...getTypography("mobile.heading.xxsmall"),
          },
        },
      },
    }),
  },
};
