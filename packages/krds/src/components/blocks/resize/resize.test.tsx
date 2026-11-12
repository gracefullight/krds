import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import Resize from "#/components/blocks/resize/resize";
import { renderWithTheme } from "#/test-utils";

describe("Resize", () => {
  afterEach(() => {
    document.documentElement.style.fontSize = "";
  });

  it("기본 옵션(보통)을 표시한다", () => {
    renderWithTheme(<Resize />);
    expect(
      screen.getByRole("button", { name: "화면 크기 조정" }),
    ).toHaveTextContent("보통");
  });

  it("옵션 목록을 5개 이내로 제공한다", async () => {
    renderWithTheme(<Resize />);
    await userEvent.click(
      screen.getByRole("button", { name: "화면 크기 조정" }),
    );
    expect(screen.getAllByRole("menuitem")).toHaveLength(5);
    expect(
      screen.getByRole("menuitem", { name: "작게 (90%)" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: "가장 크게 (150%)" }),
    ).toBeInTheDocument();
  });

  it("옵션 선택 시 루트 글자 크기를 적용하고 onChange를 실행한다", async () => {
    const handler = vi.fn();
    renderWithTheme(<Resize onChange={handler} />);
    await userEvent.click(
      screen.getByRole("button", { name: "화면 크기 조정" }),
    );
    await userEvent.click(
      screen.getByRole("menuitem", { name: "크게 (130%)" }),
    );
    expect(handler).toHaveBeenCalledWith(130);
    expect(document.documentElement.style.fontSize).toBe("130%");
  });

  it("applyToRoot=false면 루트 글자 크기를 변경하지 않는다", async () => {
    renderWithTheme(<Resize applyToRoot={false} />);
    await userEvent.click(
      screen.getByRole("button", { name: "화면 크기 조정" }),
    );
    await userEvent.click(
      screen.getByRole("menuitem", { name: "크게 (130%)" }),
    );
    expect(document.documentElement.style.fontSize).toBe("");
  });
});
