require("dotenv").config();

const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");

const app = express();

const users = [
  {
    username: "admin",
    password: "admin",
  },
  {
    username: "nina",
    password: "nina",
  },
];

app.use(express.json());

app.use("/users", userRoute);

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
