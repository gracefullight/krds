export interface QuantityToggleProps {
  /**
   * 수량 용도를 안내하는 레이블
   */
  label: string;
  /**
   * @default 0
   */
  min?: number;
  /**
   * @default 10
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
   * @default false
   */
  disabled?: boolean;
  id?: string;
  className?: string;
}
