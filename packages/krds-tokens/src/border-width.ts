import { get } from "es-toolkit/compat";
import type { ColorTheme } from "#/token.types";
import TOKENS from "#/tokens";

type BorderWidthTokens<T extends ColorTheme> =
  (typeof TOKENS)[`mode-${T}`]["border-width"];

export type BorderWidthKey = keyof BorderWidthTokens<"light">;
export type BorderWidthValue<
  K extends BorderWidthKey,
  T extends ColorTheme = "light",
> = BorderWidthTokens<T>[K] extends { readonly value: infer V } ? V : never;

/**
 * Returns the border-width token value.
 * Variable widths grow in high-contrast mode; static widths stay the same.
 */
export function getBorderWidth<
  K extends BorderWidthKey,
  T extends ColorTheme = "light",
>(key: K, theme?: T): BorderWidthValue<K, T> {
  const t = theme ?? "light";
  return get(TOKENS, `mode-${t}.border-width.${key}.value`) as BorderWidthValue<
    K,
    T
  >;
}
