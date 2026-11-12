"use client";

import { ArrowLeft, ArrowRight } from "@gracefullight/krds-icons";
import { useMemo, useState } from "react";
import { cn } from "#/utils/cn";

const KOREAN_DAYS = ["일", "월", "화", "수", "목", "금", "토"] as const;

const MONTHS = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
] as const;

const EVENT_COLORS = [
  "bg-point-50",
  "bg-success-50",
  "bg-warning-40",
  "bg-information-50",
  "bg-secondary-50",
] as const;

interface CalendarEvent {
  /** YYYY-MM-DD */
  date: string;
  label: string;
  /** 범례 분류 (예: 공휴일, 휴관일) */
  type?: string;
}

interface CalendarProps {
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

interface DayCell {
  key: string;
  day: number;
  year: number;
  month: number;
  outsideMonth: boolean;
}

function toKey(year: number, month: number, day: number): string {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function parseKey(value: string | undefined): Date | null {
  if (!value) return null;
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]) - 1;
  const day = Number(match[3]);
  const d = new Date(year, month, day);
  if (
    d.getFullYear() !== year ||
    d.getMonth() !== month ||
    d.getDate() !== day
  ) {
    return null;
  }
  return d;
}

function buildCells(year: number, month: number): DayCell[] {
  const first = new Date(year, month, 1);
  const start = new Date(year, month, 1 - first.getDay());
  return Array.from({ length: 42 }, (_, i) => {
    const d = new Date(
      start.getFullYear(),
      start.getMonth(),
      start.getDate() + i,
    );
    return {
      key: toKey(d.getFullYear(), d.getMonth(), d.getDate()),
      day: d.getDate(),
      year: d.getFullYear(),
      month: d.getMonth(),
      outsideMonth: d.getMonth() !== month,
    };
  });
}

const navButtonStyles = cn(
  "inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full",
  "border border-stroke-gray-light bg-surface-white text-icon-gray transition-colors",
  "hover:bg-surface-gray-subtler",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
);

const selectStyles = cn(
  "cursor-pointer rounded-md border border-input-border bg-input-surface px-2 py-1 text-label-md text-fg-basic",
  "focus:border-input-border-active focus:outline-none focus:ring-2 focus:ring-ring",
);

interface CalendarDayProps {
  cell: DayCell;
  selected: boolean;
  isToday: boolean;
  disabled: boolean;
  events: CalendarEvent[];
  eventTypes: string[];
  onSelect: (cell: DayCell) => void;
}

function CalendarDay({
  cell,
  selected,
  isToday,
  disabled,
  events,
  eventTypes,
  onSelect,
}: CalendarDayProps) {
  const stateText = [
    isToday && "오늘",
    selected && "선택됨",
    disabled && "선택 불가",
    ...events.map((e) => `일정: ${e.label}`),
  ]
    .filter(Boolean)
    .join(", ");

  const ariaLabel = `${cell.year}년 ${cell.month + 1}월 ${cell.day}일${stateText ? `, ${stateText}` : ""}`;

  const dotColor = (event: CalendarEvent) =>
    event.type
      ? EVENT_COLORS[eventTypes.indexOf(event.type) % EVENT_COLORS.length]
      : "bg-element-primary";

  return (
    <td className="p-0.5 text-center">
      <button
        type="button"
        aria-label={ariaLabel}
        aria-pressed={selected}
        aria-current={isToday ? "date" : undefined}
        disabled={disabled}
        onClick={() => onSelect(cell)}
        className={cn(
          "relative inline-flex h-10 w-10 cursor-pointer flex-col items-center justify-center rounded-md text-body-md transition-colors",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
          cell.outsideMonth ? "text-fg-disabled" : "text-fg-basic",
          isToday && !selected && "font-bold underline",
          selected && "bg-btn-primary-fill font-bold text-fg-basic-inverse",
          !selected && "hover:bg-surface-gray-subtler",
          disabled &&
            "cursor-not-allowed text-fg-disabled line-through hover:bg-transparent",
        )}
      >
        {cell.day}
        {events.length > 0 && (
          <span aria-hidden="true" className="absolute bottom-1 flex gap-0.5">
            {events.slice(0, 3).map((event) => (
              <span
                key={`${event.date}-${event.type ?? ""}-${event.label}`}
                className={cn("h-1 w-1 rounded-full", dotColor(event))}
              />
            ))}
          </span>
        )}
      </button>
    </td>
  );
}

/**
 * Calendar — KRDS 달력
 *
 * 날짜와 관련된 정보/기능을 제공한다. 연/월 탐색, 요일 헤딩, 날짜 상태(오늘/선택/
 * 선택 불가/비활성), 이벤트 범례를 포함한다. 날짜 상태는 색상 외 수단(굵기·밑줄·
 * 식별자·대체 텍스트)으로도 구분하며 모든 기능은 키보드로 실행할 수 있다.
 */
function Calendar({
  value,
  defaultValue,
  onChange,
  events = [],
  minDate,
  maxDate,
  className,
}: CalendarProps) {
  const initial = parseKey(value ?? defaultValue) ?? new Date();
  const [viewYear, setViewYear] = useState(initial.getFullYear());
  const [viewMonth, setViewMonth] = useState(initial.getMonth());
  const [internalValue, setInternalValue] = useState(defaultValue);

  const isControlled = value !== undefined;
  const selectedKey = isControlled ? value : internalValue;

  const now = new Date();
  const todayKey = toKey(now.getFullYear(), now.getMonth(), now.getDate());

  const eventMap = useMemo(() => {
    const map = new Map<string, CalendarEvent[]>();
    for (const event of events) {
      const list = map.get(event.date) ?? [];
      list.push(event);
      map.set(event.date, list);
    }
    return map;
  }, [events]);

  const eventTypes = useMemo(() => {
    const types: string[] = [];
    for (const event of events) {
      if (event.type && !types.includes(event.type)) types.push(event.type);
    }
    return types;
  }, [events]);

  const cells = useMemo(
    () => buildCells(viewYear, viewMonth),
    [viewYear, viewMonth],
  );

  const yearOptions = useMemo(() => {
    const minYear = parseKey(minDate)?.getFullYear() ?? viewYear - 10;
    const maxYear = parseKey(maxDate)?.getFullYear() ?? viewYear + 10;
    const years: number[] = [];
    for (let y = minYear; y <= maxYear; y += 1) years.push(y);
    return years;
  }, [minDate, maxDate, viewYear]);

  const weeks = useMemo(() => {
    const rows: DayCell[][] = [];
    for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7));
    return rows;
  }, [cells]);

  const moveMonth = (delta: number) => {
    const d = new Date(viewYear, viewMonth + delta, 1);
    setViewYear(d.getFullYear());
    setViewMonth(d.getMonth());
  };

  const isDisabled = (key: string) =>
    (minDate !== undefined && key < minDate) ||
    (maxDate !== undefined && key > maxDate);

  const handleSelect = (cell: DayCell) => {
    if (isDisabled(cell.key)) return;
    if (!isControlled) setInternalValue(cell.key);
    onChange?.(cell.key);
    if (cell.outsideMonth) {
      setViewYear(cell.year);
      setViewMonth(cell.month);
    }
  };

  return (
    <div
      className={cn(
        "inline-flex flex-col gap-3 rounded-lg border border-stroke-gray-light bg-surface-white p-4",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          aria-label="이전 달"
          onClick={() => moveMonth(-1)}
          className={navButtonStyles}
        >
          <ArrowLeft size={20} />
        </button>

        <div className="flex items-center gap-1">
          <select
            aria-label="연도 선택"
            value={viewYear}
            onChange={(e) => setViewYear(Number(e.target.value))}
            className={selectStyles}
          >
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}년
              </option>
            ))}
          </select>
          <select
            aria-label="월 선택"
            value={viewMonth}
            onChange={(e) => setViewMonth(Number(e.target.value))}
            className={selectStyles}
          >
            {MONTHS.map((label, m) => (
              <option key={label} value={m}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          aria-label="다음 달"
          onClick={() => moveMonth(1)}
          className={navButtonStyles}
        >
          <ArrowRight size={20} />
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            {KOREAN_DAYS.map((day, index) => (
              <th
                key={day}
                scope="col"
                className={cn(
                  "pb-2 text-center text-label-sm font-bold text-fg-subtle",
                  index === 0 && "text-point-50",
                  index === 6 && "text-information-50",
                )}
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week) => (
            <tr key={week[0].key}>
              {week.map((cell) => (
                <CalendarDay
                  key={cell.key}
                  cell={cell}
                  selected={cell.key === selectedKey}
                  isToday={cell.key === todayKey}
                  disabled={isDisabled(cell.key)}
                  events={eventMap.get(cell.key) ?? []}
                  eventTypes={eventTypes}
                  onSelect={handleSelect}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {eventTypes.length > 0 && (
        <ul className="flex flex-wrap gap-3 border-t border-stroke-gray-light pt-3">
          {eventTypes.map((type, index) => (
            <li
              key={type}
              className="flex items-center gap-1.5 text-label-sm text-fg-subtle"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "h-2 w-2 rounded-full",
                  EVENT_COLORS[index % EVENT_COLORS.length],
                )}
              />
              {type}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Calendar.displayName = "Calendar";

export { Calendar, type CalendarEvent, type CalendarProps };
