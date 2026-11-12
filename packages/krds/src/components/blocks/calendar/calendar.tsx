import { ArrowLeft, ArrowRight } from "@gracefullight/krds-icons";
import { useMemo, useState } from "react";
import * as S from "#/components/blocks/calendar/calendar.styles";
import type {
  CalendarEvent,
  CalendarProps,
} from "#/components/blocks/calendar/calendar.types";

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

function weekdayTone(index: number): "sun" | "sat" | undefined {
  if (index === 0) return "sun";
  if (index === 6) return "sat";
  return undefined;
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

/**
 * Calendar — KRDS 달력
 *
 * 날짜와 관련된 정보/기능을 제공한다. 연/월 탐색, 요일 헤딩, 날짜 상태(오늘/선택/
 * 선택 불가/비활성), 이벤트 범례를 포함한다. 날짜 상태는 색상 외 수단(굵기·밑줄·
 * 식별자·대체 텍스트)으로도 구분하며 모든 기능은 키보드로 실행할 수 있다.
 */
export default function Calendar({
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

  const eventColor = (event: CalendarEvent) =>
    event.type
      ? S.EVENT_COLORS[eventTypes.indexOf(event.type) % S.EVENT_COLORS.length]
      : S.EVENT_COLORS[0];

  return (
    <S.CalendarContainer className={className}>
      <S.CalendarHeader>
        <S.CalendarNavButton aria-label="이전 달" onClick={() => moveMonth(-1)}>
          <ArrowLeft size={20} />
        </S.CalendarNavButton>

        <S.CalendarSelectGroup>
          <S.CalendarSelect
            aria-label="연도 선택"
            value={viewYear}
            onChange={(e) => setViewYear(Number(e.target.value))}
          >
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}년
              </option>
            ))}
          </S.CalendarSelect>
          <S.CalendarSelect
            aria-label="월 선택"
            value={viewMonth}
            onChange={(e) => setViewMonth(Number(e.target.value))}
          >
            {MONTHS.map((label, m) => (
              <option key={label} value={m}>
                {label}
              </option>
            ))}
          </S.CalendarSelect>
        </S.CalendarSelectGroup>

        <S.CalendarNavButton aria-label="다음 달" onClick={() => moveMonth(1)}>
          <ArrowRight size={20} />
        </S.CalendarNavButton>
      </S.CalendarHeader>

      <S.CalendarTable>
        <thead>
          <tr>
            {KOREAN_DAYS.map((day, index) => (
              <S.CalendarWeekday
                key={day}
                scope="col"
                $tone={weekdayTone(index)}
              >
                {day}
              </S.CalendarWeekday>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week) => (
            <tr key={week[0].key}>
              {week.map((cell) => {
                const dayEvents = eventMap.get(cell.key) ?? [];
                const selected = cell.key === selectedKey;
                const isToday = cell.key === todayKey;
                const disabled = isDisabled(cell.key);

                const stateText = [
                  isToday && "오늘",
                  selected && "선택됨",
                  disabled && "선택 불가",
                  ...dayEvents.map((e) => `일정: ${e.label}`),
                ]
                  .filter(Boolean)
                  .join(", ");

                const ariaLabel = `${cell.year}년 ${cell.month + 1}월 ${cell.day}일${stateText ? `, ${stateText}` : ""}`;

                return (
                  <S.CalendarDayCell key={cell.key}>
                    <S.CalendarDayButton
                      type="button"
                      aria-label={ariaLabel}
                      aria-pressed={selected}
                      aria-current={isToday ? "date" : undefined}
                      disabled={disabled}
                      $selected={selected}
                      $today={isToday}
                      $outside={cell.outsideMonth}
                      onClick={() => handleSelect(cell)}
                    >
                      {cell.day}
                      {dayEvents.length > 0 && (
                        <S.CalendarEventDots aria-hidden="true">
                          {dayEvents.slice(0, 3).map((event) => (
                            <S.CalendarEventDot
                              key={`${event.date}-${event.type ?? ""}-${event.label}`}
                              $color={eventColor(event)}
                            />
                          ))}
                        </S.CalendarEventDots>
                      )}
                    </S.CalendarDayButton>
                  </S.CalendarDayCell>
                );
              })}
            </tr>
          ))}
        </tbody>
      </S.CalendarTable>

      {eventTypes.length > 0 && (
        <S.CalendarLegend>
          {eventTypes.map((type, index) => (
            <S.CalendarLegendItem key={type}>
              <S.CalendarLegendDot
                aria-hidden="true"
                $color={S.EVENT_COLORS[index % S.EVENT_COLORS.length]}
              />
              {type}
            </S.CalendarLegendItem>
          ))}
        </S.CalendarLegend>
      )}
    </S.CalendarContainer>
  );
}
