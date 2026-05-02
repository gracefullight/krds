import { Switch } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Switch> = {
  title: "KRDS-TW/Switch",
  component: Switch,
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
    size: "medium",
    label: "알림 설정",
    disabled: false,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "큰 스위치",
  },
};

export const Disabled: Story = {
  args: {
    size: "medium",
    label: "비활성 스위치",
    disabled: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="flex flex-col gap-4">
        <Switch
          label={checked ? "켜짐" : "꺼짐"}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <p className="text-sm">상태: {checked ? "활성" : "비활성"}</p>
      </div>
    );
  },
};
