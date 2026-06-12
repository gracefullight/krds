import { getTypography } from "@gracefullight/krds-tokens";
import type { Theme } from "@mui/material";

type TypographyToken = Parameters<typeof getTypography>[0];

/**
 * Creates responsive typography styles for PC and mobile breakpoints.
 * Replaces the repetitive `(theme as Theme).breakpoints.down("medium")` pattern.
 */
export function responsiveTypography(token: string) {
  return ({ theme }: { theme: unknown }) => ({
    ...getTypography(`pc.${token}` as TypographyToken),
    [(theme as Theme).breakpoints.down("medium")]: {
      ...getTypography(`mobile.${token}` as TypographyToken),
    },
  });
}
