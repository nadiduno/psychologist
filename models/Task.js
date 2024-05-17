const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Volunteer", volunteerSchema);