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
  /** 라벨 텍스트 */
  label?: string;
  /** 현재 값 (제어 컴포넌트) */
  value?: string;
  /** 기본값 (비제어 컴포넌트) */
  defaultValue?: string;
  /** 변경 핸들러 */
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  /** 도움말 텍스트 */
  helperText?: ReactNode;
  /** 에러 상태 */
  error?: boolean;
  /** 표시 행 수 */
  rows?: number;
  /** 최대 글자 수 (설정 시 카운터 표시, 초과 입력 차단) */
  maxLength?: number;
  /** 필드 name */
  name?: string;
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
    // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: Textarea handles label, helper, error, counter, controlled/uncontrolled, and maxLength enforcement; splitting concerns is a future refactor.
  ) => {
    const generatedId = useId();
    const id = idProp ?? generatedId;
    const helperId = helperText !== undefined ? `${id}-helper` : undefined;
    const counterId = maxLength !== undefined ? `${id}-counter` : undefined;

    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue ?? "");
    const currentValue = isControlled ? value : internalValue;
    const currentLength = currentValue?.length ?? 0;

    const isOverLimit = maxLength !== undefined && currentLength >= maxLength;
    const isInvalid = error || isOverLimit;

    const ariaDescribedBy =
      [externalDescribedBy, helperId, counterId].filter(Boolean).join(" ") ||
      undefined;

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      const next = event.target.value;

      // maxLength 초과 입력 차단
      if (maxLength !== undefined && next.length > maxLength) {
        return;
      }

      if (!isControlled) {
        setInternalValue(next);
      }
      onChange?.(event);
    };

    return (
      <Field.Root
        disabled={disabled}
        invalid={isInvalid}
        className={cn("flex flex-col gap-1", className)}
      >
        {label && (
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

        <div className="flex items-start justify-between gap-2">
          {helperText !== undefined ? (
            <Field.Description
              id={helperId}
              // biome-ignore lint/a11y/useSemanticElements: <output> would change Field.Description rendering; role="status" is the minimal a11y change.
              role="status"
              className={cn(
                "flex items-center gap-1 text-label-xs",
                error ? "text-fg-danger" : "text-fg-information",
                disabled && "text-fg-disabled",
              )}
            >
              {helperText}
            </Field.Description>
          ) : (
            <span aria-hidden="true" />
          )}

          {maxLength !== undefined && (
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
      </Field.Root>
    );
  },
);

Textarea.displayName = "Textarea";
export { Textarea, type TextareaProps };
