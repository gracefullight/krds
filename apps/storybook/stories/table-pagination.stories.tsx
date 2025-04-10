import type { Meta } from "@storybook/react";

import { TablePagination } from "@mui/material";
import { fn } from "@storybook/test";

const meta: Meta<typeof TablePagination> = {
  title: "KRDS/Pagination",
  component: TablePagination,
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
    page: {
      control: { type: "range", min: 0, max: 9, step: 1 },
    },
    rowsPerPage: {
      control: { type: "select" },
      options: [10, 25, 50, 100],
    },
  },
  args: {
    onPageChange: fn(),
  },
};

export default meta;

export const ExampleTablePagination = {
  args: {
    count: 100,
    page: 0,
    rowsPerPage: 10,
  },
};
