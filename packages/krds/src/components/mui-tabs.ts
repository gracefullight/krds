import type { Components } from "@mui/material";
import type { VariantStyleProps } from "#/components/component.types";

import { tabClasses, tabsClasses } from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";
import { getTypography } from "#/design-tokens/typography";

declare module "@mui/material/Tabs" {
  interface TabsOwnProps {
    type?: "primary" | "secondary";
  }
}

export const MuiTabs: Components["MuiTabs"] = {
  defaultProps: {
    indicatorColor: "secondary",
    type: "primary",
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
      ],
    },
  },
};
