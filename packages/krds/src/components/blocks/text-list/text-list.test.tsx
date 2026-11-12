import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TextList from "#/components/blocks/text-list/text-list";
import { renderWithTheme } from "#/test-utils";

const ITEMS = [
  { id: "1", content: "첫 번째 항목" },
  { id: "2", content: "두 번째 항목" },
];

describe("TextList", () => {
  it("기본으로 순서 없는 목록(ul)을 렌더링한다", () => {
    const { container } = renderWithTheme(<TextList items={ITEMS} />);
    expect(container.querySelector("ul")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  it("ordered variant는 ol을 렌더링한다", () => {
    const { container } = renderWithTheme(
      <TextList variant="ordered" items={ITEMS} />,
    );
    expect(container.querySelector("ol")).toBeInTheDocument();
  });

  it("마커 유형을 지정할 수 있다", () => {
    const { container } = renderWithTheme(
      <TextList variant="unordered" marker="square" items={ITEMS} />,
    );
    const list = container.querySelector("ul");
    expect(window.getComputedStyle(list).listStyleType).toBe("square");
  });
});
