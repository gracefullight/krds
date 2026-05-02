import { Close, Search, Setting } from "@gracefullight/krds-icons";
import { IconButton } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof IconButton> = {
  title: "KRDS-TW/IconButton",
  component: IconButton,
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary", "text"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    disabled: { control: { type: "boolean" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "aria-label": "검색",
    variant: "text",
    size: "medium",
    children: <Search />,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <IconButton aria-label="기본" variant="primary">
        <Search />
      </IconButton>
      <IconButton aria-label="보조" variant="secondary">
        <Search />
      </IconButton>
      <IconButton aria-label="3차" variant="tertiary">
        <Search />
      </IconButton>
      <IconButton aria-label="텍스트" variant="text">
        <Search />
      </IconButton>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <IconButton aria-label="소형" size="small">
        <Setting />
      </IconButton>
      <IconButton aria-label="중형" size="medium">
        <Setting />
      </IconButton>
      <IconButton aria-label="대형" size="large">
        <Setting />
      </IconButton>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <IconButton aria-label="비활성 기본" variant="primary" disabled>
        <Close />
      </IconButton>
      <IconButton aria-label="비활성 보조" variant="secondary" disabled>
        <Close />
      </IconButton>
      <IconButton aria-label="비활성 텍스트" variant="text" disabled>
        <Close />
      </IconButton>
    </div>
  ),
};
