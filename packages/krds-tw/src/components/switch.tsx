import { Switch as BaseSwitch } from "@base-ui-components/react/switch";
import { type ComponentProps, forwardRef, useId } from "react";
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
  medium: "data-[checked]:translate-x-3",
  large: "data-[checked]:translate-x-4",
} as const;

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      className,
      size = "medium",
      label,
      id,
      disabled,
      checked,
      defaultChecked,
      onChange,
      readOnly,
      required,
      name,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const switchId = id ?? generatedId;

    return (
      <label
        htmlFor={switchId}
        className={cn(
          "inline-flex cursor-pointer items-center gap-2",
          disabled && "cursor-not-allowed opacity-50",
          className,
        )}
      >
        <span className="relative inline-flex items-center">
          <BaseSwitch.Root
            id={switchId}
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            name={name}
            inputRef={ref}
            onCheckedChange={(nextChecked) => {
              if (onChange) {
                const event = {
                  target: { checked: nextChecked },
                  currentTarget: { checked: nextChecked },
                } as React.ChangeEvent<HTMLInputElement>;
                onChange(event);
              }
            }}
            className={cn(
              "rounded-full bg-element-gray transition-colors",
              "data-[checked]:bg-element-primary",
              "data-[disabled]:bg-element-disabled-light",
              trackSize[size],
            )}
            {...(props as object)}
          >
            <BaseSwitch.Thumb
              className={cn(
                "absolute left-0.5 rounded-full bg-element-inverse transition-transform",
                "data-[disabled]:bg-element-disabled-dark",
                thumbSize[size],
                thumbTranslate[size],
              )}
            />
          </BaseSwitch.Root>
        </span>
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
  },
);

Switch.displayName = "Switch";
export { Switch, type SwitchProps };
