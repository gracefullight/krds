import type { Components, Theme } from "@mui/material";
import type { VariantStyleProps } from "#/components/base/component.types";

import { dialogActionsClasses, dialogClasses } from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";
import { getRadius } from "#/design-tokens/radius";

declare module "@mui/material/Dialog" {}

export const MuiDialog: Components["MuiDialog"] = {
  defaultProps: {
    maxWidth: "medium",
    fullWidth: true,
  },

  styleOverrides: {
    root: {
      variants: [
        {
          props: { maxWidth: "xsmall" },
          style: ({ theme }: VariantStyleProps) => ({
            [`& .${dialogClasses.paper}`]: {
              maxWidth: "400px",

              [theme.breakpoints.down("medium")]: {
                maxWidth: "320px",
              },
            },
          }),
        },
        {
          props: { maxWidth: "small" },
          style: ({ theme }: VariantStyleProps) => ({
            [`& .${dialogClasses.paper}`]: {
              maxWidth: "400px",

              [theme.breakpoints.down("medium")]: {
                maxWidth: "320px",
              },
            },
          }),
        },
        {
          props: { maxWidth: "medium" },
          style: ({ theme }: VariantStyleProps) => ({
            [`& .${dialogClasses.paper}`]: {
              maxWidth: "560px",

              [theme.breakpoints.down("medium")]: {
                maxWidth: "320px",
              },
            },
          }),
        },
        {
          props: { maxWidth: "large" },
          style: ({ theme }: VariantStyleProps) => ({
            [`& .${dialogClasses.paper}`]: {
              maxWidth: "760px",

              [theme.breakpoints.down("medium")]: {
                maxWidth: "320px",
              },
            },
          }),
        },
        {
          props: { maxWidth: "xlarge" },
          style: ({ theme }: VariantStyleProps) => ({
            [`& .${dialogClasses.paper}`]: {
              maxWidth: "760px",

              [theme.breakpoints.down("medium")]: {
                maxWidth: "320px",
              },
            },
          }),
        },
        {
          props: { maxWidth: "xxlarge" },
          style: ({ theme }: VariantStyleProps) => ({
            [`& .${dialogClasses.paper}`]: {
              maxWidth: "760px",

              [theme.breakpoints.down("medium")]: {
                maxWidth: "320px",
              },
            },
          }),
        },
      ],
    },

    paper: ({ theme }) => ({
      borderRadius: getRadius("xlarge2"),
      boxShadow: "none",
      padding: "24px",
      outline: `1px solid ${getPalette("border.gray")}`,

      [(theme as Theme).breakpoints.down("medium")]: {
        padding: "20px",
      },

      [`& .${dialogActionsClasses.root}`]: {
        padding: "0 16px 16px 16px",

        [(theme as Theme).breakpoints.down("medium")]: {
          paddingLeft: "4px",
          paddingRight: "4px",
        },
      },

      variants: [
        {
          props: { maxWidth: "small" },
          style: {
            [`& .${dialogActionsClasses.root}`]: {
              paddingBottom: 0,
            },
          },
        },
      ],
    }),
  },
};
