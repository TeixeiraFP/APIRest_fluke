const express = require("express");
const MiddlewareAuth = require("../Middleware/auth");
const router = express.Router();

const Portability = require("../models/Portability");

router.use(MiddlewareAuth);

router.post("/portabilityRequest", async (req, res) => {
  try {
    const portability = await Portability.create({
      ...req.body,
      user: req.userId,
    });

    return res.send({ portability });
  } catch (err) {
    return res.status(400).send({ error: "Error when doing portability" });
  }
});

router.get("/portabilities/:portabilityId", async (req, res) => {
  try {
    const portabilities = await Portability.findById(req.params.portabilityId);

    return res.send({ portabilities });
  } catch (err) {
    res.status(400).send({ error: "error loading your portabilities" });
  }
});

module.exports = (app) => app.use("/portability", router);
