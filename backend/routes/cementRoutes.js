const express = require("express");
const cementController = require("../controllers/cementController");
const route = express.Router();

route.get("/category/:productCategory", cementController.getCementByCategory);
route.get("/", cementController.getAllCement);
route.get("/:id", cementController.getCementById);
route.post("/add", cementController.createCement);
route.put("/update/:id", cementController.updateCement);
route.delete("/delete/:id", cementController.deleteCementById);
module.exports = route;
