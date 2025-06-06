import type { Meta, StoryObj } from "@storybook/react";

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

type Story = StoryObj<typeof meta>;

export const ExampleButton: Story = {
  args: {
    color: "primary",
    disabled: false,
    size: "medium",
    variant: "contained",
    onClick: fn(),
    children: "버튼",
  },
};
