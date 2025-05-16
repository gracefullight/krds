import type { Meta, StoryObj } from "@storybook/react";

import { Home } from "@gracefullight/krds-icons";
import { Breadcrumbs, type BreadcrumbsProps, Link } from "@mui/material";

const meta: Meta<typeof Breadcrumbs> = {
  title: "KRDS/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/FQZqKPOEJVqFCFglsC5VUt/KRDS_v1.0.0--Community-?node-id=4920-107964&t=5iLlxTAzJnfFkDu5-4",
    },
    layout: "centered",
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleBreadcrumbs: Story = {
  render: (args: BreadcrumbsProps) => (
    <Breadcrumbs {...args}>
      <Link key="home">
        <Home size={16} />홈
      </Link>
      <Link key="1depth">1Depth</Link>
      <Link key="2depth">2Depth</Link>
      <Link key="3depth">3Depth</Link>
      <Link key="4depth">4Depth</Link>
    </Breadcrumbs>
  ),
};

export const ExampleCollapsedBreadcrumbs: Story = {
  render: (args: BreadcrumbsProps) => (
    <Breadcrumbs {...args}>
      <Link key="home">
        <Home size={16} />홈
      </Link>
      <Link key="1depth">1Depth</Link>
      <Link key="2depth">2Depth</Link>
      <Link key="3depth">3Depth</Link>
      <Link key="4depth">4Depth</Link>
      <Link key="5depth">5Depth</Link>
    </Breadcrumbs>
  ),
};
