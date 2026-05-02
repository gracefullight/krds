import type { Meta, StoryObj } from "@storybook/react";

import { InPageNavigation } from "@gracefullight/krds/components";
import { useState } from "react";

const meta: Meta<typeof InPageNavigation> = {
  title: "KRDS/InPageNavigation",
  component: InPageNavigation,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/1v2MFjp5vHuQLChvWBieHD?node-id=4869:215785",
    },
    layout: "centered",
  },
  argTypes: {
    sticky: {
      control: { type: "boolean" },
      description: "sticky 포지셔닝 활성화 여부",
    },
    stickyTop: {
      control: { type: "number" },
      description: "sticky 시 상단 오프셋(px)",
    },
    activeId: {
      control: { type: "text" },
      description: "활성 섹션 id (controlled)",
    },
    "aria-label": {
      control: { type: "text" },
      description: "nav 요소의 aria-label",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const sampleItems = [
  { id: "overview", label: "개요", href: "#overview" },
  { id: "usage", label: "사용 방법", href: "#usage" },
  { id: "props", label: "Props", href: "#props" },
  { id: "accessibility", label: "접근성", href: "#accessibility" },
  { id: "examples", label: "예제", href: "#examples" },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    "aria-label": "콘텐츠 내 탐색",
  },
  render: (args) => (
    <div style={{ width: 240 }}>
      <InPageNavigation items={sampleItems} {...args} />
    </div>
  ),
};

export const WithActiveItem: Story = {
  args: {
    items: sampleItems,
    activeId: "usage",
    "aria-label": "콘텐츠 내 탐색",
  },
  render: (args) => (
    <div style={{ width: 240 }}>
      <InPageNavigation items={sampleItems} {...args} />
    </div>
  ),
};

export const Controlled: Story = {
  args: {
    items: sampleItems,
    "aria-label": "콘텐츠 내 탐색",
  },
  render: (args) => {
    const [activeId, setActiveId] = useState("overview");
    return (
      <div style={{ display: "flex", gap: 32 }}>
        <div style={{ width: 240 }}>
          <InPageNavigation items={sampleItems} {...args} activeId={activeId} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {sampleItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              style={{
                background: activeId === item.id ? "#256ef4" : "#eef2f7",
                border: "none",
                borderRadius: 4,
                color: activeId === item.id ? "#fff" : "#1e2124",
                cursor: "pointer",
                padding: "8px 16px",
              }}
            >
              {item.label} 활성화
            </button>
          ))}
        </div>
      </div>
    );
  },
};

export const StickyWithScrollContent: Story = {
  args: {
    items: sampleItems,
    sticky: true,
    stickyTop: 80,
    "aria-label": "콘텐츠 내 탐색",
  },
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: 32, padding: 24 }}>
      <div style={{ width: 240, flexShrink: 0 }}>
        <InPageNavigation items={sampleItems} {...args} />
      </div>
      <div style={{ flex: 1, maxWidth: 600 }}>
        {sampleItems.map((item) => (
          <section
            key={item.id}
            id={item.id}
            style={{ marginBottom: 120, paddingTop: 16 }}
          >
            <h2
              style={{
                borderBottom: "1px solid #cdd1d5",
                fontSize: "2rem",
                marginBottom: 16,
                paddingBottom: 8,
              }}
            >
              {item.label}
            </h2>
            <p style={{ color: "#464c53", lineHeight: 1.6 }}>
              {item.label} 섹션의 예시 본문입니다. 스크롤하면 좌측 탐색 메뉴의
              활성 항목이 자동으로 변경됩니다.
            </p>
          </section>
        ))}
      </div>
    </div>
  ),
};
