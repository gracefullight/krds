import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AccessibleMultimedia } from "#/components/accessible-multimedia";

describe("AccessibleMultimedia", () => {
  it("오디오 콘텐츠를 렌더링한다", () => {
    const { container } = render(
      <AccessibleMultimedia kind="audio" src="/audio.mp3" title="안내 방송" />,
    );
    expect(container.querySelector("audio")).toBeInTheDocument();
    expect(container.querySelector("video")).not.toBeInTheDocument();
  });

  it("비디오 콘텐츠를 렌더링한다", () => {
    const { container } = render(
      <AccessibleMultimedia
        kind="video"
        src="/video.mp4"
        title="사용 안내 영상"
      />,
    );
    expect(container.querySelector("video")).toBeInTheDocument();
  });

  it("캡션 트랙을 제공한다", () => {
    const { container } = render(
      <AccessibleMultimedia
        kind="multimedia"
        src="/video.mp4"
        title="사용 안내 영상"
        captionsSrc="/captions.vtt"
      />,
    );
    const track = container.querySelector("track");
    expect(track).toHaveAttribute("kind", "captions");
    expect(track).toHaveAttribute("src", "/captions.vtt");
    expect(track).toHaveAttribute("srcLang", "ko");
  });

  it("설명적 원고를 접기/펼치기 영역으로 제공한다", () => {
    render(
      <AccessibleMultimedia
        kind="audio"
        src="/audio.mp3"
        title="안내 방송"
        transcript="안내 방송 원고 내용"
      />,
    );
    const summary = screen.getByText("설명적 원고");
    expect(summary.closest("details")).not.toHaveAttribute("open");
    expect(screen.getByText("안내 방송 원고 내용")).toBeInTheDocument();
  });

  it("화면 해설을 제공한다", () => {
    render(
      <AccessibleMultimedia
        kind="video"
        src="/video.mp4"
        title="사용 안내 영상"
        description="화면에 신청 버튼이 표시됩니다."
      />,
    );
    expect(screen.getByText("화면 해설")).toBeInTheDocument();
    expect(
      screen.getByText("화면에 신청 버튼이 표시됩니다."),
    ).toBeInTheDocument();
  });
});
