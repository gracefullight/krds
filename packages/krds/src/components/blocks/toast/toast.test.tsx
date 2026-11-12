import { act, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Toast from "#/components/blocks/toast/toast";
import { renderWithTheme } from "#/test-utils";

describe("Toast", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("열림 상태일 때 메시지를 표시한다", () => {
    renderWithTheme(<Toast open message="저장되었습니다" onClose={vi.fn()} />);
    expect(screen.getByRole("status")).toHaveTextContent("저장되었습니다");
  });

  it("닫힘 상태일 때 렌더링하지 않는다", () => {
    renderWithTheme(
      <Toast open={false} message="저장되었습니다" onClose={vi.fn()} />,
    );
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("정보형 메시지는 기본 2.5초 후 닫힌다", () => {
    const onClose = vi.fn();
    renderWithTheme(<Toast open message="저장되었습니다" onClose={onClose} />);
    act(() => {
      vi.advanceTimersByTime(2500);
    });
    expect(onClose).toHaveBeenCalled();
  });

  it("주의·경고형 메시지는 기본 3.5초 후 닫힌다", () => {
    const onClose = vi.fn();
    renderWithTheme(
      <Toast
        open
        severity="warning"
        message="업로드에 실패했습니다"
        onClose={onClose}
      />,
    );
    act(() => {
      vi.advanceTimersByTime(3499);
    });
    expect(onClose).not.toHaveBeenCalled();
    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(onClose).toHaveBeenCalled();
  });
});
