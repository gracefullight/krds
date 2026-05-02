import { Pagination, type PaginationProps } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Pagination> = {
  title: "KRDS-TW/Pagination",
  component: Pagination,
  parameters: { layout: "centered" },
  argTypes: {
    count: { control: { type: "number", min: 1 } },
    page: { control: { type: "number", min: 1 } },
    siblingCount: { control: { type: "number", min: 0 } },
    boundaryCount: { control: { type: "number", min: 0 } },
    showFirstButton: { control: { type: "boolean" } },
    showLastButton: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [page, setPage] = useState(args.page ?? 1);
    return (
      <Pagination
        {...(args as PaginationProps)}
        page={page}
        onChange={setPage}
      />
    );
  },
  args: {
    count: 10,
    page: 1,
  },
};

export const WithFirstLastButtons: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);
    return (
      <Pagination
        {...(args as PaginationProps)}
        page={page}
        onChange={setPage}
      />
    );
  },
  args: {
    count: 20,
    page: 1,
    showFirstButton: true,
    showLastButton: true,
  },
};

export const ManyPages: Story = {
  render: (args) => {
    const [page, setPage] = useState(5);
    return (
      <Pagination
        {...(args as PaginationProps)}
        page={page}
        onChange={setPage}
      />
    );
  },
  args: {
    count: 50,
    page: 5,
    siblingCount: 2,
    showFirstButton: true,
    showLastButton: true,
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [page, setPage] = useState(3);
    return (
      <Pagination
        {...(args as PaginationProps)}
        page={page}
        onChange={setPage}
      />
    );
  },
  args: {
    count: 10,
    page: 3,
    disabled: true,
  },
};
