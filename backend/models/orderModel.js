import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
    shippingAddress: {
      fullName: { type: String, reqired: true },
      address: { type: String, reqired: true },
      city: { type: String, reqired: true },
      postalCode: { type: String, reqired: true },
      country: { type: String, reqired: true },
    },
    paymentMethod: { type: String, required: true },
    user: { type: String, reqired: true },
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model("Order", orderSchema);
export default Order;
