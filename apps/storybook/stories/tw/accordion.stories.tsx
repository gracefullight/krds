import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Accordion> = {
  title: "KRDS-TW/Accordion",
  component: Accordion,
  parameters: { layout: "padded" },
  argTypes: {
    type: {
      options: ["single", "multiple"],
      control: { type: "radio" },
    },
    disabled: { control: { type: "boolean" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-full max-w-xl">
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>개인정보 처리방침이란 무엇인가요?</AccordionTrigger>
          <AccordionContent>
            개인정보 처리방침은 기관이 개인정보를 어떻게 수집, 이용, 보관,
            파기하는지에 대한 정책을 명시한 문서입니다.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>개인정보를 어떻게 보호하나요?</AccordionTrigger>
          <AccordionContent>
            수집된 개인정보는 암호화 처리되며, 접근 권한을 엄격하게 관리합니다.
            또한 정기적인 보안 점검을 실시합니다.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>개인정보 열람 및 삭제 방법은?</AccordionTrigger>
          <AccordionContent>
            마이페이지에서 본인의 개인정보를 열람하거나 삭제를 요청할 수
            있습니다. 삭제 요청 후 30일 이내에 처리됩니다.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  args: {
    type: "single",
  },
};

export const Multiple: Story = {
  render: () => (
    <div className="w-full max-w-xl">
      <Accordion type="multiple" defaultValue={["item-1"]}>
        <AccordionItem value="item-1">
          <AccordionTrigger>서비스 이용 방법</AccordionTrigger>
          <AccordionContent>
            회원가입 후 로그인하여 서비스를 이용하실 수 있습니다.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>요금 안내</AccordionTrigger>
          <AccordionContent>
            기본 서비스는 무료로 제공되며, 프리미엄 서비스는 월 9,900원입니다.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>환불 정책</AccordionTrigger>
          <AccordionContent>
            결제 후 7일 이내에는 전액 환불이 가능합니다.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const WithDisabledItem: Story = {
  render: () => (
    <div className="w-full max-w-xl">
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>이용 가능한 항목</AccordionTrigger>
          <AccordionContent>이 항목은 정상적으로 열립니다.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" disabled>
          <AccordionTrigger>비활성화된 항목</AccordionTrigger>
          <AccordionContent>이 항목은 열리지 않습니다.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>다른 이용 가능한 항목</AccordionTrigger>
          <AccordionContent>이 항목도 정상적으로 열립니다.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
