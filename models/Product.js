const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  productName: String,
  productPrice: String,
  productDescription: String,
});

module.export = Product;
