export interface InPageNavigationItem {
  /** 섹션의 고유 식별자 (IntersectionObserver 타겟 id와 일치해야 함) */
  id: string;
  /** 탐색 링크에 표시되는 레이블 */
  label: string;
  /** 앵커 href (예: "#section-id") */
  href: string;
}

export interface InPageNavigationProps {
  /** 탐색 항목 목록 */
  items: InPageNavigationItem[];
  /** 현재 활성 섹션 id (controlled) */
  activeId?: string;
  /** nav 요소의 aria-label */
  "aria-label"?: string;
  /** sticky 포지셔닝 활성화 여부 */
  sticky?: boolean;
  /** sticky 시 상단 오프셋(px) */
  stickyTop?: number;
}
