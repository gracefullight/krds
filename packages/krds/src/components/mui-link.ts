import type { Components } from "@mui/material";
import type { VariantStyleProps } from "#/components/component.types";

import { getPalette } from "#/design-tokens/palettes";
import { getTypography } from "#/design-tokens/typography";

// ? https://github.com/mui/material-ui/blob/master/packages/mui-icons-material/lib/OpenInNew.js#L13
const openInNewIconBase64 =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMTlINVY1aDdWM0g1Yy0xLjExIDAtMiAuOS0yIDJ2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJ2LTdoLTJaTTE0IDN2MmgzLjU5bC05LjgzIDkuODMgMS40MSAxLjQxTDE5IDYuNDFWMTBoMlYzeiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+";

declare module "@mui/material/Link" {
  interface LinkOwnProps {
    size?: "small" | "medium" | "large";
    type?: "default" | "subtle" | "subtle-none";
    icon?: "none" | "external";
  }
}

// ? https://mui.com/material-ui/api/link/
export const MuiLink: Components["MuiLink"] = {
  defaultProps: {
    size: "medium",
    type: "default",
    icon: "none",
  },

  styleOverrides: {
    root: {
      ":hover": {
        color: getPalette("link.hover"),
      },

      ":active": {
        color: getPalette("link.pressed"),
      },

      ":visited": {
        color: getPalette("link.visited"),
      },

      "&.disabled": {
        color: getPalette("text.disabled"),
        cursor: "default",
        pointerEvents: "none",
      },

      variants: [
        // * type
        {
          props: {
            type: "default",
          },
          style: {
            color: getPalette("link.default"),
          },
        },
        {
          props: {
            type: "subtle",
          },
          style: {
            color: getPalette("text.basic"),
            textDecorationColor: getPalette("text.basic"),
          },
        },
        {
          props: {
            type: "subtle-none",
          },
          style: {
            color: getPalette("text.basic"),
            textDecoration: "none",
          },
        },

        // * size
        {
          props: {
            size: "small",
          },
          style: ({ theme }: VariantStyleProps) => ({
            ...getTypography("pc.label.small"),

            [theme.breakpoints.down("medium")]: {
              ...getTypography("mobile.label.small"),
            },
          }),
        },
        {
          props: {
            size: "medium",
          },
          style: ({ theme }: VariantStyleProps) => ({
            ...getTypography("pc.label.medium"),

            [theme.breakpoints.down("medium")]: {
              ...getTypography("mobile.label.medium"),
            },
          }),
        },
        {
          props: {
            size: "large",
          },
          style: ({ theme }: VariantStyleProps) => ({
            ...getTypography("pc.label.large"),

            [theme.breakpoints.down("medium")]: {
              ...getTypography("mobile.label.large"),
            },
          }),
        },

        // * icon
        {
          props: { icon: "external" },
          style: {
            position: "relative",
            paddingRight: "24px",

            "&::after": {
              content: '""',
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              width: "20px",
              height: "20px",
              maskImage: `url("${openInNewIconBase64}")`,
              maskSize: "contain",
              maskRepeat: "no-repeat",
              backgroundColor: "currentColor",
            },
          },
        },
        {
          props: { icon: "external", size: "small" },
          style: {
            paddingRight: "18px",
            "&::after": {
              width: "16px",
              height: "16px",
            },
          },
        },
        {
          props: { icon: "external", size: "medium" },
          style: {
            paddingRight: "24px",
            "&::after": {
              width: "20px",
              height: "20px",
            },
          },
        },
        {
          props: { icon: "external", size: "large" },
          style: {
            paddingRight: "28px",
            "&::after": {
              width: "24px",
              height: "24px",
            },
          },
        },
      ],
    },
  },
};
