import type { Meta, StoryObj } from "@storybook/react";

import { Chip, ChipGroup } from "@gracefullight/krds/components";
import { useState } from "react";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/WtWFDtQ92hZo9E9fTPFFqt/KRDS_v1.0.0--Community-?node-id=5117-25728&t=t2Byfr6EHMehC3wp-4",
    },
    layout: "centered",
  },
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const ExampleChip: Story = {
  args: {
    children: "싱글칩",
    disabled: false,
    size: "medium",
  },
};

export const ExampleSingleChipGroup: Story = {
  args: {
    disabled: false,
    size: "medium",
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <ChipGroup
        value={value}
        onChange={(newValue) => setValue(newValue as string)}
      >
        <Chip {...args} value="1">
          싱글칩1
        </Chip>
        <Chip {...args} value="2">
          싱글칩2
        </Chip>
        <Chip {...args} value="3">
          싱글칩3
        </Chip>
      </ChipGroup>
    );
  },
};

export const ExampleMultipleChipGroup: Story = {
  args: {
    disabled: false,
    size: "medium",
  },
  render: (args) => {
    const [value, setValue] = useState<string[]>([]);

    return (
      <ChipGroup
        multiple
        value={value}
        onChange={(newValue) => {
          setValue(newValue as string[]);
        }}
      >
        <Chip {...args} value="1">
          멀티칩1
        </Chip>
        <Chip {...args} value="2">
          멀티칩2
        </Chip>
        <Chip {...args} value="3">
          멀티칩3
        </Chip>
      </ChipGroup>
    );
  },
};
