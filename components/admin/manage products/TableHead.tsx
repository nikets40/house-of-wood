import { MouseEventHandler } from "react";
import { CheckIcon } from "@heroicons/react/solid";
import { Image as ImageIcon } from "react-feather";

interface TableHeadProps {
  headers: string[];
  onSelectAll: MouseEventHandler;
  isAllSelected: boolean;
}

const TableHead: React.FC<TableHeadProps> = (props) => {
  return (
    <thead className="text-left">
      <tr className="">
        <th className="">
          <div
            onClick={props.onSelectAll}
            className={`w-5 h-5 border border-gray-400 mx-auto cursor-pointer rounded ${
              props.isAllSelected && "bg-primary border-0"
            }`}
          >
            <CheckIcon className="w-5 h-5 text-white" />
          </div>
        </th>
        {props.headers.map((header, index) => {
          if (header == "description" || header == "id" || header == "rating") {
            return null;
          } else if (header == "finalPrice") {
            return (
              <th className="py-2" key={index}>
                {"Final Price"}
              </th>
            );
          } else if (header === "images")
            return (
              <th className="" key={index}>
                <ImageIcon className="mx-auto" />
              </th>
            );
          else
            return (
              <th className="capitalize py-2" key={index}>
                {header}
              </th>
            );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
