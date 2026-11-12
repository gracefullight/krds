"use client";

import { useId, useState } from "react";
import { cn } from "#/utils/cn";

interface QuantityToggleProps {
  /** 수량 용도를 안내하는 레이블 */
  label: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
  id?: string;
  className?: string;
}

const buttonStyles = cn(
  "inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-md-lg",
  "border border-stroke-gray-light bg-surface-white text-icon-gray transition-colors",
  "hover:bg-surface-gray-subtler",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
  "disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-surface-white",
);

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
 * 한정된 범위 내에서 수량을 증감한다. 증감 버튼은 수량 필드를 가운데 두고 분리 배치하며,
 * 최소/최대 값에 도달하면 해당 버튼을 비활성화한다. 선택 범위는 11단계 이내를 권장하고,
 * 그보다 넓은 범위는 텍스트 입력 필드를 사용한다.
 */
function QuantityToggle({
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

  const clamp = (next: number) => Math.min(max, Math.max(min, next));

  const handleChange = (next: number) => {
    const clamped = clamp(next);
    if (clamped === currentValue) return;
    if (!isControlled) setInternalValue(clamped);
    onChange?.(clamped);
  };

  const atMin = currentValue <= min;
  const atMax = currentValue >= max;

  return (
    <fieldset
      id={groupId}
      className={cn("m-0 flex flex-col gap-2 border-none p-0", className)}
    >
      <legend className="text-label-md text-fg-basic">{label}</legend>

      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="수량 감소"
          disabled={disabled || atMin}
          onClick={() => handleChange(currentValue - step)}
          className={buttonStyles}
        >
          <MinusIcon />
        </button>

        <output
          aria-live="polite"
          className={cn(
            "min-w-16 rounded-md-lg border border-stroke-gray-light bg-input-surface px-4 py-2 text-center",
            "text-body-lg text-fg-basic",
            disabled && "opacity-40",
          )}
        >
          {currentValue}
        </output>

        <button
          type="button"
          aria-label="수량 증가"
          disabled={disabled || atMax}
          onClick={() => handleChange(currentValue + step)}
          className={buttonStyles}
        >
          <PlusIcon />
        </button>
      </div>
    </fieldset>
  );
}

QuantityToggle.displayName = "QuantityToggle";

export { QuantityToggle, type QuantityToggleProps };
