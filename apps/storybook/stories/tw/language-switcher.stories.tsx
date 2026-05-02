import { LanguageSwitcher } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const LANGUAGES = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
];

const meta: Meta<typeof LanguageSwitcher> = {
  title: "KRDS-TW/LanguageSwitcher",
  component: LanguageSwitcher,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "언어를 선택하는 드롭다운 컴포넌트입니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "기본",
  render: () => {
    const [lang, setLang] = useState("ko");
    return (
      <LanguageSwitcher
        languages={LANGUAGES}
        value={lang}
        onChange={setLang}
        aria-label="언어 선택"
      />
    );
  },
};

export const TwoLanguages: Story = {
  name: "한국어/영어",
  render: () => {
    const [lang, setLang] = useState("ko");
    const twoLangs = [
      { code: "ko", label: "한국어" },
      { code: "en", label: "English" },
    ];
    return (
      <LanguageSwitcher
        languages={twoLangs}
        value={lang}
        onChange={setLang}
        aria-label="언어 선택"
      />
    );
  },
};
