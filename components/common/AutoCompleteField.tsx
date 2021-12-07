import { useEffect, useState } from "react";

export interface AutoCompleteFieldProps {
  label: string;
  placeholder?: string;
  suggestions: string[];
  onValueChange: (value: string) => void;
}
const AutoCompleteField: React.FC<AutoCompleteFieldProps> = ({
  label,
  suggestions,
  placeholder,
  onValueChange,
}) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    onValueChange(input);
  }, [input]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    const unLinked = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(userInput.toLowerCase())
    );

    setInput(userInput);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    setFilteredSuggestions([]);
    setInput(e.currentTarget.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Esc" || e.key === "Escape") {
      setShowSuggestions(false);
    }
    if (e.key === "Enter") {
      setFilteredSuggestions([]);
      setInput(filteredSuggestions[activeSuggestionIndex]);
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
    } else if (e.key === "ArrowUp") {
      if (activeSuggestionIndex === 0) {
        return setActiveSuggestionIndex(filteredSuggestions.length - 1);
      }
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    } else if (e.key === "ArrowDown") {
      if (activeSuggestionIndex === filteredSuggestions.length - 1) {
        return setActiveSuggestionIndex(0);
      }
      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    }
  };

  const SuggestionsList: React.FC = ({}) => {
    return (
      filteredSuggestions && (
        <ul className="absolute z-30 bg-white text-lg w-full shadow-xl rounded">
          {filteredSuggestions.map((suggestion, index) => {
            let className =
              activeSuggestionIndex === index
                ? "suggestion suggestion-active"
                : "suggestion";
            return (
              <li
                className={`${className} hover:suggestion-active`}
                key={suggestion}
                onClick={onClick}
              >
                {suggestion}
              </li>
            );
          })}
        </ul>
      )
    );
  };
  return (
    <label className="relative">
      {label}
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
        placeholder={placeholder}
      />
      {showSuggestions && input && <SuggestionsList />}
    </label>
  );
};

export default AutoCompleteField;
