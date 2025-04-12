import type { Components } from "@mui/material";
import type { VariantStyleProps } from "#/components/component.types";

import { outlinedInputClasses } from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";
import { getRadius } from "#/design-tokens/radius";
import { getTypography } from "#/design-tokens/typography";

declare module "@mui/material/OutlinedInput" {
  interface InputBasePropsSizeOverrides {
    large: true;
  }
}

export const MuiOutlinedInput: Components["MuiOutlinedInput"] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      backgroundColor: getPalette("input.surface"),
      outline: `1px solid ${getPalette("input.border")}`,

      ":focus-within": {
        outlineColor: getPalette("input.border-active"),
        outlineWidth: "2px",
      },

      [`&.${outlinedInputClasses.error}`]: {
        outlineColor: getPalette("input.border-error"),
        outlineWidth: "2px",
      },

      [`&.${outlinedInputClasses.disabled}`]: {
        backgroundColor: getPalette("input.surface-disabled"),
        outlineColor: getPalette("input.border-disabled"),

        [`&.${outlinedInputClasses.error}`]: {
          outlineColor: getPalette("input.border-disabled"),
          outlineWidth: "1px",
        },
      },

      [`& .${outlinedInputClasses.input}`]: {
        color: getPalette("text.basic"),

        "::placeholder": {
          color: getPalette("text.disabled"),
          opacity: 1,
        },

        [`&.${outlinedInputClasses.disabled}`]: {
          WebkitTextFillColor: getPalette("text.disabled-on"),
        },
      },

      [`& .${outlinedInputClasses.notchedOutline}`]: {
        border: "none",
      },

      variants: [
        // * size
        {
          props: {
            size: "large",
          },
          style: ({ theme }: VariantStyleProps) => ({
            borderRadius: getRadius("medium3"),

            ...getTypography("pc.label.large"),

            [theme.breakpoints.down("medium")]: {
              ...getTypography("mobile.label.large"),
            },

            [`& .${outlinedInputClasses.input}`]: {
              padding: "13.5px 16px",
            },
          }),
        },
        {
          props: {
            size: "medium",
          },
          style: ({ theme }: VariantStyleProps) => ({
            borderRadius: getRadius("medium2"),

            ...getTypography("pc.label.medium"),

            [theme.breakpoints.down("medium")]: {
              ...getTypography("mobile.label.medium"),
            },

            [`& .${outlinedInputClasses.input}`]: {
              padding: "11px 16px",
            },
          }),
        },
        {
          props: {
            size: "small",
          },
          style: ({ theme }: VariantStyleProps) => ({
            borderRadius: getRadius("medium1"),

            ...getTypography("pc.label.small"),

            [theme.breakpoints.down("medium")]: {
              ...getTypography("mobile.label.small"),
            },

            [`& .${outlinedInputClasses.input}`]: {
              padding: "8.5px 16px",
            },
          }),
        },
      ],
    },
  },
};
