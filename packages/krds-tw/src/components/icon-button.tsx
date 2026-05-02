import { type ComponentProps, forwardRef } from "react";
import { cn } from "#/utils/cn";

type IconButtonVariant = "primary" | "secondary" | "tertiary" | "text";
type IconButtonSize = "small" | "medium" | "large";

interface IconButtonProps extends ComponentProps<"button"> {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  "aria-label": string;
}

const variantStyles: Record<IconButtonVariant, string> = {
  primary:
    "bg-btn-primary-fill text-fg-inverse-static hover:bg-btn-primary-fill-hover active:bg-btn-primary-fill-pressed disabled:bg-btn-disabled-fill disabled:text-fg-disabled-on",
  secondary:
    "bg-btn-secondary-fill text-fg-primary outline outline-1 outline-btn-secondary-border hover:bg-btn-secondary-fill-hover active:bg-btn-secondary-fill-pressed disabled:bg-btn-disabled-fill disabled:text-fg-disabled-on disabled:outline-none",
  tertiary:
    "bg-btn-tertiary-fill text-fg-basic outline outline-1 outline-btn-tertiary-border hover:bg-btn-tertiary-fill-hover active:bg-btn-tertiary-fill-pressed disabled:bg-btn-disabled-fill disabled:text-fg-disabled-on disabled:outline-none",
  text: "bg-transparent text-fg-basic hover:bg-btn-text-fill-hover active:bg-btn-text-fill-pressed disabled:bg-transparent disabled:text-fg-disabled",
};

const sizeStyles: Record<IconButtonSize, string> = {
  small: "size-8",
  medium: "size-10",
  large: "size-12",
};

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant = "text",
      size = "medium",
      disabled,
      children,
      type = "button",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        type={type}
        className={cn(
          "inline-flex items-center justify-center rounded-md-lg font-bold shadow-none transition-colors select-none",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
          "disabled:cursor-not-allowed",
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

IconButton.displayName = "IconButton";
export {
  IconButton,
  type IconButtonProps,
  type IconButtonVariant,
  type IconButtonSize,
};
