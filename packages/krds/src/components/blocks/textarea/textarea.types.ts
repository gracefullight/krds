import type { ChangeEvent } from "react";

export interface TextareaProps {
  /** 입력 필드 고유 ID */
  id?: string;
  /** 라벨 텍스트 */
  label?: string;
  /** 현재 값 (제어 컴포넌트) */
  value?: string;
  /** 기본값 (비제어 컴포넌트) */
  defaultValue?: string;
  /** 변경 핸들러 */
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  /** 플레이스홀더 */
  placeholder?: string;
  /** 도움말 텍스트 */
  helperText?: string;
  /** 에러 상태 */
  error?: boolean;
  /** 최대 글자 수 (설정 시 카운터 표시, 초과 입력 차단) */
  maxLength?: number;
  /** 표시 행 수 */
  rows?: number;
  /** 비활성화 */
  disabled?: boolean;
  /** 필수 여부 */
  required?: boolean;
}

export interface TextareaStyleProps {
  error?: boolean;
  disabled?: boolean;
}
