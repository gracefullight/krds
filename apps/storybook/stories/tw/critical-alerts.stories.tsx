import type { Meta, StoryObj } from "@storybook/react";

import { CriticalAlerts } from "@gracefullight/krds-tw";
import { fn } from "@storybook/test";

const meta: Meta<typeof CriticalAlerts> = {
  title: "KRDS-TW/CriticalAlerts",
  component: CriticalAlerts,
  parameters: { layout: "padded" },
  argTypes: {
    severity: {
      options: ["info", "warning", "danger"],
      control: { type: "radio" },
    },
    title: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <CriticalAlerts severity="warning" title="시스템 점검 안내">
      2025년 5월 10일(토) 02:00 ~ 06:00 정기 시스템 점검이 예정되어 있습니다.
      점검 중에는 서비스 이용이 제한됩니다.
    </CriticalAlerts>
  ),
};

export const Danger: Story = {
  render: () => (
    <CriticalAlerts severity="danger" title="긴급 보안 공지">
      개인정보 유출 의심 사례가 발생하였습니다. 즉시 비밀번호를 변경해 주시기
      바랍니다.
    </CriticalAlerts>
  ),
};

export const Info: Story = {
  render: () => (
    <CriticalAlerts severity="info">
      새로운 서비스 업데이트가 있습니다. 변경 사항을 확인해 보세요.
    </CriticalAlerts>
  ),
};

export const WithClose: Story = {
  render: () => (
    <CriticalAlerts severity="warning" title="서버 점검 예정" onClose={fn()}>
      내일 새벽 3시부터 5시까지 서버 점검이 진행됩니다.
    </CriticalAlerts>
  ),
};
