const btnClass: string = "border-2 px-4 border-primary bg-white text-primary py-1.5 rounded hover:bg-primary hover:text-white transition-all ease-in-out";

const ControlPanel: React.FC = () => {
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

const BulkActions: React.FC = () => {
  const options = ["Bulk Actions", "Delete"];
  return (
    <>
      <select className=" w-[120px] mt-0">
        {options.map((option) => (
          <option>{option}</option>
        ))}
      </select>
      <button className={btnClass}>Apply</button>
    </>
  );
};

const SelectCategory: React.FC = () => {
  const categories = ["Filter by Category", "Shirts", "Jeans", "Jackets"];

  return (
    <select className="w-[200px] mt-0">
      {categories.map((category) => (
        <option>{category}</option>
      ))}
    </select>
  );
};

const FilterByStock: React.FC = () => {
  const options = ["Filter by Stock Status", "In Stock", "Out of Stock"];
  return (
    <select className="w-[180px] mt-0">
      {options.map((option) => (
        <option>{option}</option>
      ))}
    </select>
  );
};
