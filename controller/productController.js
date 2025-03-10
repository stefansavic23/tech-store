const Product = require("../model/product");

const getCreateProductPage = (req, res) => {
  res.render("createProduct");
};

const getSearchProduct = (req, res) => {
  res.render("searchProduct");
};

const getDeleteProduct = (req, res) => {
  res.render("deleteProduct");
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.render("products", { products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postSearchProduct = async (req, res) => {
  try {
    const productToSearch = req.body.searchName;

    const product = await Product.findOne({
      $text: { $search: productToSearch },
    });

    if (!product) {
      return res.status(500).render("error", { message: "Product not found" });
    }

    res.render("product", { product: product });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    //res.status(200).json(product);
    res.redirect("/products");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json("Product not found!");
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productToDelete = req.body.id;

    if (!productToDelete || res.status(200)) {
      return res.render("error", { message: "Product not found" });
    }

    const product = await Product.findByIdAndDelete({ _id: productToDelete });
    const products = await Product.find({});

    res.render("products", { products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCreateProductPage,
  getProducts,
  getSearchProduct,
  getDeleteProduct,
  postSearchProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
