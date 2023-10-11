const mongoose = require('mongoose');

const { Schema } = mongoose;

const categoriesSchema = new Schema({
  user:String,
  category:String,
});

const CATEGORIES = mongoose.model('categories', categoriesSchema);

module.exports = CATEGORIES;