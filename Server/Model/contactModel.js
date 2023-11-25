const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  fullname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  message: {
    type: String,
  },
});

const Contact = mongoose.model("Contacts", contactSchema);

module.exports = Contact;
