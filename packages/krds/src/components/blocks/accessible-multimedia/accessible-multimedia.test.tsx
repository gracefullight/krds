import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AccessibleMultimedia from "#/components/blocks/accessible-multimedia/accessible-multimedia";
import { renderWithTheme } from "#/test-utils";

describe("AccessibleMultimedia", () => {
  it("오디오 콘텐츠를 렌더링한다", () => {
    const { container } = renderWithTheme(
      <AccessibleMultimedia kind="audio" src="/audio.mp3" title="안내 방송" />,
    );
    expect(container.querySelector("audio")).toBeInTheDocument();
    expect(container.querySelector("video")).not.toBeInTheDocument();
  });

  it("비디오 콘텐츠를 렌더링한다", () => {
    const { container } = renderWithTheme(
      <AccessibleMultimedia
        kind="video"
        src="/video.mp4"
        title="사용 안내 영상"
      />,
    );
    expect(container.querySelector("video")).toBeInTheDocument();
  });

  it("캡션 트랙을 제공한다", () => {
    const { container } = renderWithTheme(
      <AccessibleMultimedia
        kind="multimedia"
        src="/video.mp4"
        title="사용 안내 영상"
        captionsSrc="/captions.vtt"
      />,
    );
    const track = container.querySelector("track");
    expect(track).toHaveAttribute("kind", "captions");
    expect(track).toHaveAttribute("srcLang", "ko");
  });

  it("설명적 원고와 화면 해설을 제공한다", () => {
    renderWithTheme(
      <AccessibleMultimedia
        kind="video"
        src="/video.mp4"
        title="사용 안내 영상"
        transcript="원고 내용"
        description="화면 설명"
      />,
    );
    expect(screen.getByText("설명적 원고")).toBeInTheDocument();
    expect(screen.getByText("화면 해설")).toBeInTheDocument();
    expect(screen.getByText("원고 내용")).toBeInTheDocument();
    expect(screen.getByText("화면 설명")).toBeInTheDocument();
  });
});
