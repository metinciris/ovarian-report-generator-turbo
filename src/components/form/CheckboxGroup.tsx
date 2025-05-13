
import React from "react";
import { CheckboxOption } from "@/types";
import { cn } from "@/lib/utils";

interface CheckboxGroupProps {
  options: CheckboxOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  className?: string;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  selectedValues,
  onChange,
  className
}) => {
  const toggleOption = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter(v => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {options.map((option) => (
        <div
          key={option.value}
          onClick={() => toggleOption(option.value)}
          className={cn(
            "px-3 py-2 rounded-md cursor-pointer transition-all duration-200 text-sm font-medium border option-hover",
            selectedValues.includes(option.value)
              ? "option-selected"
              : "border-gray-200"
          )}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
