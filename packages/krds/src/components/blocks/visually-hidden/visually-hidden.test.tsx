import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import VisuallyHidden from "#/components/blocks/visually-hidden/visually-hidden";
import { renderWithTheme } from "#/test-utils";

describe("VisuallyHidden", () => {
  it("자식 콘텐츠를 렌더링한다", () => {
    renderWithTheme(<VisuallyHidden>스크린 리더 전용 설명</VisuallyHidden>);
    expect(screen.getByText("스크린 리더 전용 설명")).toBeInTheDocument();
  });

  it("시각적 숨김 스타일을 적용한다", () => {
    renderWithTheme(<VisuallyHidden>숨긴 텍스트</VisuallyHidden>);
    const el = screen.getByText("숨긴 텍스트");
    const style = window.getComputedStyle(el);
    expect(style.position).toBe("absolute");
    expect(style.width).toBe("1px");
    expect(style.height).toBe("1px");
    expect(style.overflow).toBe("hidden");
  });

  it("component로 렌더링 요소를 지정한다", () => {
    renderWithTheme(
      <VisuallyHidden component="label">숨긴 레이블</VisuallyHidden>,
    );
    expect(screen.getByText("숨긴 레이블").tagName).toBe("LABEL");
  });
});
