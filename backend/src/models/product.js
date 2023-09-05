const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  user:String,
  productName: String,
  category: String,
  uom: String,
  qty: Number,
  id: String,
  checked: Boolean,
});

const PRODUCT = mongoose.model('product', productSchema);

module.exports = PRODUCT;
