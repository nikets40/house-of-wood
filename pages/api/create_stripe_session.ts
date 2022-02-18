const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { products, email } = req.body;

  const transformedItems = products.map((product) => ({
    quantity: product.quantity,
    price_data: {
      currency: "inr",
      unit_amount: product.price * 73 * 100,
      product_data: {
        name: product.name,
        images: product.images,
      }
    }
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: transformedItems,
    success_url: `${process.env.HOST}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.HOST}/cart`,
    mode: "payment",
    metadata: {
      email,
      images: JSON.stringify(products.map((product) => product.images[0])),
    },
    shipping_address_collection: {
      allowed_countries: ["IN"],
    }
  });

  res.status(200).json({ sessionId: session.id });
};
