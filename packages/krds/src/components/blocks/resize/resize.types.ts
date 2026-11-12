export interface ResizeOption {
  /**
   * 확대 배율(%)
   */
  value: number;
  /**
   * 설명적인 옵션 레이블
   */
  label: string;
}

export interface ResizeProps {
  /**
   * 현재 배율(%)
   * @default 100
   */
  value?: number;
  onChange?: (value: number) => void;
  /**
   * 옵션 목록 (5개 이내 권장). 기본값: 작게 90 / 보통 100 / 조금 크게 110 / 크게 130 / 가장 크게 150
   */
  options?: ResizeOption[];
  /**
   * 선택 시 문서 루트 글자 크기에 자동 적용 여부
   * @default true
   */
  applyToRoot?: boolean;
  className?: string;
}
