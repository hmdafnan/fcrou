const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: ""
  },
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

const Products = mongoose.model("Products", ProductSchema);

module.exports = Products;

