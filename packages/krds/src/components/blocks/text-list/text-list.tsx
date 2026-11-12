import * as S from "#/components/blocks/text-list/text-list.styles";
import type {
  TextListMarker,
  TextListProps,
  TextListVariant,
} from "#/components/blocks/text-list/text-list.types";

const DEFAULT_MARKER: Record<TextListVariant, TextListMarker> = {
  ordered: "decimal",
  unordered: "disc",
  none: "none",
};

/**
 * TextList — KRDS 텍스트 목록
 *
 * 계층 구조가 있는 텍스트 블록을 읽기 쉽게 구성한다.
 * 순서가 중요하지 않으면 순서 없는 목록, 순서/계층이 중요하면 순서 있는 목록을
 * 사용하며, 목록은 3수준 이내로 구성한다.
 */
export default function TextList({
  variant = "unordered",
  items,
  marker,
  ...props
}: TextListProps) {
  const resolvedMarker = marker ?? DEFAULT_MARKER[variant];

  return (
    <S.TextListBase
      component={variant === "ordered" ? "ol" : "ul"}
      $marker={resolvedMarker}
      {...props}
    >
      {items.map((item) => (
        <li key={item.id}>{item.content}</li>
      ))}
    </S.TextListBase>
  );
}
