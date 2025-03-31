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
        {
          props: { type: "primary" },
          style: {
            [`& .${tabsClasses.indicator}`]: {
              height: "4px",
            },

            [`& .${tabClasses.root}`]: {
              ...getTypography("pc.heading.small"),

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
          props: { style: "fill" },
          style: {
            backgroundColor: getPalette("action.secondary"),
            borderRadius: getRadius("medium3"),

            [`& .${tabsClasses.indicator}`]: {
              display: "none",
            },

            [`& .${tabClasses.root}.${tabClasses.selected}`]: {
              backgroundColor: getPalette("action.secondary-active"),
              color: getPalette("text.inverse-static"),
            },
          },
        },
      ],
    },
  },
};
