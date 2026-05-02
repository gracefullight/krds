import type { HelpPanelProps } from "@gracefullight/krds/components";
import type { Meta, StoryObj } from "@storybook/react";

import { HelpPanel } from "@gracefullight/krds/components";
import { useState } from "react";

const meta: Meta<HelpPanelProps> = {
  title: "KRDS/HelpPanel",
  component: HelpPanel,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/1v2MFjp5vHuQLChvWBieHD/KRDS-v1.1.0?node-id=4869-221259",
    },
    layout: "fullscreen",
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["help", "tutorial"],
      description: "패널 유형 (도움 | 따라하기)",
    },
    open: {
      control: { type: "boolean" },
      description: "패널 열림 여부",
    },
    title: {
      control: { type: "text" },
      description: "패널 제목",
    },
  },
};

export default meta;

type Story = StoryObj<HelpPanelProps>;

export const Help: Story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/1v2MFjp5vHuQLChvWBieHD/KRDS-v1.1.0?node-id=4869-221259",
    },
  },
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div style={{ minHeight: "100vh", padding: "24px" }}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          style={{
            padding: "8px 16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          도움말 열기
        </button>
        <HelpPanel
          variant="help"
          open={open}
          onClose={() => setOpen(false)}
          title="도움말"
        >
          <section>
            <h3 style={{ marginTop: 0 }}>서비스 이용 안내</h3>
            <p>
              이 서비스는 정부24 포털의 민원 신청을 도와드립니다. 아래 안내를
              참고하여 손쉽게 민원을 처리하세요.
            </p>
            <h4>주요 기능</h4>
            <ul>
              <li>민원 신청 및 조회</li>
              <li>처리 상태 실시간 확인</li>
              <li>전자문서 발급</li>
              <li>공공서비스 예약</li>
            </ul>
            <h4>문의처</h4>
            <p>
              고객센터: 1234-5678
              <br />
              운영시간: 평일 09:00 ~ 18:00
            </p>
          </section>
        </HelpPanel>
      </div>
    );
  },
};

export const Tutorial: Story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/1v2MFjp5vHuQLChvWBieHD/KRDS-v1.1.0?node-id=4869-221259",
    },
  },
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div style={{ minHeight: "100vh", padding: "24px" }}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          style={{
            padding: "8px 16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          따라하기 열기
        </button>
        <HelpPanel
          variant="tutorial"
          open={open}
          onClose={() => setOpen(false)}
          title="민원 신청 따라하기"
          steps={[
            {
              title: "1단계: 로그인",
              description:
                "서비스 이용을 위해 먼저 로그인이 필요합니다. 공동인증서, 간편인증(카카오, 네이버) 등 다양한 방법으로 로그인할 수 있습니다.",
            },
            {
              title: "2단계: 민원 선택",
              description:
                "원하는 민원 서비스를 검색하거나 카테고리에서 선택합니다. 자주 찾는 민원은 즐겨찾기로 등록해두면 편리하게 이용할 수 있습니다.",
            },
            {
              title: "3단계: 신청서 작성",
              description:
                "신청에 필요한 정보를 입력합니다. 주민등록번호, 주소, 연락처 등 기본 정보는 공동인증서로 로그인 시 자동으로 채워집니다.",
            },
            {
              title: "4단계: 제출 및 확인",
              description:
                "입력한 내용을 확인 후 제출합니다. 제출이 완료되면 접수번호가 발급되며, 처리 현황은 '나의 민원' 메뉴에서 확인할 수 있습니다.",
            },
          ]}
        />
      </div>
    );
  },
};
