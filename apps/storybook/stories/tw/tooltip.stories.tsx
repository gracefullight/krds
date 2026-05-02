import { Button, Tooltip } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tooltip> = {
  title: "KRDS-TW/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
  argTypes: {
    placement: {
      options: ["top", "bottom", "left", "right"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "툴팁 내용입니다",
    placement: "top",
    children: <Button>마우스를 올려보세요</Button>,
  },
};

export const Bottom: Story = {
  args: {
    content: "아래쪽 툴팁",
    placement: "bottom",
    children: <Button>아래 툴팁</Button>,
  },
};

export const Left: Story = {
  args: {
    content: "왼쪽 툴팁",
    placement: "left",
    children: <Button>왼쪽 툴팁</Button>,
  },
};

export const Right: Story = {
  args: {
    content: "오른쪽 툴팁",
    placement: "right",
    children: <Button>오른쪽 툴팁</Button>,
  },
};
