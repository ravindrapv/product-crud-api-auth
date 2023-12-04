const Product = require("../models/productModel");

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get product by ID
exports.getProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  const productData = req.body;
  const newProduct = new Product(productData);

  try {
    await newProduct.save();
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
  const productId = req.params.id;
  const updatedProductData = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updatedProductData,
      { new: true }
    );

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    await Product.findByIdAndDelete(productId);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
