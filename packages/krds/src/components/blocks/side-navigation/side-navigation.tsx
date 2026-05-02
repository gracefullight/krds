"use client";

import type { KeyboardEvent } from "react";
import type {
  SideNavigationItem,
  SideNavigationProps,
} from "#/components/blocks/side-navigation/side-navigation.types";

import { useCallback, useRef, useState } from "react";
import * as S from "#/components/blocks/side-navigation/side-navigation.styles";

/** 아래쪽 화살표 SVG 아이콘 (expand/collapse 용) */
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
      <S.SideNavListItem>
        <S.SideNavExpandButton
          type="button"
          $active={item.active}
          $depth={depth}
          aria-expanded={isExpanded}
          aria-controls={subListId}
          onClick={() => {
            item.onClick?.();
            onToggle(item.id);
          }}
          onKeyDown={(e: KeyboardEvent<HTMLButtonElement>) =>
            onItemKeyDown(e, item.id)
          }
        >
          {item.label}
          <S.SideNavExpandIcon $expanded={isExpanded} aria-hidden="true">
            <ChevronDownIcon />
          </S.SideNavExpandIcon>
        </S.SideNavExpandButton>

        <S.SideNavCollapseWrapper $expanded={isExpanded}>
          <S.SideNavSubList id={subListId} aria-label={item.label}>
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
          </S.SideNavSubList>
        </S.SideNavCollapseWrapper>
      </S.SideNavListItem>
    );
  }

  if (item.href) {
    return (
      <S.SideNavListItem>
        <S.SideNavLink
          href={item.href}
          $active={item.active}
          $depth={depth}
          aria-current={item.active ? "page" : undefined}
          onClick={item.onClick}
          onKeyDown={(e: KeyboardEvent<HTMLAnchorElement>) =>
            onItemKeyDown(e, item.id)
          }
        >
          {item.label}
        </S.SideNavLink>
      </S.SideNavListItem>
    );
  }

  return (
    <S.SideNavListItem>
      <S.SideNavButton
        type="button"
        $active={item.active}
        $depth={depth}
        aria-current={item.active ? "page" : undefined}
        onClick={item.onClick}
        onKeyDown={(e: KeyboardEvent<HTMLButtonElement>) =>
          onItemKeyDown(e, item.id)
        }
      >
        {item.label}
      </S.SideNavButton>
    </S.SideNavListItem>
  );
}

/**
 * SideNavigation — KRDS 사이드 메뉴
 *
 * - 트리 구조의 왼쪽 내비게이션
 * - children이 있는 항목은 expand/collapse 버튼으로 렌더링
 * - 활성 항목: aria-current="page" + 좌측 강조 border
 * - WCAG 2.2 AA: focus-visible, keyboard nav (Arrow, Enter, Space, Esc)
 */
export default function SideNavigation({
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

  /** 키보드 내비게이션: Arrow Up/Down, Esc */
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
        const next = focusable[currentIndex + 1];
        next?.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = focusable[currentIndex - 1];
        prev?.focus();
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

  const _renderItems = (list: SideNavigationItem[], depth: number) =>
    list.map((item, _index) => (
      <SideNavItemNode
        key={item.id}
        item={item}
        depth={depth}
        expandedIds={expandedIds}
        onToggle={handleToggle}
        onItemKeyDown={handleItemKeyDown}
      />
    ));

  return (
    <S.SideNavRoot ref={navRef} aria-label={ariaLabel}>
      <S.SideNavList aria-label={ariaLabel}>
        {items.map((item, _index) => (
          <SideNavItemNode
            key={item.id}
            item={item}
            depth={0}
            expandedIds={expandedIds}
            onToggle={handleToggle}
            onItemKeyDown={handleItemKeyDown}
          />
        ))}
      </S.SideNavList>
    </S.SideNavRoot>
  );
}
