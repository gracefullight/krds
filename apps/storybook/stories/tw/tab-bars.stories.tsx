"use client";

import type { Meta, StoryObj } from "@storybook/react";

import { TabBars } from "@gracefullight/krds-tw";
import { useState } from "react";

const meta: Meta<typeof TabBars> = {
  title: "KRDS-TW/TabBars",
  component: TabBars,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof meta>;

function HomeIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path
        d="M20 20l-3-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M13.73 21a2 2 0 01-3.46 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const tabItems = [
  { id: "home", label: "홈", icon: <HomeIcon /> },
  { id: "search", label: "검색", icon: <SearchIcon /> },
  { id: "notification", label: "알림", icon: <BellIcon /> },
  { id: "profile", label: "마이페이지", icon: <UserIcon /> },
];

export const Default: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("home");
    return (
      <div className="w-full max-w-sm border border-stroke-gray-light rounded-lg overflow-hidden">
        <div className="flex items-center justify-center h-32 bg-surface-gray-subtler text-fg-subtle text-body-md">
          {tabItems.find((t) => t.id === activeTab)?.label} 화면
        </div>
        <TabBars
          items={tabItems}
          value={activeTab}
          onChange={setActiveTab}
          aria-label="주요 메뉴"
        />
      </div>
    );
  },
};

export const ThreeTabs: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("home");
    const items = tabItems.slice(0, 3);
    return (
      <div className="w-full max-w-sm">
        <TabBars
          items={items}
          value={activeTab}
          onChange={setActiveTab}
          aria-label="주요 메뉴"
        />
      </div>
    );
  },
};
