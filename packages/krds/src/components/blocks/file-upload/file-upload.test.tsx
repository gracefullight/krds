import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import FileUpload from "#/components/blocks/file-upload/file-upload";
import { renderWithTheme } from "#/test-utils";

function createFile(name: string, size = 1024): File {
  const file = new File(["x".repeat(size)], name, { type: "text/plain" });
  return file;
}

describe("FileUpload", () => {
  it("레이블과 파일 선택 버튼을 표시한다", () => {
    renderWithTheme(<FileUpload label="첨부파일" />);
    expect(screen.getByText("첨부파일")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "파일 선택" }),
    ).toBeInTheDocument();
  });

  it("파일을 선택하면 목록에 표시한다", async () => {
    const handler = vi.fn();
    const { container } = renderWithTheme(
      <FileUpload label="첨부파일" onChange={handler} />,
    );
    const input = container.querySelector(
      "input[type=file]",
    ) as HTMLInputElement;
    await userEvent.upload(input, createFile("문서.pdf"));
    expect(handler).toHaveBeenCalledTimes(1);
    expect(screen.getByText("문서.pdf")).toBeInTheDocument();
  });

  it("삭제 버튼으로 파일을 제거한다", async () => {
    const handler = vi.fn();
    const { container } = renderWithTheme(
      <FileUpload label="첨부파일" onChange={handler} />,
    );
    const input = container.querySelector(
      "input[type=file]",
    ) as HTMLInputElement;
    await userEvent.upload(input, createFile("문서.pdf"));
    await userEvent.click(
      screen.getByRole("button", { name: "문서.pdf 삭제" }),
    );
    expect(handler).toHaveBeenLastCalledWith([]);
    expect(screen.queryByText("문서.pdf")).not.toBeInTheDocument();
  });

  it("최대 개수 초과 시 구체적인 오류 메시지를 표시한다", async () => {
    const { container } = renderWithTheme(
      <FileUpload label="첨부파일" multiple maxFiles={1} />,
    );
    const input = container.querySelector(
      "input[type=file]",
    ) as HTMLInputElement;
    await userEvent.upload(input, [createFile("a.pdf"), createFile("b.pdf")]);
    expect(screen.getByRole("alert")).toHaveTextContent(
      "파일은 최대 1개까지 첨부할 수 있습니다.",
    );
  });

  it("크기 제한 초과 시 오류 메시지를 표시한다", async () => {
    const { container } = renderWithTheme(
      <FileUpload label="첨부파일" maxSize={100} />,
    );
    const input = container.querySelector(
      "input[type=file]",
    ) as HTMLInputElement;
    await userEvent.upload(input, createFile("big.pdf", 2048));
    expect(screen.getByRole("alert")).toHaveTextContent("크기가 제한");
  });
});
