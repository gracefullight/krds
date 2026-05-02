import { Field } from "@base-ui-components/react/field";
import {
  type ChangeEvent,
  type ComponentProps,
  type ReactNode,
  forwardRef,
  useId,
  useState,
} from "react";
import { cn } from "#/utils/cn";

interface TextareaProps extends Omit<ComponentProps<"textarea">, "onChange"> {
  label?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  helperText?: ReactNode;
  error?: boolean;
  rows?: number;
  maxLength?: number;
  name?: string;
}

function buildAriaDescribedBy(
  external: string | undefined,
  helperId: string | undefined,
  counterId: string | undefined,
): string | undefined {
  return [external, helperId, counterId].filter(Boolean).join(" ") || undefined;
}

interface TextareaLabelProps {
  id: string;
  label: string;
  required: boolean;
  disabled: boolean;
}

function TextareaLabel({ id, label, required, disabled }: TextareaLabelProps) {
  return (
    <Field.Label
      htmlFor={id}
      className={cn(
        "text-label-sm text-fg-basic",
        disabled && "text-fg-disabled",
      )}
    >
      {label}
      {required && (
        <span aria-hidden="true" className="ml-0.5 text-fg-danger">
          *
        </span>
      )}
    </Field.Label>
  );
}

interface TextareaFooterProps {
  helperText: ReactNode;
  helperId: string;
  counterId: string;
  currentLength: number;
  maxLength: number | undefined;
  isOverLimit: boolean;
  error: boolean;
  disabled: boolean;
}

function TextareaFooter({
  helperText,
  helperId,
  counterId,
  currentLength,
  maxLength,
  isOverLimit,
  error,
  disabled,
}: TextareaFooterProps) {
  const showHelper = helperText !== undefined;
  const showCounter = maxLength !== undefined;
  if (!(showHelper || showCounter)) return null;
  return (
    <div className="flex items-start justify-between gap-2">
      {showHelper ? (
        <output
          id={helperId}
          className={cn(
            "flex items-center gap-1 text-label-xs",
            error ? "text-fg-danger" : "text-fg-information",
            disabled && "text-fg-disabled",
          )}
        >
          {helperText}
        </output>
      ) : (
        <span aria-hidden="true" />
      )}

      {showCounter && (
        <span
          id={counterId}
          aria-live="polite"
          aria-label={`${currentLength}자 입력됨, 최대 ${maxLength}자`}
          className={cn(
            "shrink-0 text-label-xs tabular-nums",
            isOverLimit ? "text-fg-danger" : "text-fg-subtle",
          )}
        >
          {currentLength}/{maxLength}
        </span>
      )}
    </div>
  );
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      id: idProp,
      label,
      value,
      defaultValue,
      onChange,
      placeholder,
      helperText,
      error = false,
      disabled = false,
      required = false,
      rows = 4,
      maxLength,
      name,
      "aria-describedby": externalDescribedBy,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const id = idProp ?? generatedId;
    const helperId = `${id}-helper`;
    const counterId = `${id}-counter`;

    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue ?? "");
    const currentValue = isControlled ? value : internalValue;
    const currentLength = currentValue?.length ?? 0;

    const isOverLimit = maxLength !== undefined && currentLength > maxLength;
    const isInvalid = error || isOverLimit;

    const ariaDescribedBy = buildAriaDescribedBy(
      externalDescribedBy,
      helperText !== undefined ? helperId : undefined,
      maxLength !== undefined ? counterId : undefined,
    );

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      const next = event.target.value;
      if (maxLength !== undefined && next.length > maxLength) return;
      if (!isControlled) setInternalValue(next);
      onChange?.(event);
    };

    return (
      <Field.Root
        disabled={disabled}
        invalid={isInvalid}
        className={cn("flex flex-col gap-1", className)}
      >
        {label && (
          <TextareaLabel
            id={id}
            label={label}
            required={required}
            disabled={disabled}
          />
        )}

        <textarea
          ref={ref}
          id={id}
          name={name}
          rows={rows}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          value={isControlled ? value : internalValue}
          onChange={handleChange}
          aria-invalid={isInvalid || undefined}
          aria-describedby={ariaDescribedBy}
          aria-required={required || undefined}
          className={cn(
            "w-full resize-y rounded-md-lg border bg-input-surface px-4 py-3 text-body-md text-fg-basic transition-colors",
            "placeholder:text-fg-disabled",
            "focus:border-input-border-active focus:outline-none",
            "disabled:cursor-not-allowed disabled:border-input-border-disabled disabled:bg-input-surface-disabled disabled:text-fg-disabled",
            isInvalid ? "border-input-border-error" : "border-input-border",
          )}
          {...rest}
        />

        <TextareaFooter
          helperText={helperText}
          helperId={helperId}
          counterId={counterId}
          currentLength={currentLength}
          maxLength={maxLength}
          isOverLimit={isOverLimit}
          error={error}
          disabled={disabled}
        />
      </Field.Root>
    );
  },
);

Textarea.displayName = "Textarea";
export { Textarea, type TextareaProps };
