import express from "express";
import productController from "../controller/productController";

const router = express.Router();

router.get("/", productController.getProducts);
router.get("/create", productController.getCreateProductPage);
router.get("/searchProduct", productController.getSearchProduct);
router.get("/updateProduct", productController.getUpdateProduct);
router.get("/deleteProduct", productController.getDeleteProduct);

router.post("/create", productController.createProduct);
router.post("/searchProduct", productController.postSearchProduct);
router.post("/updateProduct", productController.postUpdateProduct);
router.post("/deleteProduct", productController.deleteProduct);

export default router;
