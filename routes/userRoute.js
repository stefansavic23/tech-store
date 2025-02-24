const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", userController.getUsers);
router.get("/user", userController.getUser);

router.post("/", userController.createUser);

module.exports = router;
