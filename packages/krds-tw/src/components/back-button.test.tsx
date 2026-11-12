import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { BackButton } from "#/components/back-button";

describe("BackButton", () => {
  it("뒤로가기 버튼을 렌더링한다", () => {
    render(<BackButton />);
    expect(
      screen.getByRole("button", { name: "뒤로가기" }),
    ).toBeInTheDocument();
  });

  it("클릭 시 onBack을 실행한다", async () => {
    const handler = vi.fn();
    render(<BackButton onBack={handler} />);
    await userEvent.click(screen.getByRole("button"));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("onBack이 없으면 히스토리 back을 실행한다", async () => {
    const backSpy = vi.spyOn(window.history, "back").mockImplementation(() => {
      // 실제 히스토리 탐색 방지
    });
    render(<BackButton />);
    await userEvent.click(screen.getByRole("button"));
    expect(backSpy).toHaveBeenCalledTimes(1);
    backSpy.mockRestore();
  });

  it("title이 있으면 화면 제목을 함께 표시한다", () => {
    render(<BackButton title="신청서 작성" />);
    expect(screen.getByText("신청서 작성")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "뒤로가기" }),
    ).toBeInTheDocument();
  });
});
