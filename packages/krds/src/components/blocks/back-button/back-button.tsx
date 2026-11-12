import { ArrowLeft } from "@gracefullight/krds-icons";
import { useCallback } from "react";
import * as S from "#/components/blocks/back-button/back-button.styles";
import type { BackButtonProps } from "#/components/blocks/back-button/back-button.types";

/**
 * BackButton — KRDS 뒤로가기
 *
 * 상단바 좌측에 배치하여 직전 화면(또는 상위 단계)으로 이동한다.
 * 닫기/취소 버튼과 역할을 혼용하지 않으며, 작성 중인 내용이 유실될 수 있는
 * 화면에서는 onBack에서 사전 경고를 제공해야 한다.
 */
export default function BackButton({
  onBack,
  title,
  ...props
}: BackButtonProps) {
  const handleBack = useCallback(() => {
    if (onBack) {
      onBack();
    } else {
      window.history.back();
    }
  }, [onBack]);

  const button = (
    <S.BackButtonBase aria-label="뒤로가기" onClick={handleBack} {...props}>
      <ArrowLeft size={24} />
    </S.BackButtonBase>
  );

  if (title === undefined) {
    return button;
  }

  return (
    <S.BackButtonRow>
      {button}
      <S.BackButtonTitle>{title}</S.BackButtonTitle>
    </S.BackButtonRow>
  );
}
