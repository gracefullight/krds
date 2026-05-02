import { Checkbox as BaseCheckbox } from "@base-ui-components/react/checkbox";
import { type ComponentProps, useId } from "react";
import { cn } from "#/utils/cn";

interface CheckboxProps
  extends Omit<
    ComponentProps<typeof BaseCheckbox.Root>,
    "render" | "className"
  > {
  size?: "medium" | "large";
  label?: string;
  className?: string;
  indeterminate?: boolean;
}

const sizeStyles = {
  medium: "size-5",
  large: "size-6",
} as const;

const Checkbox = ({
  className,
  size = "medium",
  label,
  id,
  disabled,
  indeterminate = false,
  ...props
}: CheckboxProps) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <label
      htmlFor={inputId}
      className={cn(
        "inline-flex cursor-pointer items-center gap-2",
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
    >
      <BaseCheckbox.Root
        id={inputId}
        disabled={disabled}
        indeterminate={indeterminate}
        className={cn(
          "relative appearance-none rounded-sm border border-stroke-gray-dark bg-surface-white transition-colors",
          "data-[checked]:border-element-primary data-[checked]:bg-element-primary",
          "data-[indeterminate]:border-element-primary data-[indeterminate]:bg-element-primary",
          "data-[disabled]:border-element-disabled-light data-[disabled]:bg-surface-disabled",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-element-primary",
          sizeStyles[size],
        )}
        {...props}
      >
        <BaseCheckbox.Indicator
          className="flex items-center justify-center text-surface-white"
          keepMounted
        >
          {indeterminate ? (
            <svg
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
              className="size-3"
            >
              <rect x="2" y="5" width="8" height="2" fill="currentColor" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
              className="size-3"
            >
              <path
                d="M2 6l3 3 5-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
      {label && (
        <span
          className={cn(
            "text-body-md text-fg-basic",
            disabled && "text-fg-disabled",
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
};

Checkbox.displayName = "Checkbox";
export { Checkbox, type CheckboxProps };
