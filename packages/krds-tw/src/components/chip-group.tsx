import {
  Children,
  type ComponentProps,
  type ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useState,
} from "react";
import type { ChipProps } from "#/components/chip";
import { cn } from "#/utils/cn";

interface ChipGroupProps extends Omit<ComponentProps<"fieldset">, "onChange"> {
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  multiple?: boolean;
}

const ChipGroup = forwardRef<HTMLFieldSetElement, ChipGroupProps>(
  ({ className, value, onChange, multiple = false, children, ...props }, ref) => {
    const [internalValue, setInternalValue] = useState<string | string[]>(
      multiple ? [] : "",
    );

    const currentValue = value ?? internalValue;

    const handleChipClick = useCallback(
      (chipValue: string) => {
        let newValue: string | string[];

        if (multiple) {
          const arr = Array.isArray(currentValue) ? currentValue : [];
          newValue = arr.includes(chipValue)
            ? arr.filter((v) => v !== chipValue)
            : [...arr, chipValue];
        } else {
          newValue = currentValue === chipValue ? "" : chipValue;
        }

        if (value === undefined) {
          setInternalValue(newValue);
        }
        onChange?.(newValue);
      },
      [currentValue, multiple, onChange, value],
    );

    return (
      <fieldset
        ref={ref}
        className={cn("flex flex-wrap gap-1 border-none p-0", className)}
        {...props}
      >
        {Children.map(children, (child) => {
          if (!isValidElement(child)) return child;
          const chipChild = child as ReactElement<ChipProps>;
          const chipValue = chipChild.props.value ?? "";
          const isSelected = multiple
            ? Array.isArray(currentValue) && currentValue.includes(chipValue)
            : currentValue === chipValue;

          return cloneElement(chipChild, {
            selected: isSelected,
            multiple,
            onClick: () => handleChipClick(chipValue),
          });
        })}
      </fieldset>
    );
  },
);

ChipGroup.displayName = "ChipGroup";
export { ChipGroup, type ChipGroupProps };
