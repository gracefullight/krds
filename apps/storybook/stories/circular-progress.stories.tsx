import type { Meta } from "@storybook/react";

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
  tags: ["autodocs"],
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

export const ExampleSpinner = {
  args: {
    disableShrink: false,
    size: "medium",
  },
};
