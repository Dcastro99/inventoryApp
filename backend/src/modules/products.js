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

async function addProduct(req, res, next) {
  console.log('adding product', req.body)
  try {

    const checkProduct = await ProductsModel.findOne({ productName: req.body.productName });


    if (!checkProduct) {
      const newProduct = await ProductsModel.create({
        ...req.body,
        productName: req.body.product_name,
        productCategory: req.body.product_category,
        uom: req.body.unit_of_measure,
        qty: req.body.product_quantity,
        id: req.body.id,
        checked: req.body.checked

      })
      res.status(200).send('Product created!')

      // console.log('user created!', newUser);
    } else {
      res.status(200).send('Product already exists!!');
    }
  } catch (e) {
    res.status(500).send('server error');
  }
}

module.exports = { getAllProducts, addProduct };