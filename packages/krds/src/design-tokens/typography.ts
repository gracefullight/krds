import type { SxProps, Theme } from "@mui/material";

import { get } from "es-toolkit/compat";
import TOKENS from "#/design-tokens/tokens";

const TYPOGRAPHY = {
  pc: {
    display: {
      large: {
        fontSize: get(TOKENS, "responsive-pc.font-size.display.large.value"),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.1.value"),
      },
      medium: {
        fontSize: get(TOKENS, "responsive-pc.font-size.display.medium.value"),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.1.value"),
      },
      small: {
        fontSize: get(TOKENS, "responsive-pc.font-size.display.small.value"),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.1.value"),
      },
    },
    heading: {
      xlarge: {
        fontSize: get(TOKENS, "responsive-pc.font-size.heading.xlarge.value"),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.1.value"),
      },
      large: {
        fontSize: get(TOKENS, "responsive-pc.font-size.heading.large.value"),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.1.value"),
      },
      medium: {
        fontSize: get(TOKENS, "responsive-pc.font-size.heading.medium.value"),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      small: {
        fontSize: get(TOKENS, "responsive-pc.font-size.heading.medium.value"),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      xsmall: {
        fontSize: get(TOKENS, "responsive-pc.font-size.heading.xsmall.value"),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      xxsmall: {
        fontSize: get(TOKENS, "responsive-pc.font-size.heading.xxsmall.value"),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
    },
    body: {
      large: {
        fontSize: get(TOKENS, "responsive-pc.font-size.body.large.value"),
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      "large-bold": {
        fontSize: get(TOKENS, "responsive-pc.font-size.body.large.value"),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      medium: {
        fontSize: get(TOKENS, "responsive-pc.font-size.body.medium.value"),
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      "medium-bold": {
        fontSize: get(TOKENS, "responsive-pc.font-size.body.medium.value"),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      small: {
        fontSize: get(TOKENS, "responsive-pc.font-size.body.small.value"),
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      "small-bold": {
        fontSize: get(TOKENS, "responsive-pc.font-size.body.small.value"),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      xsmall: {
        fontSize: get(TOKENS, "responsive-pc.font-size.body.xsmall.value"),
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      "xsmall-bold": {
        fontSize: get(TOKENS, "responsive-pc.font-size.body.xsmall.value"),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
    },
    label: {
      large: {
        fontSize: get(TOKENS, "responsive-pc.font-size.label.large.value"),
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      medium: {
        fontSize: get(TOKENS, "responsive-pc.font-size.label.medium.value"),
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      small: {
        fontSize: get(TOKENS, "responsive-pc.font-size.label.small.value"),
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      xsmall: {
        fontSize: get(TOKENS, "responsive-pc.font-size.label.xsmall.value"),
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
    },
  },

  mobile: {
    display: {
      large: {
        fontSize: get(
          TOKENS,
          "responsive-mobile.font-size.display.large.value",
        ),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.1.value"),
      },
      medium: {
        fontSize: get(
          TOKENS,
          "responsive-mobile.font-size.display.medium.value",
        ),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.1.value"),
      },
      small: {
        fontSize: get(
          TOKENS,
          "responsive-mobile.font-size.display.small.value",
        ),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.1.value"),
      },
    },
    heading: {
      xlarge: {
        fontSize: get(
          TOKENS,
          "responsive-mobile.font-size.heading.xlarge.value",
        ),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.1.value"),
      },
      large: {
        fontSize: get(
          TOKENS,
          "responsive-mobile.font-size.heading.large.value",
        ),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.1.value"),
      },
      medium: {
        fontSize: get(
          TOKENS,
          "responsive-mobile.font-size.heading.medium.value",
        ),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      small: {
        fontSize: get(
          TOKENS,
          "responsive-mobile.font-size.heading.medium.value",
        ),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      xsmall: {
        fontSize: get(
          TOKENS,
          "responsive-mobile.font-size.heading.xsmall.value",
        ),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      xxsmall: {
        fontSize: get(
          TOKENS,
          "responsive-mobile.font-size.heading.xxsmall.value",
        ),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
    },
    body: {
      large: {
        fontSize: get(TOKENS, "responsive-mobile.font-size.body.large.value"),
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      "large-bold": {
        fontSize: get(TOKENS, "responsive-mobile.font-size.body.large.value"),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      medium: {
        fontSize: get(TOKENS, "responsive-mobile.font-size.body.medium.value"),
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      "medium-bold": {
        fontSize: get(TOKENS, "responsive-mobile.font-size.body.medium.value"),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      small: {
        fontSize: get(TOKENS, "responsive-mobile.font-size.body.small.value"),
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      "small-bold": {
        fontSize: get(TOKENS, "responsive-mobile.font-size.body.small.value"),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      xsmall: {
        fontSize: get(TOKENS, "responsive-mobile.font-size.body.xsmall.value"),
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      "xsmall-bold": {
        fontSize: get(TOKENS, "responsive-mobile.font-size.body.xsmall.value"),
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
    },
    label: {
      large: {
        fontSize: get(TOKENS, "responsive-mobile.font-size.label.large.value"),
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      medium: {
        fontSize: get(TOKENS, "responsive-mobile.font-size.label.medium.value"),
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      small: {
        fontSize: get(TOKENS, "responsive-mobile.font-size.label.small.value"),
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
      xsmall: {
        fontSize: get(TOKENS, "responsive-mobile.font-size.label.xsmall.value"),
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: get(TOKENS, "primitive.typo.letter-spacing.0.value"),
      },
    },
  },
} as const;

type TypographyTokens = typeof TYPOGRAPHY;

type ThreeLevelPaths<T> = T extends Record<
  string,
  Record<string, Record<string, SxProps<Theme>>>
>
  ? {
      [Platform in keyof T]: Platform extends string
        ? {
            [Category in keyof T[Platform]]: Category extends string
              ? {
                  [Size in keyof T[Platform][Category]]: Size extends string
                    ? `${Platform}.${Category}.${Size}`
                    : never;
                }[keyof T[Platform][Category]]
              : never;
          }[keyof T[Platform]]
        : never;
    }[keyof T]
  : never;

type TypographyPaths = ThreeLevelPaths<TypographyTokens>;

type TypographyLookup<K extends TypographyPaths> =
  K extends `${infer Platform}.${infer Category}.${infer Size}`
    ? Platform extends keyof TypographyTokens
      ? Category extends keyof TypographyTokens[Platform]
        ? Size extends keyof TypographyTokens[Platform][Category]
          ? TypographyTokens[Platform][Category][Size]
          : never
        : never
      : never
    : never;

export function getTypography<K extends TypographyPaths>(
  key: K,
): TypographyLookup<K> {
  return get(TYPOGRAPHY, key) as TypographyLookup<K>;
}
