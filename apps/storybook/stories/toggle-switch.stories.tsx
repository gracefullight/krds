import type { Meta } from "@storybook/react";

import { Switch } from "@mui/material";

const meta: Meta<typeof Switch> = {
  title: "KRDS/Switch",
  component: Switch,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/FQZqKPOEJVqFCFglsC5VUt/KRDS_v1.0.0--Community-?node-id=4869-168148&t=CEuLlotfB399DLbQ-4",
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

export const ExampleSwitch = {
  args: {},
};
