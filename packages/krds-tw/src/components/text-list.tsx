import { type ComponentProps, type ReactNode, forwardRef } from "react";
import { cn } from "#/utils/cn";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

type TextListVariant = "ordered" | "unordered" | "none";

type TextListMarker =
  | "disc"
  | "circle"
  | "square"
  | "dash"
  | "decimal"
  | "decimal-leading-zero"
  | "lower-alpha"
  | "upper-alpha"
  | "lower-roman"
  | "upper-roman"
  | "none";

interface TextListItem {
  id: string;
  content: ReactNode;
}

interface TextListProps extends Omit<ComponentProps<"ul">, "children"> {
  variant?: TextListVariant;
  items: TextListItem[];
  marker?: TextListMarker;
}

// ─────────────────────────────────────────────
// Marker styles
// ─────────────────────────────────────────────

const markerStyles: Record<TextListMarker, string> = {
  disc: "list-disc",
  circle: "list-[circle]",
  square: "list-[square]",
  dash: "list-['\\2013\\20']",
  decimal: "list-decimal",
  "decimal-leading-zero": "list-[decimal-leading-zero]",
  "lower-alpha": "list-[lower-alpha]",
  "upper-alpha": "list-[upper-alpha]",
  "lower-roman": "list-[lower-roman]",
  "upper-roman": "list-[upper-roman]",
  none: "list-none",
} as const;

// ─────────────────────────────────────────────
// Default marker per variant
// ─────────────────────────────────────────────

const defaultMarker: Record<TextListVariant, TextListMarker> = {
  ordered: "decimal",
  unordered: "disc",
  none: "none",
};

// ─────────────────────────────────────────────
// TextList
// ─────────────────────────────────────────────

const TextList = forwardRef<HTMLOListElement | HTMLUListElement, TextListProps>(
  ({ className, variant = "unordered", items, marker, ...props }, ref) => {
    const resolvedMarker = marker ?? defaultMarker[variant];
    const Tag = variant === "ordered" ? "ol" : "ul";

    return (
      <Tag
        ref={ref as React.Ref<HTMLOListElement & HTMLUListElement>}
        className={cn(
          "text-body-md text-fg-basic",
          resolvedMarker !== "none" && "ps-6",
          markerStyles[resolvedMarker],
          className,
        )}
        {...(props as ComponentProps<"ol"> & ComponentProps<"ul">)}
      >
        {items.map((item) => (
          <li key={item.id} className="py-0.5">
            {item.content}
          </li>
        ))}
      </Tag>
    );
  },
);

TextList.displayName = "TextList";

export {
  TextList,
  type TextListProps,
  type TextListVariant,
  type TextListMarker,
  type TextListItem,
};
