import { useId } from "react";
import * as S from "#/components/blocks/identifier/identifier.styles";
import type { IdentifierProps } from "#/components/blocks/identifier/identifier.types";

/**
 * Identifier — KRDS 운영기관 식별자
 *
 * 서비스 운영 주체의 상위 기관을 안내하여 신뢰성을 제공한다.
 * 구조적으로 푸터 내부의 마지막 구획(section)으로 포함시키며,
 * 서비스 로고가 아닌 운영기관 로고를 사용한다.
 */
export default function Identifier({
  logo,
  logoSrc,
  logoAlt = "",
  name,
  address,
  phone,
  links,
  ...props
}: IdentifierProps) {
  const headingId = useId();
  const hasLogo = logo != null || logoSrc != null;

  return (
    <S.IdentifierSection
      component="section"
      aria-labelledby={headingId}
      {...props}
    >
      {hasLogo && (
        <S.IdentifierLogo>
          {logo ?? <img src={logoSrc} alt={logoAlt} />}
        </S.IdentifierLogo>
      )}

      <S.IdentifierBody>
        <S.IdentifierText id={headingId}>
          이 누리집은 {name}에서 운영하는 누리집입니다.
        </S.IdentifierText>

        {(address || phone) && (
          <S.IdentifierMeta>
            {address}
            {address && phone && " · "}
            {phone && `대표전화 ${phone}`}
          </S.IdentifierMeta>
        )}

        {links && links.length > 0 && (
          <S.IdentifierLinks>
            {links.map((link) => (
              <S.IdentifierLink
                key={link.href}
                href={link.href}
                {...(link.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {link.label}
              </S.IdentifierLink>
            ))}
          </S.IdentifierLinks>
        )}
      </S.IdentifierBody>
    </S.IdentifierSection>
  );
}
