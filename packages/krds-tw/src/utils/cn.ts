import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const KRDS_FONT_SIZES = [
  "label-xs",
  "label-sm",
  "label-md",
  "label-lg",
  "body-xs",
  "body-sm",
  "body-md",
  "body-lg",
  "heading-xs",
  "heading-sm",
  "heading-md",
  "heading-lg",
  "heading-xl",
  "heading-2xl",
  "display-sm",
  "display-md",
  "display-lg",
];

const customTwMerge = extendTailwindMerge({
  override: {
    classGroups: {
      "font-size": [{ text: KRDS_FONT_SIZES }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
