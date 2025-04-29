import type { Meta, StoryObj } from "@storybook/react";
import { type SyntheticEvent, useState } from "react";

import { Tab, Tabs } from "@mui/material";

const meta: Meta<typeof Tabs> = {
  title: "KRDS/Tabs",
  component: Tabs,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/FQZqKPOEJVqFCFglsC5VUt/KRDS_v1.0.0--Community-?node-id=5163-4344&t=Bfgm03l1Z3SwSxNc-4",
    },
    layout: "centered",
  },

  argTypes: {
    fill: {
      options: ["outlined", "contained"],
      control: { type: "radio" },
    },
    type: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    value: {
      control: { type: "range", min: 0, max: 2, step: 1 },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleTabs: Story = {
  args: {
    type: "primary",
    fill: "outlined",
    value: 0,
  },
  render: (args) => {
    const [value, setValue] = useState(args.value || 0);

    const handleChange = (_: SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
      <Tabs {...args} value={value} onChange={handleChange}>
        <Tab key="tab1" label="Tab 1" />,
        <Tab key="tab2" label="Tab 2" />,
        <Tab key="tab3" label="Tab 3" />,
      </Tabs>
    );
  },
};
