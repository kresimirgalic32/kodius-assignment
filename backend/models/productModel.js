import mongoose from "mongoose";
// import { saveShippingAddress } from "../../frontend/src/actions/cartActions";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
