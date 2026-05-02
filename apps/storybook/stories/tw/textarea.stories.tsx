import { Textarea } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Textarea> = {
  title: "KRDS-TW/Textarea",
  component: Textarea,
  parameters: { layout: "padded" },
  argTypes: {
    rows: { control: { type: "number" } },
    maxLength: { control: { type: "number" } },
    error: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
    required: { control: { type: "boolean" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "내용",
    placeholder: "입력해주세요",
  },
};

export const WithCounter: Story = {
  args: {
    label: "한줄소개",
    placeholder: "자기소개를 입력해주세요",
    maxLength: 100,
  },
};

export const ErrorState: Story = {
  args: {
    label: "필수 항목",
    placeholder: "입력해주세요",
    error: true,
    helperText: "필수 입력 항목입니다",
  },
};

export const Disabled: Story = {
  args: {
    label: "비활성화",
    placeholder: "입력할 수 없습니다",
    disabled: true,
    defaultValue: "비활성화된 내용입니다",
  },
};

export const Required: Story = {
  args: {
    label: "필수 입력",
    placeholder: "반드시 입력해주세요",
    required: true,
    helperText: "이 항목은 필수입니다",
  },
};
