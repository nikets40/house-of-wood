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

  export default ApplyCoupon;