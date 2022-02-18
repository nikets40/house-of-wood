import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { ProductData } from "../../interfaces/allProducts";
import { CartState } from "../../interfaces/reduxInterfaces";
import { UserContext } from "../../lib/context";

const stripePromise = loadStripe(process.env.stripe_public_key);

const CartTotal: React.FC<{
  className?: string;
  totalPrice: number;
  products?: ProductData[];
}> = ({ className = "", totalPrice, products }) => {
  const userData = useContext(UserContext);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (userData?.username) {
      setIsUserLoggedIn(true);
    }
  }, [userData]);

  const createStripeCheckout = async () => {
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/create_stripe_session", {
      products,
      email: userData?.user.email,
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.sessionId,
    });

    if (result.error) {
      console.log(result.error);
      alert(result.error.message);
    }
  };

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
        <button
          className="w-full bg-[#444] text-white py-4 px-4 whitespace-nowrap text-lg my-4 active:scale-95 transition-all"
          onClick={
            isUserLoggedIn
              ? createStripeCheckout
              : () => {
                  router.push("/login");
                }
          }
        >
          {isUserLoggedIn ? "Proceed to Checkout" : "Login to Checkout"}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: CartState) => {
  return {
    products: state?.products ?? [],
  };
};

export default connect(mapStateToProps)(CartTotal);
