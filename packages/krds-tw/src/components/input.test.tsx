import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Input } from "#/components/input";

describe("Input", () => {
  it("input 요소를 렌더링한다", () => {
    render(<Input placeholder="입력하세요" />);
    expect(screen.getByPlaceholderText("입력하세요")).toBeInTheDocument();
  });

  it("label이 있을 때 label을 렌더링한다", () => {
    render(<Input label="이름" id="name-input" />);
    expect(screen.getByLabelText("이름")).toBeInTheDocument();
  });

  it("onChange를 호출하며 값이 변경된다", async () => {
    const handler = vi.fn();
    render(<Input onChange={handler} />);
    await userEvent.type(screen.getByRole("textbox"), "테스트");
    expect(handler).toHaveBeenCalled();
  });

  it("helperText가 표시된다", () => {
    render(<Input helperText="최대 20자까지 입력 가능합니다" />);
    expect(
      screen.getByText("최대 20자까지 입력 가능합니다"),
    ).toBeInTheDocument();
  });

  it("error 상태에서 aria-invalid가 설정된다", () => {
    render(<Input error aria-invalid="true" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("disabled 상태에서 입력이 비활성화된다", () => {
    render(<Input disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });
});
