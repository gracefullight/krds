import { type ComponentProps, forwardRef } from "react";
import { cn } from "#/utils/cn";

interface RadioProps extends Omit<ComponentProps<"input">, "type" | "size"> {
  size?: "medium" | "large";
  label?: string;
}

const sizeStyles = {
  medium: "size-5",
  large: "size-6",
} as const;

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, size = "medium", label, id, disabled, ...props }, ref) => {
    const inputId = id || `radio-${Math.random().toString(36).slice(2, 9)}`;

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
          type="radio"
          disabled={disabled}
          className={cn(
            "appearance-none rounded-full border-2 border-stroke-gray-dark transition-colors",
            "checked:border-element-primary checked:bg-element-primary",
            "disabled:border-element-disabled-light",
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

Radio.displayName = "Radio";
export { Radio, type RadioProps };
