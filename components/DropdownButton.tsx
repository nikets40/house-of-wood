import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

interface DropdownButtonProps {
  title: string;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  children,
  ...props
}) => {
  const [title, setTitle] = useState(props.title);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <button
        className="bg-black rounded-md py-3 pl-5 pr-2.5 text-white flex"
        onClick={(e) => {
          setIsOpen(!isOpen);
        }}
      >
        {title}
        <ChevronDownIcon className="w-6 h-6 ml-2" />
      </button>
      <div className={`${isOpen ? "visible" : "invisible"}`}>
        <DropdownCard />
      </div>
    </div>
  );
};

export default DropdownButton;

const DropdownCard: React.FC<{}> = () => {
  const data = ["default", "popular", "rating","newness", "low price", "high price"];
  const [selected, setSelected] = useState(data[0]);
  return (
    <div className="shadow h-auto w-56 absolute z-10 rounded">
      <ul className="">
        {data.map((item, index) => (
          <label
          onClick={() => {setSelected(item)}}
            className={`${selected==item?"font-semibold":""} group hover:font-semibold p-3 cursor-pointer capitalize flex justify-between items-center text-gray-700 bg-white first:rounded-t-lg last:rounded-b-lg shadow-xl`}
            key={index}
          >
            {item}
            <div className={`group-hover:border-0 group-hover:bg-primary w-4 h-4 border border-gray-400 rounded-sm ${item==selected?"border-0 bg-primary":""}`} />
          </label>
        ))}
      </ul>
    </div>
  );
};
