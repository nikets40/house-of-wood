import { SearchIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  onClose: () => void;
}
const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div
      onKeyPress={(e) => {
        e.key === "Enter" && props.onSearch(searchTerm);
      }}
      className="flex w-full space-x-4 items-end"
    >
      <SearchIcon className="w-6 h-6" />
      <input
        className="outline-none border-b-2 border-black w-full"
        placeholder="Search"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <XIcon
        className="w-6 h-6 cursor-pointer hover:scale-125 active:scale-95"
        onClick={props.onClose}
      />
    </div>
  );
};

export default SearchBar;
