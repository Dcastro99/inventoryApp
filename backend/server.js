'use strict';
//;/  (O_O) /;//
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.get('/', (request, response) => {
  response.send('TESTING INVENTORY_APP!');
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
