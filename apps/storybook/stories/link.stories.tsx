import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "@mui/material";

const meta: Meta<typeof Link> = {
  title: "KRDS/Link",
  component: Link,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/FQZqKPOEJVqFCFglsC5VUt/KRDS_v1.0.0--Community-?node-id=4847-27045&t=5iLlxTAzJnfFkDu5-4",
    },
    layout: "centered",
  },

  argTypes: {
    type: {
      options: ["default", "subtle", "subtle-none"],
      control: {
        type: "radio",
      },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    icon: {
      options: ["none", "external"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleLink: Story = {
  args: {
    children: "링크",
    type: "default",
    size: "medium",
    icon: "none",
  },
};
