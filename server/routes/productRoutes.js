const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const verifyTokenAndRole = require("../utils/authMiddleware");

router.get(
  "/",
  verifyTokenAndRole(["user", "admin"]),
  productController.getAllProducts
);
router.get(
  "/:id",
  verifyTokenAndRole(["user", "admin"]),
  productController.getProductById
);
router.post(
  "/",
  verifyTokenAndRole(["admin"]),
  productController.createProduct
);
router.put(
  "/:id",
  verifyTokenAndRole(["admin"]),
  productController.updateProduct
);
router.delete(
  "/:id",
  verifyTokenAndRole(["admin"]),
  productController.deleteProduct
);

module.exports = router;
