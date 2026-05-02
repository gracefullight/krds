import type { ReactNode } from "react";
import { cn } from "#/utils/cn";

export interface FooterOrganization {
  /** 기관명 */
  name: string;
  /** 주소 */
  address?: string;
  /** 대표 전화 */
  tel?: string;
  /** 팩스 */
  fax?: string;
  /** 운영 시간 */
  hours?: string;
}

export interface FooterLink {
  /** 링크 텍스트 */
  label: string;
  /** 링크 URL */
  href: string;
  /** 새 탭 열기 여부 */
  external?: boolean;
  /** 굵게 표시 여부 (중요 링크) */
  bold?: boolean;
}

export interface FooterSocial {
  /** 소셜 미디어 이름 */
  label: string;
  /** 링크 URL */
  href: string;
  /** 아이콘 노드 */
  icon: ReactNode;
}

export interface FooterSlots {
  /** 로고 슬롯 */
  logo?: ReactNode;
  /** 인증 마크 슬롯 (e.g. WA 인증, 개인정보 인증 등) */
  certifications?: ReactNode;
  /** 푸터 하단 추가 콘텐츠 슬롯 */
  bottom?: ReactNode;
}

export interface FooterProps {
  /** 운영기관 정보 */
  organization: FooterOrganization;
  /** 관련 링크 목록 */
  links?: FooterLink[];
  /** 소셜 미디어 링크 (선택) */
  socials?: FooterSocial[];
  /** 저작권 문구 */
  copyright?: string;
  /** 커스텀 콘텐츠 슬롯 */
  slots?: FooterSlots;
  /** 추가 클래스 */
  className?: string;
}

// ─── 내부 서브컴포넌트 ───────────────────────────────────────────────────────

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
    <div
      className={cn(
        "flex flex-row items-start justify-between gap-10 border-b border-divider-gray-dark pb-6",
        "max-md:flex-col max-md:gap-4 max-md:pb-4",
      )}
    >
      <div className="flex min-w-40 flex-col items-start gap-2">
        {logo}
        <span className="text-heading-xs text-fg-bolder-inverse max-md:text-heading-xs">
          {organization.name}
        </span>
      </div>

      {links && links.length > 0 && (
        <nav
          aria-label="푸터 링크"
          className={cn(
            "m-0 flex list-none flex-row flex-wrap items-center gap-0 p-0",
            "max-md:flex-col max-md:items-start",
          )}
        >
          {links.map((link, index) => (
            <span
              key={link.href}
              className={cn(
                "flex items-center",
                index > 0 &&
                  "before:inline-block before:px-3 before:text-fg-subtle-inverse before:content-['|'] max-md:before:hidden",
              )}
            >
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                aria-label={
                  link.external ? `${link.label} (새 창에서 열림)` : undefined
                }
                className={cn(
                  "cursor-pointer text-body-sm text-fg-basic-inverse no-underline transition-colors",
                  "hover:text-fg-bolder-inverse hover:underline",
                  "focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-primary",
                  link.bold && "font-bold",
                  "max-md:py-1.5 max-md:text-body-sm",
                )}
              >
                {link.label}
              </a>
            </span>
          ))}
        </nav>
      )}
    </div>
  );
}

interface FooterInfoSectionProps {
  organization: FooterOrganization;
}

function FooterInfoSection({ organization }: FooterInfoSectionProps) {
  return (
    <div className={cn("flex flex-col gap-1 py-6", "max-md:py-4")}>
      <div
        className={cn(
          "flex flex-row flex-wrap items-center gap-4",
          "max-md:flex-col max-md:items-start max-md:gap-1",
        )}
      >
        {organization.address && (
          <span className="text-body-sm text-fg-subtle-inverse max-md:text-body-xs">
            <span aria-hidden="true">주소 </span>
            {organization.address}
          </span>
        )}
        {organization.tel && (
          <span className="text-body-sm text-fg-subtle-inverse max-md:text-body-xs">
            <span aria-hidden="true">전화 </span>
            <a
              href={`tel:${organization.tel.replace(/[^0-9+]/g, "")}`}
              className="text-inherit no-underline"
            >
              {organization.tel}
            </a>
          </span>
        )}
        {organization.fax && (
          <span className="text-body-sm text-fg-subtle-inverse max-md:text-body-xs">
            <span aria-hidden="true">팩스 </span>
            {organization.fax}
          </span>
        )}
        {organization.hours && (
          <span className="text-body-sm text-fg-subtle-inverse max-md:text-body-xs">
            <span aria-hidden="true">운영시간 </span>
            {organization.hours}
          </span>
        )}
      </div>
    </div>
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
    <div
      className={cn(
        "flex flex-row flex-wrap items-center justify-between gap-4 border-t border-divider-gray-dark pt-6",
        "max-md:flex-col max-md:items-start max-md:gap-3 max-md:pt-4",
      )}
    >
      <p className="text-body-xs text-fg-subtle-inverse">
        {copyright ?? `Copyright © ${organization.name}. All rights reserved.`}
      </p>

      {((socials && socials.length > 0) || certifications) && (
        <nav
          aria-label="소셜 미디어 링크"
          className="m-0 flex list-none flex-row items-center gap-3 p-0"
        >
          {socials &&
            socials.length > 0 &&
            socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.label} (새 창에서 열림)`}
                className={cn(
                  "inline-flex items-center justify-center rounded text-fg-icon-inverse no-underline transition-colors",
                  "[&_svg]:h-6 [&_svg]:w-6",
                  "hover:text-fg-bolder-inverse",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-primary",
                  "max-md:[&_svg]:h-5 max-md:[&_svg]:w-5",
                )}
              >
                {social.icon}
              </a>
            ))}
          {certifications}
        </nav>
      )}

      {bottom}
    </div>
  );
}

// ─── 공개 컴포넌트 ────────────────────────────────────────────────────────────

export function Footer({
  organization,
  links,
  socials,
  copyright,
  slots,
  className,
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
    <footer
      className={cn(
        "box-border w-full bg-surface-inverse",
        "px-20 py-10",
        "max-md:px-4 max-md:py-6",
        className,
      )}
    >
      {hasTopSection && (
        <FooterTopSection
          organization={organization}
          links={links}
          logo={slots?.logo}
        />
      )}

      {hasInfoSection && <FooterInfoSection organization={organization} />}

      {!(hasTopSection || hasInfoSection) && (
        <div className={cn("flex flex-col gap-1 py-6", "max-md:py-4")}>
          <span className="text-heading-xs text-fg-bolder-inverse">
            {organization.name}
          </span>
        </div>
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
    </footer>
  );
}
