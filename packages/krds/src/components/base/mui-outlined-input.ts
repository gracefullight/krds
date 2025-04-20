import type { Components } from "@mui/material";
import type { VariantStyleProps } from "#/components/base/component.types";

import {
  iconButtonClasses,
  inputAdornmentClasses,
  outlinedInputClasses,
  svgIconClasses,
} from "@mui/material";
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
      border: "none",
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
        padding: 0,

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

      [`& .${inputAdornmentClasses.root}`]: {
        marginLeft: 0,
        // * 우측 아이콘 여백 보정
        marginRight: "8px",

        [`& .${iconButtonClasses.root}`]: {
          padding: 0,

          [`& .${svgIconClasses.root}`]: {
            color: getPalette("icon.gray"),
          },
        },
      },

      variants: [
        // * size
        {
          props: {
            size: "large",
          },
          style: ({ theme }: VariantStyleProps) => ({
            ...getTypography("pc.label.large"),

            borderRadius: getRadius("medium3"),
            padding: "13.5px 16px",

            [theme.breakpoints.down("medium")]: {
              ...getTypography("mobile.label.large"),
            },

            [`& .${inputAdornmentClasses.root}`]: {
              gap: "8px",

              [`& .${iconButtonClasses.root}`]: {
                [`& .${svgIconClasses.root}`]: {
                  width: "24px",
                  height: "24px",
                },
              },
            },
          }),
        },
        {
          props: {
            size: "medium",
          },
          style: ({ theme }: VariantStyleProps) => ({
            ...getTypography("pc.label.medium"),

            borderRadius: getRadius("medium2"),
            padding: "11px 16px",

            [theme.breakpoints.down("medium")]: {
              ...getTypography("mobile.label.medium"),
            },

            [`& .${inputAdornmentClasses.root}`]: {
              gap: "6px",
              [`& .${iconButtonClasses.root}`]: {
                [`& .${svgIconClasses.root}`]: {
                  width: "20px",
                  height: "20px",
                },
              },
            },
          }),
        },
        {
          props: {
            size: "small",
          },
          style: ({ theme }: VariantStyleProps) => ({
            ...getTypography("pc.label.small"),

            borderRadius: getRadius("medium1"),
            padding: "8.5px 16px",

            [theme.breakpoints.down("medium")]: {
              ...getTypography("mobile.label.small"),
            },

            [`& .${inputAdornmentClasses.root}`]: {
              gap: "4px",
              [`& .${iconButtonClasses.root}`]: {
                [`& .${svgIconClasses.root}`]: {
                  width: "16px",
                  height: "16px",
                },
              },
            },
          }),
        },
      ],
    },
  },
};
