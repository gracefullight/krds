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

/** shouldForwardProp 제거 대상 커스텀 prop */
export interface DropdownPanelStyledProps {
  $headerOffset: number;
  $open: boolean;
}
