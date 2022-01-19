const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
    default: 00,
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
