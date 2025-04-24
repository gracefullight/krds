import type { Meta, StoryObj } from "@storybook/react";

import { Pagination } from "@mui/material";

const meta: Meta<typeof Pagination> = {
  title: "KRDS/Pagination",
  component: Pagination,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/FQZqKPOEJVqFCFglsC5VUt/KRDS_v1.0.0--Community-?node-id=4853-112588&t=uTlRkVSMsJmUNHgs-4",
    },
    layout: "centered",
  },

  argTypes: {
    count: {
      control: { type: "range", min: 1, max: 100 },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ExamplePagination: Story = {
  args: {
    count: 10,
  },
};
