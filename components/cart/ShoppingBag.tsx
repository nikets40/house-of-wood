import { ProductData } from "../../interfaces/allProducts";
import ApplyCoupon from "./ApplyCoupon";
import CartItem from "./CartItem";

const ShoppingBag: React.FC<{ className?: string; products: ProductData[] }> =
  ({ className = "", products }) => {
    const divider = <div className="w-full h-[1px] bg-gray-300 my-8" />;
    return (
      <div className={className}>
        <h4 className="text-3xl font-semibold text-[#444]">Shopping Bag</h4>
        <div className="mt-4 rounded border border-gray-400 p-10 flex flex-col items-center text-center">
          {products?.length > 0 ? (
            <div className="w-full block ">
              {products.map((product, index) => (
                <div key={product.id}>
                  <CartItem productID={product.id} />
                  {index < products.length - 1 && divider}
                </div>
              ))}
            </div>
          ) : (
            <h3>No Products in Cart</h3>
          )}
        </div>
        <div className="mt-6" />
        <ApplyCoupon />
      </div>
    );
  };

export default ShoppingBag;
