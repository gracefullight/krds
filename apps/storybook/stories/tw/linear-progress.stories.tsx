import { LinearProgress } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LinearProgress> = {
  title: "KRDS-TW/LinearProgress",
  component: LinearProgress,
  parameters: { layout: "centered" },
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
    color: {
      options: ["primary", "secondary", "danger", "success"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 300 }}>
      <LinearProgress {...args} />
    </div>
  ),
  args: {
    value: 40,
    color: "primary",
  },
};

export const Success: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <LinearProgress value={100} color="success" />
    </div>
  ),
};

export const Danger: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <LinearProgress value={20} color="danger" />
    </div>
  ),
};
