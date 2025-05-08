import type { ColorTheme, PaletteKey, PaletteValue } from "#/token.types";

import { get } from "es-toolkit/compat";
import TOKENS from "#/tokens";

export function getPalette<
  K extends PaletteKey,
  T extends ColorTheme = "light",
>(key: K, theme?: T): PaletteValue<K, T> {
  const t = theme ?? "light";
  const palette = get(TOKENS, `mode-${t}`);
  const token = get(palette, `color.${key}`) as { readonly value: string };

  return token.value as PaletteValue<K, T>;
}
