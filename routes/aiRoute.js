import express from "express";
import aiController from "../controller/aiController";

const router = express.Router();

router.get("/ask", aiController.getAskAi);

router.post("/ask", aiController.postAskAi);

export default router;
