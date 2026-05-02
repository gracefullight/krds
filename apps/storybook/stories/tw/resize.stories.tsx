import { Resize } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Resize> = {
  title: "KRDS-TW/Resize",
  component: Resize,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "화면 글자 크기를 조정하는 컴포넌트입니다. 단계별로 크기를 줄이거나 늘릴 수 있으며 기본값으로 초기화할 수 있습니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "기본",
  render: () => {
    const [value, setValue] = useState(100);
    return (
      <div className="flex flex-col items-center gap-4">
        <Resize value={value} onChange={setValue} />
        <p className="text-body-sm text-fg-subtle">현재 크기: {value}%</p>
      </div>
    );
  },
};

export const CustomLevels: Story = {
  name: "사용자 정의 단계",
  render: () => {
    const [value, setValue] = useState(100);
    const levels = [80, 100, 120, 150, 200];
    return (
      <div className="flex flex-col items-center gap-4">
        <Resize value={value} onChange={setValue} levels={levels} />
        <p className="text-body-sm text-fg-subtle">현재 크기: {value}%</p>
      </div>
    );
  },
};
