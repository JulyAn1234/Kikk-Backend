const ProductOnCartService = require("../services/productsOnCart");

exports.getCart = async (req, res) => {
    try {
      const Cart = await ProductOnCartService.getCart();
      res.json({
        Cart: Cart,
      });
    } catch (err) {
      console.error("err", err);
      res.status(500).json({
        message: "Cart was not retrieved",
      });
    }
};

exports.getCartCount = async (req, res) => {
    try {
      const cartCount = await ProductOnCartService.getCartCount();
      res.json({
        cartCount: cartCount,
      });
    } catch (err) {
      console.error("err", err);
      res.status(500).json({
        message: "Cart count was not retrieved",
      });
    }
};

exports.addToCart = async (req, res) => {
    try {
      let productOnCartSaved = await ProductOnCartService.addToCart(req.body);
      res.status(201).json({
        message: "Product added to cart successfully",
        productOnCartSaved: productOnCartSaved,
      });
    } catch (err) {
      console.error("err", err);
      res.status(400).json({
        message: "Was not able to add to cart",
      });
    }
  };

exports.quitOneFromCart = async (req, res) => {
    try {
      let productDecreased = await ProductOnCartService.quitOneFromCart(req.params.id);
      res.status(200).json(productDecreased);
    } catch (err) {
      console.error("err", err);
      res.status(500).json({
        message: "Was not able to decrease product on cart",
      });
    }
  };

  exports.deleteCartProduct = async (req, res) => {
    try {
      await ProductOnCartService.deleteCartProduct(req.params.id);
      res.status(204).json();
    } catch (err) {
      console.error("err", err);
      res.status(500).json({
        message: "Was not able to delete product from cart",
      });
    }
  };