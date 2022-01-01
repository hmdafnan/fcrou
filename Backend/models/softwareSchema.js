const mongoose = require("mongoose");

const SoftwareSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  image: {
    type: String
  }
}, {
  timestamps: true
});

const Software = mongoose.model("Software", SoftwareSchema);

module.exports = Software;