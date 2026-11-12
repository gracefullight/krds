import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Toast, ToastProvider, useToast } from "#/components/toast";

describe("Toast", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("열림 상태일 때 메시지를 표시한다", () => {
    render(<Toast open message="저장되었습니다" onClose={vi.fn()} />);
    expect(screen.getByRole("status")).toHaveTextContent("저장되었습니다");
  });

  it("닫힘 상태일 때 렌더링하지 않는다", () => {
    render(<Toast open={false} message="저장되었습니다" onClose={vi.fn()} />);
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("정보형 메시지는 기본 2.5초 후 닫힌다", () => {
    const onClose = vi.fn();
    render(<Toast open message="저장되었습니다" onClose={onClose} />);
    act(() => {
      vi.advanceTimersByTime(2499);
    });
    expect(onClose).not.toHaveBeenCalled();
    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("주의·경고형 메시지는 기본 3.5초 후 닫힌다", () => {
    const onClose = vi.fn();
    render(
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
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("duration을 직접 지정할 수 있다", () => {
    const onClose = vi.fn();
    render(<Toast open message="완료" duration={1000} onClose={onClose} />);
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

function ToastTrigger() {
  const { toast } = useToast();
  return (
    <button type="button" onClick={() => toast("신청이 완료되었습니다")}>
      신청
    </button>
  );
}

function DoubleTrigger() {
  const { toast } = useToast();
  return (
    <button
      type="button"
      onClick={() => {
        toast("첫 번째");
        toast("두 번째");
      }}
    >
      실행
    </button>
  );
}

describe("ToastProvider", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("useToast로 표시한 토스트를 렌더링하고 자동으로 닫는다", () => {
    render(
      <ToastProvider>
        <ToastTrigger />
      </ToastProvider>,
    );
    fireEvent.click(screen.getByRole("button", { name: "신청" }));
    expect(screen.getByRole("status")).toHaveTextContent(
      "신청이 완료되었습니다",
    );
    act(() => {
      vi.advanceTimersByTime(2500);
    });
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("토스트를 순차적으로 하나씩 표시한다", () => {
    render(
      <ToastProvider>
        <DoubleTrigger />
      </ToastProvider>,
    );
    fireEvent.click(screen.getByRole("button", { name: "실행" }));
    expect(screen.getByRole("status")).toHaveTextContent("첫 번째");
    act(() => {
      vi.advanceTimersByTime(2500);
    });
    expect(screen.getByRole("status")).toHaveTextContent("두 번째");
  });

  it("Provider 없이 useToast를 사용하면 오류를 던진다", () => {
    expect(() => render(<ToastTrigger />)).toThrowError(/ToastProvider/);
  });
});
