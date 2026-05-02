import { Chip } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Chip> = {
  title: "KRDS-TW/Chip",
  component: Chip,
  parameters: { layout: "centered" },
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    selected: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "medium",
    selected: false,
    children: "전체",
  },
};

export const Selected: Story = {
  args: {
    size: "medium",
    selected: true,
    children: "선택됨",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "소형",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "대형",
  },
};

export const Disabled: Story = {
  args: {
    size: "medium",
    disabled: true,
    children: "비활성",
  },
};
