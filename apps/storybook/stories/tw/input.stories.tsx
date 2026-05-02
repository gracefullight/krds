import { Input } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "KRDS-TW/Input",
  component: Input,
  parameters: { layout: "centered" },
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    error: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "medium",
    placeholder: "내용을 입력하세요",
    label: "입력 필드",
  },
};

export const WithHelperText: Story = {
  args: {
    size: "medium",
    placeholder: "이메일을 입력하세요",
    label: "이메일",
    helperText: "유효한 이메일 주소를 입력해주세요.",
  },
};

export const ErrorState: Story = {
  args: {
    size: "medium",
    placeholder: "이메일을 입력하세요",
    label: "이메일",
    error: true,
    helperText: "올바른 이메일 형식이 아닙니다.",
    defaultValue: "invalid-email",
  },
};

export const Disabled: Story = {
  args: {
    size: "medium",
    placeholder: "비활성 상태",
    label: "비활성 입력",
    disabled: true,
  },
};
