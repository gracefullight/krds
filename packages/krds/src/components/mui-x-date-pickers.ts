import type { Components, Theme } from "@mui/material";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import type { VariantStyleProps } from "#/components/component.types";

import {
  formHelperTextClasses,
  iconButtonClasses,
  inputAdornmentClasses,
  svgIconClasses,
} from "@mui/material";
import {
  pickersInputBaseClasses,
  pickersOutlinedInputClasses,
  pickersSectionListClasses,
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
    root: ({ theme }) => ({
      [`& .${formHelperTextClasses.root}`]: {
        ...getTypography("pc.label.xsmall"),

        alignItems: "center",
        display: "flex",
        marginLeft: 0,
        marginRight: 0,
        marginTop: "8px",

        [(theme as Theme).breakpoints.down("medium")]: {
          ...getTypography("mobile.label.xsmall"),
        },

        [`&.${formHelperTextClasses.focused}`]: {
          color: getPalette("text.information"),
        },

        [`&.${formHelperTextClasses.error}`]: {
          color: getPalette("text.danger"),
        },

        [`& .${svgIconClasses.root}`]: {
          width: "16px",
          height: "16px",
          marginRight: "4px",
          marginTop: "-1px",
        },
      },

      variants: [
        {
          props: {
            size: "small",
          },
          style: ({ theme }: VariantStyleProps) => ({
            [`& .${pickersInputBaseClasses.root}`]: {
              borderRadius: getRadius("medium1"),
              paddingBottom: "8.5px",
              paddingTop: "8.5px",
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
            [`& .${pickersInputBaseClasses.root}`]: {
              borderRadius: getRadius("medium2"),
              paddingBottom: "11px",
              paddingTop: "11px",
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
            [`& .${pickersInputBaseClasses.root}`]: {
              borderRadius: getRadius("medium3"),
              paddingBottom: "13.5px",
              paddingTop: "13.5px",
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
    }),
  },
};

export const MuiPickersOutlinedInput: Components["MuiPickersOutlinedInput"] = {
  styleOverrides: {
    root: {
      color: getPalette("text.basic"),
      outline: `1px solid ${getPalette("input.border")}`,
      paddingLeft: "16px",
      paddingRight: "16px",

      "&::placeholder": {
        color: getPalette("text.disabled"),
      },

      [`&.${pickersInputBaseClasses.focused}`]: {
        outlineColor: getPalette("input.border-active"),
        outlineWidth: "2px",
      },

      [`&.${pickersInputBaseClasses.error}`]: {
        outlineColor: getPalette("input.border-error"),
        outlineWidth: "2px",
      },

      [`&.${pickersInputBaseClasses.disabled}`]: {
        backgroundColor: getPalette("input.surface-disabled"),
        outlineColor: getPalette("input.border-disabled"),
        outlineWidth: "1px",

        color: getPalette("text.disabled-on"),

        [`& .${inputAdornmentClasses.root} .${iconButtonClasses.root}`]: {
          color: getPalette("icon.disabled-on"),
        },
      },

      [`& .${inputAdornmentClasses.root} .${iconButtonClasses.root}`]: {
        color: getPalette("icon.gray"),
      },

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
