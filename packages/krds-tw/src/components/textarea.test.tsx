import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Textarea } from "#/components/textarea";

describe("Textarea", () => {
  it("textarea 요소를 렌더링한다", () => {
    render(<Textarea placeholder="내용을 입력하세요" />);
    expect(
      screen.getByPlaceholderText("내용을 입력하세요"),
    ).toBeInTheDocument();
  });

  it("maxLength가 있으면 글자 수 카운터가 표시된다", () => {
    render(<Textarea maxLength={100} defaultValue="안녕" />);
    expect(screen.getByText("2/100")).toBeInTheDocument();
  });

  it("maxLength 초과 입력은 차단된다", async () => {
    render(<Textarea maxLength={5} />);
    const textarea = screen.getByRole("textbox");
    await userEvent.type(textarea, "123456789");
    expect((textarea as HTMLTextAreaElement).value).toHaveLength(5);
  });

  it("helperText가 있을 때 aria-describedby가 연결된다", () => {
    render(<Textarea id="ta" helperText="도움말 텍스트" />);
    const textarea = screen.getByRole("textbox");
    const describedBy = textarea.getAttribute("aria-describedby");
    expect(describedBy).toBeTruthy();
    expect(screen.getByText("도움말 텍스트")).toBeInTheDocument();
  });

  it("onChange를 호출하며 값이 변경된다", async () => {
    const handler = vi.fn();
    render(<Textarea onChange={handler} />);
    await userEvent.type(screen.getByRole("textbox"), "입력");
    expect(handler).toHaveBeenCalled();
  });
});
