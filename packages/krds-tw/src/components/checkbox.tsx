import { type ComponentProps, forwardRef } from "react";
import { cn } from "#/utils/cn";

interface CheckboxProps extends Omit<ComponentProps<"input">, "type" | "size"> {
  size?: "medium" | "large";
  label?: string;
}

const sizeStyles = {
  medium: "size-5",
  large: "size-6",
} as const;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, size = "medium", label, id, disabled, ...props }, ref) => {
    const inputId = id || `checkbox-${Math.random().toString(36).slice(2, 9)}`;

    return (
      <label
        htmlFor={inputId}
        className={cn(
          "inline-flex cursor-pointer items-center gap-2",
          disabled && "cursor-not-allowed opacity-50",
          className,
        )}
      >
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          disabled={disabled}
          className={cn(
            "appearance-none rounded-sm border border-stroke-gray-dark bg-surface-white transition-colors",
            "checked:border-element-primary checked:bg-element-primary",
            "disabled:border-element-disabled-light disabled:bg-surface-disabled",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-element-primary",
            sizeStyles[size],
          )}
          {...props}
        />
        {label && (
          <span className={cn("text-body-md text-fg-basic", disabled && "text-fg-disabled")}>
            {label}
          </span>
        )}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
export { Checkbox, type CheckboxProps };
