import type { Components } from "@mui/material";

import { checkboxClasses, svgIconClasses } from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";

declare module "@mui/material/Checkbox" {}

export const MuiCheckbox: Components["MuiCheckbox"] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      padding: "8px",

      [`& .${svgIconClasses.root}`]: {
        color: getPalette("border.gray-dark"),
      },

      [`&.${checkboxClasses.checked} .${svgIconClasses.root}`]: {
        color: getPalette("element.primary"),
      },

      variants: [
        // * disabled
        {
          props: { disabled: true },
          style: {
            [`&.${checkboxClasses.disabled}`]: {
              color: "initial",

              [`& .${svgIconClasses.root}`]: {
                color: getPalette("element.disabled-light"),
              },
            },
          },
        },

        // * size
        {
          props: { size: "medium" },
          style: {
            [`& .${svgIconClasses.root}`]: {
              width: "20px",
              height: "20px",
            },
          },
        },
        {
          props: { size: "large" },
          style: {
            [`& .${svgIconClasses.root}`]: {
              width: "24px",
              height: "24px",
            },
          },
        },
      ],
    },
  },
};
