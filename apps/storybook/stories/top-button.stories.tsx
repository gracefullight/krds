import type { Meta, StoryObj } from "@storybook/react";

import { TopButton } from "@gracefullight/krds/components";
import { fn } from "@storybook/test";

const meta: Meta<typeof TopButton> = {
  title: "Components/TopButton",
  component: TopButton,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/WtWFDtQ92hZo9E9fTPFFqt/KRDS_v1.0.0--Community-?node-id=5115-24554&t=LNVuOwn9gBXTHVIm-4",
    },
    layout: "centered",
  },

  argTypes: {
    showLabel: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleTopButton: Story = {
  args: {
    showLabel: false,
    onClick: fn(),
  },
};
