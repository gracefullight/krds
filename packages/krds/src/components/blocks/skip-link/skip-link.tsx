import type { SkipLinkProps } from "#/components/blocks/skip-link/skip-link.types";

import { noop } from "es-toolkit";
import * as S from "#/components/blocks/skip-link/skip-link.styles";

export default function SkipLink({
  text = "본문 바로가기",
  onClick = noop,
}: SkipLinkProps) {
  return <S.SkipLink onClick={onClick}>{text}</S.SkipLink>;
}
