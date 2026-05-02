"use client";

import { Popover } from "@base-ui-components/react/popover";
import { ArrowLeft, ArrowRight, Calendar } from "@gracefullight/krds-icons";
import {
  type ComponentProps,
  type KeyboardEvent,
  type ReactNode,
  useCallback,
  useId,
  useRef,
  useState,
} from "react";
import { cn } from "#/utils/cn";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const KOREAN_DAYS = ["일", "월", "화", "수", "목", "금", "토"] as const;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function parseIsoDate(value: string | undefined): Date | null {
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

function toIsoDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function getCalendarDays(year: number, month: number): (Date | null)[] {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = [];

  for (let i = 0; i < firstDay; i++) {
    cells.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(new Date(year, month, d));
  }
  return cells;
}

function chunkWeeks(cells: (Date | null)[]): (Date | null)[][] {
  const rows: (Date | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }
  return rows;
}

function getDayCellClassName(isSelected: boolean, isToday: boolean): string {
  if (isSelected) {
    return "bg-btn-primary-surface text-btn-primary-fg";
  }
  if (isToday) {
    return "border border-input-border-active text-fg-primary font-medium hover:bg-surface-gray-subtler";
  }
  return "text-fg-basic hover:bg-surface-gray-subtler";
}

// ---------------------------------------------------------------------------
// DayCell sub-component — reduces cognitive complexity of CalendarGrid
// ---------------------------------------------------------------------------

interface DayCellProps {
  date: Date;
  viewYear: number;
  viewMonth: number;
  isSelected: boolean;
  isToday: boolean;
  isDisabled: boolean;
  onSelectDay: (date: Date) => void;
}

function DayCell({
  date,
  viewYear,
  viewMonth,
  isSelected,
  isToday,
  isDisabled,
  onSelectDay,
}: DayCellProps) {
  const iso = toIsoDate(date);
  const todaySuffix = isToday ? " (오늘)" : "";
  const selectedSuffix = isSelected ? " (선택됨)" : "";
  const ariaLabel = `${viewYear}년 ${viewMonth + 1}월 ${date.getDate()}일${todaySuffix}${selectedSuffix}`;

  return (
    <td className="p-0 text-center">
      <button
        type="button"
        data-date={iso}
        disabled={isDisabled}
        aria-label={ariaLabel}
        aria-pressed={isSelected}
        onClick={() => onSelectDay(date)}
        className={cn(
          "mx-auto flex size-8 items-center justify-center rounded-full text-body-sm transition-colors",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus",
          "disabled:pointer-events-none disabled:text-fg-disabled",
          getDayCellClassName(isSelected, isToday),
        )}
      >
        {date.getDate()}
      </button>
    </td>
  );
}

// ---------------------------------------------------------------------------
// CalendarGrid sub-component
// ---------------------------------------------------------------------------

interface CalendarGridProps {
  viewYear: number;
  viewMonth: number;
  selectedDate: Date | null;
  minDate: Date | null;
  maxDate: Date | null;
  today: Date;
  onSelectDay: (date: Date) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onKeyDown?: (e: KeyboardEvent<HTMLTableElement>) => void;
}

function CalendarGrid({
  viewYear,
  viewMonth,
  selectedDate,
  minDate,
  maxDate,
  today,
  onSelectDay,
  onPrevMonth,
  onNextMonth,
  onKeyDown,
}: CalendarGridProps) {
  const cells = getCalendarDays(viewYear, viewMonth);
  const rows = chunkWeeks(cells);

  const isPrevDisabled =
    minDate !== null &&
    new Date(viewYear, viewMonth - 1, 1) <
      new Date(minDate.getFullYear(), minDate.getMonth(), 1);

  const isNextDisabled =
    maxDate !== null &&
    new Date(viewYear, viewMonth + 1, 1) >
      new Date(maxDate.getFullYear(), maxDate.getMonth(), 1);

  return (
    <div className="w-72 select-none p-4">
      {/* Month navigation header */}
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          aria-label="이전 달"
          disabled={isPrevDisabled}
          onClick={onPrevMonth}
          className={cn(
            "flex size-8 items-center justify-center rounded-full text-icon-gray transition-colors",
            "hover:bg-surface-gray-subtler focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus",
            "disabled:pointer-events-none disabled:text-fg-disabled",
          )}
        >
          <ArrowLeft size={16} title="" />
        </button>

        <span className="text-label-md text-fg-basic">
          {viewYear}년 {String(viewMonth + 1).padStart(2, "0")}월
        </span>

        <button
          type="button"
          aria-label="다음 달"
          disabled={isNextDisabled}
          onClick={onNextMonth}
          className={cn(
            "flex size-8 items-center justify-center rounded-full text-icon-gray transition-colors",
            "hover:bg-surface-gray-subtler focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus",
            "disabled:pointer-events-none disabled:text-fg-disabled",
          )}
        >
          <ArrowRight size={16} title="" />
        </button>
      </div>

      {/* Day grid */}
      <table
        aria-label={`${viewYear}년 ${viewMonth + 1}월 달력`}
        className="w-full border-collapse"
        onKeyDown={onKeyDown}
      >
        <thead>
          <tr>
            {KOREAN_DAYS.map((day) => (
              <th
                key={day}
                scope="col"
                aria-label={day}
                className="pb-2 text-center text-label-xs text-fg-subtle"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const rowKey = row.find((d) => d !== null);
            const rowLabel = rowKey ? toIsoDate(rowKey) : "empty";
            return (
              <tr key={rowLabel}>
                {row.map((date, colIdx) => {
                  if (!date) {
                    const emptyCellKey = `empty-${rowLabel}-${colIdx}`;
                    return <td key={emptyCellKey} aria-hidden="true" />;
                  }
                  const iso = toIsoDate(date);
                  const isSelected = selectedDate
                    ? isSameDay(date, selectedDate)
                    : false;
                  const isToday = isSameDay(date, today);
                  const isDisabled =
                    (minDate !== null && date < minDate) ||
                    (maxDate !== null && date > maxDate);
                  return (
                    <DayCell
                      key={iso}
                      date={date}
                      viewYear={viewYear}
                      viewMonth={viewMonth}
                      isSelected={isSelected}
                      isToday={isToday}
                      isDisabled={isDisabled}
                      onSelectDay={onSelectDay}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Keyboard navigation handler — extracted to reduce DatePicker complexity
// ---------------------------------------------------------------------------

function resolveArrowNavTarget(key: string, current: Date): Date | null {
  if (key === "ArrowRight") {
    const next = new Date(current);
    next.setDate(next.getDate() + 1);
    return next;
  }
  if (key === "ArrowLeft") {
    const next = new Date(current);
    next.setDate(next.getDate() - 1);
    return next;
  }
  if (key === "ArrowDown") {
    const next = new Date(current);
    next.setDate(next.getDate() + 7);
    return next;
  }
  if (key === "ArrowUp") {
    const next = new Date(current);
    next.setDate(next.getDate() - 7);
    return next;
  }
  return null;
}

function focusDateButton(iso: string) {
  requestAnimationFrame(() => {
    const btn = document.querySelector<HTMLButtonElement>(
      `[data-date="${iso}"]`,
    );
    btn?.focus();
  });
}

// ---------------------------------------------------------------------------
// DatePicker
// ---------------------------------------------------------------------------

interface DatePickerProps extends Omit<ComponentProps<"div">, "onChange"> {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  min?: string;
  max?: string;
  disabled?: boolean;
  label?: string;
  helperText?: ReactNode;
  error?: boolean;
  placeholder?: string;
}

function DatePicker({
  value,
  defaultValue,
  onChange,
  min,
  max,
  disabled = false,
  label,
  helperText,
  error = false,
  placeholder = "YYYY-MM-DD",
  className,
  id: idProp,
  ...props
}: DatePickerProps) {
  const generatedId = useId();
  const inputId = idProp ?? `date-picker-${generatedId}`;

  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<string>(
    defaultValue ?? "",
  );
  const currentValue = isControlled ? (value ?? "") : internalValue;

  const selectedDate = parseIsoDate(currentValue);
  const minDate = parseIsoDate(min);
  const maxDate = parseIsoDate(max);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const initialView = selectedDate ?? today;
  const [viewYear, setViewYear] = useState(initialView.getFullYear());
  const [viewMonth, setViewMonth] = useState(initialView.getMonth());

  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSelectDay = useCallback(
    (date: Date) => {
      const iso = toIsoDate(date);
      if (!isControlled) {
        setInternalValue(iso);
      }
      onChange?.(iso);
      setOpen(false);
      inputRef.current?.focus();
    },
    [isControlled, onChange],
  );

  const handlePrevMonth = useCallback(() => {
    setViewMonth((prev) => {
      if (prev === 0) {
        setViewYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  }, []);

  const handleNextMonth = useCallback(() => {
    setViewMonth((prev) => {
      if (prev === 11) {
        setViewYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      if (!isControlled) {
        setInternalValue(raw);
      }
      const parsed = parseIsoDate(raw);
      if (parsed) {
        onChange?.(raw);
        setViewYear(parsed.getFullYear());
        setViewMonth(parsed.getMonth());
      }
    },
    [isControlled, onChange],
  );

  const handleOpenChange = useCallback(
    (nextOpen: boolean) => {
      if (disabled) return;
      setOpen(nextOpen);
      if (nextOpen) {
        const view = selectedDate ?? today;
        setViewYear(view.getFullYear());
        setViewMonth(view.getMonth());
      }
    },
    [disabled, selectedDate, today],
  );

  const handleGridSelect = useCallback(
    (e: KeyboardEvent<HTMLTableElement>, dateAttr: string | null) => {
      if (!dateAttr) return;
      const d = parseIsoDate(dateAttr);
      if (!d) return;
      e.preventDefault();
      handleSelectDay(d);
    },
    [handleSelectDay],
  );

  const handleGridArrow = useCallback(
    (e: KeyboardEvent<HTMLTableElement>, current: Date) => {
      const next = resolveArrowNavTarget(e.key, current);
      if (!next) return;
      e.preventDefault();
      const iso = toIsoDate(next);
      setViewYear(next.getFullYear());
      setViewMonth(next.getMonth());
      focusDateButton(iso);
    },
    [],
  );

  const handleGridKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTableElement>) => {
      const focusedBtn = document.activeElement as HTMLElement;
      const dateAttr = focusedBtn?.getAttribute?.("data-date") ?? null;
      const current =
        parseIsoDate(dateAttr ?? undefined) ?? selectedDate ?? today;

      if (e.key === "Enter" || e.key === " ") {
        handleGridSelect(e, dateAttr);
        return;
      }
      if (e.key === "Escape") {
        setOpen(false);
        inputRef.current?.focus();
        return;
      }
      handleGridArrow(e, current);
    },
    [selectedDate, today, handleGridSelect, handleGridArrow],
  );

  return (
    <div className={cn("flex flex-col gap-1", className)} {...props}>
      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            "text-label-sm text-fg-basic",
            disabled && "text-fg-disabled",
          )}
        >
          {label}
        </label>
      )}

      <Popover.Root open={open} onOpenChange={handleOpenChange}>
        <div className="relative flex items-center">
          <input
            ref={inputRef}
            id={inputId}
            type="text"
            inputMode="numeric"
            disabled={disabled}
            value={currentValue}
            onChange={handleInputChange}
            placeholder={placeholder}
            aria-describedby={helperText ? `${inputId}-helper` : undefined}
            aria-invalid={error}
            className={cn(
              "h-10 w-full rounded-md-lg border bg-input-surface px-4 pr-10 text-body-md text-fg-basic transition-colors",
              "placeholder:text-fg-disabled",
              "focus:border-input-border-active focus:outline-none",
              "disabled:cursor-not-allowed disabled:border-input-border-disabled disabled:bg-input-surface-disabled disabled:text-fg-disabled",
              error ? "border-input-border-error" : "border-input-border",
            )}
          />

          <Popover.Trigger
            aria-label="날짜 선택 달력 열기"
            aria-haspopup="dialog"
            aria-expanded={open}
            disabled={disabled}
            className={cn(
              "absolute right-3 flex size-5 items-center justify-center text-icon-gray-light transition-colors",
              "hover:text-icon-gray focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus",
              "disabled:pointer-events-none disabled:text-fg-disabled",
            )}
          >
            <Calendar size={20} title="" />
          </Popover.Trigger>
        </div>

        <Popover.Portal>
          <Popover.Positioner sideOffset={8} className="z-50">
            <Popover.Popup
              aria-label="날짜 선택"
              className={cn(
                "rounded-xl bg-surface-white shadow-3",
                "border border-divider-gray-light",
                "outline-none",
                "data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
                "data-[ending-style]:scale-95 data-[ending-style]:opacity-0",
                "transition-[opacity,transform] duration-150 ease-out",
              )}
            >
              <CalendarGrid
                viewYear={viewYear}
                viewMonth={viewMonth}
                selectedDate={selectedDate}
                minDate={minDate}
                maxDate={maxDate}
                today={today}
                onSelectDay={handleSelectDay}
                onPrevMonth={handlePrevMonth}
                onNextMonth={handleNextMonth}
                onKeyDown={handleGridKeyDown}
              />
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>

      {helperText && (
        <span
          id={`${inputId}-helper`}
          className={cn(
            "mt-1 flex items-center gap-1 text-label-xs",
            error ? "text-fg-danger" : "text-fg-information",
          )}
        >
          {helperText}
        </span>
      )}
    </div>
  );
}

DatePicker.displayName = "DatePicker";

export { DatePicker };
export type { DatePickerProps };
