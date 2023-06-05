const Order = require("../models/order");

exports.getOrder = async () => {
  let orders = await Order.find().lean().exec();
  return orders;
};

exports.getOrderById = async (id) => {
  let order = await Order.findById(id).lean().exec();
  return order;
};

exports.createOrder = async (requestBody) => {
  const order = new Order({
    name: requestBody.name,
    address: requestBody.address,
    total: requestBody.total,
    cart: requestBody.cart,
  });
  return await order.save();
};

exports.updateOrder = async (id, orderData) => {
  return await Order.findByIdAndUpdate(id, orderData, {
    new: true,
  })
    .lean()
    .exec();
};

exports.deleteOrder = async (id) => {
  await Order.findByIdAndDelete(id).exec();
};
