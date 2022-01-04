const CartTotal: React.FC<{ className?: string; totalPrice: number }> = ({
  className = "",
  totalPrice,
}) => {
    
  return (
    <div className={className}>
      <h4 className="text-3xl font-semibold text-[#444]">Cart Total</h4>
      <div className="mt-4 px-5 rounded border border-gray-400 flex flex-col items-center text-center">
        <div className="w-full flex justify-between px-5 pt-5 pb-2 text-xl font-semibold text-[#444]">
          <p className="whitespace-nowrap">
            <span className="font-normal">Subtotal:-</span> $
            {totalPrice.toFixed(2)}
          </p>
        </div>
        <div className="w-full bg-gray-400 h-[1px] mt-2" />
        <button className="w-full bg-[#444] text-white py-4 px-4 whitespace-nowrap text-lg my-4 active:scale-95 transition-all">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
