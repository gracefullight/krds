import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Identifier from "#/components/blocks/identifier/identifier";
import { renderWithTheme } from "#/test-utils";

describe("Identifier", () => {
  it("운영기관 안내 텍스트를 표시한다", () => {
    renderWithTheme(<Identifier name="행정안전부" />);
    expect(
      screen.getByText("이 누리집은 행정안전부에서 운영하는 누리집입니다."),
    ).toBeInTheDocument();
  });

  it("section 요소로 렌더링한다", () => {
    const { container } = renderWithTheme(<Identifier name="행정안전부" />);
    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("로고 이미지에 대체 텍스트를 제공한다", () => {
    renderWithTheme(
      <Identifier
        name="행정안전부"
        logoSrc="/logo.png"
        logoAlt="행정안전부 로고"
      />,
    );
    expect(
      screen.getByRole("img", { name: "행정안전부 로고" }),
    ).toBeInTheDocument();
  });

  it("연락처 링크를 표시한다", () => {
    renderWithTheme(
      <Identifier
        name="행정안전부"
        links={[{ label: "개인정보처리방침", href: "/privacy" }]}
      />,
    );
    expect(
      screen.getByRole("link", { name: "개인정보처리방침" }),
    ).toHaveAttribute("href", "/privacy");
  });
});
