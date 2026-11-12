import { AccessibleMultimedia } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const SAMPLE_AUDIO =
  "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=";

const meta: Meta<typeof AccessibleMultimedia> = {
  title: "KRDS-TW/AccessibleMultimedia",
  component: AccessibleMultimedia,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "오디오/비디오/멀티미디어 콘텐츠에 캡션, 화면 해설, 설명적 원고 등 대체 정보를 함께 제공합니다. 정지 이미지의 설명은 VisuallyHidden을 사용하세요.",
      },
    },
  },
  argTypes: {
    kind: {
      control: { type: "radio" },
      options: ["audio", "video", "multimedia"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AudioWithTranscript: Story = {
  name: "오디오 + 설명적 원고",
  args: {
    kind: "audio",
    src: SAMPLE_AUDIO,
    title: "민원 안내 방송",
    transcript:
      "안내 방송 원고입니다. 방문 민원은 신분증을 지참하여 1층 종합민원실에서 접수하실 수 있습니다.",
    style: { width: 480 },
  },
};

export const VideoWithDescription: Story = {
  name: "비디오 + 화면 해설",
  args: {
    kind: "video",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    title: "신청 방법 안내 영상",
    description:
      "화면 오른쪽 상단의 신청 버튼이 강조 표시됩니다. 이어서 신청서 작성 화면으로 이동합니다.",
    style: { width: 480 },
  },
};

export const MultimediaWithCaptions: Story = {
  name: "멀티미디어 + 캡션",
  args: {
    kind: "multimedia",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    title: "서비스 이용 안내",
    captionsSrc:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.vtt",
    transcript: "영상에서 설명하는 서비스 이용 절차의 전체 원고입니다.",
    style: { width: 480 },
  },
};
