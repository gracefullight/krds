import { useCallback, useId, useState } from "react";
import * as S from "#/components/blocks/quantity-toggle/quantity-toggle.styles";
import type { QuantityToggleProps } from "#/components/blocks/quantity-toggle/quantity-toggle.types";

function MinusIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M4 10h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M10 4v12M4 10h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * QuantityToggle — KRDS 수량토글
 *
 * 한정된 범위 내에서 수량을 증감한다. 증감 버튼은 수량 필드를 가운데 두고
 * 분리 배치하며, 최소/최대 값에 도달하면 해당 버튼을 비활성화한다.
 * 선택 범위는 11단계 이내를 권장한다.
 */
export default function QuantityToggle({
  label,
  min = 0,
  max = 10,
  step = 1,
  value,
  defaultValue,
  onChange,
  disabled = false,
  id,
  className,
}: QuantityToggleProps) {
  const generatedId = useId();
  const groupId = id ?? generatedId;

  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue ?? min);
  const currentValue = isControlled ? value : internalValue;

  const handleChange = useCallback(
    (next: number) => {
      const clamped = Math.min(max, Math.max(min, next));
      if (clamped === currentValue) return;
      if (!isControlled) setInternalValue(clamped);
      onChange?.(clamped);
    },
    [currentValue, isControlled, max, min, onChange],
  );

  const atMin = currentValue <= min;
  const atMax = currentValue >= max;

  return (
    <S.QuantityToggleGroup
      component="fieldset"
      id={groupId}
      className={className}
    >
      <S.QuantityToggleLabel>{label}</S.QuantityToggleLabel>

      <S.QuantityToggleRow>
        <S.QuantityToggleButton
          aria-label="수량 감소"
          disabled={disabled || atMin}
          onClick={() => handleChange(currentValue - step)}
        >
          <MinusIcon />
        </S.QuantityToggleButton>

        <S.QuantityToggleValue aria-live="polite">
          {currentValue}
        </S.QuantityToggleValue>

        <S.QuantityToggleButton
          aria-label="수량 증가"
          disabled={disabled || atMax}
          onClick={() => handleChange(currentValue + step)}
        >
          <PlusIcon />
        </S.QuantityToggleButton>
      </S.QuantityToggleRow>
    </S.QuantityToggleGroup>
  );
}
