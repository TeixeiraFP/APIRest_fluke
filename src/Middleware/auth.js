const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).send({ error: "No token provided" });

  const slices = authHeader.split(" ");

  if (!slices.length === 2)
    return res.status(401).send({ error: "Token error" });

  const [b, t] = slices;

  if (!/^Bearer$/i.test(b))
    return res.status(401).send({ error: "Token format invalid" });

  jwt.verify(t, authConfig.secret, (err, cod) => {
    if (err) return res.status(401).send({ error: "Token invalid" });

    req.userId = cod.id;

    return next();
  });
};
