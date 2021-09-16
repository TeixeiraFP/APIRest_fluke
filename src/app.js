const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./controllers/userController")(app);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
