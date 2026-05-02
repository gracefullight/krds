import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@gracefullight/krds-tw";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tabs> = {
  title: "KRDS-TW/Tabs",
  component: Tabs,
  parameters: { layout: "padded" },
  argTypes: {
    variant: {
      options: ["underline", "pill"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tabs defaultValue="tab1" {...args}>
      <TabsList variant={args.variant ?? "underline"}>
        <TabsTrigger
          value="tab1"
          variant={args.variant ?? "underline"}
          size={args.size ?? "medium"}
        >
          공지사항
        </TabsTrigger>
        <TabsTrigger
          value="tab2"
          variant={args.variant ?? "underline"}
          size={args.size ?? "medium"}
        >
          자주 묻는 질문
        </TabsTrigger>
        <TabsTrigger
          value="tab3"
          variant={args.variant ?? "underline"}
          size={args.size ?? "medium"}
        >
          문의하기
        </TabsTrigger>
        <TabsIndicator variant={args.variant ?? "underline"} />
      </TabsList>
      <TabsContent value="tab1">공지사항 내용입니다.</TabsContent>
      <TabsContent value="tab2">자주 묻는 질문 내용입니다.</TabsContent>
      <TabsContent value="tab3">문의하기 내용입니다.</TabsContent>
    </Tabs>
  ),
  args: {
    variant: "underline",
    size: "medium",
  },
};

export const Underline: Story = {
  render: () => (
    <Tabs defaultValue="tab1" variant="underline">
      <TabsList variant="underline">
        <TabsTrigger value="tab1" variant="underline">
          전체
        </TabsTrigger>
        <TabsTrigger value="tab2" variant="underline">
          진행중
        </TabsTrigger>
        <TabsTrigger value="tab3" variant="underline">
          완료
        </TabsTrigger>
        <TabsIndicator variant="underline" />
      </TabsList>
      <TabsContent value="tab1">전체 목록을 표시합니다.</TabsContent>
      <TabsContent value="tab2">진행 중인 항목을 표시합니다.</TabsContent>
      <TabsContent value="tab3">완료된 항목을 표시합니다.</TabsContent>
    </Tabs>
  ),
};

export const Pill: Story = {
  render: () => (
    <Tabs defaultValue="tab1" variant="pill">
      <TabsList variant="pill">
        <TabsTrigger value="tab1" variant="pill">
          전체
        </TabsTrigger>
        <TabsTrigger value="tab2" variant="pill">
          진행중
        </TabsTrigger>
        <TabsTrigger value="tab3" variant="pill">
          완료
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">전체 목록을 표시합니다.</TabsContent>
      <TabsContent value="tab2">진행 중인 항목을 표시합니다.</TabsContent>
      <TabsContent value="tab3">완료된 항목을 표시합니다.</TabsContent>
    </Tabs>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {(["small", "medium", "large"] as const).map((size) => (
        <Tabs key={size} defaultValue="tab1" size={size}>
          <TabsList variant="underline">
            <TabsTrigger value="tab1" variant="underline" size={size}>
              탭 1
            </TabsTrigger>
            <TabsTrigger value="tab2" variant="underline" size={size}>
              탭 2
            </TabsTrigger>
            <TabsIndicator variant="underline" />
          </TabsList>
          <TabsContent value="tab1">{size} 탭 콘텐츠입니다.</TabsContent>
          <TabsContent value="tab2">{size} 탭 콘텐츠입니다.</TabsContent>
        </Tabs>
      ))}
    </div>
  ),
};
