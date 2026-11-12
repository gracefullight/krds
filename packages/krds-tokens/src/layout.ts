import { get } from "es-toolkit/compat";
import TOKENS from "#/tokens";

export type Device = "pc" | "mobile";

type ResponsiveTokens<D extends Device> = (typeof TOKENS)[`responsive-${D}`];

export type GapLayoutKey = keyof ResponsiveTokens<"pc">["gap-layout"];
export type GapLayoutValue<
  K extends GapLayoutKey,
  D extends Device = "pc",
> = ResponsiveTokens<D>["gap-layout"][K] extends { readonly value: infer V }
  ? V
  : never;

export type PaddingCardKey = keyof ResponsiveTokens<"pc">["padding-card"];
export type PaddingCardValue<
  K extends PaddingCardKey,
  D extends Device = "pc",
> = ResponsiveTokens<D>["padding-card"][K] extends { readonly value: infer V }
  ? V
  : never;

/**
 * Returns the responsive gap-layout token value (e.g. "h1-h2", "breadcrumb-h1").
 * Defaults to the PC value set; pass "mobile" for the mobile value set.
 */
export function getGapLayout<K extends GapLayoutKey, D extends Device = "pc">(
  key: K,
  device?: D,
): GapLayoutValue<K, D> {
  const d = device ?? "pc";
  return get(
    TOKENS,
    `responsive-${d}.gap-layout.${key}.value`,
  ) as GapLayoutValue<K, D>;
}

/**
 * Returns the responsive padding-card token value (large, medium, small, xsmall).
 * Defaults to the PC value set; pass "mobile" for the mobile value set.
 */
export function getPaddingCard<
  K extends PaddingCardKey,
  D extends Device = "pc",
>(key: K, device?: D): PaddingCardValue<K, D> {
  const d = device ?? "pc";
  return get(
    TOKENS,
    `responsive-${d}.padding-card.${key}.value`,
  ) as PaddingCardValue<K, D>;
}
