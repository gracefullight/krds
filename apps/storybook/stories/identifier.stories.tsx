import { Identifier } from "@gracefullight/krds/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Identifier> = {
  title: "KRDS-MUI/Identifier",
  component: Identifier,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "서비스 운영 주체의 상위 기관을 안내하는 운영기관 식별자입니다. 푸터 내부의 마지막 구획(section)으로 포함시키며, 서비스 로고가 아닌 운영기관 로고를 사용합니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "기본",
  args: {
    name: "행정안전부",
    address: "세종특별자치시 정부2청사로 13",
    phone: "1588-0000",
    links: [
      { label: "개인정보처리방침", href: "#privacy" },
      { label: "저작권정책", href: "#copyright" },
    ],
  },
};

export const WithLogo: Story = {
  name: "로고 포함",
  args: {
    name: "행정안전부",
    logoSrc: `data:image/svg+xml;utf8,${encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='40'><rect width='120' height='40' rx='6' fill='#e6e8ea'/><text x='60' y='25' font-size='13' text-anchor='middle' fill='#464c53'>운영기관 로고</text></svg>`,
    )}`,
    logoAlt: "행정안전부 로고",
  },
};
