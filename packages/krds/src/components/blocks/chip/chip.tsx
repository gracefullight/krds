import type { ChipProps } from "#/components/blocks/chip/chip.types";

import CheckIcon from "@mui/icons-material/Check";
import * as S from "#/components/blocks/chip/chip.styles";

export default function Chip({
  size = "medium",
  selected = false,
  disabled = false,
  multiple = false,
  children,
  onClick,
  value,
  ...otherProps
}: ChipProps) {
  const chipStyleProps = { size, selected, multiple };
  const buttonProps = { disabled, onClick };

  let iconSize = 16;
  if (size === "small") {
    iconSize = 12;
  } else if (size === "large") {
    iconSize = 20;
  }

  return (
    <S.ChipBase
      disableRipple
      {...chipStyleProps}
      {...buttonProps}
      {...otherProps}
    >
      {(selected || multiple) && (
        <CheckIcon
          sx={{
            width: `${iconSize}px`,
            height: `${iconSize}px`,
            marginRight: "4px",
          }}
        />
      )}
      {children}
    </S.ChipBase>
  );
}
