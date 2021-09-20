const express = require("express");
const { Promise } = require("mongoose");
const MiddlewareAuth = require("../Middleware/auth");
const router = express.Router();

const Portability = require("../models/Portability");
const Ticket = require("../models/Ticket");

router.use(MiddlewareAuth);

router.post("/portabilityRequest", async (req, res) => {
  try {
    const { name, cpf, ticket } = req.body;

    const portability = await Portability.create({
      name,
      cpf,
      user: req.userId,
    });

    await Promise.all(
      ticket.map(async (ticket) => {
        const ticketPortability = new Ticket({
          ...ticket,
          portability: portability._id,
        });
        await ticketPortability.save();

        portability.ticket.push(ticketPortability);
      })
    );

    await portability.save();

    portability.cpf = undefined;

    return res.send({ portability });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "Error when doing portability" });
  }
});

router.get("/portabilities/:portabilityId", async (req, res) => {
  try {
    const portabilities = await Portability.findById(
      req.params.portabilityId
    ).populate(["user", "ticket"]);
    console.log(req.params.portabilityId);

    return res.send({ portabilities });
  } catch (err) {
    res.status(400).send({ error: "error loading your portabilities" });
  }
});

module.exports = (app) => app.use("/portability", router);
