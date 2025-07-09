const Product = require("../models/Product");

exports.getAll = async (req, res) => {
  const { search } = req.query;
  const query = search
    ? { $or: [{ name: { $regex: search, $options: "i" } }, { category: { $regex: search, $options: "i" } }] }
    : {};
  const products = await Product.find(query);
  res.json(products);
};

exports.create = async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
};

exports.update = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
};

exports.remove = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.send("Product deleted");
};
