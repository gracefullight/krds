"use client";

import type { KeyboardEvent } from "react";
import type {
  MainMenuItem,
  MainMenuProps,
} from "#/components/blocks/main-menu/main-menu.types";

import { Collapse, Drawer, List, ListItemText } from "@mui/material";
import { useCallback, useRef, useState } from "react";
import * as S from "#/components/blocks/main-menu/main-menu.styles";

/**
 * MainMenu — KRDS 메인 메뉴 (v1.1.0)
 *
 * - 데스크톱: 수평 드롭다운 내비게이션
 * - 모바일: 햄버거 아이콘으로 열리는 MUI Drawer
 * - v1.1.0: 드롭다운 패널 max-height = calc(100dvh - headerOffset) + overflow-y auto
 */
export default function MainMenu({ items, headerOffset = 64 }: MainMenuProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerExpanded, setDrawerExpanded] = useState<number | null>(null);

  const navRef = useRef<HTMLElement>(null);
  const topButtonRefs = useRef<(HTMLElement | null)[]>([]);

  /** 데스크톱: 특정 최상위 메뉴 토글 */
  const handleTopToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  /** 데스크톱: 패널 외부 클릭 시 닫기 */
  const handleNavBlur = useCallback((e: React.FocusEvent<HTMLElement>) => {
    if (!navRef.current?.contains(e.relatedTarget as Node)) {
      setOpenIndex(null);
    }
  }, []);

  /** 데스크톱: 키보드 내비게이션 */
  const handleTopKeyDown = useCallback(
    (e: KeyboardEvent<HTMLElement>, index: number) => {
      if (e.key === "Escape") {
        setOpenIndex(null);
        topButtonRefs.current[index]?.focus();
      } else if (e.key === "ArrowRight") {
        const nextIndex = (index + 1) % items.length;
        topButtonRefs.current[nextIndex]?.focus();
      } else if (e.key === "ArrowLeft") {
        const prevIndex = (index - 1 + items.length) % items.length;
        topButtonRefs.current[prevIndex]?.focus();
      } else if (e.key === "Enter" || e.key === " ") {
        handleTopToggle(index);
      }
    },
    [items.length, handleTopToggle],
  );

  /** 모바일 드로어 토글 */
  const handleDrawerToggle = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  /** 모바일 드로어 내 최상위 메뉴 확장 토글 */
  const handleDrawerItemToggle = useCallback((index: number) => {
    setDrawerExpanded((prev) => (prev === index ? null : index));
  }, []);

  /** 모바일 드로어: 링크 클릭 시 드로어 닫기 */
  const handleDrawerLinkClick = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  return (
    <S.NavContainer aria-label="주요 메뉴" ref={navRef} onBlur={handleNavBlur}>
      {/* 데스크톱 수평 메뉴 바 */}
      <S.MenuBar role="menubar">
        {items.map((item, index) => {
          const hasChildren =
            Array.isArray(item.children) && item.children.length > 0;
          const isExpanded = openIndex === index;

          return (
            <li key={item.label} style={{ listStyle: "none" }}>
              {item.href && !hasChildren ? (
                <S.TopLevelLink
                  href={item.href}
                  role="menuitem"
                  ref={(el) => {
                    topButtonRefs.current[index] = el;
                  }}
                  onClick={() => {
                    handleTopToggle(index);
                  }}
                  onKeyDown={(e: KeyboardEvent<HTMLAnchorElement>) =>
                    handleTopKeyDown(e, index)
                  }
                  tabIndex={0}
                >
                  {item.label}
                </S.TopLevelLink>
              ) : (
                <S.TopLevelButton
                  type="button"
                  role="menuitem"
                  aria-haspopup={hasChildren ? "true" : undefined}
                  aria-expanded={hasChildren ? isExpanded : undefined}
                  aria-controls={
                    hasChildren ? `dropdown-panel-${index}` : undefined
                  }
                  ref={(el) => {
                    topButtonRefs.current[index] = el;
                  }}
                  onClick={() => {
                    if (hasChildren) {
                      handleTopToggle(index);
                    }
                  }}
                  onKeyDown={(e: KeyboardEvent<HTMLButtonElement>) =>
                    handleTopKeyDown(e, index)
                  }
                  tabIndex={0}
                >
                  {item.label}
                </S.TopLevelButton>
              )}

              {/* 드롭다운 패널 — v1.1.0 max-height 적용 */}
              {hasChildren && (
                <S.DropdownPanel
                  id={`dropdown-panel-${index}`}
                  aria-label={`${item.label} 하위 메뉴`}
                  aria-hidden={!isExpanded}
                  $headerOffset={headerOffset}
                  $open={isExpanded}
                >
                  <S.DropdownInner>
                    {(item.children ?? []).map((child) => {
                      const hasSubChildren =
                        Array.isArray(child.children) &&
                        child.children.length > 0;

                      if (hasSubChildren) {
                        return (
                          <S.DropdownGroup key={child.label}>
                            <S.DropdownGroupTitle>
                              {child.href ? (
                                <a
                                  href={child.href}
                                  style={{
                                    color: "inherit",
                                    textDecoration: "none",
                                  }}
                                >
                                  {child.label}
                                </a>
                              ) : (
                                child.label
                              )}
                            </S.DropdownGroupTitle>
                            <S.DropdownList
                              role="menu"
                              aria-label={child.label}
                            >
                              {(child.children ?? []).map((sub) => (
                                <li
                                  key={sub.label}
                                  style={{ listStyle: "none" }}
                                >
                                  {sub.href ? (
                                    <S.DropdownItemLink
                                      href={sub.href}
                                      role="menuitem"
                                    >
                                      {sub.label}
                                    </S.DropdownItemLink>
                                  ) : (
                                    <S.DropdownItemButton
                                      type="button"
                                      role="menuitem"
                                    >
                                      {sub.label}
                                    </S.DropdownItemButton>
                                  )}
                                </li>
                              ))}
                            </S.DropdownList>
                          </S.DropdownGroup>
                        );
                      }

                      return (
                        <S.DropdownGroup key={child.label}>
                          <S.DropdownList role="menu" aria-label={item.label}>
                            <li style={{ listStyle: "none" }}>
                              {child.href ? (
                                <S.DropdownItemLink
                                  href={child.href}
                                  role="menuitem"
                                >
                                  {child.label}
                                </S.DropdownItemLink>
                              ) : (
                                <S.DropdownItemButton
                                  type="button"
                                  role="menuitem"
                                >
                                  {child.label}
                                </S.DropdownItemButton>
                              )}
                            </li>
                          </S.DropdownList>
                        </S.DropdownGroup>
                      );
                    })}
                  </S.DropdownInner>
                </S.DropdownPanel>
              )}
            </li>
          );
        })}
      </S.MenuBar>

      {/* 모바일 햄버거 버튼 */}
      <S.HamburgerButton
        type="button"
        aria-label={drawerOpen ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={drawerOpen}
        aria-controls="mobile-drawer-menu"
        onClick={handleDrawerToggle}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          {drawerOpen ? (
            // X 아이콘
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ) : (
            // 햄버거 아이콘
            <>
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </>
          )}
        </svg>
      </S.HamburgerButton>

      {/* 모바일 드로어 */}
      <Drawer
        id="mobile-drawer-menu"
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: "300px",
            paddingTop: `${headerOffset}px`,
          },
        }}
      >
        <List
          role="menu"
          aria-label="주요 메뉴"
          sx={{ width: "100%", padding: 0 }}
        >
          {items.map((item, index) => {
            const hasChildren =
              Array.isArray(item.children) && item.children.length > 0;
            const isExpanded = drawerExpanded === index;

            return (
              <li key={item.label} style={{ listStyle: "none" }}>
                {(() => {
                  if (hasChildren) {
                    return (
                      <>
                        <S.DrawerTopButton
                          type="button"
                          role="menuitem"
                          aria-haspopup="true"
                          aria-expanded={isExpanded}
                          onClick={() => handleDrawerItemToggle(index)}
                        >
                          <ListItemText primary={item.label} />
                        </S.DrawerTopButton>
                        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                          <List
                            role="menu"
                            aria-label={item.label}
                            disablePadding
                          >
                            {renderDrawerChildren(
                              item.children ?? [],
                              handleDrawerLinkClick,
                            )}
                          </List>
                        </Collapse>
                      </>
                    );
                  }
                  if (item.href) {
                    return (
                      <S.DrawerTopLink
                        href={item.href}
                        role="menuitem"
                        onClick={handleDrawerLinkClick}
                      >
                        <ListItemText primary={item.label} />
                      </S.DrawerTopLink>
                    );
                  }
                  return (
                    <S.DrawerTopButton
                      type="button"
                      role="menuitem"
                      onClick={handleDrawerLinkClick}
                    >
                      <ListItemText primary={item.label} />
                    </S.DrawerTopButton>
                  );
                })()}
              </li>
            );
          })}
        </List>
      </Drawer>
    </S.NavContainer>
  );
}

/** 모바일 드로어 내 하위 메뉴 렌더링 */
function renderDrawerChildren(
  children: MainMenuItem[],
  onLinkClick: () => void,
): React.ReactNode {
  return children.map((child) => {
    const hasSubChildren =
      Array.isArray(child.children) && child.children.length > 0;

    if (hasSubChildren) {
      return (
        <li key={child.label} style={{ listStyle: "none" }}>
          {child.href ? (
            <S.DrawerTopLink
              href={child.href}
              role="menuitem"
              onClick={onLinkClick}
              style={{ paddingLeft: "32px", fontWeight: 700 }}
            >
              <ListItemText primary={child.label} />
            </S.DrawerTopLink>
          ) : (
            <S.DrawerTopButton
              type="button"
              role="menuitem"
              style={{ paddingLeft: "32px", fontWeight: 700 }}
            >
              <ListItemText primary={child.label} />
            </S.DrawerTopButton>
          )}
          <List disablePadding>
            {(child.children ?? []).map((sub) => (
              <li key={sub.label} style={{ listStyle: "none" }}>
                {sub.href ? (
                  <S.DrawerSubLink
                    href={sub.href}
                    role="menuitem"
                    onClick={onLinkClick}
                  >
                    <ListItemText primary={sub.label} />
                  </S.DrawerSubLink>
                ) : (
                  <S.DrawerSubButton
                    type="button"
                    role="menuitem"
                    onClick={onLinkClick}
                  >
                    <ListItemText primary={sub.label} />
                  </S.DrawerSubButton>
                )}
              </li>
            ))}
          </List>
        </li>
      );
    }

    return (
      <li key={child.label} style={{ listStyle: "none" }}>
        {child.href ? (
          <S.DrawerSubLink
            href={child.href}
            role="menuitem"
            onClick={onLinkClick}
          >
            <ListItemText primary={child.label} />
          </S.DrawerSubLink>
        ) : (
          <S.DrawerSubButton
            type="button"
            role="menuitem"
            onClick={onLinkClick}
          >
            <ListItemText primary={child.label} />
          </S.DrawerSubButton>
        )}
      </li>
    );
  });
}
