import type { Components, Theme } from "@mui/material";

import { ArrowDown } from "@gracefullight/krds-icons";
import {
  getPalette,
  getRadius,
  getTypography,
} from "@gracefullight/krds-tokens";
import { outlinedInputClasses, selectClasses } from "@mui/material";
import { krdsSelectClasses } from "#/constants/classes";

declare module "@mui/material/Select" {
  interface InputBasePropsSizeOverrides {
    large: true;
  }
}

export const MuiSelect: Components["MuiSelect"] = {
  defaultProps: {
    displayEmpty: true,
    size: "medium",
    MenuProps: {
      marginThreshold: 0,
      slotProps: {
        paper: {
          className: krdsSelectClasses.sizeMedium,
        },
      },
    },
    IconComponent: ArrowDown,
  },

  styleOverrides: {
    root: {
      padding: 0,

      "& svg": {
        color: getPalette("icon.gray"),
        right: "16px",
      },

      [`&.${selectClasses.disabled}`]: {
        backgroundColor: getPalette("surface.disabled"),
        color: getPalette("text.disabled-on"),

        [`& .${selectClasses.select}`]: {
          color: getPalette("text.disabled-on"),
          WebkitTextFillColor: getPalette("text.disabled-on"),
        },

        "& svg": {
          color: getPalette("icon.gray"),
        },
      },

      [`&.${outlinedInputClasses.root}`]: {
        outline: `1px solid ${getPalette("input.border")}`,

        [`&.${selectClasses.focused}`]: {
          outlineColor: getPalette("input.border-active"),
          outlineWidth: "2px",
        },

        [`&.${selectClasses.error}`]: {
          outlineColor: getPalette("input.border-error"),
          outlineWidth: "2px",
        },

        [`& .${outlinedInputClasses.notchedOutline}`]: {
          // * 배경색을 주기 위해 border 삭제
          border: "none",
        },
      },
    },
  },

  variants: [
    // * size
    {
      props: { size: "large" },
      style: ({ theme }) => ({
        borderRadius: getRadius("medium3"),

        [`& .${selectClasses.select}`]: {
          ...getTypography("pc.label.large"),

          padding: "13.5px 16px",
          paddingRight: "44px !important",

          [(theme as Theme).breakpoints.down("medium")]: {
            ...getTypography("mobile.label.large"),
          },
        },

        "& svg": {
          width: "24px",
          height: "24px",
          top: "calc(50% - 12px)",
        },
      }),
    },
    {
      props: { size: "medium" },
      style: ({ theme }) => ({
        borderRadius: getRadius("medium2"),

        [`& .${selectClasses.select}`]: {
          ...getTypography("pc.label.medium"),

          padding: "11px 16px",
          paddingRight: "40px !important",

          [(theme as Theme).breakpoints.down("medium")]: {
            ...getTypography("mobile.label.medium"),
          },
        },

        "& svg": {
          width: "20px",
          height: "20px",
          top: "calc(50% - 10px)",
        },
      }),
    },
    {
      props: { size: "small" },
      style: ({ theme }) => ({
        borderRadius: getRadius("medium1"),

        [`& .${selectClasses.select}`]: {
          ...getTypography("pc.label.small"),

          padding: "8.5px 16px",
          paddingRight: "36px !important",

          [(theme as Theme).breakpoints.down("medium")]: {
            ...getTypography("mobile.label.small"),
          },
        },

        "& svg": {
          width: "16px",
          height: "16px",
          top: "calc(50% - 8px)",
        },
      }),
    },
  ],
};
