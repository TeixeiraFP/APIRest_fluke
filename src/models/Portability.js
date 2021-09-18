const mongoose = require("../database/db");
const bcrypt = require("bcryptjs");

const PortabilitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cpf: {
    type: Number,
    unique: true,
    required: true,
    select: false,
  },
  phone: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// PortabilitySchema.pre("save", async function (next) {
//   const hash = await bcrypt.hash(this.cpf, 15);
//   this.cpf = hash;

//   next();
// });

const Portability = mongoose.model("Portability", PortabilitySchema);

module.exports = Portability;
