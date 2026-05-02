import type { ChangeEvent } from "react";

import { useId, useState } from "react";

import type { TextareaProps } from "#/components/blocks/textarea/textarea.types";

import * as S from "#/components/blocks/textarea/textarea.styles";

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: Textarea handles label, helper, error, counter, and maxLength enforcement; splitting concerns is a future refactor.
export default function Textarea({
  id: idProp,
  label,
  value,
  defaultValue,
  onChange,
  placeholder,
  helperText,
  error = false,
  maxLength,
  rows = 4,
  disabled = false,
  required = false,
}: TextareaProps) {
  const generatedId = useId();
  const id = idProp ?? generatedId;
  const helperId = `${id}-helper`;
  const counterId = `${id}-counter`;

  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const currentValue = isControlled ? value : internalValue;
  const currentLength = currentValue?.length ?? 0;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const next = event.target.value;

    // maxLength 초과 입력 차단 (block 방식)
    if (maxLength !== undefined && next.length > maxLength) {
      return;
    }

    if (!isControlled) {
      setInternalValue(next);
    }
    onChange?.(event);
  };

  const hasFooter = helperText !== undefined || maxLength !== undefined;
  const isOverLimit = maxLength !== undefined && currentLength >= maxLength;

  const ariaDescribedBy =
    [helperText ? helperId : null, maxLength !== undefined ? counterId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <S.TextareaWrapper>
      {label && (
        <S.TextareaLabel htmlFor={id} disabled={disabled}>
          {label}
          {required && (
            <S.TextareaRequiredMark aria-hidden="true">
              *
            </S.TextareaRequiredMark>
          )}
        </S.TextareaLabel>
      )}

      <S.TextareaField
        id={id}
        value={isControlled ? value : internalValue}
        defaultValue={isControlled ? undefined : undefined}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        required={required}
        aria-invalid={error || undefined}
        aria-describedby={ariaDescribedBy}
        aria-required={required || undefined}
        error={error || isOverLimit}
      />

      {hasFooter && (
        <S.TextareaFooter>
          {helperText !== undefined ? (
            <S.TextareaHelperText
              id={helperId}
              error={error}
              disabled={disabled}
              // biome-ignore lint/a11y/useSemanticElements: <output> would change styling; role="status" is the minimal a11y change.
              role="status"
            >
              {helperText}
            </S.TextareaHelperText>
          ) : (
            <span />
          )}

          {maxLength !== undefined && (
            <S.TextareaCounter
              id={counterId}
              error={isOverLimit}
              aria-live="polite"
              aria-label={`${currentLength}자 입력됨, 최대 ${maxLength}자`}
            >
              {currentLength} / {maxLength}
            </S.TextareaCounter>
          )}
        </S.TextareaFooter>
      )}
    </S.TextareaWrapper>
  );
}
