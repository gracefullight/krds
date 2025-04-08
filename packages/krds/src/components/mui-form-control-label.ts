import type { Components, Theme } from "@mui/material";

import {
  checkboxClasses,
  formControlLabelClasses,
  typographyClasses,
} from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";
import { getTypography } from "#/design-tokens/typography";

declare module "@mui/material/FormControlLabel" {}

export const MuiFormControlLabel: Components["MuiFormControlLabel"] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      color: getPalette("text.bolder"),

      [`& .${checkboxClasses.sizeMedium} + .${typographyClasses.root}`]: {
        ...getTypography("pc.label.medium"),

        [(theme as Theme).breakpoints.down("medium")]: {
          ...getTypography("mobile.label.medium"),
        },
      },

      // * large 클래스 제공 안함
      [`& .${checkboxClasses.root}.MuiCheckbox-sizeLarge + .${typographyClasses.root}`]:
        {
          ...getTypography("pc.label.large"),

          [(theme as Theme).breakpoints.down("medium")]: {
            ...getTypography("mobile.label.large"),
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
