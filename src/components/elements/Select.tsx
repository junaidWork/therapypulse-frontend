import React from "react";
import Select, { SingleValue, ActionMeta } from "react-select";
import { cn } from "../../utils/helpers";
import { Option } from "../../utils/types/clients";

interface SearchableSelectProps {
  options: Option[];
  onChange: (
    selectedOption: SingleValue<Option> | null,
    actionMeta: ActionMeta<Option>
  ) => void;
  placeholder?: string;
  value?: Option | null;
  className?: string;
  isSearchable?: boolean;
  customStyles?: any;
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({
  options,
  onChange,
  placeholder = "Select...",
  value,
  className = "",
  isSearchable = true,
  customStyles,
  ...props
}) => {
  return (
    <div className="w-full">
      <Select
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        className={cn("react-select-container outline-none", className)}
        classNamePrefix="react-select"
        isSearchable={isSearchable}
        styles={customStyles}
        {...props}
      />
    </div>
  );
};

export default SearchableSelect;
