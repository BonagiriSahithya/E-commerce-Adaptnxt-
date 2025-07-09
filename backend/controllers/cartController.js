const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) cart = await Cart.create({ userId: req.user.id, items: [] });

  const index = cart.items.findIndex(i => i.productId.equals(productId));
  if (index > -1) cart.items[index].quantity += quantity;
  else cart.items.push({ productId, quantity });

  await cart.save();
  res.send("Item added to cart");
};

exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id }).populate("items.productId");
  res.json(cart || { items: [] });
};

exports.removeFromCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) return res.status(404).send("Cart not found");

  cart.items = cart.items.filter(i => !i.productId.equals(req.params.productId));
  await cart.save();
  res.send("Item removed");
};
