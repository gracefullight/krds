import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Carousel from "#/components/blocks/carousel/carousel";
import { renderWithTheme } from "#/test-utils";

const SLIDES = [
  { id: "a", content: "첫 번째 콘텐츠" },
  { id: "b", content: "두 번째 콘텐츠" },
  { id: "c", content: "세 번째 콘텐츠" },
];

describe("Carousel", () => {
  it("첫 번째 슬라이드를 표시한다", () => {
    renderWithTheme(<Carousel slides={SLIDES} />);
    expect(screen.getByText("첫 번째 콘텐츠")).toBeVisible();
    expect(screen.getByText("두 번째 콘텐츠")).not.toBeVisible();
  });

  it("다음 버튼으로 슬라이드를 탐색한다", async () => {
    const handler = vi.fn();
    renderWithTheme(<Carousel slides={SLIDES} onChange={handler} />);
    await userEvent.click(
      screen.getByRole("button", { name: "다음 슬라이드" }),
    );
    expect(handler).toHaveBeenCalledWith(1);
    expect(screen.getByText("두 번째 콘텐츠")).toBeVisible();
  });

  it("분수 식별자로 현재 위치를 표시한다", () => {
    renderWithTheme(<Carousel slides={SLIDES} indicator="fraction" />);
    expect(screen.getByText("1 / 3")).toBeInTheDocument();
  });

  it("자동 회전 시 정지 컨트롤을 제공한다", async () => {
    renderWithTheme(<Carousel slides={SLIDES} autoPlay />);
    const stopButton = screen.getByRole("button", { name: "자동 회전 정지" });
    await userEvent.click(stopButton);
    expect(
      screen.getByRole("button", { name: "자동 회전 재생" }),
    ).toBeInTheDocument();
  });

  it("슬라이드가 없으면 렌더링하지 않는다", () => {
    const { container } = renderWithTheme(<Carousel slides={[]} />);
    expect(container.firstChild).toBeNull();
  });
});
