import { Alert } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Alert> = {
  title: "KRDS-TW/Alert",
  component: Alert,
  parameters: { layout: "centered" },
  argTypes: {
    severity: {
      options: ["info", "success", "warning", "danger"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    severity: "info",
    children: "정보를 확인하세요.",
  },
};

export const WithTitle: Story = {
  args: {
    severity: "info",
    title: "안내",
    children: "상세한 안내 내용이 표시됩니다.",
  },
};

export const Danger: Story = {
  args: {
    severity: "danger",
    title: "오류",
    children: "처리 중 오류가 발생했습니다.",
  },
};

export const Warning: Story = {
  args: {
    severity: "warning",
    title: "주의",
    children: "이 작업은 되돌릴 수 없습니다.",
  },
};

export const Success: Story = {
  args: {
    severity: "success",
    title: "완료",
    children: "성공적으로 처리되었습니다.",
  },
};
