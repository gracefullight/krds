import type tokens from "@/lib/krds/design-tokens/tokens";

export type ColorTheme = "light" | "high-contrast";

export type PrimitiveColorTokens = {
  [T in ColorTheme]: (typeof tokens.primitive.color)[T];
};

export type ModeColorTokens<T extends ColorTheme> =
  (typeof tokens)[`mode-${T}`]["color"];

export type ColorKey = {
  [K in keyof PrimitiveColorTokens["light"]]: `${K & string}.${Extract<keyof PrimitiveColorTokens["light"][K], string>}`;
}[keyof PrimitiveColorTokens["light"]];

export type ColorValue<
  K extends ColorKey,
  T extends ColorTheme = "light",
> = K extends `${infer C}.${infer P}`
  ? C extends keyof PrimitiveColorTokens[T]
    ? P extends keyof PrimitiveColorTokens[T][C]
      ? PrimitiveColorTokens[T][C][P] extends { readonly value: infer V }
        ? V
        : never
      : never
    : never
  : never;

export type PaletteKey = {
  [K in keyof ModeColorTokens<"light">]: `${K & string}.${Extract<keyof ModeColorTokens<"light">[K], string>}`;
}[keyof ModeColorTokens<"light">];

export type ResolveReference<V> =
  V extends `{primitive.color.${infer Th extends ColorTheme}.${infer K extends string}}`
    ? K extends ColorKey
      ? ColorValue<K, Th>
      : V
    : V;

export type PaletteValue<
  K extends PaletteKey,
  T extends ColorTheme = "light",
> = K extends `${infer C}.${infer P}`
  ? C extends keyof ModeColorTokens<T>
    ? P extends keyof ModeColorTokens<T>[C]
      ? ModeColorTokens<T>[C][P] extends { readonly value: infer V }
        ? ResolveReference<V>
        : never
      : never
    : never
  : never;
