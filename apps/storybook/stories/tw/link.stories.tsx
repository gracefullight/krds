import { Link } from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Link> = {
  title: "KRDS-TW/Link",
  component: Link,
  parameters: { layout: "centered" },
  argTypes: {
    external: { control: { type: "boolean" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "#",
    children: "링크 텍스트",
  },
};

export const External: Story = {
  args: {
    href: "https://www.gov.kr",
    external: true,
    children: "외부 링크 (새 탭)",
  },
};

export const InlineText: Story = {
  render: () => (
    <p>
      자세한 내용은 <Link href="#">이용약관</Link> 및{" "}
      <Link href="#">개인정보처리방침</Link>을 확인하세요.
    </p>
  ),
};
