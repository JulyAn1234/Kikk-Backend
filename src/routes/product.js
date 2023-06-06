const express = require("express");
const ProductController = require("../controllers/product");
const OrderController = require("../controllers/order");
const ProductOnCartController = require("../controllers/productOnCart");
const router = express.Router();

//Product Routes
router.get("/products", ProductController.getProducts);
router.get("/products/:id", ProductController.getProductById);
router.post("/products", ProductController.createProduct);
router.put("/products/:id", ProductController.updateProduct);
router.delete("/products/:id", ProductController.deleteProduct);
//trying again
//Order Routes
router.get("/orders", OrderController.getOrders);
router.get("/orders/:id", OrderController.getOrderById);
router.post("/orders", OrderController.createOrder);
router.put("/orders/:id", OrderController.updateOrder);
router.delete("/orders/:id", OrderController.deleteOrder);
//tryng...
//Cart Routes
router.post("/addtocart", ProductOnCartController.addToCart);
router.put("/quitonefromcart/:id", ProductOnCartController.quitOneFromCart);
router.delete("/deletefromcart/:id", ProductOnCartController.deleteCartProduct);
router.get("/cart", ProductOnCartController.getCart);
router.get("/cartcount", ProductOnCartController.getCartCount);

module.exports = router;