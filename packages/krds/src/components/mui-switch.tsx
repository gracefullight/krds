import type { Components } from "@mui/material";

import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  buttonBaseClasses,
  svgIconClasses,
  switchClasses,
} from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";
import { getRadius } from "#/design-tokens/radius";

declare module "@mui/material/Switch" {
  interface SwitchPropsSizeOverrides {
    large: true;

    small: false;
  }
}

export const MuiSwitch: Components["MuiSwitch"] = {
  defaultProps: {
    checkedIcon: <CheckCircleIcon />,
    disableRipple: true,
    icon: <CancelIcon />,
  },
  styleOverrides: {
    root: {
      padding: 0,

      [`& .${buttonBaseClasses.root}`]: {
        [`&.${switchClasses.checked} + .${switchClasses.track}`]: {
          opacity: 1,
        },

        [`&.${switchClasses.disabled} + .${switchClasses.track}`]: {
          backgroundColor: getPalette("element.disabled-light"),
          opacity: 1,
        },
      },

      [`& .${switchClasses.switchBase}`]: {
        padding: "2px",
      },

      [`& .${svgIconClasses.root}`]: {
        color: getPalette("element.inverse"),
      },

      [`& .${switchClasses.track}`]: {
        backgroundColor: getPalette("element.gray"),
        borderRadius: getRadius("max"),
        opacity: 1,
      },

      variants: [
        {
          props: { size: "large" },
          style: {
            width: "40px",
            height: "24px",

            [`& .${switchClasses.switchBase}.${switchClasses.checked}`]: {
              transform: "translateX(16px)",
            },

            [`& .${svgIconClasses.root}`]: {
              width: "20px",
              height: "20px",
            },
          },
        },
        {
          props: { size: "medium" },
          style: {
            width: "32px",
            height: "20px",

            [`& .${switchClasses.switchBase}.${switchClasses.checked}`]: {
              transform: "translateX(12px)",
            },

            [`& .${svgIconClasses.root}`]: {
              width: "16px",
              height: "16px",
            },
          },
        },

        // * disabled
        {
          props: { disabled: true },
          style: {
            [`& .${svgIconClasses.root}`]: {
              color: getPalette("element.disabled-dark"),
            },
          },
        },
      ],
    },
  },
};
