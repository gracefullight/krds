import * as S from "#/components/blocks/masthead/masthead.styles";

export default function Masthead() {
  return (
    <S.MastheadContainer>
      <S.FlagKr />
      <S.MastheadText>
        이 누리집은 대한민국 공식 전자정부 누리집입니다.
      </S.MastheadText>
    </S.MastheadContainer>
  );
}
