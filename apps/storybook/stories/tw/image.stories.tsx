import { Image } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const SAMPLE_IMAGE = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='640' height='360'><rect width='640' height='360' fill='#e6e8ea'/><rect x='40' y='200' width='180' height='120' fill='#b1b8be'/><rect x='260' y='140' width='140' height='180' fill='#8a949e'/><rect x='440' y='180' width='160' height='140' fill='#6d7882'/><circle cx='560' cy='70' r='36' fill='#ffb114'/></svg>`,
)}`;

const meta: Meta<typeof Image> = {
  title: "KRDS-TW/Image",
  component: Image,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          '정보 전달 이미지에는 alt 대체 텍스트를 제공하고, 장식용 이미지는 alt=""로 스크린 리더가 무시하도록 합니다. 이미지는 대화형 콘텐츠가 아니므로 키보드 초점과 클릭 동작을 제공하지 않습니다.',
      },
    },
  },
  argTypes: {
    ratio: {
      control: { type: "select" },
      options: ["auto", "16:9", "4:3", "3:2", "1:1"],
    },
    fit: {
      control: { type: "radio" },
      options: ["cover", "contain"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "기본 (대체 텍스트)",
  args: {
    src: SAMPLE_IMAGE,
    alt: "정부 청사 전경 일러스트",
    style: { width: 480 },
  },
};

export const WithCaption: Story = {
  name: "설명 포함 (figure)",
  args: {
    src: SAMPLE_IMAGE,
    alt: "정부 청사 전경 일러스트",
    caption: "그림 1. 정부 청사 배치도",
    ratio: "16:9",
    style: { width: 480 },
  },
};

export const Decorative: Story = {
  name: '장식용 (alt="")',
  args: {
    src: SAMPLE_IMAGE,
    alt: "",
    ratio: "16:9",
    style: { width: 480 },
  },
};
