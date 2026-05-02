import type { ChangeEvent, ReactNode } from "react";

import { useId, useState } from "react";

import type { TextareaProps } from "#/components/blocks/textarea/textarea.types";

import * as S from "#/components/blocks/textarea/textarea.styles";

// ─── 내부 헬퍼 ───────────────────────────────────────────────────────────────

function buildAriaDescribedBy(
  helperText: ReactNode,
  maxLength: number | undefined,
  helperId: string,
  counterId: string,
): string | undefined {
  return (
    [
      helperText !== undefined ? helperId : null,
      maxLength !== undefined ? counterId : null,
    ]
      .filter(Boolean)
      .join(" ") || undefined
  );
}

// ─── 내부 서브컴포넌트 ────────────────────────────────────────────────────────

interface TextareaLabelRowProps {
  id: string;
  label: string;
  required: boolean;
  disabled: boolean;
}

function TextareaLabelRow({
  id,
  label,
  required,
  disabled,
}: TextareaLabelRowProps) {
  return (
    <S.TextareaLabel htmlFor={id} disabled={disabled}>
      {label}
      {required && (
        <S.TextareaRequiredMark aria-hidden="true">*</S.TextareaRequiredMark>
      )}
    </S.TextareaLabel>
  );
}

interface TextareaFooterRowProps {
  id: string;
  helperId: string;
  counterId: string;
  helperText: ReactNode;
  maxLength: number | undefined;
  currentLength: number;
  isOverLimit: boolean;
  error: boolean;
  disabled: boolean;
}

function TextareaFooterRow({
  id,
  helperId,
  counterId,
  helperText,
  maxLength,
  currentLength,
  isOverLimit,
  error,
  disabled,
}: TextareaFooterRowProps) {
  const showHelper = helperText !== undefined;
  const showCounter = maxLength !== undefined;
  if (!(showHelper || showCounter)) return null;
  return (
    <S.TextareaFooter>
      {showHelper ? (
        <S.TextareaHelperText
          id={helperId}
          htmlFor={id}
          error={error}
          disabled={disabled}
        >
          {helperText}
        </S.TextareaHelperText>
      ) : (
        <span />
      )}

      {showCounter && (
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
  );
}

// ─── 공개 컴포넌트 ────────────────────────────────────────────────────────────

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
  const isOverLimit = maxLength !== undefined && currentLength >= maxLength;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const next = event.target.value;
    if (maxLength !== undefined && next.length > maxLength) return;
    if (!isControlled) setInternalValue(next);
    onChange?.(event);
  };

  const ariaDescribedBy = buildAriaDescribedBy(
    helperText,
    maxLength,
    helperId,
    counterId,
  );

  return (
    <S.TextareaWrapper>
      {label && (
        <TextareaLabelRow
          id={id}
          label={label}
          required={required}
          disabled={disabled}
        />
      )}

      <S.TextareaField
        id={id}
        value={isControlled ? value : internalValue}
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

      <TextareaFooterRow
        id={id}
        helperId={helperId}
        counterId={counterId}
        helperText={helperText}
        maxLength={maxLength}
        currentLength={currentLength}
        isOverLimit={isOverLimit}
        error={error}
        disabled={disabled}
      />
    </S.TextareaWrapper>
  );
}
