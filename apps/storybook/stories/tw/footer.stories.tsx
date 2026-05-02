import { Footer } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Footer> = {
  title: "KRDS-TW/Footer",
  component: Footer,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOrganization = {
  name: "행정안전부",
  address: "세종특별자치시 한누리대로 209",
  tel: "1588-2100",
  fax: "044-205-3399",
  hours: "평일 09:00 ~ 18:00",
};

const defaultLinks = [
  { label: "개인정보처리방침", href: "/privacy", bold: true },
  { label: "저작권정책", href: "/copyright" },
  { label: "접근성정책", href: "/accessibility" },
  { label: "이용약관", href: "/terms" },
];

export const Default: Story = {
  args: {
    organization: defaultOrganization,
    links: defaultLinks,
    copyright: "Copyright © 행정안전부. All rights reserved.",
  },
};

export const WithSocials: Story = {
  args: {
    organization: defaultOrganization,
    links: defaultLinks,
    copyright: "Copyright © 행정안전부. All rights reserved.",
    socials: [
      {
        label: "유튜브",
        href: "https://youtube.com",
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.8 5 12 5 12 5s-4.8 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.9C6.8 19 12 19 12 19s4.8 0 7-.2c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM9.7 14.5V9.4l5.5 2.6-5.5 2.5z" />
          </svg>
        ),
      },
      {
        label: "페이스북",
        href: "https://facebook.com",
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1c0 6 4.4 11 10.1 11.9v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-1.9.9-1.9 1.9v2.2h3.3l-.5 3.5H14V24C19.6 23.1 24 18.1 24 12.1z" />
          </svg>
        ),
      },
    ],
  },
};

export const Minimal: Story = {
  args: {
    organization: {
      name: "보건복지부",
    },
    copyright: "Copyright © 보건복지부. All rights reserved.",
  },
};
