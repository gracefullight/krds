import type { Meta, StoryObj } from "@storybook/react";

import { SideNavigation } from "@gracefullight/krds/components";

const meta: Meta<typeof SideNavigation> = {
  title: "KRDS/SideNavigation",
  component: SideNavigation,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/1v2MFjp5vHuQLChvWBieHD/KRDS-v1.1.0?node-id=4869-215313",
    },
    layout: "padded",
    docs: {
      description: {
        component: `
**KRDS 사이드 메뉴 (Side Navigation)**

트리 구조의 왼쪽 내비게이션 컴포넌트입니다.

### 주요 기능
- \`children\`이 있는 항목은 expand/collapse 버튼으로 렌더링
- 활성 항목: \`aria-current="page"\` + 좌측 강조 border
- 키보드 내비게이션: \`ArrowUp\` / \`ArrowDown\` 이동, \`Enter\` / \`Space\` 선택/토글, \`Escape\` 상위 항목으로 포커스
- WCAG 2.2 AA 준수: focus-visible 포커스 링
        `,
      },
    },
  },
  argTypes: {
    items: {
      control: false,
      description:
        "내비게이션 항목 배열 (id, label, href, active, children 지원)",
    },
    "aria-label": {
      control: { type: "text" },
      description: "nav 요소의 aria-label",
    },
    defaultExpandedIds: {
      control: false,
      description: "기본으로 펼쳐진 항목 id 목록",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const sampleItems = [
  {
    id: "intro",
    label: "소개",
    href: "/intro",
    active: true,
  },
  {
    id: "services",
    label: "서비스 안내",
    children: [
      {
        id: "services-welfare",
        label: "복지",
        children: [
          {
            id: "services-welfare-benefit",
            label: "복지급여 신청",
            href: "/services/welfare/benefit",
          },
          {
            id: "services-welfare-facility",
            label: "복지시설 찾기",
            href: "/services/welfare/facility",
          },
        ],
      },
      {
        id: "services-education",
        label: "교육",
        children: [
          {
            id: "services-education-loan",
            label: "학자금 지원",
            href: "/services/education/loan",
          },
          {
            id: "services-education-allowance",
            label: "교육급여 신청",
            href: "/services/education/allowance",
          },
        ],
      },
      {
        id: "services-employment",
        label: "고용",
        href: "/services/employment",
      },
    ],
  },
  {
    id: "policy",
    label: "정책정보",
    children: [
      { id: "policy-news", label: "정책뉴스", href: "/policy/news" },
      { id: "policy-brief", label: "정책브리핑", href: "/policy/brief" },
      { id: "policy-data", label: "공공데이터", href: "/policy/data" },
    ],
  },
  {
    id: "notice",
    label: "공지사항",
    href: "/notice",
  },
  {
    id: "faq",
    label: "자주 묻는 질문",
    href: "/faq",
  },
];

/** 기본 사이드 내비게이션 */
export const Default: Story = {
  args: {
    items: sampleItems,
    "aria-label": "사이드 메뉴",
    defaultExpandedIds: ["services"],
  },
};

/** 단순 1-depth 메뉴 */
export const FlatMenu: Story = {
  name: "단순 메뉴 (1-depth)",
  args: {
    items: [
      { id: "home", label: "홈", href: "/", active: true },
      { id: "about", label: "소개", href: "/about" },
      { id: "service", label: "서비스", href: "/service" },
      { id: "support", label: "고객지원", href: "/support" },
      { id: "contact", label: "문의하기", href: "/contact" },
    ],
    "aria-label": "주요 메뉴",
  },
};

/** 깊게 중첩된 3-depth 메뉴 */
export const DeepNestedMenu: Story = {
  name: "3-depth 중첩 메뉴",
  args: {
    items: sampleItems,
    "aria-label": "사이드 메뉴",
    defaultExpandedIds: ["services", "services-welfare"],
  },
};

/** 기본 전개 없는 전체 접힌 상태 */
export const AllCollapsed: Story = {
  name: "전체 접힌 상태",
  args: {
    items: sampleItems,
    "aria-label": "사이드 메뉴",
    defaultExpandedIds: [],
  },
};

/** onClick 전용 (href 없는) 항목 */
export const WithOnClickItems: Story = {
  name: "onClick 항목 포함",
  args: {
    items: [
      {
        id: "tab1",
        label: "탭 1",
        active: true,
        onClick: () => alert("탭 1 클릭"),
      },
      { id: "tab2", label: "탭 2", onClick: () => alert("탭 2 클릭") },
      {
        id: "tab3",
        label: "하위 있는 탭",
        children: [
          {
            id: "tab3-1",
            label: "하위 탭 A",
            onClick: () => alert("하위 탭 A 클릭"),
          },
          {
            id: "tab3-2",
            label: "하위 탭 B",
            onClick: () => alert("하위 탭 B 클릭"),
          },
        ],
      },
    ],
    "aria-label": "탭 메뉴",
  },
};
