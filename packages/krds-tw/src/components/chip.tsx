import {
  type ComponentProps,
  type ReactNode,
  forwardRef,
} from "react";
import { RoundCheck } from "@gracefullight/krds-icons";
import { cn } from "#/utils/cn";

type ChipSize = "small" | "medium" | "large";

interface ChipProps extends ComponentProps<"button"> {
  size?: ChipSize;
  selected?: boolean;
  multiple?: boolean;
  value?: string;
}

const sizeStyles: Record<ChipSize, string> = {
  small: "px-2.5 py-[8.5px] text-label-sm",
  medium: "px-3 py-[11px] text-label-md",
  large: "px-4 py-[13.5px] text-label-lg",
};

const iconSizes: Record<ChipSize, number> = {
  small: 12,
  medium: 16,
  large: 20,
};

const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  (
    {
      className,
      size = "medium",
      selected = false,
      disabled = false,
      multiple = false,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md border select-none transition-colors",
          "border-stroke-gray bg-action-white text-fg-basic",
          selected && "border-stroke-primary bg-action-primary-selected text-fg-primary",
          disabled && "cursor-not-allowed border-stroke-disabled bg-action-disabled text-fg-disabled-on",
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {(selected || multiple) && (
          <RoundCheck
            size={iconSizes[size]}
            className={cn(
              "mr-1",
              selected ? "text-icon-primary" : "text-element-disabled-dark",
              disabled && "text-icon-disabled-on",
            )}
          />
        )}
        {children}
      </button>
    );
  },
);

Chip.displayName = "Chip";
export { Chip, type ChipProps, type ChipSize };
