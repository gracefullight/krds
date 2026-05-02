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

/** styled 컴포넌트에 전달되는 커스텀 props */
export interface SideNavItemStyledProps {
  $active?: boolean;
  $depth?: number;
}
