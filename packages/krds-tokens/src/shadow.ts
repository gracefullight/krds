import type { ColorTheme } from "#/token.types";

import TOKENS from "#/tokens";

// shadow level types
type Level = 1 | 2 | 3;

// Precompute shadow CSS strings per theme and level with *exact* literal strings
const shadowStringMap = {
  light: {
    1: `0px 0px 2px ${TOKENS["mode-light"].color.alpha.shadow1.value} , 0px 1px 2px ${TOKENS["mode-light"].color.alpha.shadow1.value}`,
    2: `0px 0px 2px ${TOKENS["mode-light"].color.alpha.shadow2.value} , 0px 4px 8px ${TOKENS["mode-light"].color.alpha.shadow2.value}`,
    3: `0px 0px 2px ${TOKENS["mode-light"].color.alpha.shadow3.value} , 0px 7px 16px ${TOKENS["mode-light"].color.alpha.shadow3.value}`,
  },
  "high-contrast": {
    1: `0px 0px 2px ${TOKENS["mode-high-contrast"].color.alpha.shadow1.value} , 0px 1px 2px ${TOKENS["mode-high-contrast"].color.alpha.shadow1.value}`,
    2: `0px 0px 2px ${TOKENS["mode-high-contrast"].color.alpha.shadow2.value} , 0px 4px 8px ${TOKENS["mode-high-contrast"].color.alpha.shadow2.value}`,
    3: `0px 0px 2px ${TOKENS["mode-high-contrast"].color.alpha.shadow3.value} , 0px 7px 16px ${TOKENS["mode-high-contrast"].color.alpha.shadow3.value}`,
  },
} as const;

/**
 * Returns CSS box-shadow string for given level and theme with literal type inference.
 * Uses a single generic overload for better scalability with new themes.
 * @param level Shadow level (1-3).
 * @param theme Color theme ('light' or 'high-contrast'). Defaults to 'light'.
 */
export function getShadow<
  L extends Level,
  T extends ColorTheme = "light", // Default theme is 'light'
>(
  level: L,
  theme?: T, // Theme is optional
): (typeof shadowStringMap)[T][L]; // Return type uses indexed access

export function getShadow(level: Level, theme: ColorTheme = "light") {
  // Implementation simply returns the precomputed value
  return shadowStringMap[theme][level];
}
