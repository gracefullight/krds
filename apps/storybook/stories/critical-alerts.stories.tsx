import type { Meta, StoryObj } from "@storybook/react";

import { CriticalAlerts } from "@gracefullight/krds/components";
import { fn } from "@storybook/test";

const meta: Meta<typeof CriticalAlerts> = {
  title: "Components/CriticalAlerts",
  component: CriticalAlerts,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/FQZqKPOEJVqFCFglsC5VUt/KRDS_v1.0.0--Community-?node-id=5131-22290&t=OsGJKg2Xi1q8A0wQ-4",
    },
    layout: "centered",
  },
  argTypes: {
    content: {
      control: { type: "text" },
    },
    severity: {
      options: ["emergency", "safe", "info"],
      control: { type: "radio" },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleCriticalAlerts: Story = {
  args: {
    severity: "emergency",
    content: "미세먼지 노출 시 철저한 위생관리로 건강관리에 유의바랍니다.",
    onClick: fn(),
  },
};

export const ExampleCriticalAlertsWithoutButton: Story = {
  args: {
    severity: "info",
    content: "긴급 공지 내용 표시",
  },
};
