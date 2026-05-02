import { Button } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta: Meta<typeof Button> = {
  title: "KRDS-TW/Button",
  component: Button,
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary", "text"],
      control: { type: "radio" },
    },
    size: {
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      control: { type: "select" },
    },
    disabled: { control: { type: "boolean" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "primary",
    size: "medium",
    disabled: false,
    onClick: fn(),
    children: "버튼",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    children: "보조 버튼",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    size: "medium",
    children: "3차 버튼",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    size: "medium",
    children: "텍스트 버튼",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "medium",
    disabled: true,
    children: "비활성 버튼",
  },
};
