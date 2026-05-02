"use client";

import {
  type ComponentProps,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "#/utils/cn";

export interface InPageNavigationItem {
  /** 섹션의 고유 식별자 (IntersectionObserver 타겟 id와 일치해야 함) */
  id: string;
  /** 탐색 링크에 표시되는 레이블 */
  label: string;
  /** 앵커 href (예: "#section-id") */
  href: string;
}

export interface InPageNavigationProps
  extends Omit<ComponentProps<"nav">, "aria-label"> {
  /** 탐색 항목 목록 */
  items: InPageNavigationItem[];
  /** 현재 활성 섹션 id (controlled) */
  activeId?: string;
  /** nav 요소의 aria-label */
  "aria-label"?: string;
  /** sticky 포지셔닝 활성화 여부 */
  sticky?: boolean;
  /** sticky 시 상단 오프셋(px) */
  stickyTop?: number;
}

const InPageNavigation = forwardRef<HTMLElement, InPageNavigationProps>(
  (
    {
      items,
      activeId: controlledActiveId,
      "aria-label": ariaLabel = "콘텐츠 내 탐색",
      sticky = false,
      stickyTop = 0,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const [internalActiveId, setInternalActiveId] = useState<string>(
      items[0]?.id ?? "",
    );

    const isControlled = controlledActiveId !== undefined;
    const activeId = isControlled ? controlledActiveId : internalActiveId;

    const observerRef = useRef<IntersectionObserver | null>(null);
    const visibleSectionsRef = useRef<Set<string>>(new Set());

    useEffect(() => {
      if (isControlled) return;

      const sectionIds = items.map((item) => item.id);

      observerRef.current = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const id = entry.target.id;
            if (entry.isIntersecting) {
              visibleSectionsRef.current.add(id);
            } else {
              visibleSectionsRef.current.delete(id);
            }
          }

          // 현재 보이는 섹션 중 items 순서상 가장 앞에 있는 것을 활성화
          const firstVisible = sectionIds.find((id) =>
            visibleSectionsRef.current.has(id),
          );
          if (firstVisible !== undefined) {
            setInternalActiveId(firstVisible);
          }
        },
        {
          rootMargin: "0px 0px -60% 0px",
          threshold: 0,
        },
      );

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          observerRef.current.observe(el);
        }
      }

      return () => {
        observerRef.current?.disconnect();
      };
    }, [items, isControlled]);

    return (
      <nav
        ref={ref}
        aria-label={ariaLabel}
        className={cn(
          "bg-surface-white border-l-2 border-stroke-gray",
          sticky && "sticky",
          className,
        )}
        style={sticky ? { top: stickyTop, ...style } : style}
        {...props}
      >
        <ol className="m-0 list-none p-0">
          {items.map((item) => {
            const isActive = item.id === activeId;
            return (
              <li key={item.id} className="flex">
                <a
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "text-body-sm -ml-0.5 block w-full border-l-2 px-4 py-2 no-underline transition-[color,border-color] duration-150 ease-in-out",
                    "hover:bg-surface-gray-subtler hover:text-fg-basic",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stroke-primary",
                    isActive
                      ? "border-stroke-primary text-fg-primary font-semibold"
                      : "border-transparent text-fg-subtle font-normal",
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    );
  },
);

InPageNavigation.displayName = "InPageNavigation";

export { InPageNavigation };
