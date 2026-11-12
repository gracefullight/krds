export interface CalendarEvent {
  /** YYYY-MM-DD */
  date: string;
  label: string;
  /** 범례 분류 (예: 공휴일, 휴관일) */
  type?: string;
}

export interface CalendarProps {
  /** 선택된 날짜 (YYYY-MM-DD, 제어 모드) */
  value?: string;
  defaultValue?: string;
  onChange?: (date: string) => void;
  events?: CalendarEvent[];
  /** 선택 가능한 최소 날짜 (YYYY-MM-DD) */
  minDate?: string;
  /** 선택 가능한 최대 날짜 (YYYY-MM-DD) */
  maxDate?: string;
  className?: string;
}
