const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth.json");
const User = require("../models/User");

const router = express.Router();

function tokenGeneration(params = {}) {
  return (token = jwt.sign(params, authConfig.secret, {
    expiresIn: 43200,
  }));
}

router.post("/registerNewCustomer", async (req, res) => {
  const { email } = req.body;
  try {
    if (await User.findOne({ email }))
      return res.status(400).send({ error: "User already exists" });

    const user = await User.create(req.body);

    user.password = undefined;

    return res.send({ user, token: tokenGeneration({ id: user.id }) });
  } catch (err) {
    return res.status(400).send({ error: "Registration failed" });
  }
});

router.post("/authentication", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) return res.status(400).send({ error: "User not found" });

  if (!(await bcrypt.compare(password, user.password)))
    return res.status(400).send({ error: "invalid password" });

  user.password = undefined;

  return res.send({ user, token: tokenGeneration({ id: user.id }) });
});

module.exports = (app) => app.use("/auth", router);
