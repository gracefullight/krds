import type { ColorKey, ColorTheme, ColorValue } from "#/token.types";

import { get } from "es-toolkit/compat";
import TOKENS from "#/tokens";

export function getColor<K extends ColorKey, T extends ColorTheme = "light">(
  key: K,
  theme?: T,
): ColorValue<K, T> {
  const t = theme ?? "light";
  const { value } = get(TOKENS.primitive.color, `${t}.${key}`);
  return value as ColorValue<K, T>;
}
