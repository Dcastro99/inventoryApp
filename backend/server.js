'use strict';

//----------------DOTENV Config----------------//
require('dotenv').config();
const express = require('express');
const cors = require('cors');

//----------------CRUD----------------//
const { getAllProducts, addProduct, deleteProduct, updateProduct } = require('./src/modules/products.js');
const { addToCart,getAllCartProducts,deleteCartProduct  } = require('./src/modules/cart.js');
const { getAllCategories, addCategory, deleteCategory } = require('./src/modules/categories.js');

// -----------APP USING EXPRESS & JSON -------------//
const PORT = process.env.PORT || 3002;
const app = express();
app.use(cors());
app.use(express.json());

//------------- ROUTES -------------//

//------------- PRODUCT CRUD -------------//

app.get('/', getAllProducts);
app.post('/products', addProduct);
app.delete('/products/:id', deleteProduct);
app.put('/product/:id', updateProduct);

//------------- CART CRUD -------------//

app.get('/cart', getAllCartProducts);
app.post('/carts', addToCart);
app.delete('/cart/:id', deleteCartProduct);

//------------- CATEGORY CRUD -------------//

app.get('/categories', getAllCategories);
app.post('/categories', addCategory);
app.delete('/categories/:id', deleteCategory);


//------------- ERROR HANDLING -------------//

const notFoundHandler = require('./src/handlers/error404.js');
const errorHandler = require('./src/handlers/error500.js');

//------------ MONG-DB -------------//

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

app.get('/', (request, response) => {
  response.send('TESTING INVENTORY_APP!');
});

app.get('*', notFoundHandler);
app.use(errorHandler);


app.listen(PORT, () => console.log(`listening on ${PORT}`));
