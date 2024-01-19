const mongoose = require("mongoose");

const steelSchema = new mongoose.Schema({
  steelName: {
    type: String,
    required: true,
  },

  steelSize: {
    type: String,
    required: true,
  },
  steelPrice: {
    type: Number,
    required: true,
  },

  steelQuantity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("steel", steelSchema);
