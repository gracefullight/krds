import { describe, expect, it } from "vitest";
import {
  getBorderWidth,
  getColor,
  getFontSize,
  getGap,
  getGapLayout,
  getPadding,
  getPaddingCard,
  getPalette,
  getRadius,
  getSizeHeight,
} from "#/index";

describe("semantic spacing tokens", () => {
  it("gap 토큰 값을 반환한다", () => {
    expect(getGap("1")).toBe("0.2rem");
    expect(getGap("5")).toBe("1.6rem");
    expect(getGap("12")).toBe("8rem");
  });

  it("padding 토큰 값을 반환한다", () => {
    expect(getPadding("1")).toBe("0.2rem");
    expect(getPadding("4")).toBe("1rem");
    expect(getPadding("10")).toBe("4rem");
  });

  it("size-height 토큰 값을 반환한다", () => {
    expect(getSizeHeight("1")).toBe("0.8rem");
    expect(getSizeHeight("8")).toBe("5.6rem");
    expect(getSizeHeight("11")).toBe("8rem");
  });
});

describe("responsive font-size tokens", () => {
  it("PC font-size 값을 반환한다", () => {
    expect(getFontSize("display.large")).toBe("6rem");
    expect(getFontSize("body.medium")).toBe("1.7rem");
    expect(getFontSize("heading.xlarge")).toBe("4rem");
    expect(getFontSize("navigation.title-medium")).toBe("2.4rem");
  });

  it("mobile font-size 값을 반환한다", () => {
    expect(getFontSize("display.large", "mobile")).toBe("4.4rem");
    expect(getFontSize("heading.xlarge", "mobile")).toBe("2.8rem");
    expect(getFontSize("heading.medium", "mobile")).toBe("2.2rem");
    expect(getFontSize("navigation.title-medium", "mobile")).toBe("2.2rem");
  });
});

describe("responsive layout tokens", () => {
  it("PC gap-layout 값을 반환한다", () => {
    expect(getGapLayout("header-breadcrumb")).toBe("2.4rem");
    expect(getGapLayout("h1-h2")).toBe("4.8rem");
    expect(getGapLayout("left-contents")).toBe("6.4rem");
    expect(getGapLayout("image-text-large")).toBe("3.2rem");
  });

  it("mobile gap-layout 값을 반환한다", () => {
    expect(getGapLayout("header-breadcrumb", "mobile")).toBe("1.6rem");
    expect(getGapLayout("h1-h2", "mobile")).toBe("3.2rem");
    expect(getGapLayout("left-contents", "mobile")).toBe("0rem");
    expect(getGapLayout("contents-right", "mobile")).toBe("0rem");
  });

  it("padding-card 값을 반환한다", () => {
    expect(getPaddingCard("large")).toBe("4rem");
    expect(getPaddingCard("medium")).toBe("3.2rem");
    expect(getPaddingCard("large", "mobile")).toBe("2.4rem");
    expect(getPaddingCard("xsmall", "mobile")).toBe("1.2rem");
  });
});

describe("border-width tokens", () => {
  it("light 모드 값을 반환한다", () => {
    expect(getBorderWidth("variable-regular")).toBe("0.1rem");
    expect(getBorderWidth("variable-medium")).toBe("0.2rem");
    expect(getBorderWidth("static-regular")).toBe("0.1rem");
    expect(getBorderWidth("static-medium")).toBe("0.2rem");
  });

  it("high-contrast 모드에서 variable 두께가 증가한다", () => {
    expect(getBorderWidth("variable-regular", "high-contrast")).toBe("0.2rem");
    expect(getBorderWidth("variable-medium", "high-contrast")).toBe("0.3rem");
  });

  it("high-contrast 모드에서 static 두께는 유지된다", () => {
    expect(getBorderWidth("static-regular", "high-contrast")).toBe("0.1rem");
    expect(getBorderWidth("static-medium", "high-contrast")).toBe("0.2rem");
  });
});

describe("existing token getters (spec spot checks)", () => {
  it("primitive 색상이 스펙과 일치한다", () => {
    expect(getColor("primary.50")).toBe("#256ef4");
    expect(getColor("gray.90")).toBe("#1e2124");
    expect(getColor("danger.50")).toBe("#de3412");
  });

  it("semantic 팔레트가 스펙과 일치한다", () => {
    expect(getPalette("text.basic")).toBe("#1e2124");
    expect(getPalette("surface.gray-subtler")).toBe("#f4f5f6");
    expect(getPalette("border.gray-light")).toBe("#cdd1d5");
    expect(getPalette("text.basic", "high-contrast")).toBe("#f4f5f6");
  });

  it("radius 토큰이 스펙과 일치한다", () => {
    expect(getRadius("xsmall1")).toBe("0.2rem");
    expect(getRadius("medium3")).toBe("0.8rem");
    expect(getRadius("max")).toBe("100rem");
  });
});
