import { Divider } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Divider> = {
  title: "KRDS-TW/Divider",
  component: Divider,
  parameters: { layout: "centered" },
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
    },
    variant: {
      options: ["light", "default", "dark"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 300 }}>
      <Divider {...args} />
    </div>
  ),
  args: {
    orientation: "horizontal",
    variant: "default",
  },
};

export const Light: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <Divider variant="light" />
    </div>
  ),
};

export const Dark: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <Divider variant="dark" />
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ height: 80, display: "flex", alignItems: "center" }}>
      <span>왼쪽</span>
      <Divider
        orientation="vertical"
        style={{ height: 40, margin: "0 12px" }}
      />
      <span>오른쪽</span>
    </div>
  ),
};
