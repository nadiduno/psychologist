const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: Boolean,
    required: true,
  },
  cpf: {
    type: Boolean,
    required: true,
  },
  state: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Volunteer", volunteerSchema);