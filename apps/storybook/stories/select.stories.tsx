import type { Meta } from "@storybook/react";

import { MenuItem, Select } from "@mui/material";

const meta: Meta<typeof Select> = {
  title: "KRDS/Select",
  component: Select,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/FQZqKPOEJVqFCFglsC5VUt/KRDS_v1.0.0--Community-?node-id=5173-4612&t=xytebmefZpUAfFe3-4",
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    displayEmpty: {
      control: { type: "boolean" },
    },
    error: {
      control: { type: "boolean" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    value: {
      control: { type: "text" },
    },
  },
};

export default meta;

export const ExampleSelect = {
  args: {
    disabled: false,
    displayEmpty: true,
    error: false,
    size: "medium",
    value: "",
    children: [
      <MenuItem key="0" value="">
        선택해주세요.
      </MenuItem>,
      <MenuItem key="1" value="1">
        옵션 1
      </MenuItem>,
      <MenuItem key="2" value="2">
        옵션 2
      </MenuItem>,
      <MenuItem key="3" value="3">
        옵션 3
      </MenuItem>,
    ],
  },
};
