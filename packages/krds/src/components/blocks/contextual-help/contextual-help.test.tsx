import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import ContextualHelp from "#/components/blocks/contextual-help/contextual-help";
import { renderWithTheme } from "#/test-utils";

describe("ContextualHelp", () => {
  it("기본으로 도움말이 표시되지 않는다", () => {
    renderWithTheme(
      <ContextualHelp title="용어 설명">부가 설명입니다.</ContextualHelp>,
    );
    expect(screen.queryByText("부가 설명입니다.")).not.toBeInTheDocument();
  });

  it("아이콘 버튼 클릭 시 팝오버가 표시된다", async () => {
    renderWithTheme(
      <ContextualHelp title="용어 설명">부가 설명입니다.</ContextualHelp>,
    );
    await userEvent.click(screen.getByRole("button", { name: "도움말" }));
    expect(screen.getByText("용어 설명")).toBeInTheDocument();
    expect(screen.getByText("부가 설명입니다.")).toBeInTheDocument();
  });

  it("닫기 버튼으로 팝오버를 닫는다", async () => {
    renderWithTheme(
      <ContextualHelp title="용어 설명">부가 설명입니다.</ContextualHelp>,
    );
    await userEvent.click(screen.getByRole("button", { name: "도움말" }));
    await userEvent.click(screen.getByRole("button", { name: "도움말 닫기" }));
    expect(screen.queryByText("부가 설명입니다.")).not.toBeInTheDocument();
  });
});
