import { Badge } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Badge> = {
  title: "KRDS-TW/Badge",
  component: Badge,
  parameters: { layout: "centered" },
  argTypes: {
    color: {
      options: ["primary", "danger", "warning", "success"],
      control: { type: "radio" },
    },
    dot: { control: { type: "boolean" } },
    count: { control: { type: "number" } },
    maxCount: { control: { type: "number" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 5,
    color: "danger",
  },
};

export const Dot: Story = {
  args: {
    dot: true,
    color: "primary",
  },
};

export const WithCount: Story = {
  args: {
    count: 42,
    color: "primary",
  },
};

export const OverMaxCount: Story = {
  args: {
    count: 120,
    maxCount: 99,
    color: "danger",
  },
};
