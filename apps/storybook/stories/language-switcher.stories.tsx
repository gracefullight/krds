import { LanguageSwitcher } from "@gracefullight/krds/components";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof LanguageSwitcher> = {
  title: "KRDS-MUI/LanguageSwitcher",
  component: LanguageSwitcher,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "서비스 표시 언어를 변경하는 언어 변경 컴포넌트입니다. 2개 언어는 링크 유형(전환되는 언어 이름을 원어로 표시), 3개 이상은 드롭다운 유형(지구본 아이콘)을 사용합니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

function LinkDemo() {
  const [value, setValue] = useState("ko");
  return (
    <LanguageSwitcher
      variant="link"
      languages={[
        { code: "ko", label: "한국어" },
        { code: "en", label: "English" },
      ]}
      value={value}
      onChange={setValue}
    />
  );
}

export const Link: Story = {
  name: "링크 유형 (2개 언어)",
  render: () => <LinkDemo />,
};

function DropdownDemo() {
  const [value, setValue] = useState("ko");
  return (
    <LanguageSwitcher
      languages={[
        { code: "ko", label: "한국어" },
        { code: "en", label: "English" },
        { code: "ja", label: "日本語" },
        { code: "zh", label: "中文" },
      ]}
      value={value}
      onChange={setValue}
    />
  );
}

export const Dropdown: Story = {
  name: "드롭다운 유형 (3개 이상)",
  render: () => <DropdownDemo />,
};
