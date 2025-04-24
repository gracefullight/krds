import type { Meta, StoryObj } from "@storybook/react";

import HomeIcon from "@mui/icons-material/Home";
import { Breadcrumbs, Link } from "@mui/material";

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
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleBreadcrumbs: Story = {
  args: {
    children: [
      <Link key="home">
        <HomeIcon />홈
      </Link>,
      <Link key="1depth">1Depth</Link>,
      <Link key="2depth">2Depth</Link>,
      <Link key="3depth">3Depth</Link>,
      <Link key="4depth">4Depth</Link>,
    ],
  },
};

export const ExampleCollapsedBreadcrumbs: Story = {
  args: {
    children: [
      <Link key="home">
        <HomeIcon />홈
      </Link>,
      <Link key="1depth">1Depth</Link>,
      <Link key="2depth">2Depth</Link>,
      <Link key="3depth">3Depth</Link>,
      <Link key="4depth">4Depth</Link>,
      <Link key="5depth">5Depth</Link>,
    ],
  },
};
