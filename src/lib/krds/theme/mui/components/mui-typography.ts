import type { Components } from "@mui/material/styles";
import type { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    "display-large": CSSProperties;
    "display-medium": CSSProperties;
    "display-small": CSSProperties;

    "heading-xlarge": CSSProperties;
    "heading-large": CSSProperties;
    "heading-medium": CSSProperties;
    "heading-small": CSSProperties;
    "heading-xsmall": CSSProperties;
    "heading-xxsmall": CSSProperties;

    "body-large": CSSProperties;
    "body-large-bold": CSSProperties;
    "body-medium": CSSProperties;
    "body-medium-bold": CSSProperties;
    "body-small": CSSProperties;
    "body-small-bold": CSSProperties;
    "body-xsmall": CSSProperties;
    "body-xsmall-bold": CSSProperties;
  }

  interface TypographyVariantsOptions {
    "display-large"?: CSSProperties;
    "display-medium"?: CSSProperties;
    "display-small"?: CSSProperties;

    "heading-xlarge"?: CSSProperties;
    "heading-large"?: CSSProperties;
    "heading-medium"?: CSSProperties;
    "heading-small"?: CSSProperties;
    "heading-xsmall"?: CSSProperties;
    "heading-xxsmall"?: CSSProperties;

    "body-large"?: CSSProperties;
    "body-large-bold"?: CSSProperties;
    "body-medium"?: CSSProperties;
    "body-medium-bold"?: CSSProperties;
    "body-small"?: CSSProperties;
    "body-small-bold"?: CSSProperties;
    "body-xsmall"?: CSSProperties;
    "body-xsmall-bold"?: CSSProperties;
  }
}

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
