import { NextPage } from "next";
import PageBanner from "../components/common/PageBanner";
import React, { useState } from "react";
import { CartState } from "../interfaces/reduxInterfaces";
import { connect } from "react-redux";
import { ProductData } from "../interfaces/allProducts";
import { removeFromCart } from "../redux";
import ShoppingBag from "../components/cart/ShoppingBag";
import CartTotal from "../components/cart/CartTotal";

interface CartPageProps {
  products: ProductData[];
  removeFromCart: (productID: string) => void;
}

const Cart: NextPage<CartPageProps> = ({ products, removeFromCart }) => {
  const getCartTotal = () => {
    let total = 0;
    products.forEach((product) => {
      total += product.finalPrice * product.cartQuantity;
    });
    return total;
  };
  return (
    <div>
      <PageBanner page="Cart" />

      <div className="flex flex-col lg:flex-row gap-10 mt-20">
        {/* Shopping Bag */}
        <ShoppingBag products={products} className="flex-grow" />
        {/* Cart total */}

        <CartTotal totalPrice={getCartTotal()} className="flex-grow" />
      </div>
    </div>
  );
};



const mapStateToProps = (state: CartState) => {
  return {
    products: state?.products ?? [],
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    removeFromCart: (productID: string) => {
      dispatch(removeFromCart(productID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
