import { get } from "es-toolkit/compat";
import TOKENS from "#/tokens";

type SemanticTokens = typeof TOKENS.semantic;

type DimensionValue<T, K extends keyof T> = T[K] extends {
  readonly value: infer V;
}
  ? V
  : never;

export type GapKey = keyof SemanticTokens["gap"];
export type GapValue<K extends GapKey> = DimensionValue<
  SemanticTokens["gap"],
  K
>;

export type PaddingKey = keyof SemanticTokens["padding"];
export type PaddingValue<K extends PaddingKey> = DimensionValue<
  SemanticTokens["padding"],
  K
>;

export type SizeHeightKey = keyof SemanticTokens["size-height"];
export type SizeHeightValue<K extends SizeHeightKey> = DimensionValue<
  SemanticTokens["size-height"],
  K
>;

/**
 * Returns the semantic gap token value (gap-1 … gap-12).
 */
export function getGap<K extends GapKey>(key: K): GapValue<K> {
  return get(TOKENS, `semantic.gap.${key}.value`) as GapValue<K>;
}

/**
 * Returns the semantic padding token value (padding-1 … padding-10).
 */
export function getPadding<K extends PaddingKey>(key: K): PaddingValue<K> {
  return get(TOKENS, `semantic.padding.${key}.value`) as PaddingValue<K>;
}

/**
 * Returns the semantic size-height token value (size-height-1 … size-height-11).
 */
export function getSizeHeight<K extends SizeHeightKey>(
  key: K,
): SizeHeightValue<K> {
  return get(TOKENS, `semantic.size-height.${key}.value`) as SizeHeightValue<K>;
}
