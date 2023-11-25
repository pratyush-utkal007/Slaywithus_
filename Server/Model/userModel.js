const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  country: {
    type: Object,
    required: true,

  },
  state: {
    type: Object,
    required: true,

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

const User = mongoose.model("users", userSchema);

module.exports = User;
