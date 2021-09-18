const express = require("express");
const MiddlewareAuth = require("../Middleware/auth");
const router = express.Router();

const Product = require("../models/Product");

router.use(MiddlewareAuth);

router.get("/currentePackage/:productId", async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId).populate(
      "user"
    );
    return res.send({ product });
  } catch (err) {
    return res.status(400).send({ error: "Error loading package" });
  }
});

router.post("/productsOrder", async (req, res) => {
  try {
    const product = await Product.create({ ...req.body, user: req.userId });

    return res.send({ product });
  } catch (err) {
    return res.status(400).send({ error: "Error buying new package" });
  }
});

module.exports = (app) => app.use("/products", router);
