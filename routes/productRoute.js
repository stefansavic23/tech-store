const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

router.get("/", productController.getProducts);
router.get("/create", productController.getCreateProductPage);
router.get("/searchProduct", productController.getSearchProduct);
router.get("/deleteProduct", productController.getDeleteProduct);

router.post("/create", productController.createProduct);
router.post("/searchProduct", productController.postSearchProduct);

router.post("/deleteProduct", productController.deleteProduct);

router.put("/product/:id", productController.updateProduct);

module.exports = router;
