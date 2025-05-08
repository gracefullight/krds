import { get } from "es-toolkit/compat";
import TOKENS from "#/tokens";

type SemanticRadiusTokens = typeof TOKENS.semantic.radius;

export type RadiusKey = keyof SemanticRadiusTokens;

type RadiusValue<K extends RadiusKey> = SemanticRadiusTokens[K] extends {
  readonly value: infer V;
}
  ? V
  : never;

export function getRadius<K extends RadiusKey>(key: K): RadiusValue<K> {
  const radius = get(TOKENS, `semantic.radius.${key}.value`);

  return radius as RadiusValue<K>;
}
