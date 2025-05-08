// Breakpoint values for KRDS design system
export const BREAKPOINTS = {
  xsmall: 0,
  small: 360,
  medium: 768,
  large: 1024,
  xlarge: 1280,
  xxlarge: 1440,
} as const;

export type BreakpointKeys = keyof typeof BREAKPOINTS;
