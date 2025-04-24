import type { CheckboxProps } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox, FormControlLabel } from "@mui/material";

const meta: Meta<typeof Checkbox> = {
  title: "KRDS/Checkbox",
  component: Checkbox,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/FQZqKPOEJVqFCFglsC5VUt/KRDS_v1.0.0--Community-?node-id=4853-4682&t=5iLlxTAzJnfFkDu5-4",
    },
    layout: "centered",
  },

  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    indeterminate: {
      control: { type: "boolean" },
    },
    size: {
      options: ["medium", "large"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleCheckbox: Story = {
  args: {
    disabled: false,
    indeterminate: false,
    size: "medium",
  },
  render: (args: CheckboxProps) => {
    return (
      <FormControlLabel
        control={<Checkbox {...args} defaultChecked />}
        label="체크박스"
      />
    );
  },
};
