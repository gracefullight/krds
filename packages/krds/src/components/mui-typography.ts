import type { Components } from "@mui/material/styles";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    "display-large": true;
    "display-medium": true;
    "display-small": true;

    "heading-xlarge": true;
    "heading-large": true;
    "heading-medium": true;
    "heading-small": true;
    "heading-xsmall": true;
    "heading-xxsmall": true;

    "body-large": true;
    "body-large-bold": true;
    "body-medium": true;
    "body-medium-bold": true;
    "body-small": true;
    "body-small-bold": true;
    "body-xsmall": true;
    "body-xsmall-bold": true;
  }
}

export const MuiTypography: Components["MuiTypography"] = {
  defaultProps: {
    variant: "body-medium",
  },
};
