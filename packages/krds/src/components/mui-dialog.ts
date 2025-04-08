import { type Components, dialogClasses } from "@mui/material";
import type { VariantStyleProps } from "./component.types";

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
  },
};
