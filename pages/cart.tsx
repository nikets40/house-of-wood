import { NextPage } from "next";
import PageBanner from "../components/common/PageBanner";
import Image from "next/dist/client/image";
import React, { useState } from "react";
import { XIcon } from "@heroicons/react/solid";

const Cart: NextPage = () => {
  return (
    <div>
      <PageBanner page="Cart" />

      <div className="flex flex-col lg:flex-row gap-10 mt-20">
        {/* Shopping Bag */}
        <ShoppingBag className="flex-grow" />
        {/* Cart total */}

        <CartTotal className="flex-grow" />
      </div>
    </div>
  );
};

export default Cart;

const ApplyCoupon: React.FC = () => {
  return (
    <div className="flex bg-gray-200 justify-between max-w-lg">
      <input
        type="text"
        placeholder="Coupon Code"
        maxLength={12}
        className="outline-none bg-transparent px-4 py-3 text-lg"
      />
      <button className="py-3 text-lg bg-[#444] text-white px-10 active:scale-95 transition-all">
        Apply Coupon
      </button>
    </div>
  );
};

const CartTotal: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={className}>
      <h4 className="text-3xl font-semibold text-[#444]">Cart Total</h4>
      <div className="mt-4 px-5 rounded border border-gray-400 flex flex-col items-center text-center">
        <div className="w-full flex justify-between px-5 pt-5 pb-2 text-xl font-semibold text-[#444]">
          <p>Subtotal</p>
          <p>$250.00</p>
        </div>
        <div className="w-full bg-gray-400 h-[1px] mt-2" />
        <div className="w-full flex items-center justify-between px-5 pt-5 pb-2 text-xl font-semibold text-[#444]">
          <p className="font-medium">Total</p>
          <p className="text-3xl">$250.00</p>
        </div>

        <button className="w-full bg-[#444] text-white py-4 text-lg my-4 active:scale-95 transition-all">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

const ShoppingBag: React.FC<{ className?: string }> = ({ className = "" }) => {
  const divider = <div className="w-full h-[1px] bg-gray-300 my-8" />;
  return (
    <div className={className}>
      <h4 className="text-3xl font-semibold text-[#444]">Shopping Bag</h4>
      <div className="mt-4 rounded border border-gray-400 p-10 flex flex-col items-center text-center">
        <div className="w-full block ">
          <CartItem />
          {divider}
          <CartItem />
          {divider}
          <CartItem />
        </div>
      </div>
      <div className="mt-6" />
      <ApplyCoupon />
    </div>
  );
};

const CartItem: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col sm:flex-row justify-between items-center gap-3">
      <XIcon className="absolute sm:relative top-0 right-0  w-8 h-8 text-gray-700  cursor-pointer" />
      <div className="relative w-[150px] h-[150px] sm:hidden md:inline-flex">
        <Image
          src="/static/images/product-sample.jpg"
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
      <div>
        <p className="mt-4 sm:mt-0 text-xl font-semibold text-[#1bb0ce]">
          Aqua Globes
        </p>
        <p className="mt-0 text-lg font-semibold">Price: $125</p>
      </div>
      <div className="mt-2" />
      <ProductQuantity />
      <p className="mt-4 sm:mt-0 text-lg font-semibold">Total: $125</p>
    </div>
  );
};

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
      <p className="py-3 px-6 bg-gray-300 rounded text-xl ">
        {"Quantity: "}
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
