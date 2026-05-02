"use client";

import { useCallback } from "react";
import { cn } from "#/utils/cn";

const DEFAULT_LEVELS = [100, 110, 120, 130, 140];

interface ResizeProps {
  value?: number;
  onChange?: (value: number) => void;
  levels?: number[];
  className?: string;
}

function applyZoom(level: number): void {
  document.documentElement.style.setProperty(
    "--krds-font-size-scale",
    String(level / 100),
  );
  document.documentElement.style.fontSize = `${level}%`;
}

function Resize({
  value = 100,
  onChange,
  levels = DEFAULT_LEVELS,
  className,
}: ResizeProps) {
  const minLevel = levels[0] ?? 100;
  const maxLevel = levels[levels.length - 1] ?? 140;
  const defaultLevel = levels[0] ?? 100;

  const handleDecrease = useCallback(() => {
    const currentIndex = levels.indexOf(value);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : 0;
    const nextValue = levels[prevIndex] ?? value;
    applyZoom(nextValue);
    onChange?.(nextValue);
  }, [value, levels, onChange]);

  const handleIncrease = useCallback(() => {
    const currentIndex = levels.indexOf(value);
    const nextIndex =
      currentIndex < levels.length - 1 ? currentIndex + 1 : levels.length - 1;
    const nextValue = levels[nextIndex] ?? value;
    applyZoom(nextValue);
    onChange?.(nextValue);
  }, [value, levels, onChange]);

  const handleReset = useCallback(() => {
    applyZoom(defaultLevel);
    onChange?.(defaultLevel);
  }, [defaultLevel, onChange]);

  const isAtMin = value <= minLevel;
  const isAtMax = value >= maxLevel;
  const isAtDefault = value === defaultLevel;

  return (
    <fieldset
      aria-label="화면 글자 크기 조정"
      className={cn(
        "inline-flex items-center gap-1 rounded-md border border-stroke-gray bg-action-white p-1",
        className,
      )}
    >
      <button
        type="button"
        aria-label="글자 작게"
        disabled={isAtMin}
        onClick={handleDecrease}
        className={cn(
          "inline-flex h-8 min-w-8 items-center justify-center rounded px-2 text-label-sm font-bold transition-colors select-none",
          "text-fg-basic hover:bg-btn-text-fill-hover active:bg-btn-text-fill-pressed",
          "disabled:cursor-not-allowed disabled:text-fg-disabled",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
        )}
      >
        <span aria-hidden="true" className="text-base leading-none">
          A
        </span>
        <span aria-hidden="true" className="ml-px text-[0.6em] leading-none">
          -
        </span>
      </button>

      <button
        type="button"
        aria-label="기본 글자 크기로 초기화"
        disabled={isAtDefault}
        onClick={handleReset}
        className={cn(
          "inline-flex h-8 min-w-[3.5rem] items-center justify-center rounded px-2 text-label-sm transition-colors select-none",
          "text-fg-basic hover:bg-btn-text-fill-hover active:bg-btn-text-fill-pressed",
          "disabled:cursor-not-allowed disabled:text-fg-disabled",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
        )}
      >
        기본
      </button>

      <button
        type="button"
        aria-label="글자 크게"
        disabled={isAtMax}
        onClick={handleIncrease}
        className={cn(
          "inline-flex h-8 min-w-8 items-center justify-center rounded px-2 text-label-sm font-bold transition-colors select-none",
          "text-fg-basic hover:bg-btn-text-fill-hover active:bg-btn-text-fill-pressed",
          "disabled:cursor-not-allowed disabled:text-fg-disabled",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
        )}
      >
        <span aria-hidden="true" className="text-lg leading-none">
          A
        </span>
        <span aria-hidden="true" className="ml-px text-[0.6em] leading-none">
          +
        </span>
      </button>
    </fieldset>
  );
}

export { Resize, type ResizeProps };
