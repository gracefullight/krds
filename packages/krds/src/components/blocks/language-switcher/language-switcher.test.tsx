import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import LanguageSwitcher from "#/components/blocks/language-switcher/language-switcher";
import { renderWithTheme } from "#/test-utils";

const LANGUAGES = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "English" },
];

describe("LanguageSwitcher", () => {
  it("링크 유형은 전환되는 언어 이름을 원어로 표시한다", () => {
    renderWithTheme(
      <LanguageSwitcher variant="link" languages={LANGUAGES} value="ko" />,
    );
    expect(screen.getByRole("link", { name: /English/ })).toBeInTheDocument();
  });

  it("링크 클릭 시 onChange를 실행한다", async () => {
    const handler = vi.fn();
    renderWithTheme(
      <LanguageSwitcher
        variant="link"
        languages={LANGUAGES}
        value="ko"
        onChange={handler}
      />,
    );
    await userEvent.click(screen.getByRole("link", { name: /English/ }));
    expect(handler).toHaveBeenCalledWith("en");
  });

  it("드롭다운 유형은 현재 언어를 표시한다", () => {
    renderWithTheme(<LanguageSwitcher languages={LANGUAGES} value="ko" />);
    expect(
      screen.getByRole("combobox", { name: "언어 변경" }),
    ).toHaveTextContent("한국어");
  });

  it("드롭다운에서 언어를 선택하면 onChange를 실행한다", async () => {
    const handler = vi.fn();
    renderWithTheme(
      <LanguageSwitcher languages={LANGUAGES} value="ko" onChange={handler} />,
    );
    await userEvent.click(screen.getByRole("combobox"));
    await userEvent.click(screen.getByRole("option", { name: "English" }));
    expect(handler).toHaveBeenCalledWith("en");
  });
});
