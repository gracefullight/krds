import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { QuantityToggle } from "#/components/quantity-toggle";

describe("QuantityToggle", () => {
  it("레이블과 현재 값을 표시한다", () => {
    render(<QuantityToggle label="발급 부수" defaultValue={2} />);
    expect(
      screen.getByRole("group", { name: "발급 부수" }),
    ).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("증가/감소 버튼으로 값을 조절한다", async () => {
    const handler = vi.fn();
    render(
      <QuantityToggle label="발급 부수" defaultValue={2} onChange={handler} />,
    );
    await userEvent.click(screen.getByRole("button", { name: "수량 증가" }));
    expect(handler).toHaveBeenCalledWith(3);
    expect(screen.getByText("3")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "수량 감소" }));
    expect(handler).toHaveBeenCalledWith(2);
  });

  it("최소값에서 감소 버튼을 비활성화한다", () => {
    render(
      <QuantityToggle label="발급 부수" min={1} max={5} defaultValue={1} />,
    );
    expect(screen.getByRole("button", { name: "수량 감소" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "수량 증가" })).toBeEnabled();
  });

  it("최대값에서 증가 버튼을 비활성화한다", () => {
    render(
      <QuantityToggle label="발급 부수" min={1} max={5} defaultValue={5} />,
    );
    expect(screen.getByRole("button", { name: "수량 증가" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "수량 감소" })).toBeEnabled();
  });

  it("제어 모드로 동작한다", async () => {
    const handler = vi.fn();
    render(<QuantityToggle label="발급 부수" value={2} onChange={handler} />);
    await userEvent.click(screen.getByRole("button", { name: "수량 증가" }));
    expect(handler).toHaveBeenCalledWith(3);
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("증감 버튼이 수량 필드를 가운데 두고 분리 배치된다", () => {
    render(<QuantityToggle label="발급 부수" />);
    const output = screen.getByText("0");
    const group = screen.getByRole("group");
    const buttons = group.querySelectorAll("button");
    expect(buttons).toHaveLength(2);
    expect(
      output.compareDocumentPosition(buttons[0]) &
        Node.DOCUMENT_POSITION_PRECEDING,
    ).toBeTruthy();
    expect(
      output.compareDocumentPosition(buttons[1]) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });
});
