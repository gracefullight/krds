import type { Components } from "@mui/material";

import { getPalette, getRadius } from "@gracefullight/krds-tokens";
import { linearProgressClasses } from "@mui/material";

declare module "@mui/material/LinearProgress" {
  interface LinearProgressProps {
    size?: "medium" | "large";
  }

  interface LinearProgressPropsColorOverrides {
    secondary: false;
    info: false;
    warning: false;
  }
}

export const MuiLinearProgress: Components["MuiLinearProgress"] = {
  defaultProps: {
    size: "medium",
  },
  styleOverrides: {
    root: {
      backgroundColor: getPalette("element.disabled-light"),

      variants: [
        // * size
        {
          props: { size: "medium" },
          style: {
            borderRadius: getRadius("xsmall1"),
            height: "4px",

            [`& .${linearProgressClasses.bar1}`]: {
              borderRadius: getRadius("xsmall1"),
            },

            [`& .${linearProgressClasses.bar2}`]: {
              borderRadius: getRadius("xsmall1"),
            },
          },
        },
        {
          props: { size: "large" },
          style: {
            borderRadius: getRadius("small1"),
            height: "8px",

            [`& .${linearProgressClasses.bar1}`]: {
              borderRadius: getRadius("small1"),
            },

            [`& .${linearProgressClasses.bar2}`]: {
              borderRadius: getRadius("small1"),
            },
          },
        },

        // * color
        {
          props: { color: "primary" },
          style: {
            [`& .${linearProgressClasses.bar1}`]: {
              backgroundColor: getPalette("element.primary"),
            },
          },
        },
        {
          props: { color: "success" },
          style: {
            [`& .${linearProgressClasses.bar1}`]: {
              backgroundColor: getPalette("element.success"),
            },
          },
        },
        {
          props: { color: "error" },
          style: {
            [`& .${linearProgressClasses.bar1}`]: {
              backgroundColor: getPalette("element.danger"),
            },
          },
        },
      ],
    },
  },
};
