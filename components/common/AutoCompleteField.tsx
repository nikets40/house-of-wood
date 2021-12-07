import { useEffect, useMemo, useState } from "react";
import { AutoCompleteFieldProps } from "../../interfaces";

const AutoCompleteField: React.FC<AutoCompleteFieldProps> = (props) => {
  console.log("rerendered");

  const [showOptions, setShowOptions] = useState(false);
  const getFilteredOptions = () => {
    const newOptions = props.options
      .filter((option) =>
        option.toLowerCase().includes(props.value.toLowerCase())
      )
      .slice(0, 5);

    return newOptions;
  };

  return (
    <label className="relative">
      {props.label}
      <input
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
      {showOptions && (
        <div
          className={`absolute mt-2 ${
            props.value ? "block" : "hidden"
          } bg-white w-full rounded-lg shadow-xl`}
        >
          {props.options
            .filter((option) =>
              option.toLowerCase().includes(props.value.toLowerCase())
            )
            .slice(0, 5)
            .map((option, index) => (
              <div
                onClick={() => {
                  props.onChange(option);
                  setShowOptions(false);
                }}
                className="text-lg py-1 px-4 first:mt-0 last:mb-1 hover:bg-primary rounded-lg cursor-pointer hover:text-white"
                key={option + index}
              >
                {option}
              </div>
            ))}
        </div>
      )}
    </label>
  );
};

export default AutoCompleteField;
