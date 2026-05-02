import { FileUpload } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof FileUpload> = {
  title: "KRDS-TW/FileUpload",
  component: FileUpload,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "드래그 앤 드롭 또는 클릭으로 파일을 업로드합니다. 파일 크기 및 형식 유효성 검사를 지원합니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "기본",
  render: () => {
    const [files, setFiles] = useState<File[]>([]);
    return (
      <div className="w-96">
        <FileUpload
          label="파일 첨부"
          helperText="PDF, JPG, PNG 형식 지원"
          value={files}
          onChange={setFiles}
        />
      </div>
    );
  },
};

export const Multiple: Story = {
  name: "다중 파일 업로드",
  render: () => {
    const [files, setFiles] = useState<File[]>([]);
    return (
      <div className="w-96">
        <FileUpload
          label="첨부파일 (여러 개 가능)"
          multiple
          accept=".pdf,.jpg,.png"
          maxSize={5 * 1024 * 1024}
          helperText="최대 5MB, PDF/JPG/PNG 형식"
          value={files}
          onChange={setFiles}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  name: "비활성화",
  args: {
    label: "파일 첨부 (비활성화)",
    disabled: true,
    helperText: "현재 파일 업로드가 비활성화되어 있습니다.",
  },
};

export const WithError: Story = {
  name: "오류 상태",
  args: {
    label: "파일 첨부",
    error: true,
    helperText: "파일 업로드 중 오류가 발생했습니다. 다시 시도해주세요.",
  },
};
