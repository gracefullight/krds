import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Radio, RadioGroup } from "#/components/radio";

describe("RadioGroup + Radio", () => {
  it("라디오 옵션들을 렌더링한다", () => {
    render(
      <RadioGroup>
        <Radio value="a" label="옵션 A" />
        <Radio value="b" label="옵션 B" />
      </RadioGroup>,
    );
    expect(screen.getByText("옵션 A")).toBeInTheDocument();
    expect(screen.getByText("옵션 B")).toBeInTheDocument();
  });

  it("클릭 시 onValueChange를 호출한다", async () => {
    const handler = vi.fn();
    render(
      <RadioGroup onValueChange={handler}>
        <Radio value="a" label="옵션 A" />
        <Radio value="b" label="옵션 B" />
      </RadioGroup>,
    );
    await userEvent.click(screen.getByText("옵션 A"));
    // @base-ui-components onValueChange passes (value, event) — check first arg
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0]).toBe("a");
  });

  it("controlled value로 선택된 라디오가 표시된다", () => {
    render(
      <RadioGroup value="b">
        <Radio value="a" label="옵션 A" />
        <Radio value="b" label="옵션 B" />
      </RadioGroup>,
    );
    const radios = screen.getAllByRole("radio");
    expect(radios[1]).toBeChecked();
  });

  it("disabled 라디오는 aria-disabled가 설정되고 클릭이 동작하지 않는다", async () => {
    const handler = vi.fn();
    render(
      <RadioGroup onValueChange={handler}>
        <Radio value="a" label="비활성" disabled />
      </RadioGroup>,
    );
    const radio = screen.getByRole("radio");
    // @base-ui-components uses aria-disabled on span role=radio
    expect(radio).toHaveAttribute("aria-disabled", "true");
    await userEvent.click(radio);
    expect(handler).not.toHaveBeenCalled();
  });

  it("label htmlFor과 radio id가 연결된다", () => {
    render(
      <RadioGroup>
        <Radio value="x" label="연결 확인" id="my-radio" />
      </RadioGroup>,
    );
    const label = screen.getByText("연결 확인").closest("label");
    expect(label).toHaveAttribute("for", "my-radio");
  });
});
