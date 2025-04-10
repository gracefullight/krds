import type { Components, Theme } from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { selectClasses, svgIconClasses } from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";
import { getTypography } from "#/design-tokens/typography";

declare module "@mui/material/Select" {
  interface InputBasePropsSizeOverrides {
    large: true;
  }
}

export const MuiSelect: Components["MuiSelect"] = {
  defaultProps: {
    displayEmpty: true,
    size: "medium",
    IconComponent: KeyboardArrowDownIcon,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      [`& .${selectClasses.select}`]: {
        ...getTypography("pc.label.large"),
        // color: getPalette("text.disabled"),
      },

      [(theme as Theme).breakpoints.down("medium")]: {
        [`& .${selectClasses.select}`]: {
          ...getTypography("mobile.label.large"),
        },
      },

      [`& .${svgIconClasses.root}`]: {
        color: getPalette("icon.gray"),
        right: "16px",
      },

      variants: [
        {
          props: { size: "large" },
          style: {
            [`& .${selectClasses.select}`]: {
              padding: "13.5px 16px",
              paddingRight: "44px !important",
            },

            [`& .${svgIconClasses.root}`]: {
              width: "24px",
              height: "24px",
              top: "calc(50% - 12px)",
            },
          },
        },
        {
          props: { size: "medium" },
          style: {
            [`& .${selectClasses.select}`]: {
              padding: "11px 16px",
              paddingRight: "40px !important",
            },
            [`& .${svgIconClasses.root}`]: {
              width: "20px",
              height: "20px",
              top: "calc(50% - 10px)",
            },
          },
        },
        {
          props: { size: "small" },
          style: {
            [`& .${selectClasses.select}`]: {
              padding: "8.5px 16px",
              paddingRight: "36px !important",
            },
            [`& .${svgIconClasses.root}`]: {
              width: "16px",
              height: "16px",
              top: "calc(50% - 8px)",
            },
          },
        },
      ],
    }),
  },
};
