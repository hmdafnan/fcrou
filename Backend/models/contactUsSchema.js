const mongoose = require("mongoose");

const ContactUsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phno: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
});

const Contact = mongoose.model("Contact", ContactUsSchema);

module.exports = Contact;