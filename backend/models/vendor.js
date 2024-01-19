const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  vendorGST: {
    type: String,
    required: true,
    unique: true,
  },

  vendorName: {
    type: String,
    required: true,
  },
  vendorPhone: {
    type: Number,
    required: true,
  },
  vendorCompany: {
    type: String,
    required: true,
  },

  paymentBending: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("vendor", vendorSchema);
