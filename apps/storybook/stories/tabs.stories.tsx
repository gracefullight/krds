import type { Meta } from "@storybook/react";

import { Tab, Tabs } from "@mui/material";
import { fn } from "@storybook/test";

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
  tags: ["autodocs"],
  argTypes: {
    // @ts-expect-error
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
  arg: {
    onChange: fn(),
  },
};

export default meta;

export const ExampleTabs = {
  args: {
    type: "primary",
    fill: "outlined",
    children: [
      <Tab key="tab1" label="Tab 1" />,
      <Tab key="tab2" label="Tab 2" />,
      <Tab key="tab3" label="Tab 3" />,
    ],
    value: 0,
  },
};
