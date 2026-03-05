const router = require("express").Router();
const Ticket = require("../models/Ticket");
const HotelBooking = require("../models/HotelBooking");

// Book Zoo Ticket
router.post("/ticket", async (req, res) => {
    const booking = new Ticket(req.body);
    await booking.save();
    res.json({ message: "Zoo ticket booked!" });
});

// Book Hotel
router.post("/hotel", async (req, res) => {
    const booking = new HotelBooking(req.body);
    await booking.save();
    res.json({ message: "Hotel booked!" });
});

module.exports = router;