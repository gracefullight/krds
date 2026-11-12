import { RangeSlider } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RangeSlider> = {
  title: "KRDS-TW/RangeSlider",
  component: RangeSlider,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "연속된 범위에서 값을 선택하는 범위 슬라이더입니다. 레이블, 선택 값, 최소/최대 범위를 항상 표시하며, 단계는 전체 범위의 10~20% 수준이 적절합니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "기본",
  args: {
    label: "글자 크기",
    min: 0,
    max: 10,
    step: 1,
    defaultValue: 5,
    style: { width: 360 },
  },
};

export const Volume: Story = {
  name: "볼륨 (단위 표시)",
  args: {
    label: "볼륨",
    min: 0,
    max: 100,
    step: 10,
    defaultValue: 60,
    formatValue: (v: number) => `${v}%`,
    style: { width: 360 },
  },
};

export const Disabled: Story = {
  name: "비활성",
  args: {
    label: "밝기",
    defaultValue: 30,
    disabled: true,
    style: { width: 360 },
  },
};
