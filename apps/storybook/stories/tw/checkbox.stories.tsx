import { Checkbox } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  title: "KRDS-TW/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
  argTypes: {
    size: {
      options: ["medium", "large"],
      control: { type: "radio" },
    },
    disabled: { control: { type: "boolean" } },
    indeterminate: { control: { type: "boolean" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "동의합니다",
    size: "medium",
    disabled: false,
  },
};

export const Large: Story = {
  args: {
    label: "큰 크기 체크박스",
    size: "large",
  },
};

export const Indeterminate: Story = {
  args: {
    label: "중간 상태",
    indeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "비활성 체크박스",
    disabled: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        label={checked ? "선택됨" : "선택 안 됨"}
        checked={checked}
        onCheckedChange={(value) => setChecked(Boolean(value))}
      />
    );
  },
};
