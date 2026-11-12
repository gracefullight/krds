import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { RangeSlider } from "#/components/range-slider";

describe("RangeSlider", () => {
  it("레이블과 슬라이더를 연결한다", () => {
    render(<RangeSlider label="글자 크기" />);
    expect(
      screen.getByRole("slider", { name: "글자 크기" }),
    ).toBeInTheDocument();
  });

  it("최소/최대 범위 값을 표시한다", () => {
    render(<RangeSlider label="볼륨" min={0} max={10} defaultValue={5} />);
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("선택 값을 표시하고 변경 시 onChange를 호출한다", () => {
    const handler = vi.fn();
    render(
      <RangeSlider
        label="볼륨"
        min={0}
        max={10}
        defaultValue={5}
        onChange={handler}
      />,
    );
    expect(screen.getByText("5")).toBeInTheDocument();
    fireEvent.change(screen.getByRole("slider"), { target: { value: "7" } });
    expect(handler).toHaveBeenCalledWith(7);
    expect(screen.getByText("7")).toBeInTheDocument();
  });

  it("제어 모드로 동작한다", () => {
    const handler = vi.fn();
    render(<RangeSlider label="볼륨" value={3} onChange={handler} />);
    fireEvent.change(screen.getByRole("slider"), { target: { value: "8" } });
    expect(handler).toHaveBeenCalledWith(8);
    expect(screen.getByRole("slider")).toHaveValue("3");
  });

  it("formatValue로 선택 값 표시 형식을 지정한다", () => {
    render(
      <RangeSlider
        label="밝기"
        defaultValue={50}
        formatValue={(v) => `${v}%`}
      />,
    );
    expect(screen.getByText("50%")).toBeInTheDocument();
    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuetext", "50%");
  });
});
