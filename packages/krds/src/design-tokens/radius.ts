import { get } from "es-toolkit/compat";
import TOKENS from "#/design-tokens/tokens";

type NumberTokens = typeof TOKENS.primitive.number;

type SemanticRadiusTokens = typeof TOKENS.semantic.radius;

export type RadiusKey = keyof SemanticRadiusTokens;

type ResolveNumberReference<V> = V extends `{primitive.number.${infer K}}`
  ? K extends keyof NumberTokens
    ? NumberTokens[K]["value"]
    : V
  : V;

type RadiusValue<K extends RadiusKey> = SemanticRadiusTokens[K] extends {
  readonly value: infer V;
}
  ? ResolveNumberReference<V>
  : never;

export function getRadius<K extends RadiusKey>(key: K): RadiusValue<K> {
  const radius = get(TOKENS, `semantic.radius.${key}.value`);

  const match = /^\{primitive\.number\.(.+)\}$/.exec(radius);
  if (match) {
    const refKey = match[1] as keyof NumberTokens;
    return get(TOKENS, `primitive.number.${refKey}.value`) as RadiusValue<K>;
  }

  return radius as RadiusValue<K>;
}
