const mongoose = require("../database/db");

const TicketSchema = new mongoose.Schema({
  phone: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "processing",
  },
  portability: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Portability",
    required: true,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Ticket = mongoose.model("Ticket", TicketSchema);

module.exports = Ticket;
