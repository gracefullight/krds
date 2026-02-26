import { type ComponentProps, type ReactNode, forwardRef } from "react";
import { cn } from "#/utils/cn";

type InputSize = "small" | "medium" | "large";

interface InputProps extends Omit<ComponentProps<"input">, "size"> {
  size?: InputSize;
  label?: string;
  helperText?: ReactNode;
  error?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}

const sizeStyles: Record<InputSize, string> = {
  small: "h-8 px-3 text-body-sm",
  medium: "h-10 px-4 text-body-md",
  large: "h-12 px-4 text-body-lg",
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size = "medium",
      label,
      helperText,
      error = false,
      disabled,
      startAdornment,
      endAdornment,
      id,
      ...props
    },
    ref,
  ) => {
    const inputId = id || `input-${Math.random().toString(36).slice(2, 9)}`;

    return (
      <div className={cn("flex flex-col gap-1", className)}>
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "text-label-sm text-fg-basic",
              disabled && "text-fg-disabled",
            )}
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {startAdornment && (
            <span className="absolute left-3 text-icon-gray-light">{startAdornment}</span>
          )}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={cn(
              "w-full rounded-md-lg border bg-input-surface text-fg-basic transition-colors",
              "placeholder:text-fg-disabled",
              "focus:border-input-border-active focus:outline-none",
              "disabled:cursor-not-allowed disabled:border-input-border-disabled disabled:bg-input-surface-disabled disabled:text-fg-disabled",
              error ? "border-input-border-error" : "border-input-border",
              sizeStyles[size],
              startAdornment && "pl-10",
              endAdornment && "pr-10",
            )}
            {...props}
          />
          {endAdornment && (
            <span className="absolute right-3 text-icon-gray-light">{endAdornment}</span>
          )}
        </div>
        {helperText && (
          <span
            className={cn(
              "mt-1 flex items-center gap-1 text-label-xs",
              error ? "text-fg-danger" : "text-fg-information",
            )}
          >
            {helperText}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
export { Input, type InputProps, type InputSize };
