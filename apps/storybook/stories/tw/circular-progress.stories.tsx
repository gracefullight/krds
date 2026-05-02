import { CircularProgress } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CircularProgress> = {
  title: "KRDS-TW/CircularProgress",
  component: CircularProgress,
  parameters: { layout: "centered" },
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    value: { control: { type: "number", min: 0, max: 100 } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "medium",
    "aria-label": "로딩 중",
  },
};

export const Indeterminate: Story = {
  args: {
    size: "large",
    "aria-label": "데이터를 불러오는 중입니다",
  },
};

export const Determinate: Story = {
  args: {
    value: 65,
    size: "large",
    "aria-label": "65% 완료",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <CircularProgress size="small" aria-label="소형 로딩 중" />
      <CircularProgress size="medium" aria-label="중형 로딩 중" />
      <CircularProgress size="large" aria-label="대형 로딩 중" />
    </div>
  ),
};

export const DeterminateProgress: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      {[0, 25, 50, 75, 100].map((value) => (
        <CircularProgress
          key={value}
          value={value}
          size="large"
          aria-label={`${value}% 완료`}
        />
      ))}
    </div>
  ),
};
