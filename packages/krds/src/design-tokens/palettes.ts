import type {
  ColorKey,
  ColorTheme,
  PaletteKey,
  PaletteValue,
} from "#/design-tokens/token.types";

import { get } from "es-toolkit/compat";
import { getColor } from "#/design-tokens/colors";
import TOKENS from "#/design-tokens/tokens";

declare module "@mui/material/styles" {
  interface ColorSchemeOverrides {
    high: true;
    dark: false;
  }

  interface Palette {
    point: Palette["primary"];
  }

  interface PaletteOptions {
    point?: PaletteOptions["primary"];
  }

  interface PaletteColor {
    high?: string;
  }

  interface SimplePaletteColorOptions {
    high?: string;
  }
}

export function getPalette<
  K extends PaletteKey,
  T extends ColorTheme = "light",
>(key: K, theme?: T): PaletteValue<K, T> {
  const t = theme ?? "light";
  const palette = get(TOKENS, `mode-${t}`);
  const token = get(palette, `color.${key}`) as { readonly value: string };

  const match = /^\{primitive\.color\.[^.]+\.(.+)\}$/.exec(token.value);
  if (match) {
    const extractedKey = match[1] as ColorKey;
    return getColor(extractedKey) as PaletteValue<K, T>;
  }
  return token.value as PaletteValue<K, T>;
}
