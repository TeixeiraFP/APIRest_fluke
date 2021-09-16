const mongoose = require("mongoose");

//config mongoose

const url = "mongodb://localhost/dbFluke";

mongoose.Promise = global.Promise;

mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => console.log(`Mongodb connected...`))
  .catch((err) => console.log(`Error connecting Mongodb ${err}`));

module.exports = mongoose;
