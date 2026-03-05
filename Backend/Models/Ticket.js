const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
    userId: String,
    date: String,
    ticketType: String,
    quantity: Number
});

module.exports = mongoose.model("Ticket", TicketSchema);