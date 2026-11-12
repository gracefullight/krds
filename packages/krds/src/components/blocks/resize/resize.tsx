import { ViewMode } from "@gracefullight/krds-icons";
import { Menu, MenuItem } from "@mui/material";
import { useCallback, useState } from "react";
import * as S from "#/components/blocks/resize/resize.styles";
import type {
  ResizeOption,
  ResizeProps,
} from "#/components/blocks/resize/resize.types";

const DEFAULT_OPTIONS: ResizeOption[] = [
  { value: 90, label: "작게" },
  { value: 100, label: "보통" },
  { value: 110, label: "조금 크게" },
  { value: 130, label: "크게" },
  { value: 150, label: "가장 크게" },
];

/**
 * Resize — KRDS 화면 크기 조정
 *
 * 텍스트를 포함하여 화면에 표시되는 정보를 확대/축소한다.
 * 옵션은 설명적인 레이블과 함께 5개 이내로 제공한다.
 * 확대 시 콘텐츠가 가려지거나 기능이 손실되지 않도록 반응형 레이아웃을 사용한다.
 */
export default function Resize({
  value = 100,
  onChange,
  options = DEFAULT_OPTIONS,
  applyToRoot = true,
  className,
}: ResizeProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = anchorEl !== null;

  const current =
    options.find((option) => option.value === value) ?? options[0];

  const handleSelect = useCallback(
    (next: number) => {
      setAnchorEl(null);
      if (applyToRoot) {
        document.documentElement.style.fontSize = `${next}%`;
      }
      onChange?.(next);
    },
    [applyToRoot, onChange],
  );

  return (
    <>
      <S.ResizeTrigger
        className={className}
        aria-label="화면 크기 조정"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={(event) => setAnchorEl(event.currentTarget)}
        disableRipple
      >
        <ViewMode size={16} />
        {current?.label ?? `${value}%`}
      </S.ResizeTrigger>

      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === value}
            onClick={() => handleSelect(option.value)}
          >
            {option.label} ({option.value}%)
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
