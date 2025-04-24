import type { RadioProps } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

const meta: Meta<typeof Radio> = {
  title: "KRDS/RadioButton",
  component: Radio,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/FQZqKPOEJVqFCFglsC5VUt/KRDS_v1.0.0--Community-?node-id=4864-161729&t=uTlRkVSMsJmUNHgs-4",
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
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

export const ExampleRadioButton: Story = {
  args: {
    disabled: false,
    size: "medium",
  },
  render: (args: RadioProps) => {
    return (
      <FormControlLabel control={<Radio {...args} />} label="라디오버튼" />
    );
  },
};

export const ExampleRadioGroup: Story = {
  args: {
    disabled: false,
    size: "medium",
  },
  render: (args: RadioProps) => {
    return (
      <RadioGroup name="radio-group" defaultValue="everyday" row>
        <FormControlLabel
          control={<Radio {...args} />}
          label="매일"
          value="everyday"
        />
        <FormControlLabel
          control={<Radio {...args} />}
          label="월 10-29일"
          value="10-29"
        />
        <FormControlLabel
          control={<Radio {...args} />}
          label="월 3-9일"
          value="3-9"
        />
        <FormControlLabel
          control={<Radio {...args} />}
          label="월 1-2일"
          value="1-2"
        />
        <FormControlLabel
          control={<Radio {...args} />}
          label="하지 않음"
          value="none"
        />
      </RadioGroup>
    );
  },
};
