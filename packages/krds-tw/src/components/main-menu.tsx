"use client";

import { NavigationMenu } from "@base-ui-components/react/navigation-menu";
import {
  type KeyboardEvent,
  type ReactNode,
  useCallback,
  useRef,
  useState,
} from "react";
import { cn } from "#/utils/cn";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export interface MainMenuItem {
  /** 메뉴 레이블 */
  label: string;
  /** 메뉴 링크 */
  href?: string;
  /** 하위 메뉴 항목 */
  children?: MainMenuItem[];
}

export interface MainMenuProps {
  /** 메뉴 항목 배열 */
  items: MainMenuItem[];
  /**
   * 헤더 높이 오프셋 (px). v1.1.0 뷰포트 높이 aware max-height 계산에 사용됩니다.
   * @default 64
   */
  headerOffset?: number;
}

// ─────────────────────────────────────────────
// MainMenu
// ─────────────────────────────────────────────

/**
 * MainMenu — KRDS 메인 메뉴 (v1.1.0)
 *
 * - 데스크톱: Base UI NavigationMenu 기반 수평 드롭다운 내비게이션
 * - 모바일: 햄버거 아이콘으로 열리는 슬라이드 드로어
 * - v1.1.0: 드롭다운 패널 max-height = calc(100dvh - {headerOffset}px) + overflow-y auto
 */
export default function MainMenu({ items, headerOffset = 64 }: MainMenuProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerExpanded, setDrawerExpanded] = useState<number | null>(null);
  const drawerRef = useRef<HTMLDialogElement>(null);

  const handleDrawerToggle = useCallback(() => {
    const dialog = drawerRef.current;
    if (!dialog) return;
    if (drawerOpen) {
      dialog.close();
    } else {
      dialog.show();
    }
    setDrawerOpen((prev) => !prev);
    setDrawerExpanded(null);
  }, [drawerOpen]);

  const handleDrawerItemToggle = useCallback((index: number) => {
    setDrawerExpanded((prev) => (prev === index ? null : index));
  }, []);

  const handleDrawerLinkClick = useCallback(() => {
    drawerRef.current?.close();
    setDrawerOpen(false);
    setDrawerExpanded(null);
  }, []);

  const handleDrawerKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDialogElement>) => {
      if (e.key === "Escape") {
        drawerRef.current?.close();
        setDrawerOpen(false);
        setDrawerExpanded(null);
      }
    },
    [],
  );

  return (
    <>
      {/* ── 데스크톱 내비게이션 (md 이상) ── */}
      <NavigationMenu.Root
        aria-label="주요 메뉴"
        className="relative hidden md:block"
      >
        <NavigationMenu.List className="flex flex-row list-none m-0 p-0">
          {items.map((item) => {
            const hasChildren =
              Array.isArray(item.children) && item.children.length > 0;

            const renderNonChildItem = () => {
              if (item.href) {
                return (
                  <NavigationMenu.Link
                    href={item.href}
                    className={cn(
                      "inline-flex items-center px-4 py-3",
                      "text-label-md font-bold text-fg-basic no-underline",
                      "hover:bg-surface-gray-subtler hover:text-fg-primary",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
                      "transition-colors rounded-sm",
                    )}
                  >
                    {item.label}
                  </NavigationMenu.Link>
                );
              }
              return (
                <button
                  type="button"
                  className={cn(
                    "inline-flex items-center px-4 py-3",
                    "text-label-md font-bold text-fg-basic",
                    "bg-transparent border-none cursor-pointer select-none",
                    "hover:bg-surface-gray-subtler hover:text-fg-primary",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
                    "transition-colors rounded-sm",
                  )}
                >
                  {item.label}
                </button>
              );
            };

            return (
              <NavigationMenu.Item key={item.label}>
                {hasChildren ? (
                  <>
                    <NavigationMenu.Trigger
                      className={cn(
                        "inline-flex items-center gap-1 px-4 py-3",
                        "text-label-md font-bold text-fg-basic",
                        "bg-transparent border-none cursor-pointer select-none",
                        "hover:bg-surface-gray-subtler hover:text-fg-primary",
                        "data-[popup-open]:text-fg-primary",
                        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
                        "transition-colors rounded-sm",
                      )}
                    >
                      {item.label}
                      <NavigationMenu.Icon
                        className={cn(
                          "size-4 transition-transform duration-200",
                          "data-[open]:rotate-180",
                        )}
                      >
                        <ChevronDownIcon />
                      </NavigationMenu.Icon>
                    </NavigationMenu.Trigger>

                    <NavigationMenu.Portal>
                      <NavigationMenu.Positioner
                        className="z-50"
                        sideOffset={4}
                      >
                        <NavigationMenu.Popup
                          className={cn(
                            "bg-surface-white rounded-lg shadow-3",
                            "border border-divider-gray-light",
                            "data-[starting-style]:opacity-0 data-[ending-style]:opacity-0",
                            "transition-opacity duration-150",
                          )}
                        >
                          <DropdownPanel
                            item={item}
                            headerOffset={headerOffset}
                          />
                        </NavigationMenu.Popup>
                      </NavigationMenu.Positioner>
                    </NavigationMenu.Portal>
                  </>
                ) : (
                  renderNonChildItem()
                )}
              </NavigationMenu.Item>
            );
          })}
        </NavigationMenu.List>
      </NavigationMenu.Root>

      {/* ── 모바일 햄버거 버튼 (md 미만) ── */}
      <button
        type="button"
        aria-label={drawerOpen ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={drawerOpen}
        aria-controls="mobile-drawer-menu"
        onClick={handleDrawerToggle}
        className={cn(
          "flex md:hidden items-center justify-center",
          "size-10 rounded-sm",
          "text-fg-basic bg-transparent border-none cursor-pointer",
          "hover:bg-surface-gray-subtler",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
          "transition-colors",
        )}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          focusable={false}
        >
          {drawerOpen ? (
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>

      {/* ── 모바일 드로어 오버레이 ── */}
      {drawerOpen && (
        <button
          type="button"
          aria-label="메뉴 닫기"
          className="fixed inset-0 z-40 bg-canvas-dim md:hidden"
          onClick={handleDrawerToggle}
        />
      )}

      {/* ── 모바일 드로어 패널 ── */}
      <dialog
        id="mobile-drawer-menu"
        ref={drawerRef}
        aria-label="주요 메뉴"
        onKeyDown={handleDrawerKeyDown}
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-75 md:hidden",
          "bg-surface-white shadow-3 overflow-y-auto",
          "transition-transform duration-300 m-0 p-0 border-0 max-w-none max-h-none",
          drawerOpen ? "translate-x-0" : "-translate-x-full",
        )}
        style={{ paddingTop: `${headerOffset}px` }}
      >
        <ul role="menu" aria-label="주요 메뉴" className="list-none m-0 p-0">
          {items.map((item, index) => {
            const hasChildren =
              Array.isArray(item.children) && item.children.length > 0;
            const isExpanded = drawerExpanded === index;

            return (
              <li key={item.label} className="list-none">
                {hasChildren ? (
                  <>
                    <button
                      type="button"
                      role="menuitem"
                      aria-haspopup="true"
                      aria-expanded={isExpanded}
                      onClick={() => handleDrawerItemToggle(index)}
                      className={cn(
                        "flex items-center justify-between w-full px-4 py-3",
                        "text-label-md font-bold text-fg-basic",
                        "bg-transparent border-none cursor-pointer select-none text-left",
                        "hover:bg-surface-gray-subtler",
                        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
                        "transition-colors",
                      )}
                    >
                      {item.label}
                      <span
                        className={cn(
                          "ml-auto size-4 transition-transform duration-200",
                          isExpanded && "rotate-180",
                        )}
                        aria-hidden="true"
                      >
                        <ChevronDownIcon />
                      </span>
                    </button>

                    {isExpanded && (
                      <ul
                        role="menu"
                        aria-label={item.label}
                        className="list-none m-0 p-0 bg-surface-gray-subtler"
                      >
                        {renderDrawerChildren(
                          item.children ?? [],
                          handleDrawerLinkClick,
                          1,
                        )}
                      </ul>
                    )}
                  </>
                ) : (
                  renderDrawerLeaf(item, handleDrawerLinkClick)
                )}
              </li>
            );
          })}
        </ul>
      </dialog>
    </>
  );
}

function renderDrawerLeaf(item: MainMenuItem, onClick: () => void): ReactNode {
  const baseClass = cn(
    "flex items-center w-full px-4 py-3",
    "text-label-md font-bold text-fg-basic",
    "hover:bg-surface-gray-subtler hover:text-fg-primary",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
    "transition-colors",
  );
  if (item.href) {
    return (
      <a
        href={item.href}
        role="menuitem"
        onClick={onClick}
        className={cn(baseClass, "no-underline")}
      >
        {item.label}
      </a>
    );
  }
  return (
    <button
      type="button"
      role="menuitem"
      onClick={onClick}
      className={cn(
        baseClass,
        "text-left bg-transparent border-none cursor-pointer select-none",
      )}
    >
      {item.label}
    </button>
  );
}

// ─────────────────────────────────────────────
// DropdownPanel (데스크톱)
// ─────────────────────────────────────────────

interface DropdownPanelProps {
  item: MainMenuItem;
  headerOffset: number;
}

function DropdownPanel({ item, headerOffset }: DropdownPanelProps) {
  return (
    <div
      className="overflow-y-auto p-4 min-w-48"
      style={{
        maxHeight: `calc(100dvh - ${headerOffset}px)`,
      }}
    >
      <div className="flex flex-col gap-4">
        {(item.children ?? []).map((child) => {
          const hasSubChildren =
            Array.isArray(child.children) && child.children.length > 0;

          if (hasSubChildren) {
            return (
              <div key={child.label} className="flex flex-col gap-1">
                <div className="px-2 py-1 text-label-sm font-bold text-fg-subtle">
                  {child.href ? (
                    <a
                      href={child.href}
                      className="text-fg-subtle no-underline hover:text-fg-primary transition-colors"
                    >
                      {child.label}
                    </a>
                  ) : (
                    child.label
                  )}
                </div>
                <ul
                  role="menu"
                  aria-label={child.label}
                  className="list-none m-0 p-0 flex flex-col"
                >
                  {(child.children ?? []).map((sub) => (
                    <li key={sub.label} className="list-none">
                      {sub.href ? (
                        <NavigationMenu.Link
                          href={sub.href}
                          role="menuitem"
                          className={cn(
                            "block px-2 py-1.5 rounded-sm",
                            "text-body-md text-fg-basic no-underline",
                            "hover:bg-surface-gray-subtler hover:text-fg-primary",
                            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
                            "transition-colors",
                          )}
                        >
                          {sub.label}
                        </NavigationMenu.Link>
                      ) : (
                        <button
                          type="button"
                          role="menuitem"
                          className={cn(
                            "flex w-full px-2 py-1.5 rounded-sm text-left",
                            "text-body-md text-fg-basic",
                            "bg-transparent border-none cursor-pointer",
                            "hover:bg-surface-gray-subtler hover:text-fg-primary",
                            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
                            "transition-colors",
                          )}
                        >
                          {sub.label}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          }

          return (
            <ul
              key={child.label}
              role="menu"
              aria-label={item.label}
              className="list-none m-0 p-0 flex flex-col"
            >
              <li className="list-none">
                {child.href ? (
                  <NavigationMenu.Link
                    href={child.href}
                    role="menuitem"
                    className={cn(
                      "block px-2 py-1.5 rounded-sm",
                      "text-body-md text-fg-basic no-underline",
                      "hover:bg-surface-gray-subtler hover:text-fg-primary",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
                      "transition-colors",
                    )}
                  >
                    {child.label}
                  </NavigationMenu.Link>
                ) : (
                  <button
                    type="button"
                    role="menuitem"
                    className={cn(
                      "flex w-full px-2 py-1.5 rounded-sm text-left",
                      "text-body-md text-fg-basic",
                      "bg-transparent border-none cursor-pointer",
                      "hover:bg-surface-gray-subtler hover:text-fg-primary",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
                      "transition-colors",
                    )}
                  >
                    {child.label}
                  </button>
                )}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 모바일 드로어 하위 메뉴 렌더링
// ─────────────────────────────────────────────

function renderDrawerChildren(
  children: MainMenuItem[],
  onLinkClick: () => void,
  depth: number,
): React.ReactNode {
  const paddingLeft = `${depth * 16 + 16}px`;

  return children.map((child) => {
    const hasSubChildren =
      Array.isArray(child.children) && child.children.length > 0;

    if (hasSubChildren) {
      return (
        <li key={child.label} className="list-none">
          {child.href ? (
            <a
              href={child.href}
              role="menuitem"
              onClick={onLinkClick}
              className={cn(
                "flex items-center w-full py-2.5 no-underline",
                "text-label-sm font-bold text-fg-subtle",
                "hover:bg-surface-gray-subtle hover:text-fg-primary",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
                "transition-colors",
              )}
              style={{ paddingLeft }}
            >
              {child.label}
            </a>
          ) : (
            <span
              className="flex items-center w-full py-2.5 text-label-sm font-bold text-fg-subtle"
              style={{ paddingLeft }}
            >
              {child.label}
            </span>
          )}
          <ul
            role="menu"
            aria-label={child.label}
            className="list-none m-0 p-0"
          >
            {renderDrawerChildren(child.children ?? [], onLinkClick, depth + 1)}
          </ul>
        </li>
      );
    }

    return (
      <li key={child.label} className="list-none">
        {child.href ? (
          <a
            href={child.href}
            role="menuitem"
            onClick={onLinkClick}
            className={cn(
              "flex items-center w-full py-2.5 no-underline",
              "text-body-md text-fg-basic",
              "hover:bg-surface-gray-subtle hover:text-fg-primary",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
              "transition-colors",
            )}
            style={{ paddingLeft }}
          >
            {child.label}
          </a>
        ) : (
          <button
            type="button"
            role="menuitem"
            onClick={onLinkClick}
            className={cn(
              "flex items-center w-full py-2.5 text-left",
              "text-body-md text-fg-basic",
              "bg-transparent border-none cursor-pointer select-none",
              "hover:bg-surface-gray-subtle",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
              "transition-colors",
            )}
            style={{ paddingLeft }}
          >
            {child.label}
          </button>
        )}
      </li>
    );
  });
}

// ─────────────────────────────────────────────
// 내부 아이콘
// ─────────────────────────────────────────────

function ChevronDownIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable={false}
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
