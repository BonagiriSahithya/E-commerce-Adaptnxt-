const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["admin", "customer"], default: "customer" }
});

module.exports = mongoose.model("User", userSchema);
