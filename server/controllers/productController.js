const Product = require("../models/productModel");

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.createProduct = async (req, res) => {
  const productData = req.body;
  const newProduct = new Product(productData);
  await newProduct.save();
  res.json(newProduct);
};

exports.updateProduct = async (req, res) => {
  const productId = req.params.id;
  const updatedProductData = req.body;

  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    updatedProductData,
    { new: true }
  );

  res.json(updatedProduct);
};

exports.deleteProduct = async (req, res) => {
  const productId = req.params.id;
  await Product.findByIdAndDelete(productId);
  res.json({ message: "Product deleted successfully" });
};
