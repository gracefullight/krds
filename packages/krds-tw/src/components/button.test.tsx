import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "#/components/button";

describe("Button", () => {
  it("텍스트를 렌더링한다", () => {
    render(<Button>버튼</Button>);
    expect(screen.getByRole("button", { name: "버튼" })).toBeInTheDocument();
  });

  it("onClick 핸들러를 실행한다", async () => {
    const handler = vi.fn();
    render(<Button onClick={handler}>클릭</Button>);
    await userEvent.click(screen.getByRole("button"));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("variant에 따른 클래스가 적용된다", () => {
    render(<Button variant="secondary">보조</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("bg-btn-secondary-fill");
  });

  it("disabled 상태에서 클릭이 동작하지 않는다", async () => {
    const handler = vi.fn();
    render(
      <Button disabled onClick={handler}>
        비활성
      </Button>,
    );
    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();
    await userEvent.click(btn);
    expect(handler).not.toHaveBeenCalled();
  });

  it("startIcon과 endIcon을 렌더링한다", () => {
    render(
      <Button
        startIcon={<span data-testid="start-icon" />}
        endIcon={<span data-testid="end-icon" />}
      >
        아이콘
      </Button>,
    );
    expect(screen.getByTestId("start-icon")).toBeInTheDocument();
    expect(screen.getByTestId("end-icon")).toBeInTheDocument();
  });
});
