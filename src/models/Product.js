const mongoose = require("../database/db");

const ProductSchema = new mongoose.Schema({
  giga: {
    type: Number,
    required: true,
  },
  minutes: {
    type: Number,
    required: true,
  },
  posts: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
