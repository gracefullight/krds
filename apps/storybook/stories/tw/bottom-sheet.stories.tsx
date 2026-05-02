import type { Meta, StoryObj } from "@storybook/react";

import { Close } from "@gracefullight/krds-icons";
import {
  BottomSheet,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetTrigger,
} from "@gracefullight/krds-tw";

const meta: Meta<typeof BottomSheet> = {
  title: "KRDS-TW/BottomSheet",
  component: BottomSheet,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <BottomSheet>
      <BottomSheetTrigger className="inline-flex items-center justify-center rounded-lg bg-btn-primary-fill px-4 py-2 text-label-md font-bold text-fg-inverse-static hover:bg-btn-primary-fill-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary">
        바텀 시트 열기
      </BottomSheetTrigger>
      <BottomSheetContent>
        <BottomSheetHeader>
          <BottomSheetTitle>필터 설정</BottomSheetTitle>
          <BottomSheetClose>
            <Close size={24} aria-hidden="true" />
          </BottomSheetClose>
        </BottomSheetHeader>
        <div className="flex flex-col gap-4">
          <p className="text-body-md text-fg-basic">
            원하시는 조건을 선택해 주세요.
          </p>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-body-md">
              <input type="checkbox" />
              최신순 정렬
            </label>
            <label className="flex items-center gap-2 text-body-md">
              <input type="checkbox" />
              인기순 정렬
            </label>
            <label className="flex items-center gap-2 text-body-md">
              <input type="checkbox" />
              가격 낮은순
            </label>
          </div>
          <button
            type="button"
            className="mt-2 w-full rounded-lg bg-btn-primary-fill py-3 text-label-md font-bold text-fg-inverse-static hover:bg-btn-primary-fill-hover"
          >
            적용하기
          </button>
        </div>
      </BottomSheetContent>
    </BottomSheet>
  ),
};

export const WithActions: Story = {
  render: () => (
    <BottomSheet>
      <BottomSheetTrigger className="inline-flex items-center justify-center rounded-lg border border-stroke-gray-light px-4 py-2 text-label-md font-bold text-fg-basic hover:bg-surface-gray-subtler focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary">
        약관 동의 시트 열기
      </BottomSheetTrigger>
      <BottomSheetContent>
        <BottomSheetHeader>
          <BottomSheetTitle>서비스 이용 동의</BottomSheetTitle>
        </BottomSheetHeader>
        <div className="flex flex-col gap-4">
          <p className="text-body-md text-fg-basic">
            서비스 이용을 위해 아래 약관에 동의해 주세요.
          </p>
          <div className="rounded-lg bg-surface-gray-subtler p-4 text-body-sm text-fg-subtle">
            제1조 (목적) 이 약관은 서비스 이용에 관한 조건 및 절차, 기타 필요한
            사항을 규정하는 것을 목적으로 합니다. 제2조 (서비스 이용) 회원은
            서비스를 법령과 이 약관의 규정 및 회사의 공지사항에서 정한 사항에
            따라 이용할 수 있습니다.
          </div>
          <div className="flex gap-2">
            <BottomSheetClose className="flex-1 rounded-lg border border-stroke-gray-light py-3 text-label-md font-bold text-fg-basic hover:bg-surface-gray-subtler">
              취소
            </BottomSheetClose>
            <BottomSheetClose className="flex-1 rounded-lg bg-btn-primary-fill py-3 text-label-md font-bold text-fg-inverse-static hover:bg-btn-primary-fill-hover">
              동의합니다
            </BottomSheetClose>
          </div>
        </div>
      </BottomSheetContent>
    </BottomSheet>
  ),
};
