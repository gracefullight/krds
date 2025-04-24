import type { Meta, StoryObj } from "@storybook/react";

import { SplashScreen } from "@gracefullight/krds/components";

const meta: Meta<typeof SplashScreen> = {
  title: "Components/SplashScreen",
  component: SplashScreen,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/o8jepiinwX0H9a68rej55p/KRDS_v1.0.0--Community-?node-id=5163-24376&t=NBTtouUUBzss0g3e-4",
    },
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    slogan: {
      control: {
        type: "text",
      },
    },
    loadingText: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleSplashScreen: Story = {};
