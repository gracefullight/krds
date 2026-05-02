import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Pagination } from "#/components/pagination";

describe("Pagination", () => {
  it("페이지 번호 버튼들을 렌더링한다", () => {
    render(<Pagination count={5} page={1} onChange={vi.fn()} />);
    expect(screen.getByLabelText("1 페이지")).toBeInTheDocument();
    expect(screen.getByLabelText("5 페이지")).toBeInTheDocument();
  });

  it("현재 페이지에 aria-current='page'가 설정된다", () => {
    render(<Pagination count={5} page={3} onChange={vi.fn()} />);
    expect(screen.getByLabelText("3 페이지")).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("페이지 클릭 시 onChange가 해당 페이지 번호로 호출된다", async () => {
    const handler = vi.fn();
    render(<Pagination count={5} page={1} onChange={handler} />);
    await userEvent.click(screen.getByLabelText("3 페이지"));
    expect(handler).toHaveBeenCalledWith(3);
  });

  it("첫 페이지에서 이전 버튼이 비활성화된다", () => {
    render(<Pagination count={5} page={1} onChange={vi.fn()} />);
    expect(screen.getByLabelText("이전 페이지로 이동")).toBeDisabled();
  });

  it("마지막 페이지에서 다음 버튼이 비활성화된다", () => {
    render(<Pagination count={5} page={5} onChange={vi.fn()} />);
    expect(screen.getByLabelText("다음 페이지로 이동")).toBeDisabled();
  });

  it("페이지가 많을 때 줄임표(ellipsis)가 표시된다", () => {
    render(<Pagination count={20} page={10} onChange={vi.fn()} />);
    const ellipsisElements = screen.getAllByText("…");
    expect(ellipsisElements.length).toBeGreaterThan(0);
  });
});
