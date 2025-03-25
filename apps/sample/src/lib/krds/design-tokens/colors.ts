import type {
  ColorKey,
  ColorTheme,
  ColorValue,
} from "@/lib/krds/design-tokens/token.types";

import TOKENS from "@/lib/krds/design-tokens/tokens";
import { get } from "es-toolkit/compat";

export function getColor<K extends ColorKey, T extends ColorTheme = "light">(
  key: K,
  theme?: T,
): ColorValue<K, T> {
  const t = theme ?? "light";
  const { value } = get(TOKENS.primitive.color, `${t}.${key}`);
  return value as ColorValue<K, T>;
}
