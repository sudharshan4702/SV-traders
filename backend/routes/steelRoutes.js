const express = require("express");
const steelController = require("../controllers/steelController");
const route = express.Router();

route.get("/category/:productCategory", steelController.getSteelByCategory);
route.get("/", steelController.getAllSteel);
route.get("/:id", steelController.getSteelById);
route.post("/add", steelController.createSteel);
route.put("/update/:id", steelController.updateSteel);
route.delete("/delete/:id", steelController.deleteSteelById);
module.exports = route;
