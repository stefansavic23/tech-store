import express from "express";
import userController from "../controller/userController";

const router = express.Router();

router.get("/", userController.getUsers);
router.get("/user", userController.getUser);

router.post("/", userController.createUser);

export default router;
