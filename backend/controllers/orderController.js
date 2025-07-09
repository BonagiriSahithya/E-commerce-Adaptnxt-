const Order = require("../models/Order");
const Cart = require("../models/Cart");

exports.placeOrder = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  if (!cart || cart.items.length === 0) return res.status(400).send("Cart is empty");

  await Order.create({ userId: req.user.id, items: cart.items });
  cart.items = [];
  await cart.save();

  res.send("Order placed");
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user.id }).populate("items.productId");
  res.json(orders);
};
