import type { MouseEvent } from "react";
import type { TopButtonProps } from "#/components/blocks/top-button/top-button.types";

import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import { Stack } from "@mui/material";
import { useCallback } from "react";
import * as S from "#/components/blocks/top-button/top-button.styles";
import { getPalette } from "#/design-tokens/palettes";

/**
 * TopButton component
 *
 * A floating action button that scrolls the page back to the top when clicked
 */
export default function TopButton({
  showLabel = false,
  onClick,
}: TopButtonProps) {
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
      showLabel={showLabel}
      aria-label="위로"
      onClick={handleClick}
      variant="extended"
    >
      <Stack>
        <VerticalAlignTopIcon
          sx={{ color: getPalette("icon.gray"), width: "24px", height: "24px" }}
        />
        {showLabel && <S.TopButtonLabel>위로</S.TopButtonLabel>}
      </Stack>
    </S.TopButtonBase>
  );
}
