import type { Meta, StoryObj } from "@storybook/react";

import { Masthead } from "@gracefullight/krds/components";

const meta: Meta<typeof Masthead> = {
  title: "Components/Masthead",
  component: Masthead,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/WtWFDtQ92hZo9E9fTPFFqt/KRDS_v1.0.0--Community-?node-id=344-26884&t=QoYdNOTksTdBQx3H-4",
    },
    layout: "fullscreen",
  },

  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleMasthead: Story = {};
