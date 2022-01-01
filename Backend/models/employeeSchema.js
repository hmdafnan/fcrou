const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true
  },
  contact: {
      type: String,
      required: true
  }
}, {
  timestamps: true
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;