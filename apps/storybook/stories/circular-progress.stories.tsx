import type { Meta, StoryObj } from "@storybook/react";

import { CircularProgress } from "@mui/material";

const meta: Meta<typeof CircularProgress> = {
  title: "KRDS/Spinner",
  component: CircularProgress,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/FQZqKPOEJVqFCFglsC5VUt/KRDS_v1.0.0--Community-?node-id=5135-10300&t=Bfgm03l1Z3SwSxNc-4",
    },
    layout: "centered",
  },

  argTypes: {
    disableShrink: {
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

export const ExampleSpinner: Story = {
  args: {
    disableShrink: false,
    size: "medium",
  },
};
