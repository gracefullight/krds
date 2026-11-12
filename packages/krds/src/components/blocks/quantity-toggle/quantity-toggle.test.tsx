import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import QuantityToggle from "#/components/blocks/quantity-toggle/quantity-toggle";
import { renderWithTheme } from "#/test-utils";

describe("QuantityToggle", () => {
  it("레이블과 현재 값을 표시한다", () => {
    renderWithTheme(<QuantityToggle label="발급 부수" defaultValue={2} />);
    expect(
      screen.getByRole("group", { name: "발급 부수" }),
    ).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("증가/감소 버튼으로 값을 조절한다", async () => {
    const handler = vi.fn();
    renderWithTheme(
      <QuantityToggle label="발급 부수" defaultValue={2} onChange={handler} />,
    );
    await userEvent.click(screen.getByRole("button", { name: "수량 증가" }));
    expect(handler).toHaveBeenCalledWith(3);
    expect(screen.getByText("3")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "수량 감소" }));
    expect(handler).toHaveBeenCalledWith(2);
  });

  it("최소값에서 감소 버튼을 비활성화한다", () => {
    renderWithTheme(
      <QuantityToggle label="발급 부수" min={1} max={5} defaultValue={1} />,
    );
    expect(screen.getByRole("button", { name: "수량 감소" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "수량 증가" })).toBeEnabled();
  });

  it("최대값에서 증가 버튼을 비활성화한다", () => {
    renderWithTheme(
      <QuantityToggle label="발급 부수" min={1} max={5} defaultValue={5} />,
    );
    expect(screen.getByRole("button", { name: "수량 증가" })).toBeDisabled();
  });

  it("제어 모드로 동작한다", async () => {
    const handler = vi.fn();
    renderWithTheme(
      <QuantityToggle label="발급 부수" value={2} onChange={handler} />,
    );
    await userEvent.click(screen.getByRole("button", { name: "수량 증가" }));
    expect(handler).toHaveBeenCalledWith(3);
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});
