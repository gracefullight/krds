import { Top } from "@gracefullight/krds-icons";
import { Stack } from "@mui/material";
import type { MouseEvent } from "react";
import { useCallback } from "react";
import * as S from "#/components/blocks/top-button/top-button.styles";
import type { TopButtonProps } from "#/components/blocks/top-button/top-button.types";

/**
 * TopButton component
 *
 * A floating action button that scrolls the page back to the top when clicked
 */
export default function TopButton({ type = "basic", onClick }: TopButtonProps) {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(event);
      } else {
        // Scroll to top
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    },
    [onClick],
  );

  return (
    <S.TopButtonBase
      disableRipple
      aria-label="위로"
      onClick={handleClick}
      variant="extended"
      $buttonType={type}
    >
      <Stack>
        <Top size={24} />
        {type === "label" && <S.TopButtonLabel>위로</S.TopButtonLabel>}
      </Stack>
    </S.TopButtonBase>
  );
}
