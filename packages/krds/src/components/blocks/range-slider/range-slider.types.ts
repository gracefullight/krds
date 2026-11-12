export interface RangeSliderProps {
  /**
   * 슬라이더 용도를 안내하는 레이블
   */
  label: string;
  /**
   * @default 0
   */
  min?: number;
  /**
   * @default 100
   */
  max?: number;
  /**
   * @default 1
   */
  step?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  /**
   * 선택 값 표시 형식 (예: 값 뒤에 단위 붙이기)
   */
  formatValue?: (value: number) => string;
  /**
   * 선택 값 표시 여부
   * @default true
   */
  showValue?: boolean;
  /**
   * @default false
   */
  disabled?: boolean;
  id?: string;
  className?: string;
}
