import type { Meta, StoryObj } from "@storybook/react";

import { SkipLink } from "@gracefullight/krds/components";
import { fn } from "@storybook/test";

const meta: Meta<typeof SkipLink> = {
  title: "Components/SkipLink",
  component: SkipLink,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/o8jepiinwX0H9a68rej55p/KRDS_v1.0.0--Community-?node-id=343-57037&t=NBTtouUUBzss0g3e-4",
    },
    layout: "fullscreen",
  },

  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleSkipLink: Story = {
  args: {
    onClick: fn(),
  },
};
