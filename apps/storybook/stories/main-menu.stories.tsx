import type { Meta, StoryObj } from "@storybook/react";

import { MainMenu } from "@gracefullight/krds/components";

const sampleItems = [
  {
    label: "정부24",
    href: "#",
  },
  {
    label: "민원서비스",
    children: [
      { label: "민원신청", href: "#" },
      { label: "민원조회", href: "#" },
      { label: "민원발급", href: "#" },
    ],
  },
  {
    label: "정부서비스",
    children: [
      {
        label: "복지",
        href: "#",
        children: [
          { label: "복지급여 신청", href: "#" },
          { label: "복지시설 찾기", href: "#" },
        ],
      },
      {
        label: "교육",
        href: "#",
        children: [
          { label: "학자금 지원", href: "#" },
          { label: "교육급여 신청", href: "#" },
        ],
      },
      {
        label: "고용",
        href: "#",
        children: [
          { label: "실업급여 신청", href: "#" },
          { label: "취업 지원", href: "#" },
        ],
      },
    ],
  },
  {
    label: "정책정보",
    children: [
      { label: "정책뉴스", href: "#" },
      { label: "정책브리핑", href: "#" },
      { label: "공공데이터", href: "#" },
    ],
  },
  {
    label: "기관안내",
    children: [
      { label: "소개", href: "#" },
      { label: "조직도", href: "#" },
      { label: "연혁", href: "#" },
      { label: "찾아오시는 길", href: "#" },
    ],
  },
];

const meta: Meta<typeof MainMenu> = {
  title: "Components/MainMenu",
  component: MainMenu,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/1v2MFjp5vHuQLChvWBieHD?node-id=4773:128219",
    },
    layout: "fullscreen",
    docs: {
      description: {
        component: `
**KRDS 메인 메뉴 (v1.1.0)**

상단 수평 내비게이션 바 + 드롭다운 패널 컴포넌트입니다.

### v1.1.0 변경 사항

뷰포트 높이에 따른 메뉴 영역 최대 높이 제어가 추가되었습니다.
드롭다운 패널은 \`max-height: calc(100dvh - <headerOffset>px)\` CSS를 적용하여
헤더 높이를 차감한 나머지 뷰포트 안에서 스크롤됩니다.
패널 콘텐츠가 아무리 길어도 화면 아래로 넘어가지 않습니다.

### 접근성

- \`role="navigation"\`, \`role="menubar"\`, \`role="menuitem"\`
- \`aria-expanded\`, \`aria-haspopup\` 속성 자동 설정
- 키보드: \`ArrowLeft\` / \`ArrowRight\` 로 최상위 항목 이동, \`Enter\` / \`Space\` 열기, \`Escape\` 닫기
- \`focus-visible\` 포커스 링 표시
- 모바일: MUI \`Drawer\` 기반 햄버거 메뉴
        `,
      },
    },
  },
  argTypes: {
    items: {
      control: false,
      description: "메뉴 항목 배열 (label, href, children 지원)",
    },
    headerOffset: {
      control: { type: "number", min: 0, max: 200, step: 4 },
      description:
        "헤더 높이(px). v1.1.0 드롭다운 max-height 계산에 사용됩니다.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/** 기본 메인 메뉴 */
export const Default: Story = {
  args: {
    items: sampleItems,
    headerOffset: 64,
  },
};

/**
 * v1.1.0 — 뷰포트 높이 aware max-height 데모
 *
 * 드롭다운 패널은 `calc(100dvh - headerOffset)` 를 초과할 수 없습니다.
 * headerOffset을 200으로 설정하여 패널이 뷰포트 하단을 넘지 않고
 * 스크롤되는 동작을 확인할 수 있습니다.
 */
export const ViewportHeightAwarePanel: Story = {
  name: "v1.1.0 — 뷰포트 높이 aware max-height",
  args: {
    headerOffset: 200,
    items: [
      {
        label: "긴 목록 메뉴",
        children: Array.from({ length: 20 }, (_, i) => ({
          label: `하위 항목 ${i + 1}`,
          href: "#",
        })),
      },
      ...sampleItems.slice(1),
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "`headerOffset=200` 으로 설정했을 때 하위 항목이 20개인 드롭다운이 `calc(100dvh - 200px)` 안에서 스크롤됩니다.",
      },
    },
  },
};

/** 단일 depth 메뉴 (하위 없음) */
export const FlatMenu: Story = {
  name: "단순 메뉴 (1-depth)",
  args: {
    items: [
      { label: "홈", href: "#" },
      { label: "소개", href: "#" },
      { label: "서비스", href: "#" },
      { label: "고객지원", href: "#" },
    ],
    headerOffset: 64,
  },
};

/** 3-depth 중첩 드롭다운 */
export const DeepMenu: Story = {
  name: "3-depth 중첩 드롭다운",
  args: {
    items: sampleItems,
    headerOffset: 64,
  },
};
