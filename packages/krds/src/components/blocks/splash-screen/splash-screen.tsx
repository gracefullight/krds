import type { SplashScreenProps } from "#/components/blocks/splash-screen/splash-screen.types";

import { LinearProgress } from "@mui/material";
import * as S from "#/components/blocks/splash-screen/splash-screen.styles";

export default function SplashScreen({
  slogan = "더 나은 내일을 함께합니다.",
  loadingText = "잠시만 기다려 주세요.",
}: SplashScreenProps) {
  return (
    <S.SplashContainer>
      <S.CenterContent>
        <S.Logo />
        <S.Slogan>{slogan}</S.Slogan>
      </S.CenterContent>
      <S.BottomContainer>
        <LinearProgress
          style={{
            width: "200px",
          }}
        />
        <S.LoadingText>{loadingText}</S.LoadingText>
      </S.BottomContainer>
    </S.SplashContainer>
  );
}
