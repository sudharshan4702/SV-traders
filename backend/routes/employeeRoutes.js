const express = require("express");
const employeeController = require("../controllers/employeeController");
const route = express.Router();

route.get("/", employeeController.getAllEmployee);
route.get("/:id", employeeController.getEmployeeById);
route.post("/add", employeeController.addEmployee);
route.put("/update/:id", employeeController.updateEmployee);
route.delete("/delete/:id", employeeController.deleteEmployee);
module.exports = route;
