import * as S from "#/components/blocks/visually-hidden/visually-hidden.styles";
import type { VisuallyHiddenProps } from "#/components/blocks/visually-hidden/visually-hidden.types";

/**
 * VisuallyHidden — KRDS 숨긴 콘텐츠
 *
 * 화면에는 보이지 않지만 스크린 리더는 읽을 수 있는 콘텐츠를 제공한다.
 * 대화형 요소를 숨길 때는 대체 요소와 같은 크기를 유지하고 opacity/z-index로
 * 숨긴 뒤 포커스 링을 별도로 제공해야 한다.
 */
export default function VisuallyHidden({
  component = "span",
  children,
  ...props
}: VisuallyHiddenProps) {
  return (
    <S.VisuallyHiddenBase component={component} {...props}>
      {children}
    </S.VisuallyHiddenBase>
  );
}
