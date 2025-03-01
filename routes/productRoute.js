const express = require("express");
const router = express.Router();
const productController = require("../controller/productController.js");

router.get("/", productController.getProducts);
router.get("/:productToFind", productController.getProduct);

router.post("/create", productController.createProduct);

router.put("/product/:id", productController.updateProduct);

router.delete("/product/:id", productController.deleteProduct);

module.exports = router;
