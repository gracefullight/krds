import type { Components, Theme } from "@mui/material";
import { responsiveTypography } from "#/utils/responsive-typography";

import { getPalette } from "@gracefullight/krds-tokens";
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
          ...responsiveTypography("label.medium")({ theme: theme as Theme }),
        },

        // * large 클래스 제공 안함
        [`&.MuiCheckbox-sizeLarge + .${typographyClasses.root}`]: {
          ...responsiveTypography("label.large")({ theme: theme as Theme }),
        },
      },

      // * 라디오
      [`:has(.${radioClasses.root})`]: {
        color: getPalette("text.bolder"),
      },

      [`& .${radioClasses.root} + .${typographyClasses.root}`]: {
        ...responsiveTypography("label.medium")({ theme: theme as Theme }),
      },

      [`& .${radioClasses.root}.MuiRadio-sizeLarge + .${typographyClasses.root}`]:
        {
          ...responsiveTypography("label.large")({ theme: theme as Theme }),
        },

      // * 스위치
      [`:has(.${switchClasses.root})`]: {
        color: getPalette("text.basic"),
      },

      [`& .${switchClasses.root}`]: {
        marginRight: "8px",

        [`&.${switchClasses.sizeMedium} + .${typographyClasses.root}`]: {
          ...responsiveTypography("label.medium")({ theme: theme as Theme }),
        },

        [`&.MuiSwitch-sizeLarge + .${typographyClasses.root}`]: {
          ...responsiveTypography("label.large")({ theme: theme as Theme }),
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
