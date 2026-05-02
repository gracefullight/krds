import type { Meta, StoryObj } from "@storybook/react";

import { Disclosure } from "@gracefullight/krds-tw";

const meta: Meta<typeof Disclosure> = {
  title: "KRDS-TW/Disclosure",
  component: Disclosure,
  parameters: { layout: "padded" },
  argTypes: {
    defaultOpen: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Disclosure summary="자주 묻는 질문: 서비스 이용 방법은 어떻게 되나요?">
      서비스 이용은 회원가입 후 로그인하여 사용하실 수 있습니다. 자세한 내용은
      이용 가이드를 참고해 주세요.
    </Disclosure>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <Disclosure defaultOpen summary="개인정보 처리방침 주요 내용">
      <p>
        본 서비스는 이용자의 개인정보를 중요하게 생각하며, 개인정보 보호법 및
        관련 법령에 따라 처리하고 있습니다.
      </p>
      <ul className="mt-2 list-disc ps-5">
        <li>수집 항목: 이름, 이메일, 전화번호</li>
        <li>보유 기간: 회원 탈퇴 후 30일</li>
        <li>제3자 제공: 원칙적으로 제공하지 않습니다</li>
      </ul>
    </Disclosure>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Disclosure disabled summary="비활성화된 항목 (클릭 불가)">
      이 내용은 보이지 않습니다.
    </Disclosure>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Disclosure summary="배송은 얼마나 걸리나요?">
        일반 배송은 2~3일, 빠른 배송은 익일 도착을 목표로 합니다.
      </Disclosure>
      <Disclosure summary="반품 및 교환은 어떻게 하나요?">
        구매일로부터 7일 이내에 고객센터로 연락주시면 처리해 드립니다.
      </Disclosure>
      <Disclosure summary="결제 수단은 어떤 것들이 있나요?">
        신용카드, 계좌이체, 카카오페이, 네이버페이 등 다양한 결제 수단을
        지원합니다.
      </Disclosure>
    </div>
  ),
};
