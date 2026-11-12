import { Close, PopoverHelp, PopoverInfo } from "@gracefullight/krds-icons";
import { Popover } from "@mui/material";
import { useId, useState } from "react";
import * as S from "#/components/blocks/contextual-help/contextual-help.styles";
import type { ContextualHelpProps } from "#/components/blocks/contextual-help/contextual-help.types";

/**
 * ContextualHelp — KRDS 맥락적 도움말
 *
 * 정보(i)/도움(?) 아이콘 버튼을 통해 사용자가 요청한 경우에만 팝오버로
 * 부가 정보를 제공한다. 필수 정보는 본문에 제공하고, 도움말 내부 링크는
 * 새 창으로 실행한다. 팝오버 중첩/모달 실행은 금지한다.
 */
export default function ContextualHelp({
  variant = "info",
  title,
  children,
  triggerLabel = "도움말",
  ...props
}: ContextualHelpProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const titleId = useId();
  const open = anchorEl !== null;
  const Icon = variant === "info" ? PopoverInfo : PopoverHelp;

  return (
    <>
      <S.ContextualHelpTrigger
        aria-label={triggerLabel}
        aria-expanded={open}
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        <Icon size={20} />
      </S.ContextualHelpTrigger>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        slotProps={{ paper: { sx: { overflow: "visible" } } }}
        {...props}
      >
        <S.ContextualHelpContainer
          role="dialog"
          aria-labelledby={title ? titleId : undefined}
        >
          <S.ContextualHelpHeader>
            {title && (
              <S.ContextualHelpTitle id={titleId}>
                {title}
              </S.ContextualHelpTitle>
            )}
            <S.ContextualHelpClose
              aria-label="도움말 닫기"
              onClick={() => setAnchorEl(null)}
            >
              <Close size={16} />
            </S.ContextualHelpClose>
          </S.ContextualHelpHeader>

          <S.ContextualHelpBody>{children}</S.ContextualHelpBody>
        </S.ContextualHelpContainer>
      </Popover>
    </>
  );
}
