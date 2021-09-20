//config
const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;

//midleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//routes
require("./controllers/authController")(app);
require("./controllers/packageController")(app);
require("./controllers/portabilityController")(app);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
