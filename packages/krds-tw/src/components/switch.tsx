import { type ComponentProps, forwardRef } from "react";
import { cn } from "#/utils/cn";

interface SwitchProps extends Omit<ComponentProps<"input">, "type" | "size"> {
  size?: "medium" | "large";
  label?: string;
}

const trackSize = {
  medium: "w-8 h-5",
  large: "w-10 h-6",
} as const;

const thumbSize = {
  medium: "size-4",
  large: "size-5",
} as const;

const thumbTranslate = {
  medium: "peer-checked:translate-x-3",
  large: "peer-checked:translate-x-4",
} as const;

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, size = "medium", label, id, disabled, ...props }, ref) => {
    const inputId = id || `switch-${Math.random().toString(36).slice(2, 9)}`;

    return (
      <label
        htmlFor={inputId}
        className={cn(
          "inline-flex cursor-pointer items-center gap-2",
          disabled && "cursor-not-allowed opacity-50",
          className,
        )}
      >
        <span className="relative inline-flex items-center">
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            role="switch"
            aria-checked={props.checked ?? props.defaultChecked ?? false}
            disabled={disabled}
            className="peer sr-only"
            {...props}
          />
          <span
            className={cn(
              "rounded-full bg-element-gray transition-colors",
              "peer-checked:bg-element-primary",
              "peer-disabled:bg-element-disabled-light",
              trackSize[size],
            )}
          />
          <span
            className={cn(
              "absolute left-0.5 rounded-full bg-element-inverse transition-transform",
              "peer-disabled:bg-element-disabled-dark",
              thumbSize[size],
              thumbTranslate[size],
            )}
          />
        </span>
        {label && (
          <span className={cn("text-body-md text-fg-basic", disabled && "text-fg-disabled")}>
            {label}
          </span>
        )}
      </label>
    );
  },
);

Switch.displayName = "Switch";
export { Switch, type SwitchProps };
