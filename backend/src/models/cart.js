const mongoose = require('mongoose');

const { Schema } = mongoose;

const cartSchema = new Schema({
  productName: String,
  category: String,
  uom: String,
  preQty: Number,
  qty: Number,
  id: String,
  checked: Boolean,
  cartId: String,
  clearAll: Boolean
});

const CART = mongoose.model('cart', cartSchema);

module.exports = CART;