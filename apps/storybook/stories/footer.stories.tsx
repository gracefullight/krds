import type { FooterProps } from "@gracefullight/krds/components";
import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "@gracefullight/krds/components";

const meta: Meta<typeof Footer> = {
  title: "KRDS-MUI/Footer",
  component: Footer,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/1v2MFjp5vHuQLChvWBieHD?node-id=4869:208140",
    },
    layout: "fullscreen",
  },
  argTypes: {
    copyright: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const defaultOrganization: FooterProps["organization"] = {
  name: "행정안전부",
  address: "30102 세종특별자치시 한누리대로 411",
  tel: "02-2100-3399",
  fax: "044-204-8911",
  hours: "평일 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00)",
};

const defaultLinks: FooterProps["links"] = [
  { label: "개인정보처리방침", href: "/privacy", bold: true },
  { label: "저작권정책", href: "/copyright" },
  { label: "이용약관", href: "/terms" },
  { label: "이메일무단수집거부", href: "/email-policy" },
  { label: "사이트맵", href: "/sitemap" },
];

export const ExampleFooter: Story = {
  args: {
    organization: defaultOrganization,
    links: defaultLinks,
    copyright:
      "Copyright © Ministry of the Interior and Safety. All rights reserved.",
  },
};

export const ExampleFooterMinimal: Story = {
  args: {
    organization: {
      name: "대한민국 정부",
    },
    copyright: "Copyright © Republic of Korea. All rights reserved.",
  },
};

export const ExampleFooterWithSocials: Story = {
  args: {
    organization: defaultOrganization,
    links: defaultLinks,
    copyright:
      "Copyright © Ministry of the Interior and Safety. All rights reserved.",
    socials: [
      {
        label: "페이스북",
        href: "https://www.facebook.com",
        icon: (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        ),
      },
      {
        label: "유튜브",
        href: "https://www.youtube.com",
        icon: (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
          </svg>
        ),
      },
    ],
  },
};

export const ExampleFooterLinksOnly: Story = {
  args: {
    organization: {
      name: "한국정보화진흥원",
    },
    links: defaultLinks,
    copyright: "Copyright © NIA. All rights reserved.",
  },
};
