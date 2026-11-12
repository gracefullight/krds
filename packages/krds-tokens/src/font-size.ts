import { get } from "es-toolkit/compat";
import type { Device } from "#/layout";
import TOKENS from "#/tokens";

type FontSizeTokens<D extends Device> =
  (typeof TOKENS)[`responsive-${D}`]["font-size"];

export type FontSizeKey = {
  [C in keyof FontSizeTokens<"pc">]: `${C & string}.${Extract<
    keyof FontSizeTokens<"pc">[C],
    string
  >}`;
}[keyof FontSizeTokens<"pc">];

export type FontSizeValue<
  K extends FontSizeKey,
  D extends Device = "pc",
> = K extends `${infer C}.${infer P}`
  ? C extends keyof FontSizeTokens<D>
    ? P extends keyof FontSizeTokens<D>[C]
      ? FontSizeTokens<D>[C][P] extends { readonly value: infer V }
        ? V
        : never
      : never
    : never
  : never;

/**
 * Returns the responsive font-size token value (e.g. "display.large", "body.medium").
 * Defaults to the PC value set; pass "mobile" for the mobile value set.
 */
export function getFontSize<K extends FontSizeKey, D extends Device = "pc">(
  key: K,
  device?: D,
): FontSizeValue<K, D> {
  const d = device ?? "pc";
  return get(TOKENS, `responsive-${d}.font-size.${key}.value`) as FontSizeValue<
    K,
    D
  >;
}
