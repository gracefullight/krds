import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import CoachMark from "#/components/blocks/coach-mark/coach-mark";
import { renderWithTheme } from "#/test-utils";

const STEPS = [
  {
    target: "#step-1",
    title: "신청 버튼",
    description: "신청 버튼을 누르세요.",
  },
  { target: "#step-2", title: "서명", description: "서명을 진행하세요." },
];

function Targets() {
  return (
    <div>
      <button type="button" id="step-1">
        신청
      </button>
      <button type="button" id="step-2">
        서명
      </button>
    </div>
  );
}

describe("CoachMark", () => {
  it("닫힘 상태에서는 렌더링하지 않는다", () => {
    renderWithTheme(
      <>
        <Targets />
        <CoachMark open={false} steps={STEPS} onClose={vi.fn()} />
      </>,
    );
    expect(screen.queryByText(/신청 버튼을 누르세요/)).not.toBeInTheDocument();
  });

  it("첫 단계는 이전 버튼 없이 다음 버튼을 표시한다", () => {
    renderWithTheme(
      <>
        <Targets />
        <CoachMark open steps={STEPS} onClose={vi.fn()} />
      </>,
    );
    expect(screen.getByText("1/2")).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "이전" }),
    ).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "다음" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "그만보기" }),
    ).toBeInTheDocument();
  });

  it("다음 버튼으로 단계가 진행하고 마지막 단계는 마치기를 표시한다", async () => {
    const onComplete = vi.fn();
    const onClose = vi.fn();
    renderWithTheme(
      <>
        <Targets />
        <CoachMark
          open
          steps={STEPS}
          onClose={onClose}
          onComplete={onComplete}
        />
      </>,
    );
    await userEvent.click(screen.getByRole("button", { name: "다음" }));
    expect(screen.getByText("2/2")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "이전" })).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "마치기" }));
    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("단일 단계는 확인 버튼을 표시한다", () => {
    renderWithTheme(
      <>
        <Targets />
        <CoachMark open steps={[STEPS[0]]} onClose={vi.fn()} />
      </>,
    );
    expect(screen.getByRole("button", { name: "확인" })).toBeInTheDocument();
  });

  it("대상 요소에 스포트라이트 외곽선을 적용한다", () => {
    renderWithTheme(
      <>
        <Targets />
        <CoachMark open steps={STEPS} onClose={vi.fn()} />
      </>,
    );
    const target = document.querySelector("#step-1") as HTMLElement;
    expect(target.style.outline).toContain("solid");
  });
});
