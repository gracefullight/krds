import { useEffect, useRef, useState } from "react";
import * as S from "#/components/blocks/in-page-navigation/in-page-navigation.styles";
import type { InPageNavigationProps } from "#/components/blocks/in-page-navigation/in-page-navigation.types";

export default function InPageNavigation({
  items,
  activeId: controlledActiveId,
  "aria-label": ariaLabel = "콘텐츠 내 탐색",
  sticky = false,
  stickyTop = 0,
}: InPageNavigationProps) {
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
    <S.InPageNavigationRoot
      aria-label={ariaLabel}
      sticky={sticky}
      stickyTop={stickyTop}
    >
      <S.InPageNavigationList>
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <S.InPageNavigationItem key={item.id}>
              <S.InPageNavigationLink
                href={item.href}
                active={isActive}
                aria-current={isActive ? "true" : undefined}
              >
                {item.label}
              </S.InPageNavigationLink>
            </S.InPageNavigationItem>
          );
        })}
      </S.InPageNavigationList>
    </S.InPageNavigationRoot>
  );
}
