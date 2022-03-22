import mongoose from "mongoose";

const promoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    conjuction: { type: Boolean, required: true },
    formula: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Promo = mongoose.model("Promo", promoSchema);

export default Promo;
