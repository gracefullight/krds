import type { ChipGroupProps } from "#/components/blocks/chip/chip.types";

import { useCallback } from "react";
import * as S from "#/components/blocks/chip/chip.styles";

export default function ChipGroup({
  children,
  value,
  onChange,
  multiple = false,
  ...props
}: ChipGroupProps) {
  // * Helper function to convert value to array
  const getValueArray = useCallback(
    (currentValue: ChipGroupProps["value"]): string[] => {
      if (Array.isArray(currentValue)) return currentValue;
      if (currentValue) return [currentValue];
      return [];
    },
    [],
  );

  const handleMultipleSelection = useCallback(
    (chipValue: string, currentValue: ChipGroupProps["value"]) => {
      const valueArray = getValueArray(currentValue);
      return valueArray.includes(chipValue)
        ? valueArray.filter((v) => v !== chipValue)
        : [...valueArray, chipValue];
    },
    [getValueArray],
  );

  const handleSingleSelection = useCallback(
    (chipValue: string, currentValue: ChipGroupProps["value"]) => {
      return chipValue === currentValue ? "" : chipValue;
    },
    [],
  );

  const handleChipClick = useCallback(
    (chipValue: string) => {
      if (!onChange) return;

      const newValue = multiple
        ? handleMultipleSelection(chipValue, value)
        : handleSingleSelection(chipValue, value);

      onChange(newValue);
    },
    [multiple, onChange, value, handleMultipleSelection, handleSingleSelection],
  );

  const isSelected = useCallback(
    (chipValue: string) => {
      if (multiple) {
        const valueArray = Array.isArray(value) ? value : [];
        return valueArray.includes(chipValue);
      }

      return value === chipValue;
    },
    [multiple, value],
  );

  return (
    <S.ChipGroup {...props}>
      {Array.isArray(children)
        ? children.map((child, index) => {
            const chipValue = child.props.value || `${index}`;
            return {
              ...child,
              props: {
                ...child.props,
                key: child.key || chipValue,
                onClick: () => handleChipClick(chipValue),
                selected: isSelected(chipValue),
                multiple,
              },
            };
          })
        : {
            ...children,
            props: {
              ...children.props,
              key: children.props.value || "0",
              onClick: () => handleChipClick(children.props.value || "0"),
              selected: isSelected(children.props.value || "0"),
              multiple,
            },
          }}
    </S.ChipGroup>
  );
}
