import Product from "../model/product";

const getCreateProductPage = (req, res) => {
  res.render("createProduct");
};

const getSearchProduct = (req, res) => {
  res.render("searchProduct");
};

const getUpdateProduct = (req, res) => {
  res.render("updateProduct");
};

const getDeleteProduct = (req, res) => {
  res.render("deleteProduct");
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.render("products", { products });
  } catch (error) {
    res.status(500).render("error", { message: error.message });
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
    res.status(500).render("error", { message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.redirect("/products");
  } catch (error) {
    res.status(500).render("error", { message: error.message });
  }
};

const postUpdateProduct = async (req, res) => {
  try {
    const productToUpdate = req.body.id;
    /*
    if (!productToUpdate || res.status(200)) {
      return res.render("error", { message: "Product not found" });
    }
    */
    const product = await Product.findByIdAndUpdate(productToUpdate, req.body);
    const updatedProduct = await Product.findById(productToUpdate);

    res.render("product", { product: updatedProduct });
  } catch (error) {
    res.status(500).render("error", { message: error.message });
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
    res.status(500).render("error", { message: error.message });
  }
};

export {
  getCreateProductPage,
  getProducts,
  getSearchProduct,
  getUpdateProduct,
  getDeleteProduct,
  postSearchProduct,
  postUpdateProduct,
  createProduct,
  deleteProduct,
};
