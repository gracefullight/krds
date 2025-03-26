declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;

    xsmall: true;
    small: true;
    medium: true;
    large: true;
    xlarge: true;
    xxlarge: true;
  }
}

export const BREAKPOINTS = {
  xsmall: 0,
  small: 360,
  medium: 768,
  large: 1024,
  xlarge: 1280,
  xxlarge: 1440,
} as const;
