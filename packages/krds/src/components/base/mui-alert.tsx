import type { Components, Theme } from "@mui/material";

import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";
import { alertClasses, alertTitleClasses, svgIconClasses } from "@mui/material";
import { getPalette } from "#/design-tokens/palettes";
import { getRadius } from "#/design-tokens/radius";
import { getTypography } from "#/design-tokens/typography";

declare module "@mui/material/Alert" {
  interface AlertPropsColorOverrides {
    danger: true;

    error: false;
  }
}

export const MuiAlert: Components["MuiAlert"] = {
  defaultProps: {
    iconMapping: {
      danger: <CancelIcon />,
      warning: <WarningIcon />,
      success: <CheckCircleIcon />,
      info: <InfoIcon />,
    },
  },
  styleOverrides: {
    root: ({ theme }) => ({
      ...getTypography("pc.body.medium"),

      color: getPalette("text.basic"),
      borderRadius: getRadius("xlarge2"),
      padding: "16px",

      [(theme as Theme).breakpoints.down("medium")]: {
        ...getTypography("mobile.body.medium"),
      },

      [`& .${alertClasses.message}`]: {
        padding: 0,
      },

      [`& .${alertClasses.message} > .${alertTitleClasses.root} + *`]: {
        marginTop: "8px",
        display: "block",
      },

      [`& .${alertClasses.icon}`]: {
        marginRight: "8px",
        padding: 0,

        [`& .${svgIconClasses.root}`]: {
          width: "24px",
          height: "24px",
        },
      },

      // * title이 있을 때, icon 위치 조정
      [`&:has(.${alertTitleClasses.root}) .${alertClasses.icon}`]: {
        marginTop: "-2px",
      },

      variants: [
        // * severity
        {
          props: { severity: "danger" },
          style: {
            backgroundColor: getPalette("surface.danger-subtler"),
            outline: `1px solid ${getPalette("border.danger-light")}`,

            [`& .${alertClasses.icon}`]: {
              color: getPalette("icon.danger"),
            },

            [`& .${alertClasses.message} .${alertTitleClasses.root}`]: {
              color: getPalette("text.danger"),
            },
          },
        },
        {
          props: { severity: "warning" },
          style: {
            backgroundColor: getPalette("surface.warning-subtler"),
            outline: `1px solid ${getPalette("border.warning-light")}`,

            [`& .${alertClasses.icon}`]: {
              color: getPalette("icon.warning"),
            },

            [`& .${alertClasses.message} .${alertTitleClasses.root}`]: {
              color: getPalette("text.warning"),
            },
          },
        },
        {
          props: { severity: "success" },
          style: {
            backgroundColor: getPalette("surface.success-subtler"),
            outline: `1px solid ${getPalette("border.success-light")}`,

            [`& .${alertClasses.icon}`]: {
              color: getPalette("icon.success"),
            },

            [`& .${alertClasses.message} .${alertTitleClasses.root}`]: {
              color: getPalette("text.success"),
            },
          },
        },
        {
          props: { severity: "info" },
          style: {
            backgroundColor: getPalette("surface.information-subtler"),
            outline: `1px solid ${getPalette("border.information-light")}`,

            [`& .${alertClasses.icon}`]: {
              color: getPalette("icon.information"),
            },

            [`& .${alertClasses.message} .${alertTitleClasses.root}`]: {
              color: getPalette("text.information"),
            },
          },
        },
      ],
    }),
  },
};
