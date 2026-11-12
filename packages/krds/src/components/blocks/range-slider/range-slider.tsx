import { Slider } from "@mui/material";
import { useId, useState } from "react";
import * as S from "#/components/blocks/range-slider/range-slider.styles";
import type { RangeSliderProps } from "#/components/blocks/range-slider/range-slider.types";

/**
 * RangeSlider — KRDS 범위 슬라이더
 *
 * 연속된 범위에서 값을 선택한다. 레이블, 선택 값, 최소/최대 범위 값을 항상
 * 표시하며, 단계는 전체 범위의 10~20% 수준으로 설정하는 것이 적절하다.
 */
export default function RangeSlider({
  label,
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue,
  onChange,
  formatValue,
  showValue = true,
  disabled = false,
  id,
  className,
}: RangeSliderProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue ?? min);
  const currentValue = isControlled ? value : internalValue;

  const displayValue = formatValue
    ? formatValue(currentValue)
    : String(currentValue);

  const handleChange = (_event: Event, next: number | number[]) => {
    const nextValue = Array.isArray(next) ? next[0] : next;
    if (!isControlled) setInternalValue(nextValue);
    onChange?.(nextValue);
  };

  const labelId = `${inputId}-label`;

  return (
    <S.RangeSliderGroup className={className}>
      <S.RangeSliderLabelRow>
        <S.RangeSliderLabel id={labelId} htmlFor={inputId}>
          {label}
        </S.RangeSliderLabel>
        {showValue && (
          <S.RangeSliderValue htmlFor={inputId} aria-live="polite">
            {displayValue}
          </S.RangeSliderValue>
        )}
      </S.RangeSliderLabelRow>

      <Slider
        id={inputId}
        min={min}
        max={max}
        step={step}
        value={currentValue}
        disabled={disabled}
        onChange={handleChange}
        aria-labelledby={labelId}
        getAriaValueText={(v) => (formatValue ? formatValue(v) : String(v))}
        valueLabelDisplay="off"
      />

      <S.RangeSliderBounds aria-hidden="true">
        <span>{formatValue ? formatValue(min) : min}</span>
        <span>{formatValue ? formatValue(max) : max}</span>
      </S.RangeSliderBounds>
    </S.RangeSliderGroup>
  );
}
