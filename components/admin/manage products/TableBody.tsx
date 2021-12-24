import Image from "next/image";
import { CheckIcon } from "@heroicons/react/solid";
import { ProductData } from "../../../interfaces/allProducts";

interface TableBodyProps {
  products: ProductData[];
  filterKeys: string[];
  onProductSelect: (product: ProductData) => void;
  isProductSelected: (id: string) => boolean;
}

const TableBody: React.FC<TableBodyProps> = (props) => {
  return (
    <tbody>
      {props.products.map((product, index) => (
        <tr key={index} className="odd:bg-gray-100">
          <td>
            <div
              onClick={() => {
                props.onProductSelect(product);
              }}
              className={`w-5 h-5 border border-gray-400 rounded mx-auto cursor-pointer ${
                props.isProductSelected(product.id) && "bg-primary border-0"
              }`}
            >
              {props.isProductSelected(product.id) && (
                <CheckIcon className="w-5 h-5 text-white" />
              )}
            </div>
          </td>
          {Object.keys(product).map((key, index) => {
            const unit = getUnit(key);
            if (props.filterKeys.includes(key)) {
              return null;
            } 
            else if (key ==="brand"){
              return (
                <td className="max-w-[100px]" key={index}>
                <p className=" line-clamp-2 pr-8">
                  {product[key]}
                </p>
              </td>
              );
            }
            else if (key == "name") {
              return (
                <td className="max-w-[200px]" key={index}>
                  <p className=" hover:text-primary cursor-pointer line-clamp-2 pr-8">
                    {product[key]}
                  </p>
                </td>
              );
            } else if (key == "images") {
              return (
                <td className="" key={index}>
                  <div className="p-2 flex justify-center">
                    <Image
                      src={product[key][0]}
                      alt="productImage"
                      width="60px"
                      height="60px"
                      objectFit="contain"
                      className=""
                    />
                  </div>
                </td>
              );
            } else if (key == "quantity") {
              return (
                <td
                  key={index}
                  className={`${
                    (product[key] ?? 0) <= 3 ? "text-red-500" : "text-green-500"
                  } font-bold`}
                >
                  {product[key] ?? 0}
                </td>
              );
            } else if (key == "published") {
              return (
                <td className="" key={index}>
                  <div
                    className={`w-6 h-6 border border-gray-400 rounded ${
                      product[key] ? "bg-primary border-0" : ""
                    }`}
                  >
                    {product[key] && (
                      <CheckIcon className="w-6 h-6 text-white" />
                    )}
                  </div>
                </td>
              );
            } 
            else if (
              key == "price" ||
              key == "finalPrice" ||
              key == "discount"
            ) {
              return (
                <td key={index}>
                  {key != "discount" && unit}
                  {product[key]?.toFixed(2)}
                  {key == "discount" && unit}
                </td>
              );
            } else
              return (
                <td className="" key={index}>
                  {product[key]}
                </td>
              );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;

const getUnit = (key: string) => {
  if (key == "price" || key == "finalPrice") {
    return "$";
  } else if (key == "discount") {
    return "%";
  }
  return "";
};
