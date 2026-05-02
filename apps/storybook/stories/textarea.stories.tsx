import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "@gracefullight/krds/components";

const meta: Meta<typeof Textarea> = {
  title: "KRDS/Textarea",
  component: Textarea,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/1v2MFjp5vHuQLChvWBieHD?node-id=4869-221266",
    },
    layout: "centered",
  },

  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    error: {
      control: { type: "boolean" },
    },
    required: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
    placeholder: {
      control: { type: "text" },
    },
    helperText: {
      control: { type: "text" },
    },
    maxLength: {
      control: { type: "number" },
    },
    rows: {
      control: { type: "number" },
    },
  },

  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "내용",
    placeholder: "내용을 입력하세요",
    rows: 4,
    disabled: false,
    error: false,
    required: false,
  },
};

export const WithCounter: Story = {
  args: {
    label: "내용",
    placeholder: "내용을 입력하세요",
    maxLength: 200,
    rows: 4,
    disabled: false,
    error: false,
    required: false,
  },
};

export const WithHelperTextAndCounter: Story = {
  args: {
    label: "의견",
    placeholder: "의견을 입력하세요",
    helperText: "200자 이내로 입력해 주세요.",
    maxLength: 200,
    rows: 4,
    disabled: false,
    error: false,
    required: true,
  },
};

export const ErrorState: Story = {
  args: {
    label: "내용",
    placeholder: "내용을 입력하세요",
    helperText: "필수 항목입니다. 내용을 입력해 주세요.",
    error: true,
    maxLength: 200,
    rows: 4,
    disabled: false,
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "내용",
    placeholder: "입력 불가",
    helperText: "현재 입력이 비활성화된 상태입니다.",
    disabled: true,
    maxLength: 200,
    rows: 4,
    error: false,
  },
};

export const NoLabel: Story = {
  args: {
    placeholder: "라벨 없이 사용하는 경우",
    maxLength: 100,
    rows: 3,
    disabled: false,
    error: false,
  },
};
