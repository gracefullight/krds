import type { Components, Theme } from "@mui/material";

import { getPalette, getTypography } from "@gracefullight/krds-tokens";
import {
  checkboxClasses,
  formControlLabelClasses,
  radioClasses,
  switchClasses,
  typographyClasses,
} from "@mui/material";

declare module "@mui/material/FormControlLabel" {}

export const MuiFormControlLabel: Components["MuiFormControlLabel"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      // * 체크박스
      [`:has(.${checkboxClasses.root})`]: {
        color: getPalette("text.bolder"),
      },

      [`& .${checkboxClasses.root}`]: {
        [`&.${checkboxClasses.sizeMedium} + .${typographyClasses.root}`]: {
          ...getTypography("pc.label.medium"),

          [(theme as Theme).breakpoints.down("medium")]: {
            ...getTypography("mobile.label.medium"),
          },
        },

        // * large 클래스 제공 안함
        [`&.MuiCheckbox-sizeLarge + .${typographyClasses.root}`]: {
          ...getTypography("pc.label.large"),

          [(theme as Theme).breakpoints.down("medium")]: {
            ...getTypography("mobile.label.large"),
          },
        },
      },

      // * 라디오
      [`:has(.${radioClasses.root})`]: {
        color: getPalette("text.bolder"),
      },

      [`& .${radioClasses.root} + .${typographyClasses.root}`]: {
        ...getTypography("pc.label.medium"),

        [(theme as Theme).breakpoints.down("medium")]: {
          ...getTypography("mobile.label.medium"),
        },
      },

      [`& .${radioClasses.root}.MuiRadio-sizeLarge + .${typographyClasses.root}`]:
        {
          ...getTypography("pc.label.large"),

          [(theme as Theme).breakpoints.down("medium")]: {
            ...getTypography("mobile.label.large"),
          },
        },

      // * 스위치
      [`:has(.${switchClasses.root})`]: {
        color: getPalette("text.basic"),
      },

      [`& .${switchClasses.root}`]: {
        marginRight: "8px",

        [`&.${switchClasses.sizeMedium} + .${typographyClasses.root}`]: {
          ...getTypography("pc.label.medium"),

          [(theme as Theme).breakpoints.down("medium")]: {
            ...getTypography("mobile.label.medium"),
          },
        },

        [`&.MuiSwitch-sizeLarge + .${typographyClasses.root}`]: {
          ...getTypography("pc.label.large"),

          [(theme as Theme).breakpoints.down("medium")]: {
            ...getTypography("mobile.label.large"),
          },
        },
      },

      variants: [
        // * disabled
        {
          props: { disabled: true },
          style: {
            [`& .${formControlLabelClasses.label}.${typographyClasses.root}`]: {
              color: getPalette("text.disabled"),
            },
          },
        },
      ],
    }),
  },
};
