"use client";

import { Close, Login, Menu, Search } from "@gracefullight/krds-icons";
import { type ReactNode, useState } from "react";
import { cn } from "#/utils/cn";

export interface HeaderNavItem {
  /** 고유 식별자 */
  id: string;
  /** 내비게이션 항목 레이블 */
  label: string;
  /** 링크 URL (없으면 button으로 렌더링) */
  href?: string;
  /** 클릭 핸들러 */
  onClick?: () => void;
  /** 현재 활성 항목 여부 */
  active?: boolean;
}

export interface HeaderProps {
  /** 로고 커스텀 슬롯 (기본값: logoText 텍스트) */
  logo?: ReactNode;
  /** 로고 텍스트 (logo prop 없을 때 사용) */
  logoText?: string;
  /** 내비게이션 항목 목록 */
  navigationItems?: HeaderNavItem[];
  /** 검색 버튼 표시 여부 */
  showSearch?: boolean;
  /** 로그인 버튼 표시 여부 */
  showLogin?: boolean;
  /** 검색 버튼 클릭 핸들러 */
  onSearchClick?: () => void;
  /** 로그인 버튼 클릭 핸들러 */
  onLoginClick?: () => void;
  /** 연락처/보조 정보 슬롯 (PC에서만 표시) */
  contactContent?: ReactNode;
  /** nav 요소의 aria-label */
  "aria-label"?: string;
}

const iconButtonClass = cn(
  "inline-flex items-center justify-center rounded p-2 text-fg-subtle",
  "bg-transparent border-none cursor-pointer transition-colors",
  "hover:bg-btn-text-fill-hover",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
  "md:p-2 p-1.5",
);

const navItemClass = cn(
  "text-label-lg text-fg-basic bg-transparent border-none rounded cursor-pointer",
  "px-3 py-2 no-underline font-[inherit] transition-colors",
  "hover:bg-btn-text-fill-hover hover:text-fg-primary",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
  "aria-[current=page]:text-fg-primary aria-[current=page]:font-bold",
);

const mobileNavItemClass = cn(
  "text-label-lg text-fg-basic bg-transparent border-none rounded cursor-pointer",
  "px-4 py-3 text-left no-underline font-[inherit] transition-colors",
  "hover:bg-btn-text-fill-hover hover:text-fg-primary",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
  "aria-[current=page]:text-fg-primary aria-[current=page]:font-bold",
);

export function Header({
  logo,
  logoText = "정부서비스",
  navigationItems,
  showSearch = true,
  showLogin = true,
  onSearchClick,
  onLoginClick,
  contactContent,
  "aria-label": ariaLabel = "주요 메뉴",
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const logoContent: ReactNode = logo ?? (
    <span className="text-heading-xs text-fg-bolder">{logoText}</span>
  );

  const hasNavItems = navigationItems && navigationItems.length > 0;

  return (
    <header className="bg-surface-white border-b border-stroke-gray-light sticky top-0 w-full z-50">
      <div className="flex items-center justify-between mx-auto max-w-[1280px] min-h-20 px-6 md:min-h-14 md:px-4">
        <a
          href="/"
          aria-label={`${logoText} 홈으로 이동`}
          className="flex items-center shrink-0 no-underline"
        >
          {logoContent}
        </a>

        {hasNavItems && (
          <nav
            aria-label={ariaLabel}
            className="hidden md:hidden lg:flex items-center flex-1 justify-center gap-2 px-6"
          >
            {navigationItems.map((item) =>
              item.href ? (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={item.onClick}
                  aria-current={item.active ? "page" : undefined}
                  className={navItemClass}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.id}
                  type="button"
                  onClick={item.onClick}
                  aria-current={item.active ? "page" : undefined}
                  className={navItemClass}
                >
                  {item.label}
                </button>
              ),
            )}
          </nav>
        )}

        <div className="flex items-center shrink-0 gap-2 md:gap-1">
          {contactContent && (
            <div className="hidden lg:flex items-center gap-4 text-body-sm text-fg-subtle">
              {contactContent}
            </div>
          )}

          {showSearch && (
            <button
              type="button"
              aria-label="검색"
              onClick={onSearchClick}
              className={iconButtonClass}
            >
              <Search size={24} />
            </button>
          )}

          {showLogin && (
            <button
              type="button"
              aria-label="로그인"
              onClick={onLoginClick}
              className={iconButtonClass}
            >
              <Login size={24} />
            </button>
          )}

          {hasNavItems && (
            <button
              type="button"
              aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={mobileMenuOpen}
              aria-controls="header-mobile-menu"
              onClick={toggleMobileMenu}
              className={cn(iconButtonClass, "flex lg:hidden")}
            >
              {mobileMenuOpen ? <Close size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {mobileMenuOpen && hasNavItems && (
        <nav
          id="header-mobile-menu"
          aria-label={ariaLabel}
          className="flex lg:hidden flex-col gap-1 bg-surface-white border-t border-stroke-gray-light w-full p-4"
        >
          {navigationItems.map((item) =>
            item.href ? (
              <a
                key={item.id}
                href={item.href}
                onClick={() => {
                  item.onClick?.();
                  setMobileMenuOpen(false);
                }}
                aria-current={item.active ? "page" : undefined}
                className={mobileNavItemClass}
              >
                {item.label}
              </a>
            ) : (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  item.onClick?.();
                  setMobileMenuOpen(false);
                }}
                aria-current={item.active ? "page" : undefined}
                className={mobileNavItemClass}
              >
                {item.label}
              </button>
            ),
          )}
        </nav>
      )}
    </header>
  );
}

export default Header;
