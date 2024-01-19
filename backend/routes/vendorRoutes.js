const express = require("express");
const vendorController = require("../controllers/vendorController");
const route = express.Router();

route.get("/", vendorController.getAllVendor);
route.get("/:id", vendorController.getVendorById);
route.post("/add", vendorController.addVendor);

route.delete("/delete/:id", vendorController.deleteVendorById);
module.exports = route;
