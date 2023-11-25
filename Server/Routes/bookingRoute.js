const express = require("express");
const { bookingController } = require("../Controllers/bookingController");

const router = express.Router();

// Booking & method POST
router.post("/", bookingController);

module.exports = router;
