const OrderService = require("../services/orders");

exports.getOrders = async (req, res) => {
  try {
    const orders = await OrderService.getOrder();
    res.json({
      orders: orders,
    });
  } catch (err) {
    console.error("err", err);
    res.status(500).json({
      message: "Orders were not retrieved",
    });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    let order = await OrderService.getOrderById(req.params.id);
    res.json({
      order: order,
    });
  } catch (err) {
    console.error("err", err);
    res.status(404).json({
      message: "Order was not found",
    });
  }
};

exports.createOrder = async (req, res) => {
  try {
    let orderSaved = await OrderService.createOrder(req.body);
    res.status(201).json({
      message: "Order created",
      orderSaved: orderSaved,
    });
  } catch (err) {
    console.error("err", err);
    res.status(400).json({
      message: "Was not able to create the order",
    });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const orderData = req.body;

    const updatedOrder = await OrderService.updateOrder(id, orderData);

    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal error" });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;

    await OrderService.deleteOrder(id);

    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal error" });
  }
};
