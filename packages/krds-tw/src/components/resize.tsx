"use client";

import { Select as BaseSelect } from "@base-ui-components/react/select";
import { ArrowDropDown, ViewMode } from "@gracefullight/krds-icons";
import { cn } from "#/utils/cn";

// ? 스펙 예시: 작게 90 / 보통 100 / 조금 크게 110 / 크게 130 / 가장 크게 150 (5개 이내)
const DEFAULT_LEVELS = [90, 100, 110, 130, 150];

const DEFAULT_LABELS: Record<number, string> = {
  90: "작게",
  100: "보통",
  110: "조금 크게",
  130: "크게",
  150: "가장 크게",
};

interface ResizeProps {
  /** 현재 배율(%) */
  value?: number;
  onChange?: (value: number) => void;
  /** 옵션 목록 (5개 이내 권장) */
  levels?: number[];
  /** 배율별 설명적 레이블. 없으면 퍼센트로 표시 */
  labels?: Record<number, string>;
  /** 선택 시 문서 루트 글자 크기에 자동 적용 여부 */
  applyToRoot?: boolean;
  className?: string;
}

function applyZoom(level: number): void {
  document.documentElement.style.setProperty(
    "--krds-font-size-scale",
    String(level / 100),
  );
  document.documentElement.style.fontSize = `${level}%`;
}

/**
 * Resize — KRDS 화면 크기 조정
 *
 * 텍스트를 포함하여 화면에 표시되는 정보를 확대/축소한다.
 * 아이콘과 레이블 버튼으로 옵션 목록을 실행하며, 옵션은 설명적인 레이블과
 * 함께 5개 이내로 제공한다. 확대 시 콘텐츠가 가려지거나 기능이 손실되지
 * 않도록 반응형 레이아웃을 사용한다.
 */
function Resize({
  value = 100,
  onChange,
  levels = DEFAULT_LEVELS,
  labels = DEFAULT_LABELS,
  applyToRoot = true,
  className,
}: ResizeProps) {
  const labelFor = (level: number) => labels[level] ?? `${level}%`;

  const handleChange = (next: number | null) => {
    if (next == null || next === value) return;
    if (applyToRoot) applyZoom(next);
    onChange?.(next);
  };

  return (
    <BaseSelect.Root value={value} onValueChange={handleChange}>
      <BaseSelect.Trigger
        aria-label="화면 크기 조정"
        className={cn(
          "inline-flex h-9 items-center gap-1.5 rounded-md px-3",
          "border border-input-border bg-input-surface text-label-sm text-fg-basic",
          "transition-colors",
          "focus:border-input-border-active focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0",
          "data-[popup-open]:border-input-border-active",
          "disabled:cursor-not-allowed disabled:border-input-border-disabled disabled:bg-input-surface-disabled disabled:text-fg-disabled",
          "[&_svg]:size-[1.125rem] [&_svg]:shrink-0",
          className,
        )}
      >
        <ViewMode className="text-icon-gray" title="화면 크기" />
        <span className="flex-1 truncate">{labelFor(value)}</span>
        <BaseSelect.Icon
          className={cn(
            "text-icon-gray-light transition-transform duration-200",
            "data-[popup-open]:rotate-180",
          )}
        >
          <ArrowDropDown />
        </BaseSelect.Icon>
      </BaseSelect.Trigger>

      <BaseSelect.Portal>
        <BaseSelect.Positioner sideOffset={4} className="z-50">
          <BaseSelect.Popup
            className={cn(
              "min-w-[var(--anchor-width)] overflow-auto rounded-md-lg",
              "border border-border bg-popover text-popover-foreground shadow-2",
              "outline-none",
              "data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
              "data-[ending-style]:scale-95 data-[ending-style]:opacity-0",
              "transition-[opacity,transform] duration-150 ease-out",
            )}
          >
            <BaseSelect.List className="p-1">
              {levels.map((level) => (
                <BaseSelect.Item
                  key={level}
                  value={level}
                  className={cn(
                    "relative flex cursor-default items-center gap-2 rounded-sm px-3 py-2",
                    "text-body-md text-fg-basic select-none outline-none",
                    "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
                    "data-[selected]:font-medium",
                    "data-[disabled]:pointer-events-none data-[disabled]:text-fg-disabled",
                  )}
                >
                  <BaseSelect.ItemText>
                    {labelFor(level)} ({level}%)
                  </BaseSelect.ItemText>
                </BaseSelect.Item>
              ))}
            </BaseSelect.List>
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
}

Resize.displayName = "Resize";

export { Resize, type ResizeProps };
