"use client";

import { type ComponentProps, type ReactNode, forwardRef } from "react";
import { cn } from "#/utils/cn";

export interface TabBarItem {
  /** 탭 항목의 고유 식별자 */
  id: string;
  /** 탭에 표시되는 레이블 */
  label: string;
  /** 탭 아이콘 (아이콘은 레이블 위에 배치됨) */
  icon: ReactNode;
  /** 클릭 시 이동할 URL (선택) */
  href?: string;
  /** 클릭 핸들러 (선택) */
  onClick?: () => void;
}

export interface TabBarsProps extends Omit<ComponentProps<"nav">, "onChange"> {
  /** 탭 항목 목록 */
  items: TabBarItem[];
  /** 현재 활성 탭의 id */
  value: string;
  /** 탭 변경 핸들러 */
  onChange: (id: string) => void;
  /** nav 요소의 접근성 레이블 */
  "aria-label"?: string;
}

const TabBars = forwardRef<HTMLElement, TabBarsProps>(
  (
    {
      items,
      value,
      onChange,
      "aria-label": ariaLabel = "주요 메뉴",
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <nav
        ref={ref}
        aria-label={ariaLabel}
        className={cn(
          "bg-surface-white border-t border-stroke-gray-light w-full",
          className,
        )}
        {...props}
      >
        <ul
          role="tablist"
          aria-label={ariaLabel}
          className="flex w-full list-none m-0 p-0"
        >
          {items.map((item) => {
            const isSelected = item.id === value;

            const handleClick = () => {
              onChange(item.id);
              item.onClick?.();
            };

            return (
              <li key={item.id} className="flex flex-1">
                <button
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`tabpanel-${item.id}`}
                  id={`tab-${item.id}`}
                  onClick={handleClick}
                  className={cn(
                    "relative flex flex-1 flex-col items-center justify-center gap-1",
                    "h-16 w-full min-w-0 px-1 py-3",
                    "text-label-xs font-bold select-none",
                    "transition-colors motion-reduce:transition-none",
                    "cursor-pointer border-0 bg-transparent",
                    // top border indicator pseudo-element via outline trick — use before pseudo via tailwind arbitrary
                    "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-stroke-gray-light before:content-['']",
                    isSelected
                      ? [
                          "text-fg-secondary",
                          "before:h-[3px] before:bg-stroke-secondary",
                          "[&_svg]:text-icon-secondary",
                        ]
                      : [
                          "text-fg-subtle",
                          "hover:bg-surface-gray-subtler hover:text-fg-basic",
                          "active:bg-surface-gray-subtle",
                          "[&_svg]:text-icon-gray-light",
                        ],
                    "focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-stroke-primary",
                  )}
                >
                  <span
                    className="flex h-6 w-6 items-center justify-center"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <span className="truncate max-w-full">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  },
);

TabBars.displayName = "TabBars";

export { TabBars };
