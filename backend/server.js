//librarry importations
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

//project importations
const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const cementRoutes = require("./routes/cementRoutes");
const steelRoutes = require("./routes/steelRoutes");
const paintRoutes = require("./routes/paintRoutes");
const orderRoutes = require("./routes/orderRoutes");
const vendorRoutes = require("./routes/vendorRoutes");

// express app
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.use("/public", express.static("public"));
app.use(express.static("files"));

//routes use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authRoutes);
app.use("/cement", cementRoutes);
app.use("/steel", steelRoutes);
app.use("/paint", paintRoutes);
app.use("/employee", employeeRoutes);
app.use("/supplier", vendorRoutes);
app.use("/order", orderRoutes);

//routes

const port = process.env.PORT || 5000;
mongoose.set("strictQuery", true);
mongoose.connect(`mongodb://localhost:${process.env.MONGOOSE_PORT}/Shop`);

app.listen(port);
