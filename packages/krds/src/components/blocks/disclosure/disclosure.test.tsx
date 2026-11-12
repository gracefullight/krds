import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Disclosure from "#/components/blocks/disclosure/disclosure";
import { renderWithTheme } from "#/test-utils";

describe("Disclosure", () => {
  it("기본으로 축소된 상태로 제공한다", () => {
    renderWithTheme(
      <Disclosure summary="자세히 보기">부가 정보입니다.</Disclosure>,
    );
    expect(screen.getByRole("button", { name: /자세히 보기/ })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("클릭하면 확장되고 상태가 노출된다", async () => {
    renderWithTheme(
      <Disclosure summary="자세히 보기">부가 정보입니다.</Disclosure>,
    );
    const button = screen.getByRole("button", { name: /자세히 보기/ });
    await userEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("부가 정보입니다.")).toBeVisible();
  });
});
