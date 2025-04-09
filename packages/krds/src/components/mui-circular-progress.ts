import type { Components } from "@mui/material";

import { circularProgressClasses } from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";

declare module "@mui/material/CircularProgress" {
  interface CircularProgressPropsSizeOverrides {
    size?: "small" | "medium" | "large";
  }
}

export const MuiCircularProgress: Components["MuiCircularProgress"] = {
  defaultProps: {
    size: "medium",
  },
  styleOverrides: {
    root: {
      color: getPalette("element.primary"),

      [`& .${circularProgressClasses.circle}`]: {
        strokeLinecap: "round",
      },

      variants: [
        // * size
        {
          props: { size: "small" },
          style: {
            width: "20px",
            height: "20px",

            [`& .${circularProgressClasses.circle}`]: {
              strokeWidth: "2px",

              // * https://github.com/mui/material-ui/blob/master/packages/mui-material/src/CircularProgress/CircularProgress.js
              r: 21,
            },
          },
        },
        {
          props: { size: "medium" },
          style: {
            width: "32px",
            height: "32px",

            [`& .${circularProgressClasses.circle}`]: {
              strokeWidth: "3px",
              r: 20.5,
            },
          },
        },
        {
          props: { size: "large" },
          style: {
            width: "48px",
            height: "48px",

            [`& .${circularProgressClasses.circle}`]: {
              strokeWidth: "4px",
              r: 20,
            },
          },
        },
      ],
    },
  },
};
