import { Chip, ChipGroup } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof ChipGroup> = {
  title: "KRDS-TW/ChipGroup",
  component: ChipGroup,
  parameters: { layout: "centered" },
  argTypes: {
    multiple: { control: { type: "boolean" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ChipGroup {...args}>
      <Chip value="all">전체</Chip>
      <Chip value="news">뉴스</Chip>
      <Chip value="sports">스포츠</Chip>
      <Chip value="culture">문화</Chip>
    </ChipGroup>
  ),
  args: {
    multiple: false,
  },
};

export const Multiple: Story = {
  render: (args) => (
    <ChipGroup {...args}>
      <Chip value="red">빨강</Chip>
      <Chip value="blue">파랑</Chip>
      <Chip value="green">초록</Chip>
      <Chip value="yellow">노랑</Chip>
    </ChipGroup>
  ),
  args: {
    multiple: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState("news");
    return (
      <div className="flex flex-col gap-4">
        <ChipGroup value={value} onChange={(v) => setValue(v as string)}>
          <Chip value="all">전체</Chip>
          <Chip value="news">뉴스</Chip>
          <Chip value="sports">스포츠</Chip>
        </ChipGroup>
        <p className="text-sm">선택된 값: {value || "없음"}</p>
      </div>
    );
  },
};
