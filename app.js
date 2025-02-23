require("dotenv").config();

const express = require("express");
const bcrypt = require("bcrypt");

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

app.get("/products", (req, res) => {
  res.json("radi");
});

app.get("/users", async (req, res) => {
  const username = req.body.username;

  const chechUser = async () => {
    //const userPassword = req.body.password;
    const hashedPassword = await bcrypt.hash(users[0].password, 10);

    const userPassword = req.body.password;

    bcrypt.compare(userPassword, hashedPassword, function (err, result) {
      if (result) {
        return res.sendStatus(200);
      } else return res.sendStatus(406);
    });
  };

  chechUser();
});

app.listen(3000);
