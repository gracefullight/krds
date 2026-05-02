import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Switch } from "#/components/switch";

describe("Switch", () => {
  it("role='switch'로 렌더링된다", () => {
    render(<Switch />);
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it("label과 함께 렌더링된다", () => {
    render(<Switch label="알림 켜기" />);
    expect(screen.getByText("알림 켜기")).toBeInTheDocument();
  });

  it("클릭 시 onChange를 호출한다", async () => {
    const handler = vi.fn();
    render(<Switch onChange={handler} />);
    await userEvent.click(screen.getByRole("switch"));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("disabled 상태에서 aria-disabled가 설정되고 클릭이 동작하지 않는다", async () => {
    const handler = vi.fn();
    render(<Switch disabled onChange={handler} />);
    const sw = screen.getByRole("switch");
    // @base-ui-components uses aria-disabled on span role=switch
    expect(sw).toHaveAttribute("aria-disabled", "true");
    await userEvent.click(sw);
    expect(handler).not.toHaveBeenCalled();
  });

  it("checked 상태가 aria-checked에 반영된다", () => {
    render(<Switch checked readOnly />);
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "true");
  });
});
