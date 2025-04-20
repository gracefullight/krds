import type { Components } from "@mui/material";

import { radioClasses, svgIconClasses } from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";

declare module "@mui/material/Radio" {
  interface RadioPropsSizeOverrides {
    large: true;

    small: false;
  }
}

export const MuiRadio: Components["MuiRadio"] = {
  defaultProps: {
    disableRipple: true,
  },

  styleOverrides: {
    root: {
      color: getPalette("element.gray-dark"),
      padding: "8px",

      [`&.${radioClasses.disabled}`]: {
        color: getPalette("element.disabled-dark"),
      },

      variants: [
        // * size
        {
          props: { size: "large" },
          style: {
            [`& .${svgIconClasses.root}`]: {
              width: "24px",
              height: "24px",
            },
          },
        },
        {
          props: { size: "medium" },
          style: {
            [`& .${svgIconClasses.root}`]: {
              width: "20px",
              height: "20px",
            },
          },
        },
      ],
    },
  },
};
