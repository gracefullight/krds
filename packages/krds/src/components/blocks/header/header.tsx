import type { ReactNode } from "react";

import { Close, Login, Menu, Search } from "@gracefullight/krds-icons";
import { useState } from "react";
import * as S from "#/components/blocks/header/header.styles";
import type { HeaderProps } from "#/components/blocks/header/header.types";

export default function Header({
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
    <S.HeaderLogoText>{logoText}</S.HeaderLogoText>
  );

  return (
    <S.HeaderRoot role="banner">
      <S.HeaderInner>
        <S.HeaderLogoArea href="/" aria-label={`${logoText} 홈으로 이동`}>
          {logoContent}
        </S.HeaderLogoArea>

        {navigationItems && navigationItems.length > 0 && (
          <S.HeaderNav aria-label={ariaLabel}>
            {navigationItems.map((item) =>
              item.href ? (
                <S.HeaderNavLink
                  key={item.id}
                  href={item.href}
                  onClick={item.onClick}
                  aria-current={item.active ? "page" : undefined}
                >
                  {item.label}
                </S.HeaderNavLink>
              ) : (
                <S.HeaderNavButton
                  key={item.id}
                  type="button"
                  onClick={item.onClick}
                  aria-current={item.active ? "page" : undefined}
                >
                  {item.label}
                </S.HeaderNavButton>
              ),
            )}
          </S.HeaderNav>
        )}

        <S.HeaderUtility>
          {contactContent && (
            <S.HeaderContactArea>{contactContent}</S.HeaderContactArea>
          )}

          {showSearch && (
            <S.HeaderIconButton
              type="button"
              aria-label="검색"
              onClick={onSearchClick}
            >
              <Search size={24} />
            </S.HeaderIconButton>
          )}

          {showLogin && (
            <S.HeaderIconButton
              type="button"
              aria-label="로그인"
              onClick={onLoginClick}
            >
              <Login size={24} />
            </S.HeaderIconButton>
          )}

          {navigationItems && navigationItems.length > 0 && (
            <S.HeaderMobileMenuButton
              type="button"
              aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={mobileMenuOpen}
              aria-controls="header-mobile-menu"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <Close size={24} /> : <Menu size={24} />}
            </S.HeaderMobileMenuButton>
          )}
        </S.HeaderUtility>
      </S.HeaderInner>

      {mobileMenuOpen && navigationItems && navigationItems.length > 0 && (
        <S.HeaderMobileDrawer id="header-mobile-menu" aria-label={ariaLabel}>
          {navigationItems.map((item) =>
            item.href ? (
              <S.HeaderMobileNavLink
                key={item.id}
                href={item.href}
                onClick={() => {
                  item.onClick?.();
                  setMobileMenuOpen(false);
                }}
                aria-current={item.active ? "page" : undefined}
              >
                {item.label}
              </S.HeaderMobileNavLink>
            ) : (
              <S.HeaderMobileNavButton
                key={item.id}
                type="button"
                onClick={() => {
                  item.onClick?.();
                  setMobileMenuOpen(false);
                }}
                aria-current={item.active ? "page" : undefined}
              >
                {item.label}
              </S.HeaderMobileNavButton>
            ),
          )}
        </S.HeaderMobileDrawer>
      )}
    </S.HeaderRoot>
  );
}
