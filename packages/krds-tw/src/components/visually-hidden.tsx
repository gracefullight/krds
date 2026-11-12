import { type ComponentProps, forwardRef } from "react";
import { cn } from "#/utils/cn";

interface VisuallyHiddenProps extends ComponentProps<"span"> {}

/**
 * VisuallyHidden — KRDS 숨긴 콘텐츠
 *
 * 화면에는 보이지 않지만 스크린 리더는 읽을 수 있는 콘텐츠를 제공한다.
 * `display: none` / `visibility: hidden` 대신 전용 숨김 스타일(sr-only)을 사용하며,
 * width/height 0, font-size 0 등 스크린 리더가 정보를 무시할 수 있는 스타일은 사용하지 않는다.
 *
 * 대화형 요소를 숨길 때는 이 컴포넌트 대신 대체 요소와 같은 크기를 유지하고
 * opacity/z-index로 숨긴 뒤 포커스 링을 별도로 제공해야 한다.
 */
const VisuallyHidden = forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ className, children, ...props }, ref) => (
    <span ref={ref} className={cn("sr-only", className)} {...props}>
      {children}
    </span>
  ),
);

VisuallyHidden.displayName = "VisuallyHidden";

export { VisuallyHidden, type VisuallyHiddenProps };
