const mongoose = require("mongoose");

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

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
