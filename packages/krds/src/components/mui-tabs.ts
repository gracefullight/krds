import type { Components } from "@mui/material";
import type { VariantStyleProps } from "#/components/component.types";

import { tabClasses, tabsClasses } from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";
import { getRadius } from "#/design-tokens/radius";
import { getTypography } from "#/design-tokens/typography";

declare module "@mui/material/Tabs" {
  interface TabsOwnProps {
    type?: "primary" | "secondary";
    style?: "line" | "fill";
  }
}

export const MuiTabs: Components["MuiTabs"] = {
  defaultProps: {
    indicatorColor: "secondary",
    type: "primary",
    style: "line",
  },
  styleOverrides: {
    root: {
      [`& .${tabsClasses.indicator}`]: {
        backgroundColor: getPalette("border.secondary"),
      },

      variants: [
        // * type
        // * primary는 PC로만 제공
        {
          props: { type: "primary" },
          style: {
            [`& .${tabsClasses.indicator}`]: {
              height: "4px",
            },

            [`& .${tabClasses.root}`]: {
              ...getTypography("pc.heading.small"),

              backgroundColor: getPalette("surface.white-subtle"),
              paddingBottom: "13.5px",
              paddingTop: "13.5px",
            },
          },
        },
        {
          props: { type: "secondary" },
          style: ({ theme }: VariantStyleProps) => ({
            [`& .${tabsClasses.indicator}`]: {
              height: "3px",
            },

            [`& .${tabClasses.root}`]: {
              ...getTypography("pc.heading.xsmall"),

              paddingBottom: "7px",
              paddingTop: "7px",

              [theme.breakpoints.down("medium")]: {
                ...getTypography("mobile.heading.xsmall"),

                paddingBottom: "11px",
                paddingTop: "11px",
              },
            },
          }),
        },

        // * style
        {
          props: { style: "line" },
          style: {
            [`& .${tabClasses.root}.${tabClasses.selected}`]: {
              color: getPalette("text.secondary"),
            },
          },
        },
        {
          props: { style: "line", type: "primary" },
          style: {
            [`& .${tabClasses.root}`]: {
              borderBottom: `2px solid ${getPalette("border.gray")}`,
              paddingLeft: "15px",
              paddingRight: "15px",
            },
          },
        },
        {
          props: { style: "line", type: "secondary" },
          style: ({ theme }: VariantStyleProps) => ({
            [`& .${tabClasses.root}`]: {
              paddingLeft: "7.5px",
              paddingRight: "7.5px",
            },

            [theme.breakpoints.down("medium")]: {
              [`& .${tabClasses.root}`]: {
                paddingLeft: "11.5px",
                paddingRight: "11.5px",
              },
            },
          }),
        },
        {
          props: { style: "fill" },
          style: {
            backgroundColor: getPalette("action.secondary"),

            [`& .${tabsClasses.indicator}`]: {
              display: "none",
            },

            [`& .${tabClasses.root}.${tabClasses.selected}`]: {
              backgroundColor: getPalette("action.secondary-active"),
              borderColor: getPalette("action.secondary-active"),
              color: getPalette("text.inverse-static"),
            },
          },
        },
        {
          props: { style: "fill", type: "primary" },
          style: {
            [`& .${tabClasses.root}`]: {
              borderBlock: `1px solid ${getPalette("border.gray")}`,
              paddingLeft: "27px",
              paddingRight: "27px",

              "&:first-of-type": {
                borderBottomLeftRadius: getRadius("medium3"),
                borderTopLeftRadius: getRadius("medium3"),
                borderLeft: `1px solid ${getPalette("border.gray")}`,
              },

              "&:not(:first-of-type)": {
                borderLeft: `1px solid ${getPalette("border.gray")}`,
              },

              "&:last-of-type": {
                borderBottomRightRadius: getRadius("medium3"),
                borderTopRightRadius: getRadius("medium3"),
                borderRight: `1px solid ${getPalette("border.gray")}`,
              },

              [`&.${tabClasses.selected}`]: {
                borderBlockColor: getPalette("action.secondary-active"),
                borderLeftColor: getPalette("action.secondary-active"),
                borderRightColor: getPalette("action.secondary-active"),
              },
            },
          },
        },
        {
          props: { style: "fill", type: "secondary" },
          style: ({ theme }: VariantStyleProps) => ({
            [`& .${tabClasses.root}`]: {
              paddingLeft: "12px",
              paddingRight: "12px",

              [`&.${tabClasses.selected}`]: {
                borderRadius: getRadius("medium2"),
              },
            },

            [theme.breakpoints.down("medium")]: {
              [`& .${tabClasses.root}`]: {
                paddingLeft: "15.5px",
                paddingRight: "15.5px",
              },
            },
          }),
        },
      ],
    },
  },
};
