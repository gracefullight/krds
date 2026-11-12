import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Snackbar from "#/components/blocks/snackbar/snackbar";
import { renderWithTheme } from "#/test-utils";

describe("Snackbar", () => {
  it("제목과 본문을 표시한다", () => {
    renderWithTheme(
      <Snackbar open onClose={vi.fn()} title="삭제되었습니다">
        휴지통에서 복원할 수 있습니다.
      </Snackbar>,
    );
    expect(screen.getByRole("status")).toHaveTextContent("삭제되었습니다");
    expect(screen.getByRole("status")).toHaveTextContent(
      "휴지통에서 복원할 수 있습니다.",
    );
  });

  it("닫힘 상태일 때 렌더링하지 않는다", () => {
    renderWithTheme(
      <Snackbar open={false} onClose={vi.fn()} title="삭제되었습니다" />,
    );
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("작업 버튼 클릭 시 onAction을 실행한다", async () => {
    const onAction = vi.fn();
    renderWithTheme(
      <Snackbar
        open
        onClose={vi.fn()}
        actionLabel="되돌리기"
        onAction={onAction}
      >
        항목을 삭제했습니다.
      </Snackbar>,
    );
    await userEvent.click(screen.getByRole("button", { name: "되돌리기" }));
    expect(onAction).toHaveBeenCalledTimes(1);
  });

  it("닫기 버튼 클릭 시 onClose를 실행한다", async () => {
    const onClose = vi.fn();
    renderWithTheme(
      <Snackbar open onClose={onClose}>
        삭제했습니다.
      </Snackbar>,
    );
    await userEvent.click(screen.getByRole("button", { name: "닫기" }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
