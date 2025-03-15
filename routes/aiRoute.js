const express = require("express");
const router = express.Router();
const aiContorller = require("../controller/aiController");

router.get("/ask", aiContorller.getAskAi);

router.post("/ask", aiContorller.postAskAi)

module.exports = router;