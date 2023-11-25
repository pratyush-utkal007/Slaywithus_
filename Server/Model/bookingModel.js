const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  serviceName: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: false,
  },
  phone: {
    type: String,
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },
  note: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  occupation: {
    type: String,
  },
  garmentsColor: [
    {
      type: String,
    },
  ],
  bodyBuilt: {
    type: String,
  },
  complexion: {
    type: String,
  },
  socialLink: {
    type: String,
  },
  favoriteCloset: {
    type: String,
  },
  message: {
    type: String,
  },
});

const Booking = mongoose.model("Appointment", bookingSchema);

module.exports = Booking;
