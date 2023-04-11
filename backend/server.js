'use strict';

//----------------DOTENV Config----------------//
require('dotenv').config();
const express = require('express');
const cors = require('cors');

//----------------CRUD----------------//


// -----------APP USING EXPRESS & JSON -------------//
const PORT = process.env.PORT || 3002;
const app = express();
app.use(cors());
app.use(express.json());


//------------- ERROR HANDLING -------------//

const notFoundHandler = require('./src/handlers/404.js');
const errorHandler = require('./src/handlers/500.js');


app.get('/', (request, response) => {
  response.send('TESTING INVENTORY_APP!');
});

app.get('*', notFoundHandler);
app.use(errorHandler);


app.listen(PORT, () => console.log(`listening on ${PORT}`));
