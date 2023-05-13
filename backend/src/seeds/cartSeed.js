require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const cart = require('../models/cart');



const seed = async () => {
  await cart.create({
    productName: 'Tomato Paste',
    uom: 'can',
    qty: 1,
    category: 'canned goods',
    checked: false,
    cartID: '1234',
    clearAll: false,
    id: '123466',
    preQty: 2,

  });
  console.log('product seeded in database!');

  mongoose.disconnect();
};
seed();