const mongoose = require("mongoose");

const TallySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
});

const Tally = mongoose.model("TallyPrice", TallySchema);

module.exports = Tally;