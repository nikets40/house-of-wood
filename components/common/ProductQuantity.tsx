import { useState } from "react";

const ProductQuantity: React.FC = () => {
    const [quantity, setQuantity] = useState(1);
    const increment = () => {
      setQuantity(quantity + 1);
    };
    const decrement = () => {
      if (quantity > 0) setQuantity(quantity - 1);
    };
    return (
      <div className="flex items-center gap-2">
        <p className="py-3 px-6 bg-gray-300 rounded text-xl flex-nowrap ">
          {"Qty: "}
          {quantity}
        </p>
        <div className="flex flex-col gap-1">
          <div
            onClick={increment}
            className="bg-gray-300 px-2 rounded cursor-pointer"
          >
            <i className="arrow up h-2 w-2" />
          </div>
          <div
            onClick={decrement}
            className="bg-gray-300 px-2 rounded cursor-pointer"
          >
            <i className="arrow down h-2 w-2" />
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductQuantity;