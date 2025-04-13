import type { Components, Theme } from "@mui/material";

import {
  iconButtonClasses,
  svgIconClasses,
  tooltipClasses,
  typographyClasses,
} from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";
import { getRadius } from "#/design-tokens/radius";
import { getTypography } from "#/design-tokens/typography";

declare module "@mui/material/Tooltip" {
  interface TooltipProps {
    variant?: "default" | "rich";
  }
}

export const MuiTooltip: Components["MuiTooltip"] = {
  defaultProps: {
    arrow: true,
    variant: "default",
    slotProps: {
      popper: {
        modifiers: [
          {
            name: "offset",
            options: {
              // * -16이면 margin: 0
              offset: [0, -12],
            },
          },
        ],
      },
    },
  },
  styleOverrides: {
    popper: ({ theme }) => ({
      [`& .${tooltipClasses.tooltip}`]: {
        ...getTypography("pc.body.small"),

        [(theme as Theme).breakpoints.down("medium")]: {
          ...getTypography("mobile.body.small"),
        },

        [`& .${iconButtonClasses.root}`]: {
          padding: 0,

          [`& .${svgIconClasses.root}`]: {
            width: "16px",
            height: "16px",
          },
        },
      },

      [`& .${tooltipClasses.arrow}`]: {
        color: getPalette("surface.white-subtle"),
      },

      variants: [
        {
          props: { variant: "default" },
          style: {
            [`& .${tooltipClasses.tooltip}`]: {
              backgroundColor: getPalette("surface.inverse"),
              borderRadius: getRadius("small3"),
              color: getPalette("text.basic-inverse"),
              display: "flex",
              padding: "4px 12px",

              [`& .${tooltipClasses.arrow}`]: {
                color: getPalette("surface.inverse"),
              },

              [`& .${iconButtonClasses.root} .${svgIconClasses.root}`]: {
                color: getPalette("icon.inverse"),
              },

              [`& .${typographyClasses.root}`]: {
                flex: 1,
                marginRight: "8px",
              },

              [`& .${iconButtonClasses.root}`]: {
                alignSelf: "flex-start",
                paddingTop: "3px",
              },
            },
          },
        },
        {
          props: { variant: "rich" },
          style: {
            [`& .${tooltipClasses.tooltip}`]: {
              backgroundColor: getPalette("surface.white-subtler"),
              borderRadius: getRadius("xlarge2"),
              outline: `1px solid ${getPalette("border.gray")}`,

              [`& .${tooltipClasses.arrow}`]: {
                color: getPalette("surface.white-subtler"),
              },
            },
          },
        },
      ],
    }),
  },
};
