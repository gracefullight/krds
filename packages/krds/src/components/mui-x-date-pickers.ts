import type { Components } from "@mui/material";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import type { VariantStyleProps } from "#/components/component.types";

import {
  iconButtonClasses,
  inputAdornmentClasses,
  svgIconClasses,
} from "@mui/material";
import {
  pickersInputBaseClasses,
  pickersOutlinedInputClasses,
  pickersSectionListClasses,
  pickersTextFieldClasses,
} from "@mui/x-date-pickers";
import { getPalette } from "#/design-tokens/palettes";
import { getRadius } from "#/design-tokens/radius";
import { getTypography } from "#/design-tokens/typography";

declare module "@mui/x-date-pickers/DatePicker" {
  interface FormControlPropsSizeOverrides {
    large: true;
  }
}
declare module "@mui/x-date-pickers/PickersTextField" {
  interface FormControlPropsSizeOverrides {
    large: true;
  }
}

export const MuiDatePicker: Components["MuiDatePicker"] = {
  defaultProps: {
    format: "yyyy.MM.dd",
    slotProps: {
      textField: {
        size: "medium",
      },
    },
  },
};

export const MuiPickersTextField: Components["MuiPickersTextField"] = {
  defaultProps: {
    // * 사이즈 프로퍼티는 PickersTextField만 존재
    size: "medium",
  },
  styleOverrides: {
    root: {
      outline: `1px solid ${getPalette("input.border")}`,

      [`&.${pickersTextFieldClasses.focused}`]: {
        outlineColor: getPalette("input.border-active"),
        outlineWidth: "2px",
      },

      [`&:has(.${pickersInputBaseClasses.root}.${pickersInputBaseClasses.error})`]:
        {
          outlineColor: getPalette("input.border-error"),
          outlineWidth: "2px",
        },

      [`& .${pickersInputBaseClasses.root}`]: {
        color: getPalette("text.basic"),

        "&::placeholder": {
          color: getPalette("text.disabled"),
        },

        [`& .${inputAdornmentClasses.root} .${iconButtonClasses.root}`]: {
          color: getPalette("icon.gray"),
        },
      },

      variants: [
        {
          props: {
            size: "small",
          },
          style: ({ theme }: VariantStyleProps) => ({
            borderRadius: getRadius("medium1"),
            paddingBottom: "8.5px",
            paddingTop: "8.5px",

            [`& .${pickersInputBaseClasses.root}`]: {
              ...getTypography("pc.label.small"),

              [theme.breakpoints.down("medium")]: {
                ...getTypography("mobile.label.small"),
              },

              [`& .${inputAdornmentClasses.root} .${iconButtonClasses.root} .${svgIconClasses.root}`]:
                {
                  width: "16px",
                  height: "16px",
                },
            },
          }),
        },
        {
          props: {
            size: "medium",
          },
          style: ({ theme }: VariantStyleProps) => ({
            borderRadius: getRadius("medium2"),
            paddingBottom: "11px",
            paddingTop: "11px",

            [`& .${pickersInputBaseClasses.root}`]: {
              ...getTypography("pc.label.medium"),

              [theme.breakpoints.down("medium")]: {
                ...getTypography("mobile.label.medium"),
              },

              [`& .${inputAdornmentClasses.root} .${iconButtonClasses.root} .${svgIconClasses.root}`]:
                {
                  width: "20px",
                  height: "20px",
                },
            },
          }),
        },
        {
          props: {
            size: "large",
          },
          style: ({ theme }: VariantStyleProps) => ({
            borderRadius: getRadius("medium3"),
            paddingBottom: "13.5px",
            paddingTop: "13.5px",

            [`& .${pickersInputBaseClasses.root}`]: {
              ...getTypography("pc.label.large"),

              [theme.breakpoints.down("medium")]: {
                ...getTypography("mobile.label.large"),
              },

              [`& .${inputAdornmentClasses.root} .${iconButtonClasses.root} .${svgIconClasses.root}`]:
                {
                  width: "24px",
                  height: "24px",
                },
            },
          }),
        },
      ],
    },
  },
};

export const MuiPickersOutlinedInput: Components["MuiPickersOutlinedInput"] = {
  styleOverrides: {
    root: {
      paddingLeft: "16px",
      paddingRight: "16px",

      [`& .${pickersOutlinedInputClasses.notchedOutline}`]: {
        border: "none !important",
      },

      [`& .${pickersSectionListClasses.root}`]: {
        // * PickersTextField 사이즈로 제어
        padding: 0,
        opacity: 1,
      },
    },
  },
};
