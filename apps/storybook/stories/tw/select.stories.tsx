import {
  Select,
  SelectContent,
  SelectIconTrigger,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SimpleSelect,
} from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SimpleSelect> = {
  title: "KRDS-TW/Select",
  component: SimpleSelect,
  parameters: { layout: "padded" },
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    disabled: { control: { type: "boolean" } },
    error: { control: { type: "boolean" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const 시도목록 = [
  { value: "seoul", label: "서울특별시" },
  { value: "busan", label: "부산광역시" },
  { value: "daegu", label: "대구광역시" },
  { value: "incheon", label: "인천광역시" },
  { value: "gwangju", label: "광주광역시" },
];

export const Default: Story = {
  args: {
    items: 시도목록,
    placeholder: "시/도를 선택해주세요",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <SimpleSelect items={시도목록} placeholder="소형 (small)" size="small" />
      <SimpleSelect
        items={시도목록}
        placeholder="중형 (medium)"
        size="medium"
      />
      <SimpleSelect items={시도목록} placeholder="대형 (large)" size="large" />
    </div>
  ),
};

export const ErrorState: Story = {
  args: {
    items: 시도목록,
    placeholder: "시/도를 선택해주세요",
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    items: 시도목록,
    placeholder: "선택할 수 없습니다",
    disabled: true,
  },
};

export const Composable: Story = {
  render: () => (
    <div className="w-64">
      <Select defaultValue="seoul">
        <SelectTrigger size="medium">
          <SelectValue placeholder="시/도를 선택해주세요" />
          <SelectIconTrigger />
        </SelectTrigger>
        <SelectContent>
          {시도목록.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  ),
};
