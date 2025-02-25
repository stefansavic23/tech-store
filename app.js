require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");

const app = express();

app.use(express.json());

app.use("/users", userRoute);
app.use("/products", productRoute);

app.get("/", (req, res) => {
  res.json("Welcome!");
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
