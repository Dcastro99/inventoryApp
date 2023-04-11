require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const product = require('../models/product');



const seed = async () => {
  await product.create({
    productName: 'Tomato Paste',
    uom: 'can',
    qty: 1,
  });
  console.log('product seeded in database!');

  mongoose.disconnect();
};
seed();
