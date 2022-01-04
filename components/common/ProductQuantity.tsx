import { connect } from "react-redux";
import { Dispatch } from "redux";
import { CartState } from "../../interfaces/reduxInterfaces";
import {
  decrementProductQuantity,
  incrementProductQuantity,
} from "../../redux/cart/cartActions";

interface ProdQuantityProps {
  quantity: number;
  productID: string;
  decrementProductQuantity: (productId: string) => void;
  incrementProductQuantity: (productId: string) => void;
}

const ProductQuantity: React.FC<ProdQuantityProps> = ({
  quantity,
  productID,
  decrementProductQuantity,
  incrementProductQuantity,
}) => {
  const increment = () => {
    incrementProductQuantity(productID);
  };
  const decrement = () => {
    if (quantity > 1) {
      decrementProductQuantity(productID);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <p className="py-3 px-6 bg-gray-300 rounded text-xl whitespace-nowrap ">
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

const mapStateToProps = (state: CartState, ownProps: any) => ({
  quantity: state?.products?.find((product) => product?.id === ownProps?.productID)
    ?.cartQuantity??1,
});
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    incrementProductQuantity: (productID: string) => {
      dispatch(incrementProductQuantity(productID));
    },
    decrementProductQuantity: (productID: string) => {
      dispatch(decrementProductQuantity(productID));
    },
  };
};

// export default connect(null, mapDispatchToProps)(ProductQuantity);
export default connect(mapStateToProps, mapDispatchToProps)(ProductQuantity);
