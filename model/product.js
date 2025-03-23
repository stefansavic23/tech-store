import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
      min: 3,
      max: 50,
    },
    price: {
      required: true,
      type: Number,
      min: 1,
    },
    description: {
      type: String,
      min: 10,
      max: 150,
    },
  },
  {
    timestamps: true,
  }
);

productSchema.index({ name: "text" });

const Product = mongoose.model("Product", productSchema);
export default Product;
