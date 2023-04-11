const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  productName: String,
  uom: String,
  qty: Number,
});

const PRODUCT = mongoose.model('product', productSchema);

module.exports = PRODUCT;
