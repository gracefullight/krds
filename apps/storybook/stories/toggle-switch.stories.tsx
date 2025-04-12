import type { Meta } from "@storybook/react";

import { FormControlLabel, Switch, type SwitchProps } from "@mui/material";

const meta: Meta<typeof Switch> = {
  title: "KRDS/ToggleSwitch",
  component: Switch,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/FQZqKPOEJVqFCFglsC5VUt/KRDS_v1.0.0--Community-?node-id=4869-168148&t=CEuLlotfB399DLbQ-4",
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    size: {
      options: ["medium", "large"],
      control: {
        type: "radio",
      },
    },
  },
};

export default meta;

export const ExampleToggleSwitch = {
  args: {
    disabled: false,
    size: "medium",
  },
  render: (args: SwitchProps) => {
    return (
      <FormControlLabel
        control={<Switch {...args} defaultChecked />}
        label="스위치"
      />
    );
  },
};
