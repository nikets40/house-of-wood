import { useState } from "react";

const btnClass: string =
  "border-2 px-4 border-primary bg-white text-primary py-1.5 rounded hover:bg-primary hover:text-white transition-all ease-in-out";

interface ControlPanelProps {
  onDelete: () => void;
}
const ControlPanel: React.FC<ControlPanelProps> = ({ onDelete }) => {
  const BulkActions: React.FC = () => {
    const options = ["Bulk Actions", "Delete"];
    const [selected, setSelected] = useState(options[0]);
    return (
      <>
        <select
          className=" w-[120px] mt-0"
          onChange={(e) => {
            setSelected(e.target.value);
          }}
        >
          {options.map((option, index) => (
            <option key={option + index}>{option}</option>
          ))}
        </select>
        <button
          onClick={() => {
            if (selected === options[1]) {
              console.log("delete");
              onDelete();
            }
          }}
          className={btnClass}
        >
          Apply
        </button>
      </>
    );
  };

  const SelectCategory: React.FC = () => {
    const categories = ["Filter by Category", "Shirts", "Jeans", "Jackets"];

    return (
      <select className="w-[200px] mt-0">
        {categories.map((category, index) => (
          <option key={category + index}>{category}</option>
        ))}
      </select>
    );
  };

  const FilterByStock: React.FC = () => {
    const options = ["Filter by Stock Status", "In Stock", "Out of Stock"];
    return (
      <select className="w-[180px] mt-0">
        {options.map((option, index) => (
          <option key={option + index}>{option}</option>
        ))}
      </select>
    );
  };
  return (
    <div className="my-4">
      {/* bulk actions on left side */}
      <div className="flex gap-4 items-center">
        <BulkActions />
        <SelectCategory />
        <FilterByStock />
        <button className={btnClass}>Filter</button>
      </div>
      {/* Search bar on right side */}
      <div></div>
    </div>
  );
};

export default ControlPanel;
