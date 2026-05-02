import type { Meta, StoryObj } from "@storybook/react";

import {
  ContextualHelp,
  ContextualHelpContent,
  ContextualHelpTrigger,
  SimpleContextualHelp,
} from "@gracefullight/krds-tw";

const meta: Meta<typeof ContextualHelp> = {
  title: "KRDS-TW/ContextualHelp",
  component: ContextualHelp,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span className="text-body-md text-fg-basic">주민등록번호</span>
      <ContextualHelp>
        <ContextualHelpTrigger aria-label="주민등록번호 입력 도움말" />
        <ContextualHelpContent>
          <p className="font-semibold text-fg-bolder mb-1">주민등록번호란?</p>
          <p>
            대한민국 국민에게 부여되는 13자리 고유 식별번호입니다. 앞 6자리는
            생년월일, 뒤 7자리는 성별 및 지역 정보를 포함합니다.
          </p>
        </ContextualHelpContent>
      </ContextualHelp>
    </div>
  ),
};

export const SimpleVariant: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-body-md text-fg-basic">건강보험료</span>
        <SimpleContextualHelp
          content={
            <>
              <p className="font-semibold text-fg-bolder mb-1">건강보험료</p>
              <p>
                직전년도 소득을 기준으로 산정되며, 매년 11월에 재산정됩니다.
                정확한 금액은 국민건강보험공단 홈페이지에서 확인하세요.
              </p>
            </>
          }
        />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-body-md text-fg-basic">가구원 수</span>
        <SimpleContextualHelp
          content="실제 주민등록상 동일 주소에 거주하는 가족 구성원 수를 입력해 주세요."
          aria-label="가구원 수 설명"
        />
      </div>
    </div>
  ),
};

export const Composable: Story = {
  render: () => (
    <div className="flex items-start gap-2">
      <div>
        <p className="text-heading-xs text-fg-bolder">소득 인정액 계산</p>
        <p className="text-body-sm text-fg-subtle mt-0.5">
          복지 서비스 신청 기준 금액입니다
        </p>
      </div>
      <ContextualHelp>
        <ContextualHelpTrigger aria-label="소득 인정액 설명 열기" />
        <ContextualHelpContent>
          <p className="font-semibold text-fg-bolder mb-2">소득 인정액이란?</p>
          <p className="mb-2">소득 인정액 = 소득 평가액 + 재산의 소득 환산액</p>
          <ul className="list-disc ps-4 text-body-sm text-fg-subtle space-y-1">
            <li>소득 평가액: 실제 소득 기반 계산</li>
            <li>재산 소득 환산액: 보유 재산 기반 계산</li>
          </ul>
        </ContextualHelpContent>
      </ContextualHelp>
    </div>
  ),
};
