"use client";

import type { KeyboardEvent } from "react";
import { useCallback, useRef, useState } from "react";
import { cn } from "#/utils/cn";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export interface SideNavigationItem {
  /** 고유 식별자 */
  id: string;
  /** 내비게이션 항목 레이블 */
  label: string;
  /** 링크 URL (없으면 button으로 렌더링) */
  href?: string;
  /** 클릭 핸들러 */
  onClick?: () => void;
  /** 현재 활성 항목 여부 (aria-current="page" 설정) */
  active?: boolean;
  /** 하위 항목 (있으면 expand/collapse 버튼으로 렌더링) */
  children?: SideNavigationItem[];
}

export interface SideNavigationProps {
  /** 내비게이션 항목 배열 */
  items: SideNavigationItem[];
  /** nav 요소의 aria-label */
  "aria-label"?: string;
  /** 기본으로 펼쳐진 항목 id 목록 */
  defaultExpandedIds?: string[];
}

// ─────────────────────────────────────────────
// Internal helpers
// ─────────────────────────────────────────────

function ChevronDownIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** depth에 따른 좌측 padding (base: pl-4, 각 depth마다 +4) */
function depthPaddingLeft(depth: number): string {
  const pxMap: Record<number, string> = {
    0: "pl-4",
    1: "pl-8",
    2: "pl-12",
    3: "pl-16",
  };
  return pxMap[depth] ?? "pl-16";
}

/** 아이템 공통 base 클래스 */
function itemBase(active: boolean | undefined, depth: number): string {
  return cn(
    // layout
    "flex w-full items-center justify-between text-left",
    // border-left: active = primary, inactive = transparent
    "border-l-[3px]",
    active ? "border-l-border-primary" : "border-l-transparent",
    // background & text color
    active
      ? "bg-action-primary-selected text-fg-primary"
      : "bg-transparent text-fg-basic",
    // depth-based padding
    depthPaddingLeft(depth),
    depth === 0 ? "py-[10px] pr-4" : "py-2 pr-4",
    // typography
    depth === 0 ? "text-body-md" : "text-body-sm",
    // hover
    active
      ? "hover:bg-action-primary-selected"
      : "hover:bg-action-secondary-hover",
    // focus-visible
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-border-primary",
    // cursor
    "cursor-pointer",
    // reset button defaults
    "border-none bg-transparent font-inherit",
  );
}

// ─────────────────────────────────────────────
// SideNavItemNode
// ─────────────────────────────────────────────

interface SideNavItemNodeProps {
  item: SideNavigationItem;
  depth: number;
  expandedIds: Set<string>;
  onToggle: (id: string) => void;
  onItemKeyDown: (e: KeyboardEvent<HTMLElement>, id: string) => void;
}

function SideNavItemNode({
  item,
  depth,
  expandedIds,
  onToggle,
  onItemKeyDown,
}: SideNavItemNodeProps) {
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;
  const isExpanded = expandedIds.has(item.id);
  const subListId = `side-nav-sub-${item.id}`;

  if (hasChildren) {
    return (
      <li className="m-0 p-0">
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={subListId}
          className={cn(itemBase(item.active, depth), "inline-flex")}
          onClick={() => {
            item.onClick?.();
            onToggle(item.id);
          }}
          onKeyDown={(e: KeyboardEvent<HTMLButtonElement>) =>
            onItemKeyDown(e, item.id)
          }
        >
          {item.label}
          <span
            aria-hidden="true"
            className={cn(
              "ml-2 inline-flex shrink-0 items-center",
              "transition-transform duration-200 motion-reduce:transition-none",
              isExpanded ? "rotate-180" : "rotate-0",
            )}
          >
            <ChevronDownIcon />
          </span>
        </button>

        {/* Collapse wrapper */}
        <div
          className={cn(
            "overflow-hidden",
            "transition-[max-height] motion-reduce:transition-none",
            isExpanded
              ? "max-h-[9999px] duration-300 ease-in"
              : "max-h-0 duration-200 ease-out",
          )}
        >
          <ul
            id={subListId}
            aria-label={item.label}
            className="m-0 list-none p-0"
          >
            {item.children?.map((child) => (
              <SideNavItemNode
                key={child.id}
                item={child}
                depth={depth + 1}
                expandedIds={expandedIds}
                onToggle={onToggle}
                onItemKeyDown={onItemKeyDown}
              />
            ))}
          </ul>
        </div>
      </li>
    );
  }

  if (item.href) {
    return (
      <li className="m-0 p-0">
        <a
          href={item.href}
          aria-current={item.active ? "page" : undefined}
          className={cn(itemBase(item.active, depth), "no-underline")}
          onClick={item.onClick}
          onKeyDown={(e: KeyboardEvent<HTMLAnchorElement>) =>
            onItemKeyDown(e, item.id)
          }
        >
          {item.label}
        </a>
      </li>
    );
  }

  return (
    <li className="m-0 p-0">
      <button
        type="button"
        aria-current={item.active ? "page" : undefined}
        className={cn(itemBase(item.active, depth), "inline-flex")}
        onClick={item.onClick}
        onKeyDown={(e: KeyboardEvent<HTMLButtonElement>) =>
          onItemKeyDown(e, item.id)
        }
      >
        {item.label}
      </button>
    </li>
  );
}

// ─────────────────────────────────────────────
// SideNavigation
// ─────────────────────────────────────────────

/**
 * SideNavigation — KRDS 사이드 메뉴
 *
 * - 트리 구조의 왼쪽 내비게이션
 * - children이 있는 항목은 expand/collapse 버튼으로 렌더링
 * - 활성 항목: aria-current="page" + 좌측 강조 border
 * - WCAG 2.2 AA: focus-visible, keyboard nav (ArrowUp/Down, Escape)
 */
function SideNavigation({
  items,
  "aria-label": ariaLabel = "사이드 메뉴",
  defaultExpandedIds = [],
}: SideNavigationProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    () => new Set(defaultExpandedIds),
  );

  const navRef = useRef<HTMLElement>(null);

  const handleToggle = useCallback((id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  /** 키보드 내비게이션: ArrowUp/Down, Escape */
  const handleItemKeyDown = useCallback(
    (e: KeyboardEvent<HTMLElement>, _id: string) => {
      const nav = navRef.current;
      if (!nav) return;

      const focusable = Array.from(
        nav.querySelectorAll<HTMLElement>(
          "a:not([disabled]), button:not([disabled])",
        ),
      ).filter((el) => el.tabIndex !== -1);

      const current = document.activeElement as HTMLElement;
      const currentIndex = focusable.indexOf(current);

      if (e.key === "ArrowDown") {
        e.preventDefault();
        focusable[currentIndex + 1]?.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        focusable[currentIndex - 1]?.focus();
      } else if (e.key === "Escape") {
        // 현재 포커스된 버튼의 부모 expand 버튼으로 포커스 이동
        const parent = current
          .closest("[aria-expanded]")
          ?.parentElement?.closest("li")
          ?.querySelector<HTMLElement>("button[aria-expanded]");
        if (parent && parent !== current) {
          parent.focus();
        }
      }
    },
    [],
  );

  return (
    <nav
      ref={navRef}
      aria-label={ariaLabel}
      className="box-border min-w-[200px] w-full border-r border-r-border-gray-light bg-surface-white"
    >
      <ul aria-label={ariaLabel} className="m-0 list-none py-2 px-0">
        {items.map((item) => (
          <SideNavItemNode
            key={item.id}
            item={item}
            depth={0}
            expandedIds={expandedIds}
            onToggle={handleToggle}
            onItemKeyDown={handleItemKeyDown}
          />
        ))}
      </ul>
    </nav>
  );
}

SideNavigation.displayName = "SideNavigation";

export { SideNavigation };
