const mongoose = require("../database/db");

const ProductSchema = new mongoose.Schema({
  gigas: {
    type: String,
    required: true,
  },
  minutes: {
    type: String,
    required: true,
  },
  sms: {
    type: String,
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
