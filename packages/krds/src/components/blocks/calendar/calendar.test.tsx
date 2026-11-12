import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Calendar from "#/components/blocks/calendar/calendar";
import { renderWithTheme } from "#/test-utils";

describe("Calendar", () => {
  it("요일 헤딩을 제공한다", () => {
    renderWithTheme(<Calendar defaultValue="2026-11-12" />);
    for (const day of ["일", "월", "화", "수", "목", "금", "토"]) {
      expect(
        screen.getByRole("columnheader", { name: day }),
      ).toBeInTheDocument();
    }
  });

  it("날짜를 선택하면 onChange를 호출한다", async () => {
    const handler = vi.fn();
    renderWithTheme(<Calendar defaultValue="2026-11-12" onChange={handler} />);
    await userEvent.click(
      screen.getByRole("button", { name: /2026년 11월 20일/ }),
    );
    expect(handler).toHaveBeenCalledWith("2026-11-20");
  });

  it("선택된 날짜에 aria-pressed를 표시한다", () => {
    renderWithTheme(<Calendar value="2026-11-12" />);
    expect(
      screen.getByRole("button", { name: /2026년 11월 12일/ }),
    ).toHaveAttribute("aria-pressed", "true");
  });

  it("선택 불가 날짜는 비활성화한다", () => {
    renderWithTheme(
      <Calendar
        defaultValue="2026-11-12"
        minDate="2026-11-10"
        maxDate="2026-11-20"
      />,
    );
    expect(
      screen.getByRole("button", { name: /2026년 11월 5일/ }),
    ).toBeDisabled();
    expect(
      screen.getByRole("button", { name: /2026년 11월 15일/ }),
    ).toBeEnabled();
  });

  it("이벤트 범례를 표시한다", () => {
    renderWithTheme(
      <Calendar
        defaultValue="2026-11-12"
        events={[
          { date: "2026-11-15", label: "휴관일", type: "휴관일" },
          { date: "2026-11-20", label: "공휴일", type: "공휴일" },
        ]}
      />,
    );
    expect(screen.getByText("휴관일")).toBeInTheDocument();
    expect(screen.getByText("공휴일")).toBeInTheDocument();
  });

  it("다음 달 버튼으로 월을 탐색한다", async () => {
    renderWithTheme(<Calendar defaultValue="2026-11-12" />);
    await userEvent.click(screen.getByRole("button", { name: "다음 달" }));
    expect(
      screen.getByRole("button", { name: /2026년 12월 1일/ }),
    ).toBeInTheDocument();
  });
});
