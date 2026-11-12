import { ExpandMore } from "@gracefullight/krds-icons";
import * as S from "#/components/blocks/disclosure/disclosure.styles";
import type { DisclosureProps } from "#/components/blocks/disclosure/disclosure.types";

/**
 * Disclosure — KRDS 디스클로저
 *
 * 부가 정보를 기본 축소 상태로 제공했다가 사용자 요청 시 확장한다.
 * 아코디언/탭보다 눈에 덜 띄어야 하며, 오류 메시지나 중요 정보 전달에는
 * 사용하지 않는다. 하나의 섹션에 하나의 디스클로저만 사용한다.
 */
export default function Disclosure({
  summary,
  children,
  ...props
}: DisclosureProps) {
  return (
    <S.DisclosureBase disableGutters {...props}>
      <S.DisclosureSummary expandIcon={<ExpandMore size={20} />}>
        {summary}
      </S.DisclosureSummary>
      <S.DisclosureDetails>{children}</S.DisclosureDetails>
    </S.DisclosureBase>
  );
}
