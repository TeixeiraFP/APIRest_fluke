const express = require("express");
const MiddlewareAuth = require("../Middleware/auth");
const router = express.Router();

router.use(MiddlewareAuth);
router.get("/currentePackage", (req, res) => {
  res.send({ Ok: true });
});

module.exports = (app) => app.use("/products", router);
