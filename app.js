require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.json());

app.set("views", path.join(__dirname, "/views"));
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/users", userRoute);
app.use("/products", productRoute);

app.get("/", (req, res) => {
  res.json("Welcome!");
});

app.get("/login", (req, res) => {
  res.render("login");
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(() => {
    console.log("Connection failed");
  });

app.listen(3000);
