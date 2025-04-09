import type { Meta } from "@storybook/react";

import { Button } from "@mui/material";
import { fn } from "@storybook/test";

const meta: Meta<typeof Button> = {
  title: "KRDS/Button",
  component: Button,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/FQZqKPOEJVqFCFglsC5VUt/KRDS_v1.0.0--Community-?node-id=4768-29663&t=DU8HtNazUoyQ0jRD-4",
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "radio",
      },
    },
    disabled: {
      control: { type: "boolean" },
    },
    size: {
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      control: { type: "select" },
    },
    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: "radio" },
    },
  },
};

export default meta;

export const ExampleButton = {
  args: {
    color: "primary",
    disabled: false,
    size: "medium",
    variant: "contained",
    onClick: fn(),
    children: "버튼",
  },
};
