const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

router.get("/", productController.getProducts);
router.get("/create", productController.getCreateProductPage);
router.get("/:productToFind", productController.getProduct);

router.post("/create", productController.createProduct);

router.put("/product/:id", productController.updateProduct);

router.delete("/product/:id", productController.deleteProduct);

module.exports = router;
