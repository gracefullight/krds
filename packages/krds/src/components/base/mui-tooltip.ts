import type { Components, Theme } from "@mui/material";

import {
  getPalette,
  getRadius,
  getTypography,
} from "@gracefullight/krds-tokens";
import {
  iconButtonClasses,
  svgIconClasses,
  tooltipClasses,
  typographyClasses,
} from "@mui/material";

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

        display: "flex",

        [(theme as Theme).breakpoints.down("medium")]: {
          ...getTypography("mobile.body.small"),
        },

        [`& .${typographyClasses.root}`]: {
          flex: 1,
          marginRight: "8px",
        },

        [`& .${iconButtonClasses.root}`]: {
          alignSelf: "flex-start",
          padding: "3px 0 0 0",

          [`& .${svgIconClasses.root}`]: {
            width: "16px",
            height: "16px",
          },
        },
      },

      variants: [
        {
          props: { variant: "default" },
          style: {
            [`& .${tooltipClasses.tooltip}`]: {
              backgroundColor: getPalette("surface.inverse"),
              borderRadius: getRadius("small3"),
              color: getPalette("text.basic-inverse"),
              padding: "4px 12px",

              [`& .${tooltipClasses.arrow}`]: {
                color: getPalette("surface.inverse"),
              },

              [`& .${iconButtonClasses.root} .${svgIconClasses.root}`]: {
                color: getPalette("icon.inverse"),
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
              color: getPalette("text.basic"),
              padding: "24px",

              [`& .${tooltipClasses.arrow}`]: {
                color: getPalette("surface.white-subtler"),

                "::before": {
                  outline: `1px solid ${getPalette("border.gray")}`,
                },
              },

              [`& .${iconButtonClasses.root} .${svgIconClasses.root}`]: {
                color: getPalette("icon.gray"),
              },
            },
          },
        },
      ],
    }),
  },
};
