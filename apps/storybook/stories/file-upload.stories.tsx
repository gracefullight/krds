import { FileUpload } from "@gracefullight/krds/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FileUpload> = {
  title: "KRDS-MUI/FileUpload",
  component: FileUpload,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "파일 선택 버튼과 드래그 앤 드롭으로 로컬 파일을 첨부하는 파일 업로드입니다. 파일 형식/크기/개수 제한은 도움말 텍스트로 안내하고, 오류 시 구체적인 메시지를 제공합니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  name: "단일 파일",
  args: {
    label: "첨부파일",
    helperText: "PDF, JPG 형식, 파일당 최대 10MB",
    accept: ".pdf,.jpg,.jpeg",
    maxSize: 10 * 1024 * 1024,
    style: { width: 480 },
  },
};

export const Multiple: Story = {
  name: "다중 파일",
  args: {
    label: "증빙서류 첨부",
    description: "신청 내용을 증명할 수 있는 서류를 첨부해주세요.",
    helperText: "최대 5개, 파일당 10MB 이내",
    multiple: true,
    maxFiles: 5,
    maxSize: 10 * 1024 * 1024,
    style: { width: 480 },
  },
};
