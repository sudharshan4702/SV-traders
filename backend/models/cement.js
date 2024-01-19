const mongoose = require("mongoose");

const cementSchema = new mongoose.Schema({
  cementName: {
    type: String,
    required: true,
  },

  cementWeight: {
    type: Number,
    required: true,
  },
  cementPrice: {
    type: Number,
    required: true,
  },

  cementQuantity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("cement", cementSchema);
