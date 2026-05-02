import { Radio } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Radio> = {
  title: "KRDS-TW/Radio",
  component: Radio,
  parameters: { layout: "centered" },
  argTypes: {
    size: {
      options: ["medium", "large"],
      control: { type: "radio" },
    },
    disabled: { control: { type: "boolean" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "option1",
    label: "선택지 1",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    value: "yes",
    label: "예",
    size: "large",
  },
};

export const Disabled: Story = {
  args: {
    value: "disabled",
    label: "비활성 선택지",
    disabled: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState("option1");
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          {["option1", "option2", "option3"].map((opt, idx) => (
            <label
              key={opt}
              className="inline-flex cursor-pointer items-center gap-2"
            >
              <input
                type="radio"
                name="controlled-radio"
                value={opt}
                checked={value === opt}
                onChange={() => setValue(opt)}
                className="size-5"
              />
              <span>선택지 {idx + 1}</span>
            </label>
          ))}
        </div>
        <p className="text-sm">선택된 값: {value}</p>
      </div>
    );
  },
};
