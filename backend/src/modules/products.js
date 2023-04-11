const ProductsModel = require('../models/product');

async function getAllProducts(req, res, next) {
  try {
    const allProducts = await ProductsModel.find({});
    res.json(allProducts);
  } catch (err) {
    console.error(err);
    next(err);
  }
}

module.exports = getAllProducts;