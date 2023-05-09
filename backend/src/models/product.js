const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  productName: String,
  productCategory: String,
  uom: String,
  qty: Number,
  id: String,
  checked: Boolean,
});

const PRODUCT = mongoose.model('product', productSchema);

module.exports = PRODUCT;
