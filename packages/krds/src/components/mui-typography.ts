import type { Components } from "@mui/material/styles";

declare module "@mui/material/Typography" {
  export interface TypographyPropsVariantOverrides {
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

    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    caption: false;
    button: false;
    body1: false;
    body2: false;
  }
}

export const MuiTypography: Components["MuiTypography"] = {
  defaultProps: {
    variant: "body-medium",
  },
};
