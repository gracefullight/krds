import { Search } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Search> = {
  title: "KRDS-TW/Search",
  component: Search,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "검색 입력 필드와 검색 버튼으로 구성된 검색 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
      description: "크기",
    },
    disabled: {
      control: { type: "boolean" },
      description: "비활성화 여부",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "기본",
  render: () => {
    const [query, setQuery] = useState("");
    return (
      <div className="w-80">
        <Search
          value={query}
          onChange={setQuery}
          onSubmit={(q) => alert(`검색어: ${q}`)}
          placeholder="검색어를 입력하세요"
          aria-label="검색"
        />
      </div>
    );
  },
};

export const Small: Story = {
  name: "소형",
  render: () => {
    const [query, setQuery] = useState("");
    return (
      <div className="w-64">
        <Search
          size="small"
          value={query}
          onChange={setQuery}
          placeholder="검색"
          aria-label="검색"
        />
      </div>
    );
  },
};

export const Large: Story = {
  name: "대형",
  render: () => {
    const [query, setQuery] = useState("");
    return (
      <div className="w-96">
        <Search
          size="large"
          value={query}
          onChange={setQuery}
          placeholder="검색어를 입력하세요"
          aria-label="검색"
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  name: "비활성화",
  args: {
    disabled: true,
    placeholder: "검색 불가",
    "aria-label": "검색",
  },
};
