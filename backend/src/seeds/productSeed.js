require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const product = require('../models/product');



const seed = async () => {
  await product.create({
    productName: 'Tomato Paste',
    category: 'canned goods',
    uom: 'can',
    qty: 1,
    id: '1',
    checked: false,
  });
  console.log('product seeded in database!');

  mongoose.disconnect();
};
seed();
