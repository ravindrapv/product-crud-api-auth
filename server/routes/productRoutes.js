const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const authMiddleware = require("../utils/authMiddleware");

router.get("/", authMiddleware, productController.getAllProducts);
router.post("/", authMiddleware, productController.createProduct);
router.put("/:id", authMiddleware, productController.updateProduct);
router.delete("/:id", authMiddleware, productController.deleteProduct);

module.exports = router;
