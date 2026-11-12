import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { VisuallyHidden } from "#/components/visually-hidden";

describe("VisuallyHidden", () => {
  it("자식 콘텐츠를 렌더링한다", () => {
    render(<VisuallyHidden>스크린 리더 전용 설명</VisuallyHidden>);
    expect(screen.getByText("스크린 리더 전용 설명")).toBeInTheDocument();
  });

  it("시각적 숨김 스타일(sr-only)을 적용한다", () => {
    render(<VisuallyHidden>숨긴 텍스트</VisuallyHidden>);
    const el = screen.getByText("숨긴 텍스트");
    expect(el.className).toContain("sr-only");
  });

  it("display:none이나 visibility:hidden을 사용하지 않는다", () => {
    render(<VisuallyHidden>숨긴 텍스트</VisuallyHidden>);
    const el = screen.getByText("숨긴 텍스트");
    expect(el.className).not.toContain("hidden");
    expect(el.style.display).not.toBe("none");
    expect(el.style.visibility).not.toBe("hidden");
  });

  it("추가 className을 병합한다", () => {
    render(<VisuallyHidden className="extra">텍스트</VisuallyHidden>);
    const el = screen.getByText("텍스트");
    expect(el.className).toContain("sr-only");
    expect(el.className).toContain("extra");
  });
});
