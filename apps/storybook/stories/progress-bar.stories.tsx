import type { Meta } from "@storybook/react";

import { LinearProgress } from "@mui/material";

const meta: Meta<typeof LinearProgress> = {
  title: "KRDS/ProgressBar",
  component: LinearProgress,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/FQZqKPOEJVqFCFglsC5VUt/KRDS_v1.0.0--Community-?node-id=5115-27125&t=uTlRkVSMsJmUNHgs-4",
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      options: ["primary", "success", "error"],
      control: { type: "radio" },
    },
    size: {
      options: ["medium", "large"],
      control: { type: "radio" },
    },
    variant: {
      options: ["determinate", "indeterminate"],
      control: { type: "radio" },
    },
    value: {
      control: { type: "number" },
      if: {
        arg: "variant",
        eq: "determinate",
      },
    },
  },
};

export default meta;

export const ExampleProgressBar = {
  args: {
    color: "primary",
    size: "medium",
    variant: "indeterminate",
    value: 100,
    sx: {
      width: "500px",
    },
  },
};
