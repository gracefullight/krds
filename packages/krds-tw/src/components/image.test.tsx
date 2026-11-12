import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Image } from "#/components/image";

describe("Image", () => {
  it("대체 텍스트를 제공한다", () => {
    render(<Image src="/photo.png" alt="정부 청사 전경" />);
    expect(
      screen.getByRole("img", { name: "정부 청사 전경" }),
    ).toBeInTheDocument();
  });

  it("장식용 이미지는 스크린 리더가 무시한다", () => {
    render(<Image src="/deco.png" alt="" data-testid="deco" />);
    const img = screen.getByTestId("deco");
    expect(img).toHaveAttribute("aria-hidden", "true");
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("기본으로 lazy 로딩을 사용한다", () => {
    render(<Image src="/photo.png" alt="사진" />);
    expect(screen.getByRole("img")).toHaveAttribute("loading", "lazy");
  });

  it("caption이 있으면 figure/figcaption으로 감싼다", () => {
    render(<Image src="/photo.png" alt="사진" caption="청사 안내도" />);
    expect(screen.getByText("청사 안내도").tagName).toBe("FIGCAPTION");
    expect(screen.getByRole("figure")).toBeInTheDocument();
  });

  it("ratio가 설정되면 비율 클래스를 적용한다", () => {
    render(<Image src="/photo.png" alt="사진" ratio="16:9" />);
    expect(screen.getByRole("img").className).toContain("aspect-video");
  });
});
