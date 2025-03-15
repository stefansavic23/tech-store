require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const aiRoute = require("./routes/aiRoute");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/api/ai", aiRoute);

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/welcome", (req, res) => {
  res.render("welcome");
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
