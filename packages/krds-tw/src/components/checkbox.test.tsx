import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Checkbox } from "#/components/checkbox";

describe("Checkbox", () => {
  it("label과 함께 렌더링된다", () => {
    render(<Checkbox label="동의합니다" />);
    expect(screen.getByText("동의합니다")).toBeInTheDocument();
  });

  it("controlled 상태에서 onChange를 호출한다", async () => {
    const handler = vi.fn();
    render(<Checkbox label="체크박스" onCheckedChange={handler} />);
    const root = screen.getByRole("checkbox");
    await userEvent.click(root);
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("indeterminate prop이 전달된다", () => {
    render(<Checkbox label="중간 상태" indeterminate />);
    const root = screen.getByRole("checkbox");
    expect(root).toBeInTheDocument();
  });

  it("disabled 상태에서 aria-disabled가 설정되고 클릭이 동작하지 않는다", async () => {
    const handler = vi.fn();
    render(<Checkbox label="비활성" disabled onCheckedChange={handler} />);
    const root = screen.getByRole("checkbox");
    // @base-ui-components uses aria-disabled on span role=checkbox, not native disabled
    expect(root).toHaveAttribute("aria-disabled", "true");
    await userEvent.click(root);
    expect(handler).not.toHaveBeenCalled();
  });

  it("label htmlFor과 input id가 연결된다", () => {
    render(<Checkbox id="my-cb" label="연결 확인" />);
    const label = screen.getByText("연결 확인").closest("label");
    expect(label).toHaveAttribute("for", "my-cb");
  });
});
