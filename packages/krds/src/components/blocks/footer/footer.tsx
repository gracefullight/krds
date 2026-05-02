import type {
  FooterLink,
  FooterOrganization,
  FooterProps,
  FooterSocial,
} from "#/components/blocks/footer/footer.types";

import type { ReactNode } from "react";
import * as S from "#/components/blocks/footer/footer.styles";

// ─── 내부 서브컴포넌트 ────────────────────────────────────────────────────────

interface FooterTopSectionProps {
  organization: FooterOrganization;
  links?: FooterLink[];
  logo?: ReactNode;
}

function FooterTopSection({
  organization,
  links,
  logo,
}: FooterTopSectionProps) {
  return (
    <S.FooterTopRow>
      <S.FooterLogoArea>
        {logo}
        <S.FooterOrgName component="span">{organization.name}</S.FooterOrgName>
      </S.FooterLogoArea>

      {links && links.length > 0 && (
        <S.FooterLinksRow component="nav" aria-label="푸터 링크">
          {links.map((link) => (
            <S.FooterLinkItem key={link.href} component="span">
              <S.FooterLinkAnchor
                href={link.href}
                isBold={link.bold}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                aria-label={
                  link.external ? `${link.label} (새 창에서 열림)` : undefined
                }
              >
                {link.label}
              </S.FooterLinkAnchor>
            </S.FooterLinkItem>
          ))}
        </S.FooterLinksRow>
      )}
    </S.FooterTopRow>
  );
}

interface FooterInfoSectionProps {
  organization: FooterOrganization;
}

function FooterInfoSection({ organization }: FooterInfoSectionProps) {
  return (
    <S.FooterInfoArea>
      <S.FooterInfoRow>
        {organization.address && (
          <S.FooterInfoText component="span">
            <span aria-hidden="true">주소 </span>
            {organization.address}
          </S.FooterInfoText>
        )}
        {organization.tel && (
          <S.FooterInfoText component="span">
            <span aria-hidden="true">전화 </span>
            <a
              href={`tel:${organization.tel.replace(/[^0-9+]/g, "")}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {organization.tel}
            </a>
          </S.FooterInfoText>
        )}
        {organization.fax && (
          <S.FooterInfoText component="span">
            <span aria-hidden="true">팩스 </span>
            {organization.fax}
          </S.FooterInfoText>
        )}
        {organization.hours && (
          <S.FooterInfoText component="span">
            <span aria-hidden="true">운영시간 </span>
            {organization.hours}
          </S.FooterInfoText>
        )}
      </S.FooterInfoRow>
    </S.FooterInfoArea>
  );
}

interface FooterBottomSectionProps {
  organization: FooterOrganization;
  socials?: FooterSocial[];
  copyright?: string;
  certifications?: ReactNode;
  bottom?: ReactNode;
}

function FooterBottomSection({
  organization,
  socials,
  copyright,
  certifications,
  bottom,
}: FooterBottomSectionProps) {
  return (
    <S.FooterBottomRow>
      <S.FooterCopyright component="p">
        {copyright ?? `Copyright © ${organization.name}. All rights reserved.`}
      </S.FooterCopyright>

      <S.FooterSocialsRow component="nav" aria-label="소셜 미디어 링크">
        {socials &&
          socials.length > 0 &&
          socials.map((social) => (
            <S.FooterSocialAnchor
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.label} (새 창에서 열림)`}
            >
              {social.icon}
            </S.FooterSocialAnchor>
          ))}
        {certifications}
      </S.FooterSocialsRow>

      {bottom}
    </S.FooterBottomRow>
  );
}

// ─── 공개 컴포넌트 ────────────────────────────────────────────────────────────

export default function Footer({
  organization,
  links,
  socials,
  copyright,
  slots,
  sx,
}: FooterProps) {
  const hasTopSection = !!slots?.logo || (links && links.length > 0);
  const hasInfoSection =
    !!organization.address ||
    !!organization.tel ||
    !!organization.fax ||
    !!organization.hours;
  const hasBottomSection =
    !!copyright ||
    (socials && socials.length > 0) ||
    !!slots?.certifications ||
    !!slots?.bottom;

  return (
    <S.FooterContainer component="footer" sx={sx}>
      {hasTopSection && (
        <FooterTopSection
          organization={organization}
          links={links}
          logo={slots?.logo}
        />
      )}

      {hasInfoSection && <FooterInfoSection organization={organization} />}

      {!(hasTopSection || hasInfoSection) && (
        <S.FooterInfoArea>
          <S.FooterOrgName component="span">
            {organization.name}
          </S.FooterOrgName>
        </S.FooterInfoArea>
      )}

      {hasBottomSection && (
        <FooterBottomSection
          organization={organization}
          socials={socials}
          copyright={copyright}
          certifications={slots?.certifications}
          bottom={slots?.bottom}
        />
      )}
    </S.FooterContainer>
  );
}
