"use client";

import { useId, useState } from "react";
import { cn } from "#/utils/cn";

interface RangeSliderProps {
  /** 슬라이더 용도를 안내하는 레이블 */
  label: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  /** 선택 값 표시 형식 (예: 값 뒤에 단위 붙이기) */
  formatValue?: (value: number) => string;
  /** 선택 값 표시 여부 */
  showValue?: boolean;
  disabled?: boolean;
  id?: string;
  className?: string;
}

/**
 * RangeSlider — KRDS 범위 슬라이더
 *
 * 연속된 범위에서 값을 선택한다. 레이블, 선택 값, 최소/최대 범위 값을 항상 표시하며
 * 선택 값은 슬라이더 위쪽에 배치한다. 단계는 전체 범위의 10~20% 수준으로 설정하는 것이 적절하다.
 */
function RangeSlider({
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

  const handleChange = (next: number) => {
    if (!isControlled) setInternalValue(next);
    onChange?.(next);
  };

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-center justify-between gap-2">
        <label htmlFor={inputId} className="text-label-md text-fg-basic">
          {label}
        </label>
        {showValue && (
          <output
            htmlFor={inputId}
            aria-live="polite"
            className="text-label-md font-bold text-fg-primary"
          >
            {displayValue}
          </output>
        )}
      </div>

      <input
        id={inputId}
        type="range"
        min={min}
        max={max}
        step={step}
        value={currentValue}
        disabled={disabled}
        aria-valuetext={displayValue}
        onChange={(e) => handleChange(Number(e.target.value))}
        className={cn(
          "h-2 w-full cursor-pointer appearance-none rounded-full bg-surface-gray-subtle accent-primary-50",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
          "disabled:cursor-not-allowed disabled:opacity-40",
        )}
      />

      <div
        aria-hidden="true"
        className="flex justify-between text-label-sm text-fg-subtle"
      >
        <span>{formatValue ? formatValue(min) : min}</span>
        <span>{formatValue ? formatValue(max) : max}</span>
      </div>
    </div>
  );
}

RangeSlider.displayName = "RangeSlider";

export { RangeSlider, type RangeSliderProps };
