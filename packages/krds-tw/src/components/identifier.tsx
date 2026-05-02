import { type ComponentProps, type ReactNode, forwardRef, useId } from "react";
import { cn } from "#/utils/cn";

interface IdentifierLink {
  label: string;
  href: string;
  external?: boolean;
}

interface IdentifierProps extends ComponentProps<"section"> {
  /** 기관 로고 (img 요소 또는 ReactNode) */
  logo?: ReactNode;
  /** 기관 로고 이미지 URL (logo ReactNode 미제공 시 사용) */
  logoSrc?: string;
  /** 기관 로고 대체 텍스트 */
  logoAlt?: string;
  /** 운영기관명 */
  name: string;
  /** 기관 주소 */
  address?: string;
  /** 대표 전화번호 */
  phone?: string;
  /** 연락처 링크 목록 (개인정보처리방침, 저작권정책 등) */
  links?: IdentifierLink[];
}

const Identifier = forwardRef<HTMLElement, IdentifierProps>(
  (
    {
      className,
      logo,
      logoSrc,
      logoAlt,
      name,
      address,
      phone,
      links,
      ...props
    },
    ref,
  ) => {
    const headingId = useId();
    const hasLogo = logo != null || logoSrc != null;

    return (
      <section
        ref={ref}
        aria-labelledby={headingId}
        className={cn(
          "bg-canvas-white border-t border-stroke-gray-light",
          "px-6 py-8 md:px-10",
          className,
        )}
        {...props}
      >
        <div className="mx-auto flex max-w-screen-xl flex-col gap-4 md:flex-row md:items-start md:gap-8">
          {/* 로고 영역 */}
          {hasLogo && (
            <div className="shrink-0">
              {logo ?? (
                <img
                  src={logoSrc}
                  alt={logoAlt ?? name}
                  className="h-10 w-auto object-contain"
                />
              )}
            </div>
          )}

          {/* 텍스트 정보 영역 */}
          <div className="flex flex-col gap-2">
            {/* 기관명 */}
            <h2 id={headingId} className="text-body-sm-bold text-fg-bolder">
              {name}
            </h2>

            {/* 주소 / 전화 */}
            {(address != null || phone != null) && (
              <address className="not-italic">
                <dl className="flex flex-wrap gap-x-4 gap-y-1 text-body-xs text-fg-subtle">
                  {address != null && (
                    <div className="flex gap-1">
                      <dt className="sr-only">주소</dt>
                      <dd>{address}</dd>
                    </div>
                  )}
                  {phone != null && (
                    <div className="flex gap-1">
                      <dt className="sr-only">전화</dt>
                      <dd>
                        <a
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className={cn(
                            "transition-colors",
                            "hover:text-fg-basic hover:underline",
                            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
                          )}
                        >
                          {phone}
                        </a>
                      </dd>
                    </div>
                  )}
                </dl>
              </address>
            )}

            {/* 링크 목록 */}
            {links != null && links.length > 0 && (
              <nav aria-label={`${name} 관련 링크`}>
                <ul className="flex flex-wrap gap-x-3 gap-y-1">
                  {links.map((link) => (
                    <li key={link.href} className="flex items-center">
                      <a
                        href={link.href}
                        className={cn(
                          "text-body-xs text-fg-subtle transition-colors",
                          "hover:text-fg-basic hover:underline",
                          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
                        )}
                        {...(link.external && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </section>
    );
  },
);

Identifier.displayName = "Identifier";
export { Identifier, type IdentifierProps, type IdentifierLink };
