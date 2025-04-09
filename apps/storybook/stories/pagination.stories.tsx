import type { Meta } from "@storybook/react";

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
  tags: ["autodocs"],
  argTypes: {
    count: {
      control: { type: "range", min: 1, max: 100 },
    },
  },
};

export default meta;

export const ExamplePagination = {
  args: {
    count: 10,
  },
};
