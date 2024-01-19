const express = require("express");
const paintController = require("../controllers/paintController");
const route = express.Router();

route.get("/category/:productCategory", paintController.getPaintByCategory);
route.get("/", paintController.getAllPaint);
route.get("/:id", paintController.getPaintById);
route.post("/add", paintController.createPaint);
route.put("/update/:id", paintController.updatePaint);
route.delete("/delete/:id", paintController.deletePaintById);
module.exports = route;
