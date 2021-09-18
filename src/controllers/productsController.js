const express = require("express");

const router = express.Router();

router.get("/currentePackage", (req, res) => {
  res.send({ Ok: true });
});

module.exports = (app) => app.use("/products", router);
