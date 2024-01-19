const mongoose = require("mongoose");

const paintSchema = new mongoose.Schema({
  paintName: {
    type: String,
    required: true,
  },

  paintType: {
    type: String,
    required: true,
  },
  paintPrice: {
    type: Number,
    required: true,
  },
  paintLitre: {
    type: Number,
    required: true,
  },

  paintColor: {
    type: String,
    required: true,
  },

  paintQuantity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("paint", paintSchema);
