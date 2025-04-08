import type { Meta } from "@storybook/react";

import { Badge } from "@mui/material";

const meta: Meta<typeof Badge> = {
  title: "KRDS/Badge",
  component: Badge,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/FQZqKPOEJVqFCFglsC5VUt/KRDS_v1.0.0--Community-?node-id=5153-116416&t=5iLlxTAzJnfFkDu5-4",
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    badgeContent: {
      control: { type: "text" },
    },
    color: {
      options: [
        "primary",
        "secondary",
        "tertiary",
        "point",
        "danger",
        "success",
        "info",
      ],
      control: {
        type: "select",
      },
    },
    variant: {
      options: ["standard", "dot", "text"],
      control: {
        type: "radio",
      },
    },
    fill: {
      options: ["contained", "outlined", "light"],
      control: {
        type: "radio",
      },
      if: { arg: "variant", eq: "text" },
    },
    size: {
      options: ["medium", "large"],
      control: { type: "radio" },
      if: { arg: "variant", eq: "text" },
    },
  },
};

export default meta;

export const ExampleBadge = {
  args: {
    badgeContent: "3",
    color: "primary",
    variant: "standard",
    size: "medium",
    fill: "contained",
  },
};
