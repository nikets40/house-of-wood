import { XIcon } from "@heroicons/react/solid";
import { ProductData } from "../../interfaces/allProducts";
import ProductQuantity from "../common/ProductQuantity";
import Image from "next/image";
import { removeFromCart } from "../../redux";
import { connect } from "react-redux";
import { CartState } from "../../interfaces/reduxInterfaces";
import toast from "react-hot-toast";

interface CartItemProps {
  product: ProductData;
  productID: string;
  totalPrice: number;
  removeFromCart: (productID: string) => void;
}
const CartItem: React.FC<CartItemProps> = ({ product, removeFromCart, totalPrice }) => {
  const handleProductRemove = () => {
    removeFromCart(product.id);
    toast.success("Product removed from cart", {position: "bottom-center"});
  };
  return (
    <div className="relative w-full flex flex-col sm:flex-row justify-between items-center gap-3">
      <XIcon
        onClick={handleProductRemove}
        className="absolute sm:relative top-0 right-0  w-8 h-8 text-gray-700  cursor-pointer"
      />
      <div className="relative w-[150px] h-[150px] sm:hidden md:inline-flex">
        <Image
          src={product.images[0]}
          layout="fill"
          objectFit="contain"
          alt=""
        />
      </div>
      <div className="sm:text-left">
        <p className="mt-4 sm:mt-0 text-xl font-semibold text-[#1bb0ce]">
          {product?.name}
        </p>
        <p className="mt-0 text-lg font-semibold">
          Price: ${product.finalPrice.toFixed(2)}
        </p>
      </div>
      <div className="mt-2 flex flex-col items-end gap-4">
        <ProductQuantity productID={product.id} />
        <p className="mt-4 sm:mt-0 text-lg font-semibold">
          Total: ${totalPrice.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

const mapstateToProps = (state: CartState, ownProps: any) => {
  const product = state.products.find(
    (product: ProductData) => product.id === ownProps.productID
  );
  return {
    product,
    totalPrice: product?.finalPrice * product?.cartQuantity,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    removeFromCart: (productID: string) => {
      dispatch(removeFromCart(productID));
    },
  };
};

export default connect(mapstateToProps, mapDispatchToProps)(CartItem);
