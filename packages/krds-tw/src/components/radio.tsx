import { Radio as BaseRadio } from "@base-ui-components/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui-components/react/radio-group";
import { type ComponentProps, type ReactNode, useId } from "react";
import { cn } from "#/utils/cn";

// RadioGroup

interface RadioGroupProps
  extends Omit<ComponentProps<"div">, "onChange" | "defaultValue"> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  name?: string;
}

function RadioGroup({
  className,
  value,
  defaultValue,
  onValueChange,
  disabled,
  readOnly,
  required,
  name,
  children,
  ...props
}: RadioGroupProps) {
  return (
    <BaseRadioGroup
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange as ((v: unknown) => void) | undefined}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      name={name}
      className={cn("flex flex-col gap-2", className)}
      {...props}
    >
      {children}
    </BaseRadioGroup>
  );
}

RadioGroup.displayName = "RadioGroup";

// Radio

interface RadioProps {
  value: string;
  size?: "medium" | "large";
  label?: ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  className?: string;
  id?: string;
}

const sizeStyles = {
  medium: "size-5",
  large: "size-6",
} as const;

function Radio({
  className,
  size = "medium",
  label,
  value,
  disabled,
  readOnly,
  required,
  id: idProp,
}: RadioProps) {
  const generatedId = useId();
  const id = idProp ?? generatedId;

  return (
    <label
      htmlFor={id}
      className={cn(
        "inline-flex cursor-pointer items-center gap-2",
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
    >
      <BaseRadio.Root
        id={id}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        className={cn(
          "relative flex shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-stroke-gray-dark transition-colors",
          "data-[checked]:border-element-primary",
          "data-[disabled]:cursor-not-allowed data-[disabled]:border-element-disabled-light",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-element-primary",
          sizeStyles[size],
        )}
      >
        <BaseRadio.Indicator
          className={cn(
            "rounded-full bg-element-primary transition-transform",
            "data-[unchecked]:hidden",
            size === "medium" ? "size-2.5" : "size-3",
          )}
        />
      </BaseRadio.Root>
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
}

Radio.displayName = "Radio";

export { Radio, type RadioProps, RadioGroup, type RadioGroupProps };
