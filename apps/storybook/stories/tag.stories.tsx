import type { Meta, StoryObj } from "@storybook/react";

import { Chip } from "@mui/material";
import { fn } from "@storybook/test";

const meta: Meta<typeof Chip> = {
  title: "KRDS/Tag",
  component: Chip,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/FQZqKPOEJVqFCFglsC5VUt/KRDS_v1.0.0--Community-?node-id=4869-166875&t=Bfgm03l1Z3SwSxNc-4",
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    clickable: {
      control: { type: "boolean" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleTag: Story = {
  args: {
    clickable: false,
    label: "태그",
    size: "medium",
  },
};

export const ExampleDeletableTag: Story = {
  args: {
    clickable: false,
    label: "태그",
    size: "small",
    onDelete: fn(),
  },
};
