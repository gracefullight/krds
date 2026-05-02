import type { ReactNode } from "react";

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
